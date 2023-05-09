# SystemAuthConfig

## Overview

System settings (authentication methods)

### Available Operations

* [CreateAdConfig](#createadconfig) - Create Active Directory configuration
* [CreateOAuthClient](#createoauthclient) - Create OAuth client
* [CreateOpenIDIdpConfig](#createopenididpconfig) - Create OpenID Connect IDP configuration
* [CreateRadiusConfig](#createradiusconfig) - Create RADIUS configuration
* [RemoveAdConfig](#removeadconfig) - Remove Active Directory configuration
* [RemoveOAuthClient](#removeoauthclient) - Remove OAuth client
* [RemoveOpenIDIdpConfig](#removeopenididpconfig) - Remove OpenID Connect IDP configuration
* [RemoveRadiusConfig](#removeradiusconfig) - Remove RADIUS configuration
* [RequestAdConfig](#requestadconfig) - Request Active Directory configuration
* [RequestAdConfigs](#requestadconfigs) - Request list of Active Directory configurations
* [RequestOAuthClient](#requestoauthclient) - Request OAuth client
* [RequestOAuthClients](#requestoauthclients) - Request list of OAuth clients
* [RequestOpenIDIdpConfig](#requestopenididpconfig) - Request OpenID Connect IDP configuration
* [RequestOpenIDIdpConfigs](#requestopenididpconfigs) - Request list of OpenID Connect IDP configurations
* [RequestRadiusConfig](#requestradiusconfig) - Request RADIUS configuration
* [TestAdConfig](#testadconfig) - Test Active Directory configuration
* [TestRadiusConfig](#testradiusconfig) - Test RADIUS server availability
* [UpdateAdConfig](#updateadconfig) - Update Active Directory configuration
* [UpdateOAuthClient](#updateoauthclient) - Update OAuth client
* [UpdateOpenIDIdpConfig](#updateopenididpconfig) - Update OpenID Connect IDP configuration
* [UpdateRadiusConfig](#updateradiusconfig) - Update RADIUS configuration

## CreateAdConfig

### Description:
Create a new Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.

### Postcondition:
New Active Directory configuration created.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.CreateAdConfig(ctx, operations.CreateAdConfigRequest{
        CreateActiveDirectoryConfigRequest: shared.CreateActiveDirectoryConfigRequest{
            AdExportGroup: sdk.String("id"),
            Alias: "ab",
            CreateHomeFolder: sdk.Bool(false),
            HomeFolderParent: sdk.Int64(625358),
            LdapUsersDomain: "possimus",
            SdsImportGroup: sdk.Int64(913992),
            ServerAdminName: "mollitia",
            ServerAdminPassword: "laborum",
            ServerIP: "libero",
            ServerPort: 324083,
            SslFingerPrint: sdk.String("deleniti"),
            UseLdaps: sdk.Bool(false),
            UserFilter: "enim",
            UserImport: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveDirectoryConfig != nil {
        // handle response
    }
}
```

## CreateOAuthClient

### Description:
Create a new OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New OAuth client created.

### Further Information:  
Client secret **MUST** have:  
* at least 12 characters, at most 32 characters  
* only lower case characters, upper case characters and digits  
* at least 1 lower case character, 1 upper case character and 1 digit  

The client secret is optional and will be generated if it is left empty.  

Valid grant types are:  
* `authorization_code`  
* `implicit`  
* `password`  
* `client_credentials`  
* `refresh_token`  

Grant type `client_credentials` is currently **NOT** permitted!

Allowed characters for client ID are: `[a-zA-Z0-9_-]`

If grant types `authorization_code` or `implicit` are used, a
redirect URI **MUST** be provided!

Default access token validity: **8 hours**  
Default refresh token validity: **30 days**
Default approval validity: **½ year**

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.CreateOAuthClient(ctx, operations.CreateOAuthClientRequest{
        CreateOAuthClientRequest: shared.CreateOAuthClientRequest{
            AccessTokenValidity: sdk.Int(833316),
            ApprovalValidity: sdk.Int(405036),
            ClientID: sdk.String("quo"),
            ClientName: "ex",
            ClientSecret: sdk.String("ut"),
            ClientType: shared.CreateOAuthClientRequestClientTypeEnumConfidential.ToPointer(),
            GrantTypes: []shared.CreateOAuthClientRequestGrantTypesEnum{
                shared.CreateOAuthClientRequestGrantTypesEnumAuthorizationCode,
                shared.CreateOAuthClientRequestGrantTypesEnumImplicit,
                shared.CreateOAuthClientRequestGrantTypesEnumPassword,
            },
            RedirectUris: []string{
                "beatae",
                "voluptatum",
            },
            RefreshTokenValidity: sdk.Int(606308),
        },
        XSdsAuthToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthClient != nil {
        // handle response
    }
}
```

## CreateOpenIDIdpConfig

### Description:
Create new OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New OpenID Connect IDP configuration is created.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.CreateOpenIDIdpConfig(ctx, operations.CreateOpenIDIdpConfigRequest{
        CreateOpenIDIdpConfigRequest: shared.CreateOpenIDIdpConfigRequest{
            AuthorizationEndPointURL: "rerum",
            ClientID: "est",
            ClientSecret: "culpa",
            FallbackMappingClaim: sdk.String("voluptatem"),
            Flow: shared.CreateOpenIDIdpConfigRequestFlowEnumHybrid.ToPointer(),
            Issuer: "officiis",
            JwksEndPointURL: "architecto",
            MappingClaim: "fuga",
            Name: "Ms. Doyle Barrows",
            PkceChallengeMethod: sdk.String("ex"),
            PkceEnabled: sdk.Bool(false),
            RedirectUris: []string{
                "rem",
                "minus",
                "nemo",
                "asperiores",
            },
            Scopes: []string{
                "ullam",
            },
            TokenEndPointURL: "perferendis",
            UserImportEnabled: sdk.Bool(false),
            UserImportGroup: sdk.Int64(848341),
            UserInfoEndPointURL: "totam",
            UserInfoSource: shared.CreateOpenIDIdpConfigRequestUserInfoSourceEnumIDToken.ToPointer(),
            UserManagementURL: sdk.String("quibusdam"),
            UserUpdateEnabled: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDIdpConfig != nil {
        // handle response
    }
}
```

## CreateRadiusConfig

### Description:  
Create new RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New RADIUS configuration is created.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.CreateRadiusConfig(ctx, operations.CreateRadiusConfigRequest{
        RadiusConfigCreateRequest: shared.RadiusConfigCreateRequest{
            FailoverServer: &shared.FailoverServer{
                FailoverEnabled: false,
                FailoverIPAddress: "ipsam",
                FailoverPort: 633415,
            },
            IPAddress: "dolor",
            OtpPinFirst: sdk.Bool(false),
            Port: 307376,
            SharedSecret: "inventore",
        },
        XSdsAuthToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RadiusConfig != nil {
        // handle response
    }
}
```

## RemoveAdConfig

### Description:
Delete an existing Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration is removed.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RemoveAdConfig(ctx, operations.RemoveAdConfigRequest{
        XSdsAuthToken: sdk.String("veritatis"),
        AdID: 274575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveOAuthClient

### Description:
Delete an existing OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OAuth client is removed.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RemoveOAuthClient(ctx, operations.RemoveOAuthClientRequest{
        XSdsAuthToken: sdk.String("dolor"),
        ClientID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveOpenIDIdpConfig

### Description:
Delete an existing OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OpenID Connect IDP configuration is removed.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RemoveOpenIDIdpConfig(ctx, operations.RemoveOpenIDIdpConfigRequest{
        XSdsAuthToken: sdk.String("architecto"),
        IdpID: 24944,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveRadiusConfig

### Description:  
Delete existing RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is deleted.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RemoveRadiusConfig(ctx, operations.RemoveRadiusConfigRequest{
        XSdsAuthToken: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestAdConfig

### Description:  
Retrieve the configuration of an Active Directory.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestAdConfig(ctx, operations.RequestAdConfigRequest{
        XSdsAuthToken: sdk.String("fugit"),
        AdID: 66149,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveDirectoryConfig != nil {
        // handle response
    }
}
```

## RequestAdConfigs

### Description:  
Retrieve a list of configured Active Directories.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.

### Postcondition:
List of Active Directory configurations is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestAdConfigs(ctx, operations.RequestAdConfigsRequest{
        XSdsAuthToken: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveDirectoryConfigList != nil {
        // handle response
    }
}
```

## RequestOAuthClient

### Description:  
Retrieve the configuration of an OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OAuth client is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestOAuthClient(ctx, operations.RequestOAuthClientRequest{
        XSdsAuthToken: sdk.String("quae"),
        ClientID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthClient != nil {
        // handle response
    }
}
```

## RequestOAuthClients

### Description:  
Retrieve a list of configured OAuth clients.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of OAuth clients is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isStandard:eq:true`  
Get standard OAuth clients.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `isStandard` | Standard client filter | `eq` |  | `true or false` |
| `isExternal` | External client filter | `eq` |  | `true or false` |
| `isEnabled` | Enabled/disabled clients filter | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`clientName:desc|isStandard:asc`  
Sort by `clientName` descending **AND** `isStandard` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `clientName` | Client name |
| `isStandard` | Is a standard client |
| `isExternal` | Is a external client |
| `isEnabled` | Is a enabled client |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestOAuthClients(ctx, operations.RequestOAuthClientsRequest{
        XSdsAuthToken: sdk.String("fugiat"),
        Filter: sdk.String("ipsam"),
        Sort: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthClients != nil {
        // handle response
    }
}
```

## RequestOpenIDIdpConfig

### Description:  
Retrieve an OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OpenID Connect IDP configuration is returned.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestOpenIDIdpConfig(ctx, operations.RequestOpenIDIdpConfigRequest{
        XSdsAuthToken: sdk.String("ipsa"),
        IdpID: 559682,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDIdpConfig != nil {
        // handle response
    }
}
```

## RequestOpenIDIdpConfigs

### Description:  
Retrieve a list of configured OpenID Connect IDPs.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of OpenID Connect IDP configurations is returned.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestOpenIDIdpConfigs(ctx, operations.RequestOpenIDIdpConfigsRequest{
        XSdsAuthToken: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDIdpConfigs != nil {
        // handle response
    }
}
```

## RequestRadiusConfig

### Description:  
Retrieve a RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.RequestRadiusConfig(ctx, operations.RequestRadiusConfigRequest{
        XSdsAuthToken: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RadiusConfig != nil {
        // handle response
    }
}
```

## TestAdConfig

### Description:  
Test Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration is returned if successful.

### Further Information:
DRACOON tries to establish a connection with the provided information.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.TestAdConfig(ctx, operations.TestAdConfigRequest{
        TestActiveDirectoryConfigRequest: shared.TestActiveDirectoryConfigRequest{
            LdapUsersDomain: "officiis",
            ServerAdminName: "esse",
            ServerAdminPassword: "necessitatibus",
            ServerIP: "sed",
            ServerPort: 332191,
            SslFingerPrint: sdk.String("nesciunt"),
            UseLdaps: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestActiveDirectoryConfigResponse != nil {
        // handle response
    }
}
```

## TestRadiusConfig

### Description:  
Test RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is returned if successful.

### Further Information:
DRACOON tries to establish a connection with the provided information.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.TestRadiusConfig(ctx, operations.TestRadiusConfigRequest{
        XSdsAuthToken: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAdConfig

### Description:  
Update an existing Active Directory configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.

### Postcondition:
Active Directory configuration updated.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.UpdateAdConfig(ctx, operations.UpdateAdConfigRequest{
        UpdateActiveDirectoryConfigRequest: shared.UpdateActiveDirectoryConfigRequest{
            AdExportGroup: sdk.String("vel"),
            Alias: sdk.String("voluptatum"),
            CreateHomeFolder: sdk.Bool(false),
            HomeFolderParent: sdk.Int64(301692),
            LdapUsersDomain: sdk.String("exercitationem"),
            SdsImportGroup: sdk.Int64(70410),
            ServerAdminName: sdk.String("porro"),
            ServerAdminPassword: sdk.String("autem"),
            ServerIP: sdk.String("nobis"),
            ServerPort: sdk.Int(388319),
            SslFingerPrint: sdk.String("recusandae"),
            UseLdaps: sdk.Bool(false),
            UserFilter: sdk.String("consequuntur"),
            UserImport: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("voluptatem"),
        AdID: 350207,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveDirectoryConfig != nil {
        // handle response
    }
}
```

## UpdateOAuthClient

### Description:  
Update an existing OAuth client.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OAuth client updated.

### Further Information:  
Client secret **MUST** have:  
* at least 12 characters, at most 32 characters  
* only lower case characters, upper case characters and digits  
* at least 1 lower case character, 1 upper case character and 1 digit  

The client secret is optional and will be generated if it is left empty.  

Valid grant types are:  
* `authorization_code`  
* `implicit`  
* `password`  
* `client_credentials`  
* `refresh_token`  

Grant type `client_credentials` is currently **NOT** permitted!

If grant types `authorization_code` or `implicit` are used, a
redirect URI **MUST** be provided!


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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.UpdateOAuthClient(ctx, operations.UpdateOAuthClientRequest{
        UpdateOAuthClientRequest: shared.UpdateOAuthClientRequest{
            AccessTokenValidity: sdk.Int(895692),
            ApprovalValidity: sdk.Int(95619),
            ClientName: sdk.String("nisi"),
            ClientSecret: sdk.String("at"),
            ClientType: shared.UpdateOAuthClientRequestClientTypeEnumPublic.ToPointer(),
            GrantTypes: []shared.UpdateOAuthClientRequestGrantTypesEnum{
                shared.UpdateOAuthClientRequestGrantTypesEnumPassword,
                shared.UpdateOAuthClientRequestGrantTypesEnumAuthorizationCode,
                shared.UpdateOAuthClientRequestGrantTypesEnumRefreshToken,
            },
            IsEnabled: sdk.Bool(false),
            RedirectUris: []string{
                "optio",
                "occaecati",
                "nemo",
                "voluptate",
            },
            RefreshTokenValidity: sdk.Int(501063),
        },
        XSdsAuthToken: sdk.String("officia"),
        ClientID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthClient != nil {
        // handle response
    }
}
```

## UpdateOpenIDIdpConfig

### Description:  
Update an existing OpenID Connect IDP configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
OpenID Connect IDP configuration is updated.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.UpdateOpenIDIdpConfig(ctx, operations.UpdateOpenIDIdpConfigRequest{
        UpdateOpenIDIdpConfigRequest: shared.UpdateOpenIDIdpConfigRequest{
            AuthorizationEndPointURL: sdk.String("numquam"),
            ClientID: sdk.String("nemo"),
            ClientSecret: sdk.String("quos"),
            FallbackMappingClaim: sdk.String("eius"),
            Flow: shared.UpdateOpenIDIdpConfigRequestFlowEnumAuthorizationCode.ToPointer(),
            Issuer: sdk.String("ducimus"),
            JwksEndPointURL: sdk.String("nesciunt"),
            MappingClaim: sdk.String("fuga"),
            Name: sdk.String("Randall Boyle"),
            PkceChallengeMethod: sdk.String("dicta"),
            PkceEnabled: sdk.Bool(false),
            RedirectUris: []string{
                "consequuntur",
                "consectetur",
            },
            ResetFallbackMappingClaim: sdk.Bool(false),
            Scopes: []string{
                "cupiditate",
            },
            TokenEndPointURL: sdk.String("reiciendis"),
            UserImportEnabled: sdk.Bool(false),
            UserImportGroup: sdk.Int64(746837),
            UserInfoEndPointURL: sdk.String("alias"),
            UserInfoSource: shared.UpdateOpenIDIdpConfigRequestUserInfoSourceEnumIDToken.ToPointer(),
            UserManagementURL: sdk.String("eos"),
            UserUpdateEnabled: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("occaecati"),
        IdpID: 612867,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDIdpConfig != nil {
        // handle response
    }
}
```

## UpdateRadiusConfig

### Description:  
Update existing RADIUS configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
RADIUS configuration is updated.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemAuthConfig.UpdateRadiusConfig(ctx, operations.UpdateRadiusConfigRequest{
        RadiusConfigUpdateRequest: shared.RadiusConfigUpdateRequest{
            FailoverServer: &shared.FailoverServer{
                FailoverEnabled: false,
                FailoverIPAddress: "magni",
                FailoverPort: 81369,
            },
            IPAddress: sdk.String("fuga"),
            OtpPinFirst: sdk.Bool(false),
            Port: sdk.Int(881897),
            SharedSecret: sdk.String("voluptatibus"),
        },
        XSdsAuthToken: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RadiusConfig != nil {
        // handle response
    }
}
```
