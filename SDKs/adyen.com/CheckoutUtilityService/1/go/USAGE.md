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
    
    req := operations.PostOriginKeysRequest{
        Request: "iste",
    }
    
    res, err := s.PostOriginKeys(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutUtilityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->