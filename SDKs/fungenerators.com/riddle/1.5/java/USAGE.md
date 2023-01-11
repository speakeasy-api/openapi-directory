<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DeleteRiddleRequest req = new DeleteRiddleRequest() {{
                security = new DeleteRiddleSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DeleteRiddleQueryParams() {{
                    id = "sit";
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