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
    
    req := operations.CreateCapacityProviderRequest{
        Headers: operations.CreateCapacityProviderHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
        },
        Request: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "fugit",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: 1543572285742637646,
                    MaximumScalingStepSize: 2661732831099943416,
                    MinimumScalingStepSize: 8325060299420976708,
                    Status: "DISABLED",
                    TargetCapacity: 2518412263346885298,
                },
                ManagedTerminationProtection: "ENABLED",
            },
            Name: "et",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "et",
                },
                shared.Tag{
                    Key: "voluptate",
                    Value: "iste",
                },
                shared.Tag{
                    Key: "vitae",
                    Value: "totam",
                },
            },
        },
    }
    
    res, err := s.CreateCapacityProvider(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCapacityProviderResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->