# IssueTracker

## Overview

The issue resources provide functionality for getting information on
issues in an issue tracker, creating new issues, updating them and deleting
them.

You can access public issues without authentication, but you can't gain access
to private repositories' issues. By authenticating, you will get the ability
to create issues, as well as access to updating data or deleting issues you
have access to.


### Available Operations

* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID](#deleterepositoriesworkspacereposlugissuesissueid) - Delete an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath](#deleterepositoriesworkspacereposlugissuesissueidattachmentspath) - Delete an attachment for an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID](#deleterepositoriesworkspacereposlugissuesissueidcommentscommentid) - Delete a comment on an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote](#deleterepositoriesworkspacereposlugissuesissueidvote) - Remove vote for an issue
* [DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch](#deleterepositoriesworkspacereposlugissuesissueidwatch) - Stop watching an issue
* [GetRepositoriesWorkspaceRepoSlugComponents](#getrepositoriesworkspacereposlugcomponents) - List components
* [GetRepositoriesWorkspaceRepoSlugComponentsComponentID](#getrepositoriesworkspacereposlugcomponentscomponentid) - Get a component for issues
* [GetRepositoriesWorkspaceRepoSlugIssues](#getrepositoriesworkspacereposlugissues) - List issues
* [GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip](#getrepositoriesworkspacereposlugissuesexportreponameissuestaskidzip) - Check issue export status
* [GetRepositoriesWorkspaceRepoSlugIssuesImport](#getrepositoriesworkspacereposlugissuesimport) - Check issue import status
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueID](#getrepositoriesworkspacereposlugissuesissueid) - Get an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments](#getrepositoriesworkspacereposlugissuesissueidattachments) - List attachments for an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath](#getrepositoriesworkspacereposlugissuesissueidattachmentspath) - Get attachment for an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges](#getrepositoriesworkspacereposlugissuesissueidchanges) - List changes on an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID](#getrepositoriesworkspacereposlugissuesissueidchangeschangeid) - Get issue change object
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments](#getrepositoriesworkspacereposlugissuesissueidcomments) - List comments on an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID](#getrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Get a comment on an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote](#getrepositoriesworkspacereposlugissuesissueidvote) - Check if current user voted for an issue
* [GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch](#getrepositoriesworkspacereposlugissuesissueidwatch) - Check if current user is watching a issue
* [GetRepositoriesWorkspaceRepoSlugMilestones](#getrepositoriesworkspacereposlugmilestones) - List milestones
* [GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID](#getrepositoriesworkspacereposlugmilestonesmilestoneid) - Get a milestone
* [GetRepositoriesWorkspaceRepoSlugVersions](#getrepositoriesworkspacereposlugversions) - List defined versions for issues
* [GetRepositoriesWorkspaceRepoSlugVersionsVersionID](#getrepositoriesworkspacereposlugversionsversionid) - Get a defined version for issues
* [PostRepositoriesWorkspaceRepoSlugIssues](#postrepositoriesworkspacereposlugissues) - Create an issue
* [PostRepositoriesWorkspaceRepoSlugIssuesExport](#postrepositoriesworkspacereposlugissuesexport) - Export issues
* [PostRepositoriesWorkspaceRepoSlugIssuesImport](#postrepositoriesworkspacereposlugissuesimport) - Import issues
* [PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments](#postrepositoriesworkspacereposlugissuesissueidattachments) - Upload an attachment to an issue
* [PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges](#postrepositoriesworkspacereposlugissuesissueidchanges) - Modify the state of an issue
* [PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments](#postrepositoriesworkspacereposlugissuesissueidcomments) - Create a comment on an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueID](#putrepositoriesworkspacereposlugissuesissueid) - Update an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID](#putrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Update a comment on an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote](#putrepositoriesworkspacereposlugissuesissueidvote) - Vote for an issue
* [PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch](#putrepositoriesworkspacereposlugissuesissueidwatch) - Watch an issue

## DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID

Deletes the specified issue. This requires write access to the
repository.

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
    res, err := s.IssueTracker.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest{
        IssueID: "dolores",
        RepoSlug: "minus",
        Workspace: "quam",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath

Deletes an attachment.

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
    res, err := s.IssueTracker.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathRequest{
        IssueID: "dolor",
        Path: "vero",
        RepoSlug: "nostrum",
        Workspace: "hic",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID

Deletes the specified comment.

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
    res, err := s.IssueTracker.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest{
        CommentID: 928082,
        IssueID: "omnis",
        RepoSlug: "facilis",
        Workspace: "perspiciatis",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote

Retract your vote.

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
    res, err := s.IssueTracker.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVote(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest{
        IssueID: "voluptatem",
        RepoSlug: "porro",
        Workspace: "consequuntur",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch

Stop watching this issue.

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
    res, err := s.IssueTracker.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest{
        IssueID: "blanditiis",
        RepoSlug: "error",
        Workspace: "eaque",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Error != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugComponents

Returns the components that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugComponents(ctx, operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest{
        RepoSlug: "occaecati",
        Workspace: "rerum",
    }, operations.GetRepositoriesWorkspaceRepoSlugComponentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedComponents != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugComponentsComponentID

Returns the specified issue tracker component object.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugComponentsComponentID(ctx, operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIDRequest{
        ComponentID: 237893,
        RepoSlug: "asperiores",
        Workspace: "earum",
    }, operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Component != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssues

Returns the issues in the issue tracker.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssues(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest{
        RepoSlug: "modi",
        Workspace: "iste",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedIssues != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip

This endpoint is used to poll for the progress of an issue export
job and return the zip file after the job is complete.
As long as the job is running, this will return a 200 response
with in the response body a description of the current status.

After the job has been scheduled, but before it starts executing, this
endpoint's response is:

{
 "type": "issue_job_status",
 "status": "ACCEPTED",
 "phase": "Initializing",
 "total": 0,
 "count": 0,
 "pct": 0
}


Then once it starts running, it becomes:

{
 "type": "issue_job_status",
 "status": "STARTED",
 "phase": "Attachments",
 "total": 15,
 "count": 11,
 "pct": 73
}

Once the job has successfully completed, it returns a stream of the zip file.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZip(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipRequest{
        RepoName: "dolorum",
        RepoSlug: "deleniti",
        TaskID: "pariatur",
        Workspace: "provident",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueJobStatus != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesImport

When using GET, this endpoint reports the status of the current import task. Request example:

```
$ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
```

After the job has been scheduled, but before it starts executing, this endpoint's response is:

```
< HTTP/1.1 202 Accepted
{
    "type": "issue_job_status",
    "status": "PENDING",
    "phase": "Attachments",
    "total": 15,
    "count": 0,
    "percent": 0
}
```

Once it starts running, it is a 202 response with status STARTED and progress filled.

After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesImport(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest{
        RepoSlug: "nobis",
        Workspace: "libero",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueJobStatus != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueID

Returns the specified issue.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueID(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest{
        IssueID: "delectus",
        RepoSlug: "quaerat",
        Workspace: "quos",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments

Returns all attachments for this issue.

This returns the files' meta data. This does not return the files'
actual contents.

The files are always ordered by their upload date.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest{
        IssueID: "aliquid",
        RepoSlug: "dolorem",
        Workspace: "dolorem",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedIssueAttachments != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath

Returns the contents of the specified file attachment.

Note that this endpoint does not return a JSON response, but instead
returns a redirect pointing to the actual file that in turn will return
the raw contents.

The redirect URL contains a one-time token that has a limited lifetime.
As a result, the link should not be persisted, stored, or shared.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPath(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathRequest{
        IssueID: "dolor",
        Path: "qui",
        RepoSlug: "ipsum",
        Workspace: "hic",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathSecurity{
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

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges

Returns the list of all changes that have been made to the specified
issue. Changes are returned in chronological order with the oldest
change first.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

Note that this operation is changing significantly, due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
for details.

```
$ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .

{
  "pagelen": 20,
  "values": [
    {
      "changes": {
        "priority": {
          "new": "trivial",
          "old": "major"
        },
        "assignee": {
          "new": "",
          "old": "evzijst"
        },
        "assignee_account_id": {
          "new": "",
          "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "kind": {
          "new": "enhancement",
          "old": "bug"
        }
      },
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
        },
        "html": {
          "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
        }
      },
      "issue": {
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
          }
        },
        "type": "issue",
        "id": 1,
        "repository": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
            },
            "html": {
              "href": "https://bitbucket.org/evzijst/dogslow"
            },
            "avatar": {
              "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
            }
          },
          "type": "repository",
          "name": "dogslow",
          "full_name": "evzijst/dogslow",
          "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
        },
        "title": "Updated title"
      },
      "created_on": "2018-03-03T00:35:28.353630+00:00",
      "user": {
        "username": "evzijst",
        "nickname": "evzijst",
        "display_name": "evzijst",
        "type": "user",
        "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/evzijst/avatar/32/"
          }
        }
      },
      "message": {
        "raw": "Removed assignee, changed kind and priority.",
        "markup": "markdown",
        "html": "<p>Removed assignee, changed kind and priority.</p>",
        "type": "rendered"
      },
      "type": "issue_change",
      "id": 2
    }
  ],
  "page": 1
}
```

Changes support [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) that
can be used to search for specific changes. For instance, to see
when an issue transitioned to "resolved":

```
$ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
   -G --data-urlencode='q=changes.state.new = "resolved"'
```

This resource is only available on repositories that have the issue
tracker enabled.

N.B.

The `changes.assignee` and `changes.assignee_account_id` fields are not
a `user` object. Instead, they contain the raw `username` and
`account_id` of the user. This is to protect the integrity of the audit
log even after a user account gets deleted.

The `changes.assignee` field is deprecated will disappear in the
future. Use `changes.assignee_account_id` instead.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest{
        IssueID: "excepturi",
        Q: sdk.String("cum"),
        RepoSlug: "voluptate",
        Sort: sdk.String("dignissimos"),
        Workspace: "reiciendis",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedLogEntries != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID

Returns the specified issue change object.

This resource is only available on repositories that have the issue
tracker enabled.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeID(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDRequest{
        ChangeID: "amet",
        IssueID: "dolorum",
        RepoSlug: "numquam",
        Workspace: "veritatis",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueChange != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments

Returns a paginated list of all comments that were made on the
specified issue.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDComments(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest{
        IssueID: "ipsa",
        Q: sdk.String("ipsa"),
        RepoSlug: "iure",
        Workspace: "odio",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedIssueComments != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID

Returns the specified issue comment object.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest{
        CommentID: 311796,
        IssueID: "accusamus",
        RepoSlug: "quidem",
        Workspace: "voluptatibus",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote

Check whether the authenticated user has voted for this issue.
A 204 status code indicates that the user has voted, while a 404
implies they haven't.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVote(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest{
        IssueID: "voluptas",
        RepoSlug: "natus",
        Workspace: "eos",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Error != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch

Indicated whether or not the authenticated user is watching this
issue.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch(ctx, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest{
        IssueID: "atque",
        RepoSlug: "sit",
        Workspace: "fugiat",
    }, operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Error != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugMilestones

Returns the milestones that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugMilestones(ctx, operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest{
        RepoSlug: "ab",
        Workspace: "soluta",
    }, operations.GetRepositoriesWorkspaceRepoSlugMilestonesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedMilestones != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID

Returns the specified issue tracker milestone object.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneID(ctx, operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDRequest{
        MilestoneID: 679393,
        RepoSlug: "iusto",
        Workspace: "voluptate",
    }, operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugVersions

Returns the versions that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugVersions(ctx, operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest{
        RepoSlug: "dolorum",
        Workspace: "deleniti",
    }, operations.GetRepositoriesWorkspaceRepoSlugVersionsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedVersions != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugVersionsVersionID

Returns the specified issue tracker version object.

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
    res, err := s.IssueTracker.GetRepositoriesWorkspaceRepoSlugVersionsVersionID(ctx, operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIDRequest{
        RepoSlug: "omnis",
        VersionID: 896672,
        Workspace: "distinctio",
    }, operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugIssues

Creates a new issue.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

The authenticated user is used for the issue's `reporter` field.

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
    res, err := s.IssueTracker.PostRepositoriesWorkspaceRepoSlugIssues(ctx, operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest{
        RequestBody: map[string]interface{}{
            "nihil": "ipsum",
            "voluptate": "id",
            "saepe": "eius",
            "aspernatur": "perferendis",
        },
        RepoSlug: "amet",
        Workspace: "optio",
    }, operations.PostRepositoriesWorkspaceRepoSlugIssuesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugIssuesExport

A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

For example, you can run:

curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
issues/export

When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
'Location' response header. This url is the endpoint for where the user can obtain their zip files."

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
    res, err := s.IssueTracker.PostRepositoriesWorkspaceRepoSlugIssuesExport(ctx, operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest{
        RequestBody: map[string]interface{}{
            "ad": "saepe",
            "suscipit": "deserunt",
            "provident": "minima",
            "repellendus": "totam",
        },
        RepoSlug: "similique",
        Workspace: "alias",
    }, operations.PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity{
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

## PostRepositoriesWorkspaceRepoSlugIssuesImport

A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
existing issues will be deleted and replaced by the contents of the imported zip file.

Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
"archive," which needs to be a file field:

```
$ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
```

When the import job is accepted, here is example output:

```
< HTTP/1.1 202 Accepted

{
    "type": "issue_job_status",
    "status": "ACCEPTED",
    "phase": "Attachments",
    "total": 15,
    "count": 0,
    "percent": 0
}
```

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
    res, err := s.IssueTracker.PostRepositoriesWorkspaceRepoSlugIssuesImport(ctx, operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest{
        RepoSlug: "at",
        Workspace: "quaerat",
    }, operations.PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueJobStatus != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments

Upload new issue attachments.

To upload files, perform a `multipart/form-data` POST containing one
or more file fields.

When a file is uploaded with the same name as an existing attachment,
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
    res, err := s.IssueTracker.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachments(ctx, operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest{
        IssueID: "tempora",
        RepoSlug: "vel",
        Workspace: "quod",
    }, operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity{
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

## PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges

Makes a change to the specified issue.

For example, to change an issue's state and assignee, create a new
change object that modifies these fields:

```
curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
  -s -u evzijst -X POST -H "Content-Type: application/json" \
  -d '{
    "changes": {
      "assignee_account_id": {
        "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
      },
      "state": {
        "new": 'resolved"
      }
    }
    "message": {
      "raw": "This is now resolved."
    }
  }'
```

The above example also includes a custom comment to go alongside the
change. This comment will also be visible on the issue page in the UI.

The fields of the `changes` object are strings, not objects. This
allows for immutable change log records, even after user accounts,
milestones, or other objects recorded in a change entry, get renamed or
deleted.

The `assignee_account_id` field stores the account id. When POSTing a
new change and changing the assignee, the client should therefore use
the user's account_id in the `changes.assignee_account_id.new` field.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

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
    res, err := s.IssueTracker.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChanges(ctx, operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest{
        RequestBody: map[string]interface{}{
            "qui": "dolorum",
            "a": "esse",
            "harum": "iusto",
            "ipsum": "quisquam",
        },
        IssueID: "tenetur",
        RepoSlug: "amet",
        Workspace: "tempore",
    }, operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueChange != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments

Creates a new issue comment.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
  -X POST -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "Lorem ipsum."}}'
```

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
    res, err := s.IssueTracker.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDComments(ctx, operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsRequest{
        RequestBody: map[string]interface{}{
            "numquam": "enim",
            "dolorem": "sapiente",
            "totam": "nihil",
            "sit": "expedita",
        },
        IssueID: "neque",
        RepoSlug: "sed",
        Workspace: "vel",
    }, operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsSecurity{
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

## PutRepositoriesWorkspaceRepoSlugIssuesIssueID

Modifies the issue.

```
$ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
  -u evzijst -s -X PUT -H 'Content-Type: application/json' \
  -d '{
  "title": "Updated title",
  "assignee": {
    "account_id": "5d5355e8c6b9320d9ea5b28d"
  },
  "priority": "minor",
  "version": {
    "name": "1.0"
  },
  "component": null
}'
```

This example changes the `title`, `assignee`, `priority` and the
`version`. It also removes the value of the `component` from the issue
by setting the field to `null`. Any field not present keeps its existing
value.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

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
    res, err := s.IssueTracker.PutRepositoriesWorkspaceRepoSlugIssuesIssueID(ctx, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDRequest{
        IssueID: "libero",
        RepoSlug: "voluptas",
        Workspace: "deserunt",
    }, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID

Updates the content of the specified issue comment. Note that only
the `content.raw` field can be modified.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
  -X PUT -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "Lorem ipsum."}'
```

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
    res, err := s.IssueTracker.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentID(ctx, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDRequest{
        RequestBody: map[string]interface{}{
            "ipsum": "incidunt",
            "qui": "cupiditate",
        },
        CommentID: 807581,
        IssueID: "pariatur",
        RepoSlug: "soluta",
        Workspace: "dicta",
    }, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDCommentsCommentIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote

Vote for this issue.

To cast your vote, do an empty PUT. The 204 status code indicates that
the operation was successful.

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
    res, err := s.IssueTracker.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVote(ctx, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest{
        IssueID: "laborum",
        RepoSlug: "totam",
        Workspace: "incidunt",
    }, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Error != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch

Start watching this issue.

To start watching this issue, do an empty PUT. The 204 status code
indicates that the operation was successful.

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
    res, err := s.IssueTracker.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatch(ctx, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchRequest{
        IssueID: "aspernatur",
        RepoSlug: "dolores",
        Workspace: "distinctio",
    }, operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIDWatchSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Error != nil {
        // handle response
    }
}
```
