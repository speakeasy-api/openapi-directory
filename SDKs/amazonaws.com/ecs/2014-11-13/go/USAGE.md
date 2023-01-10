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
            XAmzAlgorithm: "praesentium",
            XAmzContentSha256: "voluptates",
            XAmzCredential: "inventore",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "deleniti",
            XAmzSignature: "facere",
            XAmzSignedHeaders: "numquam",
            XAmzTarget: "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
        },
        Request: shared.CreateCapacityProviderRequest{
            AutoScalingGroupProvider: shared.AutoScalingGroupProvider{
                AutoScalingGroupArn: "explicabo",
                ManagedScaling: &shared.ManagedScaling{
                    InstanceWarmupPeriod: 6635728551378606624,
                    MaximumScalingStepSize: 5973617793068578508,
                    MinimumScalingStepSize: 8160591596675653275,
                    Status: "DISABLED",
                    TargetCapacity: 7028752311702887101,
                },
                ManagedTerminationProtection: "ENABLED",
            },
            Name: "qui",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "qui",
                    Value: "et",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "repellendus",
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