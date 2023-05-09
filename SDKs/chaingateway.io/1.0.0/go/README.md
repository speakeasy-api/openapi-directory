# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/chaingateway.io/1.0.0/go
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
    res, err := s.AddressRequests.Deleteaddress(ctx, operations.DeleteaddressRequest{
        RequestBody: &operations.DeleteaddressRequestBody{
            Ethereumaddress: sdk.String("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0"),
            Password: sdk.String("test123"),
        },
        Address: "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleteaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AddressRequests](docs/addressrequests/README.md)

* [Deleteaddress](docs/addressrequests/README.md#deleteaddress) - deleteAddress
* [Exportaddress](docs/addressrequests/README.md#exportaddress) - exportAddress
* [Importaddress](docs/addressrequests/README.md#importaddress) - importAddress
* [Listaddresses](docs/addressrequests/README.md#listaddresses) - listAddresses
* [Listtransactionsbyaddress](docs/addressrequests/README.md#listtransactionsbyaddress) - ListTransactionsByAddress
* [Newaddress](docs/addressrequests/README.md#newaddress) - newAddress

### [AddressRequests1](docs/addressrequests1/README.md)

* [Deleteaddress1](docs/addressrequests1/README.md#deleteaddress1) - deleteAddress
* [Exportaddress1](docs/addressrequests1/README.md#exportaddress1) - exportAddress
* [Importaddress1](docs/addressrequests1/README.md#importaddress1) - importAddress
* [Listaddresses1](docs/addressrequests1/README.md#listaddresses1) - listAddresses
* [Listtransactionsbyaddress1](docs/addressrequests1/README.md#listtransactionsbyaddress1) - ListTransactionsByAddress
* [Newaddress1](docs/addressrequests1/README.md#newaddress1) - newAddress

### [AddressRequests12](docs/addressrequests12/README.md)

* [Deleteaddress2](docs/addressrequests12/README.md#deleteaddress2) - deleteAddress
* [Exportaddress2](docs/addressrequests12/README.md#exportaddress2) - exportAddress
* [Importaddress2](docs/addressrequests12/README.md#importaddress2) - importAddress
* [Listaddress](docs/addressrequests12/README.md#listaddress) - listAddress
* [Listtransactionsbyaddress2](docs/addressrequests12/README.md#listtransactionsbyaddress2) - ListTransactionsByAddress
* [Newaddress2](docs/addressrequests12/README.md#newaddress2) - newAddress

### [AddressRequests123](docs/addressrequests123/README.md)

* [Listtransactionsbyaddress3](docs/addressrequests123/README.md#listtransactionsbyaddress3) - ListTransactionsByAddress
* [Newaddress3](docs/addressrequests123/README.md#newaddress3) - newAddress

### [BinanceSmartChain](docs/binancesmartchain/README.md)

* [Broadcasttransaction2](docs/binancesmartchain/README.md#broadcasttransaction2) - broadcastTransaction
* [Deleteaddress2](docs/binancesmartchain/README.md#deleteaddress2) - deleteAddress
* [Exportaddress2](docs/binancesmartchain/README.md#exportaddress2) - exportAddress
* [Getbep20](docs/binancesmartchain/README.md#getbep20) - getBEP20
* [Getbep20balance](docs/binancesmartchain/README.md#getbep20balance) - getBEP20Balance
* [Getbinancecoinbalance](docs/binancesmartchain/README.md#getbinancecoinbalance) - getBinanceCoinBalance
* [Getblock2](docs/binancesmartchain/README.md#getblock2) - getBlock
* [Getgasprice2](docs/binancesmartchain/README.md#getgasprice2) - getGasPrice
* [Getlastblocknumber2](docs/binancesmartchain/README.md#getlastblocknumber2) - getLastBlocknumber
* [Getnftowner2](docs/binancesmartchain/README.md#getnftowner2) - getNFTOwner
* [Getnfturi2](docs/binancesmartchain/README.md#getnfturi2) - getNFTUri
* [Gettransaction2](docs/binancesmartchain/README.md#gettransaction2) - getTransaction
* [Gettransactionreceipt2](docs/binancesmartchain/README.md#gettransactionreceipt2) - getTransactionReceipt
* [Importaddress2](docs/binancesmartchain/README.md#importaddress2) - importAddress
* [Listaddress](docs/binancesmartchain/README.md#listaddress) - listAddress
* [Listfailedipns2](docs/binancesmartchain/README.md#listfailedipns2) - listFailedIPNs
* [Listsubscribedaddresses2](docs/binancesmartchain/README.md#listsubscribedaddresses2) - listSubscribedAddresses
* [Listtransactionsbyaddress2](docs/binancesmartchain/README.md#listtransactionsbyaddress2) - ListTransactionsByAddress
* [Newaddress2](docs/binancesmartchain/README.md#newaddress2) - newAddress
* [Resendfailedipn2](docs/binancesmartchain/README.md#resendfailedipn2) - resendFailedIPN
* [Sendbep20](docs/binancesmartchain/README.md#sendbep20) - sendBEP20
* [Sendbep721](docs/binancesmartchain/README.md#sendbep721) - sendBEP721
* [Sendtransaction2](docs/binancesmartchain/README.md#sendtransaction2) - sendTransaction
* [Subscribeaddress2](docs/binancesmartchain/README.md#subscribeaddress2) - subscribeAddress
* [Unsubscribeaddress2](docs/binancesmartchain/README.md#unsubscribeaddress2) - unsubscribeAddress

### [Bitcoin](docs/bitcoin/README.md)

* [Createwallet](docs/bitcoin/README.md#createwallet) - createWallet
* [Createwalletaddress](docs/bitcoin/README.md#createwalletaddress) - createWalletAddress
* [Deletewallet](docs/bitcoin/README.md#deletewallet) - deleteWallet
* [Exportaddressprivatekey](docs/bitcoin/README.md#exportaddressprivatekey) - exportAddressPrivateKey
* [Getblock4](docs/bitcoin/README.md#getblock4) - getBlock
* [Getblockchaininfo](docs/bitcoin/README.md#getblockchaininfo) - getBlockchaIninfo
* [Getfees](docs/bitcoin/README.md#getfees) - getFees
* [Getlastblocknumber4](docs/bitcoin/README.md#getlastblocknumber4) - getLastBlockNumber
* [Gettransaction4](docs/bitcoin/README.md#gettransaction4) - getTransaction
* [Getwallet](docs/bitcoin/README.md#getwallet) - getWallet
* [Getwalletaddresses](docs/bitcoin/README.md#getwalletaddresses) - getWalletAddresses
* [Listfailedipns4](docs/bitcoin/README.md#listfailedipns4) - listFailedIPNs
* [Listsubscribedaddresses4](docs/bitcoin/README.md#listsubscribedaddresses4) - listSubscribedAddresses
* [Resendfailedipn4](docs/bitcoin/README.md#resendfailedipn4) - resendFailedIPN
* [Sendtransaction4](docs/bitcoin/README.md#sendtransaction4) - sendTransaction
* [Subscribeaddress4](docs/bitcoin/README.md#subscribeaddress4) - subscribeAddress
* [Unsubscribeaddress4](docs/bitcoin/README.md#unsubscribeaddress4) - unsubscribeAddress

### [Ethereum](docs/ethereum/README.md)

* [Broadcasttransaction](docs/ethereum/README.md#broadcasttransaction) - broadcastTransaction
* [Deleteaddress](docs/ethereum/README.md#deleteaddress) - deleteAddress
* [Exportaddress](docs/ethereum/README.md#exportaddress) - exportAddress
* [Getallerc20balance](docs/ethereum/README.md#getallerc20balance) - getAllERC20Balance
* [Getblock](docs/ethereum/README.md#getblock) - getBlock
* [Geterc20](docs/ethereum/README.md#geterc20) - getERC20
* [Getethereumbalance](docs/ethereum/README.md#getethereumbalance) - getEthereumBalance
* [Getgasprice](docs/ethereum/README.md#getgasprice) - getGasPrice
* [Getlastblocknumber](docs/ethereum/README.md#getlastblocknumber) - getLastBlockNumber
* [Getnftowner](docs/ethereum/README.md#getnftowner) - getNFTOwner
* [Getnfturi](docs/ethereum/README.md#getnfturi) - getNFTUri
* [Gettransaction](docs/ethereum/README.md#gettransaction) - getTransaction
* [Gettransactionreceipt](docs/ethereum/README.md#gettransactionreceipt) - getTransactionReceipt
* [Importaddress](docs/ethereum/README.md#importaddress) - importAddress
* [Listaddresses](docs/ethereum/README.md#listaddresses) - listAddresses
* [Listfailedipns](docs/ethereum/README.md#listfailedipns) - listFailedIPNs
* [Listipnsbywebhookid](docs/ethereum/README.md#listipnsbywebhookid) - listIPNsByWebhookId
* [Listsubscribedaddresses](docs/ethereum/README.md#listsubscribedaddresses) - listSubscribedAddresses
* [Listtransactionsbyaddress](docs/ethereum/README.md#listtransactionsbyaddress) - ListTransactionsByAddress
* [Newaddress](docs/ethereum/README.md#newaddress) - newAddress
* [Resendfailedipn](docs/ethereum/README.md#resendfailedipn) - resendFailedIPN
* [Senderc20](docs/ethereum/README.md#senderc20) - sendERC20
* [Senderc721](docs/ethereum/README.md#senderc721) - sendERC721
* [Sendtransaction](docs/ethereum/README.md#sendtransaction) - sendTransaction
* [Subscribeaddress](docs/ethereum/README.md#subscribeaddress) - subscribeAddress
* [Unsubscribeaddress](docs/ethereum/README.md#unsubscribeaddress) - unsubscribeAddress

### [InfoRequests](docs/inforequests/README.md)

* [Getallerc20balance](docs/inforequests/README.md#getallerc20balance) - getAllERC20Balance
* [Getblock](docs/inforequests/README.md#getblock) - getBlock
* [Geterc20](docs/inforequests/README.md#geterc20) - getERC20
* [Getethereumbalance](docs/inforequests/README.md#getethereumbalance) - getEthereumBalance
* [Getgasprice](docs/inforequests/README.md#getgasprice) - getGasPrice
* [Getlastblocknumber](docs/inforequests/README.md#getlastblocknumber) - getLastBlockNumber
* [Getnftowner](docs/inforequests/README.md#getnftowner) - getNFTOwner
* [Getnfturi](docs/inforequests/README.md#getnfturi) - getNFTUri
* [Gettransaction](docs/inforequests/README.md#gettransaction) - getTransaction
* [Gettransactionreceipt](docs/inforequests/README.md#gettransactionreceipt) - getTransactionReceipt

### [InfoRequests1](docs/inforequests1/README.md)

* [Getblock1](docs/inforequests1/README.md#getblock1) - getBlock
* [Geterc201](docs/inforequests1/README.md#geterc201) - getERC20
* [Geterc20balance1](docs/inforequests1/README.md#geterc20balance1) - getERC20Balance
* [Getgasprice1](docs/inforequests1/README.md#getgasprice1) - getGasPrice
* [Getlastblocknumber1](docs/inforequests1/README.md#getlastblocknumber1) - getLastBlockNumber
* [Getnftowner1](docs/inforequests1/README.md#getnftowner1) - getNFTOwner
* [Getnfturi1](docs/inforequests1/README.md#getnfturi1) - getNFTUri
* [Getpolygonbalance](docs/inforequests1/README.md#getpolygonbalance) - getPolygonBalance
* [Gettransaction1](docs/inforequests1/README.md#gettransaction1) - getTransaction
* [Gettransactionreceipt1](docs/inforequests1/README.md#gettransactionreceipt1) - getTransactionReceipt

### [InfoRequests12](docs/inforequests12/README.md)

* [Getbep20](docs/inforequests12/README.md#getbep20) - getBEP20
* [Getbep20balance](docs/inforequests12/README.md#getbep20balance) - getBEP20Balance
* [Getbinancecoinbalance](docs/inforequests12/README.md#getbinancecoinbalance) - getBinanceCoinBalance
* [Getblock2](docs/inforequests12/README.md#getblock2) - getBlock
* [Getgasprice2](docs/inforequests12/README.md#getgasprice2) - getGasPrice
* [Getlastblocknumber2](docs/inforequests12/README.md#getlastblocknumber2) - getLastBlocknumber
* [Getnftowner2](docs/inforequests12/README.md#getnftowner2) - getNFTOwner
* [Getnfturi2](docs/inforequests12/README.md#getnfturi2) - getNFTUri
* [Gettransaction2](docs/inforequests12/README.md#gettransaction2) - getTransaction
* [Gettransactionreceipt2](docs/inforequests12/README.md#gettransactionreceipt2) - getTransactionReceipt

### [InfoRequests123](docs/inforequests123/README.md)

* [Getaccountresources](docs/inforequests123/README.md#getaccountresources) - getAccountResources
* [Getblock3](docs/inforequests123/README.md#getblock3) - getBlock
* [Getchainparameters](docs/inforequests123/README.md#getchainparameters) - getChainParameters
* [Getlastblocknumber3](docs/inforequests123/README.md#getlastblocknumber3) - getLastBlockNumber
* [Gettransaction3](docs/inforequests123/README.md#gettransaction3) - getTransaction
* [Gettransactionreceipt3](docs/inforequests123/README.md#gettransactionreceipt3) - getTransactionReceipt
* [Gettrc10balance](docs/inforequests123/README.md#gettrc10balance) - getTRC10Balance
* [Gettrc20balance](docs/inforequests123/README.md#gettrc20balance) - getTRC20Balance
* [Gettronbalance](docs/inforequests123/README.md#gettronbalance) - getTronBalance

### [InfoRequests1234](docs/inforequests1234/README.md)

* [Getblock4](docs/inforequests1234/README.md#getblock4) - getBlock
* [Getblockchaininfo](docs/inforequests1234/README.md#getblockchaininfo) - getBlockchaIninfo
* [Getfees](docs/inforequests1234/README.md#getfees) - getFees
* [Getlastblocknumber4](docs/inforequests1234/README.md#getlastblocknumber4) - getLastBlockNumber
* [Gettransaction4](docs/inforequests1234/README.md#gettransaction4) - getTransaction

### [Market](docs/market/README.md)

* [Getalltimehigh](docs/market/README.md#getalltimehigh) - getAllTimeHigh
* [Getalltimelow](docs/market/README.md#getalltimelow) - getAllTimeLow
* [Getcurrencies](docs/market/README.md#getcurrencies) - getCurrencies
* [Getpricedatabycurrency](docs/market/README.md#getpricedatabycurrency) - getPriceDataByCurrency
* [Getratebycurrency](docs/market/README.md#getratebycurrency) - getRateByCurrency

### [Polygon](docs/polygon/README.md)

* [Broadcasttransaction1](docs/polygon/README.md#broadcasttransaction1) - broadcastTransaction
* [Deleteaddress1](docs/polygon/README.md#deleteaddress1) - deleteAddress
* [Exportaddress1](docs/polygon/README.md#exportaddress1) - exportAddress
* [Getblock1](docs/polygon/README.md#getblock1) - getBlock
* [Geterc201](docs/polygon/README.md#geterc201) - getERC20
* [Geterc20balance1](docs/polygon/README.md#geterc20balance1) - getERC20Balance
* [Getgasprice1](docs/polygon/README.md#getgasprice1) - getGasPrice
* [Getlastblocknumber1](docs/polygon/README.md#getlastblocknumber1) - getLastBlockNumber
* [Getnftowner1](docs/polygon/README.md#getnftowner1) - getNFTOwner
* [Getnfturi1](docs/polygon/README.md#getnfturi1) - getNFTUri
* [Getpolygonbalance](docs/polygon/README.md#getpolygonbalance) - getPolygonBalance
* [Gettransaction1](docs/polygon/README.md#gettransaction1) - getTransaction
* [Gettransactionreceipt1](docs/polygon/README.md#gettransactionreceipt1) - getTransactionReceipt
* [Importaddress1](docs/polygon/README.md#importaddress1) - importAddress
* [Listaddresses1](docs/polygon/README.md#listaddresses1) - listAddresses
* [Listfailedipns1](docs/polygon/README.md#listfailedipns1) - listFailedIPNs
* [Listipnsbywebhookid1](docs/polygon/README.md#listipnsbywebhookid1) - listIPNsByWebhookId
* [Listsubscribedaddresses1](docs/polygon/README.md#listsubscribedaddresses1) - listSubscribedAddresses
* [Listtransactionsbyaddress1](docs/polygon/README.md#listtransactionsbyaddress1) - ListTransactionsByAddress
* [Newaddress1](docs/polygon/README.md#newaddress1) - newAddress
* [Resendfailedipn1](docs/polygon/README.md#resendfailedipn1) - resendFailedIPN
* [Senderc201](docs/polygon/README.md#senderc201) - sendERC20
* [Senderc7211](docs/polygon/README.md#senderc7211) - sendERC721
* [Sendtransaction1](docs/polygon/README.md#sendtransaction1) - sendTransaction
* [Subscribeaddress1](docs/polygon/README.md#subscribeaddress1) - subscribeAddress
* [Unsubscribeaddress1](docs/polygon/README.md#unsubscribeaddress1) - unsubscribeAddress

### [TransactionRequests](docs/transactionrequests/README.md)

* [Broadcasttransaction](docs/transactionrequests/README.md#broadcasttransaction) - broadcastTransaction
* [Senderc20](docs/transactionrequests/README.md#senderc20) - sendERC20
* [Senderc721](docs/transactionrequests/README.md#senderc721) - sendERC721
* [Sendtransaction](docs/transactionrequests/README.md#sendtransaction) - sendTransaction

### [TransactionRequests1](docs/transactionrequests1/README.md)

* [Broadcasttransaction1](docs/transactionrequests1/README.md#broadcasttransaction1) - broadcastTransaction
* [Senderc201](docs/transactionrequests1/README.md#senderc201) - sendERC20
* [Senderc7211](docs/transactionrequests1/README.md#senderc7211) - sendERC721
* [Sendtransaction1](docs/transactionrequests1/README.md#sendtransaction1) - sendTransaction

### [TransactionRequests12](docs/transactionrequests12/README.md)

* [Broadcasttransaction2](docs/transactionrequests12/README.md#broadcasttransaction2) - broadcastTransaction
* [Sendbep20](docs/transactionrequests12/README.md#sendbep20) - sendBEP20
* [Sendbep721](docs/transactionrequests12/README.md#sendbep721) - sendBEP721
* [Sendtransaction2](docs/transactionrequests12/README.md#sendtransaction2) - sendTransaction

### [TransactionRequests123](docs/transactionrequests123/README.md)

* [Sendtransaction3](docs/transactionrequests123/README.md#sendtransaction3) - sendTransaction
* [Sendtrc10](docs/transactionrequests123/README.md#sendtrc10) - sendTRC10
* [Sendtrc20](docs/transactionrequests123/README.md#sendtrc20) - sendTRC20
* [Sendtrc721](docs/transactionrequests123/README.md#sendtrc721) - sendTRC721

### [TransactionRequests1234](docs/transactionrequests1234/README.md)

* [Sendtransaction4](docs/transactionrequests1234/README.md#sendtransaction4) - sendTransaction

### [Tron](docs/tron/README.md)

* [Getaccountresources](docs/tron/README.md#getaccountresources) - getAccountResources
* [Getblock3](docs/tron/README.md#getblock3) - getBlock
* [Getchainparameters](docs/tron/README.md#getchainparameters) - getChainParameters
* [Getlastblocknumber3](docs/tron/README.md#getlastblocknumber3) - getLastBlockNumber
* [Gettransaction3](docs/tron/README.md#gettransaction3) - getTransaction
* [Gettransactionreceipt3](docs/tron/README.md#gettransactionreceipt3) - getTransactionReceipt
* [Gettrc10balance](docs/tron/README.md#gettrc10balance) - getTRC10Balance
* [Gettrc20balance](docs/tron/README.md#gettrc20balance) - getTRC20Balance
* [Gettronbalance](docs/tron/README.md#gettronbalance) - getTronBalance
* [Listfailedipns3](docs/tron/README.md#listfailedipns3) - listFailedIPNs
* [Listsubscribedaddresses3](docs/tron/README.md#listsubscribedaddresses3) - listSubscribedAddresses
* [Listtransactionsbyaddress3](docs/tron/README.md#listtransactionsbyaddress3) - ListTransactionsByAddress
* [Newaddress3](docs/tron/README.md#newaddress3) - newAddress
* [Resendfailedipn3](docs/tron/README.md#resendfailedipn3) - resendFailedIPN
* [Sendtransaction3](docs/tron/README.md#sendtransaction3) - sendTransaction
* [Sendtrc10](docs/tron/README.md#sendtrc10) - sendTRC10
* [Sendtrc20](docs/tron/README.md#sendtrc20) - sendTRC20
* [Sendtrc721](docs/tron/README.md#sendtrc721) - sendTRC721
* [Subscribeaddress3](docs/tron/README.md#subscribeaddress3) - subscribeAddress
* [Unsubscribeaddress3](docs/tron/README.md#unsubscribeaddress3) - unsubscribeAddress

### [WalletRequests](docs/walletrequests/README.md)

* [Createwallet](docs/walletrequests/README.md#createwallet) - createWallet
* [Createwalletaddress](docs/walletrequests/README.md#createwalletaddress) - createWalletAddress
* [Deletewallet](docs/walletrequests/README.md#deletewallet) - deleteWallet
* [Exportaddressprivatekey](docs/walletrequests/README.md#exportaddressprivatekey) - exportAddressPrivateKey
* [Getwallet](docs/walletrequests/README.md#getwallet) - getWallet
* [Getwalletaddresses](docs/walletrequests/README.md#getwalletaddresses) - getWalletAddresses

### [WebhooksIPNRequests](docs/webhooksipnrequests/README.md)

* [Listfailedipns](docs/webhooksipnrequests/README.md#listfailedipns) - listFailedIPNs
* [Listipnsbywebhookid](docs/webhooksipnrequests/README.md#listipnsbywebhookid) - listIPNsByWebhookId
* [Listsubscribedaddresses](docs/webhooksipnrequests/README.md#listsubscribedaddresses) - listSubscribedAddresses
* [Resendfailedipn](docs/webhooksipnrequests/README.md#resendfailedipn) - resendFailedIPN
* [Subscribeaddress](docs/webhooksipnrequests/README.md#subscribeaddress) - subscribeAddress
* [Unsubscribeaddress](docs/webhooksipnrequests/README.md#unsubscribeaddress) - unsubscribeAddress

### [WebhooksIPNRequests1](docs/webhooksipnrequests1/README.md)

* [Listfailedipns1](docs/webhooksipnrequests1/README.md#listfailedipns1) - listFailedIPNs
* [Listipnsbywebhookid1](docs/webhooksipnrequests1/README.md#listipnsbywebhookid1) - listIPNsByWebhookId
* [Listsubscribedaddresses1](docs/webhooksipnrequests1/README.md#listsubscribedaddresses1) - listSubscribedAddresses
* [Resendfailedipn1](docs/webhooksipnrequests1/README.md#resendfailedipn1) - resendFailedIPN
* [Subscribeaddress1](docs/webhooksipnrequests1/README.md#subscribeaddress1) - subscribeAddress
* [Unsubscribeaddress1](docs/webhooksipnrequests1/README.md#unsubscribeaddress1) - unsubscribeAddress

### [WebhooksIPNRequests12](docs/webhooksipnrequests12/README.md)

* [Listfailedipns2](docs/webhooksipnrequests12/README.md#listfailedipns2) - listFailedIPNs
* [Listsubscribedaddresses2](docs/webhooksipnrequests12/README.md#listsubscribedaddresses2) - listSubscribedAddresses
* [Resendfailedipn2](docs/webhooksipnrequests12/README.md#resendfailedipn2) - resendFailedIPN
* [Subscribeaddress2](docs/webhooksipnrequests12/README.md#subscribeaddress2) - subscribeAddress
* [Unsubscribeaddress2](docs/webhooksipnrequests12/README.md#unsubscribeaddress2) - unsubscribeAddress

### [WebhooksIPNRequests123](docs/webhooksipnrequests123/README.md)

* [Listfailedipns3](docs/webhooksipnrequests123/README.md#listfailedipns3) - listFailedIPNs
* [Listsubscribedaddresses3](docs/webhooksipnrequests123/README.md#listsubscribedaddresses3) - listSubscribedAddresses
* [Resendfailedipn3](docs/webhooksipnrequests123/README.md#resendfailedipn3) - resendFailedIPN
* [Subscribeaddress3](docs/webhooksipnrequests123/README.md#subscribeaddress3) - subscribeAddress
* [Unsubscribeaddress3](docs/webhooksipnrequests123/README.md#unsubscribeaddress3) - unsubscribeAddress

### [WebhooksIPNRequests1234](docs/webhooksipnrequests1234/README.md)

* [Listfailedipns4](docs/webhooksipnrequests1234/README.md#listfailedipns4) - listFailedIPNs
* [Listsubscribedaddresses4](docs/webhooksipnrequests1234/README.md#listsubscribedaddresses4) - listSubscribedAddresses
* [Resendfailedipn4](docs/webhooksipnrequests1234/README.md#resendfailedipn4) - resendFailedIPN
* [Subscribeaddress4](docs/webhooksipnrequests1234/README.md#subscribeaddress4) - subscribeAddress
* [Unsubscribeaddress4](docs/webhooksipnrequests1234/README.md#unsubscribeaddress4) - unsubscribeAddress
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
