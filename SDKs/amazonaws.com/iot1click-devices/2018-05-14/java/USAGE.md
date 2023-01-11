<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ClaimDevicesByClaimCodeRequest req = new ClaimDevicesByClaimCodeRequest() {{
                pathParams = new ClaimDevicesByClaimCodePathParams() {{
                    claimCode = "amet";
                }};
                headers = new ClaimDevicesByClaimCodeHeaders() {{
                    xAmzAlgorithm = "inventore";
                    xAmzContentSha256 = "reprehenderit";
                    xAmzCredential = "autem";
                    xAmzDate = "tenetur";
                    xAmzSecurityToken = "facilis";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "est";
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