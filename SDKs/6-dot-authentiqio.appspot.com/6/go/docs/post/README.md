# Post

### Available Operations

* [KeyRegister](#keyregister) - Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [KeyUpdate](#keyupdate) - update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [PushLoginRequest](#pushloginrequest) - push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [SignConfirm](#signconfirm) - this is a scope confirmation
* [SignRequest](#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


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
    res, err := s.Post.KeyRegister(ctx, []byte("cum"))
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRegister201ApplicationJSONObject != nil {
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
    res, err := s.Post.KeyUpdate(ctx, operations.KeyUpdateRequest{
        Pk: "esse",
        RequestBody: []byte("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PushLoginRequest

push sign-in request
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
    res, err := s.Post.PushLoginRequest(ctx, operations.PushLoginRequestRequest{
        RequestBody: []byte("excepturi"),
        Callback: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PushLoginRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SignConfirm

this is a scope confirmation

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
    res, err := s.Post.SignConfirm(ctx, operations.SignConfirmRequest{
        Job: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignConfirm202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SignRequest

scope verification request
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
    res, err := s.Post.SignRequest(ctx, operations.SignRequestRequest{
        RequestBody: []byte("ad"),
        Test: sdk.Int64(617636),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignRequest201ApplicationJSONObject != nil {
        // handle response
    }
}
```
