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
    
    req := operations.CreateAPIRequest{
        QueryParams: operations.CreateAPIQueryParams{
            Workspace: "eligendi",
        },
        Request: &operations.CreateAPIRequestBody{
            API: &operations.CreateAPIRequestBodyAPI{
                Description: "consequatur",
                Name: "quaerat",
                Summary: "et",
            },
        },
    }
    
    res, err := s.API.CreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPI200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->