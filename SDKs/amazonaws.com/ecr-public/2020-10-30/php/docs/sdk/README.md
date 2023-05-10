# SDK

## Overview

<fullname>Amazon Elastic Container Registry Public</fullname> <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the Docker CLI or your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ecr-public/>
### Available Operations

* [batchCheckLayerAvailability](#batchchecklayeravailability) - <p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [batchDeleteImage](#batchdeleteimage) - <p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>
* [completeLayerUpload](#completelayerupload) - <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [createRepository](#createrepository) - Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [deleteRepository](#deleterepository) - Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.
* [deleteRepositoryPolicy](#deleterepositorypolicy) - Deletes the repository policy that's associated with the specified repository.
* [describeImageTags](#describeimagetags) - Returns the image tag details for a repository in a public registry.
* [describeImages](#describeimages) - <p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>
* [describeRegistries](#describeregistries) - Returns details for a public registry.
* [describeRepositories](#describerepositories) - Describes repositories that are in a public registry.
* [getAuthorizationToken](#getauthorizationtoken) - Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
* [getRegistryCatalogData](#getregistrycatalogdata) - Retrieves catalog metadata for a public registry.
* [getRepositoryCatalogData](#getrepositorycatalogdata) - Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
* [getRepositoryPolicy](#getrepositorypolicy) - Retrieves the repository policy for the specified repository.
* [initiateLayerUpload](#initiatelayerupload) - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [listTagsForResource](#listtagsforresource) - List the tags for an Amazon ECR Public resource.
* [putImage](#putimage) - <p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [putRegistryCatalogData](#putregistrycatalogdata) - Create or update the catalog data for a public registry.
* [putRepositoryCatalogData](#putrepositorycatalogdata) - Creates or updates the catalog data for a repository in a public registry.
* [setRepositoryPolicy](#setrepositorypolicy) - Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](#untagresource) - Deletes specified tags from a resource.
* [uploadLayerPart](#uploadlayerpart) - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

## batchCheckLayerAvailability

<p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCheckLayerAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchCheckLayerAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCheckLayerAvailabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCheckLayerAvailabilityRequest();
    $request->batchCheckLayerAvailabilityRequest = new BatchCheckLayerAvailabilityRequest();
    $request->batchCheckLayerAvailabilityRequest->layerDigests = [
        'debitis',
        'ipsa',
    ];
    $request->batchCheckLayerAvailabilityRequest->registryId = 'delectus';
    $request->batchCheckLayerAvailabilityRequest->repositoryName = 'tempora';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = BatchCheckLayerAvailabilityXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_BATCH_CHECK_LAYER_AVAILABILITY;

    $response = $sdk->sdk->batchCheckLayerAvailability($request);

    if ($response->batchCheckLayerAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteImage

<p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteImageRequest();
    $request->batchDeleteImageRequest = new BatchDeleteImageRequest();
    $request->batchDeleteImageRequest->imageIds = [
        new ImageIdentifier(),
        new ImageIdentifier(),
    ];
    $request->batchDeleteImageRequest->registryId = 'recusandae';
    $request->batchDeleteImageRequest->repositoryName = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = BatchDeleteImageXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_BATCH_DELETE_IMAGE;

    $response = $sdk->sdk->batchDeleteImage($request);

    if ($response->batchDeleteImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## completeLayerUpload

<p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompleteLayerUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompleteLayerUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompleteLayerUploadXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteLayerUploadRequest();
    $request->completeLayerUploadRequest = new CompleteLayerUploadRequest();
    $request->completeLayerUploadRequest->layerDigests = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->completeLayerUploadRequest->registryId = 'maiores';
    $request->completeLayerUploadRequest->repositoryName = 'molestiae';
    $request->completeLayerUploadRequest->uploadId = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = CompleteLayerUploadXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_COMPLETE_LAYER_UPLOAD;

    $response = $sdk->sdk->completeLayerUpload($request);

    if ($response->completeLayerUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepository

Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryCatalogDataInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryRequest();
    $request->createRepositoryRequest = new CreateRepositoryRequest();
    $request->createRepositoryRequest->catalogData = new RepositoryCatalogDataInput();
    $request->createRepositoryRequest->catalogData->aboutText = 'officia';
    $request->createRepositoryRequest->catalogData->architectures = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->createRepositoryRequest->catalogData->description = 'optio';
    $request->createRepositoryRequest->catalogData->logoImageBlob = 'totam';
    $request->createRepositoryRequest->catalogData->operatingSystems = [
        'commodi',
    ];
    $request->createRepositoryRequest->catalogData->usageText = 'molestiae';
    $request->createRepositoryRequest->repositoryName = 'modi';
    $request->createRepositoryRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateRepositoryXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_CREATE_REPOSITORY;

    $response = $sdk->sdk->createRepository($request);

    if ($response->createRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepository

Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryRequest();
    $request->deleteRepositoryRequest = new DeleteRepositoryRequest();
    $request->deleteRepositoryRequest->force = false;
    $request->deleteRepositoryRequest->registryId = 'ad';
    $request->deleteRepositoryRequest->repositoryName = 'natus';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DeleteRepositoryXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_DELETE_REPOSITORY;

    $response = $sdk->sdk->deleteRepository($request);

    if ($response->deleteRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPolicy

Deletes the repository policy that's associated with the specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoryPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryPolicyRequest();
    $request->deleteRepositoryPolicyRequest = new DeleteRepositoryPolicyRequest();
    $request->deleteRepositoryPolicyRequest->registryId = 'fuga';
    $request->deleteRepositoryPolicyRequest->repositoryName = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteRepositoryPolicyXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_DELETE_REPOSITORY_POLICY;

    $response = $sdk->sdk->deleteRepositoryPolicy($request);

    if ($response->deleteRepositoryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImageTags

Returns the image tag details for a repository in a public registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImageTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageTagsRequest();
    $request->describeImageTagsRequest = new DescribeImageTagsRequest();
    $request->describeImageTagsRequest->maxResults = 969810;
    $request->describeImageTagsRequest->nextToken = 'est';
    $request->describeImageTagsRequest->registryId = 'mollitia';
    $request->describeImageTagsRequest->repositoryName = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeImageTagsXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_DESCRIBE_IMAGE_TAGS;
    $request->maxResults = 'nemo';
    $request->nextToken = 'minima';

    $response = $sdk->sdk->describeImageTags($request);

    if ($response->describeImageTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImages

<p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImagesRequest();
    $request->describeImagesRequest = new DescribeImagesRequest();
    $request->describeImagesRequest->imageIds = [
        new ImageIdentifier(),
        new ImageIdentifier(),
        new ImageIdentifier(),
    ];
    $request->describeImagesRequest->maxResults = 38425;
    $request->describeImagesRequest->nextToken = 'iure';
    $request->describeImagesRequest->registryId = 'culpa';
    $request->describeImagesRequest->repositoryName = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = DescribeImagesXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_DESCRIBE_IMAGES;
    $request->maxResults = 'mollitia';
    $request->nextToken = 'occaecati';

    $response = $sdk->sdk->describeImages($request);

    if ($response->describeImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRegistries

Returns details for a public registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRegistriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRegistriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRegistriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRegistriesRequest();
    $request->describeRegistriesRequest = new DescribeRegistriesRequest();
    $request->describeRegistriesRequest->maxResults = 253291;
    $request->describeRegistriesRequest->nextToken = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = DescribeRegistriesXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_DESCRIBE_REGISTRIES;
    $request->maxResults = 'laborum';
    $request->nextToken = 'animi';

    $response = $sdk->sdk->describeRegistries($request);

    if ($response->describeRegistriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRepositories

Describes repositories that are in a public registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRepositoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRepositoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRepositoriesRequest();
    $request->describeRepositoriesRequest = new DescribeRepositoriesRequest();
    $request->describeRepositoriesRequest->maxResults = 317202;
    $request->describeRepositoriesRequest->nextToken = 'odit';
    $request->describeRepositoriesRequest->registryId = 'quo';
    $request->describeRepositoriesRequest->repositoryNames = [
        'tenetur',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = DescribeRepositoriesXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_DESCRIBE_REPOSITORIES;
    $request->maxResults = 'laborum';
    $request->nextToken = 'quasi';

    $response = $sdk->sdk->describeRepositories($request);

    if ($response->describeRepositoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizationToken

Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizationTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizationTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthorizationTokenRequest();
    $request->requestBody = [
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetAuthorizationTokenXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_GET_AUTHORIZATION_TOKEN;

    $response = $sdk->sdk->getAuthorizationToken($request);

    if ($response->getAuthorizationTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistryCatalogData

Retrieves catalog metadata for a public registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryCatalogDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistryCatalogDataRequest();
    $request->requestBody = [
        'dolore' => 'iusto',
        'dicta' => 'harum',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = GetRegistryCatalogDataXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_GET_REGISTRY_CATALOG_DATA;

    $response = $sdk->sdk->getRegistryCatalogData($request);

    if ($response->getRegistryCatalogDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryCatalogData

Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRepositoryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryCatalogDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryCatalogDataRequest();
    $request->getRepositoryCatalogDataRequest = new GetRepositoryCatalogDataRequest();
    $request->getRepositoryCatalogDataRequest->registryId = 'molestias';
    $request->getRepositoryCatalogDataRequest->repositoryName = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = GetRepositoryCatalogDataXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_CATALOG_DATA;

    $response = $sdk->sdk->getRepositoryCatalogData($request);

    if ($response->getRepositoryCatalogDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoryPolicy

Retrieves the repository policy for the specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRepositoryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoryPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoryPolicyRequest();
    $request->getRepositoryPolicyRequest = new GetRepositoryPolicyRequest();
    $request->getRepositoryPolicyRequest->registryId = 'sint';
    $request->getRepositoryPolicyRequest->repositoryName = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = GetRepositoryPolicyXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_POLICY;

    $response = $sdk->sdk->getRepositoryPolicy($request);

    if ($response->getRepositoryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiateLayerUpload

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InitiateLayerUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\InitiateLayerUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\InitiateLayerUploadXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitiateLayerUploadRequest();
    $request->initiateLayerUploadRequest = new InitiateLayerUploadRequest();
    $request->initiateLayerUploadRequest->registryId = 'deserunt';
    $request->initiateLayerUploadRequest->repositoryName = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = InitiateLayerUploadXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_INITIATE_LAYER_UPLOAD;

    $response = $sdk->sdk->initiateLayerUpload($request);

    if ($response->initiateLayerUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for an Amazon ECR Public resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImage

<p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutImageRequest();
    $request->putImageRequest = new PutImageRequest();
    $request->putImageRequest->imageDigest = 'tempora';
    $request->putImageRequest->imageManifest = 'facilis';
    $request->putImageRequest->imageManifestMediaType = 'tempore';
    $request->putImageRequest->imageTag = 'labore';
    $request->putImageRequest->registryId = 'delectus';
    $request->putImageRequest->repositoryName = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = PutImageXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_PUT_IMAGE;

    $response = $sdk->sdk->putImage($request);

    if ($response->putImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRegistryCatalogData

Create or update the catalog data for a public registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRegistryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryCatalogDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRegistryCatalogDataRequest();
    $request->putRegistryCatalogDataRequest = new PutRegistryCatalogDataRequest();
    $request->putRegistryCatalogDataRequest->displayName = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = PutRegistryCatalogDataXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_PUT_REGISTRY_CATALOG_DATA;

    $response = $sdk->sdk->putRegistryCatalogData($request);

    if ($response->putRegistryCatalogDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoryCatalogData

Creates or updates the catalog data for a repository in a public registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRepositoryCatalogDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryCatalogDataInput;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoryCatalogDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoryCatalogDataRequest();
    $request->putRepositoryCatalogDataRequest = new PutRepositoryCatalogDataRequest();
    $request->putRepositoryCatalogDataRequest->catalogData = new RepositoryCatalogDataInput();
    $request->putRepositoryCatalogDataRequest->catalogData->aboutText = 'maiores';
    $request->putRepositoryCatalogDataRequest->catalogData->architectures = [
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->putRepositoryCatalogDataRequest->catalogData->description = 'facere';
    $request->putRepositoryCatalogDataRequest->catalogData->logoImageBlob = 'ea';
    $request->putRepositoryCatalogDataRequest->catalogData->operatingSystems = [
        'laborum',
        'accusamus',
    ];
    $request->putRepositoryCatalogDataRequest->catalogData->usageText = 'non';
    $request->putRepositoryCatalogDataRequest->registryId = 'occaecati';
    $request->putRepositoryCatalogDataRequest->repositoryName = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = PutRepositoryCatalogDataXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_PUT_REPOSITORY_CATALOG_DATA;

    $response = $sdk->sdk->putRepositoryCatalogData($request);

    if ($response->putRepositoryCatalogDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setRepositoryPolicy

Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetRepositoryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetRepositoryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetRepositoryPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetRepositoryPolicyRequest();
    $request->setRepositoryPolicyRequest = new SetRepositoryPolicyRequest();
    $request->setRepositoryPolicyRequest->force = false;
    $request->setRepositoryPolicyRequest->policyText = 'deleniti';
    $request->setRepositoryPolicyRequest->registryId = 'sapiente';
    $request->setRepositoryPolicyRequest->repositoryName = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = SetRepositoryPolicyXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_SET_REPOSITORY_POLICY;

    $response = $sdk->sdk->setRepositoryPolicy($request);

    if ($response->setRepositoryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'nihil';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes specified tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'eum';
    $request->untagResourceRequest->tagKeys = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadLayerPart

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadLayerPartRequest;
use \OpenAPI\OpenAPI\Models\Shared\UploadLayerPartRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadLayerPartXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadLayerPartRequest();
    $request->uploadLayerPartRequest = new UploadLayerPartRequest();
    $request->uploadLayerPartRequest->layerPartBlob = 'reiciendis';
    $request->uploadLayerPartRequest->partFirstByte = 652103;
    $request->uploadLayerPartRequest->partLastByte = 320997;
    $request->uploadLayerPartRequest->registryId = 'eum';
    $request->uploadLayerPartRequest->repositoryName = 'dolor';
    $request->uploadLayerPartRequest->uploadId = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = UploadLayerPartXAmzTargetEnum::SPENCER_FRONTEND_SERVICE_UPLOAD_LAYER_PART;

    $response = $sdk->sdk->uploadLayerPart($request);

    if ($response->uploadLayerPartResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
