# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/FundService/3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    s := sdk.New()

    req := shared.AccountHolderBalanceRequest{
        AccountHolderCode: "corrupti",
    }

    ctx := context.Background()
    res, err := s.General.PostAccountHolderBalance(ctx, req, operations.PostAccountHolderBalanceSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### General

* `PostAccountHolderBalance` - Get the balances of an account holder
* `PostAccountHolderTransactionList` - Get a list of transactions
* `PostDebitAccountHolder` - Send a direct debit request
* `PostPayoutAccountHolder` - Pay out from an account to the account holder
* `PostRefundFundsTransfer` - Refund a funds transfer
* `PostRefundNotPaidOutTransfers` - Refund all transactions of an account since the most recent payout
* `PostSetupBeneficiary` - Designate a beneficiary account and transfer the benefactor's current balance
* `PostTransferFunds` - Transfer funds between platform accounts
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
