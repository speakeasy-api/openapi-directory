<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AppDgetRequest{
        PathParams: operations.AppDgetPathParams{
            AppDID: "ut",
        },
        QueryParams: operations.AppDgetQueryParams{
            AllFields: "sit",
            ExcludeDefault: "accusamus",
            ExcludeFields: "beatae",
            Fields: "rerum",
            Filter: "aspernatur",
        },
    }
    
    res, err := s.AppPkgm.AppDget(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->