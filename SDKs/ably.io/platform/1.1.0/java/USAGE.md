<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestAccessTokenRequest;
import org.openapis.openapi.models.operations.RequestAccessTokenResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignedTokenRequest;
import org.openapis.openapi.models.shared.TokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestAccessTokenRequest req = new RequestAccessTokenRequest("distinctio") {{
                requestBody = new SignedTokenRequest(                new java.util.HashMap<String, Object>() {{
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                    put("error", "deserunt");
                                }}, "xVLyHw.LMJZxw", "suscipit", "iure", 297534L) {{
                    clientId = "debitis";
                }};;
                xAblyVersion = "ipsa";
                format = ResponseFormatEnum.HTML;
            }};            

            RequestAccessTokenResponse res = sdk.authentication.requestAccessToken(req);

            if (res.tokenDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->