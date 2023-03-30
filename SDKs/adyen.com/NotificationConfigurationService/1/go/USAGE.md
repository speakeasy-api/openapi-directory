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

    req := operations.PostCreateNotificationConfigurationRequest{
        Security: operations.PostCreateNotificationConfigurationSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.CreateNotificationConfigurationRequest{
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
        },
    }

    ctx := context.Background()
    res, err := s.General.PostCreateNotificationConfiguration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationConfigurationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->