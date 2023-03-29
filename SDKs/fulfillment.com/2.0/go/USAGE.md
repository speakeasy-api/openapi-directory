<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PostOauthAccessTokenRequest{
        Request: operations.PostOauthAccessTokenAccessTokenRequestV2{},
    }

    ctx := context.Background()
    res, err := s.Auth.PostOauthAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenResponseV2 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->