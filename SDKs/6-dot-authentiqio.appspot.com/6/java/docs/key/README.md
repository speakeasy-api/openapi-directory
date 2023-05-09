# key

### Available Operations

* [headKeyPK](#headkeypk) - HEAD info on Authentiq ID

* [keyBind](#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyRegister](#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyRetrieve](#keyretrieve) - Get public details of an Authentiq ID.

* [keyRevoke](#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [keyRevokeNosecret](#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [keyUpdate](#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


## headKeyPK

HEAD info on Authentiq ID


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadKeyPKRequest;
import org.openapis.openapi.models.operations.HeadKeyPKResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadKeyPKRequest req = new HeadKeyPKRequest("iure");            

            HeadKeyPKResponse res = sdk.key.headKeyPK(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            KeyBindRequest req = new KeyBindRequest("magnam", "debitis".getBytes());            

            KeyBindResponse res = sdk.key.keyBind(req);

            if (res.keyBind200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            org.openapis.openapi.models.. req = "ipsa".getBytes()            

            KeyRegisterResponse res = sdk.key.keyRegister(req);

            if (res.keyRegister201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keyRetrieve

Get public details of an Authentiq ID.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyRetrieveRequest;
import org.openapis.openapi.models.operations.KeyRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyRetrieveRequest req = new KeyRetrieveRequest("delectus");            

            KeyRetrieveResponse res = sdk.key.keyRetrieve(req);

            if (res.jwt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            KeyRevokeRequest req = new KeyRevokeRequest("tempora", "suscipit");            

            KeyRevokeResponse res = sdk.key.keyRevoke(req);

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

            KeyRevokeNosecretRequest req = new KeyRevokeNosecretRequest("molestiae", "minus") {{
                code = "placeat";
            }};            

            KeyRevokeNosecretResponse res = sdk.key.keyRevokeNosecret(req);

            if (res.keyRevokeNosecret200ApplicationJSONObject != null) {
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

            KeyUpdateRequest req = new KeyUpdateRequest("voluptatum", "iusto".getBytes());            

            KeyUpdateResponse res = sdk.key.keyUpdate(req);

            if (res.keyUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
