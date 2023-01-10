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
            XAmzAlgorithm: "dolores",
            XAmzContentSha256: "fuga",
            XAmzCredential: "et",
            XAmzDate: "qui",
            XAmzSecurityToken: "voluptatum",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "distinctio",
        },
        Request: operations.CreateSavingsPlanRequestBody{
            ClientToken: "dicta",
            Commitment: "tenetur",
            PurchaseTime: "2000-01-18T13:27:19Z",
            SavingsPlanOfferingID: "cupiditate",
            Tags: map[string]string{
                "facere": "sequi",
                "rerum": "enim",
                "qui": "unde",
            },
            UpfrontPaymentAmount: "assumenda",
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