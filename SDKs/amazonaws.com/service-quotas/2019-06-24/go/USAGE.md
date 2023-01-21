<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateServiceQuotaTemplateRequest{
        Headers: operations.AssociateServiceQuotaTemplateHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
        },
        Request: map[string]interface{}{
            "et": "nihil",
        },
    }
    
    res, err := s.AssociateServiceQuotaTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceQuotaTemplateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->