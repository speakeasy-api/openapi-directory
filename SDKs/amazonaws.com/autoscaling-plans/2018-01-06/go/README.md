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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateScalingPlan(ctx, operations.CreateScalingPlanRequest{
        CreateScalingPlanRequest: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: sdk.String("corrupti"),
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: sdk.String("distinctio"),
                        Values: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("vel"),
                        Values: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("magnam"),
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
                                Name: "Ken Kshlerin",
                                Value: "recusandae",
                            },
                            shared.MetricDimension{
                                Name: "Miss Raymond Hauck III",
                                Value: "repellendus",
                            },
                            shared.MetricDimension{
                                Name: "Cedric Connelly",
                                Value: "maiores",
                            },
                            shared.MetricDimension{
                                Name: "Bernadette Schmidt",
                                Value: "porro",
                            },
                        },
                        MetricName: "dolorum",
                        Namespace: "dicta",
                        Statistic: shared.MetricStatisticEnumSampleCount,
                        Unit: sdk.String("officia"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 582020,
                    MinCapacity: 143353,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalNetworkOut,
                        ResourceLabel: sdk.String("hic"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetMaxCapacityAboveForecastCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(521848),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastAndScale.ToPointer(),
                    ResourceID: "commodi",
                    ScalableDimension: shared.ScalableDimensionEnumRdsClusterReadReplicaCount,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumKeepExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(186332),
                    ServiceNamespace: shared.ServiceNamespaceEnumRds,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Mrs. Miriam Collier",
                                        Value: "sed",
                                    },
                                    shared.MetricDimension{
                                        Name: "Curtis Morissette",
                                        Value: "saepe",
                                    },
                                },
                                MetricName: "fuga",
                                Namespace: "in",
                                Statistic: shared.MetricStatisticEnumMinimum,
                                Unit: sdk.String("iste"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(437032),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumEc2SpotFleetRequestAverageNetworkIn,
                                ResourceLabel: sdk.String("quidem"),
                            },
                            ScaleInCooldown: sdk.Int64(99280),
                            ScaleOutCooldown: sdk.Int64(60225),
                            TargetValue: 9698.1,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Cameron Dach",
                                        Value: "explicabo",
                                    },
                                    shared.MetricDimension{
                                        Name: "Ronnie Mohr",
                                        Value: "excepturi",
                                    },
                                    shared.MetricDimension{
                                        Name: "Charlene Nicolas",
                                        Value: "architecto",
                                    },
                                },
                                MetricName: "mollitia",
                                Namespace: "dolorem",
                                Statistic: shared.MetricStatisticEnumSampleCount,
                                Unit: sdk.String("consequuntur"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(995300),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageCPUUtilization,
                                ResourceLabel: sdk.String("occaecati"),
                            },
                            ScaleInCooldown: sdk.Int64(253291),
                            ScaleOutCooldown: sdk.Int64(414369),
                            TargetValue: 4663.11,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Sabrina Cronin MD",
                                        Value: "animi",
                                    },
                                    shared.MetricDimension{
                                        Name: "Christina Satterfield",
                                        Value: "ipsam",
                                    },
                                },
                                MetricName: "id",
                                Namespace: "possimus",
                                Statistic: shared.MetricStatisticEnumAverage,
                                Unit: sdk.String("quasi"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(622846),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumEc2SpotFleetRequestAverageCPUUtilization,
                                ResourceLabel: sdk.String("laborum"),
                            },
                            ScaleInCooldown: sdk.Int64(96098),
                            ScaleOutCooldown: sdk.Int64(971945),
                            TargetValue: 9764.6,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "Miss Irma Wolff",
                                Value: "cum",
                            },
                            shared.MetricDimension{
                                Name: "Sharon Kiehn",
                                Value: "dicta",
                            },
                            shared.MetricDimension{
                                Name: "Miss Valerie Kshlerin",
                                Value: "accusamus",
                            },
                            shared.MetricDimension{
                                Name: "Elvira Bergnaum",
                                Value: "molestias",
                            },
                        },
                        MetricName: "excepturi",
                        Namespace: "pariatur",
                        Statistic: shared.MetricStatisticEnumMinimum,
                        Unit: sdk.String("praesentium"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 523248,
                    MinCapacity: 916723,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalCPUUtilization,
                        ResourceLabel: sdk.String("repudiandae"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetMaxCapacityToForecastCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(83112),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastOnly.ToPointer(),
                    ResourceID: "incidunt",
                    ScalableDimension: shared.ScalableDimensionEnumEc2SpotFleetRequestTargetCapacity,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumKeepExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(667411),
                    ServiceNamespace: shared.ServiceNamespaceEnumDynamodb,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Marty Green",
                                        Value: "aliquid",
                                    },
                                    shared.MetricDimension{
                                        Name: "Isaac Aufderhar",
                                        Value: "ipsam",
                                    },
                                    shared.MetricDimension{
                                        Name: "Denise Pagac",
                                        Value: "facilis",
                                    },
                                },
                                MetricName: "tempore",
                                Namespace: "labore",
                                Statistic: shared.MetricStatisticEnumSum,
                                Unit: sdk.String("eum"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(248753),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageDatabaseConnections,
                                ResourceLabel: sdk.String("sint"),
                            },
                            ScaleInCooldown: sdk.Int64(396098),
                            ScaleOutCooldown: sdk.Int64(592042),
                            TargetValue: 8960.39,
                        },
                    },
                },
            },
            ScalingPlanName: "sint",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.CreateScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceCreateScalingPlan,
    })
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

### [SDK](docs/sdk/README.md)

* [CreateScalingPlan](docs/sdk/README.md#createscalingplan) - Creates a scaling plan. 
* [DeleteScalingPlan](docs/sdk/README.md#deletescalingplan) - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* [DescribeScalingPlanResources](docs/sdk/README.md#describescalingplanresources) - Describes the scalable resources in the specified scaling plan.
* [DescribeScalingPlans](docs/sdk/README.md#describescalingplans) - Describes one or more of your scaling plans.
* [GetScalingPlanResourceForecastData](docs/sdk/README.md#getscalingplanresourceforecastdata) - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* [UpdateScalingPlan](docs/sdk/README.md#updatescalingplan) - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
