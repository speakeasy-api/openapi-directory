<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteThingShadowPathParams;
import org.openapis.openapi.models.operations.DeleteThingShadowQueryParams;
import org.openapis.openapi.models.operations.DeleteThingShadowHeaders;
import org.openapis.openapi.models.operations.DeleteThingShadowRequest;
import org.openapis.openapi.models.operations.DeleteThingShadowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DeleteThingShadowRequest req = new DeleteThingShadowRequest() {{
                pathParams = new DeleteThingShadowPathParams() {{
                    thingName = "corrupti";
                }};
                queryParams = new DeleteThingShadowQueryParams() {{
                    name = "provident";
                }};
                headers = new DeleteThingShadowHeaders() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
            }};            

            DeleteThingShadowResponse res = sdk.deleteThingShadow(req);

            if (res.deleteThingShadowResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->