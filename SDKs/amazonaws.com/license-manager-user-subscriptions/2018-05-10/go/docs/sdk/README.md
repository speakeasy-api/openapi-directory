# SDK

## Overview

With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager-user-subscriptions/>
### Available Operations

* [AssociateUser](#associateuser) - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [DeregisterIdentityProvider](#deregisteridentityprovider) - Deregisters the identity provider from providing user-based subscriptions.
* [DisassociateUser](#disassociateuser) - Disassociates the user from an EC2 instance providing user-based subscriptions.
* [ListIdentityProviders](#listidentityproviders) - Lists the identity providers for user-based subscriptions.
* [ListInstances](#listinstances) - Lists the EC2 instances providing user-based subscriptions.
* [ListProductSubscriptions](#listproductsubscriptions) - Lists the user-based subscription products available from an identity provider.
* [ListUserAssociations](#listuserassociations) - Lists user associations for an identity provider.
* [RegisterIdentityProvider](#registeridentityprovider) - Registers an identity provider for user-based subscriptions.
* [StartProductSubscription](#startproductsubscription) - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [StopProductSubscription](#stopproductsubscription) - Stops a product subscription for a user with the specified identity provider.
* [UpdateIdentityProviderSettings](#updateidentityprovidersettings) - Updates additional product configuration settings for the registered identity provider.

## AssociateUser

<p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>

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
    res, err := s.SDK.AssociateUser(ctx, operations.AssociateUserRequest{
        RequestBody: operations.AssociateUserRequestBody{
            Domain: sdk.String("ipsa"),
            IdentityProvider: operations.AssociateUserRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("delectus"),
                },
            },
            InstanceID: "tempora",
            Username: "Geraldine_Kreiger52",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateUserResponse != nil {
        // handle response
    }
}
```

## DeregisterIdentityProvider

Deregisters the identity provider from providing user-based subscriptions.

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
    res, err := s.SDK.DeregisterIdentityProvider(ctx, operations.DeregisterIdentityProviderRequest{
        RequestBody: operations.DeregisterIdentityProviderRequestBody{
            IdentityProvider: operations.DeregisterIdentityProviderRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("veritatis"),
                },
            },
            Product: "deserunt",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterIdentityProviderResponse != nil {
        // handle response
    }
}
```

## DisassociateUser

Disassociates the user from an EC2 instance providing user-based subscriptions.

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
    res, err := s.SDK.DisassociateUser(ctx, operations.DisassociateUserRequest{
        RequestBody: operations.DisassociateUserRequestBody{
            Domain: sdk.String("at"),
            IdentityProvider: operations.DisassociateUserRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("maiores"),
                },
            },
            InstanceID: "molestiae",
            Username: "Pinkie_Schmidt",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateUserResponse != nil {
        // handle response
    }
}
```

## ListIdentityProviders

Lists the identity providers for user-based subscriptions.

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
    res, err := s.SDK.ListIdentityProviders(ctx, operations.ListIdentityProvidersRequest{
        MaxResults: sdk.String("deleniti"),
        NextToken: sdk.String("hic"),
        RequestBody: operations.ListIdentityProvidersRequestBody{
            MaxResults: sdk.Int64(758616),
            NextToken: sdk.String("totam"),
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityProvidersResponse != nil {
        // handle response
    }
}
```

## ListInstances

Lists the EC2 instances providing user-based subscriptions.

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
    res, err := s.SDK.ListInstances(ctx, operations.ListInstancesRequest{
        MaxResults: sdk.String("esse"),
        NextToken: sdk.String("ipsum"),
        RequestBody: operations.ListInstancesRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Attribute: sdk.String("aspernatur"),
                    Operation: sdk.String("perferendis"),
                    Value: sdk.String("ad"),
                },
                shared.Filter{
                    Attribute: sdk.String("natus"),
                    Operation: sdk.String("sed"),
                    Value: sdk.String("iste"),
                },
                shared.Filter{
                    Attribute: sdk.String("dolor"),
                    Operation: sdk.String("natus"),
                    Value: sdk.String("laboriosam"),
                },
            },
            MaxResults: sdk.Int64(943749),
            NextToken: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## ListProductSubscriptions

Lists the user-based subscription products available from an identity provider.

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
    res, err := s.SDK.ListProductSubscriptions(ctx, operations.ListProductSubscriptionsRequest{
        MaxResults: sdk.String("architecto"),
        NextToken: sdk.String("ipsa"),
        RequestBody: operations.ListProductSubscriptionsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Attribute: sdk.String("est"),
                    Operation: sdk.String("mollitia"),
                    Value: sdk.String("laborum"),
                },
                shared.Filter{
                    Attribute: sdk.String("dolores"),
                    Operation: sdk.String("dolorem"),
                    Value: sdk.String("corporis"),
                },
                shared.Filter{
                    Attribute: sdk.String("explicabo"),
                    Operation: sdk.String("nobis"),
                    Value: sdk.String("enim"),
                },
                shared.Filter{
                    Attribute: sdk.String("omnis"),
                    Operation: sdk.String("nemo"),
                    Value: sdk.String("minima"),
                },
            },
            IdentityProvider: operations.ListProductSubscriptionsRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("excepturi"),
                },
            },
            MaxResults: sdk.Int64(38425),
            NextToken: sdk.String("iure"),
            Product: "culpa",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProductSubscriptionsResponse != nil {
        // handle response
    }
}
```

## ListUserAssociations

Lists user associations for an identity provider.

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
    res, err := s.SDK.ListUserAssociations(ctx, operations.ListUserAssociationsRequest{
        MaxResults: sdk.String("repellat"),
        NextToken: sdk.String("mollitia"),
        RequestBody: operations.ListUserAssociationsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Attribute: sdk.String("numquam"),
                    Operation: sdk.String("commodi"),
                    Value: sdk.String("quam"),
                },
                shared.Filter{
                    Attribute: sdk.String("molestiae"),
                    Operation: sdk.String("velit"),
                    Value: sdk.String("error"),
                },
                shared.Filter{
                    Attribute: sdk.String("quia"),
                    Operation: sdk.String("quis"),
                    Value: sdk.String("vitae"),
                },
            },
            IdentityProvider: operations.ListUserAssociationsRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("laborum"),
                },
            },
            InstanceID: "animi",
            MaxResults: sdk.Int64(317202),
            NextToken: sdk.String("odit"),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserAssociationsResponse != nil {
        // handle response
    }
}
```

## RegisterIdentityProvider

Registers an identity provider for user-based subscriptions.

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
    res, err := s.SDK.RegisterIdentityProvider(ctx, operations.RegisterIdentityProviderRequest{
        RequestBody: operations.RegisterIdentityProviderRequestBody{
            IdentityProvider: operations.RegisterIdentityProviderRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("quasi"),
                },
            },
            Product: "error",
            Settings: &operations.RegisterIdentityProviderRequestBodySettings{
                SecurityGroupID: sdk.String("temporibus"),
                Subnets: []string{
                    "quasi",
                    "reiciendis",
                    "voluptatibus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterIdentityProviderResponse != nil {
        // handle response
    }
}
```

## StartProductSubscription

<p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>

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
    res, err := s.SDK.StartProductSubscription(ctx, operations.StartProductSubscriptionRequest{
        RequestBody: operations.StartProductSubscriptionRequestBody{
            Domain: sdk.String("cum"),
            IdentityProvider: operations.StartProductSubscriptionRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("perferendis"),
                },
            },
            Product: "doloremque",
            Username: "Iliana.Grady35",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartProductSubscriptionResponse != nil {
        // handle response
    }
}
```

## StopProductSubscription

Stops a product subscription for a user with the specified identity provider.

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
    res, err := s.SDK.StopProductSubscription(ctx, operations.StopProductSubscriptionRequest{
        RequestBody: operations.StopProductSubscriptionRequestBody{
            Domain: sdk.String("repudiandae"),
            IdentityProvider: operations.StopProductSubscriptionRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("quae"),
                },
            },
            Product: "ipsum",
            Username: "Mathilde_Mann",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopProductSubscriptionResponse != nil {
        // handle response
    }
}
```

## UpdateIdentityProviderSettings

Updates additional product configuration settings for the registered identity provider.

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
    res, err := s.SDK.UpdateIdentityProviderSettings(ctx, operations.UpdateIdentityProviderSettingsRequest{
        RequestBody: operations.UpdateIdentityProviderSettingsRequestBody{
            IdentityProvider: operations.UpdateIdentityProviderSettingsRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: sdk.String("veritatis"),
                },
            },
            Product: "itaque",
            UpdateSettings: operations.UpdateIdentityProviderSettingsRequestBodyUpdateSettings{
                AddSubnets: []string{
                    "enim",
                    "consequatur",
                },
                RemoveSubnets: []string{
                    "quibusdam",
                    "explicabo",
                    "deserunt",
                },
                SecurityGroupID: sdk.String("distinctio"),
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIdentityProviderSettingsResponse != nil {
        // handle response
    }
}
```
