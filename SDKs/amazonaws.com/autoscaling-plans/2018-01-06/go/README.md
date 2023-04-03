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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateScalingPlanRequest{
        CreateScalingPlanRequest: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: "corrupti",
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "distinctio",
                        Values: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                    },
                    shared.TagFilter{
                        Key: "vel",
                        Values: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                    },
                    shared.TagFilter{
                        Key: "magnam",
                        Values: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "placeat",
                                Value: "voluptatum",
                            },
                            shared.MetricDimension{
                                Name: "iusto",
                                Value: "excepturi",
                            },
                            shared.MetricDimension{
                                Name: "nisi",
                                Value: "recusandae",
                            },
                            shared.MetricDimension{
                                Name: "temporibus",
                                Value: "ab",
                            },
                        },
                        MetricName: "quis",
                        Namespace: "veritatis",
                        Statistic: "SampleCount",
                        Unit: "perferendis",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 368241,
                    MinCapacity: 832620,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ALBTargetGroupRequestCount",
                        ResourceLabel: "quo",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity",
                    PredictiveScalingMaxCapacityBuffer: 870013,
                    PredictiveScalingMode: "ForecastOnly",
                    ResourceID: "maiores",
                    ScalableDimension: "rds:cluster:ReadReplicaCount",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 800911,
                    ServiceNamespace: "ec2",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "dolorum",
                                        Value: "dicta",
                                    },
                                    shared.MetricDimension{
                                        Name: "nam",
                                        Value: "officia",
                                    },
                                    shared.MetricDimension{
                                        Name: "occaecati",
                                        Value: "fugit",
                                    },
                                    shared.MetricDimension{
                                        Name: "deleniti",
                                        Value: "hic",
                                    },
                                },
                                MetricName: "optio",
                                Namespace: "totam",
                                Statistic: "Average",
                                Unit: "commodi",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 473600,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "DynamoDBReadCapacityUtilization",
                                ResourceLabel: "qui",
                            },
                            ScaleInCooldown: 774234,
                            ScaleOutCooldown: 736918,
                            TargetValue: 4561.5,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "excepturi",
                                        Value: "aspernatur",
                                    },
                                },
                                MetricName: "perferendis",
                                Namespace: "ad",
                                Statistic: "SampleCount",
                                Unit: "sed",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 612096,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkOut",
                                ResourceLabel: "natus",
                            },
                            ScaleInCooldown: 386489,
                            ScaleOutCooldown: 943749,
                            TargetValue: 9025.99,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "in",
                                        Value: "corporis",
                                    },
                                    shared.MetricDimension{
                                        Name: "iste",
                                        Value: "iure",
                                    },
                                    shared.MetricDimension{
                                        Name: "saepe",
                                        Value: "quidem",
                                    },
                                },
                                MetricName: "architecto",
                                Namespace: "ipsa",
                                Statistic: "Sum",
                                Unit: "est",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 653140,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "dolores",
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
                                Name: "enim",
                                Value: "omnis",
                            },
                            shared.MetricDimension{
                                Name: "nemo",
                                Value: "minima",
                            },
                            shared.MetricDimension{
                                Name: "excepturi",
                                Value: "accusantium",
                            },
                            shared.MetricDimension{
                                Name: "iure",
                                Value: "culpa",
                            },
                        },
                        MetricName: "doloribus",
                        Namespace: "sapiente",
                        Statistic: "Average",
                        Unit: "mollitia",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 208876,
                    MinCapacity: 635059,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalCPUUtilization",
                        ResourceLabel: "repellat",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 581850,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "commodi",
                    ScalableDimension: "rds:cluster:ReadReplicaCount",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 244425,
                    ServiceNamespace: "rds",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "vitae",
                                        Value: "laborum",
                                    },
                                    shared.MetricDimension{
                                        Name: "animi",
                                        Value: "enim",
                                    },
                                },
                                MetricName: "odit",
                                Namespace: "quo",
                                Statistic: "Average",
                                Unit: "tenetur",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 368725,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "RDSReaderAverageCPUUtilization",
                                ResourceLabel: "possimus",
                            },
                            ScaleInCooldown: 13571,
                            ScaleOutCooldown: 97101,
                            TargetValue: 6228.46,
                        },
                    },
                },
            },
            ScalingPlanName: "temporibus",
        },
        XAmzAlgorithm: "laborum",
        XAmzContentSha256: "quasi",
        XAmzCredential: "reiciendis",
        XAmzDate: "voluptatibus",
        XAmzSecurityToken: "vero",
        XAmzSignature: "nihil",
        XAmzSignedHeaders: "praesentium",
        XAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
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
## Available Resources and Operations

### SDK SDK

* `CreateScalingPlan` - Creates a scaling plan. 
* `DeleteScalingPlan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `DescribeScalingPlanResources` - Describes the scalable resources in the specified scaling plan.
* `DescribeScalingPlans` - Describes one or more of your scaling plans.
* `GetScalingPlanResourceForecastData` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `UpdateScalingPlan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
