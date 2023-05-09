# Head

### Available Operations

* [HeadKeyPK](#headkeypk) - HEAD info on Authentiq ID

* [SignRetrieveHead](#signretrievehead) - HEAD to get the status of a verification job

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
    res, err := s.Head.HeadKeyPK(ctx, operations.HeadKeyPKRequest{
        Pk: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Head.SignRetrieveHead(ctx, operations.SignRetrieveHeadRequest{
        Job: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
