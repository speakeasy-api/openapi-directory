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
import org.openapis.openapi.models.operations.GetAddressV2Request;
import org.openapis.openapi.models.operations.GetAddressV2Response;
import org.openapis.openapi.models.shared.DetailsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("corrupti") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAddressV2Request req = new GetAddressV2Request("321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL", "bitcoin") {{
                contract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
                details = DetailsEnum.BASIC;
                fromBlock = 10L;
                page = 1L;
                pageSize = 1000L;
                secondary = "usd";
                toBlock = 100L;
            }};            

            GetAddressV2Response res = sdk.addresses.getAddressV2(req);

            if (res.getAddressV2200ApplicationJSONObject != null) {
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


### [addresses](docs/addresses/README.md)

* [getAddressV2](docs/addresses/README.md#getaddressv2) - Get address V2
* [getBalanceHistoryV2](docs/addresses/README.md#getbalancehistoryv2) - Get Balance History V2
* [getUtxov2](docs/addresses/README.md#getutxov2) - Get UTXO V2
* [getXpubV2](docs/addresses/README.md#getxpubv2) - Get xpub V2

### [blocks](docs/blocks/README.md)

* [getBlockHashV2](docs/blocks/README.md#getblockhashv2) - Get block hash V2
* [getBlockV2](docs/blocks/README.md#getblockv2) - Get Block V2
* [getRawBlockV2](docs/blocks/README.md#getrawblockv2) - Get raw block data V2

### [feeEstimation](docs/feeestimation/README.md)

* [getEstimateFeeV2](docs/feeestimation/README.md#getestimatefeev2) - Estimate transaction fee V2

### [nft](docs/nft/README.md)

* [getNFTMetaV2](docs/nft/README.md#getnftmetav2) - Get NFT metadata V2

### [status](docs/status/README.md)

* [getAvailableBlockchains](docs/status/README.md#getavailableblockchains) - List available blockchains
* [getBlockchain](docs/status/README.md#getblockchain) - Blockchain Info Summary

### [tickers](docs/tickers/README.md)

* [getTickersListV2](docs/tickers/README.md#gettickerslistv2) - Get Tickers list V2
* [getTickersV2](docs/tickers/README.md#gettickersv2) - Get Tickers V2

### [transactions](docs/transactions/README.md)

* [getMempoolV2](docs/transactions/README.md#getmempoolv2) - Get Mempool V2
* [getSendTxV2](docs/transactions/README.md#getsendtxv2) - Send transaction (in URL) V2
* [getTransactionV2](docs/transactions/README.md#gettransactionv2) - Get transaction V2
* [getTxSpecificV2](docs/transactions/README.md#gettxspecificv2) - Get transaction (as is from Backend) V2
* [postSendTxV2](docs/transactions/README.md#postsendtxv2) - Send transaction (POST) V2
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
