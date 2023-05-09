<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequest;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequestBody;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExtendedSourceServerRequest req = new CreateExtendedSourceServerRequest(                new CreateExtendedSourceServerRequestBody("provident") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }};
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateExtendedSourceServerResponse res = sdk.createExtendedSourceServer(req);

            if (res.createExtendedSourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->