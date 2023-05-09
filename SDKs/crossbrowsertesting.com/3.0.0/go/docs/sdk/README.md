# SDK

## Overview

What's in this version: 
 1. Compare two screenshots for layout differences 
 2. Compare a full screenshot test of browsers to a single baseline browser for layout differences. 
 3. Compare a screenshot test version to another test version - good for regression tests. 
 4. Get links to the Comparison UI for visual representation of layout differences

### Available Operations

* [GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionID](#getscreenshotstargetscreenshottestidtargetversionidcomparisonparallelbaseversionid) - Compare Screenshot Test Versions
* [GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonBaseResultID](#getscreenshotstargetscreenshottestidtargetversionidcomparisonbaseresultid) - Compare Full Screenshot Test
* [GetScreenshotsTargetScreenshotTestIDTargetVersionIDTargetResultIDComparisonBaseResultID](#getscreenshotstargetscreenshottestidtargetversionidtargetresultidcomparisonbaseresultid) - Compare Single Screenshot

## GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionID

Get comparison results for all browsers in target screenshot test against the same browser in the base screenshot test. This is a good method for regression testing. For example, you've run a screenshot test against a set of browsers that is "good". Then, after some changes, you run a new screenshot test against the same set of browsers. This method will compare each of the same browsers against each other. For example, IE9 will be compared to IE9 from an earlier test. This is a many-to-many comparison where the OS/Browser/Resolution must match between the two test versions in order for the comparison to return results. The two versions can be from the same screenshot_test_id or not.

### Example Usage

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
    res, err := s.SDK.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionID(ctx, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonParallelBaseVersionIDRequest{
        BaseVersionID: 544883,
        Callback: sdk.String("illum"),
        Format: sdk.String("vel"),
        TargetScreenshotTestID: 623564,
        TargetVersionID: 645894,
        Tolerance: sdk.Float64(3843.82),
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

## GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonBaseResultID

Get comparison results for all browsers in target screenshot test against a base screenshot result. The base result can be from the same test or from another test run at an earlier time. This is a one-to-many comparison.

### Example Usage

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
    res, err := s.SDK.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonBaseResultID(ctx, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonBaseResultIDRequest{
        BaseResultID: 437587,
        Callback: sdk.String("magnam"),
        Format: sdk.String("debitis"),
        TargetScreenshotTestID: 56713,
        TargetVersionID: 963663,
        Tolerance: sdk.Float64(2726.56),
    }, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDComparisonBaseResultIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullComparisonTest != nil {
        // handle response
    }
}
```

## GetScreenshotsTargetScreenshotTestIDTargetVersionIDTargetResultIDComparisonBaseResultID

Get comparison results for a single target screenshot result against a base screenshot result. This is a one-to-one comparison.

### Example Usage

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
    res, err := s.SDK.GetScreenshotsTargetScreenshotTestIDTargetVersionIDTargetResultIDComparisonBaseResultID(ctx, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDTargetResultIDComparisonBaseResultIDRequest{
        BaseResultID: 383441,
        Callback: sdk.String("molestiae"),
        Format: sdk.String("minus"),
        TargetResultID: 812169,
        TargetScreenshotTestID: 528895,
        TargetVersionID: 479977,
        Tolerance: sdk.Float64(5680.45),
    }, operations.GetScreenshotsTargetScreenshotTestIDTargetVersionIDTargetResultIDComparisonBaseResultIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleComparisonTest != nil {
        // handle response
    }
}
```
