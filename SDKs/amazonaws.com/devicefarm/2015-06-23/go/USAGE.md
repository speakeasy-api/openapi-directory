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
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "suscipit",
            XAmzCredential: "magnam",
            XAmzDate: "aspernatur",
            XAmzSecurityToken: "corporis",
            XAmzSignature: "accusamus",
            XAmzSignedHeaders: "fugit",
            XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
        },
        Request: shared.CreateDevicePoolRequest{
            Description: "vel",
            MaxDevices: 9180143155615916123,
            Name: "quidem",
            ProjectArn: "et",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "APPIUM_VERSION",
                    Operator: "LESS_THAN_OR_EQUALS",
                    Value: "consequatur",
                },
                shared.Rule{
                    Attribute: "INSTANCE_LABELS",
                    Operator: "LESS_THAN_OR_EQUALS",
                    Value: "dolor",
                },
                shared.Rule{
                    Attribute: "FORM_FACTOR",
                    Operator: "GREATER_THAN_OR_EQUALS",
                    Value: "in",
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