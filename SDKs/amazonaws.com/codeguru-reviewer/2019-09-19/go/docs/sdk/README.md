# SDK

## Overview

<p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java and Python code.</p> <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the <i> <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i> </p> <p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codeguru-reviewer/>
### Available Operations

* [AssociateRepository](#associaterepository) - <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* [CreateCodeReview](#createcodereview) - Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
* [DescribeCodeReview](#describecodereview) - Returns the metadata associated with the code review along with its status.
* [DescribeRecommendationFeedback](#describerecommendationfeedback) - Describes the customer feedback for a CodeGuru Reviewer recommendation.
* [DescribeRepositoryAssociation](#describerepositoryassociation) - Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
* [DisassociateRepository](#disassociaterepository) - Removes the association between Amazon CodeGuru Reviewer and a repository.
* [ListCodeReviews](#listcodereviews) - Lists all the code reviews that the customer has created in the past 90 days.
* [ListRecommendationFeedback](#listrecommendationfeedback) - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
* [ListRecommendations](#listrecommendations) - Returns the list of all recommendations for a completed code review.
* [ListRepositoryAssociations](#listrepositoryassociations) - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
* [ListTagsForResource](#listtagsforresource) - Returns the list of tags associated with an associated repository resource.
* [PutRecommendationFeedback](#putrecommendationfeedback) - Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
* [TagResource](#tagresource) - Adds one or more tags to an associated repository.
* [UntagResource](#untagresource) - Removes a tag from an associated repository.

## AssociateRepository

<p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>

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
    res, err := s.SDK.AssociateRepository(ctx, operations.AssociateRepositoryRequest{
        RequestBody: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: sdk.String("at"),
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKMSKeyDetails{
                EncryptionOption: shared.EncryptionOptionEnumCustomerManagedCmk.ToPointer(),
                KMSKeyID: sdk.String("maiores"),
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "molestiae",
                    Name: "Forrest Koepp",
                    Owner: "dolorum",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "Antoinette Nikolaus",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "deleniti",
                    Name: "Ms. Earnest Lebsack",
                    Owner: "modi",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "qui",
                    Name: "Jonathon Klocko",
                },
            },
            Tags: map[string]string{
                "perferendis": "ad",
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

    if res.AssociateRepositoryResponse != nil {
        // handle response
    }
}
```

## CreateCodeReview

Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.

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
    res, err := s.SDK.CreateCodeReview(ctx, operations.CreateCodeReviewRequest{
        RequestBody: operations.CreateCodeReviewRequestBody{
            ClientRequestToken: sdk.String("saepe"),
            Name: "Harvey Hessel",
            RepositoryAssociationArn: "saepe",
            Type: operations.CreateCodeReviewRequestBodyType{
                AnalysisTypes: []shared.AnalysisTypeEnum{
                    shared.AnalysisTypeEnumSecurity,
                    shared.AnalysisTypeEnumSecurity,
                    shared.AnalysisTypeEnumCodeQuality,
                },
                RepositoryAnalysis: &shared.RepositoryAnalysis{
                    RepositoryHead: &shared.RepositoryHeadSourceCodeType{
                        BranchName: "est",
                    },
                    SourceCodeType: &shared.SourceCodeType{
                        BranchDiff: &shared.BranchDiffSourceCodeType{
                            DestinationBranchName: "mollitia",
                            SourceBranchName: "laborum",
                        },
                        CommitDiff: &shared.CommitDiffSourceCodeType{
                            DestinationCommit: sdk.String("dolores"),
                            MergeBaseCommit: sdk.String("dolorem"),
                            SourceCommit: sdk.String("corporis"),
                        },
                        RepositoryHead: &shared.RepositoryHeadSourceCodeType{
                            BranchName: "explicabo",
                        },
                        RequestMetadata: &shared.RequestMetadata{
                            EventInfo: &shared.EventInfo{
                                Name: sdk.String("Ronnie Mohr"),
                                State: sdk.String("excepturi"),
                            },
                            RequestID: sdk.String("accusantium"),
                            Requester: sdk.String("iure"),
                            VendorName: shared.VendorNameEnumGitLab.ToPointer(),
                        },
                        S3BucketRepository: &shared.S3BucketRepository{
                            Details: &shared.S3RepositoryDetails{
                                BucketName: sdk.String("doloribus"),
                                CodeArtifacts: &shared.CodeArtifacts{
                                    BuildArtifactsObjectKey: sdk.String("sapiente"),
                                    SourceCodeArtifactsObjectKey: "architecto",
                                },
                            },
                            Name: "Mike Nicolas",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCodeReviewResponse != nil {
        // handle response
    }
}
```

## DescribeCodeReview

Returns the metadata associated with the code review along with its status.

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
    res, err := s.SDK.DescribeCodeReview(ctx, operations.DescribeCodeReviewRequest{
        CodeReviewArn: "error",
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCodeReviewResponse != nil {
        // handle response
    }
}
```

## DescribeRecommendationFeedback

Describes the customer feedback for a CodeGuru Reviewer recommendation.

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
    res, err := s.SDK.DescribeRecommendationFeedback(ctx, operations.DescribeRecommendationFeedbackRequest{
        CodeReviewArn: "quo",
        RecommendationID: "sequi",
        UserID: sdk.String("tenetur"),
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

    if res.DescribeRecommendationFeedbackResponse != nil {
        // handle response
    }
}
```

## DescribeRepositoryAssociation

Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.

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
    res, err := s.SDK.DescribeRepositoryAssociation(ctx, operations.DescribeRepositoryAssociationRequest{
        AssociationArn: "laborum",
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRepositoryAssociationResponse != nil {
        // handle response
    }
}
```

## DisassociateRepository

Removes the association between Amazon CodeGuru Reviewer and a repository.

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
    res, err := s.SDK.DisassociateRepository(ctx, operations.DisassociateRepositoryRequest{
        AssociationArn: "ipsa",
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateRepositoryResponse != nil {
        // handle response
    }
}
```

## ListCodeReviews

Lists all the code reviews that the customer has created in the past 90 days.

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
    res, err := s.SDK.ListCodeReviews(ctx, operations.ListCodeReviewsRequest{
        MaxResults: sdk.Int64(979587),
        NextToken: sdk.String("dicta"),
        ProviderTypes: []shared.ProviderTypeEnum{
            shared.ProviderTypeEnumGitHub,
            shared.ProviderTypeEnumBitbucket,
        },
        RepositoryNames: []string{
            "harum",
        },
        States: []shared.JobStateEnum{
            shared.JobStateEnumDeleting,
            shared.JobStateEnumPending,
        },
        Type: operations.ListCodeReviewsTypeEnumRepositoryAnalysis,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCodeReviewsResponse != nil {
        // handle response
    }
}
```

## ListRecommendationFeedback

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.

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
    res, err := s.SDK.ListRecommendationFeedback(ctx, operations.ListRecommendationFeedbackRequest{
        CodeReviewArn: "praesentium",
        MaxResults: sdk.Int64(523248),
        NextToken: sdk.String("voluptates"),
        RecommendationIds: []string{
            "repudiandae",
        },
        UserIds: []string{
            "veritatis",
            "itaque",
            "incidunt",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendationFeedbackResponse != nil {
        // handle response
    }
}
```

## ListRecommendations

Returns the list of all recommendations for a completed code review.

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
    res, err := s.SDK.ListRecommendations(ctx, operations.ListRecommendationsRequest{
        CodeReviewArn: "quibusdam",
        MaxResults: sdk.Int64(289406),
        NextToken: sdk.String("modi"),
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecommendationsResponse != nil {
        // handle response
    }
}
```

## ListRepositoryAssociations

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.

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
    res, err := s.SDK.ListRepositoryAssociations(ctx, operations.ListRepositoryAssociationsRequest{
        MaxResults: sdk.Int64(369808),
        Name: []string{
            "fugit",
        },
        NextToken: sdk.String("dolorum"),
        Owner: []string{
            "tempora",
            "facilis",
            "tempore",
        },
        ProviderType: []shared.ProviderTypeEnum{
            shared.ProviderTypeEnumS3Bucket,
            shared.ProviderTypeEnumBitbucket,
        },
        State: []shared.RepositoryAssociationStateEnum{
            shared.RepositoryAssociationStateEnumDisassociating,
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositoryAssociationsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns the list of tags associated with an associated repository resource.

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
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        ResourceArn: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutRecommendationFeedback

Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.

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
    res, err := s.SDK.PutRecommendationFeedback(ctx, operations.PutRecommendationFeedbackRequest{
        RequestBody: operations.PutRecommendationFeedbackRequestBody{
            CodeReviewArn: "dicta",
            Reactions: []shared.ReactionEnum{
                shared.ReactionEnumThumbsDown,
                shared.ReactionEnumThumbsDown,
            },
            RecommendationID: "ea",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRecommendationFeedbackResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tags to an associated repository.

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
                "quidem": "provident",
                "nam": "id",
                "blanditiis": "deleniti",
                "sapiente": "amet",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ResourceArn: "nihil",
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

Removes a tag from an associated repository.

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
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
        ResourceArn: "nobis",
        TagKeys: []string{
            "vero",
            "aspernatur",
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
