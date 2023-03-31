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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createSchedule` - Creates the specified schedule.
* `createScheduleGroup` - Creates the specified schedule group.
* `deleteSchedule` - Deletes the specified schedule.
* `deleteScheduleGroup` - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* `getSchedule` - Retrieves the specified schedule.
* `getScheduleGroup` - Retrieves the specified schedule group.
* `listScheduleGroups` - Returns a paginated list of your schedule groups.
* `listSchedules` - Returns a paginated list of your EventBridge Scheduler schedules.
* `listTagsForResource` - Lists the tags associated with the Scheduler resource.
* `tagResource` - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* `untagResource` - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* `updateSchedule` - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
