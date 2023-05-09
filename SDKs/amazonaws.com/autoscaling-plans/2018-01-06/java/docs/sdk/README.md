# SDK

## Overview

<fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources. </p> <p> <b>API Summary</b> </p> <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p> <ul> <li> <p>Create and manage scaling plans</p> </li> <li> <p>Define target tracking scaling policies to dynamically scale your resources based on utilization</p> </li> <li> <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster</p> </li> <li> <p>Set minimum and maximum capacity limits</p> </li> <li> <p>Retrieve information on existing scaling plans</p> </li> <li> <p>Access current forecast data and historical forecast data for up to 56 days previous</p> </li> </ul> <p>To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/autoscaling-plans/>
### Available Operations

* [createScalingPlan](#createscalingplan) - Creates a scaling plan. 
* [deleteScalingPlan](#deletescalingplan) - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* [describeScalingPlanResources](#describescalingplanresources) - Describes the scalable resources in the specified scaling plan.
* [describeScalingPlans](#describescalingplans) - Describes one or more of your scaling plans.
* [getScalingPlanResourceForecastData](#getscalingplanresourceforecastdata) - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* [updateScalingPlan](#updatescalingplan) - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

## createScalingPlan

Creates a scaling plan. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScalingPlanRequest;
import org.openapis.openapi.models.operations.CreateScalingPlanResponse;
import org.openapis.openapi.models.operations.CreateScalingPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationSource;
import org.openapis.openapi.models.shared.CreateScalingPlanRequest;
import org.openapis.openapi.models.shared.CustomizedLoadMetricSpecification;
import org.openapis.openapi.models.shared.CustomizedScalingMetricSpecification;
import org.openapis.openapi.models.shared.LoadMetricTypeEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.PredefinedLoadMetricSpecification;
import org.openapis.openapi.models.shared.PredefinedScalingMetricSpecification;
import org.openapis.openapi.models.shared.PredictiveScalingMaxCapacityBehaviorEnum;
import org.openapis.openapi.models.shared.PredictiveScalingModeEnum;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.ScalingInstruction;
import org.openapis.openapi.models.shared.ScalingMetricTypeEnum;
import org.openapis.openapi.models.shared.ScalingPolicyUpdateBehaviorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.TargetTrackingConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScalingPlanRequest req = new CreateScalingPlanRequest(                new CreateScalingPlanRequest(                new ApplicationSource() {{
                                                cloudFormationStackARN = "quaerat";
                                                tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                                    add(new TagFilter() {{
                                                        key = "vel";
                                                        values = new String[]{{
                                                            add("officiis"),
                                                            add("qui"),
                                                            add("dolorum"),
                                                            add("a"),
                                                        }};
                                                    }}),
                                                    add(new TagFilter() {{
                                                        key = "esse";
                                                        values = new String[]{{
                                                            add("iusto"),
                                                            add("ipsum"),
                                                            add("quisquam"),
                                                        }};
                                                    }}),
                                                }};
                                            }};,                 new org.openapis.openapi.models.shared.ScalingInstruction[]{{
                                                add(new ScalingInstruction(749255L, 552193L, "tempore", ScalableDimensionEnum.DYNAMODB_TABLE_READ_CAPACITY_UNITS, ServiceNamespaceEnum.AUTOSCALING,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                                    add(new TargetTrackingConfiguration(7875.42) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("doloribus", "ut", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("quas", "itaque") {{
                                                                                    name = "Clara Fisher Jr.";
                                                                                    value = "aut";
                                                                                }}),
                                                                            }};
                                                                            metricName = "consequatur";
                                                                            namespace = "est";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "porro";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 586410L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT;
                                                                            resourceLabel = "quae";
                                                                        }};
                                                                        scaleInCooldown = 485628L;
                                                                        scaleOutCooldown = 580447L;
                                                                        targetValue = 9774.96;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(1206.57) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("tempora", "ipsam", MetricStatisticEnum.MAXIMUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("vero", "tenetur") {{
                                                                                    name = "Tim Erdman";
                                                                                    value = "consectetur";
                                                                                }}),
                                                                                add(new MetricDimension("facilis", "vero") {{
                                                                                    name = "Darla Rau";
                                                                                    value = "similique";
                                                                                }}),
                                                                                add(new MetricDimension("impedit", "aut") {{
                                                                                    name = "Joanne Sporer";
                                                                                    value = "natus";
                                                                                }}),
                                                                                add(new MetricDimension("doloribus", "iusto") {{
                                                                                    name = "Greg Stoltenberg";
                                                                                    value = "maiores";
                                                                                }}),
                                                                            }};
                                                                            metricName = "eligendi";
                                                                            namespace = "ducimus";
                                                                            statistic = MetricStatisticEnum.AVERAGE;
                                                                            unit = "officia";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 136900L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                                            resourceLabel = "possimus";
                                                                        }};
                                                                        scaleInCooldown = 189848L;
                                                                        scaleOutCooldown = 401132L;
                                                                        targetValue = 5113.19;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(3253.1) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("corporis", "veniam", MetricStatisticEnum.MINIMUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("nostrum", "sapiente") {{
                                                                                    name = "Ryan Jaskolski";
                                                                                    value = "voluptatibus";
                                                                                }}),
                                                                            }};
                                                                            metricName = "quisquam";
                                                                            namespace = "saepe";
                                                                            statistic = MetricStatisticEnum.MAXIMUM;
                                                                            unit = "impedit";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 81101L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION;
                                                                            resourceLabel = "ea";
                                                                        }};
                                                                        scaleInCooldown = 232234L;
                                                                        scaleOutCooldown = 926213L;
                                                                        targetValue = 1324.87;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(7270.44) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("laborum", "placeat", MetricStatisticEnum.MINIMUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("fugit", "accusamus") {{
                                                                                    name = "Ms. Marco Ankunding";
                                                                                    value = "aliquam";
                                                                                }}),
                                                                            }};
                                                                            metricName = "inventore";
                                                                            namespace = "non";
                                                                            statistic = MetricStatisticEnum.AVERAGE;
                                                                            unit = "dolorum";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 432148L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ALB_REQUEST_COUNT_PER_TARGET) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                                            resourceLabel = "nobis";
                                                                        }};
                                                                        scaleInCooldown = 829603L;
                                                                        scaleOutCooldown = 860552L;
                                                                        targetValue = 3790.34;
                                                                    }}),
                                                                }}) {{
                                                    customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("vel", "libero", MetricStatisticEnum.MINIMUM) {{
                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                            add(new MetricDimension("totam", "nihil") {{
                                                                name = "Tomas Funk";
                                                                value = "sapiente";
                                                            }}),
                                                        }};
                                                        metricName = "sit";
                                                        namespace = "expedita";
                                                        statistic = MetricStatisticEnum.MINIMUM;
                                                        unit = "sed";
                                                    }};
                                                    disableDynamicScaling = false;
                                                    maxCapacity = 646265L;
                                                    minCapacity = 463575L;
                                                    predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_CPU_UTILIZATION) {{
                                                        predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_CPU_UTILIZATION;
                                                        resourceLabel = "incidunt";
                                                    }};
                                                    predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_MAX_CAPACITY_TO_FORECAST_CAPACITY;
                                                    predictiveScalingMaxCapacityBuffer = 807581L;
                                                    predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_ONLY;
                                                    resourceId = "soluta";
                                                    scalableDimension = ScalableDimensionEnum.AUTOSCALING_AUTO_SCALING_GROUP_DESIRED_CAPACITY;
                                                    scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.REPLACE_EXTERNAL_POLICIES;
                                                    scheduledActionBufferTime = 517379L;
                                                    serviceNamespace = ServiceNamespaceEnum.ECS;
                                                    targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(834.22) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("ullam", "nam", MetricStatisticEnum.SUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("qui", "neque") {{
                                                                        name = "Cesar Hyatt";
                                                                        value = "temporibus";
                                                                    }}),
                                                                }};
                                                                metricName = "fugit";
                                                                namespace = "magni";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "sunt";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 30452L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS;
                                                                resourceLabel = "soluta";
                                                            }};
                                                            scaleInCooldown = 92596L;
                                                            scaleOutCooldown = 903720L;
                                                            targetValue = 2174.5;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new ScalingInstruction(839513L, 33074L, "rem", ScalableDimensionEnum.AUTOSCALING_AUTO_SCALING_GROUP_DESIRED_CAPACITY, ServiceNamespaceEnum.EC2,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                                    add(new TargetTrackingConfiguration(2460.63) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("quae", "quaerat", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("impedit", "explicabo") {{
                                                                                    name = "Mrs. Priscilla Fritsch";
                                                                                    value = "numquam";
                                                                                }}),
                                                                                add(new MetricDimension("voluptatibus", "voluptas") {{
                                                                                    name = "Dr. Maria Kulas";
                                                                                    value = "velit";
                                                                                }}),
                                                                                add(new MetricDimension("officia", "maxime") {{
                                                                                    name = "Kevin Jast";
                                                                                    value = "repellendus";
                                                                                }}),
                                                                            }};
                                                                            metricName = "dignissimos";
                                                                            namespace = "officia";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "nemo";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 801836L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION;
                                                                            resourceLabel = "ab";
                                                                        }};
                                                                        scaleInCooldown = 683573L;
                                                                        scaleOutCooldown = 662505L;
                                                                        targetValue = 3807.29;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(2282.63) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("suscipit", "reiciendis", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("quos", "vel") {{
                                                                                    name = "Clay Larson";
                                                                                    value = "ducimus";
                                                                                }}),
                                                                                add(new MetricDimension("corporis", "reiciendis") {{
                                                                                    name = "Elena Quigley";
                                                                                    value = "in";
                                                                                }}),
                                                                                add(new MetricDimension("in", "exercitationem") {{
                                                                                    name = "Corey Walsh DDS";
                                                                                    value = "consectetur";
                                                                                }}),
                                                                            }};
                                                                            metricName = "earum";
                                                                            namespace = "facere";
                                                                            statistic = MetricStatisticEnum.MINIMUM;
                                                                            unit = "doloribus";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 904949L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN;
                                                                            resourceLabel = "dolore";
                                                                        }};
                                                                        scaleInCooldown = 992012L;
                                                                        scaleOutCooldown = 241545L;
                                                                        targetValue = 2494.2;
                                                                    }}),
                                                                }}) {{
                                                    customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("reprehenderit", "quidem", MetricStatisticEnum.SUM) {{
                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                            add(new MetricDimension("odio", "eius") {{
                                                                name = "Carrie Cole IV";
                                                                value = "magnam";
                                                            }}),
                                                        }};
                                                        metricName = "esse";
                                                        namespace = "esse";
                                                        statistic = MetricStatisticEnum.MAXIMUM;
                                                        unit = "fuga";
                                                    }};
                                                    disableDynamicScaling = false;
                                                    maxCapacity = 283519L;
                                                    minCapacity = 433439L;
                                                    predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_CPU_UTILIZATION) {{
                                                        predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_NETWORK_IN;
                                                        resourceLabel = "assumenda";
                                                    }};
                                                    predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_MAX_CAPACITY_TO_FORECAST_CAPACITY;
                                                    predictiveScalingMaxCapacityBuffer = 788546L;
                                                    predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_AND_SCALE;
                                                    resourceId = "ipsa";
                                                    scalableDimension = ScalableDimensionEnum.DYNAMODB_TABLE_WRITE_CAPACITY_UNITS;
                                                    scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.REPLACE_EXTERNAL_POLICIES;
                                                    scheduledActionBufferTime = 206594L;
                                                    serviceNamespace = ServiceNamespaceEnum.RDS;
                                                    targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(9564.06) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("deleniti", "fugit", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("tempora", "debitis") {{
                                                                        name = "Herbert Daugherty V";
                                                                        value = "consequatur";
                                                                    }}),
                                                                    add(new MetricDimension("aperiam", "distinctio") {{
                                                                        name = "Kelly Donnelly";
                                                                        value = "recusandae";
                                                                    }}),
                                                                    add(new MetricDimension("aliquam", "odio") {{
                                                                        name = "Cody Blick";
                                                                        value = "accusamus";
                                                                    }}),
                                                                    add(new MetricDimension("accusantium", "porro") {{
                                                                        name = "Leslie Williamson";
                                                                        value = "molestiae";
                                                                    }}),
                                                                }};
                                                                metricName = "eum";
                                                                namespace = "quas";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "consequuntur";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 649463L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION;
                                                                resourceLabel = "atque";
                                                            }};
                                                            scaleInCooldown = 325685L;
                                                            scaleOutCooldown = 392676L;
                                                            targetValue = 1470.14;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(3277.2) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("nam", "vero", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("esse", "eveniet") {{
                                                                        name = "Rose Turner";
                                                                        value = "et";
                                                                    }}),
                                                                }};
                                                                metricName = "accusamus";
                                                                namespace = "veritatis";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "quod";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 93459L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN;
                                                                resourceLabel = "vel";
                                                            }};
                                                            scaleInCooldown = 473221L;
                                                            scaleOutCooldown = 699622L;
                                                            targetValue = 5801.97;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(4473.78) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("veritatis", "consequuntur", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("consequuntur", "consequatur") {{
                                                                        name = "Mark Nicolas";
                                                                        value = "cumque";
                                                                    }}),
                                                                    add(new MetricDimension("provident", "a") {{
                                                                        name = "Calvin Williamson";
                                                                        value = "blanditiis";
                                                                    }}),
                                                                    add(new MetricDimension("pariatur", "possimus") {{
                                                                        name = "Dr. Clifton Koch";
                                                                        value = "sint";
                                                                    }}),
                                                                }};
                                                                metricName = "quia";
                                                                namespace = "eveniet";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "facere";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 628899L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "aliquid";
                                                            }};
                                                            scaleInCooldown = 62713L;
                                                            scaleOutCooldown = 936747L;
                                                            targetValue = 4240.32;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(6144.65) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("tenetur", "quasi", MetricStatisticEnum.SUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("ullam", "reprehenderit") {{
                                                                        name = "Mrs. Gilberto Roberts";
                                                                        value = "dicta";
                                                                    }}),
                                                                    add(new MetricDimension("ex", "deleniti") {{
                                                                        name = "Alma Armstrong";
                                                                        value = "quibusdam";
                                                                    }}),
                                                                }};
                                                                metricName = "itaque";
                                                                namespace = "dolorum";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "omnis";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 92027L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "ipsa";
                                                            }};
                                                            scaleInCooldown = 86532L;
                                                            scaleOutCooldown = 232744L;
                                                            targetValue = 2371.73;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new ScalingInstruction(790840L, 919532L, "quasi", ScalableDimensionEnum.DYNAMODB_TABLE_READ_CAPACITY_UNITS, ServiceNamespaceEnum.EC2,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                                    add(new TargetTrackingConfiguration(3891.35) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("repellendus", "labore", MetricStatisticEnum.SUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("ea", "atque") {{
                                                                                    name = "Ms. Alison Schoen";
                                                                                    value = "assumenda";
                                                                                }}),
                                                                                add(new MetricDimension("aspernatur", "ex") {{
                                                                                    name = "Frankie Torphy";
                                                                                    value = "minima";
                                                                                }}),
                                                                                add(new MetricDimension("repudiandae", "atque") {{
                                                                                    name = "Johnnie Swaniawski";
                                                                                    value = "suscipit";
                                                                                }}),
                                                                            }};
                                                                            metricName = "atque";
                                                                            namespace = "sunt";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "dolorum";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 42976L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_CPU_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN;
                                                                            resourceLabel = "dicta";
                                                                        }};
                                                                        scaleInCooldown = 106429L;
                                                                        scaleOutCooldown = 174772L;
                                                                        targetValue = 3164.88;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(2473.99) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("consequuntur", "fugit", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("officiis", "perspiciatis") {{
                                                                                    name = "Ross Gusikowski";
                                                                                    value = "occaecati";
                                                                                }}),
                                                                            }};
                                                                            metricName = "in";
                                                                            namespace = "adipisci";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "occaecati";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 335631L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_CPU_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                                            resourceLabel = "error";
                                                                        }};
                                                                        scaleInCooldown = 361306L;
                                                                        scaleOutCooldown = 696463L;
                                                                        targetValue = 9109.94;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(9282.19) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("quaerat", "molestiae", MetricStatisticEnum.MAXIMUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("qui", "cum") {{
                                                                                    name = "Vera Beier IV";
                                                                                    value = "eveniet";
                                                                                }}),
                                                                                add(new MetricDimension("rem", "aliquam") {{
                                                                                    name = "Kelley Dibbert";
                                                                                    value = "voluptatum";
                                                                                }}),
                                                                                add(new MetricDimension("mollitia", "voluptas") {{
                                                                                    name = "Winifred Abernathy";
                                                                                    value = "nihil";
                                                                                }}),
                                                                                add(new MetricDimension("dolore", "dolorum") {{
                                                                                    name = "Shawna Wisozk";
                                                                                    value = "minima";
                                                                                }}),
                                                                            }};
                                                                            metricName = "nesciunt";
                                                                            namespace = "quae";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "omnis";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 284000L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION;
                                                                            resourceLabel = "adipisci";
                                                                        }};
                                                                        scaleInCooldown = 514513L;
                                                                        scaleOutCooldown = 432606L;
                                                                        targetValue = 3679.27;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(9569.33) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("in", "nam", MetricStatisticEnum.SUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("ullam", "quasi") {{
                                                                                    name = "Alvin Kemmer";
                                                                                    value = "aspernatur";
                                                                                }}),
                                                                                add(new MetricDimension("ex", "aliquid") {{
                                                                                    name = "Gordon O'Hara";
                                                                                    value = "animi";
                                                                                }}),
                                                                            }};
                                                                            metricName = "accusantium";
                                                                            namespace = "repellat";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "ullam";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 637583L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION;
                                                                            resourceLabel = "placeat";
                                                                        }};
                                                                        scaleInCooldown = 976226L;
                                                                        scaleOutCooldown = 564064L;
                                                                        targetValue = 8897.94;
                                                                    }}),
                                                                }}) {{
                                                    customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("similique", "tempora", MetricStatisticEnum.AVERAGE) {{
                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                            add(new MetricDimension("laboriosam", "ipsa") {{
                                                                name = "Lorene Toy";
                                                                value = "harum";
                                                            }}),
                                                        }};
                                                        metricName = "voluptates";
                                                        namespace = "libero";
                                                        statistic = MetricStatisticEnum.AVERAGE;
                                                        unit = "accusamus";
                                                    }};
                                                    disableDynamicScaling = false;
                                                    maxCapacity = 379057L;
                                                    minCapacity = 374244L;
                                                    predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_NETWORK_OUT) {{
                                                        predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_NETWORK_IN;
                                                        resourceLabel = "minima";
                                                    }};
                                                    predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_MAX_CAPACITY_ABOVE_FORECAST_CAPACITY;
                                                    predictiveScalingMaxCapacityBuffer = 237807L;
                                                    predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_ONLY;
                                                    resourceId = "dolores";
                                                    scalableDimension = ScalableDimensionEnum.DYNAMODB_TABLE_READ_CAPACITY_UNITS;
                                                    scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.KEEP_EXTERNAL_POLICIES;
                                                    scheduledActionBufferTime = 296242L;
                                                    serviceNamespace = ServiceNamespaceEnum.ECS;
                                                    targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(2587.02) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("sapiente", "debitis", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("nesciunt", "culpa") {{
                                                                        name = "Sherry Ritchie";
                                                                        value = "hic";
                                                                    }}),
                                                                    add(new MetricDimension("sit", "rerum") {{
                                                                        name = "Dewey Leannon";
                                                                        value = "nobis";
                                                                    }}),
                                                                    add(new MetricDimension("expedita", "ab") {{
                                                                        name = "Faith Cole";
                                                                        value = "voluptate";
                                                                    }}),
                                                                    add(new MetricDimension("quidem", "explicabo") {{
                                                                        name = "Micheal Osinski";
                                                                        value = "commodi";
                                                                    }}),
                                                                }};
                                                                metricName = "voluptas";
                                                                namespace = "unde";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "suscipit";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 967795L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "corrupti";
                                                            }};
                                                            scaleInCooldown = 274823L;
                                                            scaleOutCooldown = 148478L;
                                                            targetValue = 5922.31;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(6771.15) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("praesentium", "cum", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("tempora", "voluptate") {{
                                                                        name = "Rosemary McClure";
                                                                        value = "tempora";
                                                                    }}),
                                                                    add(new MetricDimension("facilis", "quaerat") {{
                                                                        name = "Marc Balistreri";
                                                                        value = "praesentium";
                                                                    }}),
                                                                    add(new MetricDimension("veniam", "minima") {{
                                                                        name = "Brittany Tremblay DDS";
                                                                        value = "error";
                                                                    }}),
                                                                    add(new MetricDimension("veniam", "in") {{
                                                                        name = "Van Stoltenberg PhD";
                                                                        value = "numquam";
                                                                    }}),
                                                                }};
                                                                metricName = "officiis";
                                                                namespace = "beatae";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "exercitationem";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 680515L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION;
                                                                resourceLabel = "error";
                                                            }};
                                                            scaleInCooldown = 710529L;
                                                            scaleOutCooldown = 892863L;
                                                            targetValue = 2049.23;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(85.11) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("corporis", "et", MetricStatisticEnum.MAXIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("fugit", "ut") {{
                                                                        name = "Lorenzo Lowe";
                                                                        value = "atque";
                                                                    }}),
                                                                    add(new MetricDimension("esse", "ipsam") {{
                                                                        name = "George Nicolas";
                                                                        value = "consequatur";
                                                                    }}),
                                                                }};
                                                                metricName = "sit";
                                                                namespace = "voluptatum";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "repudiandae";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 405942L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN;
                                                                resourceLabel = "sit";
                                                            }};
                                                            scaleInCooldown = 342611L;
                                                            scaleOutCooldown = 906172L;
                                                            targetValue = 6222.31;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(291) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("voluptates", "perferendis", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("quidem", "atque") {{
                                                                        name = "Mr. Mike Pollich";
                                                                        value = "labore";
                                                                    }}),
                                                                    add(new MetricDimension("voluptate", "unde") {{
                                                                        name = "Marco White I";
                                                                        value = "deserunt";
                                                                    }}),
                                                                }};
                                                                metricName = "reiciendis";
                                                                namespace = "provident";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "delectus";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 696483L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "facere";
                                                            }};
                                                            scaleInCooldown = 509807L;
                                                            scaleOutCooldown = 648598L;
                                                            targetValue = 3339.65;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new ScalingInstruction(277340L, 97493L, "rem", ScalableDimensionEnum.DYNAMODB_INDEX_READ_CAPACITY_UNITS, ServiceNamespaceEnum.AUTOSCALING,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                                    add(new TargetTrackingConfiguration(8363.64) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("fuga", "accusamus", MetricStatisticEnum.SUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("omnis", "eos") {{
                                                                                    name = "Kimberly McDermott";
                                                                                    value = "alias";
                                                                                }}),
                                                                            }};
                                                                            metricName = "occaecati";
                                                                            namespace = "iste";
                                                                            statistic = MetricStatisticEnum.AVERAGE;
                                                                            unit = "inventore";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 719620L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.ALB_REQUEST_COUNT_PER_TARGET;
                                                                            resourceLabel = "delectus";
                                                                        }};
                                                                        scaleInCooldown = 507636L;
                                                                        scaleOutCooldown = 802692L;
                                                                        targetValue = 3004.03;
                                                                    }}),
                                                                    add(new TargetTrackingConfiguration(2448.89) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("asperiores", "ex", MetricStatisticEnum.MINIMUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("nam", "vero") {{
                                                                                    name = "Lorena Johns";
                                                                                    value = "modi";
                                                                                }}),
                                                                                add(new MetricDimension("enim", "sint") {{
                                                                                    name = "Mr. Holly Kautzer";
                                                                                    value = "maiores";
                                                                                }}),
                                                                                add(new MetricDimension("quis", "sint") {{
                                                                                    name = "Gerard Koch";
                                                                                    value = "est";
                                                                                }}),
                                                                            }};
                                                                            metricName = "accusamus";
                                                                            namespace = "impedit";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "necessitatibus";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 895346L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT;
                                                                            resourceLabel = "quae";
                                                                        }};
                                                                        scaleInCooldown = 685478L;
                                                                        scaleOutCooldown = 675689L;
                                                                        targetValue = 2310.7;
                                                                    }}),
                                                                }}) {{
                                                    customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("cumque", "fuga", MetricStatisticEnum.AVERAGE) {{
                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                            add(new MetricDimension("quae", "perferendis") {{
                                                                name = "Luz Goldner Sr.";
                                                                value = "cumque";
                                                            }}),
                                                            add(new MetricDimension("impedit", "eos") {{
                                                                name = "Judy Kemmer";
                                                                value = "at";
                                                            }}),
                                                            add(new MetricDimension("earum", "soluta") {{
                                                                name = "Andre Carroll V";
                                                                value = "provident";
                                                            }}),
                                                            add(new MetricDimension("debitis", "aliquid") {{
                                                                name = "Gilberto Bechtelar";
                                                                value = "maiores";
                                                            }}),
                                                        }};
                                                        metricName = "porro";
                                                        namespace = "suscipit";
                                                        statistic = MetricStatisticEnum.MINIMUM;
                                                        unit = "fugit";
                                                    }};
                                                    disableDynamicScaling = false;
                                                    maxCapacity = 656762L;
                                                    minCapacity = 898760L;
                                                    predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_CPU_UTILIZATION) {{
                                                        predefinedLoadMetricType = LoadMetricTypeEnum.ALB_TARGET_GROUP_REQUEST_COUNT;
                                                        resourceLabel = "consequatur";
                                                    }};
                                                    predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_FORECAST_CAPACITY_TO_MAX_CAPACITY;
                                                    predictiveScalingMaxCapacityBuffer = 497777L;
                                                    predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_ONLY;
                                                    resourceId = "occaecati";
                                                    scalableDimension = ScalableDimensionEnum.RDS_CLUSTER_READ_REPLICA_COUNT;
                                                    scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.KEEP_EXTERNAL_POLICIES;
                                                    scheduledActionBufferTime = 96562L;
                                                    serviceNamespace = ServiceNamespaceEnum.AUTOSCALING;
                                                    targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(1104.77) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("ab", "error", MetricStatisticEnum.SUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("iusto", "esse") {{
                                                                        name = "Jeffrey Goldner";
                                                                        value = "dicta";
                                                                    }}),
                                                                    add(new MetricDimension("dicta", "odio") {{
                                                                        name = "Emilio Wisoky PhD";
                                                                        value = "doloremque";
                                                                    }}),
                                                                    add(new MetricDimension("laborum", "sunt") {{
                                                                        name = "Joy Jacobson";
                                                                        value = "ipsa";
                                                                    }}),
                                                                    add(new MetricDimension("aliquid", "perferendis") {{
                                                                        name = "Janis Ratke";
                                                                        value = "suscipit";
                                                                    }}),
                                                                }};
                                                                metricName = "eum";
                                                                namespace = "voluptas";
                                                                statistic = MetricStatisticEnum.SAMPLE_COUNT;
                                                                unit = "id";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 913992L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "laborum";
                                                            }};
                                                            scaleInCooldown = 324083L;
                                                            scaleOutCooldown = 536923L;
                                                            targetValue = 3162.2;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(5372.79) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("illum", "totam", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("voluptatem", "molestias") {{
                                                                        name = "Krista Jakubowski";
                                                                        value = "expedita";
                                                                    }}),
                                                                    add(new MetricDimension("rerum", "est") {{
                                                                        name = "Gene Brekke";
                                                                        value = "veritatis";
                                                                    }}),
                                                                    add(new MetricDimension("debitis", "voluptatem") {{
                                                                        name = "Donald Williamson MD";
                                                                        value = "pariatur";
                                                                    }}),
                                                                    add(new MetricDimension("minus", "nemo") {{
                                                                        name = "Nina Wehner";
                                                                        value = "rem";
                                                                    }}),
                                                                }};
                                                                metricName = "asperiores";
                                                                namespace = "ratione";
                                                                statistic = MetricStatisticEnum.MINIMUM;
                                                                unit = "perferendis";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 842777L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS;
                                                                resourceLabel = "ipsam";
                                                            }};
                                                            scaleInCooldown = 222864L;
                                                            scaleOutCooldown = 307376L;
                                                            targetValue = 805.32;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(1995.96) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("consequuntur", "ipsa", MetricStatisticEnum.MAXIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("ab", "laudantium") {{
                                                                        name = "Mr. Carmen Altenwerth";
                                                                        value = "fugit";
                                                                    }}),
                                                                }};
                                                                metricName = "quae";
                                                                namespace = "dolor";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "ipsam";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 911198L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "officiis";
                                                            }};
                                                            scaleInCooldown = 897277L;
                                                            scaleOutCooldown = 153369L;
                                                            targetValue = 3321.91;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(5140.54) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("officia", "voluptas", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("porro", "autem") {{
                                                                        name = "Kristin Legros";
                                                                        value = "ab";
                                                                    }}),
                                                                    add(new MetricDimension("quasi", "nisi") {{
                                                                        name = "Brent Walter II";
                                                                        value = "necessitatibus";
                                                                    }}),
                                                                    add(new MetricDimension("repudiandae", "optio") {{
                                                                        name = "Caleb Orn";
                                                                        value = "doloribus";
                                                                    }}),
                                                                }};
                                                                metricName = "occaecati";
                                                                namespace = "nemo";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "blanditiis";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 364912L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ALB_REQUEST_COUNT_PER_TARGET;
                                                                resourceLabel = "eius";
                                                            }};
                                                            scaleInCooldown = 495970L;
                                                            scaleOutCooldown = 200516L;
                                                            targetValue = 6817.4;
                                                        }}),
                                                    }};
                                                }}),
                                            }}, "atque");, CreateScalingPlanXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_CREATE_SCALING_PLAN) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "magni";
                xAmzDate = "soluta";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "dolore";
            }};            

            CreateScalingPlanResponse res = sdk.sdk.createScalingPlan(req);

            if (res.createScalingPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScalingPlan

<p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScalingPlanRequest;
import org.openapis.openapi.models.operations.DeleteScalingPlanResponse;
import org.openapis.openapi.models.operations.DeleteScalingPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteScalingPlanRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScalingPlanRequest req = new DeleteScalingPlanRequest(                new DeleteScalingPlanRequest("voluptate", 194023L);, DeleteScalingPlanXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DELETE_SCALING_PLAN) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odit";
            }};            

            DeleteScalingPlanResponse res = sdk.sdk.deleteScalingPlan(req);

            if (res.deleteScalingPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScalingPlanResources

Describes the scalable resources in the specified scaling plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScalingPlanResourcesRequest;
import org.openapis.openapi.models.operations.DescribeScalingPlanResourcesResponse;
import org.openapis.openapi.models.operations.DescribeScalingPlanResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeScalingPlanResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScalingPlanResourcesRequest req = new DescribeScalingPlanResourcesRequest(                new DescribeScalingPlanResourcesRequest("vel", 300824L) {{
                                maxResults = 842855L;
                                nextToken = "inventore";
                            }};, DescribeScalingPlanResourcesXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DESCRIBE_SCALING_PLAN_RESOURCES) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "libero";
                xAmzCredential = "architecto";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "aliquam";
            }};            

            DescribeScalingPlanResourcesResponse res = sdk.sdk.describeScalingPlanResources(req);

            if (res.describeScalingPlanResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeScalingPlans

Describes one or more of your scaling plans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeScalingPlansRequest;
import org.openapis.openapi.models.operations.DescribeScalingPlansResponse;
import org.openapis.openapi.models.operations.DescribeScalingPlansXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationSource;
import org.openapis.openapi.models.shared.DescribeScalingPlansRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeScalingPlansRequest req = new DescribeScalingPlansRequest(                new DescribeScalingPlansRequest() {{
                                applicationSources = new org.openapis.openapi.models.shared.ApplicationSource[]{{
                                    add(new ApplicationSource() {{
                                        cloudFormationStackARN = "accusantium";
                                        tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                            add(new TagFilter() {{
                                                key = "ea";
                                                values = new String[]{{
                                                    add("vero"),
                                                }};
                                            }}),
                                            add(new TagFilter() {{
                                                key = "excepturi";
                                                values = new String[]{{
                                                    add("velit"),
                                                    add("ut"),
                                                }};
                                            }}),
                                        }};
                                    }}),
                                }};
                                maxResults = 596433L;
                                nextToken = "earum";
                                scalingPlanNames = new String[]{{
                                    add("impedit"),
                                }};
                                scalingPlanVersion = 975884L;
                            }};, DescribeScalingPlansXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DESCRIBE_SCALING_PLANS) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "alias";
                xAmzDate = "nisi";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeScalingPlansResponse res = sdk.sdk.describeScalingPlans(req);

            if (res.describeScalingPlansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScalingPlanResourceForecastData

<p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScalingPlanResourceForecastDataRequest;
import org.openapis.openapi.models.operations.GetScalingPlanResourceForecastDataResponse;
import org.openapis.openapi.models.operations.GetScalingPlanResourceForecastDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.ForecastDataTypeEnum;
import org.openapis.openapi.models.shared.GetScalingPlanResourceForecastDataRequest;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScalingPlanResourceForecastDataRequest req = new GetScalingPlanResourceForecastDataRequest(                new GetScalingPlanResourceForecastDataRequest(OffsetDateTime.parse("2022-07-08T13:28:20.794Z"), ForecastDataTypeEnum.CAPACITY_FORECAST, "doloremque", ScalableDimensionEnum.AUTOSCALING_AUTO_SCALING_GROUP_DESIRED_CAPACITY, "officia", 927403L, ServiceNamespaceEnum.EC2, OffsetDateTime.parse("2022-03-31T11:50:11.981Z"));, GetScalingPlanResourceForecastDataXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_GET_SCALING_PLAN_RESOURCE_FORECAST_DATA) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "perspiciatis";
                xAmzDate = "expedita";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "a";
                xAmzSignedHeaders = "voluptate";
            }};            

            GetScalingPlanResourceForecastDataResponse res = sdk.sdk.getScalingPlanResourceForecastData(req);

            if (res.getScalingPlanResourceForecastDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScalingPlan

<p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScalingPlanRequest;
import org.openapis.openapi.models.operations.UpdateScalingPlanResponse;
import org.openapis.openapi.models.operations.UpdateScalingPlanXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationSource;
import org.openapis.openapi.models.shared.CustomizedLoadMetricSpecification;
import org.openapis.openapi.models.shared.CustomizedScalingMetricSpecification;
import org.openapis.openapi.models.shared.LoadMetricTypeEnum;
import org.openapis.openapi.models.shared.MetricDimension;
import org.openapis.openapi.models.shared.MetricStatisticEnum;
import org.openapis.openapi.models.shared.PredefinedLoadMetricSpecification;
import org.openapis.openapi.models.shared.PredefinedScalingMetricSpecification;
import org.openapis.openapi.models.shared.PredictiveScalingMaxCapacityBehaviorEnum;
import org.openapis.openapi.models.shared.PredictiveScalingModeEnum;
import org.openapis.openapi.models.shared.ScalableDimensionEnum;
import org.openapis.openapi.models.shared.ScalingInstruction;
import org.openapis.openapi.models.shared.ScalingMetricTypeEnum;
import org.openapis.openapi.models.shared.ScalingPolicyUpdateBehaviorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNamespaceEnum;
import org.openapis.openapi.models.shared.TagFilter;
import org.openapis.openapi.models.shared.TargetTrackingConfiguration;
import org.openapis.openapi.models.shared.UpdateScalingPlanRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateScalingPlanRequest req = new UpdateScalingPlanRequest(                new UpdateScalingPlanRequest("unde", 897543L) {{
                                applicationSource = new ApplicationSource() {{
                                    cloudFormationStackARN = "animi";
                                    tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                        add(new TagFilter() {{
                                            key = "ipsam";
                                            values = new String[]{{
                                                add("est"),
                                                add("error"),
                                            }};
                                        }}),
                                        add(new TagFilter() {{
                                            key = "esse";
                                            values = new String[]{{
                                                add("veritatis"),
                                                add("vero"),
                                            }};
                                        }}),
                                        add(new TagFilter() {{
                                            key = "consectetur";
                                            values = new String[]{{
                                                add("inventore"),
                                            }};
                                        }}),
                                        add(new TagFilter() {{
                                            key = "dolorem";
                                            values = new String[]{{
                                                add("qui"),
                                                add("iste"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                scalingInstructions = new org.openapis.openapi.models.shared.ScalingInstruction[]{{
                                    add(new ScalingInstruction(348192L, 463344L, "dolorem", ScalableDimensionEnum.EC2_SPOT_FLEET_REQUEST_TARGET_CAPACITY, ServiceNamespaceEnum.AUTOSCALING,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(7412.38) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("architecto", "quos", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("dolores", "nam") {{
                                                                        name = "Dr. Elvira Robel";
                                                                        value = "animi";
                                                                    }}),
                                                                    add(new MetricDimension("veritatis", "quasi") {{
                                                                        name = "Louise Tromp IV";
                                                                        value = "maiores";
                                                                    }}),
                                                                    add(new MetricDimension("aliquam", "nostrum") {{
                                                                        name = "Freda Renner";
                                                                        value = "nemo";
                                                                    }}),
                                                                    add(new MetricDimension("quas", "totam") {{
                                                                        name = "Guillermo Marvin";
                                                                        value = "animi";
                                                                    }}),
                                                                }};
                                                                metricName = "molestias";
                                                                namespace = "odio";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "saepe";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 826862L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS;
                                                                resourceLabel = "libero";
                                                            }};
                                                            scaleInCooldown = 38557L;
                                                            scaleOutCooldown = 963976L;
                                                            targetValue = 7731.1;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(2273.62) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("magnam", "itaque", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("architecto", "cupiditate") {{
                                                                        name = "Mrs. Kerry Nolan";
                                                                        value = "libero";
                                                                    }}),
                                                                }};
                                                                metricName = "molestiae";
                                                                namespace = "eligendi";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "non";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 993002L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION;
                                                                resourceLabel = "consequuntur";
                                                            }};
                                                            scaleInCooldown = 512905L;
                                                            scaleOutCooldown = 140384L;
                                                            targetValue = 8634.77;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(5221.76) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("consequuntur", "debitis", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("quaerat", "blanditiis") {{
                                                                        name = "Thelma Purdy";
                                                                        value = "voluptatibus";
                                                                    }}),
                                                                    add(new MetricDimension("facere", "facilis") {{
                                                                        name = "Charlie Harvey";
                                                                        value = "minus";
                                                                    }}),
                                                                }};
                                                                metricName = "ipsum";
                                                                namespace = "ad";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "voluptatibus";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 700928L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT;
                                                                resourceLabel = "reprehenderit";
                                                            }};
                                                            scaleInCooldown = 207296L;
                                                            scaleOutCooldown = 480061L;
                                                            targetValue = 6649.65;
                                                        }}),
                                                    }}) {{
                                        customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("maxime", "quia", MetricStatisticEnum.AVERAGE) {{
                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                add(new MetricDimension("alias", "magni") {{
                                                    name = "Wm Legros";
                                                    value = "fugit";
                                                }}),
                                                add(new MetricDimension("itaque", "et") {{
                                                    name = "Anna Bergnaum";
                                                    value = "exercitationem";
                                                }}),
                                            }};
                                            metricName = "ipsum";
                                            namespace = "unde";
                                            statistic = MetricStatisticEnum.SUM;
                                            unit = "distinctio";
                                        }};
                                        disableDynamicScaling = false;
                                        maxCapacity = 342137L;
                                        minCapacity = 605712L;
                                        predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_NETWORK_OUT) {{
                                            predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_NETWORK_OUT;
                                            resourceLabel = "dicta";
                                        }};
                                        predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_MAX_CAPACITY_ABOVE_FORECAST_CAPACITY;
                                        predictiveScalingMaxCapacityBuffer = 854460L;
                                        predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_ONLY;
                                        resourceId = "quos";
                                        scalableDimension = ScalableDimensionEnum.DYNAMODB_INDEX_READ_CAPACITY_UNITS;
                                        scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.KEEP_EXTERNAL_POLICIES;
                                        scheduledActionBufferTime = 479385L;
                                        serviceNamespace = ServiceNamespaceEnum.AUTOSCALING;
                                        targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                            add(new TargetTrackingConfiguration(3735.11) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("facere", "corrupti", MetricStatisticEnum.MAXIMUM) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("autem", "esse") {{
                                                            name = "Lena Greenholt";
                                                            value = "voluptatem";
                                                        }}),
                                                    }};
                                                    metricName = "dolores";
                                                    namespace = "assumenda";
                                                    statistic = MetricStatisticEnum.AVERAGE;
                                                    unit = "est";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 588812L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN;
                                                    resourceLabel = "necessitatibus";
                                                }};
                                                scaleInCooldown = 575078L;
                                                scaleOutCooldown = 409726L;
                                                targetValue = 4218.19;
                                            }}),
                                            add(new TargetTrackingConfiguration(6378.56) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("beatae", "unde", MetricStatisticEnum.MAXIMUM) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("alias", "quia") {{
                                                            name = "Dan Towne";
                                                            value = "at";
                                                        }}),
                                                        add(new MetricDimension("quibusdam", "odio") {{
                                                            name = "Miss Grant VonRueden";
                                                            value = "eos";
                                                        }}),
                                                        add(new MetricDimension("adipisci", "recusandae") {{
                                                            name = "Fred Champlin";
                                                            value = "earum";
                                                        }}),
                                                    }};
                                                    metricName = "similique";
                                                    namespace = "ut";
                                                    statistic = MetricStatisticEnum.SAMPLE_COUNT;
                                                    unit = "quis";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 963198L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_READ_CAPACITY_UTILIZATION) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.ALB_REQUEST_COUNT_PER_TARGET;
                                                    resourceLabel = "fugit";
                                                }};
                                                scaleInCooldown = 256916L;
                                                scaleOutCooldown = 201010L;
                                                targetValue = 8735.57;
                                            }}),
                                            add(new TargetTrackingConfiguration(6845.53) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("aperiam", "libero", MetricStatisticEnum.AVERAGE) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("cupiditate", "minima") {{
                                                            name = "Santiago Herzog";
                                                            value = "voluptatum";
                                                        }}),
                                                        add(new MetricDimension("modi", "corporis") {{
                                                            name = "Bill Doyle";
                                                            value = "eum";
                                                        }}),
                                                    }};
                                                    metricName = "magnam";
                                                    namespace = "voluptates";
                                                    statistic = MetricStatisticEnum.SUM;
                                                    unit = "tempore";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 289913L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION;
                                                    resourceLabel = "occaecati";
                                                }};
                                                scaleInCooldown = 779180L;
                                                scaleOutCooldown = 242099L;
                                                targetValue = 7955.91;
                                            }}),
                                            add(new TargetTrackingConfiguration(6972.74) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("voluptate", "pariatur", MetricStatisticEnum.SUM) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("repellat", "pariatur") {{
                                                            name = "Myron Windler";
                                                            value = "odit";
                                                        }}),
                                                        add(new MetricDimension("ducimus", "excepturi") {{
                                                            name = "Bessie Bayer";
                                                            value = "in";
                                                        }}),
                                                    }};
                                                    metricName = "dolores";
                                                    namespace = "error";
                                                    statistic = MetricStatisticEnum.AVERAGE;
                                                    unit = "ducimus";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 627735L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS;
                                                    resourceLabel = "ex";
                                                }};
                                                scaleInCooldown = 416692L;
                                                scaleOutCooldown = 888616L;
                                                targetValue = 8108.39;
                                            }}),
                                        }};
                                    }}),
                                    add(new ScalingInstruction(252700L, 68093L, "illo", ScalableDimensionEnum.DYNAMODB_INDEX_WRITE_CAPACITY_UNITS, ServiceNamespaceEnum.RDS,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(662.07) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("modi", "eum", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("modi", "in") {{
                                                                        name = "Jared Heller";
                                                                        value = "repudiandae";
                                                                    }}),
                                                                    add(new MetricDimension("voluptate", "similique") {{
                                                                        name = "Mr. Meghan Leffler";
                                                                        value = "enim";
                                                                    }}),
                                                                }};
                                                                metricName = "minima";
                                                                namespace = "libero";
                                                                statistic = MetricStatisticEnum.MINIMUM;
                                                                unit = "sit";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 652125L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION;
                                                                resourceLabel = "fugiat";
                                                            }};
                                                            scaleInCooldown = 475325L;
                                                            scaleOutCooldown = 330600L;
                                                            targetValue = 9692.06;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(607.78) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("amet", "autem", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("dolorum", "possimus") {{
                                                                        name = "Maria Veum";
                                                                        value = "numquam";
                                                                    }}),
                                                                    add(new MetricDimension("sunt", "distinctio") {{
                                                                        name = "Edith Dooley";
                                                                        value = "minus";
                                                                    }}),
                                                                }};
                                                                metricName = "iusto";
                                                                namespace = "quas";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "facilis";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 5310L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ALB_REQUEST_COUNT_PER_TARGET) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION;
                                                                resourceLabel = "aut";
                                                            }};
                                                            scaleInCooldown = 511222L;
                                                            scaleOutCooldown = 832239L;
                                                            targetValue = 832.91;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(5629.48) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("qui", "qui", MetricStatisticEnum.SUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("voluptatem", "alias") {{
                                                                        name = "Toby O'Hara";
                                                                        value = "sed";
                                                                    }}),
                                                                }};
                                                                metricName = "eveniet";
                                                                namespace = "hic";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "incidunt";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 691508L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN;
                                                                resourceLabel = "beatae";
                                                            }};
                                                            scaleInCooldown = 264649L;
                                                            scaleOutCooldown = 760049L;
                                                            targetValue = 9750.95;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(9555.51) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("quae", "officiis", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("ducimus", "odit") {{
                                                                        name = "Everett Dickinson";
                                                                        value = "impedit";
                                                                    }}),
                                                                    add(new MetricDimension("accusamus", "doloremque") {{
                                                                        name = "Faith Zulauf";
                                                                        value = "natus";
                                                                    }}),
                                                                    add(new MetricDimension("quia", "ullam") {{
                                                                        name = "Susie Walsh";
                                                                        value = "rem";
                                                                    }}),
                                                                }};
                                                                metricName = "quisquam";
                                                                namespace = "dicta";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "eligendi";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 100251L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.DYNAMO_DB_WRITE_CAPACITY_UTILIZATION;
                                                                resourceLabel = "optio";
                                                            }};
                                                            scaleInCooldown = 17060L;
                                                            scaleOutCooldown = 704271L;
                                                            targetValue = 9670.55;
                                                        }}),
                                                    }}) {{
                                        customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("illo", "labore", MetricStatisticEnum.SUM) {{
                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                add(new MetricDimension("error", "porro") {{
                                                    name = "Fredrick Towne";
                                                    value = "dicta";
                                                }}),
                                                add(new MetricDimension("enim", "delectus") {{
                                                    name = "Marian Koelpin";
                                                    value = "aspernatur";
                                                }}),
                                                add(new MetricDimension("saepe", "tempore") {{
                                                    name = "Mr. Marian Renner";
                                                    value = "accusamus";
                                                }}),
                                                add(new MetricDimension("nemo", "repellat") {{
                                                    name = "Julia Wisozk";
                                                    value = "praesentium";
                                                }}),
                                            }};
                                            metricName = "quisquam";
                                            namespace = "sequi";
                                            statistic = MetricStatisticEnum.MAXIMUM;
                                            unit = "deleniti";
                                        }};
                                        disableDynamicScaling = false;
                                        maxCapacity = 304173L;
                                        minCapacity = 790463L;
                                        predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ALB_TARGET_GROUP_REQUEST_COUNT) {{
                                            predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_NETWORK_OUT;
                                            resourceLabel = "laudantium";
                                        }};
                                        predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_FORECAST_CAPACITY_TO_MAX_CAPACITY;
                                        predictiveScalingMaxCapacityBuffer = 805264L;
                                        predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_AND_SCALE;
                                        resourceId = "nam";
                                        scalableDimension = ScalableDimensionEnum.DYNAMODB_TABLE_WRITE_CAPACITY_UNITS;
                                        scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.REPLACE_EXTERNAL_POLICIES;
                                        scheduledActionBufferTime = 590858L;
                                        serviceNamespace = ServiceNamespaceEnum.DYNAMODB;
                                        targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                            add(new TargetTrackingConfiguration(100.63) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("laudantium", "doloremque", MetricStatisticEnum.SUM) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("commodi", "impedit") {{
                                                            name = "Cristina Murphy";
                                                            value = "dolorem";
                                                        }}),
                                                        add(new MetricDimension("praesentium", "quidem") {{
                                                            name = "Maria Bartoletti I";
                                                            value = "illum";
                                                        }}),
                                                    }};
                                                    metricName = "cum";
                                                    namespace = "amet";
                                                    statistic = MetricStatisticEnum.AVERAGE;
                                                    unit = "dicta";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 479707L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT;
                                                    resourceLabel = "provident";
                                                }};
                                                scaleInCooldown = 897956L;
                                                scaleOutCooldown = 592880L;
                                                targetValue = 9202.72;
                                            }}),
                                            add(new TargetTrackingConfiguration(5886.39) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("esse", "voluptatem", MetricStatisticEnum.AVERAGE) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("eos", "totam") {{
                                                            name = "Lorena Quitzon V";
                                                            value = "accusamus";
                                                        }}),
                                                        add(new MetricDimension("occaecati", "atque") {{
                                                            name = "Sandra Frami DVM";
                                                            value = "dolor";
                                                        }}),
                                                    }};
                                                    metricName = "beatae";
                                                    namespace = "at";
                                                    statistic = MetricStatisticEnum.MINIMUM;
                                                    unit = "minus";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 698558L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                    resourceLabel = "aperiam";
                                                }};
                                                scaleInCooldown = 998026L;
                                                scaleOutCooldown = 243678L;
                                                targetValue = 7841.15;
                                            }}),
                                            add(new TargetTrackingConfiguration(4714.57) {{
                                                customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("illum", "laborum", MetricStatisticEnum.MAXIMUM) {{
                                                    dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                        add(new MetricDimension("officia", "amet") {{
                                                            name = "Cody Feil";
                                                            value = "temporibus";
                                                        }}),
                                                    }};
                                                    metricName = "tenetur";
                                                    namespace = "aspernatur";
                                                    statistic = MetricStatisticEnum.SAMPLE_COUNT;
                                                    unit = "itaque";
                                                }};
                                                disableScaleIn = false;
                                                estimatedInstanceWarmup = 876285L;
                                                predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT) {{
                                                    predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT;
                                                    resourceLabel = "consectetur";
                                                }};
                                                scaleInCooldown = 128696L;
                                                scaleOutCooldown = 129355L;
                                                targetValue = 3503.25;
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, UpdateScalingPlanXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_UPDATE_SCALING_PLAN) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "quos";
                xAmzDate = "ullam";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "itaque";
            }};            

            UpdateScalingPlanResponse res = sdk.sdk.updateScalingPlan(req);

            if (res.updateScalingPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
