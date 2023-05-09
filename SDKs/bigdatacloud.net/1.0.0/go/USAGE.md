<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.IPGeolocationWithConfidenceAreaAndHazardReportAPI(ctx, operations.IPGeolocationWithConfidenceAreaAndHazardReportAPIRequest{
        IP: sdk.String("193.114.112.122"),
        Key: sdk.String("{{API KEY}}"),
        LocalityLanguage: sdk.String("en"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->