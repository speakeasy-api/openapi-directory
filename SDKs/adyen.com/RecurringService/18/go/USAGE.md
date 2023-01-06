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
    
    req := operations.PostDisableRequest{
        Request: "commodi",
    }
    
    res, err := s.PostDisable(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->