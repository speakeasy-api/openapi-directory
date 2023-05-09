# ExternalEvents

## Overview

Operations about external_events

### Available Operations

* [GetExternalEvents](#getexternalevents) - List External Events
* [GetExternalEventsID](#getexternaleventsid) - Show External Event
* [PostExternalEvents](#postexternalevents) - Create External Event

## GetExternalEvents

List External Events

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
    res, err := s.ExternalEvents.GetExternalEvents(ctx, operations.GetExternalEventsRequest{
        Cursor: sdk.String("quasi"),
        Filter: map[string]interface{}{
            "nulla": "excepturi",
            "voluptatibus": "nostrum",
        },
        FilterGt: map[string]interface{}{
            "quisquam": "saepe",
            "ea": "impedit",
            "corporis": "veniam",
            "aliquid": "inventore",
        },
        FilterGteq: map[string]interface{}{
            "ea": "quo",
            "consectetur": "recusandae",
        },
        FilterLt: map[string]interface{}{
            "minima": "eaque",
        },
        FilterLteq: map[string]interface{}{
            "libero": "aut",
            "aut": "deleniti",
            "impedit": "aliquam",
            "fugit": "accusamus",
        },
        FilterPrefix: map[string]interface{}{
            "non": "et",
        },
        PerPage: sdk.Int(677412),
        SortBy: map[string]interface{}{
            "placeat": "velit",
            "eum": "autem",
            "nobis": "quas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalEventEntities != nil {
        // handle response
    }
}
```

## GetExternalEventsID

Show External Event

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
    res, err := s.ExternalEvents.GetExternalEventsID(ctx, operations.GetExternalEventsIDRequest{
        ID: 829603,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalEventEntity != nil {
        // handle response
    }
}
```

## PostExternalEvents

Create External Event

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
    res, err := s.ExternalEvents.PostExternalEvents(ctx, operations.PostExternalEventsRequestBody{
        Body: "example",
        Status: operations.PostExternalEventsRequestBodyStatusEnumSkipped,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalEventEntity != nil {
        // handle response
    }
}
```
