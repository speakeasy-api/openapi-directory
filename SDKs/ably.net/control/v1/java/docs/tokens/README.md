# tokens

### Available Operations

* [getMe](#getme) - Get token details

## getMe

Get token details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.operations.GetMeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeResponse res = sdk.tokens.getMe(new GetMeSecurity("praesentium") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.me != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
