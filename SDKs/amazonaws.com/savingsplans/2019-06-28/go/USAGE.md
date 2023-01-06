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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ea",
            XAmzCredential: "quia",
            XAmzDate: "sed",
            XAmzSecurityToken: "dolorem",
            XAmzSignature: "accusamus",
            XAmzSignedHeaders: "ut",
        },
        Request: operations.CreateSavingsPlanRequestBody{
            ClientToken: "perspiciatis",
            Commitment: "molestias",
            PurchaseTime: "2005-11-24T14:42:24Z",
            SavingsPlanOfferingID: "hic",
            Tags: map[string]string{
                "rerum": "voluptates",
            },
            UpfrontPaymentAmount: "iste",
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