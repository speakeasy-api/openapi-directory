<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequestBody("provident", "distinctio") {{
                                applicationDescription = "quibusdam";
                                clientToken = "unde";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                }};
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->