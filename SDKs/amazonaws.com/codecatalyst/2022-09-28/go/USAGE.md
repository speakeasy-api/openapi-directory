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
            ExpiresTime: "2022-09-10T18:45:35.413Z",
            Name: "provident",
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