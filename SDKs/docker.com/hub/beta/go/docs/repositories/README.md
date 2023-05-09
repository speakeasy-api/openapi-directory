# Repositories

## Overview

The repository endpoints allow you to manage your repository's
configuration like description.


### Available Operations

* [GetV2NamespacesNamespaceRepositoriesRepositoryTags](#getv2namespacesnamespacerepositoriesrepositorytags) - List repository tags
* [GetV2NamespacesNamespaceRepositoriesRepositoryTagsTag](#getv2namespacesnamespacerepositoriesrepositorytagstag) - Read repository tag
* [HeadV2NamespacesNamespaceRepositoriesRepositoryTags](#headv2namespacesnamespacerepositoriesrepositorytags) - Check repository tags
* [HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTag](#headv2namespacesnamespacerepositoriesrepositorytagstag) - Check repository tag

## GetV2NamespacesNamespaceRepositoriesRepositoryTags

List repository tags

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
    res, err := s.Repositories.GetV2NamespacesNamespaceRepositoriesRepositoryTags(ctx, operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest{
        Namespace: "sint",
        Page: sdk.Int64(83112),
        PageSize: sdk.Int64(929297),
        Repository: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedTags != nil {
        // handle response
    }
}
```

## GetV2NamespacesNamespaceRepositoriesRepositoryTagsTag

Read repository tag

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
    res, err := s.Repositories.GetV2NamespacesNamespaceRepositoriesRepositoryTagsTag(ctx, operations.GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest{
        Namespace: "enim",
        Repository: "consequatur",
        Tag: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## HeadV2NamespacesNamespaceRepositoriesRepositoryTags

Check repository tags

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
    res, err := s.Repositories.HeadV2NamespacesNamespaceRepositoriesRepositoryTags(ctx, operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest{
        Namespace: "quibusdam",
        Repository: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTag

Check repository tag

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
    res, err := s.Repositories.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTag(ctx, operations.HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest{
        Namespace: "deserunt",
        Repository: "distinctio",
        Tag: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
