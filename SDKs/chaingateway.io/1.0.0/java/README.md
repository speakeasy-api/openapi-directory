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
import org.openapis.openapi.models.operations.DeleteaddressRequest;
import org.openapis.openapi.models.operations.DeleteaddressRequestBody;
import org.openapis.openapi.models.operations.DeleteaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteaddressRequest req = new DeleteaddressRequest("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0") {{
                requestBody = new DeleteaddressRequestBody() {{
                    ethereumaddress = "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0";
                    password = "test123";
                }};;
            }};            

            DeleteaddressResponse res = sdk.addressRequests.deleteaddress(req);

            if (res.deleteaddress200ApplicationJSONObject != null) {
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


### [addressRequests](docs/addressrequests/README.md)

* [deleteaddress](docs/addressrequests/README.md#deleteaddress) - deleteAddress
* [exportaddress](docs/addressrequests/README.md#exportaddress) - exportAddress
* [importaddress](docs/addressrequests/README.md#importaddress) - importAddress
* [listaddresses](docs/addressrequests/README.md#listaddresses) - listAddresses
* [listtransactionsbyaddress](docs/addressrequests/README.md#listtransactionsbyaddress) - ListTransactionsByAddress
* [newaddress](docs/addressrequests/README.md#newaddress) - newAddress

### [addressRequests1](docs/addressrequests1/README.md)

* [deleteaddress1](docs/addressrequests1/README.md#deleteaddress1) - deleteAddress
* [exportaddress1](docs/addressrequests1/README.md#exportaddress1) - exportAddress
* [importaddress1](docs/addressrequests1/README.md#importaddress1) - importAddress
* [listaddresses1](docs/addressrequests1/README.md#listaddresses1) - listAddresses
* [listtransactionsbyaddress1](docs/addressrequests1/README.md#listtransactionsbyaddress1) - ListTransactionsByAddress
* [newaddress1](docs/addressrequests1/README.md#newaddress1) - newAddress

### [addressRequests12](docs/addressrequests12/README.md)

* [deleteaddress2](docs/addressrequests12/README.md#deleteaddress2) - deleteAddress
* [exportaddress2](docs/addressrequests12/README.md#exportaddress2) - exportAddress
* [importaddress2](docs/addressrequests12/README.md#importaddress2) - importAddress
* [listaddress](docs/addressrequests12/README.md#listaddress) - listAddress
* [listtransactionsbyaddress2](docs/addressrequests12/README.md#listtransactionsbyaddress2) - ListTransactionsByAddress
* [newaddress2](docs/addressrequests12/README.md#newaddress2) - newAddress

### [addressRequests123](docs/addressrequests123/README.md)

* [listtransactionsbyaddress3](docs/addressrequests123/README.md#listtransactionsbyaddress3) - ListTransactionsByAddress
* [newaddress3](docs/addressrequests123/README.md#newaddress3) - newAddress

### [binanceSmartChain](docs/binancesmartchain/README.md)

* [broadcasttransaction2](docs/binancesmartchain/README.md#broadcasttransaction2) - broadcastTransaction
* [deleteaddress2](docs/binancesmartchain/README.md#deleteaddress2) - deleteAddress
* [exportaddress2](docs/binancesmartchain/README.md#exportaddress2) - exportAddress
* [getbep20](docs/binancesmartchain/README.md#getbep20) - getBEP20
* [getbep20balance](docs/binancesmartchain/README.md#getbep20balance) - getBEP20Balance
* [getbinancecoinbalance](docs/binancesmartchain/README.md#getbinancecoinbalance) - getBinanceCoinBalance
* [getblock2](docs/binancesmartchain/README.md#getblock2) - getBlock
* [getgasprice2](docs/binancesmartchain/README.md#getgasprice2) - getGasPrice
* [getlastblocknumber2](docs/binancesmartchain/README.md#getlastblocknumber2) - getLastBlocknumber
* [getnftowner2](docs/binancesmartchain/README.md#getnftowner2) - getNFTOwner
* [getnfturi2](docs/binancesmartchain/README.md#getnfturi2) - getNFTUri
* [gettransaction2](docs/binancesmartchain/README.md#gettransaction2) - getTransaction
* [gettransactionreceipt2](docs/binancesmartchain/README.md#gettransactionreceipt2) - getTransactionReceipt
* [importaddress2](docs/binancesmartchain/README.md#importaddress2) - importAddress
* [listaddress](docs/binancesmartchain/README.md#listaddress) - listAddress
* [listfailedipns2](docs/binancesmartchain/README.md#listfailedipns2) - listFailedIPNs
* [listsubscribedaddresses2](docs/binancesmartchain/README.md#listsubscribedaddresses2) - listSubscribedAddresses
* [listtransactionsbyaddress2](docs/binancesmartchain/README.md#listtransactionsbyaddress2) - ListTransactionsByAddress
* [newaddress2](docs/binancesmartchain/README.md#newaddress2) - newAddress
* [resendfailedipn2](docs/binancesmartchain/README.md#resendfailedipn2) - resendFailedIPN
* [sendbep20](docs/binancesmartchain/README.md#sendbep20) - sendBEP20
* [sendbep721](docs/binancesmartchain/README.md#sendbep721) - sendBEP721
* [sendtransaction2](docs/binancesmartchain/README.md#sendtransaction2) - sendTransaction
* [subscribeaddress2](docs/binancesmartchain/README.md#subscribeaddress2) - subscribeAddress
* [unsubscribeaddress2](docs/binancesmartchain/README.md#unsubscribeaddress2) - unsubscribeAddress

### [bitcoin](docs/bitcoin/README.md)

* [createwallet](docs/bitcoin/README.md#createwallet) - createWallet
* [createwalletaddress](docs/bitcoin/README.md#createwalletaddress) - createWalletAddress
* [deletewallet](docs/bitcoin/README.md#deletewallet) - deleteWallet
* [exportaddressprivatekey](docs/bitcoin/README.md#exportaddressprivatekey) - exportAddressPrivateKey
* [getblock4](docs/bitcoin/README.md#getblock4) - getBlock
* [getblockchaininfo](docs/bitcoin/README.md#getblockchaininfo) - getBlockchaIninfo
* [getfees](docs/bitcoin/README.md#getfees) - getFees
* [getlastblocknumber4](docs/bitcoin/README.md#getlastblocknumber4) - getLastBlockNumber
* [gettransaction4](docs/bitcoin/README.md#gettransaction4) - getTransaction
* [getwallet](docs/bitcoin/README.md#getwallet) - getWallet
* [getwalletaddresses](docs/bitcoin/README.md#getwalletaddresses) - getWalletAddresses
* [listfailedipns4](docs/bitcoin/README.md#listfailedipns4) - listFailedIPNs
* [listsubscribedaddresses4](docs/bitcoin/README.md#listsubscribedaddresses4) - listSubscribedAddresses
* [resendfailedipn4](docs/bitcoin/README.md#resendfailedipn4) - resendFailedIPN
* [sendtransaction4](docs/bitcoin/README.md#sendtransaction4) - sendTransaction
* [subscribeaddress4](docs/bitcoin/README.md#subscribeaddress4) - subscribeAddress
* [unsubscribeaddress4](docs/bitcoin/README.md#unsubscribeaddress4) - unsubscribeAddress

### [ethereum](docs/ethereum/README.md)

* [broadcasttransaction](docs/ethereum/README.md#broadcasttransaction) - broadcastTransaction
* [deleteaddress](docs/ethereum/README.md#deleteaddress) - deleteAddress
* [exportaddress](docs/ethereum/README.md#exportaddress) - exportAddress
* [getallerc20balance](docs/ethereum/README.md#getallerc20balance) - getAllERC20Balance
* [getblock](docs/ethereum/README.md#getblock) - getBlock
* [geterc20](docs/ethereum/README.md#geterc20) - getERC20
* [getethereumbalance](docs/ethereum/README.md#getethereumbalance) - getEthereumBalance
* [getgasprice](docs/ethereum/README.md#getgasprice) - getGasPrice
* [getlastblocknumber](docs/ethereum/README.md#getlastblocknumber) - getLastBlockNumber
* [getnftowner](docs/ethereum/README.md#getnftowner) - getNFTOwner
* [getnfturi](docs/ethereum/README.md#getnfturi) - getNFTUri
* [gettransaction](docs/ethereum/README.md#gettransaction) - getTransaction
* [gettransactionreceipt](docs/ethereum/README.md#gettransactionreceipt) - getTransactionReceipt
* [importaddress](docs/ethereum/README.md#importaddress) - importAddress
* [listaddresses](docs/ethereum/README.md#listaddresses) - listAddresses
* [listfailedipns](docs/ethereum/README.md#listfailedipns) - listFailedIPNs
* [listipnsbywebhookid](docs/ethereum/README.md#listipnsbywebhookid) - listIPNsByWebhookId
* [listsubscribedaddresses](docs/ethereum/README.md#listsubscribedaddresses) - listSubscribedAddresses
* [listtransactionsbyaddress](docs/ethereum/README.md#listtransactionsbyaddress) - ListTransactionsByAddress
* [newaddress](docs/ethereum/README.md#newaddress) - newAddress
* [resendfailedipn](docs/ethereum/README.md#resendfailedipn) - resendFailedIPN
* [senderc20](docs/ethereum/README.md#senderc20) - sendERC20
* [senderc721](docs/ethereum/README.md#senderc721) - sendERC721
* [sendtransaction](docs/ethereum/README.md#sendtransaction) - sendTransaction
* [subscribeaddress](docs/ethereum/README.md#subscribeaddress) - subscribeAddress
* [unsubscribeaddress](docs/ethereum/README.md#unsubscribeaddress) - unsubscribeAddress

### [infoRequests](docs/inforequests/README.md)

* [getallerc20balance](docs/inforequests/README.md#getallerc20balance) - getAllERC20Balance
* [getblock](docs/inforequests/README.md#getblock) - getBlock
* [geterc20](docs/inforequests/README.md#geterc20) - getERC20
* [getethereumbalance](docs/inforequests/README.md#getethereumbalance) - getEthereumBalance
* [getgasprice](docs/inforequests/README.md#getgasprice) - getGasPrice
* [getlastblocknumber](docs/inforequests/README.md#getlastblocknumber) - getLastBlockNumber
* [getnftowner](docs/inforequests/README.md#getnftowner) - getNFTOwner
* [getnfturi](docs/inforequests/README.md#getnfturi) - getNFTUri
* [gettransaction](docs/inforequests/README.md#gettransaction) - getTransaction
* [gettransactionreceipt](docs/inforequests/README.md#gettransactionreceipt) - getTransactionReceipt

### [infoRequests1](docs/inforequests1/README.md)

* [getblock1](docs/inforequests1/README.md#getblock1) - getBlock
* [geterc201](docs/inforequests1/README.md#geterc201) - getERC20
* [geterc20balance1](docs/inforequests1/README.md#geterc20balance1) - getERC20Balance
* [getgasprice1](docs/inforequests1/README.md#getgasprice1) - getGasPrice
* [getlastblocknumber1](docs/inforequests1/README.md#getlastblocknumber1) - getLastBlockNumber
* [getnftowner1](docs/inforequests1/README.md#getnftowner1) - getNFTOwner
* [getnfturi1](docs/inforequests1/README.md#getnfturi1) - getNFTUri
* [getpolygonbalance](docs/inforequests1/README.md#getpolygonbalance) - getPolygonBalance
* [gettransaction1](docs/inforequests1/README.md#gettransaction1) - getTransaction
* [gettransactionreceipt1](docs/inforequests1/README.md#gettransactionreceipt1) - getTransactionReceipt

### [infoRequests12](docs/inforequests12/README.md)

* [getbep20](docs/inforequests12/README.md#getbep20) - getBEP20
* [getbep20balance](docs/inforequests12/README.md#getbep20balance) - getBEP20Balance
* [getbinancecoinbalance](docs/inforequests12/README.md#getbinancecoinbalance) - getBinanceCoinBalance
* [getblock2](docs/inforequests12/README.md#getblock2) - getBlock
* [getgasprice2](docs/inforequests12/README.md#getgasprice2) - getGasPrice
* [getlastblocknumber2](docs/inforequests12/README.md#getlastblocknumber2) - getLastBlocknumber
* [getnftowner2](docs/inforequests12/README.md#getnftowner2) - getNFTOwner
* [getnfturi2](docs/inforequests12/README.md#getnfturi2) - getNFTUri
* [gettransaction2](docs/inforequests12/README.md#gettransaction2) - getTransaction
* [gettransactionreceipt2](docs/inforequests12/README.md#gettransactionreceipt2) - getTransactionReceipt

### [infoRequests123](docs/inforequests123/README.md)

* [getaccountresources](docs/inforequests123/README.md#getaccountresources) - getAccountResources
* [getblock3](docs/inforequests123/README.md#getblock3) - getBlock
* [getchainparameters](docs/inforequests123/README.md#getchainparameters) - getChainParameters
* [getlastblocknumber3](docs/inforequests123/README.md#getlastblocknumber3) - getLastBlockNumber
* [gettransaction3](docs/inforequests123/README.md#gettransaction3) - getTransaction
* [gettransactionreceipt3](docs/inforequests123/README.md#gettransactionreceipt3) - getTransactionReceipt
* [gettrc10balance](docs/inforequests123/README.md#gettrc10balance) - getTRC10Balance
* [gettrc20balance](docs/inforequests123/README.md#gettrc20balance) - getTRC20Balance
* [gettronbalance](docs/inforequests123/README.md#gettronbalance) - getTronBalance

### [infoRequests1234](docs/inforequests1234/README.md)

* [getblock4](docs/inforequests1234/README.md#getblock4) - getBlock
* [getblockchaininfo](docs/inforequests1234/README.md#getblockchaininfo) - getBlockchaIninfo
* [getfees](docs/inforequests1234/README.md#getfees) - getFees
* [getlastblocknumber4](docs/inforequests1234/README.md#getlastblocknumber4) - getLastBlockNumber
* [gettransaction4](docs/inforequests1234/README.md#gettransaction4) - getTransaction

### [market](docs/market/README.md)

* [getalltimehigh](docs/market/README.md#getalltimehigh) - getAllTimeHigh
* [getalltimelow](docs/market/README.md#getalltimelow) - getAllTimeLow
* [getcurrencies](docs/market/README.md#getcurrencies) - getCurrencies
* [getpricedatabycurrency](docs/market/README.md#getpricedatabycurrency) - getPriceDataByCurrency
* [getratebycurrency](docs/market/README.md#getratebycurrency) - getRateByCurrency

### [polygon](docs/polygon/README.md)

* [broadcasttransaction1](docs/polygon/README.md#broadcasttransaction1) - broadcastTransaction
* [deleteaddress1](docs/polygon/README.md#deleteaddress1) - deleteAddress
* [exportaddress1](docs/polygon/README.md#exportaddress1) - exportAddress
* [getblock1](docs/polygon/README.md#getblock1) - getBlock
* [geterc201](docs/polygon/README.md#geterc201) - getERC20
* [geterc20balance1](docs/polygon/README.md#geterc20balance1) - getERC20Balance
* [getgasprice1](docs/polygon/README.md#getgasprice1) - getGasPrice
* [getlastblocknumber1](docs/polygon/README.md#getlastblocknumber1) - getLastBlockNumber
* [getnftowner1](docs/polygon/README.md#getnftowner1) - getNFTOwner
* [getnfturi1](docs/polygon/README.md#getnfturi1) - getNFTUri
* [getpolygonbalance](docs/polygon/README.md#getpolygonbalance) - getPolygonBalance
* [gettransaction1](docs/polygon/README.md#gettransaction1) - getTransaction
* [gettransactionreceipt1](docs/polygon/README.md#gettransactionreceipt1) - getTransactionReceipt
* [importaddress1](docs/polygon/README.md#importaddress1) - importAddress
* [listaddresses1](docs/polygon/README.md#listaddresses1) - listAddresses
* [listfailedipns1](docs/polygon/README.md#listfailedipns1) - listFailedIPNs
* [listipnsbywebhookid1](docs/polygon/README.md#listipnsbywebhookid1) - listIPNsByWebhookId
* [listsubscribedaddresses1](docs/polygon/README.md#listsubscribedaddresses1) - listSubscribedAddresses
* [listtransactionsbyaddress1](docs/polygon/README.md#listtransactionsbyaddress1) - ListTransactionsByAddress
* [newaddress1](docs/polygon/README.md#newaddress1) - newAddress
* [resendfailedipn1](docs/polygon/README.md#resendfailedipn1) - resendFailedIPN
* [senderc201](docs/polygon/README.md#senderc201) - sendERC20
* [senderc7211](docs/polygon/README.md#senderc7211) - sendERC721
* [sendtransaction1](docs/polygon/README.md#sendtransaction1) - sendTransaction
* [subscribeaddress1](docs/polygon/README.md#subscribeaddress1) - subscribeAddress
* [unsubscribeaddress1](docs/polygon/README.md#unsubscribeaddress1) - unsubscribeAddress

### [transactionRequests](docs/transactionrequests/README.md)

* [broadcasttransaction](docs/transactionrequests/README.md#broadcasttransaction) - broadcastTransaction
* [senderc20](docs/transactionrequests/README.md#senderc20) - sendERC20
* [senderc721](docs/transactionrequests/README.md#senderc721) - sendERC721
* [sendtransaction](docs/transactionrequests/README.md#sendtransaction) - sendTransaction

### [transactionRequests1](docs/transactionrequests1/README.md)

* [broadcasttransaction1](docs/transactionrequests1/README.md#broadcasttransaction1) - broadcastTransaction
* [senderc201](docs/transactionrequests1/README.md#senderc201) - sendERC20
* [senderc7211](docs/transactionrequests1/README.md#senderc7211) - sendERC721
* [sendtransaction1](docs/transactionrequests1/README.md#sendtransaction1) - sendTransaction

### [transactionRequests12](docs/transactionrequests12/README.md)

* [broadcasttransaction2](docs/transactionrequests12/README.md#broadcasttransaction2) - broadcastTransaction
* [sendbep20](docs/transactionrequests12/README.md#sendbep20) - sendBEP20
* [sendbep721](docs/transactionrequests12/README.md#sendbep721) - sendBEP721
* [sendtransaction2](docs/transactionrequests12/README.md#sendtransaction2) - sendTransaction

### [transactionRequests123](docs/transactionrequests123/README.md)

* [sendtransaction3](docs/transactionrequests123/README.md#sendtransaction3) - sendTransaction
* [sendtrc10](docs/transactionrequests123/README.md#sendtrc10) - sendTRC10
* [sendtrc20](docs/transactionrequests123/README.md#sendtrc20) - sendTRC20
* [sendtrc721](docs/transactionrequests123/README.md#sendtrc721) - sendTRC721

### [transactionRequests1234](docs/transactionrequests1234/README.md)

* [sendtransaction4](docs/transactionrequests1234/README.md#sendtransaction4) - sendTransaction

### [tron](docs/tron/README.md)

* [getaccountresources](docs/tron/README.md#getaccountresources) - getAccountResources
* [getblock3](docs/tron/README.md#getblock3) - getBlock
* [getchainparameters](docs/tron/README.md#getchainparameters) - getChainParameters
* [getlastblocknumber3](docs/tron/README.md#getlastblocknumber3) - getLastBlockNumber
* [gettransaction3](docs/tron/README.md#gettransaction3) - getTransaction
* [gettransactionreceipt3](docs/tron/README.md#gettransactionreceipt3) - getTransactionReceipt
* [gettrc10balance](docs/tron/README.md#gettrc10balance) - getTRC10Balance
* [gettrc20balance](docs/tron/README.md#gettrc20balance) - getTRC20Balance
* [gettronbalance](docs/tron/README.md#gettronbalance) - getTronBalance
* [listfailedipns3](docs/tron/README.md#listfailedipns3) - listFailedIPNs
* [listsubscribedaddresses3](docs/tron/README.md#listsubscribedaddresses3) - listSubscribedAddresses
* [listtransactionsbyaddress3](docs/tron/README.md#listtransactionsbyaddress3) - ListTransactionsByAddress
* [newaddress3](docs/tron/README.md#newaddress3) - newAddress
* [resendfailedipn3](docs/tron/README.md#resendfailedipn3) - resendFailedIPN
* [sendtransaction3](docs/tron/README.md#sendtransaction3) - sendTransaction
* [sendtrc10](docs/tron/README.md#sendtrc10) - sendTRC10
* [sendtrc20](docs/tron/README.md#sendtrc20) - sendTRC20
* [sendtrc721](docs/tron/README.md#sendtrc721) - sendTRC721
* [subscribeaddress3](docs/tron/README.md#subscribeaddress3) - subscribeAddress
* [unsubscribeaddress3](docs/tron/README.md#unsubscribeaddress3) - unsubscribeAddress

### [walletRequests](docs/walletrequests/README.md)

* [createwallet](docs/walletrequests/README.md#createwallet) - createWallet
* [createwalletaddress](docs/walletrequests/README.md#createwalletaddress) - createWalletAddress
* [deletewallet](docs/walletrequests/README.md#deletewallet) - deleteWallet
* [exportaddressprivatekey](docs/walletrequests/README.md#exportaddressprivatekey) - exportAddressPrivateKey
* [getwallet](docs/walletrequests/README.md#getwallet) - getWallet
* [getwalletaddresses](docs/walletrequests/README.md#getwalletaddresses) - getWalletAddresses

### [webhooksIPNRequests](docs/webhooksipnrequests/README.md)

* [listfailedipns](docs/webhooksipnrequests/README.md#listfailedipns) - listFailedIPNs
* [listipnsbywebhookid](docs/webhooksipnrequests/README.md#listipnsbywebhookid) - listIPNsByWebhookId
* [listsubscribedaddresses](docs/webhooksipnrequests/README.md#listsubscribedaddresses) - listSubscribedAddresses
* [resendfailedipn](docs/webhooksipnrequests/README.md#resendfailedipn) - resendFailedIPN
* [subscribeaddress](docs/webhooksipnrequests/README.md#subscribeaddress) - subscribeAddress
* [unsubscribeaddress](docs/webhooksipnrequests/README.md#unsubscribeaddress) - unsubscribeAddress

### [webhooksIPNRequests1](docs/webhooksipnrequests1/README.md)

* [listfailedipns1](docs/webhooksipnrequests1/README.md#listfailedipns1) - listFailedIPNs
* [listipnsbywebhookid1](docs/webhooksipnrequests1/README.md#listipnsbywebhookid1) - listIPNsByWebhookId
* [listsubscribedaddresses1](docs/webhooksipnrequests1/README.md#listsubscribedaddresses1) - listSubscribedAddresses
* [resendfailedipn1](docs/webhooksipnrequests1/README.md#resendfailedipn1) - resendFailedIPN
* [subscribeaddress1](docs/webhooksipnrequests1/README.md#subscribeaddress1) - subscribeAddress
* [unsubscribeaddress1](docs/webhooksipnrequests1/README.md#unsubscribeaddress1) - unsubscribeAddress

### [webhooksIPNRequests12](docs/webhooksipnrequests12/README.md)

* [listfailedipns2](docs/webhooksipnrequests12/README.md#listfailedipns2) - listFailedIPNs
* [listsubscribedaddresses2](docs/webhooksipnrequests12/README.md#listsubscribedaddresses2) - listSubscribedAddresses
* [resendfailedipn2](docs/webhooksipnrequests12/README.md#resendfailedipn2) - resendFailedIPN
* [subscribeaddress2](docs/webhooksipnrequests12/README.md#subscribeaddress2) - subscribeAddress
* [unsubscribeaddress2](docs/webhooksipnrequests12/README.md#unsubscribeaddress2) - unsubscribeAddress

### [webhooksIPNRequests123](docs/webhooksipnrequests123/README.md)

* [listfailedipns3](docs/webhooksipnrequests123/README.md#listfailedipns3) - listFailedIPNs
* [listsubscribedaddresses3](docs/webhooksipnrequests123/README.md#listsubscribedaddresses3) - listSubscribedAddresses
* [resendfailedipn3](docs/webhooksipnrequests123/README.md#resendfailedipn3) - resendFailedIPN
* [subscribeaddress3](docs/webhooksipnrequests123/README.md#subscribeaddress3) - subscribeAddress
* [unsubscribeaddress3](docs/webhooksipnrequests123/README.md#unsubscribeaddress3) - unsubscribeAddress

### [webhooksIPNRequests1234](docs/webhooksipnrequests1234/README.md)

* [listfailedipns4](docs/webhooksipnrequests1234/README.md#listfailedipns4) - listFailedIPNs
* [listsubscribedaddresses4](docs/webhooksipnrequests1234/README.md#listsubscribedaddresses4) - listSubscribedAddresses
* [resendfailedipn4](docs/webhooksipnrequests1234/README.md#resendfailedipn4) - resendFailedIPN
* [subscribeaddress4](docs/webhooksipnrequests1234/README.md#subscribeaddress4) - subscribeAddress
* [unsubscribeaddress4](docs/webhooksipnrequests1234/README.md#unsubscribeaddress4) - unsubscribeAddress
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
