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
    
    req := operations.CreateSavingsPlanRequest{
        Headers: operations.CreateSavingsPlanHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateSavingsPlanRequestBody{
            ClientToken: "voluptas",
            Commitment: "fugit",
            PurchaseTime: "2011-08-12T10:11:12Z",
            SavingsPlanOfferingID: "nihil",
            Tags: map[string]string{
                "dicta": "debitis",
                "voluptatum": "et",
                "ut": "dolorem",
            },
            UpfrontPaymentAmount: "et",
        },
    }
    
    res, err := s.CreateSavingsPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSavingsPlanResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->