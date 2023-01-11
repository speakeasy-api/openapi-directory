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

            AcceptGrantRequest req = new AcceptGrantRequest() {{
                headers = new AcceptGrantHeaders() {{
                    xAmzAlgorithm = "vel";
                    xAmzContentSha256 = "rerum";
                    xAmzCredential = "minus";
                    xAmzDate = "asperiores";
                    xAmzSecurityToken = "laboriosam";
                    xAmzSignature = "voluptate";
                    xAmzSignedHeaders = "aut";
                    xAmzTarget = "AWSLicenseManager.AcceptGrant";
                }};
                request = new AcceptGrantRequest() {{
                    grantArn = "ipsa";
                }};
            }};

            AcceptGrantResponse res = sdk.acceptGrant(req);

            if (res.acceptGrantResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->