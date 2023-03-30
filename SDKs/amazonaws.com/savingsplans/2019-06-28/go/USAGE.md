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

    req := operations.CreateSavingsPlanRequest{
        Headers: operations.CreateSavingsPlanHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateSavingsPlanRequestBody{
            ClientToken: "illum",
            Commitment: "vel",
            PurchaseTime: "2021-09-16T11:56:06.019Z",
            SavingsPlanOfferingID: "suscipit",
            Tags: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            UpfrontPaymentAmount: "tempora",
        },
    }

    ctx := context.Background()
    res, err := s.CreateSavingsPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSavingsPlanResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->