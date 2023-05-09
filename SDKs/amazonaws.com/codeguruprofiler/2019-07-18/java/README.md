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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelsRequest req = new AddNotificationChannelsRequest(                new AddNotificationChannelsRequestBody(                new org.openapis.openapi.models.shared.Channel[]{{
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "at") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "d9d8d69a-674e-40f4-a7cc-8796ed151a05";
                                                    uri = "https://well-informed-screamer.com";
                                                }}),
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "saepe") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "7cc78ca1-ba92-48fc-8167-42cb73920592";
                                                    uri = "https://ecstatic-original.info";
                                                }}),
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "commodi") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "7596eb10-faaa-4235-ac59-55907aff1a3a";
                                                    uri = "http://young-pew.name";
                                                }}),
                                            }});, "quam") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            AddNotificationChannelsResponse res = sdk.addNotificationChannels(req);

            if (res.addNotificationChannelsResponse != null) {
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

* [addNotificationChannels](docs/sdk/README.md#addnotificationchannels) - Add up to 2 anomaly notifications channels for a profiling group.
* [batchGetFrameMetricData](docs/sdk/README.md#batchgetframemetricdata) -  Returns the time series of values for a requested list of frame metrics from a time period.
* [configureAgent](docs/sdk/README.md#configureagent) -  Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 
* [createProfilingGroup](docs/sdk/README.md#createprofilinggroup) - Creates a profiling group.
* [deleteProfilingGroup](docs/sdk/README.md#deleteprofilinggroup) - Deletes a profiling group.
* [describeProfilingGroup](docs/sdk/README.md#describeprofilinggroup) -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 
* [getFindingsReportAccountSummary](docs/sdk/README.md#getfindingsreportaccountsummary) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 
* [getNotificationConfiguration](docs/sdk/README.md#getnotificationconfiguration) - Get the current configuration for anomaly notifications for a profiling group.
* [getPolicy](docs/sdk/README.md#getpolicy) -  Returns the JSON-formatted resource-based policy on a profiling group. 
* [getProfile](docs/sdk/README.md#getprofile) - <p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
* [getRecommendations](docs/sdk/README.md#getrecommendations) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 
* [listFindingsReports](docs/sdk/README.md#listfindingsreports) - List the available reports for a given profiling group and time range.
* [listProfileTimes](docs/sdk/README.md#listprofiletimes) - Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
* [listProfilingGroups](docs/sdk/README.md#listprofilinggroups) -  Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of the tags that are assigned to a specified resource. 
* [postAgentProfile](docs/sdk/README.md#postagentprofile) -  Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 
* [putPermission](docs/sdk/README.md#putpermission) - <p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
* [removeNotificationChannel](docs/sdk/README.md#removenotificationchannel) - Remove one anomaly notifications channel for a profiling group.
* [removePermission](docs/sdk/README.md#removepermission) -  Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 
* [submitFeedback](docs/sdk/README.md#submitfeedback) - Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
* [tagResource](docs/sdk/README.md#tagresource) -  Use to assign one or more tags to a resource. 
* [untagResource](docs/sdk/README.md#untagresource) -  Use to remove one or more tags from a resource. 
* [updateProfilingGroup](docs/sdk/README.md#updateprofilinggroup) - Updates a profiling group.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
