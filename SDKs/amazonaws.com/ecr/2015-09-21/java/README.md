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
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityResponse;
import org.openapis.openapi.models.operations.BatchCheckLayerAvailabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchCheckLayerAvailabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCheckLayerAvailabilityRequest req = new BatchCheckLayerAvailabilityRequest(                new BatchCheckLayerAvailabilityRequest(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla") {{
                                registryId = "corrupti";
                            }};, BatchCheckLayerAvailabilityXAmzTargetEnum.AMAZON_EC2_CONTAINER_REGISTRY_V20150921_BATCH_CHECK_LAYER_AVAILABILITY) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            BatchCheckLayerAvailabilityResponse res = sdk.batchCheckLayerAvailability(req);

            if (res.batchCheckLayerAvailabilityResponse != null) {
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

* [batchCheckLayerAvailability](docs/sdk/README.md#batchchecklayeravailability) - <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [batchDeleteImage](docs/sdk/README.md#batchdeleteimage) - <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
* [batchGetImage](docs/sdk/README.md#batchgetimage) - <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
* [batchGetRepositoryScanningConfiguration](docs/sdk/README.md#batchgetrepositoryscanningconfiguration) - Gets the scanning configuration for one or more repositories.
* [completeLayerUpload](docs/sdk/README.md#completelayerupload) - <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [createPullThroughCacheRule](docs/sdk/README.md#createpullthroughcacherule) - Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.
* [createRepository](docs/sdk/README.md#createrepository) - Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [deleteLifecyclePolicy](docs/sdk/README.md#deletelifecyclepolicy) - Deletes the lifecycle policy associated with the specified repository.
* [deletePullThroughCacheRule](docs/sdk/README.md#deletepullthroughcacherule) - Deletes a pull through cache rule.
* [deleteRegistryPolicy](docs/sdk/README.md#deleteregistrypolicy) - Deletes the registry permissions policy.
* [deleteRepository](docs/sdk/README.md#deleterepository) - Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
* [deleteRepositoryPolicy](docs/sdk/README.md#deleterepositorypolicy) - Deletes the repository policy associated with the specified repository.
* [describeImageReplicationStatus](docs/sdk/README.md#describeimagereplicationstatus) - Returns the replication status for a specified image.
* [describeImageScanFindings](docs/sdk/README.md#describeimagescanfindings) - Returns the scan findings for the specified image.
* [describeImages](docs/sdk/README.md#describeimages) - <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
* [describePullThroughCacheRules](docs/sdk/README.md#describepullthroughcacherules) - Returns the pull through cache rules for a registry.
* [describeRegistry](docs/sdk/README.md#describeregistry) - Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.
* [describeRepositories](docs/sdk/README.md#describerepositories) - Describes image repositories in a registry.
* [getAuthorizationToken](docs/sdk/README.md#getauthorizationtoken) - <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* [getDownloadUrlForLayer](docs/sdk/README.md#getdownloadurlforlayer) - <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [getLifecyclePolicy](docs/sdk/README.md#getlifecyclepolicy) - Retrieves the lifecycle policy for the specified repository.
* [getLifecyclePolicyPreview](docs/sdk/README.md#getlifecyclepolicypreview) - Retrieves the results of the lifecycle policy preview request for the specified repository.
* [getRegistryPolicy](docs/sdk/README.md#getregistrypolicy) - Retrieves the permissions policy for a registry.
* [getRegistryScanningConfiguration](docs/sdk/README.md#getregistryscanningconfiguration) - Retrieves the scanning configuration for a registry.
* [getRepositoryPolicy](docs/sdk/README.md#getrepositorypolicy) - Retrieves the repository policy for the specified repository.
* [initiateLayerUpload](docs/sdk/README.md#initiatelayerupload) - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [listImages](docs/sdk/README.md#listimages) - <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags for an Amazon ECR resource.
* [putImage](docs/sdk/README.md#putimage) - <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [putImageScanningConfiguration](docs/sdk/README.md#putimagescanningconfiguration) - <important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>
* [putImageTagMutability](docs/sdk/README.md#putimagetagmutability) - Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [putLifecyclePolicy](docs/sdk/README.md#putlifecyclepolicy) - Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.
* [putRegistryPolicy](docs/sdk/README.md#putregistrypolicy) - <p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* [putRegistryScanningConfiguration](docs/sdk/README.md#putregistryscanningconfiguration) - Creates or updates the scanning configuration for your private registry.
* [putReplicationConfiguration](docs/sdk/README.md#putreplicationconfiguration) - <p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>
* [setRepositoryPolicy](docs/sdk/README.md#setrepositorypolicy) - Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [startImageScan](docs/sdk/README.md#startimagescan) - Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [startLifecyclePolicyPreview](docs/sdk/README.md#startlifecyclepolicypreview) - Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
* [tagResource](docs/sdk/README.md#tagresource) - Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes specified tags from a resource.
* [uploadLayerPart](docs/sdk/README.md#uploadlayerpart) - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
