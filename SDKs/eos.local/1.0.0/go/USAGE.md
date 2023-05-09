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
    res, err := s.Connect(ctx, operations.ConnectRequestBody{
        Endpoint: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connect200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->