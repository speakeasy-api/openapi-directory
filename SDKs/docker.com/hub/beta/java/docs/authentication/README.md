# authentication

## Overview

Most Docker Hub API endpoints require you to authenticate using your
Docker credentials before using them.

Additionally, similar to the Docker Hub UI features, API endpoint responses may vary depending 
on your plan (Free, Pro, or Team) and your account's permissions.

To learn more about the features available in each plan and to upgrade your existing plan, see [Docker Pricing](https://www.docker.com/pricing).


### Available Operations

* [postUsers2FALogin](#postusers2falogin) - Second factor authentication.
* [postUsersLogin](#postuserslogin) - Create an authentication token

## postUsers2FALogin

When user has 2FA enabled, this is the second call to perform after
`/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsers2FALoginResponse;
import org.openapis.openapi.models.shared.Users2FALoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
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
import org.openapis.openapi.models.shared.UsersLoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
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
