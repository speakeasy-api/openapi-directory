# me

## Overview

Information about the current user.

### Available Operations

* [getMe](#getme) - Get authenticated user details

## getMe

Get authenticated user details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "eveniet") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetMeResponse res = sdk.me.getMe();

            if (res.meModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
