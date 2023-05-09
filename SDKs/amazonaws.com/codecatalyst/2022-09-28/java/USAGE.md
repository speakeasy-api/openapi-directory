<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessTokenRequestBody;
import org.openapis.openapi.models.operations.CreateAccessTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessTokenRequestBody req = new CreateAccessTokenRequestBody("provident") {{
                expiresTime = OffsetDateTime.parse("2021-04-24T16:27:50.833Z");
            }};            

            CreateAccessTokenResponse res = sdk.createAccessToken(req);

            if (res.createAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->