# SDK

## Overview

Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

Amazon Web Services documentation
<https://docs.aws.amazon.com/xray/>
### Available Operations

* [BatchGetTraces](#batchgettraces) - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
* [CreateGroup](#creategroup) - Creates a group resource with a name and a filter expression. 
* [CreateSamplingRule](#createsamplingrule) - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
* [DeleteGroup](#deletegroup) - Deletes a group resource.
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource policy from the target Amazon Web Services account.
* [DeleteSamplingRule](#deletesamplingrule) - Deletes a sampling rule.
* [GetEncryptionConfig](#getencryptionconfig) - Retrieves the current encryption configuration for X-Ray data.
* [GetGroup](#getgroup) - Retrieves group resource details.
* [GetGroups](#getgroups) - Retrieves all active group details.
* [GetInsight](#getinsight) - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
* [GetInsightEvents](#getinsightevents) - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
* [GetInsightImpactGraph](#getinsightimpactgraph) - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
* [GetInsightSummaries](#getinsightsummaries) - Retrieves the summaries of all insights in the specified group matching the provided filter values.
* [GetSamplingRules](#getsamplingrules) - Retrieves all sampling rules.
* [GetSamplingStatisticSummaries](#getsamplingstatisticsummaries) - Retrieves information about recent sampling results for all sampling rules.
* [GetSamplingTargets](#getsamplingtargets) - Requests a sampling quota for rules that the service is using to sample requests. 
* [GetServiceGraph](#getservicegraph) - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
* [GetTimeSeriesServiceStatistics](#gettimeseriesservicestatistics) - Get an aggregation of service statistics defined by a specific time range.
* [GetTraceGraph](#gettracegraph) - Retrieves a service graph for one or more specific trace IDs.
* [GetTraceSummaries](#gettracesummaries) - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
* [ListResourcePolicies](#listresourcepolicies) - Returns the list of resource policies in the target Amazon Web Services account.
* [ListTagsForResource](#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
* [PutEncryptionConfig](#putencryptionconfig) - Updates the encryption configuration for X-Ray data.
* [PutResourcePolicy](#putresourcepolicy) -  Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 
* [PutTelemetryRecords](#puttelemetryrecords) - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
* [PutTraceSegments](#puttracesegments) - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
* [TagResource](#tagresource) - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
* [UntagResource](#untagresource) - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
* [UpdateGroup](#updategroup) - Updates a group resource.
* [UpdateSamplingRule](#updatesamplingrule) - Modifies a sampling rule's configuration.

## BatchGetTraces

Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.

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
    res, err := s.SDK.BatchGetTraces(ctx, operations.BatchGetTracesRequest{
        NextToken: sdk.String("magnam"),
        RequestBody: operations.BatchGetTracesRequestBody{
            NextToken: sdk.String("debitis"),
            TraceIds: []string{
                "delectus",
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
}
```

## CreateGroup

Creates a group resource with a name and a filter expression. 

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
    res, err := s.SDK.CreateGroup(ctx, operations.CreateGroupRequest{
        RequestBody: operations.CreateGroupRequestBody{
            FilterExpression: sdk.String("excepturi"),
            GroupName: "nisi",
            InsightsConfiguration: &operations.CreateGroupRequestBodyInsightsConfiguration{
                InsightsEnabled: sdk.Bool(false),
                NotificationsEnabled: sdk.Bool(false),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
                shared.Tag{
                    Key: "quis",
                    Value: "veritatis",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "perferendis",
                },
                shared.Tag{
                    Key: "ipsam",
                    Value: "repellendus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResult != nil {
        // handle response
    }
}
```

## CreateSamplingRule

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

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
    res, err := s.SDK.CreateSamplingRule(ctx, operations.CreateSamplingRuleRequest{
        RequestBody: operations.CreateSamplingRuleRequestBody{
            SamplingRule: operations.CreateSamplingRuleRequestBodySamplingRule{
                Attributes: map[string]string{
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                    "nam": "officia",
                },
                FixedRate: sdk.Float64(5820.2),
                HTTPMethod: sdk.String("fugit"),
                Host: sdk.String("deleniti"),
                Priority: sdk.Int64(944669),
                ReservoirSize: sdk.Int64(758616),
                ResourceARN: sdk.String("totam"),
                RuleARN: sdk.String("beatae"),
                RuleName: sdk.String("commodi"),
                ServiceName: sdk.String("molestiae"),
                ServiceType: sdk.String("modi"),
                URLPath: sdk.String("qui"),
                Version: sdk.Int64(774234),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "esse",
                    Value: "ipsum",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "aspernatur",
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: "ad",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSamplingRuleResult != nil {
        // handle response
    }
}
```

## DeleteGroup

Deletes a group resource.

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
    res, err := s.SDK.DeleteGroup(ctx, operations.DeleteGroupRequest{
        RequestBody: operations.DeleteGroupRequestBody{
            GroupARN: sdk.String("saepe"),
            GroupName: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupResult != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes a resource policy from the target Amazon Web Services account.

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        RequestBody: operations.DeleteResourcePolicyRequestBody{
            PolicyName: "ipsa",
            PolicyRevisionID: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResult != nil {
        // handle response
    }
}
```

## DeleteSamplingRule

Deletes a sampling rule.

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
    res, err := s.SDK.DeleteSamplingRule(ctx, operations.DeleteSamplingRuleRequest{
        RequestBody: operations.DeleteSamplingRuleRequestBody{
            RuleARN: sdk.String("nobis"),
            RuleName: sdk.String("enim"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSamplingRuleResult != nil {
        // handle response
    }
}
```

## GetEncryptionConfig

Retrieves the current encryption configuration for X-Ray data.

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
    res, err := s.SDK.GetEncryptionConfig(ctx, operations.GetEncryptionConfigRequest{
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEncryptionConfigResult != nil {
        // handle response
    }
}
```

## GetGroup

Retrieves group resource details.

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
    res, err := s.SDK.GetGroup(ctx, operations.GetGroupRequest{
        RequestBody: operations.GetGroupRequestBody{
            GroupARN: sdk.String("repellat"),
            GroupName: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupResult != nil {
        // handle response
    }
}
```

## GetGroups

Retrieves all active group details.

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
    res, err := s.SDK.GetGroups(ctx, operations.GetGroupsRequest{
        NextToken: sdk.String("quia"),
        RequestBody: operations.GetGroupsRequestBody{
            NextToken: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupsResult != nil {
        // handle response
    }
}
```

## GetInsight

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

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
    res, err := s.SDK.GetInsight(ctx, operations.GetInsightRequest{
        RequestBody: operations.GetInsightRequestBody{
            InsightID: "tenetur",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightResult != nil {
        // handle response
    }
}
```

## GetInsightEvents

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

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
    res, err := s.SDK.GetInsightEvents(ctx, operations.GetInsightEventsRequest{
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("quasi"),
        RequestBody: operations.GetInsightEventsRequestBody{
            InsightID: "reiciendis",
            MaxResults: sdk.Int64(976460),
            NextToken: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightEventsResult != nil {
        // handle response
    }
}
```

## GetInsightImpactGraph

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

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
    res, err := s.SDK.GetInsightImpactGraph(ctx, operations.GetInsightImpactGraphRequest{
        RequestBody: operations.GetInsightImpactGraphRequestBody{
            EndTime: types.MustTimeFromString("2022-12-17T16:42:52.927Z"),
            InsightID: "reprehenderit",
            NextToken: sdk.String("ut"),
            StartTime: types.MustTimeFromString("2022-08-22T09:14:02.538Z"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightImpactGraphResult != nil {
        // handle response
    }
}
```

## GetInsightSummaries

Retrieves the summaries of all insights in the specified group matching the provided filter values.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInsightSummaries(ctx, operations.GetInsightSummariesRequest{
        MaxResults: sdk.String("commodi"),
        NextToken: sdk.String("repudiandae"),
        RequestBody: operations.GetInsightSummariesRequestBody{
            EndTime: types.MustTimeFromString("2022-10-13T20:38:16.426Z"),
            GroupARN: sdk.String("quidem"),
            GroupName: sdk.String("molestias"),
            MaxResults: sdk.Int64(566602),
            NextToken: sdk.String("pariatur"),
            StartTime: types.MustTimeFromString("2022-06-29T05:25:54.356Z"),
            States: []shared.InsightStateEnum{
                shared.InsightStateEnumClosed,
                shared.InsightStateEnumActive,
                shared.InsightStateEnumClosed,
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightSummariesResult != nil {
        // handle response
    }
}
```

## GetSamplingRules

Retrieves all sampling rules.

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
    res, err := s.SDK.GetSamplingRules(ctx, operations.GetSamplingRulesRequest{
        NextToken: sdk.String("quibusdam"),
        RequestBody: operations.GetSamplingRulesRequestBody{
            NextToken: sdk.String("explicabo"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSamplingRulesResult != nil {
        // handle response
    }
}
```

## GetSamplingStatisticSummaries

Retrieves information about recent sampling results for all sampling rules.

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
    res, err := s.SDK.GetSamplingStatisticSummaries(ctx, operations.GetSamplingStatisticSummariesRequest{
        NextToken: sdk.String("cupiditate"),
        RequestBody: operations.GetSamplingStatisticSummariesRequestBody{
            NextToken: sdk.String("quos"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSamplingStatisticSummariesResult != nil {
        // handle response
    }
}
```

## GetSamplingTargets

Requests a sampling quota for rules that the service is using to sample requests. 

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
    res, err := s.SDK.GetSamplingTargets(ctx, operations.GetSamplingTargetsRequest{
        RequestBody: operations.GetSamplingTargetsRequestBody{
            SamplingStatisticsDocuments: []shared.SamplingStatisticsDocument{
                shared.SamplingStatisticsDocument{
                    BorrowCount: sdk.Int64(270008),
                    ClientID: "facilis",
                    RequestCount: 735194,
                    RuleName: "labore",
                    SampledCount: 962189,
                    Timestamp: types.MustTimeFromString("2022-10-02T04:55:20.234Z"),
                },
                shared.SamplingStatisticsDocument{
                    BorrowCount: sdk.Int64(756107),
                    ClientID: "sint",
                    RequestCount: 396098,
                    RuleName: "provident",
                    SampledCount: 896039,
                    Timestamp: types.MustTimeFromString("2021-09-21T14:06:09.271Z"),
                },
                shared.SamplingStatisticsDocument{
                    BorrowCount: sdk.Int64(223081),
                    ClientID: "debitis",
                    RequestCount: 952749,
                    RuleName: "dolorum",
                    SampledCount: 447125,
                    Timestamp: types.MustTimeFromString("2022-02-26T01:27:36.152Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSamplingTargetsResult != nil {
        // handle response
    }
}
```

## GetServiceGraph

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

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
    res, err := s.SDK.GetServiceGraph(ctx, operations.GetServiceGraphRequest{
        NextToken: sdk.String("aliquid"),
        RequestBody: operations.GetServiceGraphRequestBody{
            EndTime: types.MustTimeFromString("2021-03-28T19:04:18.797Z"),
            GroupARN: sdk.String("non"),
            GroupName: sdk.String("occaecati"),
            NextToken: sdk.String("enim"),
            StartTime: types.MustTimeFromString("2020-02-08T20:51:42.354Z"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceGraphResult != nil {
        // handle response
    }
}
```

## GetTimeSeriesServiceStatistics

Get an aggregation of service statistics defined by a specific time range.

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
    res, err := s.SDK.GetTimeSeriesServiceStatistics(ctx, operations.GetTimeSeriesServiceStatisticsRequest{
        NextToken: sdk.String("amet"),
        RequestBody: operations.GetTimeSeriesServiceStatisticsRequestBody{
            EndTime: types.MustTimeFromString("2022-03-18T17:53:23.400Z"),
            EntitySelectorExpression: sdk.String("vel"),
            ForecastStatistics: sdk.Bool(false),
            GroupARN: sdk.String("natus"),
            GroupName: sdk.String("omnis"),
            NextToken: sdk.String("molestiae"),
            Period: sdk.Int64(19193),
            StartTime: types.MustTimeFromString("2022-09-12T22:12:15.897Z"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimeSeriesServiceStatisticsResult != nil {
        // handle response
    }
}
```

## GetTraceGraph

Retrieves a service graph for one or more specific trace IDs.

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
    res, err := s.SDK.GetTraceGraph(ctx, operations.GetTraceGraphRequest{
        NextToken: sdk.String("eum"),
        RequestBody: operations.GetTraceGraphRequestBody{
            NextToken: sdk.String("vero"),
            TraceIds: []string{
                "architecto",
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTraceGraphResult != nil {
        // handle response
    }
}
```

## GetTraceSummaries

<p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>

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
    res, err := s.SDK.GetTraceSummaries(ctx, operations.GetTraceSummariesRequest{
        NextToken: sdk.String("accusantium"),
        RequestBody: operations.GetTraceSummariesRequestBody{
            EndTime: types.MustTimeFromString("2021-01-23T15:47:23.464Z"),
            FilterExpression: sdk.String("mollitia"),
            NextToken: sdk.String("ad"),
            Sampling: sdk.Bool(false),
            SamplingStrategy: &operations.GetTraceSummariesRequestBodySamplingStrategy{
                Name: shared.SamplingStrategyNameEnumPartialScan.ToPointer(),
                Value: sdk.Float64(2212.62),
            },
            StartTime: types.MustTimeFromString("2022-07-30T07:35:03.817Z"),
            TimeRangeType: operations.GetTraceSummariesRequestBodyTimeRangeTypeEnumTraceID.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTraceSummariesResult != nil {
        // handle response
    }
}
```

## ListResourcePolicies

Returns the list of resource policies in the target Amazon Web Services account.

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
    res, err := s.SDK.ListResourcePolicies(ctx, operations.ListResourcePoliciesRequest{
        NextToken: sdk.String("facilis"),
        RequestBody: operations.ListResourcePoliciesRequestBody{
            NextToken: sdk.String("in"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcePoliciesResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

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
        NextToken: sdk.String("quibusdam"),
        RequestBody: operations.ListTagsForResourceRequestBody{
            NextToken: sdk.String("sed"),
            ResourceARN: "saepe",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutEncryptionConfig

Updates the encryption configuration for X-Ray data.

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
    res, err := s.SDK.PutEncryptionConfig(ctx, operations.PutEncryptionConfigRequest{
        RequestBody: operations.PutEncryptionConfigRequestBody{
            KeyID: sdk.String("quo"),
            Type: operations.PutEncryptionConfigRequestBodyTypeEnumKms,
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEncryptionConfigResult != nil {
        // handle response
    }
}
```

## PutResourcePolicy

 Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        RequestBody: operations.PutResourcePolicyRequestBody{
            BypassPolicyLockoutCheck: sdk.Bool(false),
            PolicyDocument: "ab",
            PolicyName: "maiores",
            PolicyRevisionID: sdk.String("quidem"),
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResult != nil {
        // handle response
    }
}
```

## PutTelemetryRecords

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

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
    res, err := s.SDK.PutTelemetryRecords(ctx, operations.PutTelemetryRecordsRequest{
        RequestBody: operations.PutTelemetryRecordsRequestBody{
            Ec2InstanceID: sdk.String("voluptatibus"),
            Hostname: sdk.String("affectionate-stonework.biz"),
            ResourceARN: sdk.String("aut"),
            TelemetryRecords: []shared.TelemetryRecord{
                shared.TelemetryRecord{
                    BackendConnectionErrors: &shared.BackendConnectionErrors{
                        ConnectionRefusedCount: sdk.Int64(359978),
                        HTTPCode4XXCount: sdk.Int64(944124),
                        HTTPCode5XXCount: sdk.Int64(729991),
                        OtherCount: sdk.Int64(749999),
                        TimeoutCount: sdk.Int64(171629),
                        UnknownHostCount: sdk.Int64(339404),
                    },
                    SegmentsReceivedCount: sdk.Int64(521037),
                    SegmentsRejectedCount: sdk.Int64(489549),
                    SegmentsSentCount: sdk.Int64(54338),
                    SegmentsSpilloverCount: sdk.Int64(338985),
                    Timestamp: types.MustTimeFromString("2022-10-27T11:39:54.088Z"),
                },
                shared.TelemetryRecord{
                    BackendConnectionErrors: &shared.BackendConnectionErrors{
                        ConnectionRefusedCount: sdk.Int64(18521),
                        HTTPCode4XXCount: sdk.Int64(170986),
                        HTTPCode5XXCount: sdk.Int64(793698),
                        OtherCount: sdk.Int64(463451),
                        TimeoutCount: sdk.Int64(223924),
                        UnknownHostCount: sdk.Int64(874573),
                    },
                    SegmentsReceivedCount: sdk.Int64(345352),
                    SegmentsRejectedCount: sdk.Int64(944120),
                    SegmentsSentCount: sdk.Int64(928082),
                    SegmentsSpilloverCount: sdk.Int64(608253),
                    Timestamp: types.MustTimeFromString("2021-10-22T10:35:49.400Z"),
                },
                shared.TelemetryRecord{
                    BackendConnectionErrors: &shared.BackendConnectionErrors{
                        ConnectionRefusedCount: sdk.Int64(31838),
                        HTTPCode4XXCount: sdk.Int64(783645),
                        HTTPCode5XXCount: sdk.Int64(164694),
                        OtherCount: sdk.Int64(500026),
                        TimeoutCount: sdk.Int64(621479),
                        UnknownHostCount: sdk.Int64(50370),
                    },
                    SegmentsReceivedCount: sdk.Int64(577229),
                    SegmentsRejectedCount: sdk.Int64(699098),
                    SegmentsSentCount: sdk.Int64(237893),
                    SegmentsSpilloverCount: sdk.Int64(992397),
                    Timestamp: types.MustTimeFromString("2022-03-14T08:20:25.450Z"),
                },
                shared.TelemetryRecord{
                    BackendConnectionErrors: &shared.BackendConnectionErrors{
                        ConnectionRefusedCount: sdk.Int64(613966),
                        HTTPCode4XXCount: sdk.Int64(679091),
                        HTTPCode5XXCount: sdk.Int64(535633),
                        OtherCount: sdk.Int64(864282),
                        TimeoutCount: sdk.Int64(589910),
                        UnknownHostCount: sdk.Int64(750844),
                    },
                    SegmentsReceivedCount: sdk.Int64(730122),
                    SegmentsRejectedCount: sdk.Int64(964490),
                    SegmentsSentCount: sdk.Int64(311945),
                    SegmentsSpilloverCount: sdk.Int64(554242),
                    Timestamp: types.MustTimeFromString("2022-10-15T11:27:32.342Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutTelemetryRecordsResult != nil {
        // handle response
    }
}
```

## PutTraceSegments

<p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>

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
    res, err := s.SDK.PutTraceSegments(ctx, operations.PutTraceSegmentsRequest{
        RequestBody: operations.PutTraceSegmentsRequestBody{
            TraceSegmentDocuments: []string{
                "dignissimos",
                "reiciendis",
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutTraceSegmentsResult != nil {
        // handle response
    }
}
```

## TagResource

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            ResourceARN: "odio",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: "quidem",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "voluptas",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
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

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).

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
        RequestBody: operations.UntagResourceRequestBody{
            ResourceARN: "dolorum",
            TagKeys: []string{
                "voluptate",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateGroup

Updates a group resource.

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
    res, err := s.SDK.UpdateGroup(ctx, operations.UpdateGroupRequest{
        RequestBody: operations.UpdateGroupRequestBody{
            FilterExpression: sdk.String("voluptate"),
            GroupARN: sdk.String("id"),
            GroupName: sdk.String("saepe"),
            InsightsConfiguration: &operations.UpdateGroupRequestBodyInsightsConfiguration{
                InsightsEnabled: sdk.Bool(false),
                NotificationsEnabled: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGroupResult != nil {
        // handle response
    }
}
```

## UpdateSamplingRule

Modifies a sampling rule's configuration.

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
    res, err := s.SDK.UpdateSamplingRule(ctx, operations.UpdateSamplingRuleRequest{
        RequestBody: operations.UpdateSamplingRuleRequestBody{
            SamplingRuleUpdate: operations.UpdateSamplingRuleRequestBodySamplingRuleUpdate{
                Attributes: map[string]string{
                    "suscipit": "deserunt",
                    "provident": "minima",
                    "repellendus": "totam",
                    "similique": "alias",
                },
                FixedRate: sdk.Float64(8726.51),
                HTTPMethod: sdk.String("quaerat"),
                Host: sdk.String("tempora"),
                Priority: sdk.Int64(425451),
                ReservoirSize: sdk.Int64(798047),
                ResourceARN: sdk.String("officiis"),
                RuleARN: sdk.String("qui"),
                RuleName: sdk.String("dolorum"),
                ServiceName: sdk.String("a"),
                ServiceType: sdk.String("esse"),
                URLPath: sdk.String("harum"),
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSamplingRuleResult != nil {
        // handle response
    }
}
```
