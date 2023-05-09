# images

## Overview

The Advanced Image Management API endpoints allow you to manage Docker
images across all repositories.

For more information, see [Advanced Image Management dashboard](https://docs.docker.com/docker-hub/image-management/).


### Available Operations

* [getNamespacesRepositoriesImages](#getnamespacesrepositoriesimages) - Get details of repository's images
* [getNamespacesRepositoriesImagesSummary](#getnamespacesrepositoriesimagessummary) - Get summary of repository's images
* [getNamespacesRepositoriesImagesTags](#getnamespacesrepositoriesimagestags) - Get image's tags
* [postNamespacesDeleteImages](#postnamespacesdeleteimages) - Delete images

## getNamespacesRepositoriesImages

Gets details on the images in a repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesOrderingEnum;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesRequest;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesResponse;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamespacesRepositoriesImagesRequest req = new GetNamespacesRepositoriesImagesRequest("nisi", "recusandae") {{
                activeFrom = "temporibus";
                currentlyTagged = false;
                ordering = GetNamespacesRepositoriesImagesOrderingEnum.LAST_ACTIVITY;
                page = 337396L;
                pageSize = 87129L;
                status = GetNamespacesRepositoriesImagesStatusEnum.INACTIVE;
            }};            

            GetNamespacesRepositoriesImagesResponse res = sdk.images.getNamespacesRepositoriesImages(req);

            if (res.getNamespaceRepositoryImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespacesRepositoriesImagesSummary

Gets the number of images in a repository and the number of images
counted as active and inactive.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesSummaryRequest;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamespacesRepositoriesImagesSummaryRequest req = new GetNamespacesRepositoriesImagesSummaryRequest("perferendis", "ipsam") {{
                activeFrom = "repellendus";
            }};            

            GetNamespacesRepositoriesImagesSummaryResponse res = sdk.images.getNamespacesRepositoriesImagesSummary(req);

            if (res.getNamespaceRepositoryImagesSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespacesRepositoriesImagesTags

Gets current and historical tags for an image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesTagsRequest;
import org.openapis.openapi.models.operations.GetNamespacesRepositoriesImagesTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNamespacesRepositoriesImagesTagsRequest req = new GetNamespacesRepositoriesImagesTagsRequest("sapiente", "quo", "odit") {{
                page = 870013L;
                pageSize = 870088L;
            }};            

            GetNamespacesRepositoriesImagesTagsResponse res = sdk.images.getNamespacesRepositoriesImagesTags(req);

            if (res.getNamespaceRepositoryImagesTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNamespacesDeleteImages

Deletes one or more images within a namespace. This is currently limited to a single 
repository.

If you attempt to delete images that are marked as active or are currently tagged, the deletion does not happen and it displays the warnings.
To continue with the deletion, you must ignore these warnings by putting them in the `ignore_warnings` property.

Deleting a currently tagged image deletes the tag from the repository.

You cannot ignore errors. It is not possible to directly delete children of multi-arch images.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNamespacesDeleteImagesRequest;
import org.openapis.openapi.models.operations.PostNamespacesDeleteImagesResponse;
import org.openapis.openapi.models.shared.PostNamespacesDeleteImagesRequest;
import org.openapis.openapi.models.shared.PostNamespacesDeleteImagesRequestIgnoreWarnings;
import org.openapis.openapi.models.shared.PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum;
import org.openapis.openapi.models.shared.PostNamespacesDeleteImagesRequestManifests;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNamespacesDeleteImagesRequest req = new PostNamespacesDeleteImagesRequest(                new PostNamespacesDeleteImagesRequest() {{
                                activeFrom = "2020-12-01T12:00:00Z";
                                dryRun = false;
                                ignoreWarnings = new org.openapis.openapi.models.shared.PostNamespacesDeleteImagesRequestIgnoreWarnings[]{{
                                    add(new PostNamespacesDeleteImagesRequestIgnoreWarnings("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo", PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG) {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                        tags = new String[]{{
                                            add("latest"),
                                            add("latest"),
                                        }};
                                        warning = PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG;
                                    }}),
                                    add(new PostNamespacesDeleteImagesRequestIgnoreWarnings("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo", PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG) {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                        tags = new String[]{{
                                            add("latest"),
                                            add("latest"),
                                            add("latest"),
                                            add("latest"),
                                        }};
                                        warning = PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG;
                                    }}),
                                    add(new PostNamespacesDeleteImagesRequestIgnoreWarnings("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo", PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG) {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                        tags = new String[]{{
                                            add("latest"),
                                            add("latest"),
                                            add("latest"),
                                            add("latest"),
                                        }};
                                        warning = PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG;
                                    }}),
                                    add(new PostNamespacesDeleteImagesRequestIgnoreWarnings("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo", PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG) {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                        tags = new String[]{{
                                            add("latest"),
                                            add("latest"),
                                        }};
                                        warning = PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum.CURRENT_TAG;
                                    }}),
                                }};
                                manifests = new org.openapis.openapi.models.shared.PostNamespacesDeleteImagesRequestManifests[]{{
                                    add(new PostNamespacesDeleteImagesRequestManifests("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo") {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                    }}),
                                    add(new PostNamespacesDeleteImagesRequestManifests("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo") {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                    }}),
                                    add(new PostNamespacesDeleteImagesRequestManifests("sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr", "myrepo") {{
                                        digest = "sha256:1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqr";
                                        repository = "myrepo";
                                    }}),
                                }};
                            }};, "porro");            

            PostNamespacesDeleteImagesResponse res = sdk.images.postNamespacesDeleteImages(req);

            if (res.postNamespacesDeleteImagesResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
