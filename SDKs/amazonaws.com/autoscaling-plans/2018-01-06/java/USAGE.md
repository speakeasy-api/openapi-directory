<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateScalingPlanRequest req = new CreateScalingPlanRequest() {{
                headers = new CreateScalingPlanHeaders() {{
                    xAmzAlgorithm = "doloribus";
                    xAmzContentSha256 = "necessitatibus";
                    xAmzCredential = "aliquam";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "sint";
                    xAmzSignature = "eos";
                    xAmzSignedHeaders = "officia";
                    xAmzTarget = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan";
                }};
                request = new CreateScalingPlanRequest() {{
                    applicationSource = new ApplicationSource() {{
                        cloudFormationStackARN = "sit";
                        tagFilters = new openapisdk.models.shared.TagFilter[]() {{
                            add(new TagFilter() {{
                                key = "earum";
                                values = new String[]() {{
                                    add("assumenda"),
                                }};
                            }}),
                        }};
                    }};
                    scalingInstructions = new openapisdk.models.shared.ScalingInstruction[]() {{
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                    add(new MetricDimension() {{
                                        name = "in";
                                        value = "repellendus";
                                    }}),
                                }};
                                metricName = "repudiandae";
                                namespace = "sed";
                                statistic = "Average";
                                unit = "cum";
                            }};
                            disableDynamicScaling = true;
                            maxCapacity = 2532597011683728087;
                            minCapacity = 8028815005489571747;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalNetworkIn";
                                resourceLabel = "nisi";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetForecastCapacityToMaxCapacity";
                            predictiveScalingMaxCapacityBuffer = 1940187917623811174;
                            predictiveScalingMode = "ForecastOnly";
                            resourceId = "est";
                            scalableDimension = "dynamodb:index:ReadCapacityUnits";
                            scalingPolicyUpdateBehavior = "KeepExternalPolicies";
                            scheduledActionBufferTime = 1713996192319931980;
                            serviceNamespace = "autoscaling";
                            targetTrackingConfigurations = new openapisdk.models.shared.TargetTrackingConfiguration[]() {{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "voluptate";
                                                value = "ut";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "inventore";
                                                value = "et";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "enim";
                                                value = "minima";
                                            }}),
                                        }};
                                        metricName = "hic";
                                        namespace = "cumque";
                                        statistic = "Maximum";
                                        unit = "quasi";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 2432923324136795944;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageCPUUtilization";
                                        resourceLabel = "nisi";
                                    }};
                                    scaleInCooldown = 4972956926970340934;
                                    scaleOutCooldown = 3723469953046556180;
                                    targetValue = 14.100000;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "quo";
                                                value = "non";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "a";
                                                value = "mollitia";
                                            }}),
                                        }};
                                        metricName = "dolorum";
                                        namespace = "at";
                                        statistic = "Maximum";
                                        unit = "aut";
                                    }};
                                    disableScaleIn = true;
                                    estimatedInstanceWarmup = 4531580916635252633;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ASGAverageNetworkIn";
                                        resourceLabel = "labore";
                                    }};
                                    scaleInCooldown = 1535639556352868980;
                                    scaleOutCooldown = 8955779660177681159;
                                    targetValue = 74.199997;
                                }}),
                            }};
                        }}),
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                    add(new MetricDimension() {{
                                        name = "ratione";
                                        value = "voluptatem";
                                    }}),
                                }};
                                metricName = "sit";
                                namespace = "eum";
                                statistic = "Average";
                                unit = "expedita";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 8872633733247291586;
                            minCapacity = 2223670193668799695;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalCPUUtilization";
                                resourceLabel = "nulla";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetForecastCapacityToMaxCapacity";
                            predictiveScalingMaxCapacityBuffer = 8229745102967699455;
                            predictiveScalingMode = "ForecastOnly";
                            resourceId = "dolor";
                            scalableDimension = "rds:cluster:ReadReplicaCount";
                            scalingPolicyUpdateBehavior = "ReplaceExternalPolicies";
                            scheduledActionBufferTime = 4935670796153673020;
                            serviceNamespace = "autoscaling";
                            targetTrackingConfigurations = new openapisdk.models.shared.TargetTrackingConfiguration[]() {{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "dolores";
                                                value = "quaerat";
                                            }}),
                                        }};
                                        metricName = "iste";
                                        namespace = "harum";
                                        statistic = "Maximum";
                                        unit = "natus";
                                    }};
                                    disableScaleIn = true;
                                    estimatedInstanceWarmup = 4101734553074821155;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageNetworkOut";
                                        resourceLabel = "expedita";
                                    }};
                                    scaleInCooldown = 2935226858963760426;
                                    scaleOutCooldown = 3585591606309161877;
                                    targetValue = 27.100000;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "commodi";
                                                value = "tenetur";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "et";
                                                value = "sed";
                                            }}),
                                        }};
                                        metricName = "saepe";
                                        namespace = "sit";
                                        statistic = "Average";
                                        unit = "voluptate";
                                    }};
                                    disableScaleIn = true;
                                    estimatedInstanceWarmup = 4433816511744504618;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ALBRequestCountPerTarget";
                                        resourceLabel = "facere";
                                    }};
                                    scaleInCooldown = 1958515401632262794;
                                    scaleOutCooldown = 1608782168285273117;
                                    targetValue = 16.100000;
                                }}),
                            }};
                        }}),
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                    add(new MetricDimension() {{
                                        name = "nostrum";
                                        value = "et";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "eum";
                                        value = "aut";
                                    }}),
                                }};
                                metricName = "beatae";
                                namespace = "incidunt";
                                statistic = "Average";
                                unit = "a";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 2840221116841027537;
                            minCapacity = 1450424072144671877;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalNetworkIn";
                                resourceLabel = "sunt";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetForecastCapacityToMaxCapacity";
                            predictiveScalingMaxCapacityBuffer = 6039161625972230315;
                            predictiveScalingMode = "ForecastAndScale";
                            resourceId = "non";
                            scalableDimension = "ec2:spot-fleet-request:TargetCapacity";
                            scalingPolicyUpdateBehavior = "KeepExternalPolicies";
                            scheduledActionBufferTime = 2363619035225420429;
                            serviceNamespace = "autoscaling";
                            targetTrackingConfigurations = new openapisdk.models.shared.TargetTrackingConfiguration[]() {{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "temporibus";
                                                value = "voluptas";
                                            }}),
                                        }};
                                        metricName = "tempora";
                                        namespace = "voluptatem";
                                        statistic = "Minimum";
                                        unit = "eum";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 6050441218909099379;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "DynamoDBWriteCapacityUtilization";
                                        resourceLabel = "ab";
                                    }};
                                    scaleInCooldown = 279650548062880195;
                                    scaleOutCooldown = 1031912478290035631;
                                    targetValue = 93.199997;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "sit";
                                                value = "quibusdam";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "dolore";
                                                value = "ut";
                                            }}),
                                            add(new MetricDimension() {{
                                                name = "deserunt";
                                                value = "est";
                                            }}),
                                        }};
                                        metricName = "cupiditate";
                                        namespace = "culpa";
                                        statistic = "Minimum";
                                        unit = "veniam";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 692921154198776483;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ECSServiceAverageMemoryUtilization";
                                        resourceLabel = "minus";
                                    }};
                                    scaleInCooldown = 1868821202122697832;
                                    scaleOutCooldown = 5484631603520417470;
                                    targetValue = 95.099998;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "dolor";
                                                value = "nihil";
                                            }}),
                                        }};
                                        metricName = "error";
                                        namespace = "sunt";
                                        statistic = "SampleCount";
                                        unit = "sed";
                                    }};
                                    disableScaleIn = true;
                                    estimatedInstanceWarmup = 834755006764273154;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ASGAverageCPUUtilization";
                                        resourceLabel = "eaque";
                                    }};
                                    scaleInCooldown = 404459533781805632;
                                    scaleOutCooldown = 8133641788294793621;
                                    targetValue = 99.099998;
                                }}),
                            }};
                        }}),
                    }};
                    scalingPlanName = "voluptate";
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