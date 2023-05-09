# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyKeyRequest;
import org.openapis.openapi.models.operations.DeleteKeyKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteKeyKeyRequest req = new DeleteKeyKeyRequest("corrupti");            

            DeleteKeyKeyResponse res = sdk.deleteKeyKey(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteKeyKey](docs/sdk/README.md#deletekeykey)
* [getAccountId](docs/sdk/README.md#getaccountid) - Get account balance
* [getBlock](docs/sdk/README.md#getblock) - Access detailed block information
* [getBlockId](docs/sdk/README.md#getblockid) - Get information about particular block
* [getBlockIdTransaction](docs/sdk/README.md#getblockidtransaction) - Get transaction count within block
* [getBlockIdTransactionIndex](docs/sdk/README.md#getblockidtransactionindex) - Get information about particular transaction within block
* [getBlockchain](docs/sdk/README.md#getblockchain) - Get a list of supported blockchains
* [getBlockchainId](docs/sdk/README.md#getblockchainid) - Get information about blockchain woth given id
* [getContractId](docs/sdk/README.md#getcontractid) - Get contract balance
* [getErc20](docs/sdk/README.md#geterc20) - Get token information such as name, total amount in circulation, etc
* [getErc20Address](docs/sdk/README.md#geterc20address) - Get information amout token balance in the account
* [getKey](docs/sdk/README.md#getkey)
* [getTransactionHash](docs/sdk/README.md#gettransactionhash) - Get information about transaction by the transaction hash value
* [getTransactionHashReceipt](docs/sdk/README.md#gettransactionhashreceipt) - Get receipt detail information
* [getVersion](docs/sdk/README.md#getversion) - Get API version info
* [getWallet](docs/sdk/README.md#getwallet) - Get current account balance
* [getWalletAccount](docs/sdk/README.md#getwalletaccount)
* [getWalletAccountId](docs/sdk/README.md#getwalletaccountid) - Get account balance
* [options](docs/sdk/README.md#options)
* [optionsAccount](docs/sdk/README.md#optionsaccount)
* [optionsAccountId](docs/sdk/README.md#optionsaccountid)
* [optionsBlock](docs/sdk/README.md#optionsblock)
* [optionsBlockId](docs/sdk/README.md#optionsblockid)
* [optionsBlockIdTransaction](docs/sdk/README.md#optionsblockidtransaction)
* [optionsBlockIdTransactionIndex](docs/sdk/README.md#optionsblockidtransactionindex)
* [optionsBlockchain](docs/sdk/README.md#optionsblockchain)
* [optionsBlockchainId](docs/sdk/README.md#optionsblockchainid)
* [optionsContract](docs/sdk/README.md#optionscontract)
* [optionsContractId](docs/sdk/README.md#optionscontractid)
* [optionsEcho](docs/sdk/README.md#optionsecho)
* [optionsErc20](docs/sdk/README.md#optionserc20)
* [optionsErc20Address](docs/sdk/README.md#optionserc20address)
* [optionsKey](docs/sdk/README.md#optionskey)
* [optionsKeyKey](docs/sdk/README.md#optionskeykey)
* [optionsTransaction](docs/sdk/README.md#optionstransaction)
* [optionsTransactionHash](docs/sdk/README.md#optionstransactionhash)
* [optionsTransactionHashReceipt](docs/sdk/README.md#optionstransactionhashreceipt)
* [optionsVersion](docs/sdk/README.md#optionsversion)
* [optionsWallet](docs/sdk/README.md#optionswallet)
* [optionsWalletAccount](docs/sdk/README.md#optionswalletaccount)
* [optionsWalletAccountId](docs/sdk/README.md#optionswalletaccountid)
* [optionsWalletAccountIdPay](docs/sdk/README.md#optionswalletaccountidpay)
* [postAccount](docs/sdk/README.md#postaccount) - Create new account
* [postContract](docs/sdk/README.md#postcontract) - Create a new smart contract
* [postContractId](docs/sdk/README.md#postcontractid) - Call the contract
* [postErc20](docs/sdk/README.md#posterc20)
* [postErc20Address](docs/sdk/README.md#posterc20address) - Transfer tokens to another account
* [postKey](docs/sdk/README.md#postkey)
* [postTransaction](docs/sdk/README.md#posttransaction) - Create a new transaction. Transfer Ether between accounts
* [postWallet](docs/sdk/README.md#postwallet) - Create personal wallet
* [postWalletAccount](docs/sdk/README.md#postwalletaccount)
* [postWalletAccountIdContract](docs/sdk/README.md#postwalletaccountidcontract)
* [postWalletAccountIdErc20](docs/sdk/README.md#postwalletaccountiderc20)
* [postWalletAccountIdPay](docs/sdk/README.md#postwalletaccountidpay) - Send payment from the account held within the wallet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
