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
    res, err := s.Client.ClientAPIAll(ctx, operations.ClientAPIAllRequest{
        XAuthKey: "corrupti",
        XAuthSecret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientDetailsAPIModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->