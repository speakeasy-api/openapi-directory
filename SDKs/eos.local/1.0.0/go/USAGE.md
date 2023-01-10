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
    
    req := operations.ConnectRequest{
        Request: &operations.ConnectRequestBody{
            Endpoint: "iste",
        },
    }
    
    res, err := s.Connect(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Connect200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->