# Authentication

### Available Operations

* [DeleteAuthToken](#deleteauthtoken) - Remove user access
* [DeleteUsersIDUser](#deleteusersiduser) - Delete the user
* [GetAuthTokenCode](#getauthtokencode) - Generate a user temporary token
* [GetCertificateType](#getcertificatetype) - Get the latest certificate of a type
* [GetUsersIDUser](#getusersiduser) - Get a user
* [GetWebauth](#getwebauth) - First step to establish an oAuth2 connection.
* [PostAdminJwt](#postadminjwt) - Generate a jwt manage token
* [PostAuthInit](#postauthinit) - Create a new anonymous user
* [PostAuthJwt](#postauthjwt) - Generate a user jwt token
* [PostAuthRenew](#postauthrenew) - Get a new access token given an user id and client credentials
* [PostAuthTokenAccess](#postauthtokenaccess) - Transform a temporary code to a access_token
* [PostUsersIDUserToken](#postusersidusertoken) - Create a token

## DeleteAuthToken

This endpoint removes the token in use.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.DeleteAuthToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUsersIDUser

This endpoint deletes the user.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.DeleteUsersIDUser(ctx, operations.DeleteUsersIDUserRequest{
        Expand: sdk.String("laborum"),
        IDUser: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetAuthTokenCode

This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.GetAuthTokenCode(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthTokenCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCertificateType

Get the latest certificate of a type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.GetCertificateType(ctx, operations.GetCertificateTypeRequest{
        Expand: sdk.String("enim"),
        Type: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## GetUsersIDUser

Get a user

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.GetUsersIDUser(ctx, operations.GetUsersIDUserRequest{
        Expand: sdk.String("quo"),
        IDUser: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetWebauth

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.GetWebauth(ctx, operations.GetWebauthRequestBody{
        ClientID: sdk.Int64(949572),
        IDTransfer: sdk.Int64(368725),
        RedirectURI: sdk.String("id"),
        State: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminJwt

This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostAdminJwt(ctx, operations.PostAdminJwtRequestBody{
        Duration: sdk.Int64(13571),
        Scope: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminJwt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAuthInit

This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostAuthInit(ctx, operations.PostAuthInitRequestBody{
        ClientID: sdk.String("error"),
        ClientSecret: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthInit200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAuthJwt

This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostAuthJwt(ctx, operations.PostAuthJwtRequestBody{
        ClientID: sdk.String("laborum"),
        ClientSecret: sdk.String("quasi"),
        Expire: sdk.Bool(false),
        IDUser: sdk.Int64(971945),
        Scope: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthJwt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAuthRenew

Get a new access token given an user id and client credentials

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostAuthRenew(ctx, operations.PostAuthRenewRequestBody{
        ClientID: "vero",
        ClientSecret: "nihil",
        GrantType: sdk.String("praesentium"),
        IDUser: 976762,
        RevokePrevious: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthRenew200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAuthTokenAccess

In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostAuthTokenAccess(ctx, operations.PostAuthTokenAccessRequestBody{
        ClientID: "ipsa",
        ClientSecret: "omnis",
        Code: "voluptate",
        GrantType: sdk.String("cum"),
        RedirectURI: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAuthTokenAccess200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostUsersIDUserToken

Create an access_token for this user and get it.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.PostUsersIDUserToken(ctx, operations.PostUsersIDUserTokenRequest{
        RequestBody: operations.PostUsersIDUserTokenRequestBody{
            Application: "doloremque",
        },
        IDUser: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersIDUserToken200ApplicationJSONObject != nil {
        // handle response
    }
}
```
