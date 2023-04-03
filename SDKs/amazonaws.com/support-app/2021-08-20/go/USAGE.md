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

    req := operations.CreateSlackChannelConfigurationRequest{
        RequestBody: operations.CreateSlackChannelConfigurationRequestBody{
            ChannelID: "corrupti",
            ChannelName: "provident",
            ChannelRoleArn: "distinctio",
            NotifyOnAddCorrespondenceToCase: false,
            NotifyOnCaseSeverity: "high",
            NotifyOnCreateOrReopenCase: false,
            NotifyOnResolveCase: false,
            TeamID: "unde",
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateSlackChannelConfiguration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSlackChannelConfigurationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->