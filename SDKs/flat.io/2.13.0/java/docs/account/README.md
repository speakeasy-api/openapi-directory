# account

## Overview

These API endpoints are related to the Flat account you are currently using. When using an OAuth2 access token, you can use [`GET /me`](#operation/getAuthenticatedUser) to get information about the account.


### Available Operations

* [getAuthenticatedUser](#getauthenticateduser) - Get current user profile

## getAuthenticatedUser

Get details about the current authenticated User.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.GetAuthenticatedUserResponse;
import org.openapis.openapi.models.operations.GetAuthenticatedUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthenticatedUserRequest req = new GetAuthenticatedUserRequest() {{
                onlyId = false;
            }};            

            GetAuthenticatedUserResponse res = sdk.account.getAuthenticatedUser(req, new GetAuthenticatedUserSecurity("provident") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
