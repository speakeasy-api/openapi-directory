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
    
    req := operations.StatusCallAPIV1StatusCallGetRequest{
        QueryParams: operations.StatusCallAPIV1StatusCallGetQueryParams{
            Query: "sit",
        },
    }
    
    res, err := s.StatusCallAPIV1StatusCallGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCall != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->