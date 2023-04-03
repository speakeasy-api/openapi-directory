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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        DeleteAddressRequest: shared.DeleteAddressRequest{
            Ethereumaddress: "corrupti",
            Password: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.AddressRequests.DeleteAddress(ctx, req)
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


### AddressRequests

* `DeleteAddress` - deleteAddress
* `ExportAddress` - exportAddress
* `ImportAddress` - importAddress
* `ListAddresses` - listAddresses
* `NewAddress` - newAddress

### InfoRequests

* `GetBlock` - getBlock
* `GetEthereumBalance` - getEthereumBalance
* `GetExchangeRate` - getExchangeRate
* `GetGasPrice` - getGasPrice
* `GetLastBlockNumber` - getLastBlockNumber
* `GetToken` - getToken
* `GetTokenBalance` - getTokenBalance
* `GetTransactions` - getTransactions

### SubscriptionIPNRequests

* `ListFailedIPNs` - listFailedIPNs
* `ListSubscribedAddresses` - listSubscribedAddresses
* `ResendFailedIPN` - resendFailedIPN
* `SubscribeAddress` - subscribeAddress
* `UnsubscribeAddress` - unsubscribeAddress

### TransactionRequests

* `ClearAddress` - clearAddress
* `SendEthereum` - sendEthereum
* `SendToken` - sendToken
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
