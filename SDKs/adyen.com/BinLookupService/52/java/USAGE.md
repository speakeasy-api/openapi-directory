<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostGet3dsAvailabilitySecurity;
import org.openapis.openapi.models.operations.PostGet3dsAvailabilityResponse;
import org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ThreeDSAvailabilityRequest req = new ThreeDSAvailabilityRequest() {{
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
            }}            

            PostGet3dsAvailabilityResponse res = sdk.general.postGet3dsAvailability(req, new PostGet3dsAvailabilitySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.threeDSAvailabilityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->