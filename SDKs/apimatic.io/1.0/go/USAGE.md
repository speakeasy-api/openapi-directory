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

    req := operations.ConvertAPIRequest{
        QueryParams: operations.ConvertAPIQueryParams{
            Format: "apiblueprint",
        },
        Request: &operations.ConvertAPIRequestBody{
            URL: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.ConvertAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->