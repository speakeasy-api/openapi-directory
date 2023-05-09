# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/6-dot-authentiqio.appspot.com/6/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Delete.KeyRevoke(ctx, operations.KeyRevokeRequest{
        Pk: "corrupti",
        Secret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevoke200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Delete](docs/delete/README.md)

* [KeyRevoke](docs/delete/README.md#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [KeyRevokeNosecret](docs/delete/README.md#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [SignDelete](docs/delete/README.md#signdelete) - delete a verification job

### [Get](docs/get/README.md)

* [KeyRetrieve](docs/get/README.md#keyretrieve) - Get public details of an Authentiq ID.

* [SignRetrieve](docs/get/README.md#signretrieve) - get the status / current content of a verification job

### [Head](docs/head/README.md)

* [HeadKeyPK](docs/head/README.md#headkeypk) - HEAD info on Authentiq ID

* [SignRetrieveHead](docs/head/README.md#signretrievehead) - HEAD to get the status of a verification job

### [Key](docs/key/README.md)

* [HeadKeyPK](docs/key/README.md#headkeypk) - HEAD info on Authentiq ID

* [KeyBind](docs/key/README.md#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [KeyRegister](docs/key/README.md#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [KeyRetrieve](docs/key/README.md#keyretrieve) - Get public details of an Authentiq ID.

* [KeyRevoke](docs/key/README.md#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [KeyRevokeNosecret](docs/key/README.md#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [KeyUpdate](docs/key/README.md#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [Login](docs/login/README.md)

* [PushLoginRequest](docs/login/README.md#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [Post](docs/post/README.md)

* [KeyRegister](docs/post/README.md#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [KeyUpdate](docs/post/README.md#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [PushLoginRequest](docs/post/README.md#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [SignConfirm](docs/post/README.md#signconfirm) - this is a scope confirmation
* [SignRequest](docs/post/README.md#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [Put](docs/put/README.md)

* [KeyBind](docs/put/README.md#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [SignUpdate](docs/put/README.md#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### [Scope](docs/scope/README.md)

* [SignConfirm](docs/scope/README.md#signconfirm) - this is a scope confirmation
* [SignDelete](docs/scope/README.md#signdelete) - delete a verification job
* [SignRequest](docs/scope/README.md#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [SignRetrieve](docs/scope/README.md#signretrieve) - get the status / current content of a verification job
* [SignRetrieveHead](docs/scope/README.md#signretrievehead) - HEAD to get the status of a verification job
* [SignUpdate](docs/scope/README.md#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
