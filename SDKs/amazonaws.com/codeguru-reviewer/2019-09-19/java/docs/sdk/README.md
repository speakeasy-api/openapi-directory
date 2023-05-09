# SDK

## Overview

<p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java and Python code.</p> <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the <i> <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i> </p> <p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codeguru-reviewer/>
### Available Operations

* [associateRepository](#associaterepository) - <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* [createCodeReview](#createcodereview) - Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
* [describeCodeReview](#describecodereview) - Returns the metadata associated with the code review along with its status.
* [describeRecommendationFeedback](#describerecommendationfeedback) - Describes the customer feedback for a CodeGuru Reviewer recommendation.
* [describeRepositoryAssociation](#describerepositoryassociation) - Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
* [disassociateRepository](#disassociaterepository) - Removes the association between Amazon CodeGuru Reviewer and a repository.
* [listCodeReviews](#listcodereviews) - Lists all the code reviews that the customer has created in the past 90 days.
* [listRecommendationFeedback](#listrecommendationfeedback) - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
* [listRecommendations](#listrecommendations) - Returns the list of all recommendations for a completed code review.
* [listRepositoryAssociations](#listrepositoryassociations) - Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
* [listTagsForResource](#listtagsforresource) - Returns the list of tags associated with an associated repository resource.
* [putRecommendationFeedback](#putrecommendationfeedback) - Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
* [tagResource](#tagresource) - Adds one or more tags to an associated repository.
* [untagResource](#untagresource) - Removes a tag from an associated repository.

## associateRepository

<p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>

### Example Usage

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
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRepositoryRequest req = new AssociateRepositoryRequest(                new AssociateRepositoryRequestBody(                new AssociateRepositoryRequestBodyRepository() {{
                                                bitbucket = new ThirdPartySourceRepository("recusandae", "temporibus", "ab");;
                                                codeCommit = new CodeCommitRepository("quis");;
                                                gitHubEnterpriseServer = new ThirdPartySourceRepository("veritatis", "deserunt", "perferendis");;
                                                s3Bucket = new S3Repository("ipsam", "repellendus");;
                                            }};) {{
                                clientRequestToken = "sapiente";
                                kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails() {{
                                    encryptionOption = EncryptionOptionEnum.CUSTOMER_MANAGED_CMK;
                                    kmsKeyId = "odit";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                    put("totam", "porro");
                                }};
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            AssociateRepositoryResponse res = sdk.sdk.associateRepository(req);

            if (res.associateRepositoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCodeReview

Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCodeReviewRequest;
import org.openapis.openapi.models.operations.CreateCodeReviewRequestBody;
import org.openapis.openapi.models.operations.CreateCodeReviewRequestBodyType;
import org.openapis.openapi.models.operations.CreateCodeReviewResponse;
import org.openapis.openapi.models.shared.AnalysisTypeEnum;
import org.openapis.openapi.models.shared.BranchDiffSourceCodeType;
import org.openapis.openapi.models.shared.CodeArtifacts;
import org.openapis.openapi.models.shared.CommitDiffSourceCodeType;
import org.openapis.openapi.models.shared.EventInfo;
import org.openapis.openapi.models.shared.RepositoryAnalysis;
import org.openapis.openapi.models.shared.RepositoryHeadSourceCodeType;
import org.openapis.openapi.models.shared.RequestMetadata;
import org.openapis.openapi.models.shared.S3BucketRepository;
import org.openapis.openapi.models.shared.S3RepositoryDetails;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceCodeType;
import org.openapis.openapi.models.shared.VendorNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCodeReviewRequest req = new CreateCodeReviewRequest(                new CreateCodeReviewRequestBody("optio", "totam",                 new CreateCodeReviewRequestBodyType() {{
                                                analysisTypes = new org.openapis.openapi.models.shared.AnalysisTypeEnum[]{{
                                                    add(AnalysisTypeEnum.SECURITY),
                                                }};
                                                repositoryAnalysis = new RepositoryAnalysis() {{
                                                    repositoryHead = new RepositoryHeadSourceCodeType("molestiae");;
                                                    sourceCodeType = new SourceCodeType() {{
                                                        branchDiff = new BranchDiffSourceCodeType("modi", "qui");;
                                                        commitDiff = new CommitDiffSourceCodeType() {{
                                                            destinationCommit = "impedit";
                                                            mergeBaseCommit = "cum";
                                                            sourceCommit = "esse";
                                                        }};;
                                                        repositoryHead = new RepositoryHeadSourceCodeType("ipsum");;
                                                        requestMetadata = new RequestMetadata() {{
                                                            eventInfo = new EventInfo() {{
                                                                name = "Brandon Auer";
                                                                state = "sed";
                                                            }};;
                                                            requestId = "iste";
                                                            requester = "dolor";
                                                            vendorName = VendorNameEnum.GIT_LAB;
                                                        }};;
                                                        s3BucketRepository = new S3BucketRepository("laboriosam") {{
                                                            details = new S3RepositoryDetails() {{
                                                                bucketName = "hic";
                                                                codeArtifacts = new CodeArtifacts("saepe") {{
                                                                    buildArtifactsObjectKey = "fuga";
                                                                }};;
                                                            }};;
                                                        }};;
                                                    }};;
                                                }};;
                                            }};) {{
                                clientRequestToken = "in";
                            }};) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateCodeReviewResponse res = sdk.sdk.createCodeReview(req);

            if (res.createCodeReviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCodeReview

Returns the metadata associated with the code review along with its status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCodeReviewRequest;
import org.openapis.openapi.models.operations.DescribeCodeReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCodeReviewRequest req = new DescribeCodeReviewRequest("est") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeCodeReviewResponse res = sdk.sdk.describeCodeReview(req);

            if (res.describeCodeReviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRecommendationFeedback

Describes the customer feedback for a CodeGuru Reviewer recommendation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRecommendationFeedbackRequest;
import org.openapis.openapi.models.operations.DescribeRecommendationFeedbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRecommendationFeedbackRequest req = new DescribeRecommendationFeedbackRequest("omnis", "nemo") {{
                userId = "minima";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "iure";
                xAmzDate = "culpa";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeRecommendationFeedbackResponse res = sdk.sdk.describeRecommendationFeedback(req);

            if (res.describeRecommendationFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRepositoryAssociation

Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRepositoryAssociationRequest;
import org.openapis.openapi.models.operations.DescribeRepositoryAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRepositoryAssociationRequest req = new DescribeRepositoryAssociationRequest("dolorem") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            DescribeRepositoryAssociationResponse res = sdk.sdk.describeRepositoryAssociation(req);

            if (res.describeRepositoryAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateRepository

Removes the association between Amazon CodeGuru Reviewer and a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateRepositoryRequest;
import org.openapis.openapi.models.operations.DisassociateRepositoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateRepositoryRequest req = new DisassociateRepositoryRequest("molestiae") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            DisassociateRepositoryResponse res = sdk.sdk.disassociateRepository(req);

            if (res.disassociateRepositoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCodeReviews

Lists all the code reviews that the customer has created in the past 90 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCodeReviewsRequest;
import org.openapis.openapi.models.operations.ListCodeReviewsResponse;
import org.openapis.openapi.models.operations.ListCodeReviewsTypeEnum;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCodeReviewsRequest req = new ListCodeReviewsRequest(ListCodeReviewsTypeEnum.PULL_REQUEST) {{
                maxResults = 778346L;
                nextToken = "sequi";
                providerTypes = new org.openapis.openapi.models.shared.ProviderTypeEnum[]{{
                    add(ProviderTypeEnum.GIT_HUB),
                    add(ProviderTypeEnum.GIT_HUB_ENTERPRISE_SERVER),
                    add(ProviderTypeEnum.S3_BUCKET),
                    add(ProviderTypeEnum.CODE_COMMIT),
                }};
                repositoryNames = new String[]{{
                    add("error"),
                }};
                states = new org.openapis.openapi.models.shared.JobStateEnum[]{{
                    add(JobStateEnum.FAILED),
                    add(JobStateEnum.COMPLETED),
                    add(JobStateEnum.DELETING),
                    add(JobStateEnum.DELETING),
                }};
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListCodeReviewsResponse res = sdk.sdk.listCodeReviews(req);

            if (res.listCodeReviewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommendationFeedback

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendationFeedbackRequest;
import org.openapis.openapi.models.operations.ListRecommendationFeedbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecommendationFeedbackRequest req = new ListRecommendationFeedbackRequest("perferendis") {{
                maxResults = 39187L;
                nextToken = "reprehenderit";
                recommendationIds = new String[]{{
                    add("maiores"),
                    add("dicta"),
                }};
                userIds = new String[]{{
                    add("dolore"),
                    add("iusto"),
                }};
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            ListRecommendationFeedbackResponse res = sdk.sdk.listRecommendationFeedback(req);

            if (res.listRecommendationFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommendations

Returns the list of all recommendations for a completed code review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendationsRequest;
import org.openapis.openapi.models.operations.ListRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecommendationsRequest req = new ListRecommendationsRequest("quidem") {{
                maxResults = 565189L;
                nextToken = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ListRecommendationsResponse res = sdk.sdk.listRecommendations(req);

            if (res.listRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRepositoryAssociations

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRepositoryAssociationsRequest;
import org.openapis.openapi.models.operations.ListRepositoryAssociationsResponse;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
import org.openapis.openapi.models.shared.RepositoryAssociationStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRepositoryAssociationsRequest req = new ListRepositoryAssociationsRequest() {{
                maxResults = 83112L;
                name = new String[]{{
                    add("incidunt"),
                    add("enim"),
                    add("consequatur"),
                    add("est"),
                }};
                nextToken = "quibusdam";
                owner = new String[]{{
                    add("deserunt"),
                }};
                providerType = new org.openapis.openapi.models.shared.ProviderTypeEnum[]{{
                    add(ProviderTypeEnum.S3_BUCKET),
                    add(ProviderTypeEnum.GIT_HUB),
                    add(ProviderTypeEnum.GIT_HUB),
                }};
                state = new org.openapis.openapi.models.shared.RepositoryAssociationStateEnum[]{{
                    add(RepositoryAssociationStateEnum.ASSOCIATING),
                }};
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            ListRepositoryAssociationsResponse res = sdk.sdk.listRepositoryAssociations(req);

            if (res.listRepositoryAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns the list of tags associated with an associated repository resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("dolorum") {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRecommendationFeedback

Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRecommendationFeedbackRequest;
import org.openapis.openapi.models.operations.PutRecommendationFeedbackRequestBody;
import org.openapis.openapi.models.operations.PutRecommendationFeedbackResponse;
import org.openapis.openapi.models.shared.ReactionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRecommendationFeedbackRequest req = new PutRecommendationFeedbackRequest(                new PutRecommendationFeedbackRequestBody("eligendi",                 new org.openapis.openapi.models.shared.ReactionEnum[]{{
                                                add(ReactionEnum.THUMBS_UP),
                                                add(ReactionEnum.THUMBS_DOWN),
                                                add(ReactionEnum.THUMBS_DOWN),
                                            }}, "sint");) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            PutRecommendationFeedbackResponse res = sdk.sdk.putRecommendationFeedback(req);

            if (res.putRecommendationFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to an associated repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("rerum", "dicta");
                                                put("magnam", "cumque");
                                                put("facere", "ea");
                                                put("aliquid", "laborum");
                                            }});, "accusamus") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from an associated repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("id",                 new String[]{{
                                add("deleniti"),
                                add("sapiente"),
                                add("amet"),
                            }}) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
