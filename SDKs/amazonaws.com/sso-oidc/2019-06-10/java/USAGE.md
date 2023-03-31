<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateTokenHeaders;
import org.openapis.openapi.models.operations.CreateTokenRequestBody;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenResponse;

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

            CreateTokenRequest req = new CreateTokenRequest() {{
                headers = new CreateTokenHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateTokenRequestBody() {{
                    clientId = "illum";
                    clientSecret = "vel";
                    code = "error";
                    deviceCode = "deserunt";
                    grantType = "suscipit";
                    redirectUri = "iure";
                    refreshToken = "magnam";
                    scope = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
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