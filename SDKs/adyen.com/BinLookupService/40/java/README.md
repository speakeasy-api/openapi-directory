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
import org.openapis.openapi.models.operations.PostGet3dsAvailabilityResponse;
import org.openapis.openapi.models.operations.PostGet3dsAvailabilitySecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest req = new ThreeDSAvailabilityRequest("corrupti") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
                brands = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
                cardNumber = "suscipit";
                recurringDetailReference = "iure";
                shopperReference = "magnam";
            }};            

            PostGet3dsAvailabilityResponse res = sdk.general.postGet3dsAvailability(req, new PostGet3dsAvailabilitySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.threeDSAvailabilityResponse != null) {
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

* [postGet3dsAvailability](docs/general/README.md#postget3dsavailability) - Check if 3D Secure is available
* [postGetCostEstimate](docs/general/README.md#postgetcostestimate) - Get a fees cost estimate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
