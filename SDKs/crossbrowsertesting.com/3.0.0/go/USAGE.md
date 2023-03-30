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
        Security: operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDPathParams{
            BaseVersionID: 548814,
            TargetScreenshotTestID: 592845,
            TargetVersionID: 715190,
        },
        QueryParams: operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDQueryParams{
            Callback: "quibusdam",
            Format: "unde",
            Tolerance: 8579.46,
        },
    }

    ctx := context.Background()
    res, err := s.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleComparisonTests != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->