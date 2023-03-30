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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.CompleteOpenIDLoginRequest{
        QueryParams: operations.CompleteOpenIDLoginQueryParams{
            Code: "unde",
            IDToken: "deserunt",
            State: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Auth.CompleteOpenIDLogin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->