# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/xray/2016-04-12/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.BatchGetTraces(ctx, operations.BatchGetTracesRequest{
        NextToken: sdk.String("corrupti"),
        RequestBody: operations.BatchGetTracesRequestBody{
            NextToken: sdk.String("provident"),
            TraceIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchGetTraces](docs/sdk/README.md#batchgettraces) - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
* [CreateGroup](docs/sdk/README.md#creategroup) - Creates a group resource with a name and a filter expression. 
* [CreateSamplingRule](docs/sdk/README.md#createsamplingrule) - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
* [DeleteGroup](docs/sdk/README.md#deletegroup) - Deletes a group resource.
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes a resource policy from the target Amazon Web Services account.
* [DeleteSamplingRule](docs/sdk/README.md#deletesamplingrule) - Deletes a sampling rule.
* [GetEncryptionConfig](docs/sdk/README.md#getencryptionconfig) - Retrieves the current encryption configuration for X-Ray data.
* [GetGroup](docs/sdk/README.md#getgroup) - Retrieves group resource details.
* [GetGroups](docs/sdk/README.md#getgroups) - Retrieves all active group details.
* [GetInsight](docs/sdk/README.md#getinsight) - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
* [GetInsightEvents](docs/sdk/README.md#getinsightevents) - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
* [GetInsightImpactGraph](docs/sdk/README.md#getinsightimpactgraph) - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
* [GetInsightSummaries](docs/sdk/README.md#getinsightsummaries) - Retrieves the summaries of all insights in the specified group matching the provided filter values.
* [GetSamplingRules](docs/sdk/README.md#getsamplingrules) - Retrieves all sampling rules.
* [GetSamplingStatisticSummaries](docs/sdk/README.md#getsamplingstatisticsummaries) - Retrieves information about recent sampling results for all sampling rules.
* [GetSamplingTargets](docs/sdk/README.md#getsamplingtargets) - Requests a sampling quota for rules that the service is using to sample requests. 
* [GetServiceGraph](docs/sdk/README.md#getservicegraph) - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
* [GetTimeSeriesServiceStatistics](docs/sdk/README.md#gettimeseriesservicestatistics) - Get an aggregation of service statistics defined by a specific time range.
* [GetTraceGraph](docs/sdk/README.md#gettracegraph) - Retrieves a service graph for one or more specific trace IDs.
* [GetTraceSummaries](docs/sdk/README.md#gettracesummaries) - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
* [ListResourcePolicies](docs/sdk/README.md#listresourcepolicies) - Returns the list of resource policies in the target Amazon Web Services account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
* [PutEncryptionConfig](docs/sdk/README.md#putencryptionconfig) - Updates the encryption configuration for X-Ray data.
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) -  Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 
* [PutTelemetryRecords](docs/sdk/README.md#puttelemetryrecords) - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
* [PutTraceSegments](docs/sdk/README.md#puttracesegments) - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
* [TagResource](docs/sdk/README.md#tagresource) - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
* [UpdateGroup](docs/sdk/README.md#updategroup) - Updates a group resource.
* [UpdateSamplingRule](docs/sdk/README.md#updatesamplingrule) - Modifies a sampling rule's configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
