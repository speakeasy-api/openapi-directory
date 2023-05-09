# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScalingPlanRequest req = new CreateScalingPlanRequest(                new CreateScalingPlanRequest(                new ApplicationSource() {{
                                                cloudFormationStackARN = "provident";
                                                tagFilters = new org.openapis.openapi.models.shared.TagFilter[]{{
                                                    add(new TagFilter() {{
                                                        key = "quibusdam";
                                                        values = new String[]{{
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
                                            }};,                 new org.openapis.openapi.models.shared.ScalingInstruction[]{{
                                                add(new ScalingInstruction(277718L, 318569L, "consequatur", ScalableDimensionEnum.DYNAMODB_TABLE_WRITE_CAPACITY_UNITS, ServiceNamespaceEnum.DYNAMODB,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                                    add(new TargetTrackingConfiguration(1162.02) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("officia", "dolor", MetricStatisticEnum.SUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("cupiditate", "quos") {{
                                                                                    name = "Marty Green";
                                                                                    value = "aliquid";
                                                                                }}),
                                                                                add(new MetricDimension("excepturi", "tempora") {{
                                                                                    name = "Louise Simonis Sr.";
                                                                                    value = "dolorum";
                                                                                }}),
                                                                                add(new MetricDimension("eligendi", "sint") {{
                                                                                    name = "Geoffrey Green";
                                                                                    value = "non";
                                                                                }}),
                                                                            }};
                                                                            metricName = "aliquid";
                                                                            namespace = "provident";
                                                                            statistic = MetricStatisticEnum.SUM;
                                                                            unit = "sint";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 952749L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_CPU_UTILIZATION;
                                                                            resourceLabel = "in";
                                                                        }};
                                                                        scaleInCooldown = 846409L;
                                                                        scaleOutCooldown = 978571L;
                                                                        targetValue = 6994.79;
                                                                    }}),
                                                                }}) {{
                                                    customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("commodi", "molestiae", MetricStatisticEnum.MINIMUM) {{
                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                            add(new MetricDimension("temporibus", "ab") {{
                                                                name = "Ken Kshlerin";
                                                                value = "recusandae";
                                                            }}),
                                                            add(new MetricDimension("quo", "odit") {{
                                                                name = "Mrs. Marie O'Connell";
                                                                value = "sapiente";
                                                            }}),
                                                            add(new MetricDimension("esse", "totam") {{
                                                                name = "Wilfred Wolff";
                                                                value = "quod";
                                                            }}),
                                                            add(new MetricDimension("fugit", "deleniti") {{
                                                                name = "Omar Carroll";
                                                                value = "occaecati";
                                                            }}),
                                                        }};
                                                        metricName = "hic";
                                                        namespace = "optio";
                                                        statistic = MetricStatisticEnum.MAXIMUM;
                                                        unit = "beatae";
                                                    }};
                                                    disableDynamicScaling = false;
                                                    maxCapacity = 186332L;
                                                    minCapacity = 774234L;
                                                    predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_CPU_UTILIZATION) {{
                                                        predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_NETWORK_OUT;
                                                        resourceLabel = "esse";
                                                    }};
                                                    predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_MAX_CAPACITY_TO_FORECAST_CAPACITY;
                                                    predictiveScalingMaxCapacityBuffer = 135218L;
                                                    predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_AND_SCALE;
                                                    resourceId = "ad";
                                                    scalableDimension = ScalableDimensionEnum.DYNAMODB_TABLE_READ_CAPACITY_UNITS;
                                                    scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.KEEP_EXTERNAL_POLICIES;
                                                    scheduledActionBufferTime = 612096L;
                                                    serviceNamespace = ServiceNamespaceEnum.ECS;
                                                    targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(1020.44) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("enim", "omnis", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("iure", "saepe") {{
                                                                        name = "Elias Parker";
                                                                        value = "iste";
                                                                    }}),
                                                                    add(new MetricDimension("laborum", "dolores") {{
                                                                        name = "Roger Beier";
                                                                        value = "mollitia";
                                                                    }}),
                                                                }};
                                                                metricName = "dolorem";
                                                                namespace = "corporis";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "nobis";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 325047L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ALB_REQUEST_COUNT_PER_TARGET;
                                                                resourceLabel = "accusantium";
                                                            }};
                                                            scaleInCooldown = 634274L;
                                                            scaleOutCooldown = 988374L;
                                                            targetValue = 9589.5;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(6048.46) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("temporibus", "laborum", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("numquam", "commodi") {{
                                                                        name = "Cecilia Crooks";
                                                                        value = "occaecati";
                                                                    }}),
                                                                    add(new MetricDimension("vitae", "laborum") {{
                                                                        name = "Nellie Frami";
                                                                        value = "quis";
                                                                    }}),
                                                                    add(new MetricDimension("ipsam", "id") {{
                                                                        name = "Bill Conn";
                                                                        value = "tenetur";
                                                                    }}),
                                                                }};
                                                                metricName = "possimus";
                                                                namespace = "aut";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "error";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 971945L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT;
                                                                resourceLabel = "vero";
                                                            }};
                                                            scaleInCooldown = 509624L;
                                                            scaleOutCooldown = 976762L;
                                                            targetValue = 557.14;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(9292.97) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("excepturi", "pariatur", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("dicta", "corporis") {{
                                                                        name = "Thomas Batz";
                                                                        value = "maiores";
                                                                    }}),
                                                                    add(new MetricDimension("commodi", "repudiandae") {{
                                                                        name = "Heidi Carter";
                                                                        value = "accusamus";
                                                                    }}),
                                                                }};
                                                                metricName = "quae";
                                                                namespace = "ipsum";
                                                                statistic = MetricStatisticEnum.SAMPLE_COUNT;
                                                                unit = "molestias";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 508969L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION;
                                                                resourceLabel = "voluptates";
                                                            }};
                                                            scaleInCooldown = 921158L;
                                                            scaleOutCooldown = 575947L;
                                                            targetValue = 831.12;
                                                        }}),
                                                    }};
                                                }}),
                                                add(new ScalingInstruction(569574L, 739551L, "voluptate", ScalableDimensionEnum.RDS_CLUSTER_READ_REPLICA_COUNT, ServiceNamespaceEnum.DYNAMODB,                 new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                                    add(new TargetTrackingConfiguration(9044.25) {{
                                                                        customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("voluptate", "id", MetricStatisticEnum.SUM) {{
                                                                            dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                                add(new MetricDimension("accusamus", "quidem") {{
                                                                                    name = "Ms. Christine Beer";
                                                                                    value = "quaerat";
                                                                                }}),
                                                                                add(new MetricDimension("fugiat", "ab") {{
                                                                                    name = "Hector Mosciski";
                                                                                    value = "sit";
                                                                                }}),
                                                                                add(new MetricDimension("omnis", "necessitatibus") {{
                                                                                    name = "Omar Kris";
                                                                                    value = "deleniti";
                                                                                }}),
                                                                            }};
                                                                            metricName = "distinctio";
                                                                            namespace = "asperiores";
                                                                            statistic = MetricStatisticEnum.MAXIMUM;
                                                                            unit = "ipsum";
                                                                        }};
                                                                        disableScaleIn = false;
                                                                        estimatedInstanceWarmup = 263322L;
                                                                        predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT) {{
                                                                            predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN;
                                                                            resourceLabel = "perferendis";
                                                                        }};
                                                                        scaleInCooldown = 758379L;
                                                                        scaleOutCooldown = 881586L;
                                                                        targetValue = 3200.17;
                                                                    }}),
                                                                }}) {{
                                                    customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification("nisi", "vel", MetricStatisticEnum.SAMPLE_COUNT) {{
                                                        dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                            add(new MetricDimension("non", "occaecati") {{
                                                                name = "Irving Jenkins";
                                                                value = "accusamus";
                                                            }}),
                                                            add(new MetricDimension("id", "blanditiis") {{
                                                                name = "Sophia Wintheiser";
                                                                value = "nam";
                                                            }}),
                                                        }};
                                                        metricName = "deleniti";
                                                        namespace = "sapiente";
                                                        statistic = MetricStatisticEnum.MINIMUM;
                                                        unit = "deserunt";
                                                    }};
                                                    disableDynamicScaling = false;
                                                    maxCapacity = 606393L;
                                                    minCapacity = 474867L;
                                                    predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification(LoadMetricTypeEnum.ASG_TOTAL_NETWORK_IN) {{
                                                        predefinedLoadMetricType = LoadMetricTypeEnum.ASG_TOTAL_CPU_UTILIZATION;
                                                        resourceLabel = "nihil";
                                                    }};
                                                    predictiveScalingMaxCapacityBehavior = PredictiveScalingMaxCapacityBehaviorEnum.SET_MAX_CAPACITY_ABOVE_FORECAST_CAPACITY;
                                                    predictiveScalingMaxCapacityBuffer = 660174L;
                                                    predictiveScalingMode = PredictiveScalingModeEnum.FORECAST_AND_SCALE;
                                                    resourceId = "labore";
                                                    scalableDimension = ScalableDimensionEnum.RDS_CLUSTER_READ_REPLICA_COUNT;
                                                    scalingPolicyUpdateBehavior = ScalingPolicyUpdateBehaviorEnum.REPLACE_EXTERNAL_POLICIES;
                                                    scheduledActionBufferTime = 749170L;
                                                    serviceNamespace = ServiceNamespaceEnum.EC2;
                                                    targetTrackingConfigurations = new org.openapis.openapi.models.shared.TargetTrackingConfiguration[]{{
                                                        add(new TargetTrackingConfiguration(2603.41) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("ad", "eum", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("quos", "sint") {{
                                                                        name = "Danielle Bosco";
                                                                        value = "provident";
                                                                    }}),
                                                                }};
                                                                metricName = "accusantium";
                                                                namespace = "mollitia";
                                                                statistic = MetricStatisticEnum.SUM;
                                                                unit = "mollitia";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 896547L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_IN;
                                                                resourceLabel = "nemo";
                                                            }};
                                                            scaleInCooldown = 435865L;
                                                            scaleOutCooldown = 984043L;
                                                            targetValue = 8919.24;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(7499.99) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("nemo", "voluptatibus", MetricStatisticEnum.AVERAGE) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("expedita", "nihil") {{
                                                                        name = "Mr. Andres King";
                                                                        value = "ullam";
                                                                    }}),
                                                                    add(new MetricDimension("consequuntur", "praesentium") {{
                                                                        name = "Marty Cormier";
                                                                        value = "accusantium";
                                                                    }}),
                                                                    add(new MetricDimension("maxime", "ea") {{
                                                                        name = "Victor Casper";
                                                                        value = "pariatur";
                                                                    }}),
                                                                    add(new MetricDimension("ipsam", "voluptate") {{
                                                                        name = "Mr. Harry Jaskolski";
                                                                        value = "quidem";
                                                                    }}),
                                                                }};
                                                                metricName = "autem";
                                                                namespace = "nam";
                                                                statistic = MetricStatisticEnum.AVERAGE;
                                                                unit = "pariatur";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 855804L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT;
                                                                resourceLabel = "aut";
                                                            }};
                                                            scaleInCooldown = 359978L;
                                                            scaleOutCooldown = 944124L;
                                                            targetValue = 7299.91;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(6214.79) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("nostrum", "hic", MetricStatisticEnum.SUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("perferendis", "dolores") {{
                                                                        name = "Mrs. Deanna Kuhn";
                                                                        value = "eos";
                                                                    }}),
                                                                }};
                                                                metricName = "minus";
                                                                namespace = "quam";
                                                                statistic = MetricStatisticEnum.MINIMUM;
                                                                unit = "vero";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 608253L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_CPU_UTILIZATION) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.RDS_READER_AVERAGE_DATABASE_CONNECTIONS;
                                                                resourceLabel = "perspiciatis";
                                                            }};
                                                            scaleInCooldown = 783645L;
                                                            scaleOutCooldown = 164694L;
                                                            targetValue = 5000.26;
                                                        }}),
                                                        add(new TargetTrackingConfiguration(9443.73) {{
                                                            customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification("libero", "delectus", MetricStatisticEnum.MINIMUM) {{
                                                                dimensions = new org.openapis.openapi.models.shared.MetricDimension[]{{
                                                                    add(new MetricDimension("iste", "dolorum") {{
                                                                        name = "Jean Ferry";
                                                                        value = "modi";
                                                                    }}),
                                                                }};
                                                                metricName = "deleniti";
                                                                namespace = "pariatur";
                                                                statistic = MetricStatisticEnum.MAXIMUM;
                                                                unit = "nobis";
                                                            }};
                                                            disableScaleIn = false;
                                                            estimatedInstanceWarmup = 554242L;
                                                            predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification(ScalingMetricTypeEnum.ASG_AVERAGE_NETWORK_OUT) {{
                                                                predefinedScalingMetricType = ScalingMetricTypeEnum.ECS_SERVICE_AVERAGE_CPU_UTILIZATION;
                                                                resourceLabel = "dolorem";
                                                            }};
                                                            scaleInCooldown = 222443L;
                                                            scaleOutCooldown = 186193L;
                                                            targetValue = 2187.49;
                                                        }}),
                                                    }};
                                                }}),
                                            }}, "suscipit");, CreateScalingPlanXAmzTargetEnum.ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_CREATE_SCALING_PLAN) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            CreateScalingPlanResponse res = sdk.createScalingPlan(req);

            if (res.createScalingPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createScalingPlan](docs/sdk/README.md#createscalingplan) - Creates a scaling plan. 
* [deleteScalingPlan](docs/sdk/README.md#deletescalingplan) - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* [describeScalingPlanResources](docs/sdk/README.md#describescalingplanresources) - Describes the scalable resources in the specified scaling plan.
* [describeScalingPlans](docs/sdk/README.md#describescalingplans) - Describes one or more of your scaling plans.
* [getScalingPlanResourceForecastData](docs/sdk/README.md#getscalingplanresourceforecastdata) - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* [updateScalingPlan](docs/sdk/README.md#updatescalingplan) - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
