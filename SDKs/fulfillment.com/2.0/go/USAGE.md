<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.PostOauthAccessTokenRequest{
        Request: "nostrum",
    }
    
    res, err := s.Auth.PostOauthAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenResponseV2 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->