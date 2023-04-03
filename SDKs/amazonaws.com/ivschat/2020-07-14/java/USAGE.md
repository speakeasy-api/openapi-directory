<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateChatTokenRequestBody;
import org.openapis.openapi.models.operations.CreateChatTokenRequest;
import org.openapis.openapi.models.operations.CreateChatTokenResponse;
import org.openapis.openapi.models.shared.ChatTokenCapabilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateChatTokenRequest req = new CreateChatTokenRequest() {{
                requestBody = new CreateChatTokenRequestBody() {{
                    attributes = new java.util.HashMap<String, String>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    capabilities = new org.openapis.openapi.models.shared.ChatTokenCapabilityEnum[]{{
                        add("DISCONNECT_USER"),
                        add("DISCONNECT_USER"),
                        add("DISCONNECT_USER"),
                        add("DISCONNECT_USER"),
                    }};
                    roomIdentifier = "iure";
                    sessionDurationInMinutes = 297534;
                    userId = "debitis";
                }};
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }}            

            CreateChatTokenResponse res = sdk.createChatToken(req);

            if (res.createChatTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->