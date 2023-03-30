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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAccessTokenRequest{
        Request: operations.CreateAccessTokenRequestBody{
            ExpiresTime: "2021-10-25T05:21:43.948Z",
            Name: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->