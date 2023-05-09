<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequest;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequestBody;
import org.openapis.openapi.models.operations.CreateParticipantTokenResponse;
import org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParticipantTokenRequest req = new CreateParticipantTokenRequest(                new CreateParticipantTokenRequestBody("provident") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }};
                                capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                                    add(ParticipantTokenCapabilityEnum.SUBSCRIBE),
                                    add(ParticipantTokenCapabilityEnum.PUBLISH),
                                    add(ParticipantTokenCapabilityEnum.PUBLISH),
                                }};
                                duration = 297534L;
                                userId = "debitis";
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CreateParticipantTokenResponse res = sdk.createParticipantToken(req);

            if (res.createParticipantTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->