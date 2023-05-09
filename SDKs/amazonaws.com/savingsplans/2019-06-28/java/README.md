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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequest;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequestBody;
import org.openapis.openapi.models.operations.CreateSavingsPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSavingsPlanRequest req = new CreateSavingsPlanRequest(                new CreateSavingsPlanRequestBody("provident", "distinctio") {{
                                clientToken = "quibusdam";
                                purchaseTime = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                                tags = new java.util.HashMap<String, String>() {{
                                    put("illum", "vel");
                                    put("error", "deserunt");
                                    put("suscipit", "iure");
                                }};
                                upfrontPaymentAmount = "magnam";
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            CreateSavingsPlanResponse res = sdk.createSavingsPlan(req);

            if (res.createSavingsPlanResponse != null) {
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

### [SDK](docs/sdk/README.md)

* [createSavingsPlan](docs/sdk/README.md#createsavingsplan) - Creates a Savings Plan.
* [deleteQueuedSavingsPlan](docs/sdk/README.md#deletequeuedsavingsplan) - Deletes the queued purchase for the specified Savings Plan.
* [describeSavingsPlanRates](docs/sdk/README.md#describesavingsplanrates) - Describes the specified Savings Plans rates.
* [describeSavingsPlans](docs/sdk/README.md#describesavingsplans) - Describes the specified Savings Plans.
* [describeSavingsPlansOfferingRates](docs/sdk/README.md#describesavingsplansofferingrates) - Describes the specified Savings Plans offering rates.
* [describeSavingsPlansOfferings](docs/sdk/README.md#describesavingsplansofferings) - Describes the specified Savings Plans offerings.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
