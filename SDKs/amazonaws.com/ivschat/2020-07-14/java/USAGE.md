<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateChatTokenHeaders;
import org.openapis.openapi.models.operations.CreateChatTokenRequestBody;
import org.openapis.openapi.models.operations.CreateChatTokenRequest;
import org.openapis.openapi.models.operations.CreateChatTokenResponse;
import org.openapis.openapi.models.shared.ChatTokenCapabilityEnum;

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

            CreateChatTokenRequest req = new CreateChatTokenRequest() {{
                headers = new CreateChatTokenHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateChatTokenRequestBody() {{
                    attributes = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    capabilities = new org.openapis.openapi.models.shared.ChatTokenCapabilityEnum[]{{
                        add("SEND_MESSAGE"),
                        add("DISCONNECT_USER"),
                        add("DISCONNECT_USER"),
                        add("DELETE_MESSAGE"),
                    }};
                    roomIdentifier = "placeat";
                    sessionDurationInMinutes = 528895;
                    userId = "iusto";
                }};
            }};            

            CreateChatTokenResponse res = sdk.createChatToken(req);

            if (res.createChatTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->