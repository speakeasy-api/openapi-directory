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

    req := operations.AppDGETRequest{
        PathParams: operations.AppDGETPathParams{
            AppDID: "unde",
        },
        QueryParams: operations.AppDGETQueryParams{
            AllFields: "deserunt",
            ExcludeDefault: "porro",
            ExcludeFields: "nulla",
            Fields: "id",
            Filter: "vero",
        },
    }

    ctx := context.Background()
    res, err := s.AppPkgm.AppDGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->