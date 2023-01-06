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
    
    req := operations.PostAuthOauthTokenRequest{
        Request: operations.PostAuthOauthTokenRequestBody{
            ClientID: "ea",
            ClientSecret: "labore",
            GrantType: "quasi",
            Scope: "eaque",
        },
    }
    
    res, err := s.Auth.PostAuthOauthToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->