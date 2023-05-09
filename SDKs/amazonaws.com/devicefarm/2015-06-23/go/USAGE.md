<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateDevicePool(ctx, operations.CreateDevicePoolRequest{
        CreateDevicePoolRequest: shared.CreateDevicePoolRequest{
            Description: sdk.String("corrupti"),
            MaxDevices: sdk.Int64(592845),
            Name: "Ellis Mitchell",
            ProjectArn: "illum",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumInstanceLabels.ToPointer(),
                    Operator: shared.RuleOperatorEnumIn.ToPointer(),
                    Value: sdk.String("suscipit"),
                },
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumRemoteDebugEnabled.ToPointer(),
                    Operator: shared.RuleOperatorEnumLessThanOrEquals.ToPointer(),
                    Value: sdk.String("debitis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.CreateDevicePoolXAmzTargetEnumDeviceFarm20150623CreateDevicePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevicePoolResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->