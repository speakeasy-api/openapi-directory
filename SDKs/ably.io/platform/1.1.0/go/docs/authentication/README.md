# Authentication

### Available Operations

* [RequestAccessToken](#requestaccesstoken) - Request an access token

## RequestAccessToken

This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.RequestAccessToken(ctx, operations.RequestAccessTokenRequest{
        RequestBody: &operations.RequestAccessTokenRequestBody{},
        XAblyVersion: sdk.String("quibusdam"),
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
        KeyName: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenDetails != nil {
        // handle response
    }
}
```
