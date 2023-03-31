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

import org.openapis.openapi.models.operations.PostGet3dsAvailabilitySecurity;
import org.openapis.openapi.models.operations.PostGet3dsAvailabilityRequest;
import org.openapis.openapi.models.operations.PostGet3dsAvailabilityResponse;
import org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostGet3dsAvailabilityRequest req = new PostGet3dsAvailabilityRequest() {{
                security = new PostGet3dsAvailabilitySecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new ThreeDSAvailabilityRequest() {{
                    additionalData = new java.util.HashMap<String, String>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    brands = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    cardNumber = "iure";
                    merchantAccount = "magnam";
                    recurringDetailReference = "debitis";
                    shopperReference = "ipsa";
                }};
            }};            

            PostGet3dsAvailabilityResponse res = sdk.general.postGet3dsAvailability(req);

            if (res.threeDSAvailabilityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### general

* `postGet3dsAvailability` - Check if 3D Secure is available
* `postGetCostEstimate` - Get a fees cost estimate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
