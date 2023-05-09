# Notifications

## Overview

Operations about notifications

### Available Operations

* [DeleteNotificationsID](#deletenotificationsid) - Delete Notification
* [GetNotifications](#getnotifications) - List Notifications
* [GetNotificationsID](#getnotificationsid) - Show Notification
* [PatchNotificationsID](#patchnotificationsid) - Update Notification
* [PostNotifications](#postnotifications) - Create Notification

## DeleteNotificationsID

Delete Notification

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
    res, err := s.Notifications.DeleteNotificationsID(ctx, operations.DeleteNotificationsIDRequest{
        ID: 148268,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNotifications

List Notifications

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
    res, err := s.Notifications.GetNotifications(ctx, operations.GetNotificationsRequest{
        Cursor: sdk.String("ut"),
        Filter: map[string]interface{}{
            "voluptatem": "culpa",
            "expedita": "magnam",
            "consequatur": "esse",
            "ipsam": "sit",
        },
        FilterPrefix: map[string]interface{}{
            "quas": "repudiandae",
            "corporis": "et",
            "blanditiis": "ex",
        },
        GroupID: sdk.String("sed"),
        IncludeAncestors: sdk.Bool(false),
        Path: sdk.String("sit"),
        PerPage: sdk.Int(425508),
        SortBy: map[string]interface{}{
            "saepe": "error",
            "consequatur": "incidunt",
        },
        UserID: sdk.Int(968865),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationEntities != nil {
        // handle response
    }
}
```

## GetNotificationsID

Show Notification

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
    res, err := s.Notifications.GetNotificationsID(ctx, operations.GetNotificationsIDRequest{
        ID: 209750,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationEntity != nil {
        // handle response
    }
}
```

## PatchNotificationsID

Update Notification

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
    res, err := s.Notifications.PatchNotificationsID(ctx, operations.PatchNotificationsIDRequest{
        RequestBody: &operations.PatchNotificationsIDRequestBody{
            Message: sdk.String("custom notification email message"),
            NotifyOnCopy: sdk.Bool(false),
            NotifyOnDelete: sdk.Bool(true),
            NotifyOnDownload: sdk.Bool(true),
            NotifyOnMove: sdk.Bool(true),
            NotifyOnUpload: sdk.Bool(true),
            NotifyUserActions: sdk.Bool(false),
            Recursive: sdk.Bool(false),
            SendInterval: sdk.String("daily"),
            TriggerByShareRecipients: sdk.Bool(true),
            TriggeringFilenames: []string{
                "dicta",
                "architecto",
                "occaecati",
            },
            TriggeringGroupIds: []int{
                695270,
                539074,
            },
            TriggeringUserIds: []int{
                724148,
                948861,
                388867,
            },
        },
        ID: 2703,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationEntity != nil {
        // handle response
    }
}
```

## PostNotifications

Create Notification

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
    res, err := s.Notifications.PostNotifications(ctx, operations.PostNotificationsRequestBody{
        GroupID: sdk.Int(227084),
        Message: sdk.String("custom notification email message"),
        NotifyOnCopy: sdk.Bool(false),
        NotifyOnDelete: sdk.Bool(true),
        NotifyOnDownload: sdk.Bool(true),
        NotifyOnMove: sdk.Bool(true),
        NotifyOnUpload: sdk.Bool(true),
        NotifyUserActions: sdk.Bool(false),
        Path: sdk.String("deserunt"),
        Recursive: sdk.Bool(false),
        SendInterval: sdk.String("daily"),
        TriggerByShareRecipients: sdk.Bool(true),
        TriggeringFilenames: []string{
            "unde",
            "reiciendis",
        },
        TriggeringGroupIds: []int{
            833819,
            962771,
            914791,
        },
        TriggeringUserIds: []int{
            667285,
        },
        UserID: sdk.Int(696483),
        Username: sdk.String("Ike_Schulist64"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationEntity != nil {
        // handle response
    }
}
```
