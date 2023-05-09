# Notifications

### Available Operations

* [TryNotificationConfig](#trynotificationconfig) - Try sending a notifications

## TryNotificationConfig

Try sending a notifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Notifications.TryNotificationConfig(ctx, shared.Notification{
        CustomerioConfiguration: map[string]interface{}{
            "explicabo": "impedit",
            "aliquid": "quis",
        },
        NotificationType: shared.NotificationTypeEnumCustomerio,
        SendOnFailure: false,
        SendOnSuccess: false,
        SlackConfiguration: &shared.SlackNotificationConfiguration{
            Webhook: "ipsum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationRead != nil {
        // handle response
    }
}
```
