# SDK

## Overview

<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources. </p> <p> <b>API Summary</b> </p> <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p> <ul> <li> <p>Create and manage scaling plans</p> </li> <li> <p>Define target tracking scaling policies to dynamically scale your resources based on utilization</p> </li> <li> <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster</p> </li> <li> <p>Set minimum and maximum capacity limits</p> </li> <li> <p>Retrieve information on existing scaling plans</p> </li> <li> <p>Access current forecast data and historical forecast data for up to 56 days previous</p> </li> </ul> <p>To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/autoscaling-plans/>
### Available Operations

* [CreateScalingPlan](#createscalingplan) - Creates a scaling plan. 
* [DeleteScalingPlan](#deletescalingplan) - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* [DescribeScalingPlanResources](#describescalingplanresources) - Describes the scalable resources in the specified scaling plan.
* [DescribeScalingPlans](#describescalingplans) - Describes one or more of your scaling plans.
* [GetScalingPlanResourceForecastData](#getscalingplanresourceforecastdata) - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* [UpdateScalingPlan](#updatescalingplan) - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

## CreateScalingPlan

Creates a scaling plan. 

### Example Usage

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
    res, err := s.SDK.CreateScalingPlan(ctx, operations.CreateScalingPlanRequest{
        CreateScalingPlanRequest: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackARN: sdk.String("illum"),
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: sdk.String("rerum"),
                        Values: []string{
                            "magnam",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("cumque"),
                        Values: []string{
                            "ea",
                            "aliquid",
                            "laborum",
                            "accusamus",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("non"),
                        Values: []string{
                            "enim",
                            "accusamus",
                            "delectus",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("quidem"),
                        Values: []string{
                            "nam",
                            "id",
                            "blanditiis",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "Sandy Huels",
                                Value: "omnis",
                            },
                            shared.MetricDimension{
                                Name: "Dorothy Kovacek",
                                Value: "id",
                            },
                            shared.MetricDimension{
                                Name: "Jamie Hoppe",
                                Value: "eum",
                            },
                            shared.MetricDimension{
                                Name: "Brandon Brakus V",
                                Value: "ullam",
                            },
                        },
                        MetricName: "provident",
                        Namespace: "quos",
                        Statistic: shared.MetricStatisticEnumMaximum,
                        Unit: sdk.String("accusantium"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 653201,
                    MinCapacity: 968962,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalNetworkOut,
                        ResourceLabel: sdk.String("ad"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetMaxCapacityToForecastCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(221262),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastOnly.ToPointer(),
                    ResourceID: "odit",
                    ScalableDimension: shared.ScalableDimensionEnumEc2SpotFleetRequestTargetCapacity,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumKeepExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(435865),
                    ServiceNamespace: shared.ServiceNamespaceEnumDynamodb,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Alfredo Prosacco Sr.",
                                        Value: "repudiandae",
                                    },
                                    shared.MetricDimension{
                                        Name: "Lola Koss",
                                        Value: "sed",
                                    },
                                },
                                MetricName: "saepe",
                                Namespace: "pariatur",
                                Statistic: shared.MetricStatisticEnumAverage,
                                Unit: sdk.String("consequuntur"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(508315),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageCPUUtilization,
                                ResourceLabel: sdk.String("magni"),
                            },
                            ScaleInCooldown: sdk.Int64(123820),
                            ScaleOutCooldown: sdk.Int64(779051),
                            TargetValue: 8480.09,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Nathaniel Marks",
                                        Value: "accusantium",
                                    },
                                    shared.MetricDimension{
                                        Name: "Ebony Predovic",
                                        Value: "autem",
                                    },
                                    shared.MetricDimension{
                                        Name: "Gary Streich",
                                        Value: "perferendis",
                                    },
                                    shared.MetricDimension{
                                        Name: "Vincent Anderson",
                                        Value: "hic",
                                    },
                                },
                                MetricName: "libero",
                                Namespace: "nobis",
                                Statistic: shared.MetricStatisticEnumAverage,
                                Unit: sdk.String("quis"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(521037),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumEcsServiceAverageMemoryUtilization,
                                ResourceLabel: sdk.String("eaque"),
                            },
                            ScaleInCooldown: sdk.Int64(338985),
                            ScaleOutCooldown: sdk.Int64(199996),
                            TargetValue: 1794.9,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Brooke Kohler",
                                        Value: "nostrum",
                                    },
                                },
                                MetricName: "hic",
                                Namespace: "recusandae",
                                Statistic: shared.MetricStatisticEnumSampleCount,
                                Unit: sdk.String("facilis"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(596656),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumAsgAverageCPUUtilization,
                                ResourceLabel: sdk.String("porro"),
                            },
                            ScaleInCooldown: sdk.Int64(164694),
                            ScaleOutCooldown: sdk.Int64(500026),
                            TargetValue: 6214.79,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Jean Ferry",
                                        Value: "modi",
                                    },
                                },
                                MetricName: "iste",
                                Namespace: "dolorum",
                                Statistic: shared.MetricStatisticEnumMaximum,
                                Unit: sdk.String("pariatur"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(589910),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageDatabaseConnections,
                                ResourceLabel: sdk.String("libero"),
                            },
                            ScaleInCooldown: sdk.Int64(964490),
                            ScaleOutCooldown: sdk.Int64(311945),
                            TargetValue: 5542.42,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "Dawn Fadel",
                                Value: "hic",
                            },
                            shared.MetricDimension{
                                Name: "Felipe Klein",
                                Value: "amet",
                            },
                        },
                        MetricName: "dolorum",
                        Namespace: "numquam",
                        Statistic: shared.MetricStatisticEnumAverage,
                        Unit: sdk.String("ipsa"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 56418,
                    MinCapacity: 434417,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalNetworkIn,
                        ResourceLabel: sdk.String("quaerat"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetMaxCapacityAboveForecastCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(696344),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastOnly.ToPointer(),
                    ResourceID: "voluptas",
                    ScalableDimension: shared.ScalableDimensionEnumDynamodbTableReadCapacityUnits,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumKeepExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(542499),
                    ServiceNamespace: shared.ServiceNamespaceEnumAutoscaling,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Omar Kris",
                                        Value: "deleniti",
                                    },
                                },
                                MetricName: "omnis",
                                Namespace: "necessitatibus",
                                Statistic: shared.MetricStatisticEnumSampleCount,
                                Unit: sdk.String("asperiores"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(469497),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumAsgAverageNetworkOut,
                                ResourceLabel: sdk.String("voluptate"),
                            },
                            ScaleInCooldown: sdk.Int64(663078),
                            ScaleOutCooldown: sdk.Int64(906418),
                            TargetValue: 2633.22,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Wendy Rosenbaum",
                                        Value: "saepe",
                                    },
                                },
                                MetricName: "suscipit",
                                Namespace: "deserunt",
                                Statistic: shared.MetricStatisticEnumMaximum,
                                Unit: sdk.String("minima"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(831049),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumEcsServiceAverageMemoryUtilization,
                                ResourceLabel: sdk.String("similique"),
                            },
                            ScaleInCooldown: sdk.Int64(55),
                            ScaleOutCooldown: sdk.Int64(872651),
                            TargetValue: 3118.6,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Bernadette Torp",
                                        Value: "a",
                                    },
                                    shared.MetricDimension{
                                        Name: "Fannie Kub",
                                        Value: "tenetur",
                                    },
                                },
                                MetricName: "amet",
                                Namespace: "tempore",
                                Statistic: shared.MetricStatisticEnumSum,
                                Unit: sdk.String("numquam"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(313692),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumAsgAverageNetworkOut,
                                ResourceLabel: sdk.String("sapiente"),
                            },
                            ScaleInCooldown: sdk.Int64(518201),
                            ScaleOutCooldown: sdk.Int64(471752),
                            TargetValue: 256.62,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Jane Kassulke",
                                        Value: "deserunt",
                                    },
                                    shared.MetricDimension{
                                        Name: "Tracy Gottlieb",
                                        Value: "maxime",
                                    },
                                    shared.MetricDimension{
                                        Name: "Dominic Carroll",
                                        Value: "incidunt",
                                    },
                                },
                                MetricName: "aspernatur",
                                Namespace: "dolores",
                                Statistic: shared.MetricStatisticEnumSampleCount,
                                Unit: sdk.String("facilis"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(396060),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumEcsServiceAverageMemoryUtilization,
                                ResourceLabel: sdk.String("molestias"),
                            },
                            ScaleInCooldown: sdk.Int64(840429),
                            ScaleOutCooldown: sdk.Int64(183280),
                            TargetValue: 2048.65,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "Courtney Cassin",
                                Value: "hic",
                            },
                        },
                        MetricName: "voluptatem",
                        Namespace: "cumque",
                        Statistic: shared.MetricStatisticEnumSampleCount,
                        Unit: sdk.String("nobis"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 92596,
                    MinCapacity: 903720,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalCPUUtilization,
                        ResourceLabel: sdk.String("veritatis"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetMaxCapacityAboveForecastCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(552193),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastOnly.ToPointer(),
                    ResourceID: "cupiditate",
                    ScalableDimension: shared.ScalableDimensionEnumAutoscalingAutoScalingGroupDesiredCapacity,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumReplaceExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(209157),
                    ServiceNamespace: shared.ServiceNamespaceEnumEcs,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Ms. Joe Berge",
                                        Value: "consequatur",
                                    },
                                },
                                MetricName: "est",
                                Namespace: "repellendus",
                                Statistic: shared.MetricStatisticEnumSampleCount,
                                Unit: sdk.String("doloribus"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(281730),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageDatabaseConnections,
                                ResourceLabel: sdk.String("cupiditate"),
                            },
                            ScaleInCooldown: sdk.Int64(181631),
                            ScaleOutCooldown: sdk.Int64(63955),
                            TargetValue: 5123.93,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Jan Schaefer",
                                        Value: "quis",
                                    },
                                    shared.MetricDimension{
                                        Name: "Dixie Klocko",
                                        Value: "tenetur",
                                    },
                                },
                                MetricName: "dignissimos",
                                Namespace: "hic",
                                Statistic: shared.MetricStatisticEnumSampleCount,
                                Unit: sdk.String("quod"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(486160),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageCPUUtilization,
                                ResourceLabel: sdk.String("facilis"),
                            },
                            ScaleInCooldown: sdk.Int64(874288),
                            ScaleOutCooldown: sdk.Int64(498140),
                            TargetValue: 2930.2,
                        },
                    },
                },
            },
            ScalingPlanName: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
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

