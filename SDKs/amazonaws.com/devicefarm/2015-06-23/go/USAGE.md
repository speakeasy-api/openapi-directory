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

    req := operations.CreateDevicePoolRequest{
        Headers: operations.CreateDevicePoolHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
        },
        Request: shared.CreateDevicePoolRequest{
            Description: "illum",
            MaxDevices: 423655,
            Name: "error",
            ProjectArn: "deserunt",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "REMOTE_DEBUG_ENABLED",
                    Operator: "LESS_THAN_OR_EQUALS",
                    Value: "debitis",
                },
                shared.Rule{
                    Attribute: "ARN",
                    Operator: "CONTAINS",
                    Value: "tempora",
                },
            },
        },
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