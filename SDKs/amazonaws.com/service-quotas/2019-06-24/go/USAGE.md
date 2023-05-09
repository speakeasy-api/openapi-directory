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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssociateServiceQuotaTemplate(ctx, operations.AssociateServiceQuotaTemplateRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.AssociateServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624AssociateServiceQuotaTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceQuotaTemplateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->