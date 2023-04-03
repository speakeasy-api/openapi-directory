# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### delete

* `keyRevoke` - Revoke an Identity (Key) with a revocation secret
* `keyRevokeNosecret` - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* `signDelete` - delete a verification job

### get

* `keyRetrieve` - Get public details of an Authentiq ID.

* `signRetrieve` - get the status / current content of a verification job

### head

* `headKeyPK` - HEAD info on Authentiq ID

* `signRetrieveHead` - HEAD to get the status of a verification job

### key

* `headKeyPK` - HEAD info on Authentiq ID

* `keyBind` - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `keyRegister` - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `keyRetrieve` - Get public details of an Authentiq ID.

* `keyRevoke` - Revoke an Identity (Key) with a revocation secret
* `keyRevokeNosecret` - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* `keyUpdate` - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### login

* `pushLoginRequest` - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### post

* `keyRegister` - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `keyUpdate` - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `pushLoginRequest` - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `signConfirm` - this is a scope confirmation
* `signRequest` - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### put

* `keyBind` - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `signUpdate` - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### scope

* `signConfirm` - this is a scope confirmation
* `signDelete` - delete a verification job
* `signRequest` - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* `signRetrieve` - get the status / current content of a verification job
* `signRetrieveHead` - HEAD to get the status of a verification job
* `signUpdate` - authority updates a JWT with its signature
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
