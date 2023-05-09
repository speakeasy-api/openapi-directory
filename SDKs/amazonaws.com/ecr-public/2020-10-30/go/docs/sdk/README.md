# SDK

## Overview

<fullname>Amazon Elastic Container Registry Public</fullname> <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the Docker CLI or your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ecr-public/>
### Available Operations

* [BatchCheckLayerAvailability](#batchchecklayeravailability) - <p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [BatchDeleteImage](#batchdeleteimage) - <p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>
* [CompleteLayerUpload](#completelayerupload) - <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [CreateRepository](#createrepository) - Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [DeleteRepository](#deleterepository) - Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.
* [DeleteRepositoryPolicy](#deleterepositorypolicy) - Deletes the repository policy that's associated with the specified repository.
* [DescribeImageTags](#describeimagetags) - Returns the image tag details for a repository in a public registry.
* [DescribeImages](#describeimages) - <p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>
* [DescribeRegistries](#describeregistries) - Returns details for a public registry.
* [DescribeRepositories](#describerepositories) - Describes repositories that are in a public registry.
* [GetAuthorizationToken](#getauthorizationtoken) - Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
* [GetRegistryCatalogData](#getregistrycatalogdata) - Retrieves catalog metadata for a public registry.
* [GetRepositoryCatalogData](#getrepositorycatalogdata) - Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
* [GetRepositoryPolicy](#getrepositorypolicy) - Retrieves the repository policy for the specified repository.
* [InitiateLayerUpload](#initiatelayerupload) - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [ListTagsForResource](#listtagsforresource) - List the tags for an Amazon ECR Public resource.
* [PutImage](#putimage) - <p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* [PutRegistryCatalogData](#putregistrycatalogdata) - Create or update the catalog data for a public registry.
* [PutRepositoryCatalogData](#putrepositorycatalogdata) - Creates or updates the catalog data for a repository in a public registry.
* [SetRepositoryPolicy](#setrepositorypolicy) - Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* [TagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [UntagResource](#untagresource) - Deletes specified tags from a resource.
* [UploadLayerPart](#uploadlayerpart) - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

## BatchCheckLayerAvailability

<p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
        XAmzTarget: operations.BatchCheckLayerAvailabilityXAmzTargetEnumSpencerFrontendServiceBatchCheckLayerAvailability,
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

<p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>

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
        XAmzTarget: operations.BatchDeleteImageXAmzTargetEnumSpencerFrontendServiceBatchDeleteImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteImageResponse != nil {
        // handle response
    }
}
```

## CompleteLayerUpload

<p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            RegistryID: sdk.String("esse"),
            RepositoryName: "totam",
            UploadID: "porro",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CompleteLayerUploadXAmzTargetEnumSpencerFrontendServiceCompleteLayerUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteLayerUploadResponse != nil {
        // handle response
    }
}
```

## CreateRepository

Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

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
            CatalogData: &shared.RepositoryCatalogDataInput{
                AboutText: sdk.String("hic"),
                Architectures: []string{
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                Description: sdk.String("modi"),
                LogoImageBlob: sdk.String("qui"),
                OperatingSystems: []string{
                    "cum",
                    "esse",
                    "ipsum",
                    "excepturi",
                },
                UsageText: sdk.String("aspernatur"),
            },
            RepositoryName: "perferendis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("natus"),
                    Value: sdk.String("sed"),
                },
                shared.Tag{
                    Key: sdk.String("iste"),
                    Value: sdk.String("dolor"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreateRepositoryXAmzTargetEnumSpencerFrontendServiceCreateRepository,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRepositoryResponse != nil {
        // handle response
    }
}
```

## DeleteRepository

Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.

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
            RegistryID: sdk.String("iste"),
            RepositoryName: "iure",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DeleteRepositoryXAmzTargetEnumSpencerFrontendServiceDeleteRepository,
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

Deletes the repository policy that's associated with the specified repository.

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
            RegistryID: sdk.String("laborum"),
            RepositoryName: "dolores",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DeleteRepositoryPolicyXAmzTargetEnumSpencerFrontendServiceDeleteRepositoryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRepositoryPolicyResponse != nil {
        // handle response
    }
}
```

## DescribeImageTags

Returns the image tag details for a repository in a public registry.

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
    res, err := s.SDK.DescribeImageTags(ctx, operations.DescribeImageTagsRequest{
        DescribeImageTagsRequest: shared.DescribeImageTagsRequest{
            MaxResults: sdk.Int64(325047),
            NextToken: sdk.String("excepturi"),
            RegistryID: sdk.String("accusantium"),
            RepositoryName: "iure",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.DescribeImageTagsXAmzTargetEnumSpencerFrontendServiceDescribeImageTags,
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageTagsResponse != nil {
        // handle response
    }
}
```

## DescribeImages

<p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>

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
            ImageIds: []shared.ImageIdentifier{
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("occaecati"),
                    ImageTag: sdk.String("numquam"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("commodi"),
                    ImageTag: sdk.String("quam"),
                },
                shared.ImageIdentifier{
                    ImageDigest: sdk.String("molestiae"),
                    ImageTag: sdk.String("velit"),
                },
            },
            MaxResults: sdk.Int64(623510),
            NextToken: sdk.String("quia"),
            RegistryID: sdk.String("quis"),
            RepositoryName: "vitae",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DescribeImagesXAmzTargetEnumSpencerFrontendServiceDescribeImages,
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImagesResponse != nil {
        // handle response
    }
}
```

## DescribeRegistries

Returns details for a public registry.

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
    res, err := s.SDK.DescribeRegistries(ctx, operations.DescribeRegistriesRequest{
        DescribeRegistriesRequest: shared.DescribeRegistriesRequest{
            MaxResults: sdk.Int64(820994),
            NextToken: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DescribeRegistriesXAmzTargetEnumSpencerFrontendServiceDescribeRegistries,
        MaxResults: sdk.String("vero"),
        NextToken: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRegistriesResponse != nil {
        // handle response
    }
}
```

## DescribeRepositories

Describes repositories that are in a public registry.

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
            MaxResults: sdk.Int64(509624),
            NextToken: sdk.String("voluptatibus"),
            RegistryID: sdk.String("ipsa"),
            RepositoryNames: []string{
                "voluptate",
                "cum",
                "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DescribeRepositoriesXAmzTargetEnumSpencerFrontendServiceDescribeRepositories,
        MaxResults: sdk.String("iusto"),
        NextToken: sdk.String("dicta"),
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

Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.

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
    res, err := s.SDK.GetAuthorizationToken(ctx, operations.GetAuthorizationTokenRequest{
        RequestBody: map[string]interface{}{
            "enim": "accusamus",
            "commodi": "repudiandae",
            "quae": "ipsum",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.GetAuthorizationTokenXAmzTargetEnumSpencerFrontendServiceGetAuthorizationToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthorizationTokenResponse != nil {
        // handle response
    }
}
```

## GetRegistryCatalogData

Retrieves catalog metadata for a public registry.

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
    res, err := s.SDK.GetRegistryCatalogData(ctx, operations.GetRegistryCatalogDataRequest{
        RequestBody: map[string]interface{}{
            "quasi": "repudiandae",
            "sint": "veritatis",
            "itaque": "incidunt",
            "enim": "consequatur",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.GetRegistryCatalogDataXAmzTargetEnumSpencerFrontendServiceGetRegistryCatalogData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegistryCatalogDataResponse != nil {
        // handle response
    }
}
```

## GetRepositoryCatalogData

Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.

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
    res, err := s.SDK.GetRepositoryCatalogData(ctx, operations.GetRepositoryCatalogDataRequest{
        GetRepositoryCatalogDataRequest: shared.GetRepositoryCatalogDataRequest{
            RegistryID: sdk.String("modi"),
            RepositoryName: "qui",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.GetRepositoryCatalogDataXAmzTargetEnumSpencerFrontendServiceGetRepositoryCatalogData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRepositoryCatalogDataResponse != nil {
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
            RegistryID: sdk.String("alias"),
            RepositoryName: "fugit",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.GetRepositoryPolicyXAmzTargetEnumSpencerFrontendServiceGetRepositoryPolicy,
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

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
            RegistryID: sdk.String("eum"),
            RepositoryName: "non",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.InitiateLayerUploadXAmzTargetEnumSpencerFrontendServiceInitiateLayerUpload,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitiateLayerUploadResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List the tags for an Amazon ECR Public resource.

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
            ResourceArn: "dolor",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumSpencerFrontendServiceListTagsForResource,
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

<p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
            ImageDigest: sdk.String("rerum"),
            ImageManifest: "dicta",
            ImageManifestMediaType: sdk.String("magnam"),
            ImageTag: sdk.String("cumque"),
            RegistryID: sdk.String("facere"),
            RepositoryName: "ea",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.PutImageXAmzTargetEnumSpencerFrontendServicePutImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImageResponse != nil {
        // handle response
    }
}
```

## PutRegistryCatalogData

Create or update the catalog data for a public registry.

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
    res, err := s.SDK.PutRegistryCatalogData(ctx, operations.PutRegistryCatalogDataRequest{
        PutRegistryCatalogDataRequest: shared.PutRegistryCatalogDataRequest{
            DisplayName: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.PutRegistryCatalogDataXAmzTargetEnumSpencerFrontendServicePutRegistryCatalogData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRegistryCatalogDataResponse != nil {
        // handle response
    }
}
```

## PutRepositoryCatalogData

Creates or updates the catalog data for a repository in a public registry.

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
    res, err := s.SDK.PutRepositoryCatalogData(ctx, operations.PutRepositoryCatalogDataRequest{
        PutRepositoryCatalogDataRequest: shared.PutRepositoryCatalogDataRequest{
            CatalogData: shared.RepositoryCatalogDataInput{
                AboutText: sdk.String("amet"),
                Architectures: []string{
                    "nisi",
                    "vel",
                    "natus",
                },
                Description: sdk.String("omnis"),
                LogoImageBlob: sdk.String("molestiae"),
                OperatingSystems: []string{
                    "nihil",
                },
                UsageText: sdk.String("magnam"),
            },
            RegistryID: sdk.String("distinctio"),
            RepositoryName: "id",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.PutRepositoryCatalogDataXAmzTargetEnumSpencerFrontendServicePutRepositoryCatalogData,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRepositoryCatalogDataResponse != nil {
        // handle response
    }
}
```

## SetRepositoryPolicy

Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

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
            PolicyText: "aspernatur",
            RegistryID: sdk.String("architecto"),
            RepositoryName: "magnam",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.SetRepositoryPolicyXAmzTargetEnumSpencerFrontendServiceSetRepositoryPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetRepositoryPolicyResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

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
            ResourceArn: "mollitia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("mollitia"),
                    Value: sdk.String("ad"),
                },
                shared.Tag{
                    Key: sdk.String("eum"),
                    Value: sdk.String("dolor"),
                },
                shared.Tag{
                    Key: sdk.String("necessitatibus"),
                    Value: sdk.String("odit"),
                },
                shared.Tag{
                    Key: sdk.String("nemo"),
                    Value: sdk.String("quasi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumSpencerFrontendServiceTagResource,
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
            ResourceArn: "in",
            TagKeys: []string{
                "architecto",
            },
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumSpencerFrontendServiceUntagResource,
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

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
            LayerPartBlob: "saepe",
            PartFirstByte: 868126,
            PartLastByte: 37559,
            RegistryID: sdk.String("consequuntur"),
            RepositoryName: "praesentium",
            UploadID: "natus",
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.UploadLayerPartXAmzTargetEnumSpencerFrontendServiceUploadLayerPart,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadLayerPartResponse != nil {
        // handle response
    }
}
```
