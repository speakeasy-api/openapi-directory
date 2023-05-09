# Functions

## Overview

The Functions Service allows you view, create and manage your Cloud Functions.

### Available Operations

* [FunctionsCreateExecution](#functionscreateexecution) - Create Execution
* [FunctionsGetExecution](#functionsgetexecution) - Get Execution
* [FunctionsListExecutions](#functionslistexecutions) - List Executions

## FunctionsCreateExecution

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Functions.FunctionsCreateExecution(ctx, operations.FunctionsCreateExecutionRequest{
        RequestBody: &operations.FunctionsCreateExecutionRequestBody{
            Data: sdk.String("omnis"),
        },
        FunctionID: "voluptate",
    }, operations.FunctionsCreateExecutionSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## FunctionsGetExecution

Get a function execution log by its unique ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Functions.FunctionsGetExecution(ctx, operations.FunctionsGetExecutionRequest{
        ExecutionID: "cum",
        FunctionID: "perferendis",
    }, operations.FunctionsGetExecutionSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Execution != nil {
        // handle response
    }
}
```

## FunctionsListExecutions

Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Functions.FunctionsListExecutions(ctx, operations.FunctionsListExecutionsRequest{
        FunctionID: "doloremque",
        Limit: sdk.Int(441711),
        Offset: sdk.Int(282807),
        OrderType: sdk.String("maiores"),
        Search: sdk.String("dicta"),
    }, operations.FunctionsListExecutionsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecutionList != nil {
        // handle response
    }
}
```
