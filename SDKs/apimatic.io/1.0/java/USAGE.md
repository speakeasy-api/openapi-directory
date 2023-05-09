<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertAPIFormatEnum;
import org.openapis.openapi.models.operations.ConvertAPIRequest;
import org.openapis.openapi.models.operations.ConvertAPIRequestBody;
import org.openapis.openapi.models.operations.ConvertAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertAPIRequest req = new ConvertAPIRequest(ConvertAPIFormatEnum.APIBLUEPRINT) {{
                requestBody = new ConvertAPIRequestBody() {{
                    url = "provident";
                }};;
            }};            

            ConvertAPIResponse res = sdk.convertAPI(req);

            if (res.convertAPI200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->