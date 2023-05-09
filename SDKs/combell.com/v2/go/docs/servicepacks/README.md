# Servicepacks

### Available Operations

* [Servicepacks](#servicepacks) - Overview of service packs

## Servicepacks

Overview of service packs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Servicepacks.Servicepacks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Servicepacks != nil {
        // handle response
    }
}
```
