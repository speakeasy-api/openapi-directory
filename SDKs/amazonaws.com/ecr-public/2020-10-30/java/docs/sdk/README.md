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
                            }};, BatchCheckLayerAvailabilityXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_BATCH_CHECK_LAYER_AVAILABILITY) {{
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

<p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>

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
                            }};, BatchDeleteImageXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_BATCH_DELETE_IMAGE) {{
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

## completeLayerUpload

<p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompleteLayerUploadRequest req = new CompleteLayerUploadRequest(                new CompleteLayerUploadRequest(                new String[]{{
                                                add("dolorum"),
                                                add("dicta"),
                                                add("nam"),
                                                add("officia"),
                                            }}, "occaecati", "fugit") {{
                                registryId = "deleniti";
                            }};, CompleteLayerUploadXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_COMPLETE_LAYER_UPLOAD) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
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

## createRepository

Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRepositoryRequest;
import org.openapis.openapi.models.operations.CreateRepositoryResponse;
import org.openapis.openapi.models.operations.CreateRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRepositoryRequest;
import org.openapis.openapi.models.shared.RepositoryCatalogDataInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRepositoryRequest req = new CreateRepositoryRequest(                new CreateRepositoryRequest("impedit") {{
                                catalogData = new RepositoryCatalogDataInput() {{
                                    aboutText = "cum";
                                    architectures = new String[]{{
                                        add("ipsum"),
                                        add("excepturi"),
                                    }};
                                    description = "aspernatur";
                                    logoImageBlob = "perferendis";
                                    operatingSystems = new String[]{{
                                        add("natus"),
                                        add("sed"),
                                    }};
                                    usageText = "iste";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "natus";
                                        value = "laboriosam";
                                    }}),
                                }};
                            }};, CreateRepositoryXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_CREATE_REPOSITORY) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
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

## deleteRepository

Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.

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
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRepositoryRequest req = new DeleteRepositoryRequest(                new DeleteRepositoryRequest("quidem") {{
                                force = false;
                                registryId = "architecto";
                            }};, DeleteRepositoryXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_DELETE_REPOSITORY) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
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

Deletes the repository policy that's associated with the specified repository.

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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRepositoryPolicyRequest req = new DeleteRepositoryPolicyRequest(                new DeleteRepositoryPolicyRequest("explicabo") {{
                                registryId = "nobis";
                            }};, DeleteRepositoryPolicyXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_DELETE_REPOSITORY_POLICY) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
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

## describeImageTags

