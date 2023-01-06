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
                BasicAuth: &shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.RequestAccessTokenRequest{
        PathParams: operations.RequestAccessTokenPathParams{
            KeyName: "dolor",
        },
        QueryParams: operations.RequestAccessTokenQueryParams{
            Format: "html",
        },
        Headers: operations.RequestAccessTokenHeaders{
            XAblyVersion: "voluptas",
        },
        Request: "fugit",
    }
    
    res, err := s.Authentication.RequestAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenDetails != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->