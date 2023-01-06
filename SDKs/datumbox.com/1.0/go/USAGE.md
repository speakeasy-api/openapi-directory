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
    
    req := operations.AdultContentDetectionRequest{
        Request: &operations.AdultContentDetectionRequestBody{
            APIKey: "dolorem",
            Text: "saepe",
        },
    }
    
    res, err := s.DocumentClassification.AdultContentDetection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->