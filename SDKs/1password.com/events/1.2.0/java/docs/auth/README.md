# auth

### Available Operations

* [~~getAuthIntrospect~~](#getauthintrospect) - Performs introspection of the provided Bearer JWT token :warning: **Deprecated**
* [getAuthIntrospectV2](#getauthintrospectv2) - Performs introspection of the provided Bearer JWT token

## ~~getAuthIntrospect~~

Performs introspection of the provided Bearer JWT token

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthIntrospectResponse;
import org.openapis.openapi.models.operations.GetAuthIntrospectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthIntrospectResponse res = sdk.auth.getAuthIntrospect(new GetAuthIntrospectSecurity("iure") {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.introspection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthIntrospectV2

Performs introspection of the provided Bearer JWT token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthIntrospectV2Response;
import org.openapis.openapi.models.operations.GetAuthIntrospectV2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthIntrospectV2Response res = sdk.auth.getAuthIntrospectV2(new GetAuthIntrospectV2Security("magnam") {{
                jwtsa = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.introspectionV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
