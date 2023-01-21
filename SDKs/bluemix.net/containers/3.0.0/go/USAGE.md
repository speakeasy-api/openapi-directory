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
    
    req := operations.GetContainersMessagesRequest{
        Headers: operations.GetContainersMessagesHeaders{
            XAuthProjectID: "sit",
            XAuthToken: "voluptas",
        },
    }
    
    res, err := s.APIInfo.GetContainersMessages(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainersMessages200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->