<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.InterferenceSecurity;
import org.openapis.openapi.models.operations.InterferenceQueryParams;
import org.openapis.openapi.models.operations.InterferenceRequest;
import org.openapis.openapi.models.operations.InterferenceResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InterferenceRequest req = new InterferenceRequest() {{
                security = new InterferenceSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new InterferenceQueryParams() {{
                    name = "corrupti";
                    network = "provident";
                }};
            }};            

            InterferenceResponse res = sdk.analyse.interference(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->