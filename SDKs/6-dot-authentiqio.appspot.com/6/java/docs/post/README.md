# post

### Available Operations

* [keyRegister](#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyUpdate](#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [pushLoginRequest](#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signConfirm](#signconfirm) - this is a scope confirmation
* [signRequest](#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## keyRegister

Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyRegisterResponse;
import org.openapis.openapi.models.shared.AuthentiqID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "recusandae".getBytes()            

            KeyRegisterResponse res = sdk.post.keyRegister(req);

            if (res.keyRegister201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keyUpdate

update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyUpdateRequest;
import org.openapis.openapi.models.operations.KeyUpdateResponse;
import org.openapis.openapi.models.shared.AuthentiqID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyUpdateRequest req = new KeyUpdateRequest("temporibus", "ab".getBytes());            

            KeyUpdateResponse res = sdk.post.keyUpdate(req);

            if (res.keyUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pushLoginRequest

push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PushLoginRequestRequest;
import org.openapis.openapi.models.operations.PushLoginRequestResponse;
import org.openapis.openapi.models.shared.PushToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PushLoginRequestRequest req = new PushLoginRequestRequest("quis".getBytes(), "veritatis");            

            PushLoginRequestResponse res = sdk.post.pushLoginRequest(req);

            if (res.pushLoginRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signConfirm

this is a scope confirmation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignConfirmRequest;
import org.openapis.openapi.models.operations.SignConfirmResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignConfirmRequest req = new SignConfirmRequest("deserunt");            

            SignConfirmResponse res = sdk.post.signConfirm(req);

            if (res.signConfirm202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signRequest

scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignRequestRequest;
import org.openapis.openapi.models.operations.SignRequestResponse;
import org.openapis.openapi.models.shared.Claims;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignRequestRequest req = new SignRequestRequest("perferendis".getBytes()) {{
                test = 368241L;
            }};            

            SignRequestResponse res = sdk.post.signRequest(req);

            if (res.signRequest201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
