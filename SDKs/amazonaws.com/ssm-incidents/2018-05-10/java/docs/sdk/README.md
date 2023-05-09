# SDK

## Overview

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services. </p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-incidents/>
### Available Operations

* [createReplicationSet](#createreplicationset) - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* [createResponsePlan](#createresponseplan) - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* [createTimelineEvent](#createtimelineevent) - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* [deleteIncidentRecord](#deleteincidentrecord) - Delete an incident record from Incident Manager. 
* [deleteReplicationSet](#deletereplicationset) - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* [deleteResponsePlan](#deleteresponseplan) - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* [deleteTimelineEvent](#deletetimelineevent) - Deletes a timeline event from an incident.
* [getIncidentRecord](#getincidentrecord) - Returns the details for the specified incident record.
* [getReplicationSet](#getreplicationset) - Retrieve your Incident Manager replication set.
* [getResourcePolicies](#getresourcepolicies) - Retrieves the resource policies attached to the specified response plan.
* [getResponsePlan](#getresponseplan) - Retrieves the details of the specified response plan.
* [getTimelineEvent](#gettimelineevent) - Retrieves a timeline event based on its ID and incident record.
* [listIncidentRecords](#listincidentrecords) - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* [listRelatedItems](#listrelateditems) - List all related items for an incident record.
* [listReplicationSets](#listreplicationsets) - Lists details about the replication set configured in your account. 
* [listResponsePlans](#listresponseplans) - Lists all response plans in your account.
* [listTagsForResource](#listtagsforresource) - Lists the tags that are attached to the specified response plan.
* [listTimelineEvents](#listtimelineevents) - Lists timeline events for the specified incident record.
* [putResourcePolicy](#putresourcepolicy) - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* [startIncident](#startincident) - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* [tagResource](#tagresource) - Adds a tag to a response plan.
* [untagResource](#untagresource) - Removes a tag from a resource.
* [updateDeletionProtection](#updatedeletionprotection) - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* [updateIncidentRecord](#updateincidentrecord) - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* [updateRelatedItems](#updaterelateditems) - Add or remove related items from the related items tab of an incident record.
* [updateReplicationSet](#updatereplicationset) - Add or delete Regions from your replication set.
* [updateResponsePlan](#updateresponseplan) - Updates the specified response plan.
* [updateTimelineEvent](#updatetimelineevent) - Updates a timeline event. You can update events of type <code>Custom Event</code>.

## createReplicationSet

A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplicationSetRequest;
import org.openapis.openapi.models.operations.CreateReplicationSetRequestBody;
import org.openapis.openapi.models.operations.CreateReplicationSetResponse;
import org.openapis.openapi.models.shared.RegionMapInputValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReplicationSetRequest req = new CreateReplicationSetRequest(                new CreateReplicationSetRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionMapInputValue>() {{
                                                put("nisi", new RegionMapInputValue() {{
                                                    sseKmsKeyId = "recusandae";
                                                }});
                                                put("temporibus", new RegionMapInputValue() {{
                                                    sseKmsKeyId = "ab";
                                                }});
                                                put("quis", new RegionMapInputValue() {{
                                                    sseKmsKeyId = "veritatis";
                                                }});
                                            }}) {{
                                clientToken = "deserunt";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "repellendus");
                                }};
                            }};) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateReplicationSetResponse res = sdk.sdk.createReplicationSet(req);

            if (res.createReplicationSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResponsePlan

Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResponsePlanRequest;
import org.openapis.openapi.models.operations.CreateResponsePlanRequestBody;
import org.openapis.openapi.models.operations.CreateResponsePlanRequestBodyChatChannel;
import org.openapis.openapi.models.operations.CreateResponsePlanRequestBodyIncidentTemplate;
import org.openapis.openapi.models.operations.CreateResponsePlanResponse;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.DynamicSsmParameterValue;
import org.openapis.openapi.models.shared.Integration;
import org.openapis.openapi.models.shared.NotificationTargetItem;
import org.openapis.openapi.models.shared.PagerDutyConfiguration;
import org.openapis.openapi.models.shared.PagerDutyIncidentConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmAutomation;
import org.openapis.openapi.models.shared.SsmTargetAccountEnum;
import org.openapis.openapi.models.shared.VariableTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResponsePlanRequest req = new CreateResponsePlanRequest(                new CreateResponsePlanRequestBody(                new CreateResponsePlanRequestBodyIncidentTemplate() {{
                                                dedupeString = "quod";
                                                impact = 461479L;
                                                incidentTags = new java.util.HashMap<String, String>() {{
                                                    put("porro", "dolorum");
                                                    put("dicta", "nam");
                                                    put("officia", "occaecati");
                                                }};
                                                notificationTargets = new org.openapis.openapi.models.shared.NotificationTargetItem[]{{
                                                    add(new NotificationTargetItem() {{
                                                        snsTopicArn = "deleniti";
                                                    }}),
                                                }};
                                                summary = "hic";
                                                title = "Miss";
                                            }};, "totam") {{
                                actions = new org.openapis.openapi.models.shared.Action[]{{
                                    add(new Action() {{
                                        ssmAutomation = new SsmAutomation("sed", "iste") {{
                                            documentName = "commodi";
                                            documentVersion = "molestiae";
                                            dynamicParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.DynamicSsmParameterValue>() {{
                                                put("qui", new DynamicSsmParameterValue() {{
                                                    variable = VariableTypeEnum.INVOLVED_RESOURCES;
                                                }});
                                                put("cum", new DynamicSsmParameterValue() {{
                                                    variable = VariableTypeEnum.INCIDENT_RECORD_ARN;
                                                }});
                                            }};
                                            parameters = new java.util.HashMap<String, String[]>() {{
                                                put("excepturi", new String[]{{
                                                    add("perferendis"),
                                                }});
                                            }};
                                            roleArn = "ad";
                                            targetAccount = SsmTargetAccountEnum.IMPACTED_ACCOUNT;
                                        }};
                                    }}),
                                }};
                                chatChannel = new CreateResponsePlanRequestBodyChatChannel() {{
                                    chatbotSns = new String[]{{
                                        add("natus"),
                                    }};
                                    empty = new java.util.HashMap<String, Object>() {{
                                        put("hic", "saepe");
                                        put("fuga", "in");
                                    }};
                                }};;
                                clientToken = "corporis";
                                displayName = "iste";
                                engagements = new String[]{{
                                    add("saepe"),
                                    add("quidem"),
                                }};
                                integrations = new org.openapis.openapi.models.shared.Integration[]{{
                                    add(new Integration() {{
                                        pagerDutyConfiguration = new PagerDutyConfiguration("explicabo",                 new PagerDutyIncidentConfiguration("nobis");, "enim") {{
                                            name = "Lela Orn";
                                            pagerDutyIncidentConfiguration = new PagerDutyIncidentConfiguration("dolorem") {{
                                                serviceId = "dolores";
                                            }};
                                            secretId = "corporis";
                                        }};
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateResponsePlanResponse res = sdk.sdk.createResponsePlan(req);

            if (res.createResponsePlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTimelineEvent

Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTimelineEventRequest;
import org.openapis.openapi.models.operations.CreateTimelineEventRequestBody;
import org.openapis.openapi.models.operations.CreateTimelineEventResponse;
import org.openapis.openapi.models.shared.EventReference;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTimelineEventRequest req = new CreateTimelineEventRequest(                new CreateTimelineEventRequestBody("mollitia", OffsetDateTime.parse("2022-06-30T02:19:51.375Z"), "commodi", "quam") {{
                                clientToken = "molestiae";
                                eventReferences = new org.openapis.openapi.models.shared.EventReference[]{{
                                    add(new EventReference() {{
                                        relatedItemId = "error";
                                        resource = "quia";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            CreateTimelineEventResponse res = sdk.sdk.createTimelineEvent(req);

            if (res.createTimelineEventOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIncidentRecord

Delete an incident record from Incident Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIncidentRecordRequest;
import org.openapis.openapi.models.operations.DeleteIncidentRecordRequestBody;
import org.openapis.openapi.models.operations.DeleteIncidentRecordResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIncidentRecordRequest req = new DeleteIncidentRecordRequest(                new DeleteIncidentRecordRequestBody("tenetur");) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
            }};            

            DeleteIncidentRecordResponse res = sdk.sdk.deleteIncidentRecord(req);

            if (res.deleteIncidentRecordOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReplicationSet

Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReplicationSetRequest;
import org.openapis.openapi.models.operations.DeleteReplicationSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReplicationSetRequest req = new DeleteReplicationSetRequest("quasi") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteReplicationSetResponse res = sdk.sdk.deleteReplicationSet(req);

            if (res.deleteReplicationSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequestBody;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequestBody("voluptate", "cum");) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResponsePlan

Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResponsePlanRequest;
import org.openapis.openapi.models.operations.DeleteResponsePlanRequestBody;
import org.openapis.openapi.models.operations.DeleteResponsePlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResponsePlanRequest req = new DeleteResponsePlanRequest(                new DeleteResponsePlanRequestBody("iusto");) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            DeleteResponsePlanResponse res = sdk.sdk.deleteResponsePlan(req);

            if (res.deleteResponsePlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTimelineEvent

Deletes a timeline event from an incident.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTimelineEventRequest;
import org.openapis.openapi.models.operations.DeleteTimelineEventRequestBody;
import org.openapis.openapi.models.operations.DeleteTimelineEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTimelineEventRequest req = new DeleteTimelineEventRequest(                new DeleteTimelineEventRequestBody("quidem", "molestias");) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteTimelineEventResponse res = sdk.sdk.deleteTimelineEvent(req);

            if (res.deleteTimelineEventOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIncidentRecord

Returns the details for the specified incident record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIncidentRecordRequest;
import org.openapis.openapi.models.operations.GetIncidentRecordResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIncidentRecordRequest req = new GetIncidentRecordRequest("sint") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GetIncidentRecordResponse res = sdk.sdk.getIncidentRecord(req);

            if (res.getIncidentRecordOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReplicationSet

Retrieve your Incident Manager replication set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReplicationSetRequest;
import org.openapis.openapi.models.operations.GetReplicationSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReplicationSetRequest req = new GetReplicationSetRequest("deserunt") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GetReplicationSetResponse res = sdk.sdk.getReplicationSet(req);

            if (res.getReplicationSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicies

Retrieves the resource policies attached to the specified response plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePoliciesRequest;
import org.openapis.openapi.models.operations.GetResourcePoliciesRequestBody;
import org.openapis.openapi.models.operations.GetResourcePoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePoliciesRequest req = new GetResourcePoliciesRequest(                new GetResourcePoliciesRequestBody() {{
                                maxResults = 20107L;
                                nextToken = "magni";
                            }};, "assumenda") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
                maxResults = "tempore";
                nextToken = "labore";
            }};            

            GetResourcePoliciesResponse res = sdk.sdk.getResourcePolicies(req);

            if (res.getResourcePoliciesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResponsePlan

Retrieves the details of the specified response plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResponsePlanRequest;
import org.openapis.openapi.models.operations.GetResponsePlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResponsePlanRequest req = new GetResponsePlanRequest("eum") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            GetResponsePlanResponse res = sdk.sdk.getResponsePlan(req);

            if (res.getResponsePlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimelineEvent

Retrieves a timeline event based on its ID and incident record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimelineEventRequest;
import org.openapis.openapi.models.operations.GetTimelineEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTimelineEventRequest req = new GetTimelineEventRequest("dolor", "debitis") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            GetTimelineEventResponse res = sdk.sdk.getTimelineEvent(req);

            if (res.getTimelineEventOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncidentRecords

Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncidentRecordsRequest;
import org.openapis.openapi.models.operations.ListIncidentRecordsRequestBody;
import org.openapis.openapi.models.operations.ListIncidentRecordsResponse;
import org.openapis.openapi.models.shared.AttributeValueList;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIncidentRecordsRequest req = new ListIncidentRecordsRequest(                new ListIncidentRecordsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(                new Condition() {{
                                                        after = OffsetDateTime.parse("2021-07-20T13:32:41.687Z");
                                                        before = OffsetDateTime.parse("2021-12-31T00:47:48.012Z");
                                                        equals = new AttributeValueList() {{
                                                            integerValues = new Long[]{{
                                                                add(956084L),
                                                                add(230533L),
                                                                add(643990L),
                                                            }};
                                                            stringValues = new String[]{{
                                                                add("vel"),
                                                                add("natus"),
                                                            }};
                                                        }};;
                                                    }};, "omnis") {{
                                        condition = new Condition() {{
                                            after = OffsetDateTime.parse("2020-07-23T21:23:35.691Z");
                                            before = OffsetDateTime.parse("2022-08-09T06:36:34.417Z");
                                            equals = new AttributeValueList() {{
                                                integerValues = new Long[]{{
                                                    add(881104L),
                                                    add(249796L),
                                                    add(581273L),
                                                }};
                                                stringValues = new String[]{{
                                                    add("accusamus"),
                                                    add("delectus"),
                                                }};
                                            }};
                                        }};
                                        key = "quidem";
                                    }}),
                                    add(new Filter(                new Condition() {{
                                                        after = OffsetDateTime.parse("2022-08-05T15:44:28.456Z");
                                                        before = OffsetDateTime.parse("2022-09-14T03:02:47.808Z");
                                                        equals = new AttributeValueList() {{
                                                            integerValues = new Long[]{{
                                                                add(569965L),
                                                            }};
                                                            stringValues = new String[]{{
                                                                add("provident"),
                                                                add("quos"),
                                                            }};
                                                        }};;
                                                    }};, "sint") {{
                                        condition = new Condition() {{
                                            after = OffsetDateTime.parse("2022-12-24T23:52:02.245Z");
                                            before = OffsetDateTime.parse("2022-09-12T22:12:15.897Z");
                                            equals = new AttributeValueList() {{
                                                integerValues = new Long[]{{
                                                    add(660174L),
                                                    add(287991L),
                                                    add(290077L),
                                                }};
                                                stringValues = new String[]{{
                                                    add("natus"),
                                                    add("nobis"),
                                                }};
                                            }};
                                        }};
                                        key = "eum";
                                    }}),
                                }};
                                maxResults = 33625L;
                                nextToken = "mollitia";
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ad";
                xAmzDate = "eum";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "odit";
                maxResults = "nemo";
                nextToken = "quasi";
            }};            

            ListIncidentRecordsResponse res = sdk.sdk.listIncidentRecords(req);

            if (res.listIncidentRecordsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRelatedItems

List all related items for an incident record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRelatedItemsRequest;
import org.openapis.openapi.models.operations.ListRelatedItemsRequestBody;
import org.openapis.openapi.models.operations.ListRelatedItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRelatedItemsRequest req = new ListRelatedItemsRequest(                new ListRelatedItemsRequestBody("doloribus") {{
                                maxResults = 891924L;
                                nextToken = "eius";
                            }};) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
                maxResults = "ullam";
                nextToken = "expedita";
            }};            

            ListRelatedItemsResponse res = sdk.sdk.listRelatedItems(req);

            if (res.listRelatedItemsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReplicationSets

Lists details about the replication set configured in your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReplicationSetsRequest;
import org.openapis.openapi.models.operations.ListReplicationSetsRequestBody;
import org.openapis.openapi.models.operations.ListReplicationSetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReplicationSetsRequest req = new ListReplicationSetsRequest(                new ListReplicationSetsRequestBody() {{
                                maxResults = 998848L;
                                nextToken = "quibusdam";
                            }};) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
                maxResults = "magni";
                nextToken = "sunt";
            }};            

            ListReplicationSetsResponse res = sdk.sdk.listReplicationSets(req);

            if (res.listReplicationSetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResponsePlans

Lists all response plans in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResponsePlansRequest;
import org.openapis.openapi.models.operations.ListResponsePlansRequestBody;
import org.openapis.openapi.models.operations.ListResponsePlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResponsePlansRequest req = new ListResponsePlansRequest(                new ListResponsePlansRequestBody() {{
                                maxResults = 848009L;
                                nextToken = "pariatur";
                            }};) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "ea";
                xAmzCredential = "excepturi";
                xAmzDate = "odit";
                xAmzSecurityToken = "ea";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "ab";
                maxResults = "maiores";
                nextToken = "quidem";
            }};            

            ListResponsePlansResponse res = sdk.sdk.listResponsePlans(req);

            if (res.listResponsePlansOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags that are attached to the specified response plan.

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
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("voluptate") {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTimelineEvents

Lists timeline events for the specified incident record.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTimelineEventsRequest;
import org.openapis.openapi.models.operations.ListTimelineEventsRequestBody;
import org.openapis.openapi.models.operations.ListTimelineEventsRequestBodySortByEnum;
import org.openapis.openapi.models.operations.ListTimelineEventsRequestBodySortOrderEnum;
import org.openapis.openapi.models.operations.ListTimelineEventsResponse;
import org.openapis.openapi.models.shared.AttributeValueList;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTimelineEventsRequest req = new ListTimelineEventsRequest(                new ListTimelineEventsRequestBody("amet") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter(                new Condition() {{
                                                        after = OffsetDateTime.parse("2022-12-25T05:44:55.720Z");
                                                        before = OffsetDateTime.parse("2022-03-17T07:12:29.048Z");
                                                        equals = new AttributeValueList() {{
                                                            integerValues = new Long[]{{
                                                                add(223924L),
                                                                add(874573L),
                                                            }};
                                                            stringValues = new String[]{{
                                                                add("hic"),
                                                                add("recusandae"),
                                                            }};
                                                        }};;
                                                    }};, "omnis") {{
                                        condition = new Condition() {{
                                            after = OffsetDateTime.parse("2021-12-02T19:46:35.147Z");
                                            before = OffsetDateTime.parse("2020-10-23T15:50:52.666Z");
                                            equals = new AttributeValueList() {{
                                                integerValues = new Long[]{{
                                                    add(171629L),
                                                    add(339404L),
                                                    add(521037L),
                                                }};
                                                stringValues = new String[]{{
                                                    add("eaque"),
                                                    add("quis"),
                                                }};
                                            }};
                                        }};
                                        key = "nesciunt";
                                    }}),
                                }};
                                maxResults = 704415L;
                                nextToken = "perspiciatis";
                                sortBy = ListTimelineEventsRequestBodySortByEnum.EVENT_TIME;
                                sortOrder = ListTimelineEventsRequestBodySortOrderEnum.ASCENDING;
                            }};) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
                maxResults = "adipisci";
                nextToken = "asperiores";
            }};            

            ListTimelineEventsResponse res = sdk.sdk.listTimelineEvents(req);

            if (res.listTimelineEventsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyRequestBody;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequestBody("modi", "iste");) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startIncident

Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartIncidentRequest;
import org.openapis.openapi.models.operations.StartIncidentRequestBody;
import org.openapis.openapi.models.operations.StartIncidentRequestBodyTriggerDetails;
import org.openapis.openapi.models.operations.StartIncidentResponse;
import org.openapis.openapi.models.shared.ItemIdentifier;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ItemValue;
import org.openapis.openapi.models.shared.PagerDutyIncidentDetail;
import org.openapis.openapi.models.shared.RelatedItem;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartIncidentRequest req = new StartIncidentRequest(                new StartIncidentRequestBody("quos") {{
                                clientToken = "aliquid";
                                impact = 212390L;
                                relatedItems = new org.openapis.openapi.models.shared.RelatedItem[]{{
                                    add(new RelatedItem(                new ItemIdentifier(ItemTypeEnum.ANALYSIS,                 new ItemValue() {{
                                                                        arn = "amet";
                                                                        metricDefinition = "optio";
                                                                        pagerDutyIncidentDetail = new PagerDutyIncidentDetail("accusamus") {{
                                                                            autoResolve = false;
                                                                            secretId = "ad";
                                                                        }};;
                                                                        url = "saepe";
                                                                    }};);) {{
                                        generatedId = "dolor";
                                        identifier = new ItemIdentifier(ItemTypeEnum.ATTACHMENT,                 new ItemValue() {{
                                                            arn = "ipsum";
                                                            metricDefinition = "voluptate";
                                                            pagerDutyIncidentDetail = new PagerDutyIncidentDetail("id") {{
                                                                autoResolve = false;
                                                                secretId = "saepe";
                                                            }};;
                                                            url = "eius";
                                                        }};) {{
                                            type = ItemTypeEnum.INCIDENT;
                                            value = new ItemValue() {{
                                                arn = "ipsum";
                                                metricDefinition = "hic";
                                                pagerDutyIncidentDetail = new PagerDutyIncidentDetail("distinctio") {{
                                                    autoResolve = false;
                                                    id = "9b77f3a4-1006-474e-bf69-280d1ba77a89";
                                                    secretId = "necessitatibus";
                                                }};
                                                url = "asperiores";
                                            }};
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                                title = "Mrs.";
                                triggerDetails = new StartIncidentRequestBodyTriggerDetails() {{
                                    rawData = "deserunt";
                                    source = "provident";
                                    timestamp = OffsetDateTime.parse("2022-03-03T16:00:55.670Z");
                                    triggerArn = "totam";
                                }};;
                            }};) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            StartIncidentResponse res = sdk.sdk.startIncident(req);

            if (res.startIncidentOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds a tag to a response plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("dolorum", "a");
                                            }});, "esse") {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "ipsum";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tempore";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from a resource.

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
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("numquam",                 new String[]{{
                                add("dolorem"),
                                add("sapiente"),
                            }}) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeletionProtection

Update deletion protection to either allow or deny deletion of the final Region in a replication set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeletionProtectionRequest;
import org.openapis.openapi.models.operations.UpdateDeletionProtectionRequestBody;
import org.openapis.openapi.models.operations.UpdateDeletionProtectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeletionProtectionRequest req = new UpdateDeletionProtectionRequest(                new UpdateDeletionProtectionRequestBody("voluptas", false) {{
                                clientToken = "deserunt";
                            }};) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
            }};            

            UpdateDeletionProtectionResponse res = sdk.sdk.updateDeletionProtection(req);

            if (res.updateDeletionProtectionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIncidentRecord

Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIncidentRecordRequest;
import org.openapis.openapi.models.operations.UpdateIncidentRecordRequestBody;
import org.openapis.openapi.models.operations.UpdateIncidentRecordRequestBodyChatChannel;
import org.openapis.openapi.models.operations.UpdateIncidentRecordRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateIncidentRecordResponse;
import org.openapis.openapi.models.shared.NotificationTargetItem;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIncidentRecordRequest req = new UpdateIncidentRecordRequest(                new UpdateIncidentRecordRequestBody("dicta") {{
                                chatChannel = new UpdateIncidentRecordRequestBodyChatChannel() {{
                                    chatbotSns = new String[]{{
                                        add("totam"),
                                        add("incidunt"),
                                        add("aspernatur"),
                                    }};
                                    empty = new java.util.HashMap<String, Object>() {{
                                        put("distinctio", "facilis");
                                    }};
                                }};;
                                clientToken = "aliquid";
                                impact = 463150L;
                                notificationTargets = new org.openapis.openapi.models.shared.NotificationTargetItem[]{{
                                    add(new NotificationTargetItem() {{
                                        snsTopicArn = "temporibus";
                                    }}),
                                    add(new NotificationTargetItem() {{
                                        snsTopicArn = "qui";
                                    }}),
                                    add(new NotificationTargetItem() {{
                                        snsTopicArn = "neque";
                                    }}),
                                }};
                                status = UpdateIncidentRecordRequestBodyStatusEnum.OPEN;
                                summary = "magni";
                                title = "Ms.";
                            }};) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            UpdateIncidentRecordResponse res = sdk.sdk.updateIncidentRecord(req);

            if (res.updateIncidentRecordOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRelatedItems

Add or remove related items from the related items tab of an incident record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRelatedItemsRequest;
import org.openapis.openapi.models.operations.UpdateRelatedItemsRequestBody;
import org.openapis.openapi.models.operations.UpdateRelatedItemsRequestBodyRelatedItemsUpdate;
import org.openapis.openapi.models.operations.UpdateRelatedItemsResponse;
import org.openapis.openapi.models.shared.ItemIdentifier;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ItemValue;
import org.openapis.openapi.models.shared.PagerDutyIncidentDetail;
import org.openapis.openapi.models.shared.RelatedItem;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRelatedItemsRequest req = new UpdateRelatedItemsRequest(                new UpdateRelatedItemsRequestBody("et",                 new UpdateRelatedItemsRequestBodyRelatedItemsUpdate() {{
                                                itemToAdd = new RelatedItem(                new ItemIdentifier(ItemTypeEnum.TASK,                 new ItemValue() {{
                                                                                    arn = "ipsum";
                                                                                    metricDefinition = "veritatis";
                                                                                    pagerDutyIncidentDetail = new PagerDutyIncidentDetail("nobis") {{
                                                                                        autoResolve = false;
                                                                                        secretId = "quos";
                                                                                    }};;
                                                                                    url = "tempore";
                                                                                }};);) {{
                                                    generatedId = "cupiditate";
                                                    title = "Mr.";
                                                }};;
                                                itemToRemove = new ItemIdentifier(ItemTypeEnum.TASK,                 new ItemValue() {{
                                                                    arn = "dolorem";
                                                                    metricDefinition = "dolore";
                                                                    pagerDutyIncidentDetail = new PagerDutyIncidentDetail("labore") {{
                                                                        autoResolve = false;
                                                                        secretId = "adipisci";
                                                                    }};;
                                                                    url = "dolorum";
                                                                }};);;
                                            }};) {{
                                clientToken = "architecto";
                            }};) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
            }};            

            UpdateRelatedItemsResponse res = sdk.sdk.updateRelatedItems(req);

            if (res.updateRelatedItemsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReplicationSet

Add or delete Regions from your replication set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReplicationSetRequest;
import org.openapis.openapi.models.operations.UpdateReplicationSetRequestBody;
import org.openapis.openapi.models.operations.UpdateReplicationSetResponse;
import org.openapis.openapi.models.shared.AddRegionAction;
import org.openapis.openapi.models.shared.DeleteRegionAction;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateReplicationSetAction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReplicationSetRequest req = new UpdateReplicationSetRequest(                new UpdateReplicationSetRequestBody(                new org.openapis.openapi.models.shared.UpdateReplicationSetAction[]{{
                                                add(new UpdateReplicationSetAction() {{
                                                    addRegionAction = new AddRegionAction("cupiditate") {{
                                                        regionName = "ut";
                                                        sseKmsKeyId = "facilis";
                                                    }};
                                                    deleteRegionAction = new DeleteRegionAction("quae") {{
                                                        regionName = "qui";
                                                    }};
                                                }}),
                                                add(new UpdateReplicationSetAction() {{
                                                    addRegionAction = new AddRegionAction("occaecati") {{
                                                        regionName = "laudantium";
                                                        sseKmsKeyId = "odio";
                                                    }};
                                                    deleteRegionAction = new DeleteRegionAction("quisquam") {{
                                                        regionName = "voluptatibus";
                                                    }};
                                                }}),
                                                add(new UpdateReplicationSetAction() {{
                                                    addRegionAction = new AddRegionAction("quis") {{
                                                        regionName = "vero";
                                                        sseKmsKeyId = "omnis";
                                                    }};
                                                    deleteRegionAction = new DeleteRegionAction("delectus") {{
                                                        regionName = "ipsum";
                                                    }};
                                                }}),
                                                add(new UpdateReplicationSetAction() {{
                                                    addRegionAction = new AddRegionAction("vero") {{
                                                        regionName = "voluptate";
                                                        sseKmsKeyId = "consectetur";
                                                    }};
                                                    deleteRegionAction = new DeleteRegionAction("dignissimos") {{
                                                        regionName = "tenetur";
                                                    }};
                                                }}),
                                            }}, "hic") {{
                                clientToken = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            UpdateReplicationSetResponse res = sdk.sdk.updateReplicationSet(req);

            if (res.updateReplicationSetOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResponsePlan

Updates the specified response plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResponsePlanRequest;
import org.openapis.openapi.models.operations.UpdateResponsePlanRequestBody;
import org.openapis.openapi.models.operations.UpdateResponsePlanRequestBodyChatChannel;
import org.openapis.openapi.models.operations.UpdateResponsePlanResponse;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.DynamicSsmParameterValue;
import org.openapis.openapi.models.shared.Integration;
import org.openapis.openapi.models.shared.NotificationTargetItem;
import org.openapis.openapi.models.shared.PagerDutyConfiguration;
import org.openapis.openapi.models.shared.PagerDutyIncidentConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SsmAutomation;
import org.openapis.openapi.models.shared.SsmTargetAccountEnum;
import org.openapis.openapi.models.shared.VariableTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResponsePlanRequest req = new UpdateResponsePlanRequest(                new UpdateResponsePlanRequestBody("illum") {{
                                actions = new org.openapis.openapi.models.shared.Action[]{{
                                    add(new Action() {{
                                        ssmAutomation = new SsmAutomation("maiores", "quasi") {{
                                            documentName = "natus";
                                            documentVersion = "impedit";
                                            dynamicParameters = new java.util.HashMap<String, org.openapis.openapi.models.shared.DynamicSsmParameterValue>() {{
                                                put("voluptatibus", new DynamicSsmParameterValue() {{
                                                    variable = VariableTypeEnum.INCIDENT_RECORD_ARN;
                                                }});
                                            }};
                                            parameters = new java.util.HashMap<String, String[]>() {{
                                                put("fugit", new String[]{{
                                                    add("maiores"),
                                                    add("doloribus"),
                                                    add("iusto"),
                                                    add("eligendi"),
                                                }});
                                                put("ducimus", new String[]{{
                                                    add("officia"),
                                                }});
                                                put("tempora", new String[]{{
                                                    add("ea"),
                                                    add("aspernatur"),
                                                }});
                                                put("vel", new String[]{{
                                                    add("magnam"),
                                                    add("ratione"),
                                                    add("ex"),
                                                    add("laudantium"),
                                                }});
                                            }};
                                            roleArn = "dicta";
                                            targetAccount = SsmTargetAccountEnum.RESPONSE_PLAN_OWNER_ACCOUNT;
                                        }};
                                    }}),
                                }};
                                chatChannel = new UpdateResponsePlanRequestBodyChatChannel() {{
                                    chatbotSns = new String[]{{
                                        add("nulla"),
                                        add("excepturi"),
                                    }};
                                    empty = new java.util.HashMap<String, Object>() {{
                                        put("nostrum", "sapiente");
                                        put("quisquam", "saepe");
                                        put("ea", "impedit");
                                        put("corporis", "veniam");
                                    }};
                                }};;
                                clientToken = "aliquid";
                                displayName = "inventore";
                                engagements = new String[]{{
                                    add("ea"),
                                    add("quo"),
                                }};
                                incidentTemplateDedupeString = "consectetur";
                                incidentTemplateImpact = 926213L;
                                incidentTemplateNotificationTargets = new org.openapis.openapi.models.shared.NotificationTargetItem[]{{
                                    add(new NotificationTargetItem() {{
                                        snsTopicArn = "minima";
                                    }}),
                                }};
                                incidentTemplateSummary = "eaque";
                                incidentTemplateTags = new java.util.HashMap<String, String>() {{
                                    put("libero", "aut");
                                    put("aut", "deleniti");
                                    put("impedit", "aliquam");
                                    put("fugit", "accusamus");
                                }};
                                incidentTemplateTitle = "inventore";
                                integrations = new org.openapis.openapi.models.shared.Integration[]{{
                                    add(new Integration() {{
                                        pagerDutyConfiguration = new PagerDutyConfiguration("quas",                 new PagerDutyIncidentConfiguration("assumenda");, "nulla") {{
                                            name = "Sonya Osinski";
                                            pagerDutyIncidentConfiguration = new PagerDutyIncidentConfiguration("autem") {{
                                                serviceId = "eum";
                                            }};
                                            secretId = "nobis";
                                        }};
                                    }}),
                                    add(new Integration() {{
                                        pagerDutyConfiguration = new PagerDutyConfiguration("molestiae",                 new PagerDutyIncidentConfiguration("magnam");, "odio") {{
                                            name = "Jeannette Boyer";
                                            pagerDutyIncidentConfiguration = new PagerDutyIncidentConfiguration("provident") {{
                                                serviceId = "explicabo";
                                            }};
                                            secretId = "ipsa";
                                        }};
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "esse";
                xAmzDate = "rem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "quidem";
            }};            

            UpdateResponsePlanResponse res = sdk.sdk.updateResponsePlan(req);

            if (res.updateResponsePlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTimelineEvent

Updates a timeline event. You can update events of type <code>Custom Event</code>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTimelineEventRequest;
import org.openapis.openapi.models.operations.UpdateTimelineEventRequestBody;
import org.openapis.openapi.models.operations.UpdateTimelineEventResponse;
import org.openapis.openapi.models.shared.EventReference;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTimelineEventRequest req = new UpdateTimelineEventRequest(                new UpdateTimelineEventRequestBody("ut", "eum") {{
                                clientToken = "suscipit";
                                eventData = "assumenda";
                                eventReferences = new org.openapis.openapi.models.shared.EventReference[]{{
                                    add(new EventReference() {{
                                        relatedItemId = "praesentium";
                                        resource = "quisquam";
                                    }}),
                                }};
                                eventTime = OffsetDateTime.parse("2022-12-11T06:00:38.230Z");
                                eventType = "id";
                            }};) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            UpdateTimelineEventResponse res = sdk.sdk.updateTimelineEvent(req);

            if (res.updateTimelineEventOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
