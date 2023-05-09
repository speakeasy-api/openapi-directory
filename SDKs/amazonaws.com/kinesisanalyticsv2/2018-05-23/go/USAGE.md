<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddApplicationCloudWatchLoggingOption(ctx, operations.AddApplicationCloudWatchLoggingOptionRequest{
        AddApplicationCloudWatchLoggingOptionRequest: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "corrupti",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "provident",
            },
            ConditionalToken: sdk.String("distinctio"),
            CurrentApplicationVersionID: sdk.Int64(844266),
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationCloudWatchLoggingOptionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->