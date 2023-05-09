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