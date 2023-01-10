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
    
    req := operations.GetSearchV1FieldsRequest{
        QueryParams: operations.GetSearchV1FieldsQueryParams{
            Callback: "officia",
        },
    }
    
    res, err := s.GetSearchV1Fields(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->