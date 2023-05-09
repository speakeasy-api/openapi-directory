# SDK

## Overview

Amazon Kendra Intelligent Ranking uses Amazon Kendra semantic search capabilities to intelligently re-rank a search service's results.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kendra-ranking/>
### Available Operations

* [CreateRescoreExecutionPlan](#createrescoreexecutionplan) - <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
* [DeleteRescoreExecutionPlan](#deleterescoreexecutionplan) - Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [DescribeRescoreExecutionPlan](#describerescoreexecutionplan) - Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [ListRescoreExecutionPlans](#listrescoreexecutionplans) - Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [ListTagsForResource](#listtagsforresource) - Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
* [Rescore](#rescore) - Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
* [TagResource](#tagresource) - Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
* [UntagResource](#untagresource) - Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
* [UpdateRescoreExecutionPlan](#updaterescoreexecutionplan) - Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

## CreateRescoreExecutionPlan

<p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>

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
    res, err := s.SDK.CreateRescoreExecutionPlan(ctx, operations.CreateRescoreExecutionPlanRequest{
        CreateRescoreExecutionPlanRequest: shared.CreateRescoreExecutionPlanRequest{
            CapacityUnits: &shared.CapacityUnitsConfiguration{
                RescoreCapacityUnits: 791725,
            },
            ClientToken: sdk.String("placeat"),
            Description: sdk.String("voluptatum"),
            Name: "Miriam Huel",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quis",
                    Value: "veritatis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateRescoreExecutionPlanXAmzTargetEnumAwsKendraRerankingFrontendServiceCreateRescoreExecutionPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRescoreExecutionPlanResponse != nil {
        // handle response
    }
}
```

## DeleteRescoreExecutionPlan

Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

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
    res, err := s.SDK.DeleteRescoreExecutionPlan(ctx, operations.DeleteRescoreExecutionPlanRequest{
        DeleteRescoreExecutionPlanRequest: shared.DeleteRescoreExecutionPlanRequest{
            ID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.DeleteRescoreExecutionPlanXAmzTargetEnumAwsKendraRerankingFrontendServiceDeleteRescoreExecutionPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeRescoreExecutionPlan

Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

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
    res, err := s.SDK.DescribeRescoreExecutionPlan(ctx, operations.DescribeRescoreExecutionPlanRequest{
        DescribeRescoreExecutionPlanRequest: shared.DescribeRescoreExecutionPlanRequest{
            ID: "fea7596e-b10f-4aaa-a352-c5955907aff1",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DescribeRescoreExecutionPlanXAmzTargetEnumAwsKendraRerankingFrontendServiceDescribeRescoreExecutionPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRescoreExecutionPlanResponse != nil {
        // handle response
    }
}
```

## ListRescoreExecutionPlans

Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.

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
    res, err := s.SDK.ListRescoreExecutionPlans(ctx, operations.ListRescoreExecutionPlansRequest{
        ListRescoreExecutionPlansRequest: shared.ListRescoreExecutionPlansRequest{
            MaxResults: sdk.Int64(253291),
            NextToken: sdk.String("commodi"),
        },
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("animi"),
        XAmzTarget: operations.ListRescoreExecutionPlansXAmzTargetEnumAwsKendraRerankingFrontendServiceListRescoreExecutionPlans,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRescoreExecutionPlansResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "enim",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsKendraRerankingFrontendServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## Rescore

Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.

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
    res, err := s.SDK.Rescore(ctx, operations.RescoreRequest{
        RescoreRequest: shared.RescoreRequest{
            Documents: []shared.Document{
                shared.Document{
                    Body: sdk.String("quasi"),
                    GroupID: sdk.String("error"),
                    ID: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
                    OriginalScore: 5651.89,
                    Title: sdk.String("Ms."),
                    TokenizedBody: []string{
                        "modi",
                        "praesentium",
                        "rem",
                        "voluptates",
                    },
                    TokenizedTitle: []string{
                        "repudiandae",
                    },
                },
            },
            RescoreExecutionPlanID: "sint",
            SearchQuery: "veritatis",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.RescoreXAmzTargetEnumAwsKendraRerankingFrontendServiceRescore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RescoreResult != nil {
        // handle response
    }
}
```

## TagResource

Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.

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
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "deserunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quibusdam",
                    Value: "labore",
                },
                shared.Tag{
                    Key: "modi",
                    Value: "qui",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "cupiditate",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsKendraRerankingFrontendServiceTagResource,
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

Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "dolorum",
            TagKeys: []string{
                "tempora",
                "facilis",
                "tempore",
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsKendraRerankingFrontendServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateRescoreExecutionPlan

Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.

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
    res, err := s.SDK.UpdateRescoreExecutionPlan(ctx, operations.UpdateRescoreExecutionPlanRequest{
        UpdateRescoreExecutionPlanRequest: shared.UpdateRescoreExecutionPlanRequest{
            CapacityUnits: &shared.CapacityUnitsConfiguration{
                RescoreCapacityUnits: 592042,
            },
            Description: sdk.String("necessitatibus"),
            ID: "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f",
            Name: sdk.String("Sandy Huels"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.UpdateRescoreExecutionPlanXAmzTargetEnumAwsKendraRerankingFrontendServiceUpdateRescoreExecutionPlan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
