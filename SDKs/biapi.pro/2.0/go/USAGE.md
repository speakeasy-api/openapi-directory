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

    req := operations.DeleteClientsIDClientRequest{
        Expand: "corrupti",
        IDClient: 592845,
    }

    ctx := context.Background()
    res, err := s.Administration.DeleteClientsIDClient(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->