# TestHarness

## Overview

Test Harness Restv 2 Controller

### Available Operations

* [CreateTestHarnessScenarioUsingPOST](#createtestharnessscenariousingpost) - createTestHarnessScenario
* [DELETETestHarnessScenarioUsingDELETE](#deletetestharnessscenariousingdelete) - deleteTestHarnessScenario
* [GETTestHarnessScenarioUsingGET](#gettestharnessscenariousingget) - getTestHarnessScenario
* [GETTestHarnessScenariosUsingGET](#gettestharnessscenariosusingget) - getTestHarnessScenarios
* [UpdateTestHarnessScenarioUsingPUT](#updatetestharnessscenariousingput) - updateTestHarnessScenario

## CreateTestHarnessScenarioUsingPOST

createTestHarnessScenario

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TestHarness.CreateTestHarnessScenarioUsingPOST(ctx, operations.CreateTestHarnessScenarioUsingPOSTRequest{
        TestHarnessScenarioModel: shared.TestHarnessScenarioModel{
            ScenarioJSON: map[string]interface{}{
                "dolorem": "dolorem",
                "dolor": "qui",
            },
            ScenarioName: sdk.String("ipsum"),
        },
        APIKey: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestHarnessScenarioModel != nil {
        // handle response
    }
}
```

## DELETETestHarnessScenarioUsingDELETE

deleteTestHarnessScenario

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
    res, err := s.TestHarness.DELETETestHarnessScenarioUsingDELETE(ctx, operations.DELETETestHarnessScenarioUsingDELETERequest{
        APIKey: "excepturi",
        ScenarioName: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```

## GETTestHarnessScenarioUsingGET

getTestHarnessScenario

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
    res, err := s.TestHarness.GETTestHarnessScenarioUsingGET(ctx, operations.GETTestHarnessScenarioUsingGETRequest{
        APIKey: "voluptate",
        ScenarioName: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestHarnessScenarioModel != nil {
        // handle response
    }
}
```

## GETTestHarnessScenariosUsingGET

getTestHarnessScenarios

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
    res, err := s.TestHarness.GETTestHarnessScenariosUsingGET(ctx, operations.GETTestHarnessScenariosUsingGETRequest{
        APIKey: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestHarnessScenarioModels != nil {
        // handle response
    }
}
```

## UpdateTestHarnessScenarioUsingPUT

updateTestHarnessScenario

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TestHarness.UpdateTestHarnessScenarioUsingPUT(ctx, operations.UpdateTestHarnessScenarioUsingPUTRequest{
        TestHarnessScenarioModel: shared.TestHarnessScenarioModel{
            ScenarioJSON: map[string]interface{}{
                "dolorum": "numquam",
            },
            ScenarioName: sdk.String("veritatis"),
        },
        APIKey: "ipsa",
        ScenarioName: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestHarnessScenarioModel != nil {
        // handle response
    }
}
```
