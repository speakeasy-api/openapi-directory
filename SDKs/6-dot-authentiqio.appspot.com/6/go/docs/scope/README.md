# Scope

### Available Operations

* [SignConfirm](#signconfirm) - this is a scope confirmation
* [SignDelete](#signdelete) - delete a verification job
* [SignRequest](#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [SignRetrieve](#signretrieve) - get the status / current content of a verification job
* [SignRetrieveHead](#signretrievehead) - HEAD to get the status of a verification job
* [SignUpdate](#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


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
    res, err := s.Scope.SignConfirm(ctx, operations.SignConfirmRequest{
        Job: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignConfirm202ApplicationJSONObject != nil {
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
    res, err := s.Scope.SignDelete(ctx, operations.SignDeleteRequest{
        Job: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignDelete200ApplicationJSONObject != nil {
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
    res, err := s.Scope.SignRequest(ctx, operations.SignRequestRequest{
        RequestBody: []byte("hic"),
        Test: sdk.Int64(902599),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignRequest201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SignRetrieve

get the status / current content of a verification job

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
    res, err := s.Scope.SignRetrieve(ctx, operations.SignRetrieveRequest{
        Job: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Jwt != nil {
        // handle response
    }
}
```

## SignRetrieveHead

HEAD to get the status of a verification job

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
    res, err := s.Scope.SignRetrieveHead(ctx, operations.SignRetrieveHeadRequest{
        Job: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Scope.SignUpdate(ctx, operations.SignUpdateRequest{
        Job: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
