# CustomerGlobal

### Available Operations

* [GetCustomerIndex](#getcustomerindex) - The index of all operations and LOV

## GetCustomerIndex

The index of all operations and LOV

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
    res, err := s.CustomerGlobal.GetCustomerIndex(ctx, operations.GetCustomerIndexRequest{
        IfNoneMatch: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerIndex != nil {
        // handle response
    }
}
```
