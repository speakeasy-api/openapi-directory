<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetUserExtensionsSecurity;
import org.openapis.openapi.models.operations.GetUserExtensionsRequest;
import org.openapis.openapi.models.operations.GetUserExtensionsResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserExtensionsRequest req = new GetUserExtensionsRequest() {{
                security = new GetUserExtensionsSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            GetUserExtensionsResponse res = sdk.user.getUserExtensions(req);

            if (res.extensions.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->