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

    req := operations.CreateCapacityProviderRequest{
        Headers: operations.CreateCapacityProviderHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
        },
        Request: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "illum",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: 423655,
                    MaximumScalingStepSize: 623564,
                    MinimumScalingStepSize: 645894,
                    Status: "ENABLED",
                    TargetCapacity: 437587,
                },
                ManagedTerminationProtection: "ENABLED",
            },
            Name: "debitis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "delectus",
                    Value: "tempora",
                },
            },
        },
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