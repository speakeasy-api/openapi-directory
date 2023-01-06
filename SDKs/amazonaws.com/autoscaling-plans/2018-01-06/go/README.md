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
                CloudFormationStackARN: map[string]interface{}{
                    "asperiores": "earum",
                },
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "assumenda",
                        Values: []string{
                            "alias",
                            "in",
                            "repellendus",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "praesentium",
                                Value: "cum",
                            },
                            shared.MetricDimension{
                                Name: "sunt",
                                Value: "odit",
                            },
                            shared.MetricDimension{
                                Name: "alias",
                                Value: "voluptas",
                            },
                        },
                        MetricName: "nisi",
                        Namespace: "ratione",
                        Statistic: "Minimum",
                        Unit: "est",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 6321216001811895118,
                    MinCapacity: 1990483423942727863,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalCPUUtilization",
                        ResourceLabel: "similique",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 8912864906962859578,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "ut",
                    ScalableDimension: "dynamodb:index:WriteCapacityUnits",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 3801960864973229618,
                    ServiceNamespace: "autoscaling",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "quia",
                                        Value: "quasi",
                                    },
                                    shared.MetricDimension{
                                        Name: "inventore",
                                        Value: "aut",
                                    },
                                },
                                MetricName: "rerum",
                                Namespace: "nisi",
                                Statistic: "Maximum",
                                Unit: "quia",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 7747378371490739093,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkIn",
                                ResourceLabel: "quo",
                            },
                            ScaleInCooldown: 4839335983314888046,
                            ScaleOutCooldown: 3715846577905900540,
                            TargetValue: 86.199997,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "sunt",
                                        Value: "aut",
                                    },
                                    shared.MetricDimension{
                                        Name: "voluptate",
                                        Value: "excepturi",
                                    },
                                },
                                MetricName: "illum",
                                Namespace: "labore",
                                Statistic: "Minimum",
                                Unit: "officia",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 4998816913668290766,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkOut",
                                ResourceLabel: "ratione",
                            },
                            ScaleInCooldown: 3973219548550359920,
                            ScaleOutCooldown: 2025841667682451965,
                            TargetValue: 44.099998,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "et",
                                        Value: "consequatur",
                                    },
                                    shared.MetricDimension{
                                        Name: "quia",
                                        Value: "omnis",
                                    },
                                },
                                MetricName: "nulla",
                                Namespace: "ratione",
                                Statistic: "Sum",
                                Unit: "ipsam",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 3163547476099533123,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ECSServiceAverageCPUUtilization",
                                ResourceLabel: "sunt",
                            },
                            ScaleInCooldown: 4610804548526054638,
                            ScaleOutCooldown: 2108700476726221742,
                            TargetValue: 92.099998,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "iste",
                                Value: "harum",
                            },
                            shared.MetricDimension{
                                Name: "id",
                                Value: "natus",
                            },
                        },
                        MetricName: "quibusdam",
                        Namespace: "ullam",
                        Statistic: "SampleCount",
                        Unit: "expedita",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 3585591606309161877,
                    MinCapacity: 5455556052571990475,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalCPUUtilization",
                        ResourceLabel: "dolore",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 5035491284427618254,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "sed",
                    ScalableDimension: "ecs:service:DesiredCount",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 4822591853964706668,
                    ServiceNamespace: "rds",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "animi",
                                        Value: "facere",
                                    },
                                    shared.MetricDimension{
                                        Name: "consequatur",
                                        Value: "ipsum",
                                    },
                                    shared.MetricDimension{
                                        Name: "hic",
                                        Value: "amet",
                                    },
                                },
                                MetricName: "quasi",
                                Namespace: "nostrum",
                                Statistic: "SampleCount",
                                Unit: "eum",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 1919178610335790356,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ALBRequestCountPerTarget",
                                ResourceLabel: "est",
                            },
                            ScaleInCooldown: 3729999635903286999,
                            ScaleOutCooldown: 6206329858499513151,
                            TargetValue: 10.100000,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "sunt",
                                        Value: "nobis",
                                    },
                                    shared.MetricDimension{
                                        Name: "quasi",
                                        Value: "et",
                                    },
                                    shared.MetricDimension{
                                        Name: "non",
                                        Value: "veniam",
                                    },
                                },
                                MetricName: "ex",
                                Namespace: "sint",
                                Statistic: "Average",
                                Unit: "quas",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 7615080709804364572,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "tempora",
                            },
                            ScaleInCooldown: 8063246301045201982,
                            ScaleOutCooldown: 4903983572025592447,
                            TargetValue: 92.199997,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "quaerat",
                                        Value: "ab",
                                    },
                                },
                                MetricName: "inventore",
                                Namespace: "exercitationem",
                                Statistic: "SampleCount",
                                Unit: "neque",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 6328721528522119779,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBWriteCapacityUtilization",
                                ResourceLabel: "dolore",
                            },
                            ScaleInCooldown: 7972519933864377458,
                            ScaleOutCooldown: 1891486577198993660,
                            TargetValue: 26.100000,
                        },
                    },
                },
            },
            ScalingPlanName: "culpa",
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
