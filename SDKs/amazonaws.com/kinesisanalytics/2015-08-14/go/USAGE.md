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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
        },
        Request: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "nihil",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "fuga",
                RoleARN: "facilis",
            },
            CurrentApplicationVersionID: 384382,
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