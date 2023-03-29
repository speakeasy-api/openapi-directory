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

    req := operations.CancelOrderRequest{
        PathParams: operations.CancelOrderPathParams{
            OrderID: "unde",
        },
        Headers: operations.CancelOrderHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CancelOrder(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelOrderOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->