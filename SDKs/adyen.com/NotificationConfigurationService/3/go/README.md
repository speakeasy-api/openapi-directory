# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/NotificationConfigurationService/3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.CreateNotificationConfigurationRequest{
        ConfigurationDetails: shared.NotificationConfigurationDetails{
            Active: false,
            APIVersion: 548814,
            Description: "provident",
            EventConfigs: []shared.NotificationEventConfiguration{
                shared.NotificationEventConfiguration{
                    EventType: "SCHEDULED_REFUNDS",
                    IncludeMode: "INCLUDE",
                },
                shared.NotificationEventConfiguration{
                    EventType: "SCHEDULED_REFUNDS",
                    IncludeMode: "INCLUDE",
                },
                shared.NotificationEventConfiguration{
                    EventType: "SCHEDULED_REFUNDS",
                    IncludeMode: "EXCLUDE",
                },
            },
            MessageFormat: "SOAP",
            NotificationID: 645894,
            NotifyPassword: "suscipit",
            NotifyURL: "iure",
            NotifyUsername: "magnam",
            SendActionHeader: false,
            SslProtocol: "TLSv13",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostCreateNotificationConfiguration(ctx, req, operations.PostCreateNotificationConfigurationSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationConfigurationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### General

* `PostCreateNotificationConfiguration` - Subscribe to notifications
* `PostDeleteNotificationConfigurations` - Delete a notification subscription configuration
* `PostGetNotificationConfiguration` - Get a notification subscription configuration
* `PostGetNotificationConfigurationList` - Get a list of notification subscription configurations
* `PostTestNotificationConfiguration` - Test a notification configuration
* `PostUpdateNotificationConfiguration` - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
