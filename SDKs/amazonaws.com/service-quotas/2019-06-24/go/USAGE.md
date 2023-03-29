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

    req := operations.AssociateServiceQuotaTemplateRequest{
        Headers: operations.AssociateServiceQuotaTemplateHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
        },
        Request: map[string]interface{}{
            "fuga": "facilis",
            "eum": "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateServiceQuotaTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceQuotaTemplateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->