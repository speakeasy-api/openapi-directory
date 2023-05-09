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
                            }};, BatchCheckLayerAvailabilityXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_BATCH_CHECK_LAYER_AVAILABILITY) {{
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

* [batchCheckLayerAvailability](docs/sdk/README.md#batchchecklayeravailability) - <p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [batchDeleteImage](docs/sdk/README.md#batchdeleteimage) - <p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>
* [completeLayerUpload](docs/sdk/README.md#completelayerupload) - <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [createRepository](docs/sdk/README.md#createrepository) - Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [deleteRepository](docs/sdk/README.md#deleterepository) - Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.
* [deleteRepositoryPolicy](docs/sdk/README.md#deleterepositorypolicy) - Deletes the repository policy that's associated with the specified repository.
* [describeImageTags](docs/sdk/README.md#describeimagetags) - Returns the image tag details for a repository in a public registry.
* [describeImages](docs/sdk/README.md#describeimages) - <p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>
* [describeRegistries](docs/sdk/README.md#describeregistries) - Returns details for a public registry.
* [describeRepositories](docs/sdk/README.md#describerepositories) - Describes repositories that are in a public registry.
* [getAuthorizationToken](docs/sdk/README.md#getauthorizationtoken) - Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
* [getRegistryCatalogData](docs/sdk/README.md#getregistrycatalogdata) - Retrieves catalog metadata for a public registry.
* [getRepositoryCatalogData](docs/sdk/README.md#getrepositorycatalogdata) - Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
* [getRepositoryPolicy](docs/sdk/README.md#getrepositorypolicy) - Retrieves the repository policy for the specified repository.
* [initiateLayerUpload](docs/sdk/README.md#initiatelayerupload) - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags for an Amazon ECR Public resource.
* [putImage](docs/sdk/README.md#putimage) - <p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [putRegistryCatalogData](docs/sdk/README.md#putregistrycatalogdata) - Create or update the catalog data for a public registry.
* [putRepositoryCatalogData](docs/sdk/README.md#putrepositorycatalogdata) - Creates or updates the catalog data for a repository in a public registry.
* [setRepositoryPolicy](docs/sdk/README.md#setrepositorypolicy) - Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [tagResource](docs/sdk/README.md#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes specified tags from a resource.
* [uploadLayerPart](docs/sdk/README.md#uploadlayerpart) - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
