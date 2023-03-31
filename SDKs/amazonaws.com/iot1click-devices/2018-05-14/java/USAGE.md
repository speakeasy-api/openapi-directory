<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodePathParams;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeHeaders;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeRequest;
import org.openapis.openapi.models.operations.ClaimDevicesByClaimCodeResponse;

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

            ClaimDevicesByClaimCodeRequest req = new ClaimDevicesByClaimCodeRequest() {{
                pathParams = new ClaimDevicesByClaimCodePathParams() {{
                    claimCode = "corrupti";
                }};
                headers = new ClaimDevicesByClaimCodeHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            ClaimDevicesByClaimCodeResponse res = sdk.claimDevicesByClaimCode(req);

            if (res.claimDevicesByClaimCodeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->