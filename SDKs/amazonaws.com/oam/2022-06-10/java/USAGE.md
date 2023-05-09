<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLinkRequest;
import org.openapis.openapi.models.operations.CreateLinkRequestBody;
import org.openapis.openapi.models.operations.CreateLinkResponse;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLinkRequest req = new CreateLinkRequest(                new CreateLinkRequestBody("provident",                 new org.openapis.openapi.models.shared.ResourceTypeEnum[]{{
                                                add(ResourceTypeEnum.AWSX_RAY_TRACE),
                                                add(ResourceTypeEnum.AWS_LOGS_LOG_GROUP),
                                                add(ResourceTypeEnum.AWSX_RAY_TRACE),
                                            }}, "corrupti") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            CreateLinkResponse res = sdk.createLink(req);

            if (res.createLinkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->