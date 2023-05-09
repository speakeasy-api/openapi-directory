# repositories

## Overview

The repository endpoints allow you to manage your repository's
configuration like description.


### Available Operations

* [getV2NamespacesNamespaceRepositoriesRepositoryTags](#getv2namespacesnamespacerepositoriesrepositorytags) - List repository tags
* [getV2NamespacesNamespaceRepositoriesRepositoryTagsTag](#getv2namespacesnamespacerepositoriesrepositorytagstag) - Read repository tag
* [headV2NamespacesNamespaceRepositoriesRepositoryTags](#headv2namespacesnamespacerepositoriesrepositorytags) - Check repository tags
* [headV2NamespacesNamespaceRepositoriesRepositoryTagsTag](#headv2namespacesnamespacerepositoriesrepositorytagstag) - Check repository tag

## getV2NamespacesNamespaceRepositoriesRepositoryTags

List repository tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest;
import org.openapis.openapi.models.operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest req = new GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest("nam", "officia") {{
                page = 582020L;
                pageSize = 143353L;
            }};            

            GetV2NamespacesNamespaceRepositoriesRepositoryTagsResponse res = sdk.repositories.getV2NamespacesNamespaceRepositoriesRepositoryTags(req);

            if (res.paginatedTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2NamespacesNamespaceRepositoriesRepositoryTagsTag

Read repository tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest;
import org.openapis.openapi.models.operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest req = new GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest("deleniti", "hic", "optio");            

            GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse res = sdk.repositories.getV2NamespacesNamespaceRepositoriesRepositoryTagsTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headV2NamespacesNamespaceRepositoriesRepositoryTags

Check repository tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest;
import org.openapis.openapi.models.operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest req = new HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest("totam", "beatae");            

            HeadV2NamespacesNamespaceRepositoriesRepositoryTagsResponse res = sdk.repositories.headV2NamespacesNamespaceRepositoriesRepositoryTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headV2NamespacesNamespaceRepositoriesRepositoryTagsTag

Check repository tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest;
import org.openapis.openapi.models.operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest req = new HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest("commodi", "molestiae", "modi");            

            HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagResponse res = sdk.repositories.headV2NamespacesNamespaceRepositoriesRepositoryTagsTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
