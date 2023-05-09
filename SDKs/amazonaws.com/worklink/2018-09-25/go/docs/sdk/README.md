# SDK

## Overview

Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices.

Amazon Web Services documentation
<https://docs.aws.amazon.com/worklink/>
### Available Operations

* [~~AssociateDomain~~](#associatedomain) - Specifies a domain to be associated to Amazon WorkLink. :warning: **Deprecated**
* [~~AssociateWebsiteAuthorizationProvider~~](#associatewebsiteauthorizationprovider) - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network. :warning: **Deprecated**
* [~~AssociateWebsiteCertificateAuthority~~](#associatewebsitecertificateauthority) - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network. :warning: **Deprecated**
* [~~CreateFleet~~](#createfleet) - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app. :warning: **Deprecated**
* [~~DeleteFleet~~](#deletefleet) - Deletes a fleet. Prevents users from accessing previously associated websites.  :warning: **Deprecated**
* [~~DescribeAuditStreamConfiguration~~](#describeauditstreamconfiguration) - Describes the configuration for delivering audit streams to the customer account. :warning: **Deprecated**
* [~~DescribeCompanyNetworkConfiguration~~](#describecompanynetworkconfiguration) - Describes the networking configuration to access the internal websites associated with the specified fleet. :warning: **Deprecated**
* [~~DescribeDevice~~](#describedevice) - Provides information about a user's device. :warning: **Deprecated**
* [~~DescribeDevicePolicyConfiguration~~](#describedevicepolicyconfiguration) - Describes the device policy configuration for the specified fleet. :warning: **Deprecated**
* [~~DescribeDomain~~](#describedomain) - Provides information about the domain. :warning: **Deprecated**
* [~~DescribeFleetMetadata~~](#describefleetmetadata) - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details. :warning: **Deprecated**
* [~~DescribeIdentityProviderConfiguration~~](#describeidentityproviderconfiguration) - Describes the identity provider configuration of the specified fleet. :warning: **Deprecated**
* [~~DescribeWebsiteCertificateAuthority~~](#describewebsitecertificateauthority) - Provides information about the certificate authority. :warning: **Deprecated**
* [~~DisassociateDomain~~](#disassociatedomain) - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.  :warning: **Deprecated**
* [~~DisassociateWebsiteAuthorizationProvider~~](#disassociatewebsiteauthorizationprovider) - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider. :warning: **Deprecated**
* [~~DisassociateWebsiteCertificateAuthority~~](#disassociatewebsitecertificateauthority) - Removes a certificate authority (CA). :warning: **Deprecated**
* [~~ListDevices~~](#listdevices) - Retrieves a list of devices registered with the specified fleet. :warning: **Deprecated**
* [~~ListDomains~~](#listdomains) - Retrieves a list of domains associated to a specified fleet. :warning: **Deprecated**
* [~~ListFleets~~](#listfleets) - Retrieves a list of fleets for the current account and Region. :warning: **Deprecated**
* [~~ListTagsForResource~~](#listtagsforresource) - Retrieves a list of tags for the specified resource. :warning: **Deprecated**
* [~~ListWebsiteAuthorizationProviders~~](#listwebsiteauthorizationproviders) - Retrieves a list of website authorization providers associated with a specified fleet. :warning: **Deprecated**
* [~~ListWebsiteCertificateAuthorities~~](#listwebsitecertificateauthorities) - Retrieves a list of certificate authorities added for the current account and Region. :warning: **Deprecated**
* [~~RestoreDomainAccess~~](#restoredomainaccess) - Moves a domain to ACTIVE status if it was in the INACTIVE status. :warning: **Deprecated**
* [~~RevokeDomainAccess~~](#revokedomainaccess) - Moves a domain to INACTIVE status if it was in the ACTIVE status. :warning: **Deprecated**
* [~~SignOutUser~~](#signoutuser) - Signs the user out from all of their devices. The user can sign in again if they have valid credentials. :warning: **Deprecated**
* [~~TagResource~~](#tagresource) - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. :warning: **Deprecated**
* [~~UntagResource~~](#untagresource) - Removes one or more tags from the specified resource. :warning: **Deprecated**
* [~~UpdateAuditStreamConfiguration~~](#updateauditstreamconfiguration) - Updates the audit stream configuration for the fleet. :warning: **Deprecated**
* [~~UpdateCompanyNetworkConfiguration~~](#updatecompanynetworkconfiguration) - Updates the company network configuration for the fleet. :warning: **Deprecated**
* [~~UpdateDevicePolicyConfiguration~~](#updatedevicepolicyconfiguration) - Updates the device policy configuration for the fleet. :warning: **Deprecated**
* [~~UpdateDomainMetadata~~](#updatedomainmetadata) - Updates domain metadata, such as DisplayName. :warning: **Deprecated**
* [~~UpdateFleetMetadata~~](#updatefleetmetadata) - Updates fleet metadata, such as DisplayName. :warning: **Deprecated**
* [~~UpdateIdentityProviderConfiguration~~](#updateidentityproviderconfiguration) - Updates the identity provider configuration for the fleet. :warning: **Deprecated**

## ~~AssociateDomain~~

Specifies a domain to be associated to Amazon WorkLink.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.AssociateDomain(ctx, operations.AssociateDomainRequest{
        RequestBody: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "suscipit",
            DisplayName: sdk.String("iure"),
            DomainName: "magnam",
            FleetArn: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDomainResponse != nil {
        // handle response
    }
}
```

## ~~AssociateWebsiteAuthorizationProvider~~

Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.AssociateWebsiteAuthorizationProvider(ctx, operations.AssociateWebsiteAuthorizationProviderRequest{
        RequestBody: operations.AssociateWebsiteAuthorizationProviderRequestBody{
            AuthorizationProviderType: operations.AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnumSaml,
            DomainName: sdk.String("voluptatum"),
            FleetArn: "iusto",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateWebsiteAuthorizationProviderResponse != nil {
        // handle response
    }
}
```

## ~~AssociateWebsiteCertificateAuthority~~

Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.AssociateWebsiteCertificateAuthority(ctx, operations.AssociateWebsiteCertificateAuthorityRequest{
        RequestBody: operations.AssociateWebsiteCertificateAuthorityRequestBody{
            Certificate: "deserunt",
            DisplayName: sdk.String("perferendis"),
            FleetArn: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateWebsiteCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## ~~CreateFleet~~

Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.CreateFleet(ctx, operations.CreateFleetRequest{
        RequestBody: operations.CreateFleetRequestBody{
            DisplayName: sdk.String("molestiae"),
            FleetName: "quod",
            OptimizeForEndUserLocation: sdk.Bool(false),
            Tags: map[string]string{
                "esse": "totam",
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetResponse != nil {
        // handle response
    }
}
```

## ~~DeleteFleet~~

Deletes a fleet. Prevents users from accessing previously associated websites. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DeleteFleet(ctx, operations.DeleteFleetRequest{
        RequestBody: operations.DeleteFleetRequestBody{
            FleetArn: "molestiae",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFleetResponse != nil {
        // handle response
    }
}
```

## ~~DescribeAuditStreamConfiguration~~

Describes the configuration for delivering audit streams to the customer account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeAuditStreamConfiguration(ctx, operations.DescribeAuditStreamConfigurationRequest{
        RequestBody: operations.DescribeAuditStreamConfigurationRequestBody{
            FleetArn: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAuditStreamConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~DescribeCompanyNetworkConfiguration~~

Describes the networking configuration to access the internal websites associated with the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeCompanyNetworkConfiguration(ctx, operations.DescribeCompanyNetworkConfigurationRequest{
        RequestBody: operations.DescribeCompanyNetworkConfigurationRequestBody{
            FleetArn: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCompanyNetworkConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~DescribeDevice~~

Provides information about a user's device.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeDevice(ctx, operations.DescribeDeviceRequest{
        RequestBody: operations.DescribeDeviceRequestBody{
            DeviceID: "saepe",
            FleetArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDeviceResponse != nil {
        // handle response
    }
}
```

## ~~DescribeDevicePolicyConfiguration~~

Describes the device policy configuration for the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeDevicePolicyConfiguration(ctx, operations.DescribeDevicePolicyConfigurationRequest{
        RequestBody: operations.DescribeDevicePolicyConfigurationRequestBody{
            FleetArn: "dolorem",
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

    if res.DescribeDevicePolicyConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~DescribeDomain~~

Provides information about the domain.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeDomain(ctx, operations.DescribeDomainRequest{
        RequestBody: operations.DescribeDomainRequestBody{
            DomainName: "excepturi",
            FleetArn: "accusantium",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDomainResponse != nil {
        // handle response
    }
}
```

## ~~DescribeFleetMetadata~~

Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeFleetMetadata(ctx, operations.DescribeFleetMetadataRequest{
        RequestBody: operations.DescribeFleetMetadataRequestBody{
            FleetArn: "culpa",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetMetadataResponse != nil {
        // handle response
    }
}
```

## ~~DescribeIdentityProviderConfiguration~~

Describes the identity provider configuration of the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeIdentityProviderConfiguration(ctx, operations.DescribeIdentityProviderConfigurationRequest{
        RequestBody: operations.DescribeIdentityProviderConfigurationRequestBody{
            FleetArn: "molestiae",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIdentityProviderConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~DescribeWebsiteCertificateAuthority~~

Provides information about the certificate authority.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DescribeWebsiteCertificateAuthority(ctx, operations.DescribeWebsiteCertificateAuthorityRequest{
        RequestBody: operations.DescribeWebsiteCertificateAuthorityRequestBody{
            FleetArn: "enim",
            WebsiteCaID: "odit",
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

    if res.DescribeWebsiteCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## ~~DisassociateDomain~~

Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DisassociateDomain(ctx, operations.DisassociateDomainRequest{
        RequestBody: operations.DisassociateDomainRequestBody{
            DomainName: "quasi",
            FleetArn: "error",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDomainResponse != nil {
        // handle response
    }
}
```

## ~~DisassociateWebsiteAuthorizationProvider~~

Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DisassociateWebsiteAuthorizationProvider(ctx, operations.DisassociateWebsiteAuthorizationProviderRequest{
        RequestBody: operations.DisassociateWebsiteAuthorizationProviderRequestBody{
            AuthorizationProviderID: "praesentium",
            FleetArn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateWebsiteAuthorizationProviderResponse != nil {
        // handle response
    }
}
```

## ~~DisassociateWebsiteCertificateAuthority~~

Removes a certificate authority (CA).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.DisassociateWebsiteCertificateAuthority(ctx, operations.DisassociateWebsiteCertificateAuthorityRequest{
        RequestBody: operations.DisassociateWebsiteCertificateAuthorityRequestBody{
            FleetArn: "ut",
            WebsiteCaID: "maiores",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateWebsiteCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## ~~ListDevices~~

Retrieves a list of devices registered with the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListDevices(ctx, operations.ListDevicesRequest{
        MaxResults: sdk.String("accusamus"),
        NextToken: sdk.String("commodi"),
        RequestBody: operations.ListDevicesRequestBody{
            FleetArn: "repudiandae",
            MaxResults: sdk.Int64(64147),
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResponse != nil {
        // handle response
    }
}
```

## ~~ListDomains~~

Retrieves a list of domains associated to a specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListDomains(ctx, operations.ListDomainsRequest{
        MaxResults: sdk.String("voluptates"),
        NextToken: sdk.String("quasi"),
        RequestBody: operations.ListDomainsRequestBody{
            FleetArn: "repudiandae",
            MaxResults: sdk.Int64(575947),
            NextToken: sdk.String("veritatis"),
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ~~ListFleets~~

Retrieves a list of fleets for the current account and Region.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListFleets(ctx, operations.ListFleetsRequest{
        MaxResults: sdk.String("deserunt"),
        NextToken: sdk.String("distinctio"),
        RequestBody: operations.ListFleetsRequestBody{
            MaxResults: sdk.Int64(841386),
            NextToken: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFleetsResponse != nil {
        // handle response
    }
}
```

## ~~ListTagsForResource~~

Retrieves a list of tags for the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "assumenda",
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ~~ListWebsiteAuthorizationProviders~~

Retrieves a list of website authorization providers associated with a specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListWebsiteAuthorizationProviders(ctx, operations.ListWebsiteAuthorizationProvidersRequest{
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("labore"),
        RequestBody: operations.ListWebsiteAuthorizationProvidersRequestBody{
            FleetArn: "delectus",
            MaxResults: sdk.Int64(433288),
            NextToken: sdk.String("non"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebsiteAuthorizationProvidersResponse != nil {
        // handle response
    }
}
```

## ~~ListWebsiteCertificateAuthorities~~

Retrieves a list of certificate authorities added for the current account and Region.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.ListWebsiteCertificateAuthorities(ctx, operations.ListWebsiteCertificateAuthoritiesRequest{
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("debitis"),
        RequestBody: operations.ListWebsiteCertificateAuthoritiesRequestBody{
            FleetArn: "a",
            MaxResults: sdk.Int64(680056),
            NextToken: sdk.String("in"),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebsiteCertificateAuthoritiesResponse != nil {
        // handle response
    }
}
```

## ~~RestoreDomainAccess~~

Moves a domain to ACTIVE status if it was in the INACTIVE status.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.RestoreDomainAccess(ctx, operations.RestoreDomainAccessRequest{
        RequestBody: operations.RestoreDomainAccessRequestBody{
            DomainName: "facere",
            FleetArn: "ea",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreDomainAccessResponse != nil {
        // handle response
    }
}
```

## ~~RevokeDomainAccess~~

Moves a domain to INACTIVE status if it was in the ACTIVE status.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.RevokeDomainAccess(ctx, operations.RevokeDomainAccessRequest{
        RequestBody: operations.RevokeDomainAccessRequestBody{
            DomainName: "delectus",
            FleetArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevokeDomainAccessResponse != nil {
        // handle response
    }
}
```

## ~~SignOutUser~~

Signs the user out from all of their devices. The user can sign in again if they have valid credentials.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.SignOutUser(ctx, operations.SignOutUserRequest{
        RequestBody: operations.SignOutUserRequestBody{
            FleetArn: "deserunt",
            Username: "Golda_Kassulke",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignOutUserResponse != nil {
        // handle response
    }
}
```

## ~~TagResource~~

Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "suscipit": "natus",
                "nobis": "eum",
            },
        },
        ResourceArn: "vero",
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## ~~UntagResource~~

Removes one or more tags from the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "quos",
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        TagKeys: []string{
            "necessitatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## ~~UpdateAuditStreamConfiguration~~

Updates the audit stream configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UpdateAuditStreamConfiguration(ctx, operations.UpdateAuditStreamConfigurationRequest{
        RequestBody: operations.UpdateAuditStreamConfigurationRequestBody{
            AuditStreamArn: sdk.String("odit"),
            FleetArn: "nemo",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAuditStreamConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~UpdateCompanyNetworkConfiguration~~

Updates the company network configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UpdateCompanyNetworkConfiguration(ctx, operations.UpdateCompanyNetworkConfigurationRequest{
        RequestBody: operations.UpdateCompanyNetworkConfigurationRequestBody{
            FleetArn: "facilis",
            SecurityGroupIds: []string{
                "architecto",
                "architecto",
            },
            SubnetIds: []string{
                "ullam",
                "expedita",
                "nihil",
                "repellat",
            },
            VpcID: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCompanyNetworkConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~UpdateDevicePolicyConfiguration~~

Updates the device policy configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UpdateDevicePolicyConfiguration(ctx, operations.UpdateDevicePolicyConfigurationRequest{
        RequestBody: operations.UpdateDevicePolicyConfigurationRequestBody{
            DeviceCaCertificate: sdk.String("magni"),
            FleetArn: "sunt",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDevicePolicyConfigurationResponse != nil {
        // handle response
    }
}
```

## ~~UpdateDomainMetadata~~

Updates domain metadata, such as DisplayName.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UpdateDomainMetadata(ctx, operations.UpdateDomainMetadataRequest{
        RequestBody: operations.UpdateDomainMetadataRequestBody{
            DisplayName: sdk.String("ea"),
            DomainName: "accusantium",
            FleetArn: "ab",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainMetadataResponse != nil {
        // handle response
    }
}
```

## ~~UpdateFleetMetadata~~

Updates fleet metadata, such as DisplayName.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UpdateFleetMetadata(ctx, operations.UpdateFleetMetadataRequest{
        RequestBody: operations.UpdateFleetMetadataRequestBody{
            DisplayName: sdk.String("pariatur"),
            FleetArn: "nemo",
            OptimizeForEndUserLocation: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFleetMetadataResponse != nil {
        // handle response
    }
}
```

## ~~UpdateIdentityProviderConfiguration~~

Updates the identity provider configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.UpdateIdentityProviderConfiguration(ctx, operations.UpdateIdentityProviderConfigurationRequest{
        RequestBody: operations.UpdateIdentityProviderConfigurationRequestBody{
            FleetArn: "hic",
            IdentityProviderSamlMetadata: sdk.String("libero"),
            IdentityProviderType: operations.UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnumSaml,
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIdentityProviderConfigurationResponse != nil {
        // handle response
    }
}
```
