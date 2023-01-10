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
    
    req := operations.RegistryCreateAPIRequest{
        PathParams: operations.RegistryCreateAPIPathParams{
            Project: "rerum",
        },
        QueryParams: operations.RegistryCreateAPIQueryParams{
            APIID: "nobis",
        },
        Request: "nemo",
    }
    
    res, err := s.RegistryCreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->