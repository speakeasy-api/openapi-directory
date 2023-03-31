# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/codeguru-reviewer/2019-09-19/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateRepositoryRequest(
    request_body=operations.AssociateRepositoryRequestBody(
        client_request_token="corrupti",
        kms_key_details=operations.AssociateRepositoryRequestBodyKMSKeyDetails(
            encryption_option="CUSTOMER_MANAGED_CMK",
            kms_key_id="distinctio",
        ),
        repository=operations.AssociateRepositoryRequestBodyRepository(
            bitbucket=shared.ThirdPartySourceRepository(
                connection_arn="quibusdam",
                name="unde",
                owner="nulla",
            ),
            code_commit=shared.CodeCommitRepository(
                name="corrupti",
            ),
            git_hub_enterprise_server=shared.ThirdPartySourceRepository(
                connection_arn="illum",
                name="vel",
                owner="error",
            ),
            s3_bucket=shared.S3Repository(
                bucket_name="deserunt",
                name="suscipit",
            ),
        ),
        tags={
            "magnam": "debitis",
            "ipsa": "delectus",
        },
    ),
    x_amz_algorithm="tempora",
    x_amz_content_sha256="suscipit",
    x_amz_credential="molestiae",
    x_amz_date="minus",
    x_amz_security_token="placeat",
    x_amz_signature="voluptatum",
    x_amz_signed_headers="iusto",
)
    
res = s.associate_repository(req)

if res.associate_repository_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_repository` - <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* `create_code_review` - Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
* `describe_code_review` - Returns the metadata associated with the code review along with its status.
* `describe_recommendation_feedback` - Describes the customer feedback for a CodeGuru Reviewer recommendation.
* `describe_repository_association` - Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
* `disassociate_repository` - Removes the association between Amazon CodeGuru Reviewer and a repository.
* `list_code_reviews` - Lists all the code reviews that the customer has created in the past 90 days.
* `list_recommendation_feedback` - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
* `list_recommendations` - Returns the list of all recommendations for a completed code review.
* `list_repository_associations` - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
* `list_tags_for_resource` - Returns the list of tags associated with an associated repository resource.
* `put_recommendation_feedback` - Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
* `tag_resource` - Adds one or more tags to an associated repository.
* `untag_resource` - Removes a tag from an associated repository.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
