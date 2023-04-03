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

    req := operations.CreateCapacityProviderRequest{
        CreateCapacityProviderRequest: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "corrupti",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: 592845,
                    MaximumScalingStepSize: 715190,
                    MinimumScalingStepSize: 844266,
                    Status: "DISABLED",
                    TargetCapacity: 857946,
                },
                ManagedTerminationProtection: "DISABLED",
            },
            Name: "illum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
        XAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
    }

    ctx := context.Background()
    res, err := s.CreateCapacityProvider(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCapacityProviderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->