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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateTokenRequestBody() {{
                    clientId = "voluptas";
                    clientSecret = "fugit";
                    code = "et";
                    deviceCode = "nihil";
                    grantType = "rerum";
                    redirectUri = "dicta";
                    refreshToken = "debitis";
                    scope = new String[]() {{
                        add("et"),
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