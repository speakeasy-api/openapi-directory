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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
        },
        Request: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: "illum",
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "error",
                        Values: []string{
                            "suscipit",
                            "iure",
                            "magnam",
                        },
                    },
                    shared.TagFilter{
                        Key: "debitis",
                        Values: []string{
                            "delectus",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "molestiae",
                                Value: "minus",
                            },
                            shared.MetricDimension{
                                Name: "placeat",
                                Value: "voluptatum",
                            },
                        },
                        MetricName: "iusto",
                        Namespace: "excepturi",
                        Statistic: "Minimum",
                        Unit: "recusandae",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 836079,
                    MinCapacity: 71036,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkIn",
                        ResourceLabel: "veritatis",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 20218,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "repellendus",
                    ScalableDimension: "dynamodb:index:WriteCapacityUnits",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 140350,
                    ServiceNamespace: "dynamodb",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "molestiae",
                                        Value: "quod",
                                    },
                                    shared.MetricDimension{
                                        Name: "quod",
                                        Value: "esse",
                                    },
                                    shared.MetricDimension{
                                        Name: "totam",
                                        Value: "porro",
                                    },
                                    shared.MetricDimension{
                                        Name: "dolorum",
                                        Value: "dicta",
                                    },
                                },
                                MetricName: "nam",
                                Namespace: "officia",
                                Statistic: "Maximum",
                                Unit: "fugit",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 537373,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkOut",
                                ResourceLabel: "optio",
                            },
                            ScaleInCooldown: 521848,
                            ScaleOutCooldown: 105907,
                            TargetValue: 4146.62,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "modi",
                                        Value: "qui",
                                    },
                                    shared.MetricDimension{
                                        Name: "impedit",
                                        Value: "cum",
                                    },
                                },
                                MetricName: "esse",
                                Namespace: "ipsum",
                                Statistic: "Maximum",
                                Unit: "aspernatur",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 18789,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBWriteCapacityUtilization",
                                ResourceLabel: "natus",
                            },
                            ScaleInCooldown: 149675,
                            ScaleOutCooldown: 612096,
                            TargetValue: 2223.21,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "laboriosam",
                                        Value: "hic",
                                    },
                                    shared.MetricDimension{
                                        Name: "saepe",
                                        Value: "fuga",
                                    },
                                    shared.MetricDimension{
                                        Name: "in",
                                        Value: "corporis",
                                    },
                                },
                                MetricName: "iste",
                                Namespace: "iure",
                                Statistic: "Sum",
                                Unit: "quidem",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 99280,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageCPUUtilization",
                                ResourceLabel: "reiciendis",
                            },
                            ScaleInCooldown: 666767,
                            ScaleOutCooldown: 653140,
                            TargetValue: 6706.38,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "dolorem",
                                        Value: "corporis",
                                    },
                                },
                                MetricName: "explicabo",
                                Namespace: "nobis",
                                Statistic: "Minimum",
                                Unit: "omnis",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 363711,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBWriteCapacityUtilization",
                                ResourceLabel: "excepturi",
                            },
                            ScaleInCooldown: 38425,
                            ScaleOutCooldown: 438601,
                            TargetValue: 6342.74,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "sapiente",
                                Value: "architecto",
                            },
                            shared.MetricDimension{
                                Name: "mollitia",
                                Value: "dolorem",
                            },
                            shared.MetricDimension{
                                Name: "culpa",
                                Value: "consequuntur",
                            },
                            shared.MetricDimension{
                                Name: "repellat",
                                Value: "mollitia",
                            },
                        },
                        MetricName: "occaecati",
                        Namespace: "numquam",
                        Statistic: "Maximum",
                        Unit: "quam",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 474697,
                    MinCapacity: 244425,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalNetworkOut",
                        ResourceLabel: "quia",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 110375,
                    PredictiveScalingMode: "ForecastOnly",
                    ResourceID: "animi",
                    ScalableDimension: "ec2:spot-fleet-request:TargetCapacity",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 778346,
                    ServiceNamespace: "autoscaling",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "id",
                                        Value: "possimus",
                                    },
                                    shared.MetricDimension{
                                        Name: "aut",
                                        Value: "quasi",
                                    },
                                },
                                MetricName: "error",
                                Namespace: "temporibus",
                                Statistic: "SampleCount",
                                Unit: "quasi",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 971945,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkOut",
                                ResourceLabel: "vero",
                            },
                            ScaleInCooldown: 468651,
                            ScaleOutCooldown: 509624,
                            TargetValue: 9767.62,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "omnis",
                                        Value: "voluptate",
                                    },
                                },
                                MetricName: "cum",
                                Namespace: "perferendis",
                                Statistic: "Average",
                                Unit: "reprehenderit",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 282807,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkOut",
                                ResourceLabel: "dicta",
                            },
                            ScaleInCooldown: 359444,
                            ScaleOutCooldown: 296140,
                            TargetValue: 4808.94,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "harum",
                                        Value: "enim",
                                    },
                                },
                                MetricName: "accusamus",
                                Namespace: "commodi",
                                Statistic: "Sum",
                                Unit: "quae",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 216822,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageDatabaseConnections",
                                ResourceLabel: "molestias",
                            },
                            ScaleInCooldown: 566602,
                            ScaleOutCooldown: 865103,
                            TargetValue: 2653.89,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "rem",
                                        Value: "voluptates",
                                    },
                                    shared.MetricDimension{
                                        Name: "quasi",
                                        Value: "repudiandae",
                                    },
                                    shared.MetricDimension{
                                        Name: "sint",
                                        Value: "veritatis",
                                    },
                                },
                                MetricName: "itaque",
                                Namespace: "incidunt",
                                Statistic: "Minimum",
                                Unit: "consequatur",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 667411,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageCPUUtilization",
                                ResourceLabel: "explicabo",
                            },
                            ScaleInCooldown: 647174,
                            ScaleOutCooldown: 716327,
                            TargetValue: 8413.86,
                        },
                    },
                },
            },
            ScalingPlanName: "labore",
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