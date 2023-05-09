# profile

### Available Operations

* [getProfile](#getprofile) - Get profile

## getProfile

Returns information about your user profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileResponse;
import org.openapis.openapi.models.operations.GetProfileSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProfileResponse res = sdk.profile.getProfile(new GetProfileSecurity("deleniti", "facilis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
