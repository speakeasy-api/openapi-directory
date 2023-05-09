<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilityRequest;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilityResponse;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdvertisingEligibilityRequest req = new GetAdvertisingEligibilityRequest("corrupti") {{
                programTypes = "provident";
            }};            

            GetAdvertisingEligibilityResponse res = sdk.advertisingEligibility.getAdvertisingEligibility(req, new GetAdvertisingEligibilitySecurity("distinctio") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sellerEligibilityMultiProgramResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->