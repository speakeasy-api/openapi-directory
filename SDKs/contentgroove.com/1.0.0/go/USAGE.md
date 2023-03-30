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
        Security: operations.DeleteAPIV1ClipsIDSecurity{
            BearerHeader: shared.SchemeBearerHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteAPIV1ClipsIDPathParams{
            ID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteAPIV1ClipsID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->