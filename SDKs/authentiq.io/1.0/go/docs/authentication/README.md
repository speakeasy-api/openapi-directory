# Authentication

### Available Operations

* [Authorize](#authorize) - Authenticate a user
* [Token](#token) - Obtain an ID Token
* [UserInfo](#userinfo) - Retrieve a user profile

## Authorize

Start a session with Authentiq Connect to authenticate a user.

```
GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
```

This endpoint also supports the POST method.


OIDC Authorization Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint>

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
    res, err := s.Authentication.Authorize(ctx, operations.AuthorizeRequest{
        ClientID: "suscipit",
        Display: sdk.String("iure"),
        MaxAge: sdk.Int64(297534),
        Nonce: sdk.String("debitis"),
        Prompt: sdk.String("ipsa"),
        RedirectURI: "delectus",
        ResponseMode: sdk.String("tempora"),
        ResponseType: "suscipit",
        Scope: "molestiae",
        State: "minus",
        UILocales: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Token

Exchange en authorization code for an ID Token or Access Token.

This endpoint supports both `client_secret_basic` (default) and `client_secret_basic` authentication methods, as specified by the client's `token_endpoint_auth_method`.


OIDC Token Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint>

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
    res, err := s.Authentication.Token(ctx, operations.TokenRequest{
        Authorization: sdk.String("voluptatum"),
        RequestBody: operations.TokenRequestBody{
            ClientID: "iusto",
            ClientSecret: "excepturi",
            Code: "nisi",
            GrantType: "recusandae",
            RedirectURI: "temporibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```

## UserInfo

Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint.


OIDC UserInfo Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#UserInfo>

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
    res, err := s.Authentication.UserInfo(ctx, operations.UserInfoSecurity{
        OauthCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserInfo != nil {
        // handle response
    }
}
```
