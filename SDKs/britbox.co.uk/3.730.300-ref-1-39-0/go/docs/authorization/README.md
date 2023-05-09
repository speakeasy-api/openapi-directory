# Authorization

### Available Operations

* [GenerateDeviceAuthorizationCode](#generatedeviceauthorizationcode) - Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [GetAccountToken](#getaccounttoken) - Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.

* [GetAccountTokenByCode](#getaccounttokenbycode) - Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.

* [GetProfileToken](#getprofiletoken) - Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.

* [RefreshToken](#refreshtoken) - Refresh an account or profile level authorization token which is marked as refreshable.
* [SignOut](#signout) - When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.

* [SingleSignOn](#singlesignon) - Exchange a third party single-sign-on token for our own authorization tokens.

## GenerateDeviceAuthorizationCode

Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.


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
    res, err := s.Authorization.GenerateDeviceAuthorizationCode(ctx, operations.GenerateDeviceAuthorizationCodeRequest{
        DeviceRegistrationRequest: shared.DeviceRegistrationRequest{
            ID: "4251904e-523c-47e0-bc71-78e4796f2a70",
            Name: "Franklin Lynch",
            Type: "deleniti",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
        },
        Lang: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceAuthorizationCode != nil {
        // handle response
    }
}
```

## GetAccountToken

Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.


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
    res, err := s.Authorization.GetAccountToken(ctx, operations.GetAccountTokenRequest{
        AccountTokenRequest: shared.AccountTokenRequest{
            CookieType: shared.AccountTokenRequestCookieTypeEnumSession.ToPointer(),
            Email: "Braulio.Hansen@yahoo.com",
            Password: "sapiente",
            Scopes: []shared.AccountTokenRequestScopesEnum{
                shared.AccountTokenRequestScopesEnumCatalog,
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokens != nil {
        // handle response
    }
}
```

## GetAccountTokenByCode

Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.


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
    res, err := s.Authorization.GetAccountTokenByCode(ctx, operations.GetAccountTokenByCodeRequest{
        AccountTokenByCodeRequest: shared.AccountTokenByCodeRequest{
            Code: "atque",
            ID: "17ee17cb-e61e-46b7-b95b-c0ab3c20c4f3",
            Scopes: []shared.AccountTokenByCodeRequestScopesEnum{
                shared.AccountTokenByCodeRequestScopesEnumSettings,
                shared.AccountTokenByCodeRequestScopesEnumSettings,
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumAll,
        },
        Lang: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokens != nil {
        // handle response
    }
}
```

## GetProfileToken

Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.


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
    res, err := s.Authorization.GetProfileToken(ctx, operations.GetProfileTokenRequest{
        ProfileTokenRequest: shared.ProfileTokenRequest{
            CookieType: shared.ProfileTokenRequestCookieTypeEnumPersistent.ToPointer(),
            Pin: sdk.String("sint"),
            ProfileID: "pariatur",
            Scopes: []shared.ProfileTokenRequestScopesEnum{
                shared.ProfileTokenRequestScopesEnumCatalog,
                shared.ProfileTokenRequestScopesEnumSettings,
                shared.ProfileTokenRequestScopesEnumSettings,
                shared.ProfileTokenRequestScopesEnumSettings,
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("quasi"),
    }, operations.GetProfileTokenSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokens != nil {
        // handle response
    }
}
```

## RefreshToken

Refresh an account or profile level authorization token which is marked as refreshable.

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
    res, err := s.Authorization.RefreshToken(ctx, operations.RefreshTokenRequest{
        TokenRefreshRequest: shared.TokenRefreshRequest{
            CookieType: shared.TokenRefreshRequestCookieTypeEnumPersistent.ToPointer(),
            Token: "culpa",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumAll,
        },
        Lang: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessToken != nil {
        // handle response
    }
}
```

## SignOut

When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.


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
    res, err := s.Authorization.SignOut(ctx, operations.SignOutRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SingleSignOn

Exchange a third party single-sign-on token for our own authorization tokens.

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
    res, err := s.Authorization.SingleSignOn(ctx, operations.SingleSignOnRequest{
        SingleSignOnRequest: shared.SingleSignOnRequest{
            CookieType: shared.SingleSignOnRequestCookieTypeEnumPersistent.ToPointer(),
            LinkAccounts: sdk.Bool(false),
            Provider: shared.SingleSignOnRequestProviderEnumFacebook,
            Scopes: []shared.SingleSignOnRequestScopesEnum{
                shared.SingleSignOnRequestScopesEnumCatalog,
                shared.SingleSignOnRequestScopesEnumCommerce,
                shared.SingleSignOnRequestScopesEnumPlayback,
            },
            Token: "dicta",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokens != nil {
        // handle response
    }
}
```
