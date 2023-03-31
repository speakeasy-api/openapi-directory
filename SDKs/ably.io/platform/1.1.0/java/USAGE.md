<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.RequestAccessTokenPathParams;
import org.openapis.openapi.models.operations.RequestAccessTokenQueryParams;
import org.openapis.openapi.models.operations.RequestAccessTokenHeaders;
import org.openapis.openapi.models.operations.RequestAccessTokenRequest;
import org.openapis.openapi.models.operations.RequestAccessTokenResponse;
import org.openapis.openapi.models.shared.TokenRequest;
import org.openapis.openapi.models.shared.SignedTokenRequest;
import org.openapis.openapi.models.shared.ResponseFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestAccessTokenRequest req = new RequestAccessTokenRequest() {{
                pathParams = new RequestAccessTokenPathParams() {{
                    keyName = "corrupti";
                }};
                queryParams = new RequestAccessTokenQueryParams() {{
                    format = "msgpack";
                }};
                headers = new RequestAccessTokenHeaders() {{
                    xAblyVersion = "distinctio";
                }};
                request = new SignedTokenRequest() {{
                    capability = new java.util.HashMap<String, Object>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    clientId = "suscipit";
                    keyName = "xVLyHw.LMJZxw";
                    mac = "iure";
                    nonce = "magnam";
                    timestamp = 891773;
                }};
            }};            

            RequestAccessTokenResponse res = sdk.authentication.requestAccessToken(req);

            if (res.tokenDetails.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->