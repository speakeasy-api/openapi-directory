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

    req := operations.CreateSlackChannelConfigurationRequest{
        Headers: operations.CreateSlackChannelConfigurationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateSlackChannelConfigurationRequestBody{
            ChannelID: "illum",
            ChannelName: "vel",
            ChannelRoleArn: "error",
            NotifyOnAddCorrespondenceToCase: false,
            NotifyOnCaseSeverity: "all",
            NotifyOnCreateOrReopenCase: false,
            NotifyOnResolveCase: false,
            TeamID: "suscipit",
        },
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