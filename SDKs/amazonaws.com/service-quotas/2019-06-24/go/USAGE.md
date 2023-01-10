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
            XAmzAlgorithm: "dolore",
            XAmzContentSha256: "eveniet",
            XAmzCredential: "aut",
            XAmzDate: "velit",
            XAmzSecurityToken: "omnis",
            XAmzSignature: "amet",
            XAmzSignedHeaders: "numquam",
            XAmzTarget: "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
        },
        Request: map[string]interface{}{
            "ex": "id",
            "ea": "non",
            "non": "quam",
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