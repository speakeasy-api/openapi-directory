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
            XAmzAlgorithm: "doloribus",
            XAmzContentSha256: "necessitatibus",
            XAmzCredential: "aliquam",
            XAmzDate: "ut",
            XAmzSecurityToken: "sint",
            XAmzSignature: "eos",
            XAmzSignedHeaders: "officia",
            XAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
        },
        Request: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: "sit",
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "earum",
                        Values: []string{
                            "assumenda",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "in",
                                Value: "repellendus",
                            },
                        },
                        MetricName: "repudiandae",
                        Namespace: "sed",
                        Statistic: "Average",
                        Unit: "cum",
                    },
                    DisableDynamicScaling: true,
                    MaxCapacity: 2532597011683728087,
                    MinCapacity: 8028815005489571747,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkIn",
                        ResourceLabel: "nisi",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity",
                    PredictiveScalingMaxCapacityBuffer: 1940187917623811174,
                    PredictiveScalingMode: "ForecastOnly",
                    ResourceID: "est",
                    ScalableDimension: "dynamodb:index:ReadCapacityUnits",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 1713996192319931980,
                    ServiceNamespace: "autoscaling",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "voluptate",
                                        Value: "ut",
                                    },
                                    shared.MetricDimension{
                                        Name: "inventore",
                                        Value: "et",
                                    },
                                    shared.MetricDimension{
                                        Name: "enim",
                                        Value: "minima",
                                    },
                                },
                                MetricName: "hic",
                                Namespace: "cumque",
                                Statistic: "Maximum",
                                Unit: "quasi",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 2432923324136795944,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageCPUUtilization",
                                ResourceLabel: "nisi",
                            },
                            ScaleInCooldown: 4972956926970340934,
                            ScaleOutCooldown: 3723469953046556180,
                            TargetValue: 14.100000,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "quo",
                                        Value: "non",
                                    },
                                    shared.MetricDimension{
                                        Name: "a",
                                        Value: "mollitia",
                                    },
                                },
                                MetricName: "dolorum",
                                Namespace: "at",
                                Statistic: "Maximum",
                                Unit: "aut",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 4531580916635252633,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkIn",
                                ResourceLabel: "labore",
                            },
                            ScaleInCooldown: 1535639556352868980,
                            ScaleOutCooldown: 8955779660177681159,
                            TargetValue: 74.199997,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "ratione",
                                Value: "voluptatem",
                            },
                        },
                        MetricName: "sit",
                        Namespace: "eum",
                        Statistic: "Average",
                        Unit: "expedita",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 8872633733247291586,
                    MinCapacity: 2223670193668799695,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalCPUUtilization",
                        ResourceLabel: "nulla",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity",
                    PredictiveScalingMaxCapacityBuffer: 8229745102967699455,
                    PredictiveScalingMode: "ForecastOnly",
                    ResourceID: "dolor",
                    ScalableDimension: "rds:cluster:ReadReplicaCount",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 4935670796153673020,
                    ServiceNamespace: "autoscaling",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "dolores",
                                        Value: "quaerat",
                                    },
                                },
                                MetricName: "iste",
                                Namespace: "harum",
                                Statistic: "Maximum",
                                Unit: "natus",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 4101734553074821155,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkOut",
                                ResourceLabel: "expedita",
                            },
                            ScaleInCooldown: 2935226858963760426,
                            ScaleOutCooldown: 3585591606309161877,
                            TargetValue: 27.100000,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "commodi",
                                        Value: "tenetur",
                                    },
                                    shared.MetricDimension{
                                        Name: "et",
                                        Value: "sed",
                                    },
                                },
                                MetricName: "saepe",
                                Namespace: "sit",
                                Statistic: "Average",
                                Unit: "voluptate",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 4433816511744504618,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ALBRequestCountPerTarget",
                                ResourceLabel: "facere",
                            },
                            ScaleInCooldown: 1958515401632262794,
                            ScaleOutCooldown: 1608782168285273117,
                            TargetValue: 16.100000,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "nostrum",
                                Value: "et",
                            },
                            shared.MetricDimension{
                                Name: "eum",
                                Value: "aut",
                            },
                        },
                        MetricName: "beatae",
                        Namespace: "incidunt",
                        Statistic: "Average",
                        Unit: "a",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 2840221116841027537,
                    MinCapacity: 1450424072144671877,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkIn",
                        ResourceLabel: "sunt",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity",
                    PredictiveScalingMaxCapacityBuffer: 6039161625972230315,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "non",
                    ScalableDimension: "ec2:spot-fleet-request:TargetCapacity",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 2363619035225420429,
                    ServiceNamespace: "autoscaling",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "temporibus",
                                        Value: "voluptas",
                                    },
                                },
                                MetricName: "tempora",
                                Namespace: "voluptatem",
                                Statistic: "Minimum",
                                Unit: "eum",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 6050441218909099379,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBWriteCapacityUtilization",
                                ResourceLabel: "ab",
                            },
                            ScaleInCooldown: 279650548062880195,
                            ScaleOutCooldown: 1031912478290035631,
                            TargetValue: 93.199997,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "sit",
                                        Value: "quibusdam",
                                    },
                                    shared.MetricDimension{
                                        Name: "dolore",
                                        Value: "ut",
                                    },
                                    shared.MetricDimension{
                                        Name: "deserunt",
                                        Value: "est",
                                    },
                                },
                                MetricName: "cupiditate",
                                Namespace: "culpa",
                                Statistic: "Minimum",
                                Unit: "veniam",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 692921154198776483,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ECSServiceAverageMemoryUtilization",
                                ResourceLabel: "minus",
                            },
                            ScaleInCooldown: 1868821202122697832,
                            ScaleOutCooldown: 5484631603520417470,
                            TargetValue: 95.099998,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "dolor",
                                        Value: "nihil",
                                    },
                                },
                                MetricName: "error",
                                Namespace: "sunt",
                                Statistic: "SampleCount",
                                Unit: "sed",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 834755006764273154,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageCPUUtilization",
                                ResourceLabel: "eaque",
                            },
                            ScaleInCooldown: 404459533781805632,
                            ScaleOutCooldown: 8133641788294793621,
                            TargetValue: 99.099998,
                        },
                    },
                },
            },
            ScalingPlanName: "voluptate",
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
