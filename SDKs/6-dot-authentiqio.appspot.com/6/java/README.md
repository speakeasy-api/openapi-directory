# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            KeyRevokeRequest req = new KeyRevokeRequest("corrupti", "provident");            

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [delete](docs/delete/README.md)

* [keyRevoke](docs/delete/README.md#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [keyRevokeNosecret](docs/delete/README.md#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [signDelete](docs/delete/README.md#signdelete) - delete a verification job

### [get](docs/get/README.md)

* [keyRetrieve](docs/get/README.md#keyretrieve) - Get public details of an Authentiq ID.

* [signRetrieve](docs/get/README.md#signretrieve) - get the status / current content of a verification job

### [head](docs/head/README.md)

* [headKeyPK](docs/head/README.md#headkeypk) - HEAD info on Authentiq ID

* [signRetrieveHead](docs/head/README.md#signretrievehead) - HEAD to get the status of a verification job

### [key](docs/key/README.md)

* [headKeyPK](docs/key/README.md#headkeypk) - HEAD info on Authentiq ID

* [keyBind](docs/key/README.md#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyRegister](docs/key/README.md#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyRetrieve](docs/key/README.md#keyretrieve) - Get public details of an Authentiq ID.

* [keyRevoke](docs/key/README.md#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [keyRevokeNosecret](docs/key/README.md#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [keyUpdate](docs/key/README.md#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [login](docs/login/README.md)

* [pushLoginRequest](docs/login/README.md#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [post](docs/post/README.md)

* [keyRegister](docs/post/README.md#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [keyUpdate](docs/post/README.md#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [pushLoginRequest](docs/post/README.md#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signConfirm](docs/post/README.md#signconfirm) - this is a scope confirmation
* [signRequest](docs/post/README.md#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [put](docs/put/README.md)

* [keyBind](docs/put/README.md#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signUpdate](docs/put/README.md#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [scope](docs/scope/README.md)

* [signConfirm](docs/scope/README.md#signconfirm) - this is a scope confirmation
* [signDelete](docs/scope/README.md#signdelete) - delete a verification job
* [signRequest](docs/scope/README.md#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signRetrieve](docs/scope/README.md#signretrieve) - get the status / current content of a verification job
* [signRetrieveHead](docs/scope/README.md#signretrievehead) - HEAD to get the status of a verification job
* [signUpdate](docs/scope/README.md#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
