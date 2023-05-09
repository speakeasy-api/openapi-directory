<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityResponse;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateOriginationIdentityRequest req = new AssociateOriginationIdentityRequest(                new AssociateOriginationIdentityRequest("provident", "distinctio", "quibusdam") {{
                                clientToken = "unde";
                            }};, AssociateOriginationIdentityXAmzTargetEnum.PINPOINT_SMS_VOICE_V2_ASSOCIATE_ORIGINATION_IDENTITY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AssociateOriginationIdentityResponse res = sdk.associateOriginationIdentity(req);

            if (res.associateOriginationIdentityResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->