<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequestBody;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequest;
import org.openapis.openapi.models.operations.CreateParticipantTokenResponse;
import org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParticipantTokenRequest req = new CreateParticipantTokenRequest() {{
                requestBody = new CreateParticipantTokenRequestBody() {{
                    attributes = new java.util.HashMap<String, String>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                        add("PUBLISH"),
                        add("SUBSCRIBE"),
                        add("SUBSCRIBE"),
                        add("PUBLISH"),
                    }};
                    duration = 437587;
                    stageArn = "magnam";
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

            CreateParticipantTokenResponse res = sdk.createParticipantToken(req);

            if (res.createParticipantTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->