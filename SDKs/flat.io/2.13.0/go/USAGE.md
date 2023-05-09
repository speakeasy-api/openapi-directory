<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAuthenticatedUser(ctx, operations.GetAuthenticatedUserRequest{
        OnlyID: sdk.Bool(false),
    }, operations.GetAuthenticatedUserSecurity{
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