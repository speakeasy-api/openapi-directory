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
    
    req := operations.CreateScalingPlanRequest{
        Headers: operations.CreateScalingPlanHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
        },
        Request: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: "fugit",
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "nihil",
                        Values: []string{
                            "dicta",
                            "debitis",
                            "voluptatum",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "dolorem",
                                Value: "et",
                            },
                            shared.MetricDimension{
                                Name: "voluptate",
                                Value: "iste",
                            },
                            shared.MetricDimension{
                                Name: "vitae",
                                Value: "totam",
                            },
                        },
                        MetricName: "dolores",
                        Namespace: "illum",
                        Statistic: "Minimum",
                        Unit: "vel",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 6303220950515014660,
                    MinCapacity: 4035568504096476779,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkIn",
                        ResourceLabel: "accusantium",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityAboveForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 6745438398739480977,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "est",
                    ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 5001958211167890979,
                    ServiceNamespace: "dynamodb",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "illo",
                                        Value: "sed",
                                    },
                                },
                                MetricName: "officiis",
                                Namespace: "autem",
                                Statistic: "SampleCount",
                                Unit: "nobis",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 7699391924090763411,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageCPUUtilization",
                                ResourceLabel: "at",
                            },
                            ScaleInCooldown: 3959279844101328186,
                            ScaleOutCooldown: 8902041070398994519,
                            TargetValue: 19.100000,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "ut",
                                        Value: "exercitationem",
                                    },
                                },
                                MetricName: "aut",
                                Namespace: "reprehenderit",
                                Statistic: "Maximum",
                                Unit: "maiores",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 7242748068272024738,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkOut",
                                ResourceLabel: "veritatis",
                            },
                            ScaleInCooldown: 2671030200101705776,
                            ScaleOutCooldown: 3508963237347473586,
                            TargetValue: 81.199997,
                        },
                    },
                },
            },
            ScalingPlanName: "ex",
        },
    }
    
    res, err := s.CreateScalingPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScalingPlanResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->