<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteBusinessLinesIdSecurity;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdPathParams;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdRequest;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBusinessLinesIdRequest req = new DeleteBusinessLinesIdRequest() {{
                security = new DeleteBusinessLinesIdSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteBusinessLinesIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteBusinessLinesIdResponse res = sdk.businessLines.deleteBusinessLinesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->