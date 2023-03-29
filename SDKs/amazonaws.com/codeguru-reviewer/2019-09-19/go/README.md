# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codeguru-reviewer/2019-09-19/go
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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateRepositoryRequest{
        Headers: operations.AssociateRepositoryHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "nulla",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKMSKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KMSKeyID: "fuga",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "facilis",
                    Name: "eum",
                    Owner: "iusto",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "ullam",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "saepe",
                    Name: "inventore",
                    Owner: "sapiente",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "enim",
                    Name: "eum",
                },
            },
            Tags: map[string]string{
                "autem": "vel",
                "non": "deleniti",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AssociateRepository(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRepositoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateRepository` - <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* `CreateCodeReview` - Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
* `DescribeCodeReview` - Returns the metadata associated with the code review along with its status.
* `DescribeRecommendationFeedback` - Describes the customer feedback for a CodeGuru Reviewer recommendation.
* `DescribeRepositoryAssociation` - Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
* `DisassociateRepository` - Removes the association between Amazon CodeGuru Reviewer and a repository.
* `ListCodeReviews` - Lists all the code reviews that the customer has created in the past 90 days.
* `ListRecommendationFeedback` - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
* `ListRecommendations` - Returns the list of all recommendations for a completed code review.
* `ListRepositoryAssociations` - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
* `ListTagsForResource` - Returns the list of tags associated with an associated repository resource.
* `PutRecommendationFeedback` - Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
* `TagResource` - Adds one or more tags to an associated repository.
* `UntagResource` - Removes a tag from an associated repository.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
