# users

## Overview

Operations related to users.

### Available Operations

* [getCurrentUserInfo](#getcurrentuserinfo) - Get current user

## getCurrentUserInfo

Returns information about the currently authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrentUserInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCurrentUserInfoResponse res = sdk.users.getCurrentUserInfo();

            if (res.userInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
