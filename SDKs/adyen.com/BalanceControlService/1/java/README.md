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

import org.openapis.openapi.models.operations.PostBalanceTransferSecurity;
import org.openapis.openapi.models.operations.PostBalanceTransferResponse;
import org.openapis.openapi.models.shared.BalanceTransferRequestTypeEnum;
import org.openapis.openapi.models.shared.BalanceTransferRequest;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BalanceTransferRequest req = new BalanceTransferRequest() {{
                amount = new Amount() {{
                    currency = "corrupti";
                    value = 592845;
                }};
                description = "distinctio";
                fromMerchant = "quibusdam";
                reference = "unde";
                toMerchant = "nulla";
                type = "credit";
            }}            

            PostBalanceTransferResponse res = sdk.general.postBalanceTransfer(req, new PostBalanceTransferSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balanceTransferResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postBalanceTransfer` - Start a balance transfer
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
