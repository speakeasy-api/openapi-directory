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
    res, err := s.APIResources.APIResourceCoverageOne(ctx, operations.APIResourceCoverageOneRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        ResourceID: "deserunt",
        XApideckAppID: "perferendis",
    }, operations.APIResourceCoverageOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->