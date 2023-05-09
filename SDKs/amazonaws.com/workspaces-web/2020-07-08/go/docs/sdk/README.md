# SDK

## Overview

WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Web provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.

Amazon Web Services documentation
<https://docs.aws.amazon.com/workspaces-web/>
### Available Operations

* [AssociateBrowserSettings](#associatebrowsersettings) - Associates a browser settings resource with a web portal.
* [AssociateNetworkSettings](#associatenetworksettings) - Associates a network settings resource with a web portal.
* [AssociateTrustStore](#associatetruststore) - Associates a trust store with a web portal.
* [AssociateUserAccessLoggingSettings](#associateuseraccessloggingsettings) - Associates a user access logging settings resource with a web portal.
* [AssociateUserSettings](#associateusersettings) - Associates a user settings resource with a web portal.
* [CreateBrowserSettings](#createbrowsersettings) - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* [CreateIdentityProvider](#createidentityprovider) - Creates an identity provider resource that is then associated with a web portal.
* [CreateNetworkSettings](#createnetworksettings) - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* [CreatePortal](#createportal) - Creates a web portal.
* [CreateTrustStore](#createtruststore) - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* [CreateUserAccessLoggingSettings](#createuseraccessloggingsettings) - Creates a user access logging settings resource that can be associated with a web portal.
* [CreateUserSettings](#createusersettings) - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* [DeleteBrowserSettings](#deletebrowsersettings) - Deletes browser settings.
* [DeleteIdentityProvider](#deleteidentityprovider) - Deletes the identity provider.
* [DeleteNetworkSettings](#deletenetworksettings) - Deletes network settings.
* [DeletePortal](#deleteportal) - Deletes a web portal.
* [DeleteTrustStore](#deletetruststore) - Deletes the trust store.
* [DeleteUserAccessLoggingSettings](#deleteuseraccessloggingsettings) - Deletes user access logging settings.
* [DeleteUserSettings](#deleteusersettings) - Deletes user settings.
* [DisassociateBrowserSettings](#disassociatebrowsersettings) - Disassociates browser settings from a web portal.
* [DisassociateNetworkSettings](#disassociatenetworksettings) - Disassociates network settings from a web portal.
* [DisassociateTrustStore](#disassociatetruststore) - Disassociates a trust store from a web portal.
* [DisassociateUserAccessLoggingSettings](#disassociateuseraccessloggingsettings) - Disassociates user access logging settings from a web portal.
* [DisassociateUserSettings](#disassociateusersettings) - Disassociates user settings from a web portal.
* [GetBrowserSettings](#getbrowsersettings) - Gets browser settings.
* [GetIdentityProvider](#getidentityprovider) - Gets the identity provider.
* [GetNetworkSettings](#getnetworksettings) - Gets the network settings.
* [GetPortal](#getportal) - Gets the web portal.
* [GetPortalServiceProviderMetadata](#getportalserviceprovidermetadata) - Gets the service provider metadata.
* [GetTrustStore](#gettruststore) - Gets the trust store.
* [GetTrustStoreCertificate](#gettruststorecertificate) - Gets the trust store certificate.
* [GetUserAccessLoggingSettings](#getuseraccessloggingsettings) - Gets user access logging settings.
* [GetUserSettings](#getusersettings) - Gets user settings.
* [ListBrowserSettings](#listbrowsersettings) - Retrieves a list of browser settings.
* [ListIdentityProviders](#listidentityproviders) - Retrieves a list of identity providers for a specific web portal.
* [ListNetworkSettings](#listnetworksettings) - Retrieves a list of network settings.
* [ListPortals](#listportals) - Retrieves a list or web portals.
* [ListTagsForResource](#listtagsforresource) - Retrieves a list of tags for a resource.
* [ListTrustStoreCertificates](#listtruststorecertificates) - Retrieves a list of trust store certificates.
* [ListTrustStores](#listtruststores) - Retrieves a list of trust stores.
* [ListUserAccessLoggingSettings](#listuseraccessloggingsettings) - Retrieves a list of user access logging settings.
* [ListUserSettings](#listusersettings) - Retrieves a list of user settings.
* [TagResource](#tagresource) - Adds or overwrites one or more tags for the specified resource.
* [UntagResource](#untagresource) - Removes one or more tags from the specified resource.
* [UpdateBrowserSettings](#updatebrowsersettings) - Updates browser settings.
* [UpdateIdentityProvider](#updateidentityprovider) - Updates the identity provider. 
* [UpdateNetworkSettings](#updatenetworksettings) - Updates network settings.
* [UpdatePortal](#updateportal) - Updates a web portal.
* [UpdateTrustStore](#updatetruststore) - Updates the trust store.
* [UpdateUserAccessLoggingSettings](#updateuseraccessloggingsettings) - Updates the user access logging settings.
* [UpdateUserSettings](#updateusersettings) - Updates the user settings.

## AssociateBrowserSettings

Associates a browser settings resource with a web portal.

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
    res, err := s.SDK.AssociateBrowserSettings(ctx, operations.AssociateBrowserSettingsRequest{
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        BrowserSettingsArn: "delectus",
        PortalArn: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## AssociateNetworkSettings

Associates a network settings resource with a web portal.

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
    res, err := s.SDK.AssociateNetworkSettings(ctx, operations.AssociateNetworkSettingsRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        NetworkSettingsArn: "nisi",
        PortalArn: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## AssociateTrustStore

Associates a trust store with a web portal.

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
    res, err := s.SDK.AssociateTrustStore(ctx, operations.AssociateTrustStoreRequest{
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        PortalArn: "repellendus",
        TrustStoreArn: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTrustStoreResponse != nil {
        // handle response
    }
}
```

## AssociateUserAccessLoggingSettings

Associates a user access logging settings resource with a web portal.

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
    res, err := s.SDK.AssociateUserAccessLoggingSettings(ctx, operations.AssociateUserAccessLoggingSettingsRequest{
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
        PortalArn: "quod",
        UserAccessLoggingSettingsArn: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## AssociateUserSettings

Associates a user settings resource with a web portal.

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
    res, err := s.SDK.AssociateUserSettings(ctx, operations.AssociateUserSettingsRequest{
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        PortalArn: "fugit",
        UserSettingsArn: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateUserSettingsResponse != nil {
        // handle response
    }
}
```

## CreateBrowserSettings

Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 

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
    res, err := s.SDK.CreateBrowserSettings(ctx, operations.CreateBrowserSettingsRequest{
        RequestBody: operations.CreateBrowserSettingsRequestBody{
            AdditionalEncryptionContext: map[string]string{
                "optio": "totam",
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            BrowserPolicy: "cum",
            ClientToken: sdk.String("esse"),
            CustomerManagedKey: sdk.String("ipsum"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aspernatur",
                    Value: "perferendis",
                },
                shared.Tag{
                    Key: "ad",
                    Value: "natus",
                },
                shared.Tag{
                    Key: "sed",
                    Value: "iste",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## CreateIdentityProvider

Creates an identity provider resource that is then associated with a web portal.

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
    res, err := s.SDK.CreateIdentityProvider(ctx, operations.CreateIdentityProviderRequest{
        RequestBody: operations.CreateIdentityProviderRequestBody{
            ClientToken: sdk.String("corporis"),
            IdentityProviderDetails: map[string]string{
                "iure": "saepe",
                "quidem": "architecto",
                "ipsa": "reiciendis",
            },
            IdentityProviderName: "est",
            IdentityProviderType: operations.CreateIdentityProviderRequestBodyIdentityProviderTypeEnumLoginWithAmazon,
            PortalArn: "laborum",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIdentityProviderResponse != nil {
        // handle response
    }
}
```

## CreateNetworkSettings

Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 

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
    res, err := s.SDK.CreateNetworkSettings(ctx, operations.CreateNetworkSettingsRequest{
        RequestBody: operations.CreateNetworkSettingsRequestBody{
            ClientToken: sdk.String("nemo"),
            SecurityGroupIds: []string{
                "excepturi",
                "accusantium",
            },
            SubnetIds: []string{
                "culpa",
                "doloribus",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "architecto",
                    Value: "mollitia",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "culpa",
                },
                shared.Tag{
                    Key: "consequuntur",
                    Value: "repellat",
                },
                shared.Tag{
                    Key: "mollitia",
                    Value: "occaecati",
                },
            },
            VpcID: "numquam",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## CreatePortal

Creates a web portal.

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
    res, err := s.SDK.CreatePortal(ctx, operations.CreatePortalRequest{
        RequestBody: operations.CreatePortalRequestBody{
            AdditionalEncryptionContext: map[string]string{
                "laborum": "animi",
            },
            AuthenticationType: operations.CreatePortalRequestBodyAuthenticationTypeEnumStandard.ToPointer(),
            ClientToken: sdk.String("odit"),
            CustomerManagedKey: sdk.String("quo"),
            DisplayName: sdk.String("sequi"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ipsam",
                    Value: "id",
                },
                shared.Tag{
                    Key: "possimus",
                    Value: "aut",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "error",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "laborum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePortalResponse != nil {
        // handle response
    }
}
```

## CreateTrustStore

Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 

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
    res, err := s.SDK.CreateTrustStore(ctx, operations.CreateTrustStoreRequest{
        RequestBody: operations.CreateTrustStoreRequestBody{
            CertificateList: []string{
                "omnis",
            },
            ClientToken: sdk.String("voluptate"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "perferendis",
                    Value: "doloremque",
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: "ut",
                },
                shared.Tag{
                    Key: "maiores",
                    Value: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrustStoreResponse != nil {
        // handle response
    }
}
```

## CreateUserAccessLoggingSettings

Creates a user access logging settings resource that can be associated with a web portal.

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
    res, err := s.SDK.CreateUserAccessLoggingSettings(ctx, operations.CreateUserAccessLoggingSettingsRequest{
        RequestBody: operations.CreateUserAccessLoggingSettingsRequestBody{
            ClientToken: sdk.String("commodi"),
            KinesisStreamArn: "repudiandae",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ipsum",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## CreateUserSettings

Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 

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
    res, err := s.SDK.CreateUserSettings(ctx, operations.CreateUserSettingsRequest{
        RequestBody: operations.CreateUserSettingsRequestBody{
            ClientToken: sdk.String("quasi"),
            CopyAllowed: operations.CreateUserSettingsRequestBodyCopyAllowedEnumEnabled,
            DisconnectTimeoutInMinutes: sdk.Int64(575947),
            DownloadAllowed: operations.CreateUserSettingsRequestBodyDownloadAllowedEnumDisabled,
            IdleDisconnectTimeoutInMinutes: sdk.Int64(929297),
            PasteAllowed: operations.CreateUserSettingsRequestBodyPasteAllowedEnumDisabled,
            PrintAllowed: operations.CreateUserSettingsRequestBodyPrintAllowedEnumDisabled,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "est",
                    Value: "quibusdam",
                },
            },
            UploadAllowed: operations.CreateUserSettingsRequestBodyUploadAllowedEnumDisabled,
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserSettingsResponse != nil {
        // handle response
    }
}
```

## DeleteBrowserSettings

Deletes browser settings.

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
    res, err := s.SDK.DeleteBrowserSettings(ctx, operations.DeleteBrowserSettingsRequest{
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        BrowserSettingsArn: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## DeleteIdentityProvider

Deletes the identity provider.

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
    res, err := s.SDK.DeleteIdentityProvider(ctx, operations.DeleteIdentityProviderRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
        IdentityProviderArn: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIdentityProviderResponse != nil {
        // handle response
    }
}
```

## DeleteNetworkSettings

Deletes network settings.

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
    res, err := s.SDK.DeleteNetworkSettings(ctx, operations.DeleteNetworkSettingsRequest{
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        NetworkSettingsArn: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## DeletePortal

Deletes a web portal.

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
    res, err := s.SDK.DeletePortal(ctx, operations.DeletePortalRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        PortalArn: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePortalResponse != nil {
        // handle response
    }
}
```

## DeleteTrustStore

Deletes the trust store.

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
    res, err := s.SDK.DeleteTrustStore(ctx, operations.DeleteTrustStoreRequest{
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        TrustStoreArn: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTrustStoreResponse != nil {
        // handle response
    }
}
```

## DeleteUserAccessLoggingSettings

Deletes user access logging settings.

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
    res, err := s.SDK.DeleteUserAccessLoggingSettings(ctx, operations.DeleteUserAccessLoggingSettingsRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        UserAccessLoggingSettingsArn: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## DeleteUserSettings

Deletes user settings.

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
    res, err := s.SDK.DeleteUserSettings(ctx, operations.DeleteUserSettingsRequest{
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        UserSettingsArn: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserSettingsResponse != nil {
        // handle response
    }
}
```

## DisassociateBrowserSettings

Disassociates browser settings from a web portal.

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
    res, err := s.SDK.DisassociateBrowserSettings(ctx, operations.DisassociateBrowserSettingsRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        PortalArn: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## DisassociateNetworkSettings

Disassociates network settings from a web portal.

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
    res, err := s.SDK.DisassociateNetworkSettings(ctx, operations.DisassociateNetworkSettingsRequest{
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
        PortalArn: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## DisassociateTrustStore

Disassociates a trust store from a web portal.

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
    res, err := s.SDK.DisassociateTrustStore(ctx, operations.DisassociateTrustStoreRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        PortalArn: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateTrustStoreResponse != nil {
        // handle response
    }
}
```

## DisassociateUserAccessLoggingSettings

Disassociates user access logging settings from a web portal.

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
    res, err := s.SDK.DisassociateUserAccessLoggingSettings(ctx, operations.DisassociateUserAccessLoggingSettingsRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        PortalArn: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## DisassociateUserSettings

Disassociates user settings from a web portal.

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
    res, err := s.SDK.DisassociateUserSettings(ctx, operations.DisassociateUserSettingsRequest{
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("debitis"),
        PortalArn: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateUserSettingsResponse != nil {
        // handle response
    }
}
```

## GetBrowserSettings

Gets browser settings.

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
    res, err := s.SDK.GetBrowserSettings(ctx, operations.GetBrowserSettingsRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        BrowserSettingsArn: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## GetIdentityProvider

Gets the identity provider.

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
    res, err := s.SDK.GetIdentityProvider(ctx, operations.GetIdentityProviderRequest{
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        IdentityProviderArn: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIdentityProviderResponse != nil {
        // handle response
    }
}
```

## GetNetworkSettings

Gets the network settings.

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
    res, err := s.SDK.GetNetworkSettings(ctx, operations.GetNetworkSettingsRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        NetworkSettingsArn: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## GetPortal

Gets the web portal.

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
    res, err := s.SDK.GetPortal(ctx, operations.GetPortalRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        PortalArn: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortalResponse != nil {
        // handle response
    }
}
```

## GetPortalServiceProviderMetadata

Gets the service provider metadata.

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
    res, err := s.SDK.GetPortalServiceProviderMetadata(ctx, operations.GetPortalServiceProviderMetadataRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        PortalArn: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPortalServiceProviderMetadataResponse != nil {
        // handle response
    }
}
```

## GetTrustStore

Gets the trust store.

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
    res, err := s.SDK.GetTrustStore(ctx, operations.GetTrustStoreRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
        TrustStoreArn: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrustStoreResponse != nil {
        // handle response
    }
}
```

## GetTrustStoreCertificate

Gets the trust store certificate.

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
    res, err := s.SDK.GetTrustStoreCertificate(ctx, operations.GetTrustStoreCertificateRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("eaque"),
        Thumbprint: "quis",
        TrustStoreArn: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrustStoreCertificateResponse != nil {
        // handle response
    }
}
```

## GetUserAccessLoggingSettings

Gets user access logging settings.

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
    res, err := s.SDK.GetUserAccessLoggingSettings(ctx, operations.GetUserAccessLoggingSettingsRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        UserAccessLoggingSettingsArn: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## GetUserSettings

Gets user settings.

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
    res, err := s.SDK.GetUserSettings(ctx, operations.GetUserSettingsRequest{
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        UserSettingsArn: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserSettingsResponse != nil {
        // handle response
    }
}
```

## ListBrowserSettings

Retrieves a list of browser settings.

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
    res, err := s.SDK.ListBrowserSettings(ctx, operations.ListBrowserSettingsRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        MaxResults: sdk.Int64(934214),
        NextToken: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## ListIdentityProviders

Retrieves a list of identity providers for a specific web portal.

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
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        MaxResults: sdk.Int64(964490),
        NextToken: sdk.String("quaerat"),
        PortalArn: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityProvidersResponse != nil {
        // handle response
    }
}
```

## ListNetworkSettings

Retrieves a list of network settings.

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
    res, err := s.SDK.ListNetworkSettings(ctx, operations.ListNetworkSettingsRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
        MaxResults: sdk.Int64(569574),
        NextToken: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## ListPortals

Retrieves a list or web portals.

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
    res, err := s.SDK.ListPortals(ctx, operations.ListPortalsRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        MaxResults: sdk.Int64(58029),
        NextToken: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPortalsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves a list of tags for a resource.

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
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        ResourceArn: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTrustStoreCertificates

Retrieves a list of trust store certificates.

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
    res, err := s.SDK.ListTrustStoreCertificates(ctx, operations.ListTrustStoreCertificatesRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        MaxResults: sdk.Int64(478596),
        NextToken: sdk.String("voluptate"),
        TrustStoreArn: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustStoreCertificatesResponse != nil {
        // handle response
    }
}
```

## ListTrustStores

Retrieves a list of trust stores.

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
    res, err := s.SDK.ListTrustStores(ctx, operations.ListTrustStoresRequest{
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        MaxResults: sdk.Int64(456015),
        NextToken: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustStoresResponse != nil {
        // handle response
    }
}
```

## ListUserAccessLoggingSettings

Retrieves a list of user access logging settings.

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
    res, err := s.SDK.ListUserAccessLoggingSettings(ctx, operations.ListUserAccessLoggingSettingsRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        MaxResults: sdk.Int64(320017),
        NextToken: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## ListUserSettings

Retrieves a list of user settings.

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
    res, err := s.SDK.ListUserSettings(ctx, operations.ListUserSettingsRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        MaxResults: sdk.Int64(55),
        NextToken: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserSettingsResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or overwrites one or more tags for the specified resource.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            ClientToken: sdk.String("quaerat"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vel",
                    Value: "quod",
                },
                shared.Tag{
                    Key: "officiis",
                    Value: "qui",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        ResourceArn: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified resource.

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
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        ResourceArn: "totam",
        TagKeys: []string{
            "sit",
            "expedita",
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

## UpdateBrowserSettings

Updates browser settings.

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
    res, err := s.SDK.UpdateBrowserSettings(ctx, operations.UpdateBrowserSettingsRequest{
        RequestBody: operations.UpdateBrowserSettingsRequestBody{
            BrowserPolicy: sdk.String("neque"),
            ClientToken: sdk.String("sed"),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        BrowserSettingsArn: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBrowserSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateIdentityProvider

Updates the identity provider. 

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
    res, err := s.SDK.UpdateIdentityProvider(ctx, operations.UpdateIdentityProviderRequest{
        RequestBody: operations.UpdateIdentityProviderRequestBody{
            ClientToken: sdk.String("cupiditate"),
            IdentityProviderDetails: map[string]string{
                "pariatur": "soluta",
                "dicta": "laborum",
                "totam": "incidunt",
                "aspernatur": "dolores",
            },
            IdentityProviderName: sdk.String("distinctio"),
            IdentityProviderType: operations.UpdateIdentityProviderRequestBodyIdentityProviderTypeEnumSignInWithApple.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        IdentityProviderArn: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIdentityProviderResponse != nil {
        // handle response
    }
}
```

## UpdateNetworkSettings

Updates network settings.

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
    res, err := s.SDK.UpdateNetworkSettings(ctx, operations.UpdateNetworkSettingsRequest{
        RequestBody: operations.UpdateNetworkSettingsRequestBody{
            ClientToken: sdk.String("odio"),
            SecurityGroupIds: []string{
                "ullam",
            },
            SubnetIds: []string{
                "hic",
                "voluptatem",
                "cumque",
            },
            VpcID: sdk.String("soluta"),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
        NetworkSettingsArn: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSettingsResponse != nil {
        // handle response
    }
}
```

## UpdatePortal

Updates a web portal.

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
    res, err := s.SDK.UpdatePortal(ctx, operations.UpdatePortalRequest{
        RequestBody: operations.UpdatePortalRequestBody{
            AuthenticationType: operations.UpdatePortalRequestBodyAuthenticationTypeEnumIamIdentityCenter.ToPointer(),
            DisplayName: sdk.String("aperiam"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        PortalArn: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePortalResponse != nil {
        // handle response
    }
}
```

## UpdateTrustStore

Updates the trust store.

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
    res, err := s.SDK.UpdateTrustStore(ctx, operations.UpdateTrustStoreRequest{
        RequestBody: operations.UpdateTrustStoreRequestBody{
            CertificatesToAdd: []string{
                "quas",
            },
            CertificatesToDelete: []string{
                "consequatur",
                "est",
                "repellendus",
                "porro",
            },
            ClientToken: sdk.String("doloribus"),
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("odio"),
        TrustStoreArn: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrustStoreResponse != nil {
        // handle response
    }
}
```

## UpdateUserAccessLoggingSettings

Updates the user access logging settings.

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
    res, err := s.SDK.UpdateUserAccessLoggingSettings(ctx, operations.UpdateUserAccessLoggingSettingsRequest{
        RequestBody: operations.UpdateUserAccessLoggingSettingsRequestBody{
            ClientToken: sdk.String("voluptatibus"),
            KinesisStreamArn: sdk.String("quisquam"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        UserAccessLoggingSettingsArn: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserAccessLoggingSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateUserSettings

Updates the user settings.

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
    res, err := s.SDK.UpdateUserSettings(ctx, operations.UpdateUserSettingsRequest{
        RequestBody: operations.UpdateUserSettingsRequestBody{
            ClientToken: sdk.String("tenetur"),
            CopyAllowed: operations.UpdateUserSettingsRequestBodyCopyAllowedEnumDisabled.ToPointer(),
            DisconnectTimeoutInMinutes: sdk.Int64(941378),
            DownloadAllowed: operations.UpdateUserSettingsRequestBodyDownloadAllowedEnumEnabled.ToPointer(),
            IdleDisconnectTimeoutInMinutes: sdk.Int64(799203),
            PasteAllowed: operations.UpdateUserSettingsRequestBodyPasteAllowedEnumDisabled.ToPointer(),
            PrintAllowed: operations.UpdateUserSettingsRequestBodyPrintAllowedEnumEnabled.ToPointer(),
            UploadAllowed: operations.UpdateUserSettingsRequestBodyUploadAllowedEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        UserSettingsArn: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserSettingsResponse != nil {
        // handle response
    }
}
```
