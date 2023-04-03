<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConvertAPIRequestBody;
import org.openapis.openapi.models.operations.ConvertAPIFormatEnum;
import org.openapis.openapi.models.operations.ConvertAPIRequest;
import org.openapis.openapi.models.operations.ConvertAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertAPIRequest req = new ConvertAPIRequest() {{
                requestBody = new ConvertAPIRequestBody() {{
                    url = "corrupti";
                }};
                format = "wadl2009";
            }}            

            ConvertAPIResponse res = sdk.convertAPI(req);

            if (res.convertAPI200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->