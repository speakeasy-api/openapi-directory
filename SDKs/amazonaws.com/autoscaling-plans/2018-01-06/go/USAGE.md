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