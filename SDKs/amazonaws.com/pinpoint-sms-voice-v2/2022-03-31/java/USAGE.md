<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityHeaders;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityRequest;
import org.openapis.openapi.models.operations.AssociateOriginationIdentityResponse;
import org.openapis.openapi.models.shared.AssociateOriginationIdentityRequest;

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

            AssociateOriginationIdentityRequest req = new AssociateOriginationIdentityRequest() {{
                headers = new AssociateOriginationIdentityHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "PinpointSMSVoiceV2.AssociateOriginationIdentity";
                }};
                request = new AssociateOriginationIdentityRequest() {{
                    clientToken = "illum";
                    isoCountryCode = "vel";
                    originationIdentity = "error";
                    poolId = "deserunt";
                }};
            }};            

            AssociateOriginationIdentityResponse res = sdk.associateOriginationIdentity(req);

            if (res.associateOriginationIdentityResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->