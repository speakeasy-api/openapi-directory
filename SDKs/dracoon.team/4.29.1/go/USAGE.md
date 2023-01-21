<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CompleteOpenIDLoginRequest{
        QueryParams: operations.CompleteOpenIDLoginQueryParams{
            Code: "sit",
            IDToken: "voluptas",
            State: "culpa",
        },
    }
    
    res, err := s.Auth.CompleteOpenIDLogin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->