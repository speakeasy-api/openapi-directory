# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/autoscaling-plans/2018-01-06/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.CreateScalingPlanRequest{
        Headers: operations.CreateScalingPlanHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
        },
        Request: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: "nihil",
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "facilis",
                        Values: []string{
                            "iusto",
                            "ullam",
                        },
                    },
                    shared.TagFilter{
                        Key: "saepe",
                        Values: []string{
                            "sapiente",
                        },
                    },
                    shared.TagFilter{
                        Key: "enim",
                        Values: []string{
                            "voluptatum",
                            "autem",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "deleniti",
                                Value: "similique",
                            },
                            shared.MetricDimension{
                                Name: "reprehenderit",
                                Value: "molestiae",
                            },
                            shared.MetricDimension{
                                Name: "quo",
                                Value: "quasi",
                            },
                        },
                        MetricName: "laboriosam",
                        Namespace: "dicta",
                        Statistic: "SampleCount",
                        Unit: "voluptatem",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 368241,
                    MinCapacity: 832620,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ALBTargetGroupRequestCount",
                        ResourceLabel: "omnis",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity",
                    PredictiveScalingMaxCapacityBuffer: 870013,
                    PredictiveScalingMode: "ForecastOnly",
                    ResourceID: "reiciendis",
                    ScalableDimension: "rds:cluster:ReadReplicaCount",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 800911,
                    ServiceNamespace: "ec2",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "soluta",
                                        Value: "sed",
                                    },
                                    shared.MetricDimension{
                                        Name: "quisquam",
                                        Value: "rerum",
                                    },
                                    shared.MetricDimension{
                                        Name: "culpa",
                                        Value: "qui",
                                    },
                                    shared.MetricDimension{
                                        Name: "sed",
                                        Value: "rerum",
                                    },
                                },
                                MetricName: "possimus",
                                Namespace: "occaecati",
                                Statistic: "Average",
                                Unit: "esse",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 473600,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBReadCapacityUtilization",
                                ResourceLabel: "amet",
                            },
                            ScaleInCooldown: 774234,
                            ScaleOutCooldown: 736918,
                            TargetValue: 4561.5,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "similique",
                                        Value: "dolores",
                                    },
                                },
                                MetricName: "sit",
                                Namespace: "quia",
                                Statistic: "SampleCount",
                                Unit: "voluptatem",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 612096,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkOut",
                                ResourceLabel: "et",
                            },
                            ScaleInCooldown: 386489,
                            ScaleOutCooldown: 943749,
                            TargetValue: 9025.99,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "qui",
                                        Value: "ea",
                                    },
                                    shared.MetricDimension{
                                        Name: "laborum",
                                        Value: "iusto",
                                    },
                                    shared.MetricDimension{
                                        Name: "ut",
                                        Value: "optio",
                                    },
                                },
                                MetricName: "aspernatur",
                                Namespace: "inventore",
                                Statistic: "Sum",
                                Unit: "libero",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 653140,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "ipsum",
                            },
                            ScaleInCooldown: 210382,
                            ScaleOutCooldown: 358152,
                            TargetValue: 1289.26,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "ipsam",
                                Value: "est",
                            },
                            shared.MetricDimension{
                                Name: "commodi",
                                Value: "quia",
                            },
                            shared.MetricDimension{
                                Name: "similique",
                                Value: "eaque",
                            },
                            shared.MetricDimension{
                                Name: "odio",
                                Value: "harum",
                            },
                        },
                        MetricName: "doloribus",
                        Namespace: "a",
                        Statistic: "Average",
                        Unit: "et",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 208876,
                    MinCapacity: 635059,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalCPUUtilization",
                        ResourceLabel: "asperiores",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 581850,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "esse",
                    ScalableDimension: "rds:cluster:ReadReplicaCount",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 244425,
                    ServiceNamespace: "rds",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "aut",
                                        Value: "cum",
                                    },
                                    shared.MetricDimension{
                                        Name: "expedita",
                                        Value: "ipsam",
                                    },
                                },
                                MetricName: "eos",
                                Namespace: "omnis",
                                Statistic: "Average",
                                Unit: "hic",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 368725,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "qui",
                            },
                            ScaleInCooldown: 13571,
                            ScaleOutCooldown: 97101,
                            TargetValue: 6228.46,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "tempore",
                                Value: "explicabo",
                            },
                            shared.MetricDimension{
                                Name: "aut",
                                Value: "reiciendis",
                            },
                            shared.MetricDimension{
                                Name: "debitis",
                                Value: "totam",
                            },
                            shared.MetricDimension{
                                Name: "molestias",
                                Value: "reiciendis",
                            },
                        },
                        MetricName: "illo",
                        Namespace: "id",
                        Statistic: "Maximum",
                        Unit: "quod",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 19987,
                    MinCapacity: 39187,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkIn",
                        ResourceLabel: "veniam",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityAboveForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 120196,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "exercitationem",
                    ScalableDimension: "rds:cluster:ReadReplicaCount",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 688661,
                    ServiceNamespace: "ecs",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "sint",
                                        Value: "veritatis",
                                    },
                                    shared.MetricDimension{
                                        Name: "numquam",
                                        Value: "eligendi",
                                    },
                                },
                                MetricName: "error",
                                Namespace: "similique",
                                Statistic: "Sum",
                                Unit: "ut",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 508969,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ECSServiceAverageMemoryUtilization",
                                ResourceLabel: "sint",
                            },
                            ScaleInCooldown: 93940,
                            ScaleOutCooldown: 921158,
                            TargetValue: 5759.47,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "non",
                                        Value: "minima",
                                    },
                                },
                                MetricName: "voluptatem",
                                Namespace: "aut",
                                Statistic: "SampleCount",
                                Unit: "voluptas",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 131797,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "porro",
                            },
                            ScaleInCooldown: 841386,
                            ScaleOutCooldown: 289406,
                            TargetValue: 2647.3,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "in",
                                        Value: "officia",
                                    },
                                },
                                MetricName: "omnis",
                                Namespace: "voluptatem",
                                Statistic: "Average",
                                Unit: "eum",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 369808,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageCPUUtilization",
                                ResourceLabel: "ratione",
                            },
                            ScaleInCooldown: 677817,
                            ScaleOutCooldown: 569618,
                            TargetValue: 2700.08,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "id",
                                        Value: "quis",
                                    },
                                    shared.MetricDimension{
                                        Name: "sapiente",
                                        Value: "et",
                                    },
                                    shared.MetricDimension{
                                        Name: "dolore",
                                        Value: "possimus",
                                    },
                                },
                                MetricName: "in",
                                Namespace: "qui",
                                Statistic: "Maximum",
                                Unit: "eveniet",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 572252,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "modi",
                            },
                            ScaleInCooldown: 891555,
                            ScaleOutCooldown: 952749,
                            TargetValue: 6800.56,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "ducimus",
                                Value: "nulla",
                            },
                            shared.MetricDimension{
                                Name: "reiciendis",
                                Value: "cumque",
                            },
                        },
                        MetricName: "fugit",
                        Namespace: "ullam",
                        Statistic: "SampleCount",
                        Unit: "vel",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 411820,
                    MinCapacity: 396506,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkOut",
                        ResourceLabel: "aut",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity",
                    PredictiveScalingMaxCapacityBuffer: 581273,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "aut",
                    ScalableDimension: "dynamodb:index:WriteCapacityUnits",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 588465,
                    ServiceNamespace: "rds",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "provident",
                                        Value: "a",
                                    },
                                    shared.MetricDimension{
                                        Name: "incidunt",
                                        Value: "facilis",
                                    },
                                    shared.MetricDimension{
                                        Name: "qui",
                                        Value: "nihil",
                                    },
                                },
                                MetricName: "dolorum",
                                Namespace: "id",
                                Statistic: "Maximum",
                                Unit: "sit",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 470132,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBReadCapacityUtilization",
                                ResourceLabel: "porro",
                            },
                            ScaleInCooldown: 660174,
                            ScaleOutCooldown: 287991,
                            TargetValue: 2900.77,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "et",
                                        Value: "placeat",
                                    },
                                    shared.MetricDimension{
                                        Name: "molestiae",
                                        Value: "debitis",
                                    },
                                },
                                MetricName: "dolores",
                                Namespace: "aut",
                                Statistic: "Minimum",
                                Unit: "explicabo",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 569965,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBWriteCapacityUtilization",
                                ResourceLabel: "deserunt",
                            },
                            ScaleInCooldown: 551816,
                            ScaleOutCooldown: 574325,
                            TargetValue: 336.25,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "ut",
                                        Value: "et",
                                    },
                                    shared.MetricDimension{
                                        Name: "voluptatem",
                                        Value: "et",
                                    },
                                    shared.MetricDimension{
                                        Name: "modi",
                                        Value: "eveniet",
                                    },
                                },
                                MetricName: "qui",
                                Namespace: "consequatur",
                                Statistic: "Average",
                                Unit: "iusto",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 984043,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkIn",
                                ResourceLabel: "quaerat",
                            },
                            ScaleInCooldown: 806194,
                            ScaleOutCooldown: 537023,
                            TargetValue: 7038.89,
                        },
                    },
                },
            },
            ScalingPlanName: "ducimus",
        },
    }

    ctx := context.Background()
    res, err := s.CreateScalingPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScalingPlanResponse != nil {
        // handle response
    }
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
