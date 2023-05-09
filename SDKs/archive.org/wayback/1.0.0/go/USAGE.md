<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetWaybackV1Available(ctx, operations.GetWaybackV1AvailableRequest{
        Callback: sdk.String("corrupti"),
        Closest: shared.ClosestEnumBefore.ToPointer(),
        StatusCode: shared.StatusCodeEnumFourHundredAndTwentyOne.ToPointer(),
        Tag: sdk.String("quibusdam"),
        Timeout: sdk.Float64(6027.63),
        Timestamp: sdk.String("nulla"),
        URL: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->