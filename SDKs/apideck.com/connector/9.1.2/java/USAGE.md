<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneSecurity;
import org.openapis.openapi.models.operations.ApiResourceCoverageOnePathParams;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneHeaders;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneRequest;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiResourceCoverageOneRequest req = new ApiResourceCoverageOneRequest() {{
                security = new ApiResourceCoverageOneSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new ApiResourceCoverageOnePathParams() {{
                    id = "corrupti";
                    resourceId = "provident";
                }};
                headers = new ApiResourceCoverageOneHeaders() {{
                    xApideckAppId = "distinctio";
                }};
            }};            

            ApiResourceCoverageOneResponse res = sdk.apiResources.apiResourceCoverageOne(req);

            if (res.getApiResourceCoverageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->