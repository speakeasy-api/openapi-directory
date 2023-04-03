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

    req := operations.CreateDevicePoolRequest{
        CreateDevicePoolRequest: shared.CreateDevicePoolRequest{
            Description: "corrupti",
            MaxDevices: 592845,
            Name: "distinctio",
            ProjectArn: "quibusdam",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "MODEL",
                    Operator: "GREATER_THAN_OR_EQUALS",
                    Value: "illum",
                },
                shared.Rule{
                    Attribute: "REMOTE_DEBUG_ENABLED",
                    Operator: "GREATER_THAN_OR_EQUALS",
                    Value: "deserunt",
                },
                shared.Rule{
                    Attribute: "REMOTE_ACCESS_ENABLED",
                    Operator: "GREATER_THAN",
                    Value: "magnam",
                },
            },
        },
        XAmzAlgorithm: "debitis",
        XAmzContentSha256: "ipsa",
        XAmzCredential: "delectus",
        XAmzDate: "tempora",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "molestiae",
        XAmzSignedHeaders: "minus",
        XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
    }

    ctx := context.Background()
    res, err := s.CreateDevicePool(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevicePoolResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->