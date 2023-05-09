<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDisableResponse;
import org.openapis.openapi.models.operations.PostDisableSecurity;
import org.openapis.openapi.models.shared.DisableRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DisableRequest req = new DisableRequest("corrupti", "provident") {{
                contract = "distinctio";
                recurringDetailReference = "quibusdam";
            }};            

            PostDisableResponse res = sdk.general.postDisable(req, new PostDisableSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.disableResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->