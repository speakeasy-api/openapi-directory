# Put

### Available Operations

* [KeyBind](#keybind) - Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [SignUpdate](#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


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
    res, err := s.Put.KeyBind(ctx, operations.KeyBindRequest{
        Pk: "sed",
        RequestBody: []byte("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyBind200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SignUpdate

authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


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
    res, err := s.Put.SignUpdate(ctx, operations.SignUpdateRequest{
        Job: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
