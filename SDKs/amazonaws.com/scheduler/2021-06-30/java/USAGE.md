<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSchedulePathParams;
import org.openapis.openapi.models.operations.CreateScheduleHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateScheduleRequest req = new CreateScheduleRequest() {{
                pathParams = new CreateSchedulePathParams() {{
                    name = "corrupti";
                }};
                headers = new CreateScheduleHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new CreateScheduleRequestBody() {{
                    clientToken = "vel";
                    description = "error";
                    endDate = "2022-03-26T09:37:56.283Z";
                    flexibleTimeWindow = new CreateScheduleRequestBodyFlexibleTimeWindow() {{
                        maximumWindowInMinutes = 437587;
                        mode = "OFF";
                    }};
                    groupName = "debitis";
                    kmsKeyArn = "ipsa";
                    scheduleExpression = "delectus";
                    scheduleExpressionTimezone = "tempora";
                    startDate = "2022-07-10T15:39:12.517Z";
                    state = "DISABLED";
                    target = new CreateScheduleRequestBodyTarget() {{
                        arn = "placeat";
                        deadLetterConfig = new DeadLetterConfig() {{
                            arn = "voluptatum";
                        }};
                        ecsParameters = new EcsParameters() {{
                            capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                add(new CapacityProviderStrategyItem() {{
                                    base = 568045;
                                    capacityProvider = "nisi";
                                    weight = 925597;
                                }}),
                                add(new CapacityProviderStrategyItem() {{
                                    base = 836079;
                                    capacityProvider = "ab";
                                    weight = 337396;
                                }}),
                            }};
                            enableECSManagedTags = false;
                            enableExecuteCommand = false;
                            group = "veritatis";
                            launchType = "FARGATE";
                            networkConfiguration = new NetworkConfiguration() {{
                                awsvpcConfiguration = new AwsVpcConfiguration() {{
                                    assignPublicIp = "ENABLED";
                                    securityGroups = new String[]{{
                                        add("repellendus"),
                                        add("sapiente"),
                                    }};
                                    subnets = new String[]{{
                                        add("odit"),
                                        add("at"),
                                        add("at"),
                                        add("maiores"),
                                    }};
                                }};
                            }};
                            placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                add(new PlacementConstraint() {{
                                    expression = "quod";
                                    type = "memberOf";
                                }}),
                                add(new PlacementConstraint() {{
                                    expression = "esse";
                                    type = "memberOf";
                                }}),
                            }};
                            placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                add(new PlacementStrategy() {{
                                    field = "dolorum";
                                    type = "random";
                                }}),
                                add(new PlacementStrategy() {{
                                    field = "nam";
                                    type = "spread";
                                }}),
                                add(new PlacementStrategy() {{
                                    field = "occaecati";
                                    type = "random";
                                }}),
                                add(new PlacementStrategy() {{
                                    field = "deleniti";
                                    type = "binpack";
                                }}),
                            }};
                            platformVersion = "optio";
                            propagateTags = "TASK_DEFINITION";
                            referenceId = "totam";
                            tags = new java.util.HashMap<String, String>[]{{
                                add(new java.util.HashMap<String, String>() {{
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }}),
                            }};
                            taskCount = 736918;
                            taskDefinitionArn = "esse";
                        }};
                        eventBridgeParameters = new EventBridgeParameters() {{
                            detailType = "ipsum";
                            source = "excepturi";
                        }};
                        input = "aspernatur";
                        kinesisParameters = new KinesisParameters() {{
                            partitionKey = "perferendis";
                        }};
                        retryPolicy = new RetryPolicy() {{
                            maximumEventAgeInSeconds = 324141;
                            maximumRetryAttempts = 617636;
                        }};
                        roleArn = "sed";
                        sageMakerPipelineParameters = new SageMakerPipelineParameters() {{
                            pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                add(new SageMakerPipelineParameter() {{
                                    name = "dolor";
                                    value = "natus";
                                }}),
                                add(new SageMakerPipelineParameter() {{
                                    name = "laboriosam";
                                    value = "hic";
                                }}),
                                add(new SageMakerPipelineParameter() {{
                                    name = "saepe";
                                    value = "fuga";
                                }}),
                            }};
                        }};
                        sqsParameters = new SqsParameters() {{
                            messageGroupId = "in";
                        }};
                    }};
                }};
            }};            

            CreateScheduleResponse res = sdk.createSchedule(req);

            if (res.createScheduleOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->