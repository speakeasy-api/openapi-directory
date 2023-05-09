# SDK

## Overview

<fullname>Amazon Elastic Container Registry</fullname> <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images.</p> <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ecr/>
### Available Operations

* [BatchCheckLayerAvailability](#batchchecklayeravailability) - <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [BatchDeleteImage](#batchdeleteimage) - <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
* [BatchGetImage](#batchgetimage) - <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
* [BatchGetRepositoryScanningConfiguration](#batchgetrepositoryscanningconfiguration) - Gets the scanning configuration for one or more repositories.
* [CompleteLayerUpload](#completelayerupload) - <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [CreatePullThroughCacheRule](#createpullthroughcacherule) - Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.
* [CreateRepository](#createrepository) - Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [DeleteLifecyclePolicy](#deletelifecyclepolicy) - Deletes the lifecycle policy associated with the specified repository.
* [DeletePullThroughCacheRule](#deletepullthroughcacherule) - Deletes a pull through cache rule.
* [DeleteRegistryPolicy](#deleteregistrypolicy) - Deletes the registry permissions policy.
* [DeleteRepository](#deleterepository) - Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
* [DeleteRepositoryPolicy](#deleterepositorypolicy) - Deletes the repository policy associated with the specified repository.
* [DescribeImageReplicationStatus](#describeimagereplicationstatus) - Returns the replication status for a specified image.
* [DescribeImageScanFindings](#describeimagescanfindings) - Returns the scan findings for the specified image.
* [DescribeImages](#describeimages) - <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
* [DescribePullThroughCacheRules](#describepullthroughcacherules) - Returns the pull through cache rules for a registry.
* [DescribeRegistry](#describeregistry) - Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.
* [DescribeRepositories](#describerepositories) - Describes image repositories in a registry.
* [GetAuthorizationToken](#getauthorizationtoken) - <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* [GetDownloadURLForLayer](#getdownloadurlforlayer) - <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [GetLifecyclePolicy](#getlifecyclepolicy) - Retrieves the lifecycle policy for the specified repository.
* [GetLifecyclePolicyPreview](#getlifecyclepolicypreview) - Retrieves the results of the lifecycle policy preview request for the specified repository.
* [GetRegistryPolicy](#getregistrypolicy) - Retrieves the permissions policy for a registry.
* [GetRegistryScanningConfiguration](#getregistryscanningconfiguration) - Retrieves the scanning configuration for a registry.
* [GetRepositoryPolicy](#getrepositorypolicy) - Retrieves the repository policy for the specified repository.
* [InitiateLayerUpload](#initiatelayerupload) - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [ListImages](#listimages) - <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
* [ListTagsForResource](#listtagsforresource) - List the tags for an Amazon ECR resource.
* [PutImage](#putimage) - <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [PutImageScanningConfiguration](#putimagescanningconfiguration) - <important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>
* [PutImageTagMutability](#putimagetagmutability) - Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [PutLifecyclePolicy](#putlifecyclepolicy) - Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.
* [PutRegistryPolicy](#putregistrypolicy) - <p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* [PutRegistryScanningConfiguration](#putregistryscanningconfiguration) - Creates or updates the scanning configuration for your private registry.
* [PutReplicationConfiguration](#putreplicationconfiguration) - <p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>
* [SetRepositoryPolicy](#setrepositorypolicy) - Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [StartImageScan](#startimagescan) - Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [StartLifecyclePolicyPreview](#startlifecyclepolicypreview) - Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
* [TagResource](#tagresource) - Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
* [UntagResource](#untagresource) - Deletes specified tags from a resource.
* [UploadLayerPart](#uploadlayerpart) - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

## BatchCheckLayerAvailability

<p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchCheckLayerAvailability(ctx, operations.BatchCheckLayerAvailabilityRequest{
        BatchCheckLayerAvailabilityRequest: shared.BatchCheckLayerAvailabilityRequest{
            LayerDigests: []string{
                "debitis",
                "ipsa",
            },
            RegistryID: sdk.String("delectus"),
            RepositoryName: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.BatchCheckLayerAvailabilityXAmzTargetEnumAmazonEc2ContainerRegistryV20150921BatchCheckLayerAvailability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCheckLayerAvailabilityResponse != nil {
        // handle response
    }
}
```

## BatchDeleteImage

<p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteImage(ctx, operations.BatchDeleteImageRequest{
        BatchDeleteImageRequest: shared.BatchDeleteImageRequest{
            ImageIds: []shared.ImageIdentifier{
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("recusandae"),
                    ImageTag: sdk.String("temporibus"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("ab"),
                    ImageTag: sdk.String("quis"),
                },
            },
            RegistryID: sdk.String("veritatis"),
            RepositoryName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.BatchDeleteImageXAmzTargetEnumAmazonEc2ContainerRegistryV20150921BatchDeleteImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteImageResponse != nil {
        // handle response
    }
}
```

## BatchGetImage

<p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetImage(ctx, operations.BatchGetImageRequest{
        BatchGetImageRequest: shared.BatchGetImageRequest{
            AcceptedMediaTypes: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            ImageIds: []shared.ImageIdentifier{
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("totam"),
                    ImageTag: sdk.String("porro"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("dolorum"),
                    ImageTag: sdk.String("dicta"),
                },
            },
            RegistryID: sdk.String("nam"),
            RepositoryName: "officia",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.BatchGetImageXAmzTargetEnumAmazonEc2ContainerRegistryV20150921BatchGetImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetImageResponse != nil {
        // handle response
    }
}
```

## BatchGetRepositoryScanningConfiguration

Gets the scanning configuration for one or more repositories.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetRepositoryScanningConfiguration(ctx, operations.BatchGetRepositoryScanningConfigurationRequest{
        BatchGetRepositoryScanningConfigurationRequest: shared.BatchGetRepositoryScanningConfigurationRequest{
            RepositoryNames: []string{
                "molestiae",
                "modi",
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.BatchGetRepositoryScanningConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921BatchGetRepositoryScanningConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRepositoryScanningConfigurationResponse != nil {
        // handle response
    }
}
```

## CompleteLayerUpload

<p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompleteLayerUpload(ctx, operations.CompleteLayerUploadRequest{
        CompleteLayerUploadRequest: shared.CompleteLayerUploadRequest{
            LayerDigests: []string{
                "ad",
            },
            RegistryID: sdk.String("natus"),
            RepositoryName: "sed",
            UploadID: "iste",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.CompleteLayerUploadXAmzTargetEnumAmazonEc2ContainerRegistryV20150921CompleteLayerUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteLayerUploadResponse != nil {
        // handle response
    }
}
```

## CreatePullThroughCacheRule

Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePullThroughCacheRule(ctx, operations.CreatePullThroughCacheRuleRequest{
        CreatePullThroughCacheRuleRequest: shared.CreatePullThroughCacheRuleRequest{
            EcrRepositoryPrefix: "corporis",
            RegistryID: sdk.String("iste"),
            UpstreamRegistryURL: "iure",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.CreatePullThroughCacheRuleXAmzTargetEnumAmazonEc2ContainerRegistryV20150921CreatePullThroughCacheRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePullThroughCacheRuleResponse != nil {
        // handle response
    }
}
```

## CreateRepository

Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRepository(ctx, operations.CreateRepositoryRequest{
        CreateRepositoryRequest: shared.CreateRepositoryRequest{
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                EncryptionType: shared.EncryptionTypeEnumKms,
                KmsKey: sdk.String("dolores"),
            },
            ImageScanningConfiguration: &shared.ImageScanningConfiguration{
                ScanOnPush: sdk.Bool(false),
            },
            ImageTagMutability: shared.ImageTagMutabilityEnumMutable.ToPointer(),
            RegistryID: sdk.String("corporis"),
            RepositoryName: "explicabo",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("enim"),
                    Value: sdk.String("omnis"),
                },
                shared.Tag{
                    Key: sdk.String("nemo"),
                    Value: sdk.String("minima"),
                },
                shared.Tag{
                    Key: sdk.String("excepturi"),
                    Value: sdk.String("accusantium"),
                },
                shared.Tag{
                    Key: sdk.String("iure"),
                    Value: sdk.String("culpa"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.CreateRepositoryXAmzTargetEnumAmazonEc2ContainerRegistryV20150921CreateRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRepositoryResponse != nil {
        // handle response
    }
}
```

## DeleteLifecyclePolicy

Deletes the lifecycle policy associated with the specified repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteLifecyclePolicy(ctx, operations.DeleteLifecyclePolicyRequest{
        DeleteLifecyclePolicyRequest: shared.DeleteLifecyclePolicyRequest{
            RegistryID: sdk.String("repellat"),
            RepositoryName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DeleteLifecyclePolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteLifecyclePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLifecyclePolicyResponse != nil {
        // handle response
    }
}
```

## DeletePullThroughCacheRule

Deletes a pull through cache rule.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePullThroughCacheRule(ctx, operations.DeletePullThroughCacheRuleRequest{
        DeletePullThroughCacheRuleRequest: shared.DeletePullThroughCacheRuleRequest{
            EcrRepositoryPrefix: "quia",
            RegistryID: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.DeletePullThroughCacheRuleXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeletePullThroughCacheRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePullThroughCacheRuleResponse != nil {
        // handle response
    }
}
```

## DeleteRegistryPolicy

Deletes the registry permissions policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRegistryPolicy(ctx, operations.DeleteRegistryPolicyRequest{
        RequestBody: map[string]interface{}{
            "ipsam": "id",
            "possimus": "aut",
            "quasi": "error",
            "temporibus": "laborum",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DeleteRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteRegistryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRegistryPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteRepository

Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRepository(ctx, operations.DeleteRepositoryRequest{
        DeleteRepositoryRequest: shared.DeleteRepositoryRequest{
            Force: sdk.Bool(false),
            RegistryID: sdk.String("ipsa"),
            RepositoryName: "omnis",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteRepositoryXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRepositoryResponse != nil {
        // handle response
    }
}
```

## DeleteRepositoryPolicy

Deletes the repository policy associated with the specified repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRepositoryPolicy(ctx, operations.DeleteRepositoryPolicyRequest{
        DeleteRepositoryPolicyRequest: shared.DeleteRepositoryPolicyRequest{
            RegistryID: sdk.String("dicta"),
            RepositoryName: "corporis",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.DeleteRepositoryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteRepositoryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRepositoryPolicyResponse != nil {
        // handle response
    }
}
```

## DescribeImageReplicationStatus

Returns the replication status for a specified image.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeImageReplicationStatus(ctx, operations.DescribeImageReplicationStatusRequest{
        DescribeImageReplicationStatusRequest: shared.DescribeImageReplicationStatusRequest{
            ImageID: shared.ImageIdentifier{
                ImageDigest: sdk.String("repudiandae"),
                ImageTag: sdk.String("quae"),
            },
            RegistryID: sdk.String("ipsum"),
            RepositoryName: "quidem",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.DescribeImageReplicationStatusXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeImageReplicationStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageReplicationStatusResponse != nil {
        // handle response
    }
}
```

## DescribeImageScanFindings

Returns the scan findings for the specified image.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeImageScanFindings(ctx, operations.DescribeImageScanFindingsRequest{
        DescribeImageScanFindingsRequest: shared.DescribeImageScanFindingsRequest{
            ImageID: shared.ImageIdentifier{
                ImageDigest: sdk.String("quasi"),
                ImageTag: sdk.String("repudiandae"),
            },
            MaxResults: sdk.Int64(575947),
            NextToken: sdk.String("veritatis"),
            RegistryID: sdk.String("itaque"),
            RepositoryName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DescribeImageScanFindingsXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeImageScanFindings,
        MaxResults: sdk.String("quibusdam"),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageScanFindingsResponse != nil {
        // handle response
    }
}
```

## DescribeImages

<p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeImages(ctx, operations.DescribeImagesRequest{
        DescribeImagesRequest: shared.DescribeImagesRequest{
            Filter: &shared.DescribeImagesFilter{
                TagStatus: shared.TagStatusEnumTagged.ToPointer(),
            },
            ImageIds: []shared.ImageIdentifier{
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("aliquid"),
                    ImageTag: sdk.String("cupiditate"),
                },
            },
            MaxResults: sdk.Int64(552822),
            NextToken: sdk.String("perferendis"),
            RegistryID: sdk.String("magni"),
            RepositoryName: "assumenda",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeImagesXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeImages,
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImagesResponse != nil {
        // handle response
    }
}
```

## DescribePullThroughCacheRules

Returns the pull through cache rules for a registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribePullThroughCacheRules(ctx, operations.DescribePullThroughCacheRulesRequest{
        DescribePullThroughCacheRulesRequest: shared.DescribePullThroughCacheRulesRequest{
            EcrRepositoryPrefixes: []string{
                "eum",
                "non",
                "eligendi",
                "sint",
            },
            MaxResults: sdk.Int64(396098),
            NextToken: sdk.String("provident"),
            RegistryID: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.DescribePullThroughCacheRulesXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribePullThroughCacheRules,
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePullThroughCacheRulesResponse != nil {
        // handle response
    }
}
```

## DescribeRegistry

Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRegistry(ctx, operations.DescribeRegistryRequest{
        RequestBody: map[string]interface{}{
            "rerum": "dicta",
            "magnam": "cumque",
            "facere": "ea",
            "aliquid": "laborum",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DescribeRegistryXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeRegistry,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRegistryResponse != nil {
        // handle response
    }
}
```

## DescribeRepositories

Describes image repositories in a registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRepositories(ctx, operations.DescribeRepositoriesRequest{
        DescribeRepositoriesRequest: shared.DescribeRepositoriesRequest{
            MaxResults: sdk.Int64(588465),
            NextToken: sdk.String("nam"),
            RegistryID: sdk.String("id"),
            RepositoryNames: []string{
                "deleniti",
                "sapiente",
                "amet",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DescribeRepositoriesXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeRepositories,
        MaxResults: sdk.String("nihil"),
        NextToken: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRepositoriesResponse != nil {
        // handle response
    }
}
```

## GetAuthorizationToken

<p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAuthorizationToken(ctx, operations.GetAuthorizationTokenRequest{
        GetAuthorizationTokenRequest: shared.GetAuthorizationTokenRequest{
            RegistryIds: []string{
                "id",
                "labore",
                "labore",
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetAuthorizationTokenXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetAuthorizationToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthorizationTokenResponse != nil {
        // handle response
    }
}
```

## GetDownloadURLForLayer

<p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDownloadURLForLayer(ctx, operations.GetDownloadURLForLayerRequest{
        GetDownloadURLForLayerRequest: shared.GetDownloadURLForLayerRequest{
            LayerDigest: "magnam",
            RegistryID: sdk.String("et"),
            RepositoryName: "excepturi",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.GetDownloadURLForLayerXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetDownloadURLForLayer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDownloadURLForLayerResponse != nil {
        // handle response
    }
}
```

## GetLifecyclePolicy

Retrieves the lifecycle policy for the specified repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLifecyclePolicy(ctx, operations.GetLifecyclePolicyRequest{
        GetLifecyclePolicyRequest: shared.GetLifecyclePolicyRequest{
            RegistryID: sdk.String("mollitia"),
            RepositoryName: "ad",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.GetLifecyclePolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetLifecyclePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLifecyclePolicyResponse != nil {
        // handle response
    }
}
```

## GetLifecyclePolicyPreview

Retrieves the results of the lifecycle policy preview request for the specified repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLifecyclePolicyPreview(ctx, operations.GetLifecyclePolicyPreviewRequest{
        GetLifecyclePolicyPreviewRequest: shared.GetLifecyclePolicyPreviewRequest{
            Filter: &shared.LifecyclePolicyPreviewFilter{
                TagStatus: shared.TagStatusEnumAny.ToPointer(),
            },
            ImageIds: []shared.ImageIdentifier{
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("eius"),
                    ImageTag: sdk.String("maxime"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("deleniti"),
                    ImageTag: sdk.String("facilis"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("in"),
                    ImageTag: sdk.String("architecto"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("architecto"),
                    ImageTag: sdk.String("repudiandae"),
                },
            },
            MaxResults: sdk.Int64(352312),
            NextToken: sdk.String("expedita"),
            RegistryID: sdk.String("nihil"),
            RepositoryName: "repellat",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.GetLifecyclePolicyPreviewXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview,
        MaxResults: sdk.String("natus"),
        NextToken: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLifecyclePolicyPreviewResponse != nil {
        // handle response
    }
}
```

## GetRegistryPolicy

Retrieves the permissions policy for a registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRegistryPolicy(ctx, operations.GetRegistryPolicyRequest{
        RequestBody: map[string]interface{}{
            "quo": "illum",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.GetRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetRegistryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegistryPolicyResponse != nil {
        // handle response
    }
}
```

## GetRegistryScanningConfiguration

Retrieves the scanning configuration for a registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRegistryScanningConfiguration(ctx, operations.GetRegistryScanningConfigurationRequest{
        RequestBody: map[string]interface{}{
            "maiores": "quidem",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.GetRegistryScanningConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetRegistryScanningConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegistryScanningConfigurationResponse != nil {
        // handle response
    }
}
```

## GetRepositoryPolicy

Retrieves the repository policy for the specified repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRepositoryPolicy(ctx, operations.GetRepositoryPolicyRequest{
        GetRepositoryPolicyRequest: shared.GetRepositoryPolicyRequest{
            RegistryID: sdk.String("voluptatibus"),
            RepositoryName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.GetRepositoryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetRepositoryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepositoryPolicyResponse != nil {
        // handle response
    }
}
```

## InitiateLayerUpload

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.InitiateLayerUpload(ctx, operations.InitiateLayerUploadRequest{
        InitiateLayerUploadRequest: shared.InitiateLayerUploadRequest{
            RegistryID: sdk.String("nobis"),
            RepositoryName: "dolores",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.InitiateLayerUploadXAmzTargetEnumAmazonEc2ContainerRegistryV20150921InitiateLayerUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitiateLayerUploadResponse != nil {
        // handle response
    }
}
```

## ListImages

<p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImages(ctx, operations.ListImagesRequest{
        ListImagesRequest: shared.ListImagesRequest{
            Filter: &shared.ListImagesFilter{
                TagStatus: shared.TagStatusEnumTagged.ToPointer(),
            },
            MaxResults: sdk.Int64(170986),
            NextToken: sdk.String("minus"),
            RegistryID: sdk.String("quam"),
            RepositoryName: "dolor",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.ListImagesXAmzTargetEnumAmazonEc2ContainerRegistryV20150921ListImages,
        MaxResults: sdk.String("voluptatem"),
        NextToken: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImagesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for an Amazon ECR resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonEc2ContainerRegistryV20150921ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutImage

<p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutImage(ctx, operations.PutImageRequest{
        PutImageRequest: shared.PutImageRequest{
            ImageDigest: sdk.String("earum"),
            ImageManifest: "modi",
            ImageManifestMediaType: sdk.String("iste"),
            ImageTag: sdk.String("dolorum"),
            RegistryID: sdk.String("deleniti"),
            RepositoryName: "pariatur",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.PutImageXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImageResponse != nil {
        // handle response
    }
}
```

## PutImageScanningConfiguration

<important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutImageScanningConfiguration(ctx, operations.PutImageScanningConfigurationRequest{
        PutImageScanningConfigurationRequest: shared.PutImageScanningConfigurationRequest{
            ImageScanningConfiguration: shared.ImageScanningConfiguration{
                ScanOnPush: sdk.Bool(false),
            },
            RegistryID: sdk.String("dolorem"),
            RepositoryName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.PutImageScanningConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutImageScanningConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImageScanningConfigurationResponse != nil {
        // handle response
    }
}
```

## PutImageTagMutability

Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutImageTagMutability(ctx, operations.PutImageTagMutabilityRequest{
        PutImageTagMutabilityRequest: shared.PutImageTagMutabilityRequest{
            ImageTagMutability: shared.ImageTagMutabilityEnumMutable,
            RegistryID: sdk.String("reiciendis"),
            RepositoryName: "amet",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.PutImageTagMutabilityXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutImageTagMutability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImageTagMutabilityResponse != nil {
        // handle response
    }
}
```

## PutLifecyclePolicy

Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutLifecyclePolicy(ctx, operations.PutLifecyclePolicyRequest{
        PutLifecyclePolicyRequest: shared.PutLifecyclePolicyRequest{
            LifecyclePolicyText: "quaerat",
            RegistryID: sdk.String("accusamus"),
            RepositoryName: "quidem",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.PutLifecyclePolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutLifecyclePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutLifecyclePolicyResponse != nil {
        // handle response
    }
}
```

## PutRegistryPolicy

<p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutRegistryPolicy(ctx, operations.PutRegistryPolicyRequest{
        PutRegistryPolicyRequest: shared.PutRegistryPolicyRequest{
            PolicyText: "ab",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.PutRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutRegistryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRegistryPolicyResponse != nil {
        // handle response
    }
}
```

## PutRegistryScanningConfiguration

Creates or updates the scanning configuration for your private registry.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutRegistryScanningConfiguration(ctx, operations.PutRegistryScanningConfigurationRequest{
        PutRegistryScanningConfigurationRequest: shared.PutRegistryScanningConfigurationRequest{
            Rules: []shared.RegistryScanningRule{
                shared.RegistryScanningRule{
                    RepositoryFilters: []shared.ScanningRepositoryFilter{
                        shared.ScanningRepositoryFilter{
                            Filter: "asperiores",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                        shared.ScanningRepositoryFilter{
                            Filter: "nihil",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                        shared.ScanningRepositoryFilter{
                            Filter: "ipsum",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                    },
                    ScanFrequency: shared.ScanFrequencyEnumContinuousScan,
                },
                shared.RegistryScanningRule{
                    RepositoryFilters: []shared.ScanningRepositoryFilter{
                        shared.ScanningRepositoryFilter{
                            Filter: "saepe",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                        shared.ScanningRepositoryFilter{
                            Filter: "eius",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                        shared.ScanningRepositoryFilter{
                            Filter: "aspernatur",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                    },
                    ScanFrequency: shared.ScanFrequencyEnumScanOnPush,
                },
                shared.RegistryScanningRule{
                    RepositoryFilters: []shared.ScanningRepositoryFilter{
                        shared.ScanningRepositoryFilter{
                            Filter: "optio",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                    },
                    ScanFrequency: shared.ScanFrequencyEnumManual,
                },
                shared.RegistryScanningRule{
                    RepositoryFilters: []shared.ScanningRepositoryFilter{
                        shared.ScanningRepositoryFilter{
                            Filter: "saepe",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                        shared.ScanningRepositoryFilter{
                            Filter: "suscipit",
                            FilterType: shared.ScanningRepositoryFilterTypeEnumWildcard,
                        },
                    },
                    ScanFrequency: shared.ScanFrequencyEnumContinuousScan,
                },
            },
            ScanType: shared.ScanTypeEnumEnhanced.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.PutRegistryScanningConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutRegistryScanningConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRegistryScanningConfigurationResponse != nil {
        // handle response
    }
}
```

## PutReplicationConfiguration

<p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutReplicationConfiguration(ctx, operations.PutReplicationConfigurationRequest{
        PutReplicationConfigurationRequest: shared.PutReplicationConfigurationRequest{
            ReplicationConfiguration: shared.ReplicationConfiguration{
                Rules: []shared.ReplicationRule{
                    shared.ReplicationRule{
                        Destinations: []shared.ReplicationDestination{
                            shared.ReplicationDestination{
                                Region: "quod",
                                RegistryID: "officiis",
                            },
                            shared.ReplicationDestination{
                                Region: "qui",
                                RegistryID: "dolorum",
                            },
                        },
                        RepositoryFilters: []shared.RepositoryFilter{
                            shared.RepositoryFilter{
                                Filter: "esse",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                            shared.RepositoryFilter{
                                Filter: "harum",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                            shared.RepositoryFilter{
                                Filter: "iusto",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                            shared.RepositoryFilter{
                                Filter: "ipsum",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                        },
                    },
                    shared.ReplicationRule{
                        Destinations: []shared.ReplicationDestination{
                            shared.ReplicationDestination{
                                Region: "tenetur",
                                RegistryID: "amet",
                            },
                            shared.ReplicationDestination{
                                Region: "tempore",
                                RegistryID: "accusamus",
                            },
                            shared.ReplicationDestination{
                                Region: "numquam",
                                RegistryID: "enim",
                            },
                            shared.ReplicationDestination{
                                Region: "dolorem",
                                RegistryID: "sapiente",
                            },
                        },
                        RepositoryFilters: []shared.RepositoryFilter{
                            shared.RepositoryFilter{
                                Filter: "nihil",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                            shared.RepositoryFilter{
                                Filter: "sit",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                            shared.RepositoryFilter{
                                Filter: "expedita",
                                FilterType: shared.RepositoryFilterTypeEnumPrefixMatch,
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.PutReplicationConfigurationXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutReplicationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutReplicationConfigurationResponse != nil {
        // handle response
    }
}
```

## SetRepositoryPolicy

Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetRepositoryPolicy(ctx, operations.SetRepositoryPolicyRequest{
        SetRepositoryPolicyRequest: shared.SetRepositoryPolicyRequest{
            Force: sdk.Bool(false),
            PolicyText: "ipsum",
            RegistryID: sdk.String("incidunt"),
            RepositoryName: "qui",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.SetRepositoryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921SetRepositoryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetRepositoryPolicyResponse != nil {
        // handle response
    }
}
```

## StartImageScan

Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartImageScan(ctx, operations.StartImageScanRequest{
        StartImageScanRequest: shared.StartImageScanRequest{
            ImageID: shared.ImageIdentifier{
                ImageDigest: sdk.String("incidunt"),
                ImageTag: sdk.String("aspernatur"),
            },
            RegistryID: sdk.String("dolores"),
            RepositoryName: "distinctio",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.StartImageScanXAmzTargetEnumAmazonEc2ContainerRegistryV20150921StartImageScan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImageScanResponse != nil {
        // handle response
    }
}
```

## StartLifecyclePolicyPreview

Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartLifecyclePolicyPreview(ctx, operations.StartLifecyclePolicyPreviewRequest{
        StartLifecyclePolicyPreviewRequest: shared.StartLifecyclePolicyPreviewRequest{
            LifecyclePolicyText: sdk.String("fugit"),
            RegistryID: sdk.String("magni"),
            RepositoryName: "odio",
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.StartLifecyclePolicyPreviewXAmzTargetEnumAmazonEc2ContainerRegistryV20150921StartLifecyclePolicyPreview,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartLifecyclePolicyPreviewResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "nobis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("saepe"),
                    Value: sdk.String("ipsum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonEc2ContainerRegistryV20150921TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes specified tags from a resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "dolorem",
            TagKeys: []string{
                "labore",
                "adipisci",
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonEc2ContainerRegistryV20150921UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UploadLayerPart

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UploadLayerPart(ctx, operations.UploadLayerPartRequest{
        UploadLayerPartRequest: shared.UploadLayerPartRequest{
            LayerPartBlob: "est",
            PartFirstByte: 833038,
            PartLastByte: 785153,
            RegistryID: sdk.String("doloribus"),
            RepositoryName: "ut",
            UploadID: "facilis",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.UploadLayerPartXAmzTargetEnumAmazonEc2ContainerRegistryV20150921UploadLayerPart,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadLayerPartResponse != nil {
        // handle response
    }
}
```
