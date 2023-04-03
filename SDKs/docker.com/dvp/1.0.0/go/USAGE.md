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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := shared.Users2FALoginRequest{
        Code: "123456",
        Login2faToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    }

    ctx := context.Background()
    res, err := s.Authentication.PostUsers2FALogin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUsersLoginSuccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->