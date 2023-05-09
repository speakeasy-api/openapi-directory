# CommitStatuses

## Overview

Commit statuses provide a way to tag commits with meta data,
like automated build results.


### Available Operations

* [GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses](#getrepositoriesworkspacereposlugcommitcommitstatuses) - List commit statuses for a commit
* [GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](#getrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Get a build status for a commit
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses](#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild](#postrepositoriesworkspacereposlugcommitcommitstatusesbuild) - Create a build status for a commit
* [PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey](#putrepositoriesworkspacereposlugcommitcommitstatusesbuildkey) - Update a build status for a commit

## GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses

Returns all statuses (e.g. build results) for a specific commit.

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
    res, err := s.CommitStatuses.GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest{
        Commit: "temporibus",
        Q: sdk.String("laborum"),
        RepoSlug: "quasi",
        Sort: sdk.String("reiciendis"),
        Workspace: "voluptatibus",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedCommitstatuses != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey

Returns the specified build status for a commit.

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
    res, err := s.CommitStatuses.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest{
        Commit: "vero",
        Key: "nihil",
        RepoSlug: "praesentium",
        Workspace: "voluptatibus",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commitstatus != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses

Returns all statuses (e.g. build results) for the given pull
request.

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
    res, err := s.CommitStatuses.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest{
        PullRequestID: 55714,
        Q: sdk.String("omnis"),
        RepoSlug: "voluptate",
        Sort: sdk.String("cum"),
        Workspace: "perferendis",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedCommitstatuses != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild

Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

Example:

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
    "key": "MY-BUILD",
    "state": "SUCCESSFUL",
    "description": "42 tests passed",
    "url": "https://www.example.org/my-build-result"
  }'
```

When creating a new commit status, you can use a URI template for the URL.
Templates are URLs that contain variable names that Bitbucket will
evaluate at runtime whenever the URL is displayed anywhere similar to
parameter substitution in
[Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
For example, one could use `https://foo.com/builds/{repository.full_name}`
which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
The context variables available are `repository` and `commit`.

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
    res, err := s.CommitStatuses.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(ctx, operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest{
        RequestBody: map[string]interface{}{
            "reprehenderit": "ut",
        },
        Commit: "maiores",
        RepoSlug: "dicta",
        Workspace: "corporis",
    }, operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commitstatus != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey

Used to update the current status of a build status object on the
specific commit.

This operation can also be used to change other properties of the
build status:

* `state`
* `name`
* `description`
* `url`
* `refname`

The `key` cannot be changed.

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
    res, err := s.CommitStatuses.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(ctx, operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest{
        RequestBody: map[string]interface{}{
            "iusto": "dicta",
            "harum": "enim",
        },
        Commit: "accusamus",
        Key: "commodi",
        RepoSlug: "repudiandae",
        Workspace: "quae",
    }, operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commitstatus != nil {
        // handle response
    }
}
```
