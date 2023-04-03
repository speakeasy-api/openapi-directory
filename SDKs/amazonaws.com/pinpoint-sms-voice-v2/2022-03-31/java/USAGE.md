<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityResponse;
import org.openapis.openapi.models.shared.AssociateOriginationIdentityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateOriginationIdentityRequest req = new AssociateOriginationIdentityRequest() {{
                associateOriginationIdentityRequest = new AssociateOriginationIdentityRequest() {{
                    clientToken = "corrupti";
                    isoCountryCode = "provident";
                    originationIdentity = "distinctio";
                    poolId = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "PinpointSMSVoiceV2.AssociateOriginationIdentity";
            }}            

            AssociateOriginationIdentityResponse res = sdk.associateOriginationIdentity(req);

            if (res.associateOriginationIdentityResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->