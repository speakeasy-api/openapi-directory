# Automations

## Overview

Operations about automations

### Available Operations

* [DeleteAutomationsID](#deleteautomationsid) - Delete Automation
* [GetAutomations](#getautomations) - List Automations
* [GetAutomationsID](#getautomationsid) - Show Automation
* [PatchAutomationsID](#patchautomationsid) - Update Automation
* [PostAutomations](#postautomations) - Create Automation

## DeleteAutomationsID

Delete Automation

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
    res, err := s.Automations.DeleteAutomationsID(ctx, operations.DeleteAutomationsIDRequest{
        ID: 592042,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAutomations

List Automations

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
    res, err := s.Automations.GetAutomations(ctx, operations.GetAutomationsRequest{
        Automation: sdk.String("necessitatibus"),
        Cursor: sdk.String("sint"),
        Filter: map[string]interface{}{
            "dolor": "debitis",
            "a": "dolorum",
            "in": "in",
        },
        FilterGt: map[string]interface{}{
            "maiores": "rerum",
            "dicta": "magnam",
            "cumque": "facere",
            "ea": "aliquid",
        },
        FilterGteq: map[string]interface{}{
            "accusamus": "non",
            "occaecati": "enim",
            "accusamus": "delectus",
        },
        FilterLt: map[string]interface{}{
            "provident": "nam",
            "id": "blanditiis",
            "deleniti": "sapiente",
        },
        FilterLteq: map[string]interface{}{
            "deserunt": "nisi",
        },
        PerPage: sdk.Int(423855),
        SortBy: map[string]interface{}{
            "omnis": "molestiae",
            "perferendis": "nihil",
            "magnam": "distinctio",
        },
        WithDeleted: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomationEntities != nil {
        // handle response
    }
}
```

## GetAutomationsID

Show Automation

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
    res, err := s.Automations.GetAutomationsID(ctx, operations.GetAutomationsIDRequest{
        ID: 660174,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomationEntity != nil {
        // handle response
    }
}
```

## PatchAutomationsID

Update Automation

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
    res, err := s.Automations.PatchAutomationsID(ctx, operations.PatchAutomationsIDRequest{
        RequestBody: &operations.PatchAutomationsIDRequestBody{
            Automation: operations.PatchAutomationsIDRequestBodyAutomationEnumCreateFolder.ToPointer(),
            Description: sdk.String("example"),
            Destination: sdk.String("labore"),
            DestinationReplaceFrom: sdk.String("labore"),
            DestinationReplaceTo: sdk.String("suscipit"),
            Destinations: []string{
                "nobis",
                "eum",
                "vero",
            },
            Disabled: sdk.Bool(true),
            GroupIds: sdk.String("aspernatur"),
            Interval: sdk.String("year"),
            Name: sdk.String("example"),
            Path: sdk.String("architecto"),
            RecurringDay: sdk.Int(25),
            Schedule: map[string]interface{}{
                "et": "excepturi",
                "ullam": "provident",
            },
            Source: sdk.String("source"),
            SyncIds: sdk.String("quos"),
            Trigger: operations.PatchAutomationsIDRequestBodyTriggerEnumRealtime.ToPointer(),
            TriggerActions: []string{
                "accusantium",
                "mollitia",
                "reiciendis",
            },
            UserIds: sdk.String("mollitia"),
            Value: map[string]interface{}{
                "eum": "dolor",
                "necessitatibus": "odit",
            },
        },
        ID: 367562,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomationEntity != nil {
        // handle response
    }
}
```

## PostAutomations

Create Automation

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
    res, err := s.Automations.PostAutomations(ctx, operations.PostAutomationsRequestBody{
        Automation: operations.PostAutomationsRequestBodyAutomationEnumCreateFolder,
        Description: sdk.String("example"),
        Destination: sdk.String("quasi"),
        DestinationReplaceFrom: sdk.String("iure"),
        DestinationReplaceTo: sdk.String("doloribus"),
        Destinations: []string{
            "eius",
            "maxime",
            "deleniti",
            "facilis",
        },
        Disabled: sdk.Bool(true),
        GroupIds: sdk.String("in"),
        Interval: sdk.String("year"),
        Name: sdk.String("example"),
        Path: sdk.String("architecto"),
        RecurringDay: sdk.Int(25),
        Schedule: map[string]interface{}{
            "repudiandae": "ullam",
        },
        Source: sdk.String("source"),
        SyncIds: sdk.String("expedita"),
        Trigger: operations.PostAutomationsRequestBodyTriggerEnumRealtime.ToPointer(),
        TriggerActions: []string{
            "repellat",
            "quibusdam",
        },
        UserIds: sdk.String("sed"),
        Value: map[string]interface{}{
            "pariatur": "accusantium",
            "consequuntur": "praesentium",
            "natus": "magni",
            "sunt": "quo",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutomationEntity != nil {
        // handle response
    }
}
```
