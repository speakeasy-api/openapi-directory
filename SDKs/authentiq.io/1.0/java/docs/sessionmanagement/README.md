# sessionManagement

### Available Operations

* [authorizeIframe](#authorizeiframe) - Include a session iframe

## authorizeIframe

An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.

The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.


OIDC OP Session Management Iframe
<http://openid.net/specs/openid-connect-session-1_0.html#OPiframe>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizeIframeRequest;
import org.openapis.openapi.models.operations.AuthorizeIframeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizeIframeRequest req = new AuthorizeIframeRequest("saepe");            

            AuthorizeIframeResponse res = sdk.sessionManagement.authorizeIframe(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
