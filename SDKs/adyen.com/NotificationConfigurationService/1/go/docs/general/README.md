# General

### Available Operations

* [PostCreateNotificationConfiguration](#postcreatenotificationconfiguration) - Subscribe to notifications
* [PostDeleteNotificationConfigurations](#postdeletenotificationconfigurations) - Delete a notification subscription configuration
* [PostGetNotificationConfiguration](#postgetnotificationconfiguration) - Get a notification subscription configuration
* [PostGetNotificationConfigurationList](#postgetnotificationconfigurationlist) - Get a list of notification subscription configurations
* [PostTestNotificationConfiguration](#posttestnotificationconfiguration) - Test a notification configuration
* [PostUpdateNotificationConfiguration](#postupdatenotificationconfiguration) - Update a notification subscription configuration

## PostCreateNotificationConfiguration

Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.

### Example Usage

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
            APIVersion: sdk.Int(56713),
            Description: sdk.String("delectus"),
            EventConfigs: []shared.NotificationEventConfigurationWrapper{
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumAccountHolderUpcomingDeadline,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumExclude,
                    },
                },
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumRefundFundsTransfer,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumInclude,
                    },
                },
            },
            MessageFormat: shared.NotificationConfigurationDetailsMessageFormatEnumSoap.ToPointer(),
            NotificationID: sdk.Int64(479977),
            NotifyPassword: sdk.String("excepturi"),
            NotifyURL: sdk.String("nisi"),
            NotifyUsername: sdk.String("recusandae"),
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

## PostDeleteNotificationConfigurations

Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.

### Example Usage

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
    res, err := s.General.PostDeleteNotificationConfigurations(ctx, shared.DeleteNotificationConfigurationRequest{
        NotificationIds: []int64{
            337396,
        },
    }, operations.PostDeleteNotificationConfigurationsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostGetNotificationConfiguration

Returns the details of the configuration of a notification subscription.

### Example Usage

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
    res, err := s.General.PostGetNotificationConfiguration(ctx, shared.GetNotificationConfigurationRequest{
        NotificationID: 87129,
    }, operations.PostGetNotificationConfigurationSecurity{
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

## PostGetNotificationConfigurationList

Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.

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
    res, err := s.General.PostGetNotificationConfigurationList(ctx, map[string]interface{}{
        "perferendis": "ipsam",
        "repellendus": "sapiente",
        "quo": "odit",
    }, operations.PostGetNotificationConfigurationListSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationConfigurationListResponse != nil {
        // handle response
    }
}
```

## PostTestNotificationConfiguration

Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.

### Example Usage

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
    res, err := s.General.PostTestNotificationConfiguration(ctx, shared.TestNotificationConfigurationRequest{
        EventTypes: []shared.TestNotificationConfigurationRequestEventTypesEnum{
            shared.TestNotificationConfigurationRequestEventTypesEnumScheduledRefunds,
            shared.TestNotificationConfigurationRequestEventTypesEnumTransferNotPaidoutTransfers,
            shared.TestNotificationConfigurationRequestEventTypesEnumAccountHolderVerification,
            shared.TestNotificationConfigurationRequestEventTypesEnumRefundFundsTransfer,
        },
        NotificationID: 800911,
    }, operations.PostTestNotificationConfigurationSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestNotificationConfigurationResponse != nil {
        // handle response
    }
}
```

## PostUpdateNotificationConfiguration

Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.

### Example Usage

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
    res, err := s.General.PostUpdateNotificationConfiguration(ctx, shared.UpdateNotificationConfigurationRequest{
        ConfigurationDetails: shared.NotificationConfigurationDetails{
            Active: sdk.Bool(false),
            APIVersion: sdk.Int(461479),
            Description: sdk.String("totam"),
            EventConfigs: []shared.NotificationEventConfigurationWrapper{
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumFundsMigrated,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumExclude,
                    },
                },
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumPendingCredit,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumInclude,
                    },
                },
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumCompensateNegativeBalance,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumExclude,
                    },
                },
                shared.NotificationEventConfigurationWrapper{
                    NotificationEventConfiguration: &shared.NotificationEventConfiguration{
                        EventType: shared.NotificationEventConfigurationEventTypeEnumBeneficiarySetup,
                        IncludeMode: shared.NotificationEventConfigurationIncludeModeEnumInclude,
                    },
                },
            },
            MessageFormat: shared.NotificationConfigurationDetailsMessageFormatEnumSoap.ToPointer(),
            NotificationID: sdk.Int64(521848),
            NotifyPassword: sdk.String("beatae"),
            NotifyURL: sdk.String("commodi"),
            NotifyUsername: sdk.String("molestiae"),
            SendActionHeader: sdk.Bool(false),
            SslProtocol: shared.NotificationConfigurationDetailsSslProtocolEnumTlSv12.ToPointer(),
        },
    }, operations.PostUpdateNotificationConfigurationSecurity{
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
