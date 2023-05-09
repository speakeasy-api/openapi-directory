<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Authentication.RequestAccessToken(ctx, operations.RequestAccessTokenRequest{
        RequestBody: &operations.RequestAccessTokenRequestBody{},
        XAblyVersion: sdk.String("corrupti"),
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
        KeyName: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->