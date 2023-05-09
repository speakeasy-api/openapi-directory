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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScheduleRequest;
import org.openapis.openapi.models.operations.CreateScheduleRequestBody;
import org.openapis.openapi.models.operations.CreateScheduleRequestBodyFlexibleTimeWindow;
import org.openapis.openapi.models.operations.CreateScheduleRequestBodyStateEnum;
import org.openapis.openapi.models.operations.CreateScheduleRequestBodyTarget;
import org.openapis.openapi.models.operations.CreateScheduleResponse;
import org.openapis.openapi.models.shared.AssignPublicIpEnum;
import org.openapis.openapi.models.shared.AwsVpcConfiguration;
import org.openapis.openapi.models.shared.CapacityProviderStrategyItem;
import org.openapis.openapi.models.shared.DeadLetterConfig;
import org.openapis.openapi.models.shared.EcsParameters;
import org.openapis.openapi.models.shared.EventBridgeParameters;
import org.openapis.openapi.models.shared.FlexibleTimeWindowModeEnum;
import org.openapis.openapi.models.shared.KinesisParameters;
import org.openapis.openapi.models.shared.LaunchTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfiguration;
import org.openapis.openapi.models.shared.PlacementConstraint;
import org.openapis.openapi.models.shared.PlacementConstraintTypeEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.PlacementStrategyTypeEnum;
import org.openapis.openapi.models.shared.PropagateTagsEnum;
import org.openapis.openapi.models.shared.RetryPolicy;
import org.openapis.openapi.models.shared.SageMakerPipelineParameter;
import org.openapis.openapi.models.shared.SageMakerPipelineParameters;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqsParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScheduleRequest req = new CreateScheduleRequest("provident",                 new CreateScheduleRequestBody(                new CreateScheduleRequestBodyFlexibleTimeWindow() {{
                                                maximumWindowInMinutes = 715190L;
                                                mode = FlexibleTimeWindowModeEnum.FLEXIBLE;
                                            }};, "unde",                 new CreateScheduleRequestBodyTarget() {{
                                                arn = "nulla";
                                                deadLetterConfig = new DeadLetterConfig() {{
                                                    arn = "corrupti";
                                                }};;
                                                ecsParameters = new EcsParameters("illum") {{
                                                    capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                                        add(new CapacityProviderStrategyItem("iure") {{
                                                            base = 623564L;
                                                            capacityProvider = "deserunt";
                                                            weight = 384382L;
                                                        }}),
                                                        add(new CapacityProviderStrategyItem("delectus") {{
                                                            base = 297534L;
                                                            capacityProvider = "debitis";
                                                            weight = 56713L;
                                                        }}),
                                                    }};
                                                    enableECSManagedTags = false;
                                                    enableExecuteCommand = false;
                                                    group = "tempora";
                                                    launchType = LaunchTypeEnum.FARGATE;
                                                    networkConfiguration = new NetworkConfiguration() {{
                                                        awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                            add("minus"),
                                                                            add("placeat"),
                                                                        }}) {{
                                                            assignPublicIp = AssignPublicIpEnum.DISABLED;
                                                            securityGroups = new String[]{{
                                                                add("excepturi"),
                                                                add("nisi"),
                                                            }};
                                                        }};;
                                                    }};;
                                                    placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                                        add(new PlacementConstraint() {{
                                                            expression = "temporibus";
                                                            type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "quis";
                                                            type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "deserunt";
                                                            type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "ipsam";
                                                            type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                        }}),
                                                    }};
                                                    placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                                        add(new PlacementStrategy() {{
                                                            field = "quo";
                                                            type = PlacementStrategyTypeEnum.RANDOM;
                                                        }}),
                                                        add(new PlacementStrategy() {{
                                                            field = "at";
                                                            type = PlacementStrategyTypeEnum.BINPACK;
                                                        }}),
                                                        add(new PlacementStrategy() {{
                                                            field = "maiores";
                                                            type = PlacementStrategyTypeEnum.SPREAD;
                                                        }}),
                                                        add(new PlacementStrategy() {{
                                                            field = "quod";
                                                            type = PlacementStrategyTypeEnum.BINPACK;
                                                        }}),
                                                    }};
                                                    platformVersion = "esse";
                                                    propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                                    referenceId = "totam";
                                                    tags = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("dicta", "nam");
                                                            put("officia", "occaecati");
                                                            put("fugit", "deleniti");
                                                        }}),
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
                                                    taskCount = 902599L;
                                                }};;
                                                eventBridgeParameters = new EventBridgeParameters("fuga", "in");;
                                                input = "corporis";
                                                kinesisParameters = new KinesisParameters("iste");;
                                                retryPolicy = new RetryPolicy() {{
                                                    maximumEventAgeInSeconds = 437032L;
                                                    maximumRetryAttempts = 902349L;
                                                }};;
                                                roleArn = "quidem";
                                                sageMakerPipelineParameters = new SageMakerPipelineParameters() {{
                                                    pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                                        add(new SageMakerPipelineParameter("dolorem", "corporis") {{
                                                            name = "Lela Orn";
                                                            value = "dolores";
                                                        }}),
                                                    }};
                                                }};;
                                                sqsParameters = new SqsParameters() {{
                                                    messageGroupId = "explicabo";
                                                }};;
                                            }};) {{
                                clientToken = "nobis";
                                description = "enim";
                                endDate = OffsetDateTime.parse("2022-04-10T11:47:13.463Z");
                                groupName = "minima";
                                kmsKeyArn = "excepturi";
                                scheduleExpressionTimezone = "accusantium";
                                startDate = OffsetDateTime.parse("2022-05-14T11:45:33.094Z");
                                state = CreateScheduleRequestBodyStateEnum.DISABLED;
                            }};) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            CreateScheduleResponse res = sdk.createSchedule(req);

            if (res.createScheduleOutput != null) {
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

* [createSchedule](docs/sdk/README.md#createschedule) - Creates the specified schedule.
* [createScheduleGroup](docs/sdk/README.md#createschedulegroup) - Creates the specified schedule group.
* [deleteSchedule](docs/sdk/README.md#deleteschedule) - Deletes the specified schedule.
* [deleteScheduleGroup](docs/sdk/README.md#deleteschedulegroup) - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* [getSchedule](docs/sdk/README.md#getschedule) - Retrieves the specified schedule.
* [getScheduleGroup](docs/sdk/README.md#getschedulegroup) - Retrieves the specified schedule group.
* [listScheduleGroups](docs/sdk/README.md#listschedulegroups) - Returns a paginated list of your schedule groups.
* [listSchedules](docs/sdk/README.md#listschedules) - Returns a paginated list of your EventBridge Scheduler schedules.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with the Scheduler resource.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* [updateSchedule](docs/sdk/README.md#updateschedule) - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
