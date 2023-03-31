<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateScalingPlanXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateScalingPlanHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateScalingPlanRequest req = new CreateScalingPlanRequest() {{
                headers = new CreateScalingPlanHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan";
                }};
                request = new CreateScalingPlanRequest() {{
                    applicationSource = new ApplicationSource() {{
                        cloudFormationStackARN = "illum";
                        tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                            add(new TagFilter() {{
                                key = "error";
                                values = new String[]{{
                                    add("suscipit"),
                                    add("iure"),
                                    add("magnam"),
                                }};
                            }}),
                            add(new TagFilter() {{
                                key = "debitis";
                                values = new String[]{{
                                    add("delectus"),
                                }};
                            }}),
                        }};
                    }};
                    scalingInstructions = new org.openapis.openapi.models.shared.ScalingInstruction[]{{
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                    add(new MetricDimension() {{
                                        name = "molestiae";
                                        value = "minus";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "placeat";
                                        value = "voluptatum";
                                    }}),
                                }};
                                metricName = "iusto";
                                namespace = "excepturi";
                                statistic = "Minimum";
                                unit = "recusandae";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 836079;
                            minCapacity = 71036;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalNetworkIn";
                                resourceLabel = "veritatis";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetMaxCapacityToForecastCapacity";
                            predictiveScalingMaxCapacityBuffer = 20218;
                            predictiveScalingMode = "ForecastAndScale";
                            resourceId = "repellendus";
                            scalableDimension = "dynamodb:index:WriteCapacityUnits";
                            scalingPolicyUpdateBehavior = "ReplaceExternalPolicies";
                            scheduledActionBufferTime = 140350;
                            serviceNamespace = "dynamodb";
                            targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "molestiae";
                                                value = "quod";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "quod";
                                                value = "esse";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "totam";
                                                value = "porro";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "dolorum";
                                                value = "dicta";
                                            }}),
                                        }};
                                        metricName = "nam";
                                        namespace = "officia";
                                        statistic = "Maximum";
                                        unit = "fugit";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 537373;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageNetworkOut";
                                        resourceLabel = "optio";
                                    }};
                                    scaleInCooldown = 521848;
                                    scaleOutCooldown = 105907;
                                    targetValue = 4146.62;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "modi";
                                                value = "qui";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "impedit";
                                                value = "cum";
                                            }}),
                                        }};
                                        metricName = "esse";
                                        namespace = "ipsum";
                                        statistic = "Maximum";
                                        unit = "aspernatur";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 18789;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "DynamoDBWriteCapacityUtilization";
                                        resourceLabel = "natus";
                                    }};
                                    scaleInCooldown = 149675;
                                    scaleOutCooldown = 612096;
                                    targetValue = 2223.21;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "laboriosam";
                                                value = "hic";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "saepe";
                                                value = "fuga";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "in";
                                                value = "corporis";
                                            }}),
                                        }};
                                        metricName = "iste";
                                        namespace = "iure";
                                        statistic = "Sum";
                                        unit = "quidem";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 99280;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ASGAverageCPUUtilization";
                                        resourceLabel = "reiciendis";
                                    }};
                                    scaleInCooldown = 666767;
                                    scaleOutCooldown = 653140;
                                    targetValue = 6706.38;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "dolorem";
                                                value = "corporis";
                                            }}),
                                        }};
                                        metricName = "explicabo";
                                        namespace = "nobis";
                                        statistic = "Minimum";
                                        unit = "omnis";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 363711;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "DynamoDBWriteCapacityUtilization";
                                        resourceLabel = "excepturi";
                                    }};
                                    scaleInCooldown = 38425;
                                    scaleOutCooldown = 438601;
                                    targetValue = 6342.74;
                                }}),
                            }};
                        }}),
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                    add(new MetricDimension() {{
                                        name = "sapiente";
                                        value = "architecto";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "mollitia";
                                        value = "dolorem";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "culpa";
                                        value = "consequuntur";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "repellat";
                                        value = "mollitia";
                                    }}),
                                }};
                                metricName = "occaecati";
                                namespace = "numquam";
                                statistic = "Maximum";
                                unit = "quam";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 474697;
                            minCapacity = 244425;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalNetworkOut";
                                resourceLabel = "quia";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetMaxCapacityToForecastCapacity";
                            predictiveScalingMaxCapacityBuffer = 110375;
                            predictiveScalingMode = "ForecastOnly";
                            resourceId = "animi";
                            scalableDimension = "ec2:spot-fleet-request:TargetCapacity";
                            scalingPolicyUpdateBehavior = "KeepExternalPolicies";
                            scheduledActionBufferTime = 778346;
                            serviceNamespace = "autoscaling";
                            targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "id";
                                                value = "possimus";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "aut";
                                                value = "quasi";
                                            }}),
                                        }};
                                        metricName = "error";
                                        namespace = "temporibus";
                                        statistic = "SampleCount";
                                        unit = "quasi";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 971945;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageNetworkOut";
                                        resourceLabel = "vero";
                                    }};
                                    scaleInCooldown = 468651;
                                    scaleOutCooldown = 509624;
                                    targetValue = 9767.62;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "omnis";
                                                value = "voluptate";
                                            }}),
                                        }};
                                        metricName = "cum";
                                        namespace = "perferendis";
                                        statistic = "Average";
                                        unit = "reprehenderit";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 282807;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageNetworkOut";
                                        resourceLabel = "dicta";
                                    }};
                                    scaleInCooldown = 359444;
                                    scaleOutCooldown = 296140;
                                    targetValue = 4808.94;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "harum";
                                                value = "enim";
                                            }}),
                                        }};
                                        metricName = "accusamus";
                                        namespace = "commodi";
                                        statistic = "Sum";
                                        unit = "quae";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 216822;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "RDSReaderAverageDatabaseConnections";
                                        resourceLabel = "molestias";
                                    }};
                                    scaleInCooldown = 566602;
                                    scaleOutCooldown = 865103;
                                    targetValue = 2653.89;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                            add(new MetricDimension() {{
                                                name = "rem";
                                                value = "voluptates";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "quasi";
                                                value = "repudiandae";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "sint";
                                                value = "veritatis";
                                            }}),
                                        }};
                                        metricName = "itaque";
                                        namespace = "incidunt";
                                        statistic = "Minimum";
                                        unit = "consequatur";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 667411;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageCPUUtilization";
                                        resourceLabel = "explicabo";
                                    }};
                                    scaleInCooldown = 647174;
                                    scaleOutCooldown = 716327;
                                    targetValue = 8413.86;
                                }}),
                            }};
                        }}),
                    }};
                    scalingPlanName = "labore";
                }};
            }};            

            CreateScalingPlanResponse res = sdk.createScalingPlan(req);

            if (res.createScalingPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->