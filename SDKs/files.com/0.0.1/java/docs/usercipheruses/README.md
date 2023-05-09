# userCipherUses

## Overview

Operations about user_cipher_uses

### Available Operations

* [getUserCipherUses](#getusercipheruses) - List User Cipher Uses

## getUserCipherUses

List User Cipher Uses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserCipherUsesRequest;
import org.openapis.openapi.models.operations.GetUserCipherUsesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserCipherUsesRequest req = new GetUserCipherUsesRequest() {{
                cursor = "distinctio";
                perPage = 608593;
                userId = 966390;
            }};            

            GetUserCipherUsesResponse res = sdk.userCipherUses.getUserCipherUses(req);

            if (res.userCipherUseEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
