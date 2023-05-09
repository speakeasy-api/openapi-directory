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
    res, err := s.Administration.DeleteClientsIDClient(ctx, operations.DeleteClientsIDClientRequest{
        Expand: sdk.String("corrupti"),
        IDClient: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->