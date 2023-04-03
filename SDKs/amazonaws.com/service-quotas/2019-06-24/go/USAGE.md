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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
        XAmzTarget: "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
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