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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddApplicationCloudWatchLoggingOptionRequest{
        Headers: operations.AddApplicationCloudWatchLoggingOptionHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
        },
        Request: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "illum",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "vel",
            },
            ConditionalToken: "error",
            CurrentApplicationVersionID: 645894,
        },
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