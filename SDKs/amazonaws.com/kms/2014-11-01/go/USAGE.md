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

    req := operations.CancelKeyDeletionRequest{
        Headers: operations.CancelKeyDeletionHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "TrentService.CancelKeyDeletion",
        },
        Request: shared.CancelKeyDeletionRequest{
            KeyID: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.CancelKeyDeletion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelKeyDeletionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->