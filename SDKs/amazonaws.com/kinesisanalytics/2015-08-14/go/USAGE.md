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
            XAmzAlgorithm: "molestias",
            XAmzContentSha256: "asperiores",
            XAmzCredential: "suscipit",
            XAmzDate: "nam",
            XAmzSecurityToken: "ducimus",
            XAmzSignature: "ullam",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
        },
        Request: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "omnis",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "suscipit",
                RoleARN: "magnam",
            },
            CurrentApplicationVersionID: 2074335382148546383,
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