# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/NotificationConfigurationService/1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostCreateNotificationConfiguration(ctx, shared.CreateNotificationConfigurationRequest{
        ConfigurationDetails: shared.NotificationConfigurationDetails{
            Active: sdk.Bool(false),
            APIVersion: sdk.Int(548814),
            Description: sdk.String("provident"),
            EventConfigs: []shared.NotificationEventConfigurationWrapper{
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumScheduledRefunds,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumInclude,
                    },
                },
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumScheduledRefunds,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumInclude,
                    },
                },
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumScheduledRefunds,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumExclude,
                    },
                },
            },
            MessageFormat: shared.NotificationConfigurationDetailsMessageFormatEnumSoap.ToPointer(),
            NotificationID: sdk.Int64(645894),
            NotifyPassword: sdk.String("suscipit"),
            NotifyURL: sdk.String("iure"),
            NotifyUsername: sdk.String("magnam"),
            SendActionHeader: sdk.Bool(false),
            SslProtocol: shared.NotificationConfigurationDetailsSslProtocolEnumTlSv13.ToPointer(),
        },
    }, operations.PostCreateNotificationConfigurationSecurity{
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


### [General](docs/general/README.md)

* [PostCreateNotificationConfiguration](docs/general/README.md#postcreatenotificationconfiguration) - Subscribe to notifications
* [PostDeleteNotificationConfigurations](docs/general/README.md#postdeletenotificationconfigurations) - Delete a notification subscription configuration
* [PostGetNotificationConfiguration](docs/general/README.md#postgetnotificationconfiguration) - Get a notification subscription configuration
* [PostGetNotificationConfigurationList](docs/general/README.md#postgetnotificationconfigurationlist) - Get a list of notification subscription configurations
* [PostTestNotificationConfiguration](docs/general/README.md#posttestnotificationconfiguration) - Test a notification configuration
* [PostUpdateNotificationConfiguration](docs/general/README.md#postupdatenotificationconfiguration) - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
