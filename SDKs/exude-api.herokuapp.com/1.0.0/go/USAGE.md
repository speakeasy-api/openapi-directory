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
    
    req := operations.FilterFileDataStoppingsRequest{
        PathParams: operations.FilterFileDataStoppingsPathParams{
            Type: "quae",
        },
        Request: operations.FilterFileDataStoppingsRequestBody{
            File: &operations.FilterFileDataStoppingsRequestBodyFile{
                Content: []byte("minima"),
                File: "eaque",
            },
        },
    }
    
    res, err := s.Exude.FilterFileDataStoppings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ExudeResponseBean != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->