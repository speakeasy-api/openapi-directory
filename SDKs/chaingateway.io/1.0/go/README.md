# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/chaingateway.io/1.0/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AddressRequests.DeleteAddress(ctx, operations.DeleteAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        DeleteAddressRequest: shared.DeleteAddressRequest{
            Ethereumaddress: "corrupti",
            Password: "provident",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAddress != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AddressRequests](docs/addressrequests/README.md)

* [DeleteAddress](docs/addressrequests/README.md#deleteaddress) - deleteAddress
* [ExportAddress](docs/addressrequests/README.md#exportaddress) - exportAddress
* [ImportAddress](docs/addressrequests/README.md#importaddress) - importAddress
* [ListAddresses](docs/addressrequests/README.md#listaddresses) - listAddresses
* [NewAddress](docs/addressrequests/README.md#newaddress) - newAddress

### [InfoRequests](docs/inforequests/README.md)

* [GetBlock](docs/inforequests/README.md#getblock) - getBlock
* [GetEthereumBalance](docs/inforequests/README.md#getethereumbalance) - getEthereumBalance
* [GetExchangeRate](docs/inforequests/README.md#getexchangerate) - getExchangeRate
* [GetGasPrice](docs/inforequests/README.md#getgasprice) - getGasPrice
* [GetLastBlockNumber](docs/inforequests/README.md#getlastblocknumber) - getLastBlockNumber
* [GetToken](docs/inforequests/README.md#gettoken) - getToken
* [GetTokenBalance](docs/inforequests/README.md#gettokenbalance) - getTokenBalance
* [GetTransactions](docs/inforequests/README.md#gettransactions) - getTransactions

### [SubscriptionIPNRequests](docs/subscriptionipnrequests/README.md)

* [ListFailedIPNs](docs/subscriptionipnrequests/README.md#listfailedipns) - listFailedIPNs
* [ListSubscribedAddresses](docs/subscriptionipnrequests/README.md#listsubscribedaddresses) - listSubscribedAddresses
* [ResendFailedIPN](docs/subscriptionipnrequests/README.md#resendfailedipn) - resendFailedIPN
* [SubscribeAddress](docs/subscriptionipnrequests/README.md#subscribeaddress) - subscribeAddress
* [UnsubscribeAddress](docs/subscriptionipnrequests/README.md#unsubscribeaddress) - unsubscribeAddress

### [TransactionRequests](docs/transactionrequests/README.md)

* [ClearAddress](docs/transactionrequests/README.md#clearaddress) - clearAddress
* [SendEthereum](docs/transactionrequests/README.md#sendethereum) - sendEthereum
* [SendToken](docs/transactionrequests/README.md#sendtoken) - sendToken
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
