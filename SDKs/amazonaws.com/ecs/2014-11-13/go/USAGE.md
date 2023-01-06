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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "est",
            XAmzCredential: "ipsum",
            XAmzDate: "quam",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "dolores",
            XAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
        },
        Request: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "impedit",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: 3752781218885968701,
                    MaximumScalingStepSize: 2991421044203248760,
                    MinimumScalingStepSize: 5310393022320405575,
                    Status: "DISABLED",
                    TargetCapacity: 371208508841907247,
                },
                ManagedTerminationProtection: "DISABLED",
            },
            Name: "quia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ducimus",
                    Value: "enim",
                },
                shared.Tag{
                    Key: "blanditiis",
                    Value: "distinctio",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "rerum",
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