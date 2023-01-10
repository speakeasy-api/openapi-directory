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
            XAmzAlgorithm: "quia",
            XAmzContentSha256: "earum",
            XAmzCredential: "a",
            XAmzDate: "alias",
            XAmzSecurityToken: "culpa",
            XAmzSignature: "rerum",
            XAmzSignedHeaders: "maxime",
            XAmzTarget: "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
        },
        Request: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "omnis",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "eos",
                RoleARN: "iusto",
            },
            CurrentApplicationVersionID: 8230610447774493355,
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