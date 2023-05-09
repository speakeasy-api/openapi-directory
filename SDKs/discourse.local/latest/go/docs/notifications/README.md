# Notifications

### Available Operations

* [GetNotifications](#getnotifications) - Get the notifications that belong to the current user
* [MarkNotificationsAsRead](#marknotificationsasread) - Mark notifications as read

## GetNotifications

Get the notifications that belong to the current user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Notifications.GetNotifications(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotifications200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MarkNotificationsAsRead

Mark notifications as read

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
    res, err := s.Notifications.MarkNotificationsAsRead(ctx, operations.MarkNotificationsAsReadRequestBody{
        ID: sdk.Int64(574325),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkNotificationsAsRead200ApplicationJSONObject != nil {
        // handle response
    }
}
```
