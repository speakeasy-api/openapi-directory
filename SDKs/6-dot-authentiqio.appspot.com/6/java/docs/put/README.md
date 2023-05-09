# put

### Available Operations

* [keyBind](#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signUpdate](#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## keyBind

Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyBindRequest;
import org.openapis.openapi.models.operations.KeyBindResponse;
import org.openapis.openapi.models.shared.AuthentiqID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyBindRequest req = new KeyBindRequest("repellendus", "sapiente".getBytes());            

            KeyBindResponse res = sdk.put.keyBind(req);

            if (res.keyBind200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signUpdate

authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignUpdateRequest;
import org.openapis.openapi.models.operations.SignUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignUpdateRequest req = new SignUpdateRequest("quo");            

            SignUpdateResponse res = sdk.put.signUpdate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
