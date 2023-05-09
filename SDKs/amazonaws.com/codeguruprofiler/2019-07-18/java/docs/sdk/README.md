# SDK

## Overview

<p> This section provides documentation for the Amazon CodeGuru Profiler API operations. </p> <p> Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides recommendations that can help you fine-tune your application performance. Using machine learning algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can improve efficiency and remove CPU bottlenecks. </p> <p> Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization. </p> <note> <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM) languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications written in Java, it can also generate visualizations and a subset of recommendations for applications written in other JVM languages and Python.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codeguru-profiler/>
### Available Operations

* [addNotificationChannels](#addnotificationchannels) - Add up to 2 anomaly notifications channels for a profiling group.
* [batchGetFrameMetricData](#batchgetframemetricdata) -  Returns the time series of values for a requested list of frame metrics from a time period.
* [configureAgent](#configureagent) -  Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 
* [createProfilingGroup](#createprofilinggroup) - Creates a profiling group.
* [deleteProfilingGroup](#deleteprofilinggroup) - Deletes a profiling group.
* [describeProfilingGroup](#describeprofilinggroup) -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 
* [getFindingsReportAccountSummary](#getfindingsreportaccountsummary) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 
* [getNotificationConfiguration](#getnotificationconfiguration) - Get the current configuration for anomaly notifications for a profiling group.
* [getPolicy](#getpolicy) -  Returns the JSON-formatted resource-based policy on a profiling group. 
* [getProfile](#getprofile) - <p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
* [getRecommendations](#getrecommendations) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 
* [listFindingsReports](#listfindingsreports) - List the available reports for a given profiling group and time range.
* [listProfileTimes](#listprofiletimes) - Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
* [listProfilingGroups](#listprofilinggroups) -  Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 
* [listTagsForResource](#listtagsforresource) -  Returns a list of the tags that are assigned to a specified resource. 
* [postAgentProfile](#postagentprofile) -  Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 
* [putPermission](#putpermission) - <p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
* [removeNotificationChannel](#removenotificationchannel) - Remove one anomaly notifications channel for a profiling group.
* [removePermission](#removepermission) -  Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 
* [submitFeedback](#submitfeedback) - Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
* [tagResource](#tagresource) -  Use to assign one or more tags to a resource. 
* [untagResource](#untagresource) -  Use to remove one or more tags from a resource. 
* [updateProfilingGroup](#updateprofilinggroup) - Updates a profiling group.

## addNotificationChannels

Add up to 2 anomaly notifications channels for a profiling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNotificationChannelsRequest;
import org.openapis.openapi.models.operations.AddNotificationChannelsRequestBody;
import org.openapis.openapi.models.operations.AddNotificationChannelsResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.EventPublisherEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelsRequest req = new AddNotificationChannelsRequest(                new AddNotificationChannelsRequestBody(                new org.openapis.openapi.models.shared.Channel[]{{
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "repudiandae") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547";
                                                    uri = "http://reliable-evaluation.org";
                                                }}),
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "excepturi") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "3b99d488-e1e9-41e4-90ad-2abd44269802";
                                                    uri = "https://hard-accordion.com";
                                                }}),
                                            }});, "tempora") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            AddNotificationChannelsResponse res = sdk.sdk.addNotificationChannels(req);

            if (res.addNotificationChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetFrameMetricData

 Returns the time series of values for a requested list of frame metrics from a time period.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetFrameMetricDataRequest;
import org.openapis.openapi.models.operations.BatchGetFrameMetricDataRequestBody;
import org.openapis.openapi.models.operations.BatchGetFrameMetricDataResponse;
import org.openapis.openapi.models.operations.BatchGetFrameMetricDataTargetResolutionEnum;
import org.openapis.openapi.models.shared.FrameMetric;
import org.openapis.openapi.models.shared.MetricTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetFrameMetricDataRequest req = new BatchGetFrameMetricDataRequest(                new BatchGetFrameMetricDataRequestBody() {{
                                frameMetrics = new org.openapis.openapi.models.shared.FrameMetric[]{{
                                    add(new FrameMetric("a",                 new String[]{{
                                                        add("in"),
                                                        add("in"),
                                                        add("illum"),
                                                    }}, MetricTypeEnum.AGGREGATED_RELATIVE_TOTAL_TIME) {{
                                        frameName = "provident";
                                        threadStates = new String[]{{
                                            add("sint"),
                                            add("officia"),
                                            add("dolor"),
                                            add("debitis"),
                                        }};
                                        type = MetricTypeEnum.AGGREGATED_RELATIVE_TOTAL_TIME;
                                    }}),
                                    add(new FrameMetric("facere",                 new String[]{{
                                                        add("aliquid"),
                                                        add("laborum"),
                                                    }}, MetricTypeEnum.AGGREGATED_RELATIVE_TOTAL_TIME) {{
                                        frameName = "maiores";
                                        threadStates = new String[]{{
                                            add("dicta"),
                                            add("magnam"),
                                            add("cumque"),
                                        }};
                                        type = MetricTypeEnum.AGGREGATED_RELATIVE_TOTAL_TIME;
                                    }}),
                                }};
                            }};, "accusamus") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
                endTime = OffsetDateTime.parse("2021-09-06T10:36:33.442Z");
                period = "blanditiis";
                startTime = OffsetDateTime.parse("2021-02-02T01:24:52.629Z");
                targetResolution = BatchGetFrameMetricDataTargetResolutionEnum.PT5_M;
            }};            

            BatchGetFrameMetricDataResponse res = sdk.sdk.batchGetFrameMetricData(req);

            if (res.batchGetFrameMetricDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureAgent

 Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureAgentRequest;
import org.openapis.openapi.models.operations.ConfigureAgentRequestBody;
import org.openapis.openapi.models.operations.ConfigureAgentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfigureAgentRequest req = new ConfigureAgentRequest(                new ConfigureAgentRequestBody() {{
                                fleetInstanceId = "nisi";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("natus", "omnis");
                                    put("molestiae", "perferendis");
                                }};
                            }};, "nihil") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            ConfigureAgentResponse res = sdk.sdk.configureAgent(req);

            if (res.configureAgentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProfilingGroup

Creates a profiling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProfilingGroupRequest;
import org.openapis.openapi.models.operations.CreateProfilingGroupRequestBody;
import org.openapis.openapi.models.operations.CreateProfilingGroupRequestBodyAgentOrchestrationConfig;
import org.openapis.openapi.models.operations.CreateProfilingGroupRequestBodyComputePlatformEnum;
import org.openapis.openapi.models.operations.CreateProfilingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProfilingGroupRequest req = new CreateProfilingGroupRequest(                new CreateProfilingGroupRequestBody("eum") {{
                                agentOrchestrationConfig = new CreateProfilingGroupRequestBodyAgentOrchestrationConfig() {{
                                    profilingEnabled = false;
                                }};;
                                computePlatform = CreateProfilingGroupRequestBodyComputePlatformEnum.AWS_LAMBDA;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("architecto", "magnam");
                                }};
                            }};, "et") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateProfilingGroupResponse res = sdk.sdk.createProfilingGroup(req);

            if (res.createProfilingGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfilingGroup

Deletes a profiling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfilingGroupRequest;
import org.openapis.openapi.models.operations.DeleteProfilingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfilingGroupRequest req = new DeleteProfilingGroupRequest("mollitia") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteProfilingGroupResponse res = sdk.sdk.deleteProfilingGroup(req);

            if (res.deleteProfilingGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProfilingGroup

 Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProfilingGroupRequest;
import org.openapis.openapi.models.operations.DescribeProfilingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProfilingGroupRequest req = new DescribeProfilingGroupRequest("doloribus") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeProfilingGroupResponse res = sdk.sdk.describeProfilingGroup(req);

            if (res.describeProfilingGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindingsReportAccountSummary

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingsReportAccountSummaryRequest;
import org.openapis.openapi.models.operations.GetFindingsReportAccountSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFindingsReportAccountSummaryRequest req = new GetFindingsReportAccountSummaryRequest() {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
                dailyReportsOnly = false;
                maxResults = 904648L;
                nextToken = "pariatur";
            }};            

            GetFindingsReportAccountSummaryResponse res = sdk.sdk.getFindingsReportAccountSummary(req);

            if (res.getFindingsReportAccountSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotificationConfiguration

Get the current configuration for anomaly notifications for a profiling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.GetNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNotificationConfigurationRequest req = new GetNotificationConfigurationRequest("consequuntur") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetNotificationConfigurationResponse res = sdk.sdk.getNotificationConfiguration(req);

            if (res.getNotificationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicy

 Returns the JSON-formatted resource-based policy on a profiling group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPolicyRequest;
import org.openapis.openapi.models.operations.GetPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPolicyRequest req = new GetPolicyRequest("ea") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "odit";
                xAmzCredential = "ea";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "ab";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quidem";
            }};            

            GetPolicyResponse res = sdk.sdk.getPolicy(req);

            if (res.getPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfile

<p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileRequest;
import org.openapis.openapi.models.operations.GetProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileRequest req = new GetProfileRequest("voluptate") {{
                accept = "autem";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
                endTime = OffsetDateTime.parse("2022-12-27T17:23:03.738Z");
                maxDepth = 764912L;
                period = "corporis";
                startTime = OffsetDateTime.parse("2020-10-23T15:50:52.666Z");
            }};            

            GetProfileResponse res = sdk.sdk.getProfile(req);

            if (res.getProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendations

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendationsRequest;
import org.openapis.openapi.models.operations.GetRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecommendationsRequest req = new GetRecommendationsRequest(OffsetDateTime.parse("2022-08-30T02:49:20.597Z"), "totam", OffsetDateTime.parse("2022-12-12T03:59:56.327Z")) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
                locale = "dolor";
            }};            

            GetRecommendationsResponse res = sdk.sdk.getRecommendations(req);

            if (res.getRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFindingsReports

List the available reports for a given profiling group and time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFindingsReportsRequest;
import org.openapis.openapi.models.operations.ListFindingsReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFindingsReportsRequest req = new ListFindingsReportsRequest(OffsetDateTime.parse("2022-01-21T09:30:39.477Z"), "recusandae", OffsetDateTime.parse("2021-08-04T18:39:34.709Z")) {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "porro";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "error";
                xAmzSignedHeaders = "eaque";
                dailyReportsOnly = false;
                maxResults = 577229L;
                nextToken = "rerum";
            }};            

            ListFindingsReportsResponse res = sdk.sdk.listFindingsReports(req);

            if (res.listFindingsReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfileTimes

Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfileTimesOrderByEnum;
import org.openapis.openapi.models.operations.ListProfileTimesPeriodEnum;
import org.openapis.openapi.models.operations.ListProfileTimesRequest;
import org.openapis.openapi.models.operations.ListProfileTimesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfileTimesRequest req = new ListProfileTimesRequest(OffsetDateTime.parse("2020-03-14T00:51:21.656Z"), ListProfileTimesPeriodEnum.PT5_M, "iste", OffsetDateTime.parse("2021-12-05T23:42:47.745Z")) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
                maxResults = 398221L;
                nextToken = "dolorem";
                orderBy = ListProfileTimesOrderByEnum.TIMESTAMP_DESCENDING;
            }};            

            ListProfileTimesResponse res = sdk.sdk.listProfileTimes(req);

            if (res.listProfileTimesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfilingGroups

 Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfilingGroupsRequest;
import org.openapis.openapi.models.operations.ListProfilingGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfilingGroupsRequest req = new ListProfilingGroupsRequest() {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "cum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dignissimos";
                includeDescription = false;
                maxResults = 970237L;
                nextToken = "amet";
            }};            

            ListProfilingGroupsResponse res = sdk.sdk.listProfilingGroups(req);

            if (res.listProfilingGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Returns a list of the tags that are assigned to a specified resource. 

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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("numquam") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
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

## postAgentProfile

 Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAgentProfileRequest;
import org.openapis.openapi.models.operations.PostAgentProfileRequestBody;
import org.openapis.openapi.models.operations.PostAgentProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAgentProfileRequest req = new PostAgentProfileRequest("voluptatibus",                 new PostAgentProfileRequestBody("voluptas");, "natus") {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
                profileToken = "iusto";
            }};            

            PostAgentProfileResponse res = sdk.sdk.postAgentProfile(req);

            if (res.postAgentProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPermission

<p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPermissionActionGroupEnum;
import org.openapis.openapi.models.operations.PutPermissionRequest;
import org.openapis.openapi.models.operations.PutPermissionRequestBody;
import org.openapis.openapi.models.operations.PutPermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPermissionRequest req = new PutPermissionRequest(                new PutPermissionRequestBody(                new String[]{{
                                                add("deleniti"),
                                                add("omnis"),
                                                add("necessitatibus"),
                                            }}) {{
                                revisionId = "distinctio";
                            }};, PutPermissionActionGroupEnum.AGENT_PERMISSIONS, "asperiores") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "voluptate";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "aspernatur";
            }};            

            PutPermissionResponse res = sdk.sdk.putPermission(req);

            if (res.putPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNotificationChannel

Remove one anomaly notifications channel for a profiling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNotificationChannelRequest;
import org.openapis.openapi.models.operations.RemoveNotificationChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNotificationChannelRequest req = new RemoveNotificationChannelRequest("amet", "optio") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            RemoveNotificationChannelResponse res = sdk.sdk.removeNotificationChannel(req);

            if (res.removeNotificationChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removePermission

 Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovePermissionActionGroupEnum;
import org.openapis.openapi.models.operations.RemovePermissionRequest;
import org.openapis.openapi.models.operations.RemovePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemovePermissionRequest req = new RemovePermissionRequest(RemovePermissionActionGroupEnum.AGENT_PERMISSIONS, "totam", "similique") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "at";
                xAmzCredential = "quaerat";
                xAmzDate = "tempora";
                xAmzSecurityToken = "vel";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "officiis";
            }};            

            RemovePermissionResponse res = sdk.sdk.removePermission(req);

            if (res.removePermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitFeedback

Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitFeedbackRequest;
import org.openapis.openapi.models.operations.SubmitFeedbackRequestBody;
import org.openapis.openapi.models.operations.SubmitFeedbackRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.SubmitFeedbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SubmitFeedbackRequest req = new SubmitFeedbackRequest(                new SubmitFeedbackRequestBody(SubmitFeedbackRequestBodyTypeEnum.NEGATIVE) {{
                                comment = "a";
                            }};, "esse", "harum") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            SubmitFeedbackResponse res = sdk.sdk.submitFeedback(req);

            if (res.submitFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Use to assign one or more tags to a resource. 

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
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("dolorem", "sapiente");
                                                put("totam", "nihil");
                                            }});, "sit") {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "neque";
                xAmzCredential = "sed";
                xAmzDate = "vel";
                xAmzSecurityToken = "libero";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "deserunt";
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

 Use to remove one or more tags from a resource. 

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
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("ipsum",                 new String[]{{
                                add("qui"),
                                add("cupiditate"),
                            }}) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "soluta";
                xAmzDate = "dicta";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "incidunt";
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

## updateProfilingGroup

Updates a profiling group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProfilingGroupRequest;
import org.openapis.openapi.models.operations.UpdateProfilingGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
import org.openapis.openapi.models.operations.UpdateProfilingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProfilingGroupRequest req = new UpdateProfilingGroupRequest(                new UpdateProfilingGroupRequestBody(                new UpdateProfilingGroupRequestBodyAgentOrchestrationConfig() {{
                                                profilingEnabled = false;
                                            }};);, "dolores") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
            }};            

            UpdateProfilingGroupResponse res = sdk.sdk.updateProfilingGroup(req);

            if (res.updateProfilingGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
