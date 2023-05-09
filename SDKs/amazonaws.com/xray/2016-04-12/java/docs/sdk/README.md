# SDK

## Overview

Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

Amazon Web Services documentation
<https://docs.aws.amazon.com/xray/>
### Available Operations

* [batchGetTraces](#batchgettraces) - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
* [createGroup](#creategroup) - Creates a group resource with a name and a filter expression. 
* [createSamplingRule](#createsamplingrule) - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
* [deleteGroup](#deletegroup) - Deletes a group resource.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource policy from the target Amazon Web Services account.
* [deleteSamplingRule](#deletesamplingrule) - Deletes a sampling rule.
* [getEncryptionConfig](#getencryptionconfig) - Retrieves the current encryption configuration for X-Ray data.
* [getGroup](#getgroup) - Retrieves group resource details.
* [getGroups](#getgroups) - Retrieves all active group details.
* [getInsight](#getinsight) - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
* [getInsightEvents](#getinsightevents) - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
* [getInsightImpactGraph](#getinsightimpactgraph) - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
* [getInsightSummaries](#getinsightsummaries) - Retrieves the summaries of all insights in the specified group matching the provided filter values.
* [getSamplingRules](#getsamplingrules) - Retrieves all sampling rules.
* [getSamplingStatisticSummaries](#getsamplingstatisticsummaries) - Retrieves information about recent sampling results for all sampling rules.
* [getSamplingTargets](#getsamplingtargets) - Requests a sampling quota for rules that the service is using to sample requests. 
* [getServiceGraph](#getservicegraph) - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
* [getTimeSeriesServiceStatistics](#gettimeseriesservicestatistics) - Get an aggregation of service statistics defined by a specific time range.
* [getTraceGraph](#gettracegraph) - Retrieves a service graph for one or more specific trace IDs.
* [getTraceSummaries](#gettracesummaries) - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
* [listResourcePolicies](#listresourcepolicies) - Returns the list of resource policies in the target Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
* [putEncryptionConfig](#putencryptionconfig) - Updates the encryption configuration for X-Ray data.
* [putResourcePolicy](#putresourcepolicy) -  Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 
* [putTelemetryRecords](#puttelemetryrecords) - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
* [putTraceSegments](#puttracesegments) - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
* [tagResource](#tagresource) - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
* [untagResource](#untagresource) - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
* [updateGroup](#updategroup) - Updates a group resource.
* [updateSamplingRule](#updatesamplingrule) - Modifies a sampling rule's configuration.

## batchGetTraces

Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetTracesRequest;
import org.openapis.openapi.models.operations.BatchGetTracesRequestBody;
import org.openapis.openapi.models.operations.BatchGetTracesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetTracesRequest req = new BatchGetTracesRequest(                new BatchGetTracesRequestBody(                new String[]{{
                                                add("delectus"),
                                            }}) {{
                                nextToken = "tempora";
                            }};) {{
                nextToken = "suscipit";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            BatchGetTracesResponse res = sdk.sdk.batchGetTraces(req);

            if (res.batchGetTracesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroup

Creates a group resource with a name and a filter expression. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupRequestBody;
import org.openapis.openapi.models.operations.CreateGroupRequestBodyInsightsConfiguration;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest(                new CreateGroupRequestBody("temporibus") {{
                                filterExpression = "ab";
                                insightsConfiguration = new CreateGroupRequestBodyInsightsConfiguration() {{
                                    insightsEnabled = false;
                                    notificationsEnabled = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis", "ipsam") {{
                                        key = "veritatis";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("quo", "odit") {{
                                        key = "repellendus";
                                        value = "sapiente";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            CreateGroupResponse res = sdk.sdk.createGroup(req);

            if (res.createGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSamplingRule

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSamplingRuleRequest;
import org.openapis.openapi.models.operations.CreateSamplingRuleRequestBody;
import org.openapis.openapi.models.operations.CreateSamplingRuleRequestBodySamplingRule;
import org.openapis.openapi.models.operations.CreateSamplingRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSamplingRuleRequest req = new CreateSamplingRuleRequest(                new CreateSamplingRuleRequestBody(                new CreateSamplingRuleRequestBodySamplingRule() {{
                                                attributes = new java.util.HashMap<String, String>() {{
                                                    put("dolorum", "dicta");
                                                    put("nam", "officia");
                                                    put("occaecati", "fugit");
                                                    put("deleniti", "hic");
                                                }};
                                                fixedRate = 7586.16;
                                                httpMethod = "totam";
                                                host = "beatae";
                                                priority = 414662L;
                                                reservoirSize = 473600L;
                                                resourceARN = "modi";
                                                ruleARN = "qui";
                                                ruleName = "impedit";
                                                serviceName = "cum";
                                                serviceType = "esse";
                                                urlPath = "ipsum";
                                                version = 568434L;
                                            }};) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("natus", "sed") {{
                                        key = "perferendis";
                                        value = "ad";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            CreateSamplingRuleResponse res = sdk.sdk.createSamplingRule(req);

            if (res.createSamplingRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroup

Deletes a group resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupRequest;
import org.openapis.openapi.models.operations.DeleteGroupRequestBody;
import org.openapis.openapi.models.operations.DeleteGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupRequest req = new DeleteGroupRequest(                new DeleteGroupRequestBody() {{
                                groupARN = "corporis";
                                groupName = "iste";
                            }};) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DeleteGroupResponse res = sdk.sdk.deleteGroup(req);

            if (res.deleteGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes a resource policy from the target Amazon Web Services account.

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
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequestBody("laborum") {{
                                policyRevisionId = "dolores";
                            }};) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSamplingRule

Deletes a sampling rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSamplingRuleRequest;
import org.openapis.openapi.models.operations.DeleteSamplingRuleRequestBody;
import org.openapis.openapi.models.operations.DeleteSamplingRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSamplingRuleRequest req = new DeleteSamplingRuleRequest(                new DeleteSamplingRuleRequestBody() {{
                                ruleARN = "excepturi";
                                ruleName = "accusantium";
                            }};) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            DeleteSamplingRuleResponse res = sdk.sdk.deleteSamplingRule(req);

            if (res.deleteSamplingRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEncryptionConfig

Retrieves the current encryption configuration for X-Ray data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEncryptionConfigRequest;
import org.openapis.openapi.models.operations.GetEncryptionConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEncryptionConfigRequest req = new GetEncryptionConfigRequest() {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
            }};            

            GetEncryptionConfigResponse res = sdk.sdk.getEncryptionConfig(req);

            if (res.getEncryptionConfigResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroup

Retrieves group resource details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupRequestBody;
import org.openapis.openapi.models.operations.GetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupRequest req = new GetGroupRequest(                new GetGroupRequestBody() {{
                                groupARN = "velit";
                                groupName = "error";
                            }};) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
            }};            

            GetGroupResponse res = sdk.sdk.getGroup(req);

            if (res.getGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroups

Retrieves all active group details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsRequest;
import org.openapis.openapi.models.operations.GetGroupsRequestBody;
import org.openapis.openapi.models.operations.GetGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupsRequest req = new GetGroupsRequest(                new GetGroupsRequestBody() {{
                                nextToken = "sequi";
                            }};) {{
                nextToken = "tenetur";
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
            }};            

            GetGroupsResponse res = sdk.sdk.getGroups(req);

            if (res.getGroupsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsight

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightRequest;
import org.openapis.openapi.models.operations.GetInsightRequestBody;
import org.openapis.openapi.models.operations.GetInsightResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightRequest req = new GetInsightRequest(                new GetInsightRequestBody("quasi");) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetInsightResponse res = sdk.sdk.getInsight(req);

            if (res.getInsightResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsightEvents

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightEventsRequest;
import org.openapis.openapi.models.operations.GetInsightEventsRequestBody;
import org.openapis.openapi.models.operations.GetInsightEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightEventsRequest req = new GetInsightEventsRequest(                new GetInsightEventsRequestBody("voluptate") {{
                                maxResults = 739264L;
                                nextToken = "perferendis";
                            }};) {{
                maxResults = "doloremque";
                nextToken = "reprehenderit";
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            GetInsightEventsResponse res = sdk.sdk.getInsightEvents(req);

            if (res.getInsightEventsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsightImpactGraph

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightImpactGraphRequest;
import org.openapis.openapi.models.operations.GetInsightImpactGraphRequestBody;
import org.openapis.openapi.models.operations.GetInsightImpactGraphResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightImpactGraphRequest req = new GetInsightImpactGraphRequest(                new GetInsightImpactGraphRequestBody(OffsetDateTime.parse("2022-02-13T15:01:52.114Z"), "commodi", OffsetDateTime.parse("2022-10-22T18:12:12.288Z")) {{
                                nextToken = "ipsum";
                            }};) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "excepturi";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "modi";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "rem";
            }};            

            GetInsightImpactGraphResponse res = sdk.sdk.getInsightImpactGraph(req);

            if (res.getInsightImpactGraphResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsightSummaries

Retrieves the summaries of all insights in the specified group matching the provided filter values.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightSummariesRequest;
import org.openapis.openapi.models.operations.GetInsightSummariesRequestBody;
import org.openapis.openapi.models.operations.GetInsightSummariesResponse;
import org.openapis.openapi.models.shared.InsightStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightSummariesRequest req = new GetInsightSummariesRequest(                new GetInsightSummariesRequestBody(OffsetDateTime.parse("2022-01-29T18:39:33.469Z"), OffsetDateTime.parse("2022-11-01T07:52:08.326Z")) {{
                                groupARN = "itaque";
                                groupName = "incidunt";
                                maxResults = 318569L;
                                nextToken = "consequatur";
                                states = new org.openapis.openapi.models.shared.InsightStateEnum[]{{
                                    add(InsightStateEnum.CLOSED),
                                    add(InsightStateEnum.ACTIVE),
                                    add(InsightStateEnum.CLOSED),
                                }};
                            }};) {{
                maxResults = "distinctio";
                nextToken = "quibusdam";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetInsightSummariesResponse res = sdk.sdk.getInsightSummaries(req);

            if (res.getInsightSummariesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSamplingRules

Retrieves all sampling rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSamplingRulesRequest;
import org.openapis.openapi.models.operations.GetSamplingRulesRequestBody;
import org.openapis.openapi.models.operations.GetSamplingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSamplingRulesRequest req = new GetSamplingRulesRequest(                new GetSamplingRulesRequestBody() {{
                                nextToken = "assumenda";
                            }};) {{
                nextToken = "ipsam";
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            GetSamplingRulesResponse res = sdk.sdk.getSamplingRules(req);

            if (res.getSamplingRulesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSamplingStatisticSummaries

Retrieves information about recent sampling results for all sampling rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSamplingStatisticSummariesRequest;
import org.openapis.openapi.models.operations.GetSamplingStatisticSummariesRequestBody;
import org.openapis.openapi.models.operations.GetSamplingStatisticSummariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSamplingStatisticSummariesRequest req = new GetSamplingStatisticSummariesRequest(                new GetSamplingStatisticSummariesRequestBody() {{
                                nextToken = "delectus";
                            }};) {{
                nextToken = "eum";
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sint";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "provident";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sint";
            }};            

            GetSamplingStatisticSummariesResponse res = sdk.sdk.getSamplingStatisticSummaries(req);

            if (res.getSamplingStatisticSummariesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSamplingTargets

Requests a sampling quota for rules that the service is using to sample requests. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSamplingTargetsRequest;
import org.openapis.openapi.models.operations.GetSamplingTargetsRequestBody;
import org.openapis.openapi.models.operations.GetSamplingTargetsResponse;
import org.openapis.openapi.models.shared.SamplingStatisticsDocument;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSamplingTargetsRequest req = new GetSamplingTargetsRequest(                new GetSamplingTargetsRequestBody(                new org.openapis.openapi.models.shared.SamplingStatisticsDocument[]{{
                                                add(new SamplingStatisticsDocument("rerum", 116202L, "magnam", 767024L, OffsetDateTime.parse("2021-10-07T01:21:59.434Z")) {{
                                                    borrowCount = 891555L;
                                                    clientID = "a";
                                                    requestCount = 680056L;
                                                    ruleName = "in";
                                                    sampledCount = 449198L;
                                                    timestamp = OffsetDateTime.parse("2020-01-25T11:09:22.009Z");
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetSamplingTargetsResponse res = sdk.sdk.getSamplingTargets(req);

            if (res.getSamplingTargetsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceGraph

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceGraphRequest;
import org.openapis.openapi.models.operations.GetServiceGraphRequestBody;
import org.openapis.openapi.models.operations.GetServiceGraphResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceGraphRequest req = new GetServiceGraphRequest(                new GetServiceGraphRequestBody(OffsetDateTime.parse("2021-10-28T10:05:29.849Z"), OffsetDateTime.parse("2021-09-06T10:36:33.442Z")) {{
                                groupARN = "blanditiis";
                                groupName = "deleniti";
                                nextToken = "sapiente";
                            }};) {{
                nextToken = "amet";
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetServiceGraphResponse res = sdk.sdk.getServiceGraph(req);

            if (res.getServiceGraphResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimeSeriesServiceStatistics

Get an aggregation of service statistics defined by a specific time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimeSeriesServiceStatisticsRequest;
import org.openapis.openapi.models.operations.GetTimeSeriesServiceStatisticsRequestBody;
import org.openapis.openapi.models.operations.GetTimeSeriesServiceStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTimeSeriesServiceStatisticsRequest req = new GetTimeSeriesServiceStatisticsRequest(                new GetTimeSeriesServiceStatisticsRequestBody(OffsetDateTime.parse("2022-04-14T15:11:13.227Z"), OffsetDateTime.parse("2022-06-04T18:23:50.695Z")) {{
                                entitySelectorExpression = "labore";
                                forecastStatistics = false;
                                groupARN = "suscipit";
                                groupName = "natus";
                                nextToken = "nobis";
                                period = 428769L;
                            }};) {{
                nextToken = "vero";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            GetTimeSeriesServiceStatisticsResponse res = sdk.sdk.getTimeSeriesServiceStatistics(req);

            if (res.getTimeSeriesServiceStatisticsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTraceGraph

Retrieves a service graph for one or more specific trace IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTraceGraphRequest;
import org.openapis.openapi.models.operations.GetTraceGraphRequestBody;
import org.openapis.openapi.models.operations.GetTraceGraphResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTraceGraphRequest req = new GetTraceGraphRequest(                new GetTraceGraphRequestBody(                new String[]{{
                                                add("accusantium"),
                                                add("mollitia"),
                                                add("reiciendis"),
                                            }}) {{
                                nextToken = "mollitia";
                            }};) {{
                nextToken = "ad";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            GetTraceGraphResponse res = sdk.sdk.getTraceGraph(req);

            if (res.getTraceGraphResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTraceSummaries

<p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTraceSummariesRequest;
import org.openapis.openapi.models.operations.GetTraceSummariesRequestBody;
import org.openapis.openapi.models.operations.GetTraceSummariesRequestBodySamplingStrategy;
import org.openapis.openapi.models.operations.GetTraceSummariesRequestBodyTimeRangeTypeEnum;
import org.openapis.openapi.models.operations.GetTraceSummariesResponse;
import org.openapis.openapi.models.shared.SamplingStrategyNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTraceSummariesRequest req = new GetTraceSummariesRequest(                new GetTraceSummariesRequestBody(OffsetDateTime.parse("2022-03-21T22:14:24.691Z"), OffsetDateTime.parse("2021-05-22T23:02:53.221Z")) {{
                                filterExpression = "facilis";
                                nextToken = "in";
                                sampling = false;
                                samplingStrategy = new GetTraceSummariesRequestBodySamplingStrategy() {{
                                    name = SamplingStrategyNameEnum.PARTIAL_SCAN;
                                    value = 995.69;
                                }};;
                                timeRangeType = GetTraceSummariesRequestBodyTimeRangeTypeEnum.EVENT;
                            }};) {{
                nextToken = "ullam";
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetTraceSummariesResponse res = sdk.sdk.getTraceSummaries(req);

            if (res.getTraceSummariesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourcePolicies

Returns the list of resource policies in the target Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ListResourcePoliciesRequestBody;
import org.openapis.openapi.models.operations.ListResourcePoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcePoliciesRequest req = new ListResourcePoliciesRequest(                new ListResourcePoliciesRequestBody() {{
                                nextToken = "consequuntur";
                            }};) {{
                nextToken = "praesentium";
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            ListResourcePoliciesResponse res = sdk.sdk.listResourcePolicies(req);

            if (res.listResourcePoliciesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceRequestBody;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("excepturi") {{
                                nextToken = "odit";
                            }};) {{
                nextToken = "ea";
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
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

## putEncryptionConfig

Updates the encryption configuration for X-Ray data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEncryptionConfigRequest;
import org.openapis.openapi.models.operations.PutEncryptionConfigRequestBody;
import org.openapis.openapi.models.operations.PutEncryptionConfigRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.PutEncryptionConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEncryptionConfigRequest req = new PutEncryptionConfigRequest(                new PutEncryptionConfigRequestBody(PutEncryptionConfigRequestBodyTypeEnum.NONE) {{
                                keyId = "pariatur";
                            }};) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            PutEncryptionConfigResponse res = sdk.sdk.putEncryptionConfig(req);

            if (res.putEncryptionConfigResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

 Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 

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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequestBody("hic", "libero") {{
                                bypassPolicyLockoutCheck = false;
                                policyRevisionId = "nobis";
                            }};) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTelemetryRecords

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTelemetryRecordsRequest;
import org.openapis.openapi.models.operations.PutTelemetryRecordsRequestBody;
import org.openapis.openapi.models.operations.PutTelemetryRecordsResponse;
import org.openapis.openapi.models.shared.BackendConnectionErrors;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TelemetryRecord;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutTelemetryRecordsRequest req = new PutTelemetryRecordsRequest(                new PutTelemetryRecordsRequestBody(                new org.openapis.openapi.models.shared.TelemetryRecord[]{{
                                                add(new TelemetryRecord(OffsetDateTime.parse("2022-07-04T15:50:14.407Z")) {{
                                                    backendConnectionErrors = new BackendConnectionErrors() {{
                                                        connectionRefusedCount = 170986L;
                                                        httpCode4XXCount = 793698L;
                                                        httpCode5XXCount = 463451L;
                                                        otherCount = 223924L;
                                                        timeoutCount = 874573L;
                                                        unknownHostCount = 345352L;
                                                    }};
                                                    segmentsReceivedCount = 944120L;
                                                    segmentsRejectedCount = 928082L;
                                                    segmentsSentCount = 608253L;
                                                    segmentsSpilloverCount = 704415L;
                                                    timestamp = OffsetDateTime.parse("2022-12-08T18:10:54.422Z");
                                                }}),
                                            }}) {{
                                ec2InstanceId = "blanditiis";
                                hostname = "petty-atom.name";
                                resourceARN = "rerum";
                            }};) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            PutTelemetryRecordsResponse res = sdk.sdk.putTelemetryRecords(req);

            if (res.putTelemetryRecordsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTraceSegments

<p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTraceSegmentsRequest;
import org.openapis.openapi.models.operations.PutTraceSegmentsRequestBody;
import org.openapis.openapi.models.operations.PutTraceSegmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutTraceSegmentsRequest req = new PutTraceSegmentsRequest(                new PutTraceSegmentsRequestBody(                new String[]{{
                                                add("nobis"),
                                                add("libero"),
                                                add("delectus"),
                                            }});) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            PutTraceSegmentsResponse res = sdk.sdk.putTraceSegments(req);

            if (res.putTraceSegmentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

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
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("hic",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("dignissimos", "reiciendis") {{
                                                    key = "cum";
                                                    value = "voluptate";
                                                }}),
                                                add(new Tag("numquam", "veritatis") {{
                                                    key = "amet";
                                                    value = "dolorum";
                                                }}),
                                                add(new Tag("iure", "odio") {{
                                                    key = "ipsa";
                                                    value = "ipsa";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
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

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("sit",                 new String[]{{
                                                add("ab"),
                                                add("soluta"),
                                                add("dolorum"),
                                                add("iusto"),
                                            }});) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "omnis";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "asperiores";
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

## updateGroup

Updates a group resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGroupRequest;
import org.openapis.openapi.models.operations.UpdateGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateGroupRequestBodyInsightsConfiguration;
import org.openapis.openapi.models.operations.UpdateGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGroupRequest req = new UpdateGroupRequest(                new UpdateGroupRequestBody() {{
                                filterExpression = "ipsum";
                                groupARN = "voluptate";
                                groupName = "id";
                                insightsConfiguration = new UpdateGroupRequestBodyInsightsConfiguration() {{
                                    insightsEnabled = false;
                                    notificationsEnabled = false;
                                }};;
                            }};) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdateGroupResponse res = sdk.sdk.updateGroup(req);

            if (res.updateGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSamplingRule

Modifies a sampling rule's configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSamplingRuleRequest;
import org.openapis.openapi.models.operations.UpdateSamplingRuleRequestBody;
import org.openapis.openapi.models.operations.UpdateSamplingRuleRequestBodySamplingRuleUpdate;
import org.openapis.openapi.models.operations.UpdateSamplingRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSamplingRuleRequest req = new UpdateSamplingRuleRequest(                new UpdateSamplingRuleRequestBody(                new UpdateSamplingRuleRequestBodySamplingRuleUpdate() {{
                                                attributes = new java.util.HashMap<String, String>() {{
                                                    put("suscipit", "deserunt");
                                                    put("provident", "minima");
                                                    put("repellendus", "totam");
                                                    put("similique", "alias");
                                                }};
                                                fixedRate = 8726.51;
                                                httpMethod = "quaerat";
                                                host = "tempora";
                                                priority = 425451L;
                                                reservoirSize = 798047L;
                                                resourceARN = "officiis";
                                                ruleARN = "qui";
                                                ruleName = "dolorum";
                                                serviceName = "a";
                                                serviceType = "esse";
                                                urlPath = "harum";
                                            }};);) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdateSamplingRuleResponse res = sdk.sdk.updateSamplingRule(req);

            if (res.updateSamplingRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
