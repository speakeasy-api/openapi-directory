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

    req := operations.GetChildrenRequest{
        PathParams: operations.GetChildrenPathParams{
            Count: 548814,
            Cursor: "provident",
            Sha1: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.Default.GetChildren(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->