<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateParticipantTokenHeaders;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequestBody;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequest;
import org.openapis.openapi.models.operations.CreateParticipantTokenResponse;
import org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum;

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

            CreateParticipantTokenRequest req = new CreateParticipantTokenRequest() {{
                headers = new CreateParticipantTokenHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateParticipantTokenRequestBody() {{
                    attributes = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                        add("PUBLISH"),
                        add("PUBLISH"),
                        add("PUBLISH"),
                        add("SUBSCRIBE"),
                    }};
                    duration = 812169;
                    stageArn = "voluptatum";
                    userId = "iusto";
                }};
            }};            

            CreateParticipantTokenResponse res = sdk.createParticipantToken(req);

            if (res.createParticipantTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->