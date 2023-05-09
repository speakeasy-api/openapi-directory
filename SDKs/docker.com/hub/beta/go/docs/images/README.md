# Images

## Overview

The Advanced Image Management API endpoints allow you to manage Docker
images across all repositories.

For more information, see [Advanced Image Management dashboard](https://docs.docker.com/docker-hub/image-management/).


### Available Operations

* [GetNamespacesRepositoriesImages](#getnamespacesrepositoriesimages) - Get details of repository's images
* [GetNamespacesRepositoriesImagesSummary](#getnamespacesrepositoriesimagessummary) - Get summary of repository's images
* [GetNamespacesRepositoriesImagesTags](#getnamespacesrepositoriesimagestags) - Get image's tags
* [PostNamespacesDeleteImages](#postnamespacesdeleteimages) - Delete images

## GetNamespacesRepositoriesImages

Gets details on the images in a repository.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Images.GetNamespacesRepositoriesImages(ctx, operations.GetNamespacesRepositoriesImagesRequest{
        ActiveFrom: sdk.String("voluptatibus"),
        CurrentlyTagged: sdk.Bool(false),
        Namespace: "ipsa",
        Ordering: operations.GetNamespacesRepositoriesImagesOrderingEnumDigest.ToPointer(),
        Page: sdk.Int64(451159),
        PageSize: sdk.Int64(739264),
        Repository: "perferendis",
        Status: operations.GetNamespacesRepositoriesImagesStatusEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamespaceRepositoryImagesResponse != nil {
        // handle response
    }
}
```

## GetNamespacesRepositoriesImagesSummary

Gets the number of images in a repository and the number of images
counted as active and inactive.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Images.GetNamespacesRepositoriesImagesSummary(ctx, operations.GetNamespacesRepositoriesImagesSummaryRequest{
        ActiveFrom: sdk.String("reprehenderit"),
        Namespace: "ut",
        Repository: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamespaceRepositoryImagesSummaryResponse != nil {
        // handle response
    }
}
```

## GetNamespacesRepositoriesImagesTags

Gets current and historical tags for an image.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Images.GetNamespacesRepositoriesImagesTags(ctx, operations.GetNamespacesRepositoriesImagesTagsRequest{
        Digest: "dicta",
        Namespace: "corporis",
        Page: sdk.Int64(296140),
        PageSize: sdk.Int64(480894),
        Repository: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamespaceRepositoryImagesTagsResponse != nil {
        // handle response
    }
}
```

## PostNamespacesDeleteImages

Deletes one or more images within a namespace. This is currently limited to a single 
repository.

If you attempt to delete images that are marked as active or are currently tagged, the deletion does not happen and it displays the warnings.
To continue with the deletion, you must ignore these warnings by putting them in the `ignore_warnings` property.

Deleting a currently tagged image deletes the tag from the repository.

You cannot ignore errors. It is not possible to directly delete children of multi-arch images.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Images.PostNamespacesDeleteImages(ctx, operations.PostNamespacesDeleteImagesRequest{
        PostNamespacesDeleteImagesRequest: shared.PostNamespacesDeleteImagesRequest{
            ActiveFrom: sdk.String("2020-12-01T12:00:00Z"),
            DryRun: sdk.Bool(false),
            IgnoreWarnings: []shared.PostNamespacesDeleteImagesRequestIgnoreWarnings{
                shared.PostNamespacesDeleteImagesRequestIgnoreWarnings{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                    Tags: []string{
                        "latest",
                        "latest",
                    },
                    Warning: shared.PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnumCurrentTag,
                },
                shared.PostNamespacesDeleteImagesRequestIgnoreWarnings{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                    Tags: []string{
                        "latest",
                        "latest",
                        "latest",
                        "latest",
                    },
                    Warning: shared.PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnumCurrentTag,
                },
                shared.PostNamespacesDeleteImagesRequestIgnoreWarnings{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                    Tags: []string{
                        "latest",
                        "latest",
                    },
                    Warning: shared.PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnumCurrentTag,
                },
            },
            Manifests: []shared.PostNamespacesDeleteImagesRequestManifests{
                shared.PostNamespacesDeleteImagesRequestManifests{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                },
                shared.PostNamespacesDeleteImagesRequestManifests{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                },
                shared.PostNamespacesDeleteImagesRequestManifests{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                },
                shared.PostNamespacesDeleteImagesRequestManifests{
                    Digest: "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr",
                    Repository: "myrepo",
                },
            },
        },
        Namespace: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostNamespacesDeleteImagesResponseSuccess != nil {
        // handle response
    }
}
```
