# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateScalingPlan` - Creates a scaling plan. 
* `DeleteScalingPlan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `DescribeScalingPlanResources` - Describes the scalable resources in the specified scaling plan.
* `DescribeScalingPlans` - Describes one or more of your scaling plans.
* `GetScalingPlanResourceForecastData` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `UpdateScalingPlan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
