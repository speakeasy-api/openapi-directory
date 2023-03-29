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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
        },
        Request: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "nihil",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: 623564,
                    MaximumScalingStepSize: 645894,
                    MinimumScalingStepSize: 384382,
                    Status: "ENABLED",
                    TargetCapacity: 297534,
                },
                ManagedTerminationProtection: "DISABLED",
            },
            Name: "inventore",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "eum",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "autem",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "non",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "similique",
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