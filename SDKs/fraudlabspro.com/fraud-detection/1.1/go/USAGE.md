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
    
    req := operations.PostV1OrderFeedbackRequest{
        QueryParams: operations.PostV1OrderFeedbackQueryParams{
            Action: "APPROVE",
            Format: "json",
            ID: "culpa",
            Key: "expedita",
            Notes: "consequuntur",
        },
    }
    
    res, err := s.PostV1OrderFeedback(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1OrderFeedback200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->