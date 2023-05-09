<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PostDisable(ctx, shared.DisableRequest{
        Contract: sdk.String("corrupti"),
        MerchantAccount: "provident",
        RecurringDetailReference: sdk.String("distinctio"),
        ShopperReference: "quibusdam",
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