## DeleteScalingPlan

<p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>

### Example Usage

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
    res, err := s.SDK.DeleteScalingPlan(ctx, operations.DeleteScalingPlanRequest{
        DeleteScalingPlanRequest: shared.DeleteScalingPlanRequest{
            ScalingPlanName: "nulla",
            ScalingPlanVersion: 148141,
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.DeleteScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDeleteScalingPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScalingPlanResponse != nil {
        // handle response
    }
}
```

## DescribeScalingPlanResources

Describes the scalable resources in the specified scaling plan.

### Example Usage

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
    res, err := s.SDK.DescribeScalingPlanResources(ctx, operations.DescribeScalingPlanResourcesRequest{
        DescribeScalingPlanResourcesRequest: shared.DescribeScalingPlanResourcesRequest{
            MaxResults: sdk.Int64(639473),
            NextToken: sdk.String("tempora"),
            ScalingPlanName: "ipsam",
            ScalingPlanVersion: 410492,
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.DescribeScalingPlanResourcesXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScalingPlanResourcesResponse != nil {
        // handle response
    }
}
```

## DescribeScalingPlans

Describes one or more of your scaling plans.

### Example Usage

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
    res, err := s.SDK.DescribeScalingPlans(ctx, operations.DescribeScalingPlansRequest{
        DescribeScalingPlansRequest: shared.DescribeScalingPlansRequest{
            ApplicationSources: []shared.ApplicationSource{
                shared.ApplicationSource{
                    CloudFormationStackARN: sdk.String("dolor"),
                    TagFilters: []shared.TagFilter{
                        shared.TagFilter{
                            Key: sdk.String("quasi"),
                            Values: []string{
                                "nulla",
                                "excepturi",
                            },
                        },
                        shared.TagFilter{
                            Key: sdk.String("voluptatibus"),
                            Values: []string{
                                "sapiente",
                                "quisquam",
                            },
                        },
                        shared.TagFilter{
                            Key: sdk.String("saepe"),
                            Values: []string{
                                "impedit",
                                "corporis",
                            },
                        },
                        shared.TagFilter{
                            Key: sdk.String("veniam"),
                            Values: []string{
                                "inventore",
                                "magnam",
                            },
                        },
                    },
                },
            },
            MaxResults: sdk.Int64(407241),
            NextToken: sdk.String("quo"),
            ScalingPlanNames: []string{
                "recusandae",
            },
            ScalingPlanVersion: sdk.Int64(132487),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeScalingPlansXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDescribeScalingPlans,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScalingPlansResponse != nil {
        // handle response
    }
}
```

## GetScalingPlanResourceForecastData

<p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetScalingPlanResourceForecastData(ctx, operations.GetScalingPlanResourceForecastDataRequest{
        GetScalingPlanResourceForecastDataRequest: shared.GetScalingPlanResourceForecastDataRequest{
            EndTime: types.MustTimeFromString("2022-02-01T11:35:02.584Z"),
            ForecastDataType: shared.ForecastDataTypeEnumCapacityForecast,
            ResourceID: "accusamus",
            ScalableDimension: shared.ScalableDimensionEnumAutoscalingAutoScalingGroupDesiredCapacity,
            ScalingPlanName: "non",
            ScalingPlanVersion: 89603,
            ServiceNamespace: shared.ServiceNamespaceEnumRds,
            StartTime: types.MustTimeFromString("2021-05-19T09:22:11.289Z"),
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.GetScalingPlanResourceForecastDataXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScalingPlanResourceForecastDataResponse != nil {
        // handle response
    }
}
```

## UpdateScalingPlan

<p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

### Example Usage

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
    res, err := s.SDK.UpdateScalingPlan(ctx, operations.UpdateScalingPlanRequest{
        UpdateScalingPlanRequest: shared.UpdateScalingPlanRequest{
            ApplicationSource: &shared.ApplicationSource{
                CloudFormationStackARN: sdk.String("voluptas"),
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: sdk.String("quasi"),
                        Values: []string{
                            "numquam",
                            "explicabo",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("provident"),
                        Values: []string{
                            "molestiae",
                        },
                    },
                    shared.TagFilter{
                        Key: sdk.String("magnam"),
                        Values: []string{
                            "eius",
                            "esse",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "Mitchell Predovic",
                                Value: "eum",
                            },
                            shared.MetricDimension{
                                Name: "Angelina Davis",
                                Value: "veritatis",
                            },
                            shared.MetricDimension{
                                Name: "Amelia Predovic",
                                Value: "illum",
                            },
                        },
                        MetricName: "quo",
                        Namespace: "fuga",
                        Statistic: shared.MetricStatisticEnumMinimum,
                        Unit: sdk.String("eos"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 373813,
                    MinCapacity: 69859,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalNetworkOut,
                        ResourceLabel: sdk.String("consequatur"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetForecastCapacityToMaxCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(892050),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastAndScale.ToPointer(),
                    ResourceID: "aspernatur",
                    ScalableDimension: shared.ScalableDimensionEnumEcsServiceDesiredCount,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumReplaceExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(459856),
                    ServiceNamespace: shared.ServiceNamespaceEnumDynamodb,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Cody Blick",
                                        Value: "accusamus",
                                    },
                                    shared.MetricDimension{
                                        Name: "Courtney Mayert",
                                        Value: "dolores",
                                    },
                                    shared.MetricDimension{
                                        Name: "Fernando Barton",
                                        Value: "quas",
                                    },
                                },
                                MetricName: "praesentium",
                                Namespace: "consequuntur",
                                Statistic: shared.MetricStatisticEnumMaximum,
                                Unit: sdk.String("fugit"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(681393),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumRdsReaderAverageCPUUtilization,
                                ResourceLabel: sdk.String("incidunt"),
                            },
                            ScaleInCooldown: sdk.Int64(539224),
                            ScaleOutCooldown: sdk.Int64(128860),
                            TargetValue: 3256.85,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "Jeannie Cronin",
                                Value: "saepe",
                            },
                            shared.MetricDimension{
                                Name: "Ivan Bosco",
                                Value: "accusamus",
                            },
                        },
                        MetricName: "veritatis",
                        Namespace: "esse",
                        Statistic: shared.MetricStatisticEnumSum,
                        Unit: sdk.String("nam"),
                    },
                    DisableDynamicScaling: sdk.Bool(false),
                    MaxCapacity: 877131,
                    MinCapacity: 399025,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: shared.LoadMetricTypeEnumAsgTotalCPUUtilization,
                        ResourceLabel: sdk.String("saepe"),
                    },
                    PredictiveScalingMaxCapacityBehavior: shared.PredictiveScalingMaxCapacityBehaviorEnumSetMaxCapacityToForecastCapacity.ToPointer(),
                    PredictiveScalingMaxCapacityBuffer: sdk.Int64(690025),
                    PredictiveScalingMode: shared.PredictiveScalingModeEnumForecastAndScale.ToPointer(),
                    ResourceID: "rerum",
                    ScalableDimension: shared.ScalableDimensionEnumDynamodbTableReadCapacityUnits,
                    ScalingPolicyUpdateBehavior: shared.ScalingPolicyUpdateBehaviorEnumKeepExternalPolicies.ToPointer(),
                    ScheduledActionBufferTime: sdk.Int64(716244),
                    ServiceNamespace: shared.ServiceNamespaceEnumRds,
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "Chad Runolfsson DDS",
                                        Value: "quaerat",
                                    },
                                    shared.MetricDimension{
                                        Name: "Glenn Koch",
                                        Value: "a",
                                    },
                                    shared.MetricDimension{
                                        Name: "Dr. Clifton Koch",
                                        Value: "sint",
                                    },
                                },
                                MetricName: "pariatur",
                                Namespace: "possimus",
                                Statistic: shared.MetricStatisticEnumAverage,
                                Unit: sdk.String("eveniet"),
                            },
                            DisableScaleIn: sdk.Bool(false),
                            EstimatedInstanceWarmup: sdk.Int64(992430),
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: shared.ScalingMetricTypeEnumEc2SpotFleetRequestAverageCPUUtilization,
                                ResourceLabel: sdk.String("veritatis"),
                            },
                            ScaleInCooldown: sdk.Int64(159414),
                            ScaleOutCooldown: sdk.Int64(94458),
                            TargetValue: 6288.99,
                        },
                    },
                },
            },
            ScalingPlanName: "culpa",
            ScalingPlanVersion: 398434,
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.UpdateScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceUpdateScalingPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateScalingPlanResponse != nil {
        // handle response
    }
}
```
