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

    req := operations.DeleteBinIDRequest{
        PathParams: operations.DeleteBinIDPathParams{
            ID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteBinID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->