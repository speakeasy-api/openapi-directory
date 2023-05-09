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
    res, err := s.Delete.KeyRevoke(ctx, operations.KeyRevokeRequest{
        Pk: "corrupti",
        Secret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevoke200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->