<!-- Start SDK Example Usage -->
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
    res, err := s.Query(ctx, operations.QueryRequest{
        Shape: operations.QueryShapeEnumArray,
        SQL: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Query200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->