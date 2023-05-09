# delete

### Available Operations

* [keyRevoke](#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [keyRevokeNosecret](#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [signDelete](#signdelete) - delete a verification job

## keyRevoke

Revoke an Identity (Key) with a revocation secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyRevokeRequest;
import org.openapis.openapi.models.operations.KeyRevokeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyRevokeRequest req = new KeyRevokeRequest("distinctio", "quibusdam");            

            KeyRevokeResponse res = sdk.delete.keyRevoke(req);

            if (res.keyRevoke200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keyRevokeNosecret

Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyRevokeNosecretRequest;
import org.openapis.openapi.models.operations.KeyRevokeNosecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyRevokeNosecretRequest req = new KeyRevokeNosecretRequest("unde", "nulla") {{
                code = "corrupti";
            }};            

            KeyRevokeNosecretResponse res = sdk.delete.keyRevokeNosecret(req);

            if (res.keyRevokeNosecret200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signDelete

delete a verification job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignDeleteRequest;
import org.openapis.openapi.models.operations.SignDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignDeleteRequest req = new SignDeleteRequest("illum");            

            SignDeleteResponse res = sdk.delete.signDelete(req);

            if (res.signDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
