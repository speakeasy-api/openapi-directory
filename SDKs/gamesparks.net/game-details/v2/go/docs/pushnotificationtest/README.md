# PushNotificationTest

## Overview

Push Notification Test Controller

### Available Operations

* [TestPushAmazonNotificationsUsingPOST](#testpushamazonnotificationsusingpost) - testPushAmazonNotifications
* [TestPushAppleDevNotificationsUsingPOST](#testpushappledevnotificationsusingpost) - testPushAppleDevNotifications
* [TestPushAppleProdNotificationsUsingPOST](#testpushappleprodnotificationsusingpost) - testPushAppleProdNotifications
* [TestPushGoogleNotificationsUsingPOST](#testpushgooglenotificationsusingpost) - testPushGoogleNotifications
* [TestViberIntegrationNotificationsUsingPOST](#testviberintegrationnotificationsusingpost) - testViberIntegrationNotifications
* [TestViberProductionNotificationsUsingPOST](#testviberproductionnotificationsusingpost) - testViberProductionNotifications
* [TestWindows8NotificationsUsingPOST](#testwindows8notificationsusingpost) - testWindows8Notifications
* [TestWindowsPhone8NotificationsUsingPOST](#testwindowsphone8notificationsusingpost) - testWindowsPhone8Notifications

## TestPushAmazonNotificationsUsingPOST

testPushAmazonNotifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestPushAmazonNotificationsUsingPOST(ctx, operations.TestPushAmazonNotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("enim"),
            MessageID: sdk.String("accusamus"),
            PushID: sdk.String("delectus"),
            Subtitle: sdk.String("quidem"),
            Summary: sdk.String("provident"),
            Title: sdk.String("Miss"),
        },
        APIKey: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestPushAppleDevNotificationsUsingPOST

testPushAppleDevNotifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestPushAppleDevNotificationsUsingPOST(ctx, operations.TestPushAppleDevNotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("blanditiis"),
            MessageID: sdk.String("deleniti"),
            PushID: sdk.String("sapiente"),
            Subtitle: sdk.String("amet"),
            Summary: sdk.String("deserunt"),
            Title: sdk.String("Mrs."),
        },
        APIKey: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestPushAppleProdNotificationsUsingPOST

testPushAppleProdNotifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestPushAppleProdNotificationsUsingPOST(ctx, operations.TestPushAppleProdNotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("natus"),
            MessageID: sdk.String("omnis"),
            PushID: sdk.String("molestiae"),
            Subtitle: sdk.String("perferendis"),
            Summary: sdk.String("nihil"),
            Title: sdk.String("Mrs."),
        },
        APIKey: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestPushGoogleNotificationsUsingPOST

testPushGoogleNotifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestPushGoogleNotificationsUsingPOST(ctx, operations.TestPushGoogleNotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("id"),
            MessageID: sdk.String("labore"),
            PushID: sdk.String("labore"),
            Subtitle: sdk.String("suscipit"),
            Summary: sdk.String("natus"),
            Title: sdk.String("Miss"),
        },
        APIKey: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestViberIntegrationNotificationsUsingPOST

testViberIntegrationNotifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestViberIntegrationNotificationsUsingPOST(ctx, operations.TestViberIntegrationNotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("vero"),
            MessageID: sdk.String("aspernatur"),
            PushID: sdk.String("architecto"),
            Subtitle: sdk.String("magnam"),
            Summary: sdk.String("et"),
            Title: sdk.String("Ms."),
        },
        APIKey: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestViberProductionNotificationsUsingPOST

testViberProductionNotifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestViberProductionNotificationsUsingPOST(ctx, operations.TestViberProductionNotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("provident"),
            MessageID: sdk.String("quos"),
            PushID: sdk.String("sint"),
            Subtitle: sdk.String("accusantium"),
            Summary: sdk.String("mollitia"),
            Title: sdk.String("Dr."),
        },
        APIKey: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestWindows8NotificationsUsingPOST

testWindows8Notifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestWindows8NotificationsUsingPOST(ctx, operations.TestWindows8NotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("ad"),
            MessageID: sdk.String("eum"),
            PushID: sdk.String("dolor"),
            Subtitle: sdk.String("necessitatibus"),
            Summary: sdk.String("odit"),
            Title: sdk.String("Mrs."),
        },
        APIKey: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TestWindowsPhone8NotificationsUsingPOST

testWindowsPhone8Notifications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PushNotificationTest.TestWindowsPhone8NotificationsUsingPOST(ctx, operations.TestWindowsPhone8NotificationsUsingPOSTRequest{
        PushNotificationTestModel: shared.PushNotificationTestModel{
            CustomJSON: sdk.String("iure"),
            MessageID: sdk.String("doloribus"),
            PushID: sdk.String("debitis"),
            Subtitle: sdk.String("eius"),
            Summary: sdk.String("maxime"),
            Title: sdk.String("Ms."),
        },
        APIKey: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
