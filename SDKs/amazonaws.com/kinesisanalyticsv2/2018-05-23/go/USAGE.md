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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
        },
        Request: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "fugit",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "et",
            },
            ConditionalToken: "nihil",
            CurrentApplicationVersionID: 8325060299420976708,
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