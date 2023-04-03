<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.InterferenceSecurity;
import org.openapis.openapi.models.operations.InterferenceRequest;
import org.openapis.openapi.models.operations.InterferenceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InterferenceRequest req = new InterferenceRequest() {{
                name = "corrupti";
                network = "provident";
            }}            

            InterferenceResponse res = sdk.analyse.interference(req, new InterferenceSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->