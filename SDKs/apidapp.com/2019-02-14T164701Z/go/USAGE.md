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
    
    req := operations.DeleteKeyKeyRequest{
        PathParams: operations.DeleteKeyKeyPathParams{
            Key: "nulla",
        },
    }
    
    res, err := s.DeleteKeyKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->