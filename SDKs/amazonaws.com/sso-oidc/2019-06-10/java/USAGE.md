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

            CreateTokenRequest req = new CreateTokenRequest() {{
                headers = new CreateTokenHeaders() {{
                    xAmzAlgorithm = "enim";
                    xAmzContentSha256 = "quia";
                    xAmzCredential = "voluptatem";
                    xAmzDate = "suscipit";
                    xAmzSecurityToken = "dolorem";
                    xAmzSignature = "beatae";
                    xAmzSignedHeaders = "at";
                }};
                request = new CreateTokenRequestBody() {{
                    clientId = "debitis";
                    clientSecret = "optio";
                    code = "ut";
                    deviceCode = "at";
                    grantType = "sed";
                    redirectUri = "ut";
                    refreshToken = "cumque";
                    scope = new String[]() {{
                        add("quibusdam"),
                    }};
                }};
            }};

            CreateTokenResponse res = sdk.createToken(req);

            if (res.createTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->