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
    
    req := operations.GetV1Request{
        QueryParams: operations.GetV1QueryParams{
            APIKey: "sit",
            Fields: "voluptas",
            IPAddress: "culpa",
        },
    }
    
    res, err := s.GetV1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->