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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
        },
        Request: shared.CreateDevicePoolRequest{
            Description: "fugit",
            MaxDevices: 1543572285742637646,
            Name: "nihil",
            ProjectArn: "rerum",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "REMOTE_ACCESS_ENABLED",
                    Operator: "EQUALS",
                    Value: "et",
                },
                shared.Rule{
                    Attribute: "ARN",
                    Operator: "LESS_THAN_OR_EQUALS",
                    Value: "et",
                },
                shared.Rule{
                    Attribute: "FORM_FACTOR",
                    Operator: "GREATER_THAN",
                    Value: "vitae",
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