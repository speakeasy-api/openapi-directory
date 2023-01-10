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
    
    req := operations.CreateDevicePoolRequest{
        Headers: operations.CreateDevicePoolHeaders{
            XAmzAlgorithm: "aperiam",
            XAmzContentSha256: "est",
            XAmzCredential: "ab",
            XAmzDate: "molestias",
            XAmzSecurityToken: "molestias",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "animi",
            XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
        },
        Request: shared.CreateDevicePoolRequest{
            Description: "nihil",
            MaxDevices: 5987901294680041728,
            Name: "hic",
            ProjectArn: "vitae",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "FLEET_TYPE",
                    Operator: "EQUALS",
                    Value: "pariatur",
                },
                shared.Rule{
                    Attribute: "INSTANCE_ARN",
                    Operator: "GREATER_THAN_OR_EQUALS",
                    Value: "architecto",
                },
                shared.Rule{
                    Attribute: "INSTANCE_LABELS",
                    Operator: "LESS_THAN",
                    Value: "rem",
                },
            },
        },
    }
    
    res, err := s.CreateDevicePool(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevicePoolResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->