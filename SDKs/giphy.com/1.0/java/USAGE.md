<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetGifByIdPathParams;
import org.openapis.openapi.models.operations.GetGifByIdRequest;
import org.openapis.openapi.models.operations.GetGifByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetGifByIdRequest req = new GetGifByIdRequest() {{
                pathParams = new GetGifByIdPathParams() {{
                    gifId = 548814;
                }};
            }};            

            GetGifByIdResponse res = sdk.gifs.getGifById(req);

            if (res.getGifById200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->