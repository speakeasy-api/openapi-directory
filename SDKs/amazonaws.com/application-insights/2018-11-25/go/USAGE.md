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

    req := operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            AutoConfigEnabled: false,
            AutoCreate: false,
            CWEMonitorEnabled: false,
            GroupingType: "ACCOUNT_BASED",
            OpsCenterEnabled: false,
            OpsItemSNSTopicArn: "corrupti",
            ResourceGroupName: "provident",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quibusdam",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
            },
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "suscipit",
        XAmzDate: "iure",
        XAmzSecurityToken: "magnam",
        XAmzSignature: "debitis",
        XAmzSignedHeaders: "ipsa",
        XAmzTarget: "EC2WindowsBarleyService.CreateApplication",
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->