Returns the image tag details for a repository in a public registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImageTagsRequest;
import org.openapis.openapi.models.operations.DescribeImageTagsResponse;
import org.openapis.openapi.models.operations.DescribeImageTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImageTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImageTagsRequest req = new DescribeImageTagsRequest(                new DescribeImageTagsRequest("doloribus") {{
                                maxResults = 958950L;
                                nextToken = "architecto";
                                registryId = "mollitia";
                            }};, DescribeImageTagsXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_DESCRIBE_IMAGE_TAGS) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
                maxResults = "commodi";
                nextToken = "quam";
            }};            

            DescribeImageTagsResponse res = sdk.sdk.describeImageTags(req);

            if (res.describeImageTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImages

<p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImagesRequest;
import org.openapis.openapi.models.operations.DescribeImagesResponse;
import org.openapis.openapi.models.operations.DescribeImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeImagesRequest;
import org.openapis.openapi.models.shared.ImageIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImagesRequest req = new DescribeImagesRequest(                new DescribeImagesRequest("velit") {{
                                imageIds = new org.openapis.openapi.models.shared.ImageIdentifier[]{{
                                    add(new ImageIdentifier() {{
                                        imageDigest = "quia";
                                        imageTag = "quis";
                                    }}),
                                    add(new ImageIdentifier() {{
                                        imageDigest = "vitae";
                                        imageTag = "laborum";
                                    }}),
                                    add(new ImageIdentifier() {{
                                        imageDigest = "animi";
                                        imageTag = "enim";
                                    }}),
                                }};
                                maxResults = 138183L;
                                nextToken = "quo";
                                registryId = "sequi";
                            }};, DescribeImagesXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_DESCRIBE_IMAGES) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
                maxResults = "temporibus";
                nextToken = "laborum";
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

## describeRegistries

Returns details for a public registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRegistriesRequest;
import org.openapis.openapi.models.operations.DescribeRegistriesResponse;
import org.openapis.openapi.models.operations.DescribeRegistriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRegistriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRegistriesRequest req = new DescribeRegistriesRequest(                new DescribeRegistriesRequest() {{
                                maxResults = 971945L;
                                nextToken = "voluptatibus";
                            }};, DescribeRegistriesXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_DESCRIBE_REGISTRIES) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
                maxResults = "cum";
                nextToken = "perferendis";
            }};            

            DescribeRegistriesResponse res = sdk.sdk.describeRegistries(req);

            if (res.describeRegistriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRepositories

Describes repositories that are in a public registry.

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
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRepositoriesRequest req = new DescribeRepositoriesRequest(                new DescribeRepositoriesRequest() {{
                                maxResults = 441711L;
                                nextToken = "ut";
                                registryId = "maiores";
                                repositoryNames = new String[]{{
                                    add("corporis"),
                                }};
                            }};, DescribeRepositoriesXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_DESCRIBE_REPOSITORIES) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
                maxResults = "repudiandae";
                nextToken = "quae";
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

Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthorizationTokenRequest;
import org.openapis.openapi.models.operations.GetAuthorizationTokenResponse;
import org.openapis.openapi.models.operations.GetAuthorizationTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthorizationTokenRequest req = new GetAuthorizationTokenRequest(                new java.util.HashMap<String, Object>() {{
                                put("molestias", "excepturi");
                                put("pariatur", "modi");
                                put("praesentium", "rem");
                            }}, GetAuthorizationTokenXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_GET_AUTHORIZATION_TOKEN) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
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

## getRegistryCatalogData

Retrieves catalog metadata for a public registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegistryCatalogDataRequest;
import org.openapis.openapi.models.operations.GetRegistryCatalogDataResponse;
import org.openapis.openapi.models.operations.GetRegistryCatalogDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegistryCatalogDataRequest req = new GetRegistryCatalogDataRequest(                new java.util.HashMap<String, Object>() {{
                                put("est", "quibusdam");
                            }}, GetRegistryCatalogDataXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_GET_REGISTRY_CATALOG_DATA) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GetRegistryCatalogDataResponse res = sdk.sdk.getRegistryCatalogData(req);

            if (res.getRegistryCatalogDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoryCatalogData

Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoryCatalogDataRequest;
import org.openapis.openapi.models.operations.GetRepositoryCatalogDataResponse;
import org.openapis.openapi.models.operations.GetRepositoryCatalogDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRepositoryCatalogDataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositoryCatalogDataRequest req = new GetRepositoryCatalogDataRequest(                new GetRepositoryCatalogDataRequest("cupiditate") {{
                                registryId = "quos";
                            }};, GetRepositoryCatalogDataXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_CATALOG_DATA) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetRepositoryCatalogDataResponse res = sdk.sdk.getRepositoryCatalogData(req);

            if (res.getRepositoryCatalogDataResponse != null) {
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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRepositoryPolicyRequest req = new GetRepositoryPolicyRequest(                new GetRepositoryPolicyRequest("tempora") {{
                                registryId = "facilis";
                            }};, GetRepositoryPolicyXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_POLICY) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
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

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitiateLayerUploadRequest req = new InitiateLayerUploadRequest(                new InitiateLayerUploadRequest("provident") {{
                                registryId = "necessitatibus";
                            }};, InitiateLayerUploadXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_INITIATE_LAYER_UPLOAD) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
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

## listTagsForResource

List the tags for an Amazon ECR Public resource.

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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("illum");, ListTagsForResourceXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
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

<p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutImageRequest req = new PutImageRequest(                new PutImageRequest("laborum", "accusamus") {{
                                imageDigest = "non";
                                imageManifestMediaType = "occaecati";
                                imageTag = "enim";
                                registryId = "accusamus";
                            }};, PutImageXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_PUT_IMAGE) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
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

## putRegistryCatalogData

Create or update the catalog data for a public registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRegistryCatalogDataRequest;
import org.openapis.openapi.models.operations.PutRegistryCatalogDataResponse;
import org.openapis.openapi.models.operations.PutRegistryCatalogDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRegistryCatalogDataRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRegistryCatalogDataRequest req = new PutRegistryCatalogDataRequest(                new PutRegistryCatalogDataRequest() {{
                                displayName = "amet";
                            }};, PutRegistryCatalogDataXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_PUT_REGISTRY_CATALOG_DATA) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            PutRegistryCatalogDataResponse res = sdk.sdk.putRegistryCatalogData(req);

            if (res.putRegistryCatalogDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoryCatalogData

Creates or updates the catalog data for a repository in a public registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoryCatalogDataRequest;
import org.openapis.openapi.models.operations.PutRepositoryCatalogDataResponse;
import org.openapis.openapi.models.operations.PutRepositoryCatalogDataXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRepositoryCatalogDataRequest;
import org.openapis.openapi.models.shared.RepositoryCatalogDataInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRepositoryCatalogDataRequest req = new PutRepositoryCatalogDataRequest(                new PutRepositoryCatalogDataRequest(                new RepositoryCatalogDataInput() {{
                                                aboutText = "magnam";
                                                architectures = new String[]{{
                                                    add("id"),
                                                    add("labore"),
                                                    add("labore"),
                                                }};
                                                description = "suscipit";
                                                logoImageBlob = "natus";
                                                operatingSystems = new String[]{{
                                                    add("eum"),
                                                    add("vero"),
                                                    add("aspernatur"),
                                                }};
                                                usageText = "architecto";
                                            }};, "magnam") {{
                                registryId = "et";
                            }};, PutRepositoryCatalogDataXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_PUT_REPOSITORY_CATALOG_DATA) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            PutRepositoryCatalogDataResponse res = sdk.sdk.putRepositoryCatalogData(req);

            if (res.putRepositoryCatalogDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setRepositoryPolicy

Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetRepositoryPolicyRequest req = new SetRepositoryPolicyRequest(                new SetRepositoryPolicyRequest("mollitia", "ad") {{
                                force = false;
                                registryId = "eum";
                            }};, SetRepositoryPolicyXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_SET_REPOSITORY_POLICY) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "odit";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "doloribus";
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

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

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
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("eius",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "deleniti";
                                                    value = "facilis";
                                                }}),
                                                add(new Tag() {{
                                                    key = "in";
                                                    value = "architecto";
                                                }}),
                                                add(new Tag() {{
                                                    key = "architecto";
                                                    value = "repudiandae";
                                                }}),
                                                add(new Tag() {{
                                                    key = "ullam";
                                                    value = "expedita";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
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
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("praesentium",                 new String[]{{
                                                add("magni"),
                                                add("sunt"),
                                                add("quo"),
                                            }});, UntagResourceXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
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

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadLayerPartRequest req = new UploadLayerPartRequest(                new UploadLayerPartRequest("ab", 982575L, 697429L, "ipsam", "voluptate") {{
                                registryId = "autem";
                            }};, UploadLayerPartXAmzTargetEnum.SPENCER_FRONTEND_SERVICE_UPLOAD_LAYER_PART) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
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
