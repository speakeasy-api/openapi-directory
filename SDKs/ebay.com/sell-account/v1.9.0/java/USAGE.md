<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAdvertisingEligibilitySecurity;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilityQueryParams;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilityHeaders;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilityRequest;
import org.openapis.openapi.models.operations.GetAdvertisingEligibilityResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdvertisingEligibilityRequest req = new GetAdvertisingEligibilityRequest() {{
                security = new GetAdvertisingEligibilitySecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetAdvertisingEligibilityQueryParams() {{
                    programTypes = "corrupti";
                }};
                headers = new GetAdvertisingEligibilityHeaders() {{
                    xEbayCMarketplaceId = "provident";
                }};
            }};            

            GetAdvertisingEligibilityResponse res = sdk.advertisingEligibility.getAdvertisingEligibility(req);

            if (res.sellerEligibilityMultiProgramResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->