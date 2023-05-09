# authentication

### Available Operations

* [postUsers2FALogin](#postusers2falogin) - Second factor authentication.
* [postUsersLogin](#postuserslogin) - Create an authentication token

## postUsers2FALogin

When a user has 2FA enabled, this is the second call to perform after
`/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsers2FALoginResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Users2FALoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Users2FALoginRequest req = new Users2FALoginRequest("123456", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");            

            PostUsers2FALoginResponse res = sdk.authentication.postUsers2FALogin(req);

            if (res.postUsersLoginSuccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersLogin

Creates and returns a bearer token in JWT format that you can use to
authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersLoginResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsersLoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UsersLoginRequest req = new UsersLoginRequest("hunter2", "myusername");            

            PostUsersLoginResponse res = sdk.authentication.postUsersLogin(req);

            if (res.postUsersLoginSuccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
