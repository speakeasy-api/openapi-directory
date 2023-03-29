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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateSlackChannelConfigurationRequestBody{
            ChannelID: "nulla",
            ChannelName: "nihil",
            ChannelRoleArn: "fuga",
            NotifyOnAddCorrespondenceToCase: false,
            NotifyOnCaseSeverity: "all",
            NotifyOnCreateOrReopenCase: false,
            NotifyOnResolveCase: false,
            TeamID: "eum",
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