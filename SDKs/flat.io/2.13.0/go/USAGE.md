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

    req := operations.GetAuthenticatedUserRequest{
        Security: operations.GetAuthenticatedUserSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetAuthenticatedUserQueryParams{
            OnlyID: false,
        },
    }

    ctx := context.Background()
    res, err := s.Account.GetAuthenticatedUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->