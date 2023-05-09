# SDK

## Overview

<p> This section provides documentation for the Amazon CodeGuru Profiler API operations. </p> <p> Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides recommendations that can help you fine-tune your application performance. Using machine learning algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can improve efficiency and remove CPU bottlenecks. </p> <p> Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization. </p> <note> <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM) languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications written in Java, it can also generate visualizations and a subset of recommendations for applications written in other JVM languages and Python.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codeguru-profiler/>
### Available Operations

* [AddNotificationChannels](#addnotificationchannels) - Add up to 2 anomaly notifications channels for a profiling group.
* [BatchGetFrameMetricData](#batchgetframemetricdata) -  Returns the time series of values for a requested list of frame metrics from a time period.
* [ConfigureAgent](#configureagent) -  Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 
* [CreateProfilingGroup](#createprofilinggroup) - Creates a profiling group.
* [DeleteProfilingGroup](#deleteprofilinggroup) - Deletes a profiling group.
* [DescribeProfilingGroup](#describeprofilinggroup) -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 
* [GetFindingsReportAccountSummary](#getfindingsreportaccountsummary) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 
* [GetNotificationConfiguration](#getnotificationconfiguration) - Get the current configuration for anomaly notifications for a profiling group.
* [GetPolicy](#getpolicy) -  Returns the JSON-formatted resource-based policy on a profiling group. 
* [GetProfile](#getprofile) - <p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
* [GetRecommendations](#getrecommendations) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 
* [ListFindingsReports](#listfindingsreports) - List the available reports for a given profiling group and time range.
* [ListProfileTimes](#listprofiletimes) - Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
* [ListProfilingGroups](#listprofilinggroups) -  Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 
* [ListTagsForResource](#listtagsforresource) -  Returns a list of the tags that are assigned to a specified resource. 
* [PostAgentProfile](#postagentprofile) -  Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 
* [PutPermission](#putpermission) - <p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
* [RemoveNotificationChannel](#removenotificationchannel) - Remove one anomaly notifications channel for a profiling group.
* [RemovePermission](#removepermission) -  Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 
* [SubmitFeedback](#submitfeedback) - Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
* [TagResource](#tagresource) -  Use to assign one or more tags to a resource. 
* [UntagResource](#untagresource) -  Use to remove one or more tags from a resource. 
* [UpdateProfilingGroup](#updateprofilinggroup) - Updates a profiling group.

## AddNotificationChannels

Add up to 2 anomaly notifications channels for a profiling group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddNotificationChannels(ctx, operations.AddNotificationChannelsRequest{
        RequestBody: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        shared.EventPublisherEnumAnomalyDetection,
                    },
                    ID: sdk.String("9251aa52-c3f5-4ad0-99da-1ffe78f097b0"),
                    URI: "http://insubstantial-dramaturge.org",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        shared.EventPublisherEnumAnomalyDetection,
                    },
                    ID: sdk.String("5471b5e6-e13b-499d-888e-1e91e450ad2a"),
                    URI: "https://tempting-durian.biz",
                },
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        ProfilingGroupName: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelsResponse != nil {
        // handle response
    }
}
```

## BatchGetFrameMetricData

 Returns the time series of values for a requested list of frame metrics from a time period.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetFrameMetricData(ctx, operations.BatchGetFrameMetricDataRequest{
        RequestBody: operations.BatchGetFrameMetricDataRequestBody{
            FrameMetrics: []shared.FrameMetric{
                shared.FrameMetric{
                    FrameName: "fugit",
                    ThreadStates: []string{
                        "excepturi",
                        "tempora",
                        "facilis",
                    },
                    Type: shared.MetricTypeEnumAggregatedRelativeTotalTime,
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
        EndTime: types.MustTimeFromString("2022-05-29T21:42:45.399Z"),
        Period: sdk.String("necessitatibus"),
        ProfilingGroupName: "sint",
        StartTime: types.MustTimeFromString("2022-07-22T03:36:34.615Z"),
        TargetResolution: operations.BatchGetFrameMetricDataTargetResolutionEnumP1D.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetFrameMetricDataResponse != nil {
        // handle response
    }
}
```

## ConfigureAgent

 Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfigureAgent(ctx, operations.ConfigureAgentRequest{
        RequestBody: operations.ConfigureAgentRequestBody{
            FleetInstanceID: sdk.String("a"),
            Metadata: map[string]string{
                "in": "in",
                "illum": "maiores",
                "rerum": "dicta",
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ProfilingGroupName: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigureAgentResponse != nil {
        // handle response
    }
}
```

## CreateProfilingGroup

Creates a profiling group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProfilingGroup(ctx, operations.CreateProfilingGroupRequest{
        RequestBody: operations.CreateProfilingGroupRequestBody{
            AgentOrchestrationConfig: &operations.CreateProfilingGroupRequestBodyAgentOrchestrationConfig{
                ProfilingEnabled: sdk.Bool(false),
            },
            ComputePlatform: operations.CreateProfilingGroupRequestBodyComputePlatformEnumAwsLambda.ToPointer(),
            ProfilingGroupName: "enim",
            Tags: map[string]string{
                "delectus": "quidem",
                "provident": "nam",
                "id": "blanditiis",
                "deleniti": "sapiente",
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        ClientToken: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProfilingGroupResponse != nil {
        // handle response
    }
}
```

## DeleteProfilingGroup

Deletes a profiling group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProfilingGroup(ctx, operations.DeleteProfilingGroupRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        ProfilingGroupName: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProfilingGroupResponse != nil {
        // handle response
    }
}
```

## DescribeProfilingGroup

 Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProfilingGroup(ctx, operations.DescribeProfilingGroupRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("et"),
        ProfilingGroupName: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProfilingGroupResponse != nil {
        // handle response
    }
}
```

## GetFindingsReportAccountSummary

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFindingsReportAccountSummary(ctx, operations.GetFindingsReportAccountSummaryRequest{
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        DailyReportsOnly: sdk.Bool(false),
        MaxResults: sdk.Int64(652103),
        NextToken: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFindingsReportAccountSummaryResponse != nil {
        // handle response
    }
}
```

## GetNotificationConfiguration

Get the current configuration for anomaly notifications for a profiling group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetNotificationConfiguration(ctx, operations.GetNotificationConfigurationRequest{
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
        ProfilingGroupName: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationConfigurationResponse != nil {
        // handle response
    }
}
```

## GetPolicy

 Returns the JSON-formatted resource-based policy on a profiling group. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPolicy(ctx, operations.GetPolicyRequest{
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        ProfilingGroupName: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPolicyResponse != nil {
        // handle response
    }
}
```

## GetProfile

<p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProfile(ctx, operations.GetProfileRequest{
        Accept: sdk.String("repudiandae"),
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
        EndTime: types.MustTimeFromString("2022-11-20T20:56:20.791Z"),
        MaxDepth: sdk.Int64(162493),
        Period: sdk.String("praesentium"),
        ProfilingGroupName: "natus",
        StartTime: types.MustTimeFromString("2022-11-16T19:20:12.159Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfileResponse != nil {
        // handle response
    }
}
```

## GetRecommendations

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRecommendations(ctx, operations.GetRecommendationsRequest{
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
        EndTime: types.MustTimeFromString("2022-12-19T20:58:17.857Z"),
        Locale: sdk.String("ab"),
        ProfilingGroupName: "maiores",
        StartTime: types.MustTimeFromString("2022-04-03T11:56:45.015Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListFindingsReports

List the available reports for a given profiling group and time range.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFindingsReports(ctx, operations.ListFindingsReportsRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        DailyReportsOnly: sdk.Bool(false),
        EndTime: types.MustTimeFromString("2022-02-22T15:09:45.631Z"),
        MaxResults: sdk.Int64(230742),
        NextToken: sdk.String("aut"),
        ProfilingGroupName: "cumque",
        StartTime: types.MustTimeFromString("2022-01-21T09:28:40.593Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingsReportsResponse != nil {
        // handle response
    }
}
```

## ListProfileTimes

Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProfileTimes(ctx, operations.ListProfileTimesRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("eaque"),
        EndTime: types.MustTimeFromString("2022-10-20T00:01:48.775Z"),
        MaxResults: sdk.Int64(179490),
        NextToken: sdk.String("perferendis"),
        OrderBy: operations.ListProfileTimesOrderByEnumTimestampDescending.ToPointer(),
        Period: operations.ListProfileTimesPeriodEnumP1D,
        ProfilingGroupName: "quam",
        StartTime: types.MustTimeFromString("2022-02-15T18:44:26.943Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProfileTimesResponse != nil {
        // handle response
    }
}
```

## ListProfilingGroups

 Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProfilingGroups(ctx, operations.ListProfilingGroupsRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        IncludeDescription: sdk.Bool(false),
        MaxResults: sdk.Int64(783645),
        NextToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProfilingGroupsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Returns a list of the tags that are assigned to a specified resource. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        ResourceArn: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PostAgentProfile

 Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PostAgentProfile(ctx, operations.PostAgentProfileRequest{
        ContentType: "modi",
        RequestBody: operations.PostAgentProfileRequestBody{
            AgentProfile: "iste",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ProfileToken: sdk.String("quaerat"),
        ProfilingGroupName: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAgentProfileResponse != nil {
        // handle response
    }
}
```

## PutPermission

<p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutPermission(ctx, operations.PutPermissionRequest{
        RequestBody: operations.PutPermissionRequestBody{
            Principals: []string{
                "dolorem",
                "dolorem",
            },
            RevisionID: sdk.String("dolor"),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        ActionGroup: operations.PutPermissionActionGroupEnumAgentPermissions,
        ProfilingGroupName: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPermissionResponse != nil {
        // handle response
    }
}
```

## RemoveNotificationChannel

Remove one anomaly notifications channel for a profiling group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveNotificationChannel(ctx, operations.RemoveNotificationChannelRequest{
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        ChannelID: "odio",
        ProfilingGroupName: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveNotificationChannelResponse != nil {
        // handle response
    }
}
```

## RemovePermission

 Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemovePermission(ctx, operations.RemovePermissionRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        ActionGroup: operations.RemovePermissionActionGroupEnumAgentPermissions,
        ProfilingGroupName: "sit",
        RevisionID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemovePermissionResponse != nil {
        // handle response
    }
}
```

## SubmitFeedback

Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SubmitFeedback(ctx, operations.SubmitFeedbackRequest{
        RequestBody: operations.SubmitFeedbackRequestBody{
            Comment: sdk.String("ab"),
            Type: operations.SubmitFeedbackRequestBodyTypeEnumNegative,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        AnomalyInstanceID: "distinctio",
        ProfilingGroupName: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitFeedbackResponse != nil {
        // handle response
    }
}
```

## TagResource

 Use to assign one or more tags to a resource. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "ipsum": "voluptate",
                "id": "saepe",
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        ResourceArn: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Use to remove one or more tags from a resource. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        ResourceArn: "alias",
        TagKeys: []string{
            "quaerat",
            "tempora",
            "vel",
            "quod",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateProfilingGroup

Updates a profiling group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProfilingGroup(ctx, operations.UpdateProfilingGroupRequest{
        RequestBody: operations.UpdateProfilingGroupRequestBody{
            AgentOrchestrationConfig: operations.UpdateProfilingGroupRequestBodyAgentOrchestrationConfig{
                ProfilingEnabled: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        ProfilingGroupName: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProfilingGroupResponse != nil {
        // handle response
    }
}
```
