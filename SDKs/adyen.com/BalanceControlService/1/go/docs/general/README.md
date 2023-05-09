# General

### Available Operations

* [PostBalanceTransfer](#postbalancetransfer) - Start a balance transfer

## PostBalanceTransfer

Starts a balance transfer request between merchant accounts. The following conditions must be met before you can successfully transfer balances:

* The source and destination merchant accounts must be under the same company account and legal entity.

* The source merchant account must have sufficient funds.

* The source and destination merchant accounts must have at least one common processing currency.

When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.


### Example Usage

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
    res, err := s.General.PostBalanceTransfer(ctx, shared.BalanceTransferRequest{
        Amount: shared.Amount{
            Currency: "illum",
            Value: 423655,
        },
        Description: sdk.String("error"),
        FromMerchant: "deserunt",
        Reference: sdk.String("suscipit"),
        ToMerchant: "iure",
        Type: shared.BalanceTransferRequestTypeEnumFee,
    }, operations.PostBalanceTransferSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceTransferResponse != nil {
        // handle response
    }
}
```
