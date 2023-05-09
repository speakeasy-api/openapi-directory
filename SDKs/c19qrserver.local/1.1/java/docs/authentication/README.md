# authentication

## Overview

Authentication-related endpoints

### Available Operations

* [postLogin](#postlogin) - Log in to get an API token
* [postLogout](#postlogout) - Log out

## postLogin

Submit your email and password to get an API token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoginResponse;
import org.openapis.openapi.models.operations.PostLoginSample;
import org.openapis.openapi.models.operations.PostLoginSampleSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostLoginSample req = new PostLoginSample() {{
                email = "aijaz@example.org";
                password = "hunter2";
                source = PostLoginSampleSourceEnum.ANDROID;
            }};            

            PostLoginResponse res = sdk.authentication.postLogin(req);

            if (res.loginResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLogout

Log out by deleting your token off the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLogoutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    tokenHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostLogoutResponse res = sdk.authentication.postLogout();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
