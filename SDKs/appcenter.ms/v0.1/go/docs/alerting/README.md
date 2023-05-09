# Alerting

### Available Operations

* [BugTrackerGetRepoIssueFromCrash](#bugtrackergetrepoissuefromcrash) - Get project issue related to a crash group
* [BugtrackerGetSettings](#bugtrackergetsettings) - Get bug tracker settings for a particular app
* [NotificationsGetAppEmailSettings](#notificationsgetappemailsettings) - Get Email notification settings of user for a particular app
* [NotificationsGetUserEmailSettings](#notificationsgetuseremailsettings) - Get Default email notification settings for the user
* [WebhooksList](#webhookslist) - Get web hooks configured for a particular app

## BugTrackerGetRepoIssueFromCrash

Get project issue related to a crash group

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
    res, err := s.Alerting.BugTrackerGetRepoIssueFromCrash(ctx, operations.BugTrackerGetRepoIssueFromCrashRequest{
        AppName: "soluta",
        CrashGroupID: "nobis",
        OwnerName: "et",
    }, operations.BugTrackerGetRepoIssueFromCrashSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BugTrackerGetRepoIssueFromCrash200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BugtrackerGetSettings

Get bug tracker settings for a particular app

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
    res, err := s.Alerting.BugtrackerGetSettings(ctx, operations.BugtrackerGetSettingsRequest{
        AppName: "saepe",
        OwnerName: "ipsum",
    }, operations.BugtrackerGetSettingsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BugtrackerGetSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## NotificationsGetAppEmailSettings

Get Email notification settings of user for a particular app

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
    res, err := s.Alerting.NotificationsGetAppEmailSettings(ctx, operations.NotificationsGetAppEmailSettingsRequest{
        AppName: "veritatis",
        OwnerName: "nobis",
    }, operations.NotificationsGetAppEmailSettingsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationsGetAppEmailSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## NotificationsGetUserEmailSettings

Get Default email notification settings for the user

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
    res, err := s.Alerting.NotificationsGetUserEmailSettings(ctx, operations.NotificationsGetUserEmailSettingsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationsGetUserEmailSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WebhooksList

Get web hooks configured for a particular app

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
    res, err := s.Alerting.WebhooksList(ctx, operations.WebhooksListRequest{
        AppName: "quos",
        OwnerName: "tempore",
    }, operations.WebhooksListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhooksList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
