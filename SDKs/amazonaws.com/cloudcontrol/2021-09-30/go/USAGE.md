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

    req := operations.CancelResourceRequestRequest{
        Headers: operations.CancelResourceRequestHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "CloudApiService.CancelResourceRequest",
        },
        Request: shared.CancelResourceRequestInput{
            RequestToken: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.CancelResourceRequest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelResourceRequestOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->