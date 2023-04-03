<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateScalingPlanXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateScalingPlanRequest;
import org.openapis.openapi.models.operations.CreateScalingPlanResponse;
import org.openapis.openapi.models.shared.CreateScalingPlanRequest;
import org.openapis.openapi.models.shared.ScalingInstruction;
import org.openapis.openapi.models.shared.TargetTrackingConfiguration;
import org.openapis.openapi.models.shared.PredefinedScalingMetricSpecification;
import org.openapis.openapi.models.shared.ScalingMetricTypeEnum;
import org.openapis.openapi.models.shared.CustomizedScalingMetricSpecification;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;
import org.openapis.openapi.models.shared.ScalingPolicyUpdateBehaviorEnum;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.PredictiveScalingModeEnum;
import org.openapis.openapi.models.shared.PredictiveScalingMaxCapacityBehaviorEnum;
import org.openapis.openapi.models.shared.PredefinedLoadMetricSpecification;
import org.openapis.openapi.models.shared.LoadMetricTypeEnum;
import org.openapis.openapi.models.shared.CustomizedLoadMetricSpecification;
import org.openapis.openapi.models.shared.ApplicationSource;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScalingPlanRequest req = new CreateScalingPlanRequest() {{
                createScalingPlanRequest = new CreateScalingPlanRequest() {{
                    applicationSource = new ApplicationSource() {{
                        cloudFormationStackARN = "corrupti";
                        tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                            add(new TagFilter() {{
                                key = "distinctio";
                                values = new String[]{{
                                    add("unde"),
                                    add("nulla"),
                                    add("corrupti"),
                                    add("illum"),
                                }};
                            }}),
                            add(new TagFilter() {{
                                key = "vel";
                                values = new String[]{{
                                    add("deserunt"),
                                    add("suscipit"),
                                    add("iure"),
                                }};
                            }}),
                            add(new TagFilter() {{
                                key = "magnam";
                                values = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                            }}),
                        }};
                    }};
                    scalingInstructions = new org.openapis.openapi.models.shared.ScalingInstruction[]{{
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                    add(new MetricDimension() {{
                                        name = "placeat";
                                        value = "voluptatum";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "iusto";
                                        value = "excepturi";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "nisi";
                                        value = "recusandae";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "temporibus";
                                        value = "ab";
                                    }}),
                                }};
                                metricName = "quis";
                                namespace = "veritatis";
                                statistic = "SampleCount";
                                unit = "perferendis";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 368241;
                            minCapacity = 832620;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ALBTargetGroupRequestCount";
                                resourceLabel = "quo";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetForecastCapacityToMaxCapacity";
                            predictiveScalingMaxCapacityBuffer = 870013;
                            predictiveScalingMode = "ForecastOnly";
                            resourceId = "maiores";
                            scalableDimension = "rds:cluster:ReadReplicaCount";
                            scalingPolicyUpdateBehavior = "ReplaceExternalPolicies";
                            scheduledActionBufferTime = 800911;
                            serviceNamespace = "ec2";
                            targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "dolorum";
                                                value = "dicta";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "nam";
                                                value = "officia";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "occaecati";
                                                value = "fugit";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "deleniti";
                                                value = "hic";
                                            }}),
                                        }};
                                        metricName = "optio";
                                        namespace = "totam";
                                        statistic = "Average";
                                        unit = "commodi";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 473600;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "DynamoDBReadCapacityUtilization";
                                        resourceLabel = "qui";
                                    }};
                                    scaleInCooldown = 774234;
                                    scaleOutCooldown = 736918;
                                    targetValue = 4561.5;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "excepturi";
                                                value = "aspernatur";
                                            }}),
                                        }};
                                        metricName = "perferendis";
                                        namespace = "ad";
                                        statistic = "SampleCount";
                                        unit = "sed";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 612096;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ASGAverageNetworkOut";
                                        resourceLabel = "natus";
                                    }};
                                    scaleInCooldown = 386489;
                                    scaleOutCooldown = 943749;
                                    targetValue = 9025.99;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "in";
                                                value = "corporis";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "iste";
                                                value = "iure";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "saepe";
                                                value = "quidem";
                                            }}),
                                        }};
                                        metricName = "architecto";
                                        namespace = "ipsa";
                                        statistic = "Sum";
                                        unit = "est";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 653140;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "RDSReaderAverageCPUUtilization";
                                        resourceLabel = "dolores";
                                    }};
                                    scaleInCooldown = 210382;
                                    scaleOutCooldown = 358152;
                                    targetValue = 1289.26;
                                }}),
                            }};
                        }}),
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                    add(new MetricDimension() {{
                                        name = "enim";
                                        value = "omnis";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "nemo";
                                        value = "minima";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "excepturi";
                                        value = "accusantium";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "iure";
                                        value = "culpa";
                                    }}),
                                }};
                                metricName = "doloribus";
                                namespace = "sapiente";
                                statistic = "Average";
                                unit = "mollitia";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 208876;
                            minCapacity = 635059;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalCPUUtilization";
                                resourceLabel = "repellat";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetMaxCapacityToForecastCapacity";
                            predictiveScalingMaxCapacityBuffer = 581850;
                            predictiveScalingMode = "ForecastAndScale";
                            resourceId = "commodi";
                            scalableDimension = "rds:cluster:ReadReplicaCount";
                            scalingPolicyUpdateBehavior = "KeepExternalPolicies";
                            scheduledActionBufferTime = 244425;
                            serviceNamespace = "rds";
                            targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "vitae";
                                                value = "laborum";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "animi";
                                                value = "enim";
                                            }}),
                                        }};
                                        metricName = "odit";
                                        namespace = "quo";
                                        statistic = "Average";
                                        unit = "tenetur";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 368725;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "RDSReaderAverageCPUUtilization";
                                        resourceLabel = "possimus";
                                    }};
                                    scaleInCooldown = 13571;
                                    scaleOutCooldown = 97101;
                                    targetValue = 6228.46;
                                }}),
                            }};
                        }}),
                    }};
                    scalingPlanName = "temporibus";
                }};
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
                xAmzTarget = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan";
            }}            

            CreateScalingPlanResponse res = sdk.createScalingPlan(req);

            if (res.createScalingPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->