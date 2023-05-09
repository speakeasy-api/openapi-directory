# transfer

### Available Operations

* [getWebauth](#getwebauth) - First step to establish an oAuth2 connection.

## getWebauth

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebauthRequestBody;
import org.openapis.openapi.models.operations.GetWebauthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebauthRequestBody req = new GetWebauthRequestBody() {{
                clientId = 512452L;
                idTransfer = 348476L;
                redirectUri = "praesentium";
                state = "cum";
            }};            

            GetWebauthResponse res = sdk.transfer.getWebauth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
