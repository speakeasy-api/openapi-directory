# users

### Available Operations

* [getUser](#getuser) - Returns details of a specific fire.com user.
* [getUsers](#getusers) - Returns list of all users on your fire.com account

## getUser

You can retrieve the details of a specific fire.com user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetUserRequest req = new GetUserRequest(14059L);            

            GetUserResponse res = sdk.users.getUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

You can retrieve the details of all fire.com users on your acount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetUsersResponse res = sdk.users.getUsers();

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
