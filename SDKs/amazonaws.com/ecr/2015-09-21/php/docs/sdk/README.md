# SDK

## Overview

<fullname>Amazon Elastic Container Registry</fullname> <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images.</p> <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ecr/>
### Available Operations

* [batchCheckLayerAvailability](#batchchecklayeravailability) - <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [batchDeleteImage](#batchdeleteimage) - <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
* [batchGetImage](#batchgetimage) - <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
* [batchGetRepositoryScanningConfiguration](#batchgetrepositoryscanningconfiguration) - Gets the scanning configuration for one or more repositories.
* [completeLayerUpload](#completelayerupload) - <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [createPullThroughCacheRule](#createpullthroughcacherule) - Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.
* [createRepository](#createrepository) - Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [deleteLifecyclePolicy](#deletelifecyclepolicy) - Deletes the lifecycle policy associated with the specified repository.
* [deletePullThroughCacheRule](#deletepullthroughcacherule) - Deletes a pull through cache rule.
* [deleteRegistryPolicy](#deleteregistrypolicy) - Deletes the registry permissions policy.
* [deleteRepository](#deleterepository) - Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
* [deleteRepositoryPolicy](#deleterepositorypolicy) - Deletes the repository policy associated with the specified repository.
* [describeImageReplicationStatus](#describeimagereplicationstatus) - Returns the replication status for a specified image.
* [describeImageScanFindings](#describeimagescanfindings) - Returns the scan findings for the specified image.
* [describeImages](#describeimages) - <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
* [describePullThroughCacheRules](#describepullthroughcacherules) - Returns the pull through cache rules for a registry.
* [describeRegistry](#describeregistry) - Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.
* [describeRepositories](#describerepositories) - Describes image repositories in a registry.
* [getAuthorizationToken](#getauthorizationtoken) - <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* [getDownloadUrlForLayer](#getdownloadurlforlayer) - <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [getLifecyclePolicy](#getlifecyclepolicy) - Retrieves the lifecycle policy for the specified repository.
* [getLifecyclePolicyPreview](#getlifecyclepolicypreview) - Retrieves the results of the lifecycle policy preview request for the specified repository.
* [getRegistryPolicy](#getregistrypolicy) - Retrieves the permissions policy for a registry.
* [getRegistryScanningConfiguration](#getregistryscanningconfiguration) - Retrieves the scanning configuration for a registry.
* [getRepositoryPolicy](#getrepositorypolicy) - Retrieves the repository policy for the specified repository.
* [initiateLayerUpload](#initiatelayerupload) - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [listImages](#listimages) - <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
* [listTagsForResource](#listtagsforresource) - List the tags for an Amazon ECR resource.
* [putImage](#putimage) - <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [putImageScanningConfiguration](#putimagescanningconfiguration) - <important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>
* [putImageTagMutability](#putimagetagmutability) - Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [putLifecyclePolicy](#putlifecyclepolicy) - Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.
* [putRegistryPolicy](#putregistrypolicy) - <p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* [putRegistryScanningConfiguration](#putregistryscanningconfiguration) - Creates or updates the scanning configuration for your private registry.
* [putReplicationConfiguration](#putreplicationconfiguration) - <p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>
* [setRepositoryPolicy](#setrepositorypolicy) - Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [startImageScan](#startimagescan) - Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [startLifecyclePolicyPreview](#startlifecyclepolicypreview) - Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
* [tagResource](#tagresource) - Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
* [untagResource](#untagresource) - Deletes specified tags from a resource.
* [uploadLayerPart](#uploadlayerpart) - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

## batchCheckLayerAvailability

<p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
    $request->xAmzTarget = BatchCheckLayerAvailabilityXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_CHECK_LAYER_AVAILABILITY;

    $response = $sdk->sdk->batchCheckLayerAvailability($request);

    if ($response->batchCheckLayerAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteImage

<p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>

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
    $request->xAmzTarget = BatchDeleteImageXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_DELETE_IMAGE;

    $response = $sdk->sdk->batchDeleteImage($request);

    if ($response->batchDeleteImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetImage

<p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetImageRequest();
    $request->batchGetImageRequest = new BatchGetImageRequest();
    $request->batchGetImageRequest->acceptedMediaTypes = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->batchGetImageRequest->imageIds = [
        new ImageIdentifier(),
        new ImageIdentifier(),
        new ImageIdentifier(),
        new ImageIdentifier(),
    ];
    $request->batchGetImageRequest->registryId = 'molestiae';
    $request->batchGetImageRequest->repositoryName = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = BatchGetImageXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_GET_IMAGE;

    $response = $sdk->sdk->batchGetImage($request);

    if ($response->batchGetImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetRepositoryScanningConfiguration

Gets the scanning configuration for one or more repositories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetRepositoryScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetRepositoryScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetRepositoryScanningConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetRepositoryScanningConfigurationRequest();
    $request->batchGetRepositoryScanningConfigurationRequest = new BatchGetRepositoryScanningConfigurationRequest();
    $request->batchGetRepositoryScanningConfigurationRequest->repositoryNames = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = BatchGetRepositoryScanningConfigurationXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_GET_REPOSITORY_SCANNING_CONFIGURATION;

    $response = $sdk->sdk->batchGetRepositoryScanningConfiguration($request);

    if ($response->batchGetRepositoryScanningConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## completeLayerUpload

<p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
        'impedit',
    ];
    $request->completeLayerUploadRequest->registryId = 'cum';
    $request->completeLayerUploadRequest->repositoryName = 'esse';
    $request->completeLayerUploadRequest->uploadId = 'ipsum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = CompleteLayerUploadXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_COMPLETE_LAYER_UPLOAD;

    $response = $sdk->sdk->completeLayerUpload($request);

    if ($response->completeLayerUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPullThroughCacheRule

Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePullThroughCacheRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePullThroughCacheRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePullThroughCacheRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePullThroughCacheRuleRequest();
    $request->createPullThroughCacheRuleRequest = new CreatePullThroughCacheRuleRequest();
    $request->createPullThroughCacheRuleRequest->ecrRepositoryPrefix = 'dolor';
    $request->createPullThroughCacheRuleRequest->registryId = 'natus';
    $request->createPullThroughCacheRuleRequest->upstreamRegistryUrl = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreatePullThroughCacheRuleXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_CREATE_PULL_THROUGH_CACHE_RULE;

    $response = $sdk->sdk->createPullThroughCacheRule($request);

    if ($response->createPullThroughCacheRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRepository

Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageScanningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagMutabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRepositoryRequest();
    $request->createRepositoryRequest = new CreateRepositoryRequest();
    $request->createRepositoryRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createRepositoryRequest->encryptionConfiguration->encryptionType = EncryptionTypeEnum::KMS;
    $request->createRepositoryRequest->encryptionConfiguration->kmsKey = 'quidem';
    $request->createRepositoryRequest->imageScanningConfiguration = new ImageScanningConfiguration();
    $request->createRepositoryRequest->imageScanningConfiguration->scanOnPush = false;
    $request->createRepositoryRequest->imageTagMutability = ImageTagMutabilityEnum::MUTABLE;
    $request->createRepositoryRequest->registryId = 'ipsa';
    $request->createRepositoryRequest->repositoryName = 'reiciendis';
    $request->createRepositoryRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CreateRepositoryXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_CREATE_REPOSITORY;

    $response = $sdk->sdk->createRepository($request);

    if ($response->createRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLifecyclePolicy

Deletes the lifecycle policy associated with the specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLifecyclePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLifecyclePolicyRequest();
    $request->deleteLifecyclePolicyRequest = new DeleteLifecyclePolicyRequest();
    $request->deleteLifecyclePolicyRequest->registryId = 'enim';
    $request->deleteLifecyclePolicyRequest->repositoryName = 'omnis';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DeleteLifecyclePolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_LIFECYCLE_POLICY;

    $response = $sdk->sdk->deleteLifecyclePolicy($request);

    if ($response->deleteLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePullThroughCacheRule

Deletes a pull through cache rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePullThroughCacheRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePullThroughCacheRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePullThroughCacheRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePullThroughCacheRuleRequest();
    $request->deletePullThroughCacheRuleRequest = new DeletePullThroughCacheRuleRequest();
    $request->deletePullThroughCacheRuleRequest->ecrRepositoryPrefix = 'sapiente';
    $request->deletePullThroughCacheRuleRequest->registryId = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeletePullThroughCacheRuleXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_PULL_THROUGH_CACHE_RULE;

    $response = $sdk->sdk->deletePullThroughCacheRule($request);

    if ($response->deletePullThroughCacheRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRegistryPolicy

Deletes the registry permissions policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRegistryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRegistryPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRegistryPolicyRequest();
    $request->requestBody = [
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteRegistryPolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_REGISTRY_POLICY;

    $response = $sdk->sdk->deleteRegistryPolicy($request);

    if ($response->deleteRegistryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepository

Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.

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
    $request->deleteRepositoryRequest->registryId = 'odit';
    $request->deleteRepositoryRequest->repositoryName = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteRepositoryXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_REPOSITORY;

    $response = $sdk->sdk->deleteRepository($request);

    if ($response->deleteRepositoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoryPolicy

Deletes the repository policy associated with the specified repository.

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
    $request->deleteRepositoryPolicyRequest->registryId = 'error';
    $request->deleteRepositoryPolicyRequest->repositoryName = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DeleteRepositoryPolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_REPOSITORY_POLICY;

    $response = $sdk->sdk->deleteRepositoryPolicy($request);

    if ($response->deleteRepositoryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImageReplicationStatus

Returns the replication status for a specified image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageReplicationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImageReplicationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageReplicationStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageReplicationStatusRequest();
    $request->describeImageReplicationStatusRequest = new DescribeImageReplicationStatusRequest();
    $request->describeImageReplicationStatusRequest->imageId = new ImageIdentifier();
    $request->describeImageReplicationStatusRequest->imageId->imageDigest = 'voluptatibus';
    $request->describeImageReplicationStatusRequest->imageId->imageTag = 'ipsa';
    $request->describeImageReplicationStatusRequest->registryId = 'omnis';
    $request->describeImageReplicationStatusRequest->repositoryName = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DescribeImageReplicationStatusXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGE_REPLICATION_STATUS;

    $response = $sdk->sdk->describeImageReplicationStatus($request);

    if ($response->describeImageReplicationStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImageScanFindings

Returns the scan findings for the specified image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageScanFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImageScanFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageScanFindingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageScanFindingsRequest();
    $request->describeImageScanFindingsRequest = new DescribeImageScanFindingsRequest();
    $request->describeImageScanFindingsRequest->imageId = new ImageIdentifier();
    $request->describeImageScanFindingsRequest->imageId->imageDigest = 'corporis';
    $request->describeImageScanFindingsRequest->imageId->imageTag = 'dolore';
    $request->describeImageScanFindingsRequest->maxResults = 480894;
    $request->describeImageScanFindingsRequest->nextToken = 'dicta';
    $request->describeImageScanFindingsRequest->registryId = 'harum';
    $request->describeImageScanFindingsRequest->repositoryName = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = DescribeImageScanFindingsXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGE_SCAN_FINDINGS;
    $request->maxResults = 'excepturi';
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->describeImageScanFindings($request);

    if ($response->describeImageScanFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImages

<p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImagesFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImagesRequest();
    $request->describeImagesRequest = new DescribeImagesRequest();
    $request->describeImagesRequest->filter = new DescribeImagesFilter();
    $request->describeImagesRequest->filter->tagStatus = TagStatusEnum::TAGGED;
    $request->describeImagesRequest->imageIds = [
        new ImageIdentifier(),
        new ImageIdentifier(),
        new ImageIdentifier(),
    ];
    $request->describeImagesRequest->maxResults = 523248;
    $request->describeImagesRequest->nextToken = 'voluptates';
    $request->describeImagesRequest->registryId = 'quasi';
    $request->describeImagesRequest->repositoryName = 'repudiandae';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DescribeImagesXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGES;
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'explicabo';

    $response = $sdk->sdk->describeImages($request);

    if ($response->describeImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePullThroughCacheRules

Returns the pull through cache rules for a registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePullThroughCacheRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePullThroughCacheRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePullThroughCacheRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePullThroughCacheRulesRequest();
    $request->describePullThroughCacheRulesRequest = new DescribePullThroughCacheRulesRequest();
    $request->describePullThroughCacheRulesRequest->ecrRepositoryPrefixes = [
        'distinctio',
        'quibusdam',
        'labore',
    ];
    $request->describePullThroughCacheRulesRequest->maxResults = 264730;
    $request->describePullThroughCacheRulesRequest->nextToken = 'qui';
    $request->describePullThroughCacheRulesRequest->registryId = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = DescribePullThroughCacheRulesXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_PULL_THROUGH_CACHE_RULES;
    $request->maxResults = 'fugit';
    $request->nextToken = 'dolorum';

    $response = $sdk->sdk->describePullThroughCacheRules($request);

    if ($response->describePullThroughCacheRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRegistry

Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRegistryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRegistryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRegistryRequest();
    $request->requestBody = [
        'tempora' => 'facilis',
        'tempore' => 'labore',
        'delectus' => 'eum',
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DescribeRegistryXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_REGISTRY;

    $response = $sdk->sdk->describeRegistry($request);

    if ($response->describeRegistryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRepositories

Describes image repositories in a registry.

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
    $request->describeRepositoriesRequest->maxResults = 638921;
    $request->describeRepositoriesRequest->nextToken = 'dolor';
    $request->describeRepositoriesRequest->registryId = 'debitis';
    $request->describeRepositoriesRequest->repositoryNames = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DescribeRepositoriesXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_REPOSITORIES;
    $request->maxResults = 'aliquid';
    $request->nextToken = 'laborum';

    $response = $sdk->sdk->describeRepositories($request);

    if ($response->describeRepositoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizationToken

<p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizationTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAuthorizationTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizationTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthorizationTokenRequest();
    $request->getAuthorizationTokenRequest = new GetAuthorizationTokenRequest();
    $request->getAuthorizationTokenRequest->registryIds = [
        'non',
        'occaecati',
        'enim',
        'accusamus',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = GetAuthorizationTokenXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_AUTHORIZATION_TOKEN;

    $response = $sdk->sdk->getAuthorizationToken($request);

    if ($response->getAuthorizationTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDownloadUrlForLayer

<p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDownloadUrlForLayerRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDownloadUrlForLayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDownloadUrlForLayerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDownloadUrlForLayerRequest();
    $request->getDownloadUrlForLayerRequest = new GetDownloadUrlForLayerRequest();
    $request->getDownloadUrlForLayerRequest->layerDigest = 'sapiente';
    $request->getDownloadUrlForLayerRequest->registryId = 'amet';
    $request->getDownloadUrlForLayerRequest->repositoryName = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = GetDownloadUrlForLayerXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_DOWNLOAD_URL_FOR_LAYER;

    $response = $sdk->sdk->getDownloadUrlForLayer($request);

    if ($response->getDownloadUrlForLayerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLifecyclePolicy

Retrieves the lifecycle policy for the specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLifecyclePolicyRequest();
    $request->getLifecyclePolicyRequest = new GetLifecyclePolicyRequest();
    $request->getLifecyclePolicyRequest->registryId = 'magnam';
    $request->getLifecyclePolicyRequest->repositoryName = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetLifecyclePolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_LIFECYCLE_POLICY;

    $response = $sdk->sdk->getLifecyclePolicy($request);

    if ($response->getLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLifecyclePolicyPreview

Retrieves the results of the lifecycle policy preview request for the specified repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLifecyclePolicyPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\LifecyclePolicyPreviewFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyPreviewXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLifecyclePolicyPreviewRequest();
    $request->getLifecyclePolicyPreviewRequest = new GetLifecyclePolicyPreviewRequest();
    $request->getLifecyclePolicyPreviewRequest->filter = new LifecyclePolicyPreviewFilter();
    $request->getLifecyclePolicyPreviewRequest->filter->tagStatus = TagStatusEnum::ANY;
    $request->getLifecyclePolicyPreviewRequest->imageIds = [
        new ImageIdentifier(),
    ];
    $request->getLifecyclePolicyPreviewRequest->maxResults = 102863;
    $request->getLifecyclePolicyPreviewRequest->nextToken = 'magnam';
    $request->getLifecyclePolicyPreviewRequest->registryId = 'et';
    $request->getLifecyclePolicyPreviewRequest->repositoryName = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = GetLifecyclePolicyPreviewXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_LIFECYCLE_POLICY_PREVIEW;
    $request->maxResults = 'mollitia';
    $request->nextToken = 'ad';

    $response = $sdk->sdk->getLifecyclePolicyPreview($request);

    if ($response->getLifecyclePolicyPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistryPolicy

Retrieves the permissions policy for a registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistryPolicyRequest();
    $request->requestBody = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = GetRegistryPolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_REGISTRY_POLICY;

    $response = $sdk->sdk->getRegistryPolicy($request);

    if ($response->getRegistryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistryScanningConfiguration

Retrieves the scanning configuration for a registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryScanningConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistryScanningConfigurationRequest();
    $request->requestBody = [
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = GetRegistryScanningConfigurationXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_REGISTRY_SCANNING_CONFIGURATION;

    $response = $sdk->sdk->getRegistryScanningConfiguration($request);

    if ($response->getRegistryScanningConfigurationResponse !== null) {
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
    $request->getRepositoryPolicyRequest->registryId = 'consequuntur';
    $request->getRepositoryPolicyRequest->repositoryName = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = GetRepositoryPolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_REPOSITORY_POLICY;

    $response = $sdk->sdk->getRepositoryPolicy($request);

    if ($response->getRepositoryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiateLayerUpload

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
    $request->initiateLayerUploadRequest->registryId = 'ea';
    $request->initiateLayerUploadRequest->repositoryName = 'excepturi';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = InitiateLayerUploadXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_INITIATE_LAYER_UPLOAD;

    $response = $sdk->sdk->initiateLayerUpload($request);

    if ($response->initiateLayerUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImages

<p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImagesFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImagesRequest();
    $request->listImagesRequest = new ListImagesRequest();
    $request->listImagesRequest->filter = new ListImagesFilter();
    $request->listImagesRequest->filter->tagStatus = TagStatusEnum::UNTAGGED;
    $request->listImagesRequest->maxResults = 420075;
    $request->listImagesRequest->nextToken = 'nam';
    $request->listImagesRequest->registryId = 'eaque';
    $request->listImagesRequest->repositoryName = 'pariatur';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = ListImagesXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_LIST_IMAGES;
    $request->maxResults = 'corporis';
    $request->nextToken = 'hic';

    $response = $sdk->sdk->listImages($request);

    if ($response->listImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for an Amazon ECR resource.

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
    $request->listTagsForResourceRequest->resourceArn = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImage

<p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
    $request->putImageRequest->imageDigest = 'nesciunt';
    $request->putImageRequest->imageManifest = 'eos';
    $request->putImageRequest->imageManifestMediaType = 'perferendis';
    $request->putImageRequest->imageTag = 'dolores';
    $request->putImageRequest->registryId = 'minus';
    $request->putImageRequest->repositoryName = 'quam';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = PutImageXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE;

    $response = $sdk->sdk->putImage($request);

    if ($response->putImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImageScanningConfiguration

<important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutImageScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutImageScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageScanningConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\PutImageScanningConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutImageScanningConfigurationRequest();
    $request->putImageScanningConfigurationRequest = new PutImageScanningConfigurationRequest();
    $request->putImageScanningConfigurationRequest->imageScanningConfiguration = new ImageScanningConfiguration();
    $request->putImageScanningConfigurationRequest->imageScanningConfiguration->scanOnPush = false;
    $request->putImageScanningConfigurationRequest->registryId = 'perspiciatis';
    $request->putImageScanningConfigurationRequest->repositoryName = 'voluptatem';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = PutImageScanningConfigurationXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE_SCANNING_CONFIGURATION;

    $response = $sdk->sdk->putImageScanningConfiguration($request);

    if ($response->putImageScanningConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putImageTagMutability

Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutImageTagMutabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutImageTagMutabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageTagMutabilityEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutImageTagMutabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutImageTagMutabilityRequest();
    $request->putImageTagMutabilityRequest = new PutImageTagMutabilityRequest();
    $request->putImageTagMutabilityRequest->imageTagMutability = ImageTagMutabilityEnum::MUTABLE;
    $request->putImageTagMutabilityRequest->registryId = 'asperiores';
    $request->putImageTagMutabilityRequest->repositoryName = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = PutImageTagMutabilityXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE_TAG_MUTABILITY;

    $response = $sdk->sdk->putImageTagMutability($request);

    if ($response->putImageTagMutabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLifecyclePolicy

Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLifecyclePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLifecyclePolicyRequest();
    $request->putLifecyclePolicyRequest = new PutLifecyclePolicyRequest();
    $request->putLifecyclePolicyRequest->lifecyclePolicyText = 'libero';
    $request->putLifecyclePolicyRequest->registryId = 'delectus';
    $request->putLifecyclePolicyRequest->repositoryName = 'quaerat';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = PutLifecyclePolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_LIFECYCLE_POLICY;

    $response = $sdk->sdk->putLifecyclePolicy($request);

    if ($response->putLifecyclePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRegistryPolicy

<p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRegistryPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRegistryPolicyRequest();
    $request->putRegistryPolicyRequest = new PutRegistryPolicyRequest();
    $request->putRegistryPolicyRequest->policyText = 'hic';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = PutRegistryPolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REGISTRY_POLICY;

    $response = $sdk->sdk->putRegistryPolicy($request);

    if ($response->putRegistryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRegistryScanningConfiguration

Creates or updates the scanning configuration for your private registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRegistryScanningConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegistryScanningRule;
use \OpenAPI\OpenAPI\Models\Shared\ScanningRepositoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\ScanningRepositoryFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryScanningConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRegistryScanningConfigurationRequest();
    $request->putRegistryScanningConfigurationRequest = new PutRegistryScanningConfigurationRequest();
    $request->putRegistryScanningConfigurationRequest->rules = [
        new RegistryScanningRule(),
        new RegistryScanningRule(),
    ];
    $request->putRegistryScanningConfigurationRequest->scanType = ScanTypeEnum::BASIC;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = PutRegistryScanningConfigurationXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REGISTRY_SCANNING_CONFIGURATION;

    $response = $sdk->sdk->putRegistryScanningConfiguration($request);

    if ($response->putRegistryScanningConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putReplicationConfiguration

<p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationRule;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationDestination;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutReplicationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutReplicationConfigurationRequest();
    $request->putReplicationConfigurationRequest = new PutReplicationConfigurationRequest();
    $request->putReplicationConfigurationRequest->replicationConfiguration = new ReplicationConfiguration();
    $request->putReplicationConfigurationRequest->replicationConfiguration->rules = [
        new ReplicationRule(),
        new ReplicationRule(),
        new ReplicationRule(),
        new ReplicationRule(),
    ];
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = PutReplicationConfigurationXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REPLICATION_CONFIGURATION;

    $response = $sdk->sdk->putReplicationConfiguration($request);

    if ($response->putReplicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setRepositoryPolicy

Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

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
    $request->setRepositoryPolicyRequest->policyText = 'soluta';
    $request->setRepositoryPolicyRequest->registryId = 'dolorum';
    $request->setRepositoryPolicyRequest->repositoryName = 'iusto';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = SetRepositoryPolicyXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_SET_REPOSITORY_POLICY;

    $response = $sdk->sdk->setRepositoryPolicy($request);

    if ($response->setRepositoryPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImageScan

Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImageScanRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartImageScanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\StartImageScanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImageScanRequest();
    $request->startImageScanRequest = new StartImageScanRequest();
    $request->startImageScanRequest->imageId = new ImageIdentifier();
    $request->startImageScanRequest->imageId->imageDigest = 'nihil';
    $request->startImageScanRequest->imageId->imageTag = 'ipsum';
    $request->startImageScanRequest->registryId = 'voluptate';
    $request->startImageScanRequest->repositoryName = 'id';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = StartImageScanXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_START_IMAGE_SCAN;

    $response = $sdk->sdk->startImageScan($request);

    if ($response->startImageScanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startLifecyclePolicyPreview

Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartLifecyclePolicyPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartLifecyclePolicyPreviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartLifecyclePolicyPreviewXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartLifecyclePolicyPreviewRequest();
    $request->startLifecyclePolicyPreviewRequest = new StartLifecyclePolicyPreviewRequest();
    $request->startLifecyclePolicyPreviewRequest->lifecyclePolicyText = 'ad';
    $request->startLifecyclePolicyPreviewRequest->registryId = 'saepe';
    $request->startLifecyclePolicyPreviewRequest->repositoryName = 'suscipit';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = StartLifecyclePolicyPreviewXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_START_LIFECYCLE_POLICY_PREVIEW;

    $response = $sdk->sdk->startLifecyclePolicyPreview($request);

    if ($response->startLifecyclePolicyPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.

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
    $request->tagResourceRequest->resourceArn = 'at';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_TAG_RESOURCE;

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
    $request->untagResourceRequest->resourceArn = 'esse';
    $request->untagResourceRequest->tagKeys = [
        'iusto',
        'ipsum',
        'quisquam',
    ];
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadLayerPart

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
    $request->uploadLayerPartRequest->layerPartBlob = 'sapiente';
    $request->uploadLayerPartRequest->partFirstByte = 518201;
    $request->uploadLayerPartRequest->partLastByte = 471752;
    $request->uploadLayerPartRequest->registryId = 'sit';
    $request->uploadLayerPartRequest->repositoryName = 'expedita';
    $request->uploadLayerPartRequest->uploadId = 'neque';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = UploadLayerPartXAmzTargetEnum::AMAZON_EC2_CONTAINER_REGISTRY_V20150921_UPLOAD_LAYER_PART;

    $response = $sdk->sdk->uploadLayerPart($request);

    if ($response->uploadLayerPartResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
