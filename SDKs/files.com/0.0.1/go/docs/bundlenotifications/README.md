# BundleNotifications

## Overview

Operations about bundle_notifications

### Available Operations

* [DeleteBundleNotificationsID](#deletebundlenotificationsid) - Delete Bundle Notification
* [GetBundleNotifications](#getbundlenotifications) - List Bundle Notifications
* [GetBundleNotificationsID](#getbundlenotificationsid) - Show Bundle Notification
* [PatchBundleNotificationsID](#patchbundlenotificationsid) - Update Bundle Notification
* [PostBundleNotifications](#postbundlenotifications) - Create Bundle Notification

## DeleteBundleNotificationsID

Delete Bundle Notification

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
    res, err := s.BundleNotifications.DeleteBundleNotificationsID(ctx, operations.DeleteBundleNotificationsIDRequest{
        ID: 471752,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBundleNotifications

List Bundle Notifications

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
    res, err := s.BundleNotifications.GetBundleNotifications(ctx, operations.GetBundleNotificationsRequest{
        BundleID: sdk.String("sit"),
        Cursor: sdk.String("expedita"),
        Filter: map[string]interface{}{
            "sed": "vel",
        },
        PerPage: sdk.Int(730442),
        SortBy: map[string]interface{}{
            "deserunt": "quam",
            "ipsum": "incidunt",
        },
        UserID: sdk.Int(186458),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleNotificationEntities != nil {
        // handle response
    }
}
```

## GetBundleNotificationsID

Show Bundle Notification

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
    res, err := s.BundleNotifications.GetBundleNotificationsID(ctx, operations.GetBundleNotificationsIDRequest{
        ID: 586784,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleNotificationEntity != nil {
        // handle response
    }
}
```

## PatchBundleNotificationsID

Update Bundle Notification

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
    res, err := s.BundleNotifications.PatchBundleNotificationsID(ctx, operations.PatchBundleNotificationsIDRequest{
        RequestBody: &operations.PatchBundleNotificationsIDRequestBody{
            NotifyOnRegistration: sdk.Bool(true),
            NotifyOnUpload: sdk.Bool(true),
        },
        ID: 807581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleNotificationEntity != nil {
        // handle response
    }
}
```

## PostBundleNotifications

Create Bundle Notification

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
    res, err := s.BundleNotifications.PostBundleNotifications(ctx, operations.PostBundleNotificationsRequestBody{
        BundleID: 1,
        NotifyOnRegistration: sdk.Bool(true),
        NotifyOnUpload: sdk.Bool(true),
        UserID: sdk.Int(1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleNotificationEntity != nil {
        // handle response
    }
}
```
