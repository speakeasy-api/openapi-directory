<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateSlackChannelConfiguration(ctx, operations.CreateSlackChannelConfigurationRequest{
        RequestBody: operations.CreateSlackChannelConfigurationRequestBody{
            ChannelID: "corrupti",
            ChannelName: sdk.String("provident"),
            ChannelRoleArn: "distinctio",
            NotifyOnAddCorrespondenceToCase: sdk.Bool(false),
            NotifyOnCaseSeverity: operations.CreateSlackChannelConfigurationRequestBodyNotifyOnCaseSeverityEnumHigh,
            NotifyOnCreateOrReopenCase: sdk.Bool(false),
            NotifyOnResolveCase: sdk.Bool(false),
            TeamID: "unde",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSlackChannelConfigurationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->