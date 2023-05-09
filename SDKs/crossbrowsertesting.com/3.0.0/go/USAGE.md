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
    res, err := s.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionID(ctx, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDRequest{
        BaseVersionID: 548814,
        Callback: sdk.String("provident"),
        Format: sdk.String("distinctio"),
        TargetScreenshotTestID: 844266,
        TargetVersionID: 602763,
        Tolerance: sdk.Float64(8579.46),
    }, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleComparisonTests != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->