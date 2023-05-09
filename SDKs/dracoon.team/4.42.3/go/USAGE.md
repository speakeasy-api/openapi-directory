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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.CompleteOpenIDLogin(ctx, operations.CompleteOpenIDLoginRequest{
        Code: "corrupti",
        IDToken: sdk.String("provident"),
        State: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->