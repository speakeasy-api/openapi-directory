<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptEulasRequest;
import org.openapis.openapi.models.operations.AcceptEulasRequestBody;
import org.openapis.openapi.models.operations.AcceptEulasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptEulasRequest req = new AcceptEulasRequest(                new AcceptEulasRequestBody() {{
                                eulaIds = new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("unde"),
                                }};
                            }};, "nulla") {{
                xAmzAlgorithm = "corrupti";
                xAmzClientToken = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            AcceptEulasResponse res = sdk.acceptEulas(req);

            if (res.acceptEulasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->