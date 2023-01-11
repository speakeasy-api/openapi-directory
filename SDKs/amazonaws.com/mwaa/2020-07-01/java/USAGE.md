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

            CreateCliTokenRequest req = new CreateCliTokenRequest() {{
                pathParams = new CreateCliTokenPathParams() {{
                    name = "nostrum";
                }};
                headers = new CreateCliTokenHeaders() {{
                    xAmzAlgorithm = "sed";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "enim";
                    xAmzDate = "corporis";
                    xAmzSecurityToken = "dolorem";
                    xAmzSignature = "quos";
                    xAmzSignedHeaders = "quibusdam";
                }};
            }};

            CreateCliTokenResponse res = sdk.createCliToken(req);

            if (res.createCliTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->