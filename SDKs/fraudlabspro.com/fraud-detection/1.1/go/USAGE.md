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

    req := operations.PostV1OrderFeedbackRequest{
        Action: "REJECT",
        Format: "xml",
        ID: "distinctio",
        Key: "quibusdam",
        Notes: "unde",
    }

    ctx := context.Background()
    res, err := s.PostV1OrderFeedback(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1OrderFeedback200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->