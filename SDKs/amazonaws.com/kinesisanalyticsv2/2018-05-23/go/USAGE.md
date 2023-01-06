<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AddApplicationCloudWatchLoggingOptionRequest{
        Headers: operations.AddApplicationCloudWatchLoggingOptionHeaders{
            XAmzAlgorithm: "corporis",
            XAmzContentSha256: "accusamus",
            XAmzCredential: "fugit",
            XAmzDate: "qui",
            XAmzSecurityToken: "vel",
            XAmzSignature: "veniam",
            XAmzSignedHeaders: "quidem",
            XAmzTarget: "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
        },
        Request: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "nemo",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "cumque",
            },
            ConditionalToken: "ipsam",
            CurrentApplicationVersionID: 8368034457782691777,
        },
    }
    
    res, err := s.AddApplicationCloudWatchLoggingOption(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationCloudWatchLoggingOptionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->