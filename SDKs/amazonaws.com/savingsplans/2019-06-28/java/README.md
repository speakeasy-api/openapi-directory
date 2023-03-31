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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSavingsPlanHeaders;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequestBody;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequest;
import org.openapis.openapi.models.operations.CreateSavingsPlanResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateSavingsPlanRequest req = new CreateSavingsPlanRequest() {{
                headers = new CreateSavingsPlanHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateSavingsPlanRequestBody() {{
                    clientToken = "illum";
                    commitment = "vel";
                    purchaseTime = "2021-09-16T11:56:06.019Z";
                    savingsPlanOfferingId = "suscipit";
                    tags = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    upfrontPaymentAmount = "tempora";
                }};
            }};            

            CreateSavingsPlanResponse res = sdk.createSavingsPlan(req);

            if (res.createSavingsPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createSavingsPlan` - Creates a Savings Plan.
* `deleteQueuedSavingsPlan` - Deletes the queued purchase for the specified Savings Plan.
* `describeSavingsPlanRates` - Describes the specified Savings Plans rates.
* `describeSavingsPlans` - Describes the specified Savings Plans.
* `describeSavingsPlansOfferingRates` - Describes the specified Savings Plans offering rates.
* `describeSavingsPlansOfferings` - Describes the specified Savings Plans offerings.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
