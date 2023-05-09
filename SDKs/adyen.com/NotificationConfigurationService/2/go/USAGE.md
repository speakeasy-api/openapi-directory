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