# SDK

## Overview

 Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets. The following reference lists the available API actions, and data types for EventBridge Scheduler. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/scheduler/>
### Available Operations

* [createSchedule](#createschedule) - Creates the specified schedule.
* [createScheduleGroup](#createschedulegroup) - Creates the specified schedule group.
* [deleteSchedule](#deleteschedule) - Deletes the specified schedule.
* [deleteScheduleGroup](#deleteschedulegroup) - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* [getSchedule](#getschedule) - Retrieves the specified schedule.
* [getScheduleGroup](#getschedulegroup) - Retrieves the specified schedule group.
* [listScheduleGroups](#listschedulegroups) - Returns a paginated list of your schedule groups.
* [listSchedules](#listschedules) - Returns a paginated list of your EventBridge Scheduler schedules.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with the Scheduler resource.
* [tagResource](#tagresource) - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* [untagResource](#untagresource) - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* [updateSchedule](#updateschedule) - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>

## createSchedule

Creates the specified schedule.

### Example Usage

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
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScheduleRequest req = new CreateScheduleRequest("occaecati",                 new CreateScheduleRequestBody(                new CreateScheduleRequestBodyFlexibleTimeWindow() {{
                                                maximumWindowInMinutes = 253291L;
                                                mode = FlexibleTimeWindowModeEnum.OFF;
                                            }};, "quam",                 new CreateScheduleRequestBodyTarget() {{
                                                arn = "molestiae";
                                                deadLetterConfig = new DeadLetterConfig() {{
                                                    arn = "velit";
                                                }};;
                                                ecsParameters = new EcsParameters("error") {{
                                                    capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                                        add(new CapacityProviderStrategyItem("animi") {{
                                                            base = 338007L;
                                                            capacityProvider = "vitae";
                                                            weight = 674752L;
                                                        }}),
                                                    }};
                                                    enableECSManagedTags = false;
                                                    enableExecuteCommand = false;
                                                    group = "enim";
                                                    launchType = LaunchTypeEnum.EC2;
                                                    networkConfiguration = new NetworkConfiguration() {{
                                                        awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                            add("sequi"),
                                                                            add("tenetur"),
                                                                            add("ipsam"),
                                                                            add("id"),
                                                                        }}) {{
                                                            assignPublicIp = AssignPublicIpEnum.DISABLED;
                                                            securityGroups = new String[]{{
                                                                add("quasi"),
                                                            }};
                                                        }};;
                                                    }};;
                                                    placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                                        add(new PlacementConstraint() {{
                                                            expression = "temporibus";
                                                            type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "quasi";
                                                            type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "voluptatibus";
                                                            type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                        }}),
                                                    }};
                                                    placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                                        add(new PlacementStrategy() {{
                                                            field = "praesentium";
                                                            type = PlacementStrategyTypeEnum.BINPACK;
                                                        }}),
                                                        add(new PlacementStrategy() {{
                                                            field = "ipsa";
                                                            type = PlacementStrategyTypeEnum.SPREAD;
                                                        }}),
                                                    }};
                                                    platformVersion = "voluptate";
                                                    propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                                    referenceId = "cum";
                                                    tags = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("reprehenderit", "ut");
                                                        }}),
                                                    }};
                                                    taskCount = 979587L;
                                                }};;
                                                eventBridgeParameters = new EventBridgeParameters("dicta", "corporis");;
                                                input = "dolore";
                                                kinesisParameters = new KinesisParameters("iusto");;
                                                retryPolicy = new RetryPolicy() {{
                                                    maximumEventAgeInSeconds = 118727L;
                                                    maximumRetryAttempts = 688661L;
                                                }};;
                                                roleArn = "enim";
                                                sageMakerPipelineParameters = new SageMakerPipelineParameters() {{
                                                    pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                                        add(new SageMakerPipelineParameter("excepturi", "pariatur") {{
                                                            name = "Elvira Bergnaum";
                                                            value = "molestias";
                                                        }}),
                                                        add(new SageMakerPipelineParameter("veritatis", "itaque") {{
                                                            name = "Irma Ledner DVM";
                                                            value = "sint";
                                                        }}),
                                                        add(new SageMakerPipelineParameter("deserunt", "distinctio") {{
                                                            name = "Erin Altenwerth";
                                                            value = "explicabo";
                                                        }}),
                                                        add(new SageMakerPipelineParameter("quos", "perferendis") {{
                                                            name = "Francisco Gleason";
                                                            value = "cupiditate";
                                                        }}),
                                                    }};
                                                }};;
                                                sqsParameters = new SqsParameters() {{
                                                    messageGroupId = "magni";
                                                }};;
                                            }};) {{
                                clientToken = "assumenda";
                                description = "ipsam";
                                endDate = OffsetDateTime.parse("2022-11-08T13:10:11.700Z");
                                groupName = "dolorum";
                                kmsKeyArn = "excepturi";
                                scheduleExpressionTimezone = "tempora";
                                startDate = OffsetDateTime.parse("2021-07-13T07:24:02.478Z");
                                state = CreateScheduleRequestBodyStateEnum.ENABLED;
                            }};) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "non";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "provident";
            }};            

            CreateScheduleResponse res = sdk.sdk.createSchedule(req);

            if (res.createScheduleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScheduleGroup

Creates the specified schedule group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScheduleGroupRequest;
import org.openapis.openapi.models.operations.CreateScheduleGroupRequestBody;
import org.openapis.openapi.models.operations.CreateScheduleGroupResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateScheduleGroupRequest req = new CreateScheduleGroupRequest("sint",                 new CreateScheduleGroupRequestBody() {{
                                clientToken = "officia";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolorum", "in") {{
                                        key = "debitis";
                                        value = "a";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            CreateScheduleGroupResponse res = sdk.sdk.createScheduleGroup(req);

            if (res.createScheduleGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSchedule

Deletes the specified schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScheduleRequest;
import org.openapis.openapi.models.operations.DeleteScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScheduleRequest req = new DeleteScheduleRequest("ea") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
                clientToken = "delectus";
                groupName = "quidem";
            }};            

            DeleteScheduleResponse res = sdk.sdk.deleteSchedule(req);

            if (res.deleteScheduleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScheduleGroup

<p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScheduleGroupRequest;
import org.openapis.openapi.models.operations.DeleteScheduleGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScheduleGroupRequest req = new DeleteScheduleGroupRequest("nam") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
                clientToken = "vel";
            }};            

            DeleteScheduleGroupResponse res = sdk.sdk.deleteScheduleGroup(req);

            if (res.deleteScheduleGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedule

Retrieves the specified schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScheduleRequest;
import org.openapis.openapi.models.operations.GetScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScheduleRequest req = new GetScheduleRequest("omnis") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
                groupName = "labore";
            }};            

            GetScheduleResponse res = sdk.sdk.getSchedule(req);

            if (res.getScheduleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScheduleGroup

Retrieves the specified schedule group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScheduleGroupRequest;
import org.openapis.openapi.models.operations.GetScheduleGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScheduleGroupRequest req = new GetScheduleGroupRequest("natus") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
            }};            

            GetScheduleGroupResponse res = sdk.sdk.getScheduleGroup(req);

            if (res.getScheduleGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScheduleGroups

Returns a paginated list of your schedule groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScheduleGroupsRequest;
import org.openapis.openapi.models.operations.ListScheduleGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListScheduleGroupsRequest req = new ListScheduleGroupsRequest() {{
                maxResults = 354047L;
                namePrefix = "provident";
                nextToken = "quos";
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
            }};            

            ListScheduleGroupsResponse res = sdk.sdk.listScheduleGroups(req);

            if (res.listScheduleGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSchedules

Returns a paginated list of your EventBridge Scheduler schedules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSchedulesRequest;
import org.openapis.openapi.models.operations.ListSchedulesResponse;
import org.openapis.openapi.models.operations.ListSchedulesStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSchedulesRequest req = new ListSchedulesRequest() {{
                maxResults = 896547L;
                namePrefix = "odit";
                nextToken = "nemo";
                scheduleGroup = "quasi";
                state = ListSchedulesStateEnum.ENABLED;
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            ListSchedulesResponse res = sdk.sdk.listSchedules(req);

            if (res.listSchedulesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags associated with the Scheduler resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("architecto") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("praesentium", "natus") {{
                                                    key = "accusantium";
                                                    value = "consequuntur";
                                                }}),
                                                add(new Tag("quo", "illum") {{
                                                    key = "magni";
                                                    value = "sunt";
                                                }}),
                                                add(new Tag("ea", "excepturi") {{
                                                    key = "pariatur";
                                                    value = "maxime";
                                                }}),
                                                add(new Tag("accusantium", "ab") {{
                                                    key = "odit";
                                                    value = "ea";
                                                }}),
                                            }});, "maiores") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified EventBridge Scheduler schedule group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("voluptatibus",                 new String[]{{
                                add("fugiat"),
                            }}) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSchedule

