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

    req := operations.DeleteAPIV1ClipsIDRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.DeleteAPIV1ClipsID(ctx, req, operations.DeleteAPIV1ClipsIDSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->