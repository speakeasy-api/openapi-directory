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
import org.openapis.openapi.models.operations.PostChangeStatusResponse;
import org.openapis.openapi.models.operations.PostChangeStatusSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequest;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestShopperInteractionEnum;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueStatusChangeRequest req = new StoredValueStatusChangeRequest("corrupti",                 new java.util.HashMap<String, String>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}, "vel", StoredValueStatusChangeRequestStatusEnum.INACTIVE) {{
                amount = new Amount("deserunt", 384382L);;
                recurringDetailReference = "iure";
                shopperInteraction = StoredValueStatusChangeRequestShopperInteractionEnum.CONT_AUTH;
                shopperReference = "debitis";
                store = "ipsa";
            }};            

            PostChangeStatusResponse res = sdk.general.postChangeStatus(req, new PostChangeStatusSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueStatusChangeResponse != null) {
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


### [general](docs/general/README.md)

* [postChangeStatus](docs/general/README.md#postchangestatus) - Changes the status of the payment method.
* [postCheckBalance](docs/general/README.md#postcheckbalance) - Checks the balance.
* [postIssue](docs/general/README.md#postissue) - Issues a new card.
* [postLoad](docs/general/README.md#postload) - Loads the payment method.
* [postMergeBalance](docs/general/README.md#postmergebalance) - Merge the balance of two cards.
* [postVoidTransaction](docs/general/README.md#postvoidtransaction) - Voids a transaction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
