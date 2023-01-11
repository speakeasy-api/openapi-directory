# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan";
                }};
                request = new CreateScalingPlanRequest() {{
                    applicationSource = new ApplicationSource() {{
                        cloudFormationStackARN = "fugit";
                        tagFilters = new openapisdk.models.shared.TagFilter[]() {{
                            add(new TagFilter() {{
                                key = "nihil";
                                values = new String[]() {{
                                    add("dicta"),
                                    add("debitis"),
                                    add("voluptatum"),
                                }};
                            }}),
                        }};
                    }};
                    scalingInstructions = new openapisdk.models.shared.ScalingInstruction[]() {{
                        add(new ScalingInstruction() {{
                            customizedLoadMetricSpecification = new CustomizedLoadMetricSpecification() {{
                                dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                    add(new MetricDimension() {{
                                        name = "dolorem";
                                        value = "et";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "voluptate";
                                        value = "iste";
                                    }}),
                                    add(new MetricDimension() {{
                                        name = "vitae";
                                        value = "totam";
                                    }}),
                                }};
                                metricName = "dolores";
                                namespace = "illum";
                                statistic = "Minimum";
                                unit = "vel";
                            }};
                            disableDynamicScaling = false;
                            maxCapacity = 6303220950515014660;
                            minCapacity = 4035568504096476779;
                            predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecification() {{
                                predefinedLoadMetricType = "ASGTotalNetworkIn";
                                resourceLabel = "accusantium";
                            }};
                            predictiveScalingMaxCapacityBehavior = "SetMaxCapacityAboveForecastCapacity";
                            predictiveScalingMaxCapacityBuffer = 6745438398739480977;
                            predictiveScalingMode = "ForecastAndScale";
                            resourceId = "est";
                            scalableDimension = "autoscaling:autoScalingGroup:DesiredCapacity";
                            scalingPolicyUpdateBehavior = "KeepExternalPolicies";
                            scheduledActionBufferTime = 5001958211167890979;
                            serviceNamespace = "dynamodb";
                            targetTrackingConfigurations = new openapisdk.models.shared.TargetTrackingConfiguration[]() {{
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "illo";
                                                value = "sed";
                                            }}),
                                        }};
                                        metricName = "officiis";
                                        namespace = "autem";
                                        statistic = "SampleCount";
                                        unit = "nobis";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 7699391924090763411;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "EC2SpotFleetRequestAverageCPUUtilization";
                                        resourceLabel = "at";
                                    }};
                                    scaleInCooldown = 3959279844101328186;
                                    scaleOutCooldown = 8902041070398994519;
                                    targetValue = 19.100000;
                                }}),
                                add(new TargetTrackingConfiguration() {{
                                    customizedScalingMetricSpecification = new CustomizedScalingMetricSpecification() {{
                                        dimensions = new openapisdk.models.shared.MetricDimension[]() {{
                                            add(new MetricDimension() {{
                                                name = "ut";
                                                value = "exercitationem";
                                            }}),
                                        }};
                                        metricName = "aut";
                                        namespace = "reprehenderit";
                                        statistic = "Maximum";
                                        unit = "maiores";
                                    }};
                                    disableScaleIn = false;
                                    estimatedInstanceWarmup = 7242748068272024738;
                                    predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecification() {{
                                        predefinedScalingMetricType = "ASGAverageNetworkOut";
                                        resourceLabel = "veritatis";
                                    }};
                                    scaleInCooldown = 2671030200101705776;
                                    scaleOutCooldown = 3508963237347473586;
                                    targetValue = 81.199997;
                                }}),
                            }};
                        }}),
                    }};
                    scalingPlanName = "ex";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createScalingPlan` - Creates a scaling plan. 
* `deleteScalingPlan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `describeScalingPlanResources` - Describes the scalable resources in the specified scaling plan.
* `describeScalingPlans` - Describes one or more of your scaling plans.
* `getScalingPlanResourceForecastData` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `updateScalingPlan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
