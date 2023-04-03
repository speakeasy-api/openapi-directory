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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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
