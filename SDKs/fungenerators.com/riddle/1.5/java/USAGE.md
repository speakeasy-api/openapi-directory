<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteRiddleSecurity;
import org.openapis.openapi.models.operations.DeleteRiddleQueryParams;
import org.openapis.openapi.models.operations.DeleteRiddleRequest;
import org.openapis.openapi.models.operations.DeleteRiddleResponse;
import org.openapis.openapi.models.shared.SchemeXFungeneratorsAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRiddleRequest req = new DeleteRiddleRequest() {{
                security = new DeleteRiddleSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DeleteRiddleQueryParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteRiddleResponse res = sdk.privateRiddles.deleteRiddle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->