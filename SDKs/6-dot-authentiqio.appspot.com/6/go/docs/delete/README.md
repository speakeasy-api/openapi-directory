# Delete

### Available Operations

* [KeyRevoke](#keyrevoke) - Revoke an Identity (Key) with a revocation secret
* [KeyRevokeNosecret](#keyrevokenosecret) - Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.

* [SignDelete](#signdelete) - delete a verification job

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
    res, err := s.Delete.KeyRevoke(ctx, operations.KeyRevokeRequest{
        Pk: "distinctio",
        Secret: "quibusdam",
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
    res, err := s.Delete.KeyRevokeNosecret(ctx, operations.KeyRevokeNosecretRequest{
        Code: sdk.String("unde"),
        Email: "Karley_Stamm@hotmail.com",
        Phone: "1-542-909-2347 x8545",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevokeNosecret200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SignDelete

delete a verification job

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
    res, err := s.Delete.SignDelete(ctx, operations.SignDeleteRequest{
        Job: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```
