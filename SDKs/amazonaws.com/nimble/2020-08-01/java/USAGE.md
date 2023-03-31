<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptEulasPathParams;
import org.openapis.openapi.models.operations.AcceptEulasHeaders;
import org.openapis.openapi.models.operations.AcceptEulasRequestBody;
import org.openapis.openapi.models.operations.AcceptEulasRequest;
import org.openapis.openapi.models.operations.AcceptEulasResponse;

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

            AcceptEulasRequest req = new AcceptEulasRequest() {{
                pathParams = new AcceptEulasPathParams() {{
                    studioId = "corrupti";
                }};
                headers = new AcceptEulasHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzClientToken = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
                }};
                request = new AcceptEulasRequestBody() {{
                    eulaIds = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                }};
            }};            

            AcceptEulasResponse res = sdk.acceptEulas(req);

            if (res.acceptEulasResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->