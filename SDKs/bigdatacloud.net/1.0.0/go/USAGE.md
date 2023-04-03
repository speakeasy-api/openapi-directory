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

    req := operations.IPGeolocationWithConfidenceAreaAndHazardReportAPIRequest{
        IP: "193.114.112.122",
        Key: "{{API KEY}}",
        LocalityLanguage: "en",
    }

    ctx := context.Background()
    res, err := s.IPGeolocationWithConfidenceAreaAndHazardReportAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->