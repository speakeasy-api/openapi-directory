<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostDisable(ctx, shared.DisableRequest{
        Contract: sdk.String("corrupti"),
        MerchantAccount: "provident",
        RecurringDetailReference: sdk.String("distinctio"),
        ShopperReference: "quibusdam",
    }, operations.PostDisableSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->