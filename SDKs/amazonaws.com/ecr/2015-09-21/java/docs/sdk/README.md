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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityResponse;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCheckLayerAvailabilityRequest req = new BatchCheckLayerAvailabilityRequest(                new BatchCheckLayerAvailabilityRequest(                new String[]{{
                                                add("delectus"),
                                            }}, "tempora") {{
                                registryId = "suscipit";
                            }};, BatchCheckLayerAvailabilityXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_CHECK_LAYER_AVAILABILITY) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
            }};            

            BatchCheckLayerAvailabilityResponse res = sdk.sdk.batchCheckLayerAvailability(req);

            if (res.batchCheckLayerAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteImage

<p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteImageRequest;
import org.openapis.openapi.models.operations.BatchDeleteImageResponse;
import org.openapis.openapi.models.operations.BatchDeleteImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDeleteImageRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteImageRequest req = new BatchDeleteImageRequest(                new BatchDeleteImageRequest(                new org.openapis.openapi.models.shared.ImageIdentifier[]{{
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "ab";
                                                    imageTag = "quis";
                                                }}),
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "veritatis";
                                                    imageTag = "deserunt";
                                                }}),
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "perferendis";
                                                    imageTag = "ipsam";
                                                }}),
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "repellendus";
                                                    imageTag = "sapiente";
                                                }}),
                                            }}, "quo") {{
                                registryId = "odit";
                            }};, BatchDeleteImageXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_DELETE_IMAGE) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            BatchDeleteImageResponse res = sdk.sdk.batchDeleteImage(req);

            if (res.batchDeleteImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetImage

<p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetImageRequest;
import org.openapis.openapi.models.operations.BatchGetImageResponse;
import org.openapis.openapi.models.operations.BatchGetImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetImageRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetImageRequest req = new BatchGetImageRequest(                new BatchGetImageRequest(                new org.openapis.openapi.models.shared.ImageIdentifier[]{{
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "dolorum";
                                                    imageTag = "dicta";
                                                }}),
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "nam";
                                                    imageTag = "officia";
                                                }}),
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "occaecati";
                                                    imageTag = "fugit";
                                                }}),
                                                add(new ImageIdentifier() {{
                                                    imageDigest = "deleniti";
                                                    imageTag = "hic";
                                                }}),
                                            }}, "optio") {{
                                acceptedMediaTypes = new String[]{{
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                                registryId = "modi";
                            }};, BatchGetImageXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_GET_IMAGE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "cum";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "aspernatur";
            }};            

            BatchGetImageResponse res = sdk.sdk.batchGetImage(req);

            if (res.batchGetImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetRepositoryScanningConfiguration

Gets the scanning configuration for one or more repositories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetRepositoryScanningConfigurationRequest;
import org.openapis.openapi.models.operations.BatchGetRepositoryScanningConfigurationResponse;
import org.openapis.openapi.models.operations.BatchGetRepositoryScanningConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetRepositoryScanningConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetRepositoryScanningConfigurationRequest req = new BatchGetRepositoryScanningConfigurationRequest(                new BatchGetRepositoryScanningConfigurationRequest(                new String[]{{
                                                add("natus"),
                                                add("sed"),
                                            }});, BatchGetRepositoryScanningConfigurationXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_GET_REPOSITORY_SCANNING_CONFIGURATION) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            BatchGetRepositoryScanningConfigurationResponse res = sdk.sdk.batchGetRepositoryScanningConfiguration(req);

            if (res.batchGetRepositoryScanningConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## completeLayerUpload

<p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompleteLayerUploadRequest;
import org.openapis.openapi.models.operations.CompleteLayerUploadResponse;
import org.openapis.openapi.models.operations.CompleteLayerUploadXAmzTargetEnum;
import org.openapis.openapi.models.shared.CompleteLayerUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompleteLayerUploadRequest req = new CompleteLayerUploadRequest(                new CompleteLayerUploadRequest(                new String[]{{
                                                add("iste"),
                                                add("iure"),
                                            }}, "saepe", "quidem") {{
                                registryId = "architecto";
                            }};, CompleteLayerUploadXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_COMPLETE_LAYER_UPLOAD) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            CompleteLayerUploadResponse res = sdk.sdk.completeLayerUpload(req);

            if (res.completeLayerUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPullThroughCacheRule

Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePullThroughCacheRuleRequest;
import org.openapis.openapi.models.operations.CreatePullThroughCacheRuleResponse;
import org.openapis.openapi.models.operations.CreatePullThroughCacheRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePullThroughCacheRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePullThroughCacheRuleRequest req = new CreatePullThroughCacheRuleRequest(                new CreatePullThroughCacheRuleRequest("explicabo", "nobis") {{
                                registryId = "enim";
                            }};, CreatePullThroughCacheRuleXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_CREATE_PULL_THROUGH_CACHE_RULE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            CreatePullThroughCacheRuleResponse res = sdk.sdk.createPullThroughCacheRule(req);

            if (res.createPullThroughCacheRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRepository

Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryRequest;
import org.openapis.openapi.models.operations.CreateRepositoryResponse;
import org.openapis.openapi.models.operations.CreateRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRepositoryRequest;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.ImageScanningConfiguration;
import org.openapis.openapi.models.shared.ImageTagMutabilityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRepositoryRequest req = new CreateRepositoryRequest(                new CreateRepositoryRequest("sapiente") {{
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.AES256) {{
                                    kmsKey = "mollitia";
                                }};;
                                imageScanningConfiguration = new ImageScanningConfiguration() {{
                                    scanOnPush = false;
                                }};;
                                imageTagMutability = ImageTagMutabilityEnum.MUTABLE;
                                registryId = "culpa";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "repellat";
                                        value = "mollitia";
                                    }}),
                                }};
                            }};, CreateRepositoryXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_CREATE_REPOSITORY) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            CreateRepositoryResponse res = sdk.sdk.createRepository(req);

            if (res.createRepositoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLifecyclePolicy

Deletes the lifecycle policy associated with the specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyResponse;
import org.openapis.openapi.models.operations.DeleteLifecyclePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLifecyclePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLifecyclePolicyRequest req = new DeleteLifecyclePolicyRequest(                new DeleteLifecyclePolicyRequest("quis") {{
                                registryId = "vitae";
                            }};, DeleteLifecyclePolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_LIFECYCLE_POLICY) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            DeleteLifecyclePolicyResponse res = sdk.sdk.deleteLifecyclePolicy(req);

            if (res.deleteLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePullThroughCacheRule

Deletes a pull through cache rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePullThroughCacheRuleRequest;
import org.openapis.openapi.models.operations.DeletePullThroughCacheRuleResponse;
import org.openapis.openapi.models.operations.DeletePullThroughCacheRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePullThroughCacheRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePullThroughCacheRuleRequest req = new DeletePullThroughCacheRuleRequest(                new DeletePullThroughCacheRuleRequest("id") {{
                                registryId = "possimus";
                            }};, DeletePullThroughCacheRuleXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_PULL_THROUGH_CACHE_RULE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeletePullThroughCacheRuleResponse res = sdk.sdk.deletePullThroughCacheRule(req);

            if (res.deletePullThroughCacheRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRegistryPolicy

Deletes the registry permissions policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRegistryPolicyRequest;
import org.openapis.openapi.models.operations.DeleteRegistryPolicyResponse;
import org.openapis.openapi.models.operations.DeleteRegistryPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRegistryPolicyRequest req = new DeleteRegistryPolicyRequest(                new java.util.HashMap<String, Object>() {{
                                put("nihil", "praesentium");
                                put("voluptatibus", "ipsa");
                                put("omnis", "voluptate");
                                put("cum", "perferendis");
                            }}, DeleteRegistryPolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_REGISTRY_POLICY) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteRegistryPolicyResponse res = sdk.sdk.deleteRegistryPolicy(req);

            if (res.deleteRegistryPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepository

Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryResponse;
import org.openapis.openapi.models.operations.DeleteRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRepositoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRepositoryRequest req = new DeleteRepositoryRequest(                new DeleteRepositoryRequest("dicta") {{
                                force = false;
                                registryId = "harum";
                            }};, DeleteRepositoryXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_REPOSITORY) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            DeleteRepositoryResponse res = sdk.sdk.deleteRepository(req);

            if (res.deleteRepositoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoryPolicy

Deletes the repository policy associated with the specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoryPolicyRequest;
import org.openapis.openapi.models.operations.DeleteRepositoryPolicyResponse;
import org.openapis.openapi.models.operations.DeleteRepositoryPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRepositoryPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRepositoryPolicyRequest req = new DeleteRepositoryPolicyRequest(                new DeleteRepositoryPolicyRequest("excepturi") {{
                                registryId = "pariatur";
                            }};, DeleteRepositoryPolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DELETE_REPOSITORY_POLICY) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteRepositoryPolicyResponse res = sdk.sdk.deleteRepositoryPolicy(req);

            if (res.deleteRepositoryPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImageReplicationStatus

Returns the replication status for a specified image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImageReplicationStatusRequest;
import org.openapis.openapi.models.operations.DescribeImageReplicationStatusResponse;
import org.openapis.openapi.models.operations.DescribeImageReplicationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImageReplicationStatusRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImageReplicationStatusRequest req = new DescribeImageReplicationStatusRequest(                new DescribeImageReplicationStatusRequest(                new ImageIdentifier() {{
                                                imageDigest = "itaque";
                                                imageTag = "incidunt";
                                            }};, "enim") {{
                                registryId = "consequatur";
                            }};, DescribeImageReplicationStatusXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGE_REPLICATION_STATUS) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            DescribeImageReplicationStatusResponse res = sdk.sdk.describeImageReplicationStatus(req);

            if (res.describeImageReplicationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImageScanFindings

Returns the scan findings for the specified image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImageScanFindingsRequest;
import org.openapis.openapi.models.operations.DescribeImageScanFindingsResponse;
import org.openapis.openapi.models.operations.DescribeImageScanFindingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImageScanFindingsRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImageScanFindingsRequest req = new DescribeImageScanFindingsRequest(                new DescribeImageScanFindingsRequest(                new ImageIdentifier() {{
                                                imageDigest = "qui";
                                                imageTag = "aliquid";
                                            }};, "cupiditate") {{
                                maxResults = 552822L;
                                nextToken = "perferendis";
                                registryId = "magni";
                            }};, DescribeImageScanFindingsXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGE_SCAN_FINDINGS) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
                maxResults = "facilis";
                nextToken = "tempore";
            }};            

            DescribeImageScanFindingsResponse res = sdk.sdk.describeImageScanFindings(req);

            if (res.describeImageScanFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImages

<p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImagesRequest;
import org.openapis.openapi.models.operations.DescribeImagesResponse;
import org.openapis.openapi.models.operations.DescribeImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImagesFilter;
import org.openapis.openapi.models.shared.DescribeImagesRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImagesRequest req = new DescribeImagesRequest(                new DescribeImagesRequest("delectus") {{
                                filter = new DescribeImagesFilter() {{
                                    tagStatus = TagStatusEnum.UNTAGGED;
                                }};;
                                imageIds = new org.openapis.openapi.models.shared.ImageIdentifier[]{{
                                    add(new ImageIdentifier() {{
                                        imageDigest = "eligendi";
                                        imageTag = "sint";
                                    }}),
                                }};
                                maxResults = 396098L;
                                nextToken = "provident";
                                registryId = "necessitatibus";
                            }};, DescribeImagesXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGES) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
                maxResults = "in";
                nextToken = "illum";
            }};            

            DescribeImagesResponse res = sdk.sdk.describeImages(req);

            if (res.describeImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePullThroughCacheRules

Returns the pull through cache rules for a registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePullThroughCacheRulesRequest;
import org.openapis.openapi.models.operations.DescribePullThroughCacheRulesResponse;
import org.openapis.openapi.models.operations.DescribePullThroughCacheRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePullThroughCacheRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePullThroughCacheRulesRequest req = new DescribePullThroughCacheRulesRequest(                new DescribePullThroughCacheRulesRequest() {{
                                ecrRepositoryPrefixes = new String[]{{
                                    add("dicta"),
                                    add("magnam"),
                                    add("cumque"),
                                }};
                                maxResults = 813798L;
                                nextToken = "ea";
                                registryId = "aliquid";
                            }};, DescribePullThroughCacheRulesXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_PULL_THROUGH_CACHE_RULES) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
                maxResults = "quidem";
                nextToken = "provident";
            }};            

            DescribePullThroughCacheRulesResponse res = sdk.sdk.describePullThroughCacheRules(req);

            if (res.describePullThroughCacheRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRegistry

Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRegistryRequest;
import org.openapis.openapi.models.operations.DescribeRegistryResponse;
import org.openapis.openapi.models.operations.DescribeRegistryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRegistryRequest req = new DescribeRegistryRequest(                new java.util.HashMap<String, Object>() {{
                                put("blanditiis", "deleniti");
                                put("sapiente", "amet");
                                put("deserunt", "nisi");
                            }}, DescribeRegistryXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_REGISTRY) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            DescribeRegistryResponse res = sdk.sdk.describeRegistry(req);

            if (res.describeRegistryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRepositories

Describes image repositories in a registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRepositoriesRequest;
import org.openapis.openapi.models.operations.DescribeRepositoriesResponse;
import org.openapis.openapi.models.operations.DescribeRepositoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRepositoriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRepositoriesRequest req = new DescribeRepositoriesRequest(                new DescribeRepositoriesRequest() {{
                                maxResults = 660174L;
                                nextToken = "labore";
                                registryId = "labore";
                                repositoryNames = new String[]{{
                                    add("natus"),
                                    add("nobis"),
                                }};
                            }};, DescribeRepositoriesXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_REPOSITORIES) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aspernatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "et";
                xAmzSignedHeaders = "excepturi";
                maxResults = "ullam";
                nextToken = "provident";
            }};            

            DescribeRepositoriesResponse res = sdk.sdk.describeRepositories(req);

            if (res.describeRepositoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizationToken

<p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthorizationTokenRequest;
import org.openapis.openapi.models.operations.GetAuthorizationTokenResponse;
import org.openapis.openapi.models.operations.GetAuthorizationTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAuthorizationTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthorizationTokenRequest req = new GetAuthorizationTokenRequest(                new GetAuthorizationTokenRequest() {{
                                registryIds = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                            }};, GetAuthorizationTokenXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_AUTHORIZATION_TOKEN) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            GetAuthorizationTokenResponse res = sdk.sdk.getAuthorizationToken(req);

            if (res.getAuthorizationTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDownloadUrlForLayer

<p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDownloadUrlForLayerRequest;
import org.openapis.openapi.models.operations.GetDownloadUrlForLayerResponse;
import org.openapis.openapi.models.operations.GetDownloadUrlForLayerXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDownloadUrlForLayerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDownloadUrlForLayerRequest req = new GetDownloadUrlForLayerRequest(                new GetDownloadUrlForLayerRequest("iure", "doloribus") {{
                                registryId = "debitis";
                            }};, GetDownloadUrlForLayerXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_DOWNLOAD_URL_FOR_LAYER) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            GetDownloadUrlForLayerResponse res = sdk.sdk.getDownloadUrlForLayer(req);

            if (res.getDownloadUrlForLayerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLifecyclePolicy

Retrieves the lifecycle policy for the specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.GetLifecyclePolicyResponse;
import org.openapis.openapi.models.operations.GetLifecyclePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLifecyclePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLifecyclePolicyRequest req = new GetLifecyclePolicyRequest(                new GetLifecyclePolicyRequest("ullam") {{
                                registryId = "expedita";
                            }};, GetLifecyclePolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_LIFECYCLE_POLICY) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetLifecyclePolicyResponse res = sdk.sdk.getLifecyclePolicy(req);

            if (res.getLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLifecyclePolicyPreview

Retrieves the results of the lifecycle policy preview request for the specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLifecyclePolicyPreviewRequest;
import org.openapis.openapi.models.operations.GetLifecyclePolicyPreviewResponse;
import org.openapis.openapi.models.operations.GetLifecyclePolicyPreviewXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLifecyclePolicyPreviewRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.LifecyclePolicyPreviewFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLifecyclePolicyPreviewRequest req = new GetLifecyclePolicyPreviewRequest(                new GetLifecyclePolicyPreviewRequest("praesentium") {{
                                filter = new LifecyclePolicyPreviewFilter() {{
                                    tagStatus = TagStatusEnum.UNTAGGED;
                                }};;
                                imageIds = new org.openapis.openapi.models.shared.ImageIdentifier[]{{
                                    add(new ImageIdentifier() {{
                                        imageDigest = "sunt";
                                        imageTag = "quo";
                                    }}),
                                }};
                                maxResults = 848009L;
                                nextToken = "pariatur";
                                registryId = "maxime";
                            }};, GetLifecyclePolicyPreviewXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_LIFECYCLE_POLICY_PREVIEW) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
                maxResults = "quidem";
                nextToken = "ipsam";
            }};            

            GetLifecyclePolicyPreviewResponse res = sdk.sdk.getLifecyclePolicyPreview(req);

            if (res.getLifecyclePolicyPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegistryPolicy

Retrieves the permissions policy for a registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegistryPolicyRequest;
import org.openapis.openapi.models.operations.GetRegistryPolicyResponse;
import org.openapis.openapi.models.operations.GetRegistryPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegistryPolicyRequest req = new GetRegistryPolicyRequest(                new java.util.HashMap<String, Object>() {{
                                put("nam", "eaque");
                                put("pariatur", "nemo");
                            }}, GetRegistryPolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_REGISTRY_POLICY) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            GetRegistryPolicyResponse res = sdk.sdk.getRegistryPolicy(req);

            if (res.getRegistryPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegistryScanningConfiguration

Retrieves the scanning configuration for a registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegistryScanningConfigurationRequest;
import org.openapis.openapi.models.operations.GetRegistryScanningConfigurationResponse;
import org.openapis.openapi.models.operations.GetRegistryScanningConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegistryScanningConfigurationRequest req = new GetRegistryScanningConfigurationRequest(                new java.util.HashMap<String, Object>() {{
                                put("nobis", "dolores");
                                put("quis", "totam");
                                put("dignissimos", "eaque");
                            }}, GetRegistryScanningConfigurationXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_REGISTRY_SCANNING_CONFIGURATION) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            GetRegistryScanningConfigurationResponse res = sdk.sdk.getRegistryScanningConfiguration(req);

            if (res.getRegistryScanningConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryPolicy

Retrieves the repository policy for the specified repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryPolicyRequest;
import org.openapis.openapi.models.operations.GetRepositoryPolicyResponse;
import org.openapis.openapi.models.operations.GetRepositoryPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRepositoryPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositoryPolicyRequest req = new GetRepositoryPolicyRequest(                new GetRepositoryPolicyRequest("vero") {{
                                registryId = "nostrum";
                            }};, GetRepositoryPolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_REPOSITORY_POLICY) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            GetRepositoryPolicyResponse res = sdk.sdk.getRepositoryPolicy(req);

            if (res.getRepositoryPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initiateLayerUpload

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateLayerUploadRequest;
import org.openapis.openapi.models.operations.InitiateLayerUploadResponse;
import org.openapis.openapi.models.operations.InitiateLayerUploadXAmzTargetEnum;
import org.openapis.openapi.models.shared.InitiateLayerUploadRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitiateLayerUploadRequest req = new InitiateLayerUploadRequest(                new InitiateLayerUploadRequest("blanditiis") {{
                                registryId = "error";
                            }};, InitiateLayerUploadXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_INITIATE_LAYER_UPLOAD) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "rerum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            InitiateLayerUploadResponse res = sdk.sdk.initiateLayerUpload(req);

            if (res.initiateLayerUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImages

<p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImagesRequest;
import org.openapis.openapi.models.operations.ListImagesResponse;
import org.openapis.openapi.models.operations.ListImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListImagesFilter;
import org.openapis.openapi.models.shared.ListImagesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImagesRequest req = new ListImagesRequest(                new ListImagesRequest("dolorum") {{
                                filter = new ListImagesFilter() {{
                                    tagStatus = TagStatusEnum.UNTAGGED;
                                }};;
                                maxResults = 864282L;
                                nextToken = "provident";
                                registryId = "nobis";
                            }};, ListImagesXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_LIST_IMAGES) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
                maxResults = "dolor";
                nextToken = "qui";
            }};            

            ListImagesResponse res = sdk.sdk.listImages(req);

            if (res.listImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List the tags for an Amazon ECR resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("hic");, ListTagsForResourceXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
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

## putImage

<p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutImageRequest;
import org.openapis.openapi.models.operations.PutImageResponse;
import org.openapis.openapi.models.operations.PutImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutImageRequest req = new PutImageRequest(                new PutImageRequest("veritatis", "ipsa") {{
                                imageDigest = "ipsa";
                                imageManifestMediaType = "iure";
                                imageTag = "odio";
                                registryId = "quaerat";
                            }};, PutImageXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            PutImageResponse res = sdk.sdk.putImage(req);

            if (res.putImageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putImageScanningConfiguration

<important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutImageScanningConfigurationRequest;
import org.openapis.openapi.models.operations.PutImageScanningConfigurationResponse;
import org.openapis.openapi.models.operations.PutImageScanningConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImageScanningConfiguration;
import org.openapis.openapi.models.shared.PutImageScanningConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutImageScanningConfigurationRequest req = new PutImageScanningConfigurationRequest(                new PutImageScanningConfigurationRequest(                new ImageScanningConfiguration() {{
                                                scanOnPush = false;
                                            }};, "fugiat") {{
                                registryId = "ab";
                            }};, PutImageScanningConfigurationXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE_SCANNING_CONFIGURATION) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
            }};            

            PutImageScanningConfigurationResponse res = sdk.sdk.putImageScanningConfiguration(req);

            if (res.putImageScanningConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putImageTagMutability

Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutImageTagMutabilityRequest;
import org.openapis.openapi.models.operations.PutImageTagMutabilityResponse;
import org.openapis.openapi.models.operations.PutImageTagMutabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImageTagMutabilityEnum;
import org.openapis.openapi.models.shared.PutImageTagMutabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutImageTagMutabilityRequest req = new PutImageTagMutabilityRequest(                new PutImageTagMutabilityRequest(ImageTagMutabilityEnum.IMMUTABLE, "asperiores") {{
                                registryId = "nihil";
                            }};, PutImageTagMutabilityXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE_TAG_MUTABILITY) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            PutImageTagMutabilityResponse res = sdk.sdk.putImageTagMutability(req);

            if (res.putImageTagMutabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLifecyclePolicy

Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLifecyclePolicyRequest;
import org.openapis.openapi.models.operations.PutLifecyclePolicyResponse;
import org.openapis.openapi.models.operations.PutLifecyclePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutLifecyclePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLifecyclePolicyRequest req = new PutLifecyclePolicyRequest(                new PutLifecyclePolicyRequest("optio", "accusamus") {{
                                registryId = "ad";
                            }};, PutLifecyclePolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_LIFECYCLE_POLICY) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
            }};            

            PutLifecyclePolicyResponse res = sdk.sdk.putLifecyclePolicy(req);

            if (res.putLifecyclePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRegistryPolicy

<p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRegistryPolicyRequest;
import org.openapis.openapi.models.operations.PutRegistryPolicyResponse;
import org.openapis.openapi.models.operations.PutRegistryPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRegistryPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRegistryPolicyRequest req = new PutRegistryPolicyRequest(                new PutRegistryPolicyRequest("alias");, PutRegistryPolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REGISTRY_POLICY) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            PutRegistryPolicyResponse res = sdk.sdk.putRegistryPolicy(req);

            if (res.putRegistryPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRegistryScanningConfiguration

Creates or updates the scanning configuration for your private registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRegistryScanningConfigurationRequest;
import org.openapis.openapi.models.operations.PutRegistryScanningConfigurationResponse;
import org.openapis.openapi.models.operations.PutRegistryScanningConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRegistryScanningConfigurationRequest;
import org.openapis.openapi.models.shared.RegistryScanningRule;
import org.openapis.openapi.models.shared.ScanFrequencyEnum;
import org.openapis.openapi.models.shared.ScanTypeEnum;
import org.openapis.openapi.models.shared.ScanningRepositoryFilter;
import org.openapis.openapi.models.shared.ScanningRepositoryFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRegistryScanningConfigurationRequest req = new PutRegistryScanningConfigurationRequest(                new PutRegistryScanningConfigurationRequest() {{
                                rules = new org.openapis.openapi.models.shared.RegistryScanningRule[]{{
                                    add(new RegistryScanningRule(                new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                                        add(new ScanningRepositoryFilter("accusamus", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "tempore";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                    }}, ScanFrequencyEnum.SCAN_ON_PUSH) {{
                                        repositoryFilters = new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                            add(new ScanningRepositoryFilter("iusto", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "harum";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                            add(new ScanningRepositoryFilter("quisquam", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "ipsum";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                        }};
                                        scanFrequency = ScanFrequencyEnum.MANUAL;
                                    }}),
                                    add(new RegistryScanningRule(                new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                                        add(new ScanningRepositoryFilter("sed", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "neque";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                        add(new ScanningRepositoryFilter("libero", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "vel";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                        add(new ScanningRepositoryFilter("deserunt", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "voluptas";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                    }}, ScanFrequencyEnum.CONTINUOUS_SCAN) {{
                                        repositoryFilters = new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                            add(new ScanningRepositoryFilter("sapiente", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "dolorem";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                            add(new ScanningRepositoryFilter("nihil", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "totam";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                        }};
                                        scanFrequency = ScanFrequencyEnum.SCAN_ON_PUSH;
                                    }}),
                                    add(new RegistryScanningRule(                new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                                        add(new ScanningRepositoryFilter("soluta", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "pariatur";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                        add(new ScanningRepositoryFilter("laborum", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "dicta";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                        add(new ScanningRepositoryFilter("incidunt", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "totam";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                        add(new ScanningRepositoryFilter("dolores", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "aspernatur";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                    }}, ScanFrequencyEnum.MANUAL) {{
                                        repositoryFilters = new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                            add(new ScanningRepositoryFilter("qui", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "incidunt";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                        }};
                                        scanFrequency = ScanFrequencyEnum.CONTINUOUS_SCAN;
                                    }}),
                                    add(new RegistryScanningRule(                new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                                        add(new ScanningRepositoryFilter("sunt", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                            filter = "odio";
                                                            filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                                        }}),
                                                    }}, ScanFrequencyEnum.CONTINUOUS_SCAN) {{
                                        repositoryFilters = new org.openapis.openapi.models.shared.ScanningRepositoryFilter[]{{
                                            add(new ScanningRepositoryFilter("quam", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "aliquid";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                            add(new ScanningRepositoryFilter("temporibus", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "molestias";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                            add(new ScanningRepositoryFilter("neque", ScanningRepositoryFilterTypeEnum.WILDCARD) {{
                                                filter = "qui";
                                                filterType = ScanningRepositoryFilterTypeEnum.WILDCARD;
                                            }}),
                                        }};
                                        scanFrequency = ScanFrequencyEnum.SCAN_ON_PUSH;
                                    }}),
                                }};
                                scanType = ScanTypeEnum.ENHANCED;
                            }};, PutRegistryScanningConfigurationXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REGISTRY_SCANNING_CONFIGURATION) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            PutRegistryScanningConfigurationResponse res = sdk.sdk.putRegistryScanningConfiguration(req);

            if (res.putRegistryScanningConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putReplicationConfiguration

<p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutReplicationConfigurationRequest;
import org.openapis.openapi.models.operations.PutReplicationConfigurationResponse;
import org.openapis.openapi.models.operations.PutReplicationConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutReplicationConfigurationRequest;
import org.openapis.openapi.models.shared.ReplicationConfiguration;
import org.openapis.openapi.models.shared.ReplicationDestination;
import org.openapis.openapi.models.shared.ReplicationRule;
import org.openapis.openapi.models.shared.RepositoryFilter;
import org.openapis.openapi.models.shared.RepositoryFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutReplicationConfigurationRequest req = new PutReplicationConfigurationRequest(                new PutReplicationConfigurationRequest(                new ReplicationConfiguration(                new org.openapis.openapi.models.shared.ReplicationRule[]{{
                                                                add(new ReplicationRule(                new org.openapis.openapi.models.shared.ReplicationDestination[]{{
                                                                                    add(new ReplicationDestination("porro", "doloribus") {{
                                                                                        region = "est";
                                                                                        registryId = "repellendus";
                                                                                    }}),
                                                                                }}) {{
                                                                    destinations = new org.openapis.openapi.models.shared.ReplicationDestination[]{{
                                                                        add(new ReplicationDestination("cupiditate", "aperiam") {{
                                                                            region = "quos";
                                                                            registryId = "tempore";
                                                                        }}),
                                                                        add(new ReplicationDestination("dolore", "labore") {{
                                                                            region = "delectus";
                                                                            registryId = "dolorem";
                                                                        }}),
                                                                        add(new ReplicationDestination("architecto", "quae") {{
                                                                            region = "adipisci";
                                                                            registryId = "dolorum";
                                                                        }}),
                                                                    }};
                                                                    repositoryFilters = new org.openapis.openapi.models.shared.RepositoryFilter[]{{
                                                                        add(new RepositoryFilter("itaque", RepositoryFilterTypeEnum.PREFIX_MATCH) {{
                                                                            filter = "quas";
                                                                            filterType = RepositoryFilterTypeEnum.PREFIX_MATCH;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }}););, PutReplicationConfigurationXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REPLICATION_CONFIGURATION) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cupiditate";
                xAmzDate = "qui";
                xAmzSecurityToken = "quae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "odio";
            }};            

            PutReplicationConfigurationResponse res = sdk.sdk.putReplicationConfiguration(req);

            if (res.putReplicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setRepositoryPolicy

Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetRepositoryPolicyRequest;
import org.openapis.openapi.models.operations.SetRepositoryPolicyResponse;
import org.openapis.openapi.models.operations.SetRepositoryPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetRepositoryPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetRepositoryPolicyRequest req = new SetRepositoryPolicyRequest(                new SetRepositoryPolicyRequest("voluptatibus", "quisquam") {{
                                force = false;
                                registryId = "vero";
                            }};, SetRepositoryPolicyXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_SET_REPOSITORY_POLICY) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "quis";
                xAmzCredential = "ipsum";
                xAmzDate = "delectus";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vero";
            }};            

            SetRepositoryPolicyResponse res = sdk.sdk.setRepositoryPolicy(req);

            if (res.setRepositoryPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startImageScan

Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartImageScanRequest;
import org.openapis.openapi.models.operations.StartImageScanResponse;
import org.openapis.openapi.models.operations.StartImageScanXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartImageScanRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartImageScanRequest req = new StartImageScanRequest(                new StartImageScanRequest(                new ImageIdentifier() {{
                                                imageDigest = "dignissimos";
                                                imageTag = "hic";
                                            }};, "distinctio") {{
                                registryId = "quod";
                            }};, StartImageScanXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_START_IMAGE_SCAN) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            StartImageScanResponse res = sdk.sdk.startImageScan(req);

            if (res.startImageScanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startLifecyclePolicyPreview

Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartLifecyclePolicyPreviewRequest;
import org.openapis.openapi.models.operations.StartLifecyclePolicyPreviewResponse;
import org.openapis.openapi.models.operations.StartLifecyclePolicyPreviewXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartLifecyclePolicyPreviewRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartLifecyclePolicyPreviewRequest req = new StartLifecyclePolicyPreviewRequest(                new StartLifecyclePolicyPreviewRequest("sequi") {{
                                lifecyclePolicyText = "natus";
                                registryId = "impedit";
                            }};, StartLifecyclePolicyPreviewXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_START_LIFECYCLE_POLICY_PREVIEW) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "exercitationem";
                xAmzDate = "nulla";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "maiores";
            }};            

            StartLifecyclePolicyPreviewResponse res = sdk.sdk.startLifecyclePolicyPreview(req);

            if (res.startLifecyclePolicyPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("iusto",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "ducimus";
                                                    value = "alias";
                                                }}),
                                                add(new Tag() {{
                                                    key = "officia";
                                                    value = "tempora";
                                                }}),
                                                add(new Tag() {{
                                                    key = "ipsam";
                                                    value = "ea";
                                                }}),
                                                add(new Tag() {{
                                                    key = "aspernatur";
                                                    value = "vel";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_TAG_RESOURCE) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
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

Deletes specified tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("quasi",                 new String[]{{
                                                add("nulla"),
                                                add("excepturi"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
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

## uploadLayerPart

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadLayerPartRequest;
import org.openapis.openapi.models.operations.UploadLayerPartResponse;
import org.openapis.openapi.models.operations.UploadLayerPartXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UploadLayerPartRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadLayerPartRequest req = new UploadLayerPartRequest(                new UploadLayerPartRequest("veniam", 399499L, 81101L, "magnam", "ea") {{
                                registryId = "quo";
                            }};, UploadLayerPartXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_UPLOAD_LAYER_PART) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            UploadLayerPartResponse res = sdk.sdk.uploadLayerPart(req);

            if (res.uploadLayerPartResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
