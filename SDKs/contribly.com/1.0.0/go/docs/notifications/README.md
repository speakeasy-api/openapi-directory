# Notifications

## Overview

Notifications are templated email messages which can be sent to contributors. A notification might be used to request further information from a contributor or inform them when their contribution has been published.

### Available Operations

* [GetNotificationsContributionsIDPreview](#getnotificationscontributionsidpreview)

## GetNotificationsContributionsIDPreview

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
    res, err := s.Notifications.GetNotificationsContributionsIDPreview(ctx, operations.GetNotificationsContributionsIDPreviewRequest{
        ID: "da3f2ced-a7e2-43f2-a574-11faf4b7544e",
        Message: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationPreview != nil {
        // handle response
    }
}
```
