<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenRequestBody;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTokenRequest req = new CreateTokenRequest(                new CreateTokenRequestBody("provident", "distinctio", "quibusdam") {{
                                code = "unde";
                                deviceCode = "nulla";
                                redirectUri = "corrupti";
                                refreshToken = "illum";
                                scope = new String[]{{
                                    add("error"),
                                    add("deserunt"),
                                }};
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CreateTokenResponse res = sdk.createToken(req);

            if (res.createTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->