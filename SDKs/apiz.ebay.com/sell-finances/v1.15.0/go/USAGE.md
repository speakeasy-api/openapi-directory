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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Payout.GetPayout(ctx, operations.GetPayoutRequest{
        XEbayCMarketplaceID: sdk.String("corrupti"),
        PayoutID: "provident",
    }, operations.GetPayoutSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Payout != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->