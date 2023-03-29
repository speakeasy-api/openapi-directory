<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateAPIRequest{
        QueryParams: operations.CreateAPIQueryParams{
            Workspace: "{{workspaceId}}",
        },
        Request: &operations.CreateAPIRequestBody{
            API: &operations.CreateAPIRequestBodyAPI{
                Description: "This is description.",
                Name: "Sync Service API",
                Summary: "This is supposed to be a short summary.",
            },
        },
    }

    ctx := context.Background()
    res, err := s.API.CreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->