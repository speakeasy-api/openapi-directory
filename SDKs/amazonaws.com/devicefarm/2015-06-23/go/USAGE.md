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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
        },
        Request: shared.CreateDevicePoolRequest{
            Description: "nihil",
            MaxDevices: 623564,
            Name: "facilis",
            ProjectArn: "eum",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "MANUFACTURER",
                    Operator: "CONTAINS",
                    Value: "inventore",
                },
                shared.Rule{
                    Attribute: "AVAILABILITY",
                    Operator: "LESS_THAN_OR_EQUALS",
                    Value: "eum",
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