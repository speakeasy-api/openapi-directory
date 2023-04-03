<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneSecurity;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneRequest;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiResourceCoverageOneRequest req = new ApiResourceCoverageOneRequest() {{
                id = "corrupti";
                resourceId = "provident";
                xApideckAppId = "distinctio";
            }}            

            ApiResourceCoverageOneResponse res = sdk.apiResources.apiResourceCoverageOne(req, new ApiResourceCoverageOneSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApiResourceCoverageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->