# advertisingEligibility

### Available Operations

* [getAdvertisingEligibility](#getadvertisingeligibility) - This method allows developers to check the seller eligibility status for eBay advertising programs.

## getAdvertisingEligibility

This method allows developers to check the seller eligibility status for eBay advertising programs.

### Example Usage

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

            GetAdvertisingEligibilityRequest req = new GetAdvertisingEligibilityRequest("quibusdam") {{
                programTypes = "unde";
            }};            

            GetAdvertisingEligibilityResponse res = sdk.advertisingEligibility.getAdvertisingEligibility(req, new GetAdvertisingEligibilitySecurity("nulla") {{
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
