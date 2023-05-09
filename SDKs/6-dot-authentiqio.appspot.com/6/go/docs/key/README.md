# Key

### Available Operations

* [HeadKeyPK](#headkeypk) - HEAD info on Authentiq ID

* [KeyBind](#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [KeyRegister](#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [KeyRetrieve](#keyretrieve) - Get public details of an Authentiq ID.

* [KeyRevoke](#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [KeyRevokeNosecret](#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [KeyUpdate](#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


## HeadKeyPK

HEAD info on Authentiq ID


### Example Usage

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
    res, err := s.Key.HeadKeyPK(ctx, operations.HeadKeyPKRequest{
        Pk: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## KeyBind

Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Key.KeyBind(ctx, operations.KeyBindRequest{
        Pk: "deserunt",
        RequestBody: []byte("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyBind200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## KeyRegister

Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Key.KeyRegister(ctx, []byte("ipsam"))
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRegister201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## KeyRetrieve

Get public details of an Authentiq ID.


### Example Usage

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
    res, err := s.Key.KeyRetrieve(ctx, operations.KeyRetrieveRequest{
        Pk: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Jwt != nil {
        // handle response
    }
}
```

## KeyRevoke

Revoke an Identity (Key) with a revocation secret

### Example Usage

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
    res, err := s.Key.KeyRevoke(ctx, operations.KeyRevokeRequest{
        Pk: "sapiente",
        Secret: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevoke200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## KeyRevokeNosecret

Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.


### Example Usage

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
    res, err := s.Key.KeyRevokeNosecret(ctx, operations.KeyRevokeNosecretRequest{
        Code: sdk.String("odit"),
        Email: "Sarah_Wolff@hotmail.com",
        Phone: "557-717-6515 x97514",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevokeNosecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## KeyUpdate

update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Key.KeyUpdate(ctx, operations.KeyUpdateRequest{
        Pk: "molestiae",
        RequestBody: []byte("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
