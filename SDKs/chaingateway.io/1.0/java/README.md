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

import org.openapis.openapi.models.operations.DeleteAddressRequest;
import org.openapis.openapi.models.operations.DeleteAddressResponse;
import org.openapis.openapi.models.shared.DeleteAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddressRequest req = new DeleteAddressRequest() {{
                authorization = "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m";
                deleteAddressRequest = new DeleteAddressRequest() {{
                    ethereumaddress = "corrupti";
                    password = "provident";
                }};
            }}            

            DeleteAddressResponse res = sdk.addressRequests.deleteAddress(req);

            if (res.deleteAddress.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addressRequests

* `deleteAddress` - deleteAddress
* `exportAddress` - exportAddress
* `importAddress` - importAddress
* `listAddresses` - listAddresses
* `newAddress` - newAddress

### infoRequests

* `getBlock` - getBlock
* `getEthereumBalance` - getEthereumBalance
* `getExchangeRate` - getExchangeRate
* `getGasPrice` - getGasPrice
* `getLastBlockNumber` - getLastBlockNumber
* `getToken` - getToken
* `getTokenBalance` - getTokenBalance
* `getTransactions` - getTransactions

### subscriptionIPNRequests

* `listFailedIPNs` - listFailedIPNs
* `listSubscribedAddresses` - listSubscribedAddresses
* `resendFailedIPN` - resendFailedIPN
* `subscribeAddress` - subscribeAddress
* `unsubscribeAddress` - unsubscribeAddress

### transactionRequests

* `clearAddress` - clearAddress
* `sendEthereum` - sendEthereum
* `sendToken` - sendToken
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
