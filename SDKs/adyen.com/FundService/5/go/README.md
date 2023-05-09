# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/FundService/5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [General](docs/general/README.md)

* [PostAccountHolderBalance](docs/general/README.md#postaccountholderbalance) - Get the balances of an account holder
* [PostAccountHolderTransactionList](docs/general/README.md#postaccountholdertransactionlist) - Get a list of transactions
* [PostDebitAccountHolder](docs/general/README.md#postdebitaccountholder) - Send a direct debit request
* [PostPayoutAccountHolder](docs/general/README.md#postpayoutaccountholder) - Pay out from an account to the account holder
* [PostRefundFundsTransfer](docs/general/README.md#postrefundfundstransfer) - Refund a funds transfer
* [PostRefundNotPaidOutTransfers](docs/general/README.md#postrefundnotpaidouttransfers) - Refund all transactions of an account since the most recent payout
* [PostSetupBeneficiary](docs/general/README.md#postsetupbeneficiary) - Designate a beneficiary account and transfer the benefactor's current balance
* [PostTransferFunds](docs/general/README.md#posttransferfunds) - Transfer funds between platform accounts
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
