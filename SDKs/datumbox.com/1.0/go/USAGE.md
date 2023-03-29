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

    req := operations.AdultContentDetectionRequest{
        Request: &operations.AdultContentDetectionRequestBody{
            APIKey: "unde",
            Text: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.DocumentClassification.AdultContentDetection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->