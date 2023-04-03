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

    req := operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDRequest{
        BaseVersionID: 548814,
        Callback: "provident",
        Format: "distinctio",
        TargetScreenshotTestID: 844266,
        TargetVersionID: 602763,
        Tolerance: 8579.46,
    }

    ctx := context.Background()
    res, err := s.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionID(ctx, req, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDSecurity{
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