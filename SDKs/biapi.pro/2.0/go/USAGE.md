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
        PathParams: operations.DeleteClientsIDClientPathParams{
            IDClient: 548814,
        },
        QueryParams: operations.DeleteClientsIDClientQueryParams{
            Expand: "deserunt",
        },
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