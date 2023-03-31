<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostDisableSecurity;
import org.openapis.openapi.models.operations.PostDisableRequest;
import org.openapis.openapi.models.operations.PostDisableResponse;
import org.openapis.openapi.models.shared.DisableRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostDisableRequest req = new PostDisableRequest() {{
                security = new PostDisableSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DisableRequest() {{
                    contract = "corrupti";
                    merchantAccount = "provident";
                    recurringDetailReference = "distinctio";
                    shopperReference = "quibusdam";
                }};
            }};            

            PostDisableResponse res = sdk.general.postDisable(req);

            if (res.disableResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->