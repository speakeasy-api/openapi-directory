# user

## Overview

user-specific methods

### Available Operations

* [getUserExtensions](#getuserextensions) - Get User Extensions

## getUserExtensions

This endpoint allows you to get list of your extensions including extensions from the watchlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserExtensionsResponse;
import org.openapis.openapi.models.operations.GetUserExtensionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserExtensionsResponse res = sdk.user.getUserExtensions(new GetUserExtensionsSecurity("provident") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.extensions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
