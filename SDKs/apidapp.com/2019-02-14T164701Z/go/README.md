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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteKeyKeyRequest{
        Key: "corrupti",
    }

    ctx := context.Background()
    res, err := s.DeleteKeyKey(ctx, req)
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

### SDK SDK

* `DeleteKeyKey`
* `GetAccountID` - Get account balance
* `GetBlock` - Access detailed block information
* `GetBlockID` - Get information about particular block
* `GetBlockIDTransaction` - Get transaction count within block
* `GetBlockIDTransactionIndex` - Get information about particular transaction within block
* `GetBlockchain` - Get a list of supported blockchains
* `GetBlockchainID` - Get information about blockchain woth given id
* `GetContractID` - Get contract balance
* `GetErc20` - Get token information such as name, total amount in circulation, etc
* `GetErc20Address` - Get information amout token balance in the account
* `GetKey`
* `GetTransactionHash` - Get information about transaction by the transaction hash value
* `GetTransactionHashReceipt` - Get receipt detail information
* `GetVersion` - Get API version info
* `GetWallet` - Get current account balance
* `GetWalletAccount`
* `GetWalletAccountID` - Get account balance
* `Options`
* `OptionsAccount`
* `OptionsAccountID`
* `OptionsBlock`
* `OptionsBlockID`
* `OptionsBlockIDTransaction`
* `OptionsBlockIDTransactionIndex`
* `OptionsBlockchain`
* `OptionsBlockchainID`
* `OptionsContract`
* `OptionsContractID`
* `OptionsEcho`
* `OptionsErc20`
* `OptionsErc20Address`
* `OptionsKey`
* `OptionsKeyKey`
* `OptionsTransaction`
* `OptionsTransactionHash`
* `OptionsTransactionHashReceipt`
* `OptionsVersion`
* `OptionsWallet`
* `OptionsWalletAccount`
* `OptionsWalletAccountID`
* `OptionsWalletAccountIDPay`
* `PostAccount` - Create new account
* `PostContract` - Create a new smart contract
* `PostContractID` - Call the contract
* `PostErc20`
* `PostErc20Address` - Transfer tokens to another account
* `PostKey`
* `PostTransaction` - Create a new transaction. Transfer Ether between accounts
* `PostWallet` - Create personal wallet
* `PostWalletAccount`
* `PostWalletAccountIDContract`
* `PostWalletAccountIDErc20`
* `PostWalletAccountIDPay` - Send payment from the account held within the wallet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
