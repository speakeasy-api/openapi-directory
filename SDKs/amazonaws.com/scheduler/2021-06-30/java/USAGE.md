<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateScheduleRequestBodyFlexibleTimeWindow;
import org.openapis.openapi.models.operations.CreateScheduleRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateScheduleRequestBodyTarget;
import org.openapis.openapi.models.operations.CreateScheduleRequestBody;
import org.openapis.openapi.models.operations.CreateScheduleRequest;
import org.openapis.openapi.models.operations.CreateScheduleResponse;
import org.openapis.openapi.models.shared.SqsParameters;
import org.openapis.openapi.models.shared.SageMakerPipelineParameters;
import org.openapis.openapi.models.shared.SageMakerPipelineParameter;
import org.openapis.openapi.models.shared.RetryPolicy;
import org.openapis.openapi.models.shared.KinesisParameters;
import org.openapis.openapi.models.shared.EventBridgeParameters;
import org.openapis.openapi.models.shared.EcsParameters;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.DeadLetterConfig;
import org.openapis.openapi.models.shared.FlexibleTimeWindowModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScheduleRequest req = new CreateScheduleRequest() {{
                name = "corrupti";
                requestBody = new CreateScheduleRequestBody() {{
                    clientToken = "provident";
                    description = "distinctio";
                    endDate = "2021-03-11T23:22:42.658Z";
                    flexibleTimeWindow = new CreateScheduleRequestBodyFlexibleTimeWindow() {{
                        maximumWindowInMinutes = 857946;
                        mode = "FLEXIBLE";
                    }};
                    groupName = "illum";
                    kmsKeyArn = "vel";
                    scheduleExpression = "error";
                    scheduleExpressionTimezone = "deserunt";
                    startDate = "2022-07-25T06:44:09.184Z";
                    state = "ENABLED";
                    target = new CreateScheduleRequestBodyTarget() {{
                        arn = "debitis";
                        deadLetterConfig = new DeadLetterConfig() {{
                            arn = "ipsa";
                        }};
                        ecsParameters = new EcsParameters() {{
                            capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                add(new CapacityProviderStrategyItem() {{
                                    base = 272656;
                                    capacityProvider = "suscipit";
                                    weight = 477665;
                                }}),
                                add(new CapacityProviderStrategyItem() {{
                                    base = 791725;
                                    capacityProvider = "placeat";
                                    weight = 528895;
                                }}),
                                add(new CapacityProviderStrategyItem() {{
                                    base = 479977;
                                    capacityProvider = "excepturi";
                                    weight = 392785;
                                }}),
                                add(new CapacityProviderStrategyItem() {{
                                    base = 925597;
                                    capacityProvider = "temporibus";
                                    weight = 71036;
                                }}),
                            }};
                            enableECSManagedTags = false;
                            enableExecuteCommand = false;
                            group = "quis";
                            launchType = "EC2";
                            networkConfiguration = new NetworkConfiguration() {{
                                awsvpcConfiguration = new AwsVpcConfiguration() {{
                                    assignPublicIp = "DISABLED";
                                    securityGroups = new String[]{{
                                        add("ipsam"),
                                    }};
                                    subnets = new String[]{{
                                        add("sapiente"),
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                    }};
                                }};
                            }};
                            placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                add(new PlacementConstraint() {{
                                    expression = "maiores";
                                    type = "distinctInstance";
                                }}),
                                add(new PlacementConstraint() {{
                                    expression = "quod";
                                    type = "memberOf";
                                }}),
                                add(new PlacementConstraint() {{
                                    expression = "esse";
                                    type = "memberOf";
                                }}),
                                add(new PlacementConstraint() {{
                                    expression = "porro";
                                    type = "memberOf";
                                }}),
                            }};
                            placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                add(new PlacementStrategy() {{
                                    field = "nam";
                                    type = "spread";
                                }}),
                            }};
                            platformVersion = "occaecati";
                            propagateTags = "TASK_DEFINITION";
                            referenceId = "fugit";
                            tags = new java.util.HashMap<String, String>[]{{
                                add(new java.util.HashMap<String, String>() {{
                                    put("optio", "totam");
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }}),
                                add(new java.util.HashMap<String, String>() {{
                                    put("esse", "ipsum");
                                    put("excepturi", "aspernatur");
                                    put("perferendis", "ad");
                                }}),
                                add(new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }}),
                            }};
                            taskCount = 902599;
                            taskDefinitionArn = "fuga";
                        }};
                        eventBridgeParameters = new EventBridgeParameters() {{
                            detailType = "in";
                            source = "corporis";
                        }};
                        input = "iste";
                        kinesisParameters = new KinesisParameters() {{
                            partitionKey = "iure";
                        }};
                        retryPolicy = new RetryPolicy() {{
                            maximumEventAgeInSeconds = 902349;
                            maximumRetryAttempts = 697631;
                        }};
                        roleArn = "architecto";
                        sageMakerPipelineParameters = new SageMakerPipelineParameters() {{
                            pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                add(new SageMakerPipelineParameter() {{
                                    name = "reiciendis";
                                    value = "est";
                                }}),
                            }};
                        }};
                        sqsParameters = new SqsParameters() {{
                            messageGroupId = "mollitia";
                        }};
                    }};
                }};
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }}            

            CreateScheduleResponse res = sdk.createSchedule(req);

            if (res.createScheduleOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->