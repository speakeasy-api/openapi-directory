# users

### Available Operations

* [getUsersMe](#getusersme) - About Me

## getUsersMe

Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersMeResponse;
import org.openapis.openapi.models.operations.GetUsersMeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersMeResponse res = sdk.users.getUsersMe(new GetUsersMeSecurity("perferendis") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userContactV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
