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

    req := operations.AcknowledgeOrderReceiptRequest{
        Headers: operations.AcknowledgeOrderReceiptHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AcknowledgeOrderReceiptRequestBody{
            OrderArn: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.AcknowledgeOrderReceipt(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcknowledgeOrderReceiptResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->