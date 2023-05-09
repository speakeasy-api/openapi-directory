# AutomationRuns

## Overview

Operations about automation_runs

### Available Operations

* [GetAutomationRuns](#getautomationruns) - List Automation Runs
* [GetAutomationRunsID](#getautomationrunsid) - Show Automation Run

## GetAutomationRuns

List Automation Runs

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
    res, err := s.AutomationRuns.GetAutomationRuns(ctx, operations.GetAutomationRunsRequest{
        AutomationID: 369808,
        Cursor: sdk.String("alias"),
        Filter: map[string]interface{}{
            "dolorum": "excepturi",
        },
        PerPage: sdk.Int(270008),
        SortBy: map[string]interface{}{
            "tempore": "labore",
            "delectus": "eum",
            "non": "eligendi",
        },
        UserID: sdk.Int(576157),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomationRunEntities != nil {
        // handle response
    }
}
```

## GetAutomationRunsID

Show Automation Run

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
    res, err := s.AutomationRuns.GetAutomationRunsID(ctx, operations.GetAutomationRunsIDRequest{
        ID: 396098,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomationRunEntity != nil {
        // handle response
    }
}
```
