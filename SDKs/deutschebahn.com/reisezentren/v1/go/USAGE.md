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
    res, err := s.GetReisezentren(ctx, operations.GetReisezentrenRequest{
        Name: sdk.String("Terrence Rau"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TravelCenterList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->