<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccessTokenRequestBody;
import org.openapis.openapi.models.operations.CreateAccessTokenRequest;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;

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

            CreateAccessTokenRequest req = new CreateAccessTokenRequest() {{
                request = new CreateAccessTokenRequestBody() {{
                    expiresTime = "2021-10-25T05:21:43.948Z";
                    name = "distinctio";
                }};
            }};            

            CreateAccessTokenResponse res = sdk.createAccessToken(req);

            if (res.createAccessTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->