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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DescribeReportCreationRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
        XAmzTarget: "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation",
    }

    ctx := context.Background()
    res, err := s.DescribeReportCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReportCreationOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->