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
        OnlyID: false,
    }

    ctx := context.Background()
    res, err := s.Account.GetAuthenticatedUser(ctx, req, operations.GetAuthenticatedUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->