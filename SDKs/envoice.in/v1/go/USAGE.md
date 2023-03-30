<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ClientAPIAllRequest{
        Headers: operations.ClientAPIAllHeaders{
            XAuthKey: "corrupti",
            XAuthSecret: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.Client.ClientAPIAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientDetailsAPIModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->