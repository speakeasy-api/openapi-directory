# ActionNotificationExports

## Overview

Operations about action_notification_exports

### Available Operations

* [GetActionNotificationExportsID](#getactionnotificationexportsid) - Show Action Notification Export
* [PostActionNotificationExports](#postactionnotificationexports) - Create Action Notification Export

## GetActionNotificationExportsID

Show Action Notification Export

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
    res, err := s.ActionNotificationExports.GetActionNotificationExportsID(ctx, operations.GetActionNotificationExportsIDRequest{
        ID: 423655,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportEntity != nil {
        // handle response
    }
}
```

## PostActionNotificationExports

Create Action Notification Export

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ActionNotificationExports.PostActionNotificationExports(ctx, operations.PostActionNotificationExportsRequestBody{
        EndAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        QueryFolder: sdk.String("MyFolder"),
        QueryMessage: sdk.String("Connection Refused"),
        QueryPath: sdk.String("MyFile.txt"),
        QueryRequestMethod: sdk.String("GET"),
        QueryRequestURL: sdk.String("http://example.com/webhook"),
        QueryStatus: sdk.String("200"),
        QuerySuccess: sdk.Bool(true),
        StartAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        UserID: sdk.Int(623564),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportEntity != nil {
        // handle response
    }
}
```
