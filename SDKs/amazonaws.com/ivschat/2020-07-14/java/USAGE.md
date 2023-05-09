<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChatTokenRequest;
import org.openapis.openapi.models.operations.CreateChatTokenRequestBody;
import org.openapis.openapi.models.operations.CreateChatTokenResponse;
import org.openapis.openapi.models.shared.ChatTokenCapabilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateChatTokenRequest req = new CreateChatTokenRequest(                new CreateChatTokenRequestBody("provident", "distinctio") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                }};
                                capabilities = new org.openapis.openapi.models.shared.ChatTokenCapabilityEnum[]{{
                                    add(ChatTokenCapabilityEnum.SEND_MESSAGE),
                                    add(ChatTokenCapabilityEnum.DELETE_MESSAGE),
                                }};
                                sessionDurationInMinutes = 56713L;
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            CreateChatTokenResponse res = sdk.createChatToken(req);

            if (res.createChatTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->