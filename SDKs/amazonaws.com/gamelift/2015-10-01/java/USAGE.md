<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptMatchRequest;
import org.openapis.openapi.models.operations.AcceptMatchResponse;
import org.openapis.openapi.models.operations.AcceptMatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptMatchInput;
import org.openapis.openapi.models.shared.AcceptanceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptMatchRequest req = new AcceptMatchRequest(                new AcceptMatchInput(AcceptanceTypeEnum.REJECT,                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }}, "corrupti");, AcceptMatchXAmzTargetEnum.GAME_LIFT_ACCEPT_MATCH) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            AcceptMatchResponse res = sdk.acceptMatch(req);

            if (res.acceptMatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->