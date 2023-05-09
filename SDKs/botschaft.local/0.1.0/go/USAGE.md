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
    res, err := s.ConfigConfigGet(ctx, operations.ConfigConfigGetRequest{
        Authorization: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Config != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->