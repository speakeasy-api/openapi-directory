# Get

### Available Operations

* [KeyRetrieve](#keyretrieve) - Get public details of an Authentiq ID.

* [SignRetrieve](#signretrieve) - get the status / current content of a verification job

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
    res, err := s.Get.KeyRetrieve(ctx, operations.KeyRetrieveRequest{
        Pk: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Jwt != nil {
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
    res, err := s.Get.SignRetrieve(ctx, operations.SignRetrieveRequest{
        Job: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Jwt != nil {
        // handle response
    }
}
```
