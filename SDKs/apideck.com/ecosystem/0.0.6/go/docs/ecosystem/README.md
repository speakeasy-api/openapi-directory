# Ecosystem

### Available Operations

* [EcosystemsOne](#ecosystemsone) - Get ecosystem

## EcosystemsOne

Get ecosystem

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
    res, err := s.Ecosystem.EcosystemsOne(ctx, operations.EcosystemsOneRequest{
        EcosystemID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcosystemResponse != nil {
        // handle response
    }
}
```
