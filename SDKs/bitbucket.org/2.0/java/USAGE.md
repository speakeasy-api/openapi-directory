<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAddonSecurity;
import org.openapis.openapi.models.operations.DeleteAddonRequest;
import org.openapis.openapi.models.operations.DeleteAddonResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;
import org.openapis.openapi.models.shared.SchemeBasic;
import org.openapis.openapi.models.shared.SchemeOauth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddonRequest req = new DeleteAddonRequest() {{
                security = new DeleteAddonSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};            

            DeleteAddonResponse res = sdk.addon.deleteAddon(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->