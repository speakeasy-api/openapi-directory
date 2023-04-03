<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptMatchXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptMatchRequest;
import org.openapis.openapi.models.operations.AcceptMatchResponse;
import org.openapis.openapi.models.shared.AcceptMatchInput;
import org.openapis.openapi.models.shared.AcceptanceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptMatchRequest req = new AcceptMatchRequest() {{
                acceptMatchInput = new AcceptMatchInput() {{
                    acceptanceType = "REJECT";
                    playerIds = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    ticketId = "nulla";
                }};
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
                xAmzTarget = "GameLift.AcceptMatch";
            }}            

            AcceptMatchResponse res = sdk.acceptMatch(req);

            if (res.acceptMatchOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->