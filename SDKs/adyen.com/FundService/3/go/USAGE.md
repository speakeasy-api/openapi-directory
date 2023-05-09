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
    res, err := s.General.PostAccountHolderBalance(ctx, shared.AccountHolderBalanceRequest{
        AccountHolderCode: "corrupti",
    }, operations.PostAccountHolderBalanceSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolderBalanceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->