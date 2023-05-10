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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequestBodyKMSKeyDetails;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRepositoryRequestBodyRepository;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartySourceRepository;
use \OpenAPI\OpenAPI\Models\Shared\CodeCommitRepository;
use \OpenAPI\OpenAPI\Models\Shared\S3Repository;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateRepositoryRequest();
    $request->requestBody = new AssociateRepositoryRequestBody();
    $request->requestBody->clientRequestToken = 'at';
    $request->requestBody->kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails();
    $request->requestBody->kmsKeyDetails->encryptionOption = EncryptionOptionEnum::CUSTOMER_MANAGED_CMK;
    $request->requestBody->kmsKeyDetails->kmsKeyId = 'maiores';
    $request->requestBody->repository = new AssociateRepositoryRequestBodyRepository();
    $request->requestBody->repository->bitbucket = new ThirdPartySourceRepository();
    $request->requestBody->repository->bitbucket->connectionArn = 'molestiae';
    $request->requestBody->repository->bitbucket->name = 'Forrest Koepp';
    $request->requestBody->repository->bitbucket->owner = 'dolorum';
    $request->requestBody->repository->codeCommit = new CodeCommitRepository();
    $request->requestBody->repository->codeCommit->name = 'Antoinette Nikolaus';
    $request->requestBody->repository->gitHubEnterpriseServer = new ThirdPartySourceRepository();
    $request->requestBody->repository->gitHubEnterpriseServer->connectionArn = 'deleniti';
    $request->requestBody->repository->gitHubEnterpriseServer->name = 'Ms. Earnest Lebsack';
    $request->requestBody->repository->gitHubEnterpriseServer->owner = 'modi';
    $request->requestBody->repository->s3Bucket = new S3Repository();
    $request->requestBody->repository->s3Bucket->bucketName = 'qui';
    $request->requestBody->repository->s3Bucket->name = 'Jonathon Klocko';
    $request->requestBody->tags = [
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->associateRepository($request);

    if ($response->associateRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCodeReview

Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeReviewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeReviewRequestBodyType;
use \OpenAPI\OpenAPI\Models\Shared\AnalysisTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryAnalysis;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryHeadSourceCodeType;
use \OpenAPI\OpenAPI\Models\Shared\SourceCodeType;
use \OpenAPI\OpenAPI\Models\Shared\BranchDiffSourceCodeType;
use \OpenAPI\OpenAPI\Models\Shared\CommitDiffSourceCodeType;
use \OpenAPI\OpenAPI\Models\Shared\RequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\EventInfo;
use \OpenAPI\OpenAPI\Models\Shared\VendorNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketRepository;
use \OpenAPI\OpenAPI\Models\Shared\S3RepositoryDetails;
use \OpenAPI\OpenAPI\Models\Shared\CodeArtifacts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCodeReviewRequest();
    $request->requestBody = new CreateCodeReviewRequestBody();
    $request->requestBody->clientRequestToken = 'saepe';
    $request->requestBody->name = 'Harvey Hessel';
    $request->requestBody->repositoryAssociationArn = 'saepe';
    $request->requestBody->type = new CreateCodeReviewRequestBodyType();
    $request->requestBody->type->analysisTypes = [
        AnalysisTypeEnum::SECURITY,
        AnalysisTypeEnum::SECURITY,
        AnalysisTypeEnum::CODE_QUALITY,
    ];
    $request->requestBody->type->repositoryAnalysis = new RepositoryAnalysis();
    $request->requestBody->type->repositoryAnalysis->repositoryHead = new RepositoryHeadSourceCodeType();
    $request->requestBody->type->repositoryAnalysis->repositoryHead->branchName = 'est';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType = new SourceCodeType();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->branchDiff = new BranchDiffSourceCodeType();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->branchDiff->destinationBranchName = 'mollitia';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->branchDiff->sourceBranchName = 'laborum';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->commitDiff = new CommitDiffSourceCodeType();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->commitDiff->destinationCommit = 'dolores';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->commitDiff->mergeBaseCommit = 'dolorem';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->commitDiff->sourceCommit = 'corporis';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->repositoryHead = new RepositoryHeadSourceCodeType();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->repositoryHead->branchName = 'explicabo';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata = new RequestMetadata();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata->eventInfo = new EventInfo();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata->eventInfo->name = 'Ronnie Mohr';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata->eventInfo->state = 'excepturi';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata->requestId = 'accusantium';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata->requester = 'iure';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->requestMetadata->vendorName = VendorNameEnum::GIT_LAB;
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository = new S3BucketRepository();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository->details = new S3RepositoryDetails();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository->details->bucketName = 'doloribus';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository->details->codeArtifacts = new CodeArtifacts();
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository->details->codeArtifacts->buildArtifactsObjectKey = 'sapiente';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository->details->codeArtifacts->sourceCodeArtifactsObjectKey = 'architecto';
    $request->requestBody->type->repositoryAnalysis->sourceCodeType->s3BucketRepository->name = 'Mike Nicolas';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->createCodeReview($request);

    if ($response->createCodeReviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCodeReview

Returns the metadata associated with the code review along with its status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCodeReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCodeReviewRequest();
    $request->codeReviewArn = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->describeCodeReview($request);

    if ($response->describeCodeReviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRecommendationFeedback

Describes the customer feedback for a CodeGuru Reviewer recommendation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRecommendationFeedbackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRecommendationFeedbackRequest();
    $request->codeReviewArn = 'quo';
    $request->recommendationId = 'sequi';
    $request->userId = 'tenetur';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->describeRecommendationFeedback($request);

    if ($response->describeRecommendationFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRepositoryAssociation

Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRepositoryAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRepositoryAssociationRequest();
    $request->associationArn = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->describeRepositoryAssociation($request);

    if ($response->describeRepositoryAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateRepository

Removes the association between Amazon CodeGuru Reviewer and a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateRepositoryRequest();
    $request->associationArn = 'ipsa';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->disassociateRepository($request);

    if ($response->disassociateRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCodeReviews

Lists all the code reviews that the customer has created in the past 90 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCodeReviewsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCodeReviewsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCodeReviewsRequest();
    $request->maxResults = 979587;
    $request->nextToken = 'dicta';
    $request->providerTypes = [
        ProviderTypeEnum::GIT_HUB,
        ProviderTypeEnum::BITBUCKET,
    ];
    $request->repositoryNames = [
        'harum',
    ];
    $request->states = [
        JobStateEnum::DELETING,
        JobStateEnum::PENDING,
    ];
    $request->type = ListCodeReviewsTypeEnum::REPOSITORY_ANALYSIS;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->listCodeReviews($request);

    if ($response->listCodeReviewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendationFeedback

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationFeedbackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendationFeedbackRequest();
    $request->codeReviewArn = 'praesentium';
    $request->maxResults = 523248;
    $request->nextToken = 'voluptates';
    $request->recommendationIds = [
        'repudiandae',
    ];
    $request->userIds = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->listRecommendationFeedback($request);

    if ($response->listRecommendationFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendations

Returns the list of all recommendations for a completed code review.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendationsRequest();
    $request->codeReviewArn = 'quibusdam';
    $request->maxResults = 289406;
    $request->nextToken = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->listRecommendations($request);

    if ($response->listRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRepositoryAssociations

Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRepositoryAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryAssociationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRepositoryAssociationsRequest();
    $request->maxResults = 369808;
    $request->name = [
        'fugit',
    ];
    $request->nextToken = 'dolorum';
    $request->owner = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->providerType = [
        ProviderTypeEnum::S3_BUCKET,
        ProviderTypeEnum::BITBUCKET,
    ];
    $request->state = [
        RepositoryAssociationStateEnum::DISASSOCIATING,
    ];
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->listRepositoryAssociations($request);

    if ($response->listRepositoryAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns the list of tags associated with an associated repository resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'maiores';
    $request->resourceArn = 'rerum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRecommendationFeedback

Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRecommendationFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRecommendationFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ReactionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRecommendationFeedbackRequest();
    $request->requestBody = new PutRecommendationFeedbackRequestBody();
    $request->requestBody->codeReviewArn = 'dicta';
    $request->requestBody->reactions = [
        ReactionEnum::THUMBS_DOWN,
        ReactionEnum::THUMBS_DOWN,
    ];
    $request->requestBody->recommendationId = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->putRecommendationFeedback($request);

    if ($response->putRecommendationFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to an associated repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'quidem' => 'provident',
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->resourceArn = 'nihil';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from an associated repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->resourceArn = 'nobis';
    $request->tagKeys = [
        'vero',
        'aspernatur',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
