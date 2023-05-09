# sdkKeys

## Overview

With these endpoints you can manage your SDK Keys.

### Available Operations

* [getSDKKeys](#getsdkkeys) - Get SDK Key

## getSDKKeys

This endpoint returns the SDK Key for your Config in a specified Environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSDKKeysRequest;
import org.openapis.openapi.models.operations.GetSDKKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSDKKeysRequest req = new GetSDKKeysRequest("fa9c95f2-eac5-4565-9307-cfee81206e28", "13fa4a41-c480-4d3f-a132-af03102d514f");            

            GetSDKKeysResponse res = sdk.sdkKeys.getSDKKeys(req);

            if (res.sdkKeysModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
