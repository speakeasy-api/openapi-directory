# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/chain49.com/2.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.GetAddressV2(ctx, operations.GetAddressV2Request{
        Address: "321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL",
        Blockchain: "bitcoin",
        Contract: sdk.String("0xdAC17F958D2ee523a2206206994597C13D831ec7"),
        Details: shared.DetailsEnumBasic.ToPointer(),
        FromBlock: sdk.Int64(10),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(1000),
        Secondary: sdk.String("usd"),
        ToBlock: sdk.Int64(100),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Addresses](docs/addresses/README.md)

* [GetAddressV2](docs/addresses/README.md#getaddressv2) - Get address V2
* [GetBalanceHistoryV2](docs/addresses/README.md#getbalancehistoryv2) - Get Balance History V2
* [GetUtxov2](docs/addresses/README.md#getutxov2) - Get UTXO V2
* [GetXpubV2](docs/addresses/README.md#getxpubv2) - Get xpub V2

### [Blocks](docs/blocks/README.md)

* [GetBlockHashV2](docs/blocks/README.md#getblockhashv2) - Get block hash V2
* [GetBlockV2](docs/blocks/README.md#getblockv2) - Get Block V2
* [GetRawBlockV2](docs/blocks/README.md#getrawblockv2) - Get raw block data V2

### [FeeEstimation](docs/feeestimation/README.md)

* [GetEstimateFeeV2](docs/feeestimation/README.md#getestimatefeev2) - Estimate transaction fee V2

### [Nft](docs/nft/README.md)

* [GetNFTMetaV2](docs/nft/README.md#getnftmetav2) - Get NFT metadata V2

### [Status](docs/status/README.md)

* [GetAvailableBlockchains](docs/status/README.md#getavailableblockchains) - List available blockchains
* [GetBlockchain](docs/status/README.md#getblockchain) - Blockchain Info Summary

### [Tickers](docs/tickers/README.md)

* [GetTickersListV2](docs/tickers/README.md#gettickerslistv2) - Get Tickers list V2
* [GetTickersV2](docs/tickers/README.md#gettickersv2) - Get Tickers V2

### [Transactions](docs/transactions/README.md)

* [GetMempoolV2](docs/transactions/README.md#getmempoolv2) - Get Mempool V2
* [GetSendTxV2](docs/transactions/README.md#getsendtxv2) - Send transaction (in URL) V2
* [GetTransactionV2](docs/transactions/README.md#gettransactionv2) - Get transaction V2
* [GetTxSpecificV2](docs/transactions/README.md#gettxspecificv2) - Get transaction (as is from Backend) V2
* [PostSendTxV2](docs/transactions/README.md#postsendtxv2) - Send transaction (POST) V2
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
