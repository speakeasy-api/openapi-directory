<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserExtensionsResponse;
import org.openapis.openapi.models.operations.GetUserExtensionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserExtensionsResponse res = sdk.user.getUserExtensions(new GetUserExtensionsSecurity("corrupti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.extensions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->