# SDK

## Overview

With License Manager, you can discover and track your commercial Linux subscriptions on running Amazon EC2 instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager-linux-subscriptions/>
### Available Operations

* [GetServiceSettings](#getservicesettings) - Lists the Linux subscriptions service settings.
* [ListLinuxSubscriptionInstances](#listlinuxsubscriptioninstances) - Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
* [ListLinuxSubscriptions](#listlinuxsubscriptions) - Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
* [UpdateServiceSettings](#updateservicesettings) - Updates the service settings for Linux subscriptions.

## GetServiceSettings

Lists the Linux subscriptions service settings.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceSettings(ctx, operations.GetServiceSettingsRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceSettingsResponse != nil {
        // handle response
    }
}
```

## ListLinuxSubscriptionInstances

Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListLinuxSubscriptionInstances(ctx, operations.ListLinuxSubscriptionInstancesRequest{
        MaxResults: sdk.String("debitis"),
        NextToken: sdk.String("ipsa"),
        RequestBody: operations.ListLinuxSubscriptionInstancesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Laurie Kreiger"),
                    Operator: shared.OperatorEnumNotEqual.ToPointer(),
                    Values: []string{
                        "excepturi",
                        "nisi",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Jake Bernier MD"),
                    Operator: shared.OperatorEnumEqual.ToPointer(),
                    Values: []string{
                        "repellendus",
                        "sapiente",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Fred Strosin"),
                    Operator: shared.OperatorEnumNotEqual.ToPointer(),
                    Values: []string{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Samuel Reichel"),
                    Operator: shared.OperatorEnumEqual.ToPointer(),
                    Values: []string{
                        "hic",
                        "optio",
                        "totam",
                    },
                },
            },
            MaxResults: sdk.Int64(105907),
            NextToken: sdk.String("commodi"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLinuxSubscriptionInstancesResponse != nil {
        // handle response
    }
}
```

## ListLinuxSubscriptions

Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListLinuxSubscriptions(ctx, operations.ListLinuxSubscriptionsRequest{
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("aspernatur"),
        RequestBody: operations.ListLinuxSubscriptionsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Faye Cormier"),
                    Operator: shared.OperatorEnumNotEqual.ToPointer(),
                    Values: []string{
                        "hic",
                        "saepe",
                    },
                },
            },
            MaxResults: sdk.Int64(681820),
            NextToken: sdk.String("in"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLinuxSubscriptionsResponse != nil {
        // handle response
    }
}
```

## UpdateServiceSettings

Updates the service settings for Linux subscriptions.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateServiceSettings(ctx, operations.UpdateServiceSettingsRequest{
        RequestBody: operations.UpdateServiceSettingsRequestBody{
            AllowUpdate: sdk.Bool(false),
            LinuxSubscriptionsDiscovery: operations.UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnumDisabled,
            LinuxSubscriptionsDiscoverySettings: operations.UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings{
                OrganizationIntegration: shared.OrganizationIntegrationEnumDisabled.ToPointer(),
                SourceRegions: []string{
                    "laborum",
                    "dolores",
                    "dolorem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceSettingsResponse != nil {
        // handle response
    }
}
```
