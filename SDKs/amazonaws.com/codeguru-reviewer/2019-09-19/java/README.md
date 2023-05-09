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
import org.openapis.openapi.models.operations.AssociateRepositoryRequest;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBody;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBodyKMSKeyDetails;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBodyRepository;
import org.openapis.openapi.models.operations.AssociateRepositoryResponse;
import org.openapis.openapi.models.shared.CodeCommitRepository;
import org.openapis.openapi.models.shared.EncryptionOptionEnum;
import org.openapis.openapi.models.shared.S3Repository;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartySourceRepository;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRepositoryRequest req = new AssociateRepositoryRequest(                new AssociateRepositoryRequestBody(                new AssociateRepositoryRequestBodyRepository() {{
                                                bitbucket = new ThirdPartySourceRepository("provident", "distinctio", "quibusdam");;
                                                codeCommit = new CodeCommitRepository("unde");;
                                                gitHubEnterpriseServer = new ThirdPartySourceRepository("nulla", "corrupti", "illum");;
                                                s3Bucket = new S3Repository("vel", "error");;
                                            }};) {{
                                clientRequestToken = "deserunt";
                                kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails() {{
                                    encryptionOption = EncryptionOptionEnum.AWS_OWNED_CMK;
                                    kmsKeyId = "iure";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }};
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            AssociateRepositoryResponse res = sdk.associateRepository(req);

            if (res.associateRepositoryResponse != null) {
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

* [associateRepository](docs/sdk/README.md#associaterepository) - <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* [createCodeReview](docs/sdk/README.md#createcodereview) - Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
* [describeCodeReview](docs/sdk/README.md#describecodereview) - Returns the metadata associated with the code review along with its status.
* [describeRecommendationFeedback](docs/sdk/README.md#describerecommendationfeedback) - Describes the customer feedback for a CodeGuru Reviewer recommendation.
* [describeRepositoryAssociation](docs/sdk/README.md#describerepositoryassociation) - Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
* [disassociateRepository](docs/sdk/README.md#disassociaterepository) - Removes the association between Amazon CodeGuru Reviewer and a repository.
* [listCodeReviews](docs/sdk/README.md#listcodereviews) - Lists all the code reviews that the customer has created in the past 90 days.
* [listRecommendationFeedback](docs/sdk/README.md#listrecommendationfeedback) - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
* [listRecommendations](docs/sdk/README.md#listrecommendations) - Returns the list of all recommendations for a completed code review.
* [listRepositoryAssociations](docs/sdk/README.md#listrepositoryassociations) - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns the list of tags associated with an associated repository resource.
* [putRecommendationFeedback](docs/sdk/README.md#putrecommendationfeedback) - Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to an associated repository.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag from an associated repository.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