<p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScheduleRequest;
import org.openapis.openapi.models.operations.UpdateScheduleRequestBody;
import org.openapis.openapi.models.operations.UpdateScheduleRequestBodyFlexibleTimeWindow;
import org.openapis.openapi.models.operations.UpdateScheduleRequestBodyStateEnum;
import org.openapis.openapi.models.operations.UpdateScheduleRequestBodyTarget;
import org.openapis.openapi.models.operations.UpdateScheduleResponse;
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
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateScheduleRequest req = new UpdateScheduleRequest("quis",                 new UpdateScheduleRequestBody(                new UpdateScheduleRequestBodyFlexibleTimeWindow() {{
                                                maximumWindowInMinutes = 521037L;
                                                mode = FlexibleTimeWindowModeEnum.OFF;
                                            }};, "eaque",                 new UpdateScheduleRequestBodyTarget() {{
                                                arn = "quis";
                                                deadLetterConfig = new DeadLetterConfig() {{
                                                    arn = "nesciunt";
                                                }};;
                                                ecsParameters = new EcsParameters("eos") {{
                                                    capacityProviderStrategy = new org.openapis.openapi.models.shared.CapacityProviderStrategyItem[]{{
                                                        add(new CapacityProviderStrategyItem("dolor") {{
                                                            base = 170986L;
                                                            capacityProvider = "minus";
                                                            weight = 463451L;
                                                        }}),
                                                    }};
                                                    enableECSManagedTags = false;
                                                    enableExecuteCommand = false;
                                                    group = "vero";
                                                    launchType = LaunchTypeEnum.FARGATE;
                                                    networkConfiguration = new NetworkConfiguration() {{
                                                        awsvpcConfiguration = new AwsVpcConfiguration(                new String[]{{
                                                                            add("recusandae"),
                                                                            add("omnis"),
                                                                            add("facilis"),
                                                                            add("perspiciatis"),
                                                                        }}) {{
                                                            assignPublicIp = AssignPublicIpEnum.ENABLED;
                                                            securityGroups = new String[]{{
                                                                add("consequuntur"),
                                                                add("blanditiis"),
                                                                add("error"),
                                                                add("eaque"),
                                                            }};
                                                        }};;
                                                    }};;
                                                    placementConstraints = new org.openapis.openapi.models.shared.PlacementConstraint[]{{
                                                        add(new PlacementConstraint() {{
                                                            expression = "rerum";
                                                            type = PlacementConstraintTypeEnum.DISTINCT_INSTANCE;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "asperiores";
                                                            type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                        }}),
                                                        add(new PlacementConstraint() {{
                                                            expression = "modi";
                                                            type = PlacementConstraintTypeEnum.MEMBER_OF;
                                                        }}),
                                                    }};
                                                    placementStrategy = new org.openapis.openapi.models.shared.PlacementStrategy[]{{
                                                        add(new PlacementStrategy() {{
                                                            field = "deleniti";
                                                            type = PlacementStrategyTypeEnum.BINPACK;
                                                        }}),
                                                        add(new PlacementStrategy() {{
                                                            field = "provident";
                                                            type = PlacementStrategyTypeEnum.BINPACK;
                                                        }}),
                                                        add(new PlacementStrategy() {{
                                                            field = "libero";
                                                            type = PlacementStrategyTypeEnum.BINPACK;
                                                        }}),
                                                    }};
                                                    platformVersion = "quaerat";
                                                    propagateTags = PropagateTagsEnum.TASK_DEFINITION;
                                                    referenceId = "quos";
                                                    tags = new java.util.HashMap<String, String>[]{{
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("dolorem", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, String>() {{
                                                            put("ipsum", "hic");
                                                        }}),
                                                    }};
                                                    taskCount = 569574L;
                                                }};;
                                                eventBridgeParameters = new EventBridgeParameters("cum", "voluptate");;
                                                input = "dignissimos";
                                                kinesisParameters = new KinesisParameters("reiciendis");;
                                                retryPolicy = new RetryPolicy() {{
                                                    maximumEventAgeInSeconds = 227414L;
                                                    maximumRetryAttempts = 680545L;
                                                }};;
                                                roleArn = "numquam";
                                                sageMakerPipelineParameters = new SageMakerPipelineParameters() {{
                                                    pipelineParameterList = new org.openapis.openapi.models.shared.SageMakerPipelineParameter[]{{
                                                        add(new SageMakerPipelineParameter("quidem", "voluptatibus") {{
                                                            name = "Angela Kerluke";
                                                            value = "accusamus";
                                                        }}),
                                                    }};
                                                }};;
                                                sqsParameters = new SqsParameters() {{
                                                    messageGroupId = "voluptas";
                                                }};;
                                            }};) {{
                                clientToken = "natus";
                                description = "eos";
                                endDate = OffsetDateTime.parse("2022-12-13T23:37:42.244Z");
                                groupName = "fugiat";
                                kmsKeyArn = "ab";
                                scheduleExpressionTimezone = "soluta";
                                startDate = OffsetDateTime.parse("2022-01-16T14:59:31.978Z");
                                state = UpdateScheduleRequestBodyStateEnum.ENABLED;
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
            }};            

            UpdateScheduleResponse res = sdk.sdk.updateSchedule(req);

            if (res.updateScheduleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
