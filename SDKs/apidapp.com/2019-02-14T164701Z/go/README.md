# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apidapp.com/2019-02-14T164701Z/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DeleteKeyKey(ctx, operations.DeleteKeyKeyRequest{
        Key: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteKeyKey](docs/sdk/README.md#deletekeykey)
* [GetAccountID](docs/sdk/README.md#getaccountid) - Get account balance
* [GetBlock](docs/sdk/README.md#getblock) - Access detailed block information
* [GetBlockID](docs/sdk/README.md#getblockid) - Get information about particular block
* [GetBlockIDTransaction](docs/sdk/README.md#getblockidtransaction) - Get transaction count within block
* [GetBlockIDTransactionIndex](docs/sdk/README.md#getblockidtransactionindex) - Get information about particular transaction within block
* [GetBlockchain](docs/sdk/README.md#getblockchain) - Get a list of supported blockchains
* [GetBlockchainID](docs/sdk/README.md#getblockchainid) - Get information about blockchain woth given id
* [GetContractID](docs/sdk/README.md#getcontractid) - Get contract balance
* [GetErc20](docs/sdk/README.md#geterc20) - Get token information such as name, total amount in circulation, etc
* [GetErc20Address](docs/sdk/README.md#geterc20address) - Get information amout token balance in the account
* [GetKey](docs/sdk/README.md#getkey)
* [GetTransactionHash](docs/sdk/README.md#gettransactionhash) - Get information about transaction by the transaction hash value
* [GetTransactionHashReceipt](docs/sdk/README.md#gettransactionhashreceipt) - Get receipt detail information
* [GetVersion](docs/sdk/README.md#getversion) - Get API version info
* [GetWallet](docs/sdk/README.md#getwallet) - Get current account balance
* [GetWalletAccount](docs/sdk/README.md#getwalletaccount)
* [GetWalletAccountID](docs/sdk/README.md#getwalletaccountid) - Get account balance
* [Options](docs/sdk/README.md#options)
* [OptionsAccount](docs/sdk/README.md#optionsaccount)
* [OptionsAccountID](docs/sdk/README.md#optionsaccountid)
* [OptionsBlock](docs/sdk/README.md#optionsblock)
* [OptionsBlockID](docs/sdk/README.md#optionsblockid)
* [OptionsBlockIDTransaction](docs/sdk/README.md#optionsblockidtransaction)
* [OptionsBlockIDTransactionIndex](docs/sdk/README.md#optionsblockidtransactionindex)
* [OptionsBlockchain](docs/sdk/README.md#optionsblockchain)
* [OptionsBlockchainID](docs/sdk/README.md#optionsblockchainid)
* [OptionsContract](docs/sdk/README.md#optionscontract)
* [OptionsContractID](docs/sdk/README.md#optionscontractid)
* [OptionsEcho](docs/sdk/README.md#optionsecho)
* [OptionsErc20](docs/sdk/README.md#optionserc20)
* [OptionsErc20Address](docs/sdk/README.md#optionserc20address)
* [OptionsKey](docs/sdk/README.md#optionskey)
* [OptionsKeyKey](docs/sdk/README.md#optionskeykey)
* [OptionsTransaction](docs/sdk/README.md#optionstransaction)
* [OptionsTransactionHash](docs/sdk/README.md#optionstransactionhash)
* [OptionsTransactionHashReceipt](docs/sdk/README.md#optionstransactionhashreceipt)
* [OptionsVersion](docs/sdk/README.md#optionsversion)
* [OptionsWallet](docs/sdk/README.md#optionswallet)
* [OptionsWalletAccount](docs/sdk/README.md#optionswalletaccount)
* [OptionsWalletAccountID](docs/sdk/README.md#optionswalletaccountid)
* [OptionsWalletAccountIDPay](docs/sdk/README.md#optionswalletaccountidpay)
* [PostAccount](docs/sdk/README.md#postaccount) - Create new account
* [PostContract](docs/sdk/README.md#postcontract) - Create a new smart contract
* [PostContractID](docs/sdk/README.md#postcontractid) - Call the contract
* [PostErc20](docs/sdk/README.md#posterc20)
* [PostErc20Address](docs/sdk/README.md#posterc20address) - Transfer tokens to another account
* [PostKey](docs/sdk/README.md#postkey)
* [PostTransaction](docs/sdk/README.md#posttransaction) - Create a new transaction. Transfer Ether between accounts
* [PostWallet](docs/sdk/README.md#postwallet) - Create personal wallet
* [PostWalletAccount](docs/sdk/README.md#postwalletaccount)
* [PostWalletAccountIDContract](docs/sdk/README.md#postwalletaccountidcontract)
* [PostWalletAccountIDErc20](docs/sdk/README.md#postwalletaccountiderc20)
* [PostWalletAccountIDPay](docs/sdk/README.md#postwalletaccountidpay) - Send payment from the account held within the wallet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
