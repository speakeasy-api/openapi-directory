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
    
    req := operations.ConfigConfigGetRequest{
        Headers: operations.ConfigConfigGetHeaders{
            Authorization: "sit",
        },
    }
    
    res, err := s.ConfigConfigGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Config != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->