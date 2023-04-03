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

            DeleteKeyKeyRequest req = new DeleteKeyKeyRequest() {{
                key = "corrupti";
            }}            

            DeleteKeyKeyResponse res = sdk.deleteKeyKey(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `deleteKeyKey`
* `getAccountId` - Get account balance
* `getBlock` - Access detailed block information
* `getBlockId` - Get information about particular block
* `getBlockIdTransaction` - Get transaction count within block
* `getBlockIdTransactionIndex` - Get information about particular transaction within block
* `getBlockchain` - Get a list of supported blockchains
* `getBlockchainId` - Get information about blockchain woth given id
* `getContractId` - Get contract balance
* `getErc20` - Get token information such as name, total amount in circulation, etc
* `getErc20Address` - Get information amout token balance in the account
* `getKey`
* `getTransactionHash` - Get information about transaction by the transaction hash value
* `getTransactionHashReceipt` - Get receipt detail information
* `getVersion` - Get API version info
* `getWallet` - Get current account balance
* `getWalletAccount`
* `getWalletAccountId` - Get account balance
* `options`
* `optionsAccount`
* `optionsAccountId`
* `optionsBlock`
* `optionsBlockId`
* `optionsBlockIdTransaction`
* `optionsBlockIdTransactionIndex`
* `optionsBlockchain`
* `optionsBlockchainId`
* `optionsContract`
* `optionsContractId`
* `optionsEcho`
* `optionsErc20`
* `optionsErc20Address`
* `optionsKey`
* `optionsKeyKey`
* `optionsTransaction`
* `optionsTransactionHash`
* `optionsTransactionHashReceipt`
* `optionsVersion`
* `optionsWallet`
* `optionsWalletAccount`
* `optionsWalletAccountId`
* `optionsWalletAccountIdPay`
* `postAccount` - Create new account
* `postContract` - Create a new smart contract
* `postContractId` - Call the contract
* `postErc20`
* `postErc20Address` - Transfer tokens to another account
* `postKey`
* `postTransaction` - Create a new transaction. Transfer Ether between accounts
* `postWallet` - Create personal wallet
* `postWalletAccount`
* `postWalletAccountIdContract`
* `postWalletAccountIdErc20`
* `postWalletAccountIdPay` - Send payment from the account held within the wallet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
