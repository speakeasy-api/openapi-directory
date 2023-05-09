# authentication

### Available Operations

* [requestAccessToken](#requestaccesstoken) - Request an access token

## requestAccessToken

This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.

### Example Usage

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
                    basicAuth = new SchemeBasicAuth("tempora", "suscipit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestAccessTokenRequest req = new RequestAccessTokenRequest("molestiae") {{
                requestBody = new SignedTokenRequest(                new java.util.HashMap<String, Object>() {{
                                    put("voluptatum", "iusto");
                                    put("excepturi", "nisi");
                                    put("recusandae", "temporibus");
                                    put("ab", "quis");
                                }}, "xVLyHw.LMJZxw", "veritatis", "deserunt", 20218L) {{
                    clientId = "ipsam";
                }};;
                xAblyVersion = "repellendus";
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
