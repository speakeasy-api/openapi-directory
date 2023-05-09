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
    res, err := s.GetV1(ctx, operations.GetV1Request{
        APIKey: "corrupti",
        Fields: sdk.String("country,city,timezone"),
        IPAddress: sdk.String("195.154.25.40"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->