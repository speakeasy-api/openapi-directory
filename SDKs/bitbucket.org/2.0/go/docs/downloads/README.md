# Downloads

## Overview

Access the list of download links associated with the repository.

### Available Operations

* [DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename](#deleterepositoriesworkspacereposlugdownloadsfilename) - Delete a download artifact
* [GetRepositoriesWorkspaceRepoSlugDownloads](#getrepositoriesworkspacereposlugdownloads) - List download artifacts
* [GetRepositoriesWorkspaceRepoSlugDownloadsFilename](#getrepositoriesworkspacereposlugdownloadsfilename) - Get a download artifact link
* [PostRepositoriesWorkspaceRepoSlugDownloads](#postrepositoriesworkspacereposlugdownloads) - Upload a download artifact

## DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename

Deletes the specified download artifact from the repository.

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
    res, err := s.Downloads.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilename(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest{
        Filename: "nobis",
        RepoSlug: "dolores",
        Workspace: "quis",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDownloads

Returns a list of download links associated with the repository.

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
    res, err := s.Downloads.GetRepositoriesWorkspaceRepoSlugDownloads(ctx, operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest{
        RepoSlug: "totam",
        Workspace: "dignissimos",
    }, operations.GetRepositoriesWorkspaceRepoSlugDownloadsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDownloadsFilename

Return a redirect to the contents of a download artifact.

This endpoint returns the actual file contents and not the artifact's
metadata.

    $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
    Hello World

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
    res, err := s.Downloads.GetRepositoriesWorkspaceRepoSlugDownloadsFilename(ctx, operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest{
        Filename: "eaque",
        RepoSlug: "quis",
        Workspace: "nesciunt",
    }, operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugDownloads

Upload new download artifacts.

To upload files, perform a `multipart/form-data` POST containing one
or more `files` fields:

    $ echo Hello World > hello.txt
    $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

When a file is uploaded with the same name as an existing artifact,
then the existing file will be replaced.

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
    res, err := s.Downloads.PostRepositoriesWorkspaceRepoSlugDownloads(ctx, operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest{
        RepoSlug: "eos",
        Workspace: "perferendis",
    }, operations.PostRepositoriesWorkspaceRepoSlugDownloadsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
