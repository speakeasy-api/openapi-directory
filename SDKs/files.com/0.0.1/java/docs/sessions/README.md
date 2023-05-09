# sessions

## Overview

Operations about sessions

### Available Operations

* [deleteSessions](#deletesessions) - Delete user session (log out)
* [postSessions](#postsessions) - Create user session (log in)

## deleteSessions

Delete user session (log out)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSessionsResponse res = sdk.sessions.deleteSessions();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSessions

Create user session (log in)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSessionsRequestBody;
import org.openapis.openapi.models.operations.PostSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSessionsRequestBody req = new PostSessionsRequestBody() {{
                otp = "123456";
                partialSessionId = "voluptatum";
                password = "password";
                username = "username";
            }};            

            PostSessionsResponse res = sdk.sessions.postSessions(req);

            if (res.sessionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
