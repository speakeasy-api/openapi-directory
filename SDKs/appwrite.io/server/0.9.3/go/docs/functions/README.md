# Functions

## Overview

The Functions Service allows you view, create and manage your Cloud Functions.

### Available Operations

* [FunctionsCreate](#functionscreate) - Create Function
* [FunctionsCreateExecution](#functionscreateexecution) - Create Execution
* [FunctionsCreateTag](#functionscreatetag) - Create Tag
* [FunctionsDelete](#functionsdelete) - Delete Function
* [FunctionsDeleteTag](#functionsdeletetag) - Delete Tag
* [FunctionsGet](#functionsget) - Get Function
* [FunctionsGetExecution](#functionsgetexecution) - Get Execution
* [FunctionsGetTag](#functionsgettag) - Get Tag
* [FunctionsList](#functionslist) - List Functions
* [FunctionsListExecutions](#functionslistexecutions) - List Executions
* [FunctionsListTags](#functionslisttags) - List Tags
* [FunctionsUpdate](#functionsupdate) - Update Function
* [FunctionsUpdateTag](#functionsupdatetag) - Update Function Tag

## FunctionsCreate

Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.

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
    res, err := s.Functions.FunctionsCreate(ctx, operations.FunctionsCreateRequestBody{
        Events: []string{
            "cum",
            "perferendis",
        },
        Execute: []string{
            "reprehenderit",
        },
        Name: "Shawna Carter",
        Runtime: "iusto",
        Schedule: sdk.String("dicta"),
        Timeout: sdk.Int64(688661),
        Vars: map[string]interface{}{
            "accusamus": "commodi",
            "repudiandae": "quae",
        },
    }, operations.FunctionsCreateSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Function != nil {
        // handle response
    }
}
```

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
            Data: sdk.String("ipsum"),
        },
        FunctionID: "quidem",
    }, operations.FunctionsCreateExecutionSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## FunctionsCreateTag

Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).

Use the "command" param to set the entry point used to execute your code.

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
    res, err := s.Functions.FunctionsCreateTag(ctx, operations.FunctionsCreateTagRequest{
        RequestBody: &operations.FunctionsCreateTagRequestBody{
            Code: "molestias",
            Command: "excepturi",
        },
        FunctionID: "pariatur",
    }, operations.FunctionsCreateTagSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## FunctionsDelete

Delete a function by its unique ID.

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
    res, err := s.Functions.FunctionsDelete(ctx, operations.FunctionsDeleteRequest{
        FunctionID: "modi",
    }, operations.FunctionsDeleteSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FunctionsDeleteTag

Delete a code tag by its unique ID.

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
    res, err := s.Functions.FunctionsDeleteTag(ctx, operations.FunctionsDeleteTagRequest{
        FunctionID: "praesentium",
        TagID: "rem",
    }, operations.FunctionsDeleteTagSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FunctionsGet

Get a function by its unique ID.

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
    res, err := s.Functions.FunctionsGet(ctx, operations.FunctionsGetRequest{
        FunctionID: "voluptates",
    }, operations.FunctionsGetSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Function != nil {
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
        ExecutionID: "quasi",
        FunctionID: "repudiandae",
    }, operations.FunctionsGetExecutionSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## FunctionsGetTag

Get a code tag by its unique ID.

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
    res, err := s.Functions.FunctionsGetTag(ctx, operations.FunctionsGetTagRequest{
        FunctionID: "sint",
        TagID: "veritatis",
    }, operations.FunctionsGetTagSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## FunctionsList

Get a list of all the project's functions. You can use the query params to filter your results.

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
    res, err := s.Functions.FunctionsList(ctx, operations.FunctionsListRequest{
        Limit: sdk.Int(929297),
        Offset: sdk.Int(277718),
        OrderType: sdk.String("enim"),
        Search: sdk.String("consequatur"),
    }, operations.FunctionsListSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionList != nil {
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
        FunctionID: "est",
        Limit: sdk.Int(842342),
        Offset: sdk.Int(131797),
        OrderType: sdk.String("deserunt"),
        Search: sdk.String("distinctio"),
    }, operations.FunctionsListExecutionsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## FunctionsListTags

Get a list of all the project's code tags. You can use the query params to filter your results.

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
    res, err := s.Functions.FunctionsListTags(ctx, operations.FunctionsListTagsRequest{
        FunctionID: "quibusdam",
        Limit: sdk.Int(289406),
        Offset: sdk.Int(264730),
        OrderType: sdk.String("qui"),
        Search: sdk.String("aliquid"),
    }, operations.FunctionsListTagsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagList != nil {
        // handle response
    }
}
```

## FunctionsUpdate

Update function by its unique ID.

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
    res, err := s.Functions.FunctionsUpdate(ctx, operations.FunctionsUpdateRequest{
        RequestBody: &operations.FunctionsUpdateRequestBody{
            Events: []string{
                "quos",
                "perferendis",
                "magni",
            },
            Execute: []string{
                "ipsam",
                "alias",
                "fugit",
                "dolorum",
            },
            Name: "Eddie Prosacco",
            Schedule: sdk.String("delectus"),
            Timeout: sdk.Int64(433288),
            Vars: map[string]interface{}{
                "eligendi": "sint",
            },
        },
        FunctionID: "aliquid",
    }, operations.FunctionsUpdateSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Function != nil {
        // handle response
    }
}
```

## FunctionsUpdateTag

Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.

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
    res, err := s.Functions.FunctionsUpdateTag(ctx, operations.FunctionsUpdateTagRequest{
        RequestBody: &operations.FunctionsUpdateTagRequestBody{
            Tag: "provident",
        },
        FunctionID: "necessitatibus",
    }, operations.FunctionsUpdateTagSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Function != nil {
        // handle response
    }
}
```
