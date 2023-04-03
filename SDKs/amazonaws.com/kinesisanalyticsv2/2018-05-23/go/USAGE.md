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

    req := operations.AddApplicationCloudWatchLoggingOptionRequest{
        AddApplicationCloudWatchLoggingOptionRequest: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "corrupti",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "provident",
            },
            ConditionalToken: "distinctio",
            CurrentApplicationVersionID: 844266,
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
    }

    ctx := context.Background()
    res, err := s.AddApplicationCloudWatchLoggingOption(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationCloudWatchLoggingOptionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->