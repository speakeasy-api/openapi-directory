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
    res, err := s.CreateCapacityProvider(ctx, operations.CreateCapacityProviderRequest{
        CreateCapacityProviderRequest: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "corrupti",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: sdk.Int64(592845),
                    MaximumScalingStepSize: sdk.Int64(715190),
                    MinimumScalingStepSize: sdk.Int64(844266),
                    Status: shared.ManagedScalingStatusEnumDisabled.ToPointer(),
                    TargetCapacity: sdk.Int64(857946),
                },
                ManagedTerminationProtection: shared.ManagedTerminationProtectionEnumDisabled.ToPointer(),
            },
            Name: "Ben Mueller",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("magnam"),
                    Value: sdk.String("debitis"),
                },
                shared.Tag{
                    Key: sdk.String("ipsa"),
                    Value: sdk.String("delectus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.CreateCapacityProviderXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateCapacityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCapacityProviderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->