# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kendra-ranking/2022-10-19/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateRescoreExecutionPlanRequest{
        CreateRescoreExecutionPlanRequest: shared.CreateRescoreExecutionPlanRequest{
            CapacityUnits: &shared.CapacityUnitsConfiguration{
                RescoreCapacityUnits: 548814,
            },
            ClientToken: "provident",
            Description: "distinctio",
            Name: "quibusdam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
        XAmzTarget: "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan",
    }

    ctx := context.Background()
    res, err := s.CreateRescoreExecutionPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRescoreExecutionPlanResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateRescoreExecutionPlan` - <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
* `DeleteRescoreExecutionPlan` - Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* `DescribeRescoreExecutionPlan` - Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* `ListRescoreExecutionPlans` - Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* `ListTagsForResource` - Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
* `Rescore` - Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
* `TagResource` - Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
* `UntagResource` - Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
* `UpdateRescoreExecutionPlan` - Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
