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

    req := operations.CreateSavingsPlanRequest{
        RequestBody: operations.CreateSavingsPlanRequestBody{
            ClientToken: "corrupti",
            Commitment: "provident",
            PurchaseTime: "2021-04-24T16:27:50.833Z",
            SavingsPlanOfferingID: "unde",
            Tags: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            UpfrontPaymentAmount: "debitis",
        },
        XAmzAlgorithm: "ipsa",
        XAmzContentSha256: "delectus",
        XAmzCredential: "tempora",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "minus",
        XAmzSignedHeaders: "placeat",
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