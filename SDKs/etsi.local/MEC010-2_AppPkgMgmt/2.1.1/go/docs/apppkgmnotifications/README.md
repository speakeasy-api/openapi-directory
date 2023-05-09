# AppPkgmNotifications

## Overview

App Package management notifications

### Available Operations

* [AppPkgNotificationPOST](#apppkgnotificationpost) - Registers a notification endpoint to notify application package operations

## AppPkgNotificationPOST

Registers a notification endpoint to notify application package operations

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
    res, err := s.AppPkgmNotifications.AppPkgNotificationPOST(ctx, shared.AppPkgNotification{
        Links: shared.AppPkgNotificationLinks{
            Subscription: shared.LinkType{
                Href: "http://familiar-commotion.net",
            },
        },
        AppDID: "cum",
        AppPkgID: "esse",
        ID: "39205929-396f-4ea7-996e-b10faaa2352c",
        NotificationType: shared.AppPkgNotificationTypeEnumAppPacakgeEnabled,
        OperationalState: shared.AppPkgNotificationOperationalStateEnumEnabled,
        SubscriptionID: "nemo",
        TimeStamp: shared.TimeStamp{
            NanoSeconds: 325047,
            Seconds: 570197,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
