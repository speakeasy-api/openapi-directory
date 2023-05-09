# Commits

## Overview

These are the repository's commits. They are paginated and returned in
reverse chronological order, similar to the output of git log.


### Available Operations

* [BulkCreateOrUpdateAnnotations](#bulkcreateorupdateannotations) - Bulk create or update annotations
* [CreateOrUpdateAnnotation](#createorupdateannotation) - Create or update an annotation
* [CreateOrUpdateReport](#createorupdatereport) - Create or update a report
* [DeleteAnnotation](#deleteannotation) - Delete an annotation
* [DeleteReport](#deletereport) - Delete a report
* [DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove](#deleterepositoriesworkspacereposlugcommitcommitapprove) - Unapprove a commit
* [DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID](#deleterepositoriesworkspacereposlugcommitcommitcommentscommentid) - Delete a commit comment
* [GetAnnotation](#getannotation) - Get an annotation
* [GetAnnotationsForReport](#getannotationsforreport) - List annotations
* [GetReport](#getreport) - Get a report
* [GetReportsForCommit](#getreportsforcommit) - List reports
* [GetRepositoriesWorkspaceRepoSlugCommitCommit](#getrepositoriesworkspacereposlugcommitcommit) - Get a commit
* [GetRepositoriesWorkspaceRepoSlugCommitCommitComments](#getrepositoriesworkspacereposlugcommitcommitcomments) - List a commit's comments
* [GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID](#getrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Get a commit comment
* [GetRepositoriesWorkspaceRepoSlugCommits](#getrepositoriesworkspacereposlugcommits) - List commits
* [GetRepositoriesWorkspaceRepoSlugCommitsRevision](#getrepositoriesworkspacereposlugcommitsrevision) - List commits for revision
* [GetRepositoriesWorkspaceRepoSlugDiffSpec](#getrepositoriesworkspacereposlugdiffspec) - Compare two commits
* [GetRepositoriesWorkspaceRepoSlugDiffstatSpec](#getrepositoriesworkspacereposlugdiffstatspec) - Compare two commit diff stats
* [GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec](#getrepositoriesworkspacereposlugmergebaserevspec) - Get the common ancestor between two commits
* [GetRepositoriesWorkspaceRepoSlugPatchSpec](#getrepositoriesworkspacereposlugpatchspec) - Get a patch for two commits
* [PostRepositoriesWorkspaceRepoSlugCommitCommitApprove](#postrepositoriesworkspacereposlugcommitcommitapprove) - Approve a commit
* [PostRepositoriesWorkspaceRepoSlugCommitCommitComments](#postrepositoriesworkspacereposlugcommitcommitcomments) - Create comment for a commit
* [PostRepositoriesWorkspaceRepoSlugCommits](#postrepositoriesworkspacereposlugcommits) - List commits with include/exclude
* [PostRepositoriesWorkspaceRepoSlugCommitsRevision](#postrepositoriesworkspacereposlugcommitsrevision) - List commits for revision using include/exclude
* [PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID](#putrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Update a commit comment

## BulkCreateOrUpdateAnnotations

Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.

### Sample cURL request:
```
curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
--header 'Content-Type: application/json' \
--data-raw '[
  {
        "external_id": "mysystem-annotation001",
        "title": "Security scan report",
        "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.",
        "severity": "HIGH",
      "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
        "line": 42
  },
  {
        "external_id": "mySystem-annotation002",
        "title": "Bug report",
        "annotation_type": "BUG",
        "result": "FAILED",
        "summary": "This line might introduce a bug.",
        "severity": "MEDIUM",
      "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
        "line": 13
  }
]'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.


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
    res, err := s.Commits.BulkCreateOrUpdateAnnotations(ctx, operations.BulkCreateOrUpdateAnnotationsRequest{
        RequestBody: []map[string]interface{}{
            map[string]interface{}{
                "molestias": "excepturi",
                "pariatur": "modi",
                "praesentium": "rem",
            },
        },
        Commit: "voluptates",
        RepoSlug: "quasi",
        ReportID: "repudiandae",
        Workspace: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAnnotations != nil {
        // handle response
    }
}
```

## CreateOrUpdateAnnotation

Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Security scan report",
    "annotation_type": "VULNERABILITY",
    "summary": "This line represents a security thread.",
    "severity": "HIGH",
    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
    "line": 42
}'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.


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
    res, err := s.Commits.CreateOrUpdateAnnotation(ctx, operations.CreateOrUpdateAnnotationRequest{
        RequestBody: map[string]interface{}{
            "itaque": "incidunt",
        },
        AnnotationID: "enim",
        Commit: "consequatur",
        RepoSlug: "est",
        ReportID: "quibusdam",
        Workspace: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAnnotation != nil {
        // handle response
    }
}
```

## CreateOrUpdateReport

Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Security scan report",
    "details": "This pull request introduces 10 new dependency vulnerabilities.",
    "report_type": "SECURITY",
    "reporter": "mySystem",
    "link": "http://www.mysystem.com/reports/001",
    "result": "FAILED",
    "data": [
        {
            "title": "Duration (seconds)",
            "type": "DURATION",
            "value": 14
        },
        {
            "title": "Safe to merge?",
            "type": "BOOLEAN",
            "value": false
        }
    ]
}'
```

### Possible field values:
report_type: SECURITY, COVERAGE, TEST, BUG
result: PASSED, FAILED, PENDING
data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

#### Data field formats
| Type  Field   | Value Field Type  | Value Field Display |
|:--------------|:------------------|:--------------------|
| None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
| BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
| DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
| DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
| LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
| NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
| PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
| TEXT | String | The value will be read as a JSON string and will be displayed as-is |

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.


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
    res, err := s.Commits.CreateOrUpdateReport(ctx, operations.CreateOrUpdateReportRequest{
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "labore": "modi",
            "qui": "aliquid",
        },
        Commit: "cupiditate",
        RepoSlug: "quos",
        ReportID: "perferendis",
        Workspace: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## DeleteAnnotation

Deletes a single Annotation matching the provided ID.

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
    res, err := s.Commits.DeleteAnnotation(ctx, operations.DeleteAnnotationRequest{
        AnnotationID: "assumenda",
        Commit: "ipsam",
        RepoSlug: "alias",
        ReportID: "fugit",
        Workspace: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteReport

Deletes a single Report matching the provided ID.

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
    res, err := s.Commits.DeleteReport(ctx, operations.DeleteReportRequest{
        Commit: "excepturi",
        RepoSlug: "tempora",
        ReportID: "facilis",
        Workspace: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove

Redact the authenticated user's approval of the specified commit.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

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
    res, err := s.Commits.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest{
        Commit: "labore",
        RepoSlug: "delectus",
        Workspace: "eum",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID

Deletes the specified commit comment.

Note that deleting comments that have visible replies that point to
them will not really delete the resource. This is to retain the integrity
of the original comment tree. Instead, the `deleted` element is set to
`true` and the content is blanked out. The comment will continue to be
returned by the collections and self endpoints.

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
    res, err := s.Commits.DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest{
        CommentID: 248753,
        Commit: "eligendi",
        RepoSlug: "sint",
        Workspace: "aliquid",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity{
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

## GetAnnotation

Returns a single Annotation matching the provided ID.

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
    res, err := s.Commits.GetAnnotation(ctx, operations.GetAnnotationRequest{
        AnnotationID: "provident",
        Commit: "necessitatibus",
        RepoSlug: "sint",
        ReportID: "officia",
        Workspace: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAnnotation != nil {
        // handle response
    }
}
```

## GetAnnotationsForReport

Returns a paginated list of Annotations for a specified report.

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
    res, err := s.Commits.GetAnnotationsForReport(ctx, operations.GetAnnotationsForReportRequest{
        Commit: "debitis",
        RepoSlug: "a",
        ReportID: "dolorum",
        Workspace: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedAnnotations != nil {
        // handle response
    }
}
```

## GetReport

Returns a single Report matching the provided ID.

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
    res, err := s.Commits.GetReport(ctx, operations.GetReportRequest{
        Commit: "in",
        RepoSlug: "illum",
        ReportID: "maiores",
        Workspace: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## GetReportsForCommit

Returns a paginated list of Reports linked to this commit.

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
    res, err := s.Commits.GetReportsForCommit(ctx, operations.GetReportsForCommitRequest{
        Commit: "dicta",
        RepoSlug: "magnam",
        Workspace: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedReports != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugCommitCommit

Returns the specified commit.

Example:

```
$ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
{
    "rendered": {
        "message": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
        }
    },
    "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
    "repository": {
        "name": "geordi",
        "type": "repository",
        "full_name": "bitbucket/geordi",
        "links": {
            "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
            },
            "html": {
                "href": "https://bitbucket.org/bitbucket/geordi"
            },
            "avatar": {
                "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
            }
        },
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "comments": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
        },
        "patch": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "html": {
            "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "diff": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "approve": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
        },
        "statuses": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
        }
    },
    "author": {
        "raw": "Brodie Rao <a@b.c>",
        "type": "author",
        "user": {
            "display_name": "Brodie Rao",
            "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
                },
                "html": {
                    "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
                },
                "avatar": {
                    "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
                }
            },
            "type": "user",
            "nickname": "brodie",
            "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
        }
    },
    "summary": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
    },
    "participants": [],
    "parents": [
        {
            "type": "commit",
            "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
                },
                "html": {
                    "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
                }
            }
        }
    ],
    "date": "2012-07-16T19:37:54+00:00",
    "message": "Add a GEORDI_OUTPUT_DIR setting",
    "type": "commit"
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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugCommitCommit(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest{
        Commit: "facere",
        RepoSlug: "ea",
        Workspace: "aliquid",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commit != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugCommitCommitComments

Returns the commit's comments.

This includes both global and inline comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugCommitCommitComments(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest{
        Commit: "laborum",
        Q: sdk.String("accusamus"),
        RepoSlug: "non",
        Sort: sdk.String("occaecati"),
        Workspace: "enim",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedCommitComments != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID

Returns the specified commit comment.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest{
        CommentID: 881736,
        Commit: "delectus",
        RepoSlug: "quidem",
        Workspace: "provident",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitComment != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugCommits

These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

#### GET /repositories/{workspace}/{repo_slug}/commits/

Returns all commits in the repo in topological order (newest commit
first). All branches and tags are included (similar to
`git log --all`).

#### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

Returns all commits in the repo that are not on master
(similar to `git log --all ^master`).

#### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
`fubar` (similar to `git log foo bar ^fu ^fubar`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

#### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed the file README.md.

#### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugCommits(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest{
        RepoSlug: "nam",
        Workspace: "id",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedChangeset != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugCommitsRevision

These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

#### GET /repositories/{workspace}/{repo_slug}/commits/master

Returns all commits on ref `master` (similar to `git log master`).

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

Returns all commits on ref `dev` or `foo`, except those that are reachable on
`master` (similar to `git log dev foo ^master`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
that changed the file README.md.

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

Returns all commits that are on refs `dev` or `foo`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugCommitsRevision(ctx, operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest{
        RepoSlug: "blanditiis",
        Revision: "deleniti",
        Workspace: "sapiente",
    }, operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedChangeset != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDiffSpec

Produces a raw git-style diff.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `topic` query
parameter is true or absent, this API produces a 2-way three dot diff.
This is the diff between source commit and the merge base of the source
commit and the destination commit. When the `topic` query param is false,
a simple git-style diff is produced.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
  compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Comparison to patches

While similar to patches, diffs:

* Don't have a commit header (username, commit message, etc)
* Support the optional `path=foo/bar.py` query param to filter
  the diff to just that one file diff

#### Response

The raw diff is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugDiffSpec(ctx, operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest{
        Binary: sdk.Bool(false),
        Context: sdk.Int64(230533),
        IgnoreWhitespace: sdk.Bool(false),
        Merge: sdk.Bool(false),
        Path: sdk.String("deserunt"),
        Renames: sdk.Bool(false),
        RepoSlug: "nisi",
        Spec: "vel",
        Topic: sdk.Bool(false),
        Workspace: "natus",
    }, operations.GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity{
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

## GetRepositoriesWorkspaceRepoSlugDiffstatSpec

Produces a response in JSON format with a record for every path
modified, including information on the type of the change and the
number of lines added and removed.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `topic` query
parameter is true or absent, this API produces a 2-way three dot diff.
This is the diff between source commit and the merge base of the source
commit and the destination commit. When the `topic` query param is false,
a simple git-style diff is produced.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
  compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Sample output
```
curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
{
    "pagelen": 500,
    "values": [
        {
            "type": "diffstat",
            "status": "modified",
            "lines_removed": 1,
            "lines_added": 2,
            "old": {
                "path": "setup.py",
                "escaped_path": "setup.py",
                "type": "commit_file",
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
                    }
                }
            },
            "new": {
                "path": "setup.py",
                "escaped_path": "setup.py",
                "type": "commit_file",
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
                    }
                }
            }
        }
    ],
    "page": 1,
    "size": 1
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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugDiffstatSpec(ctx, operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest{
        IgnoreWhitespace: sdk.Bool(false),
        Merge: sdk.Bool(false),
        Path: sdk.String("omnis"),
        Renames: sdk.Bool(false),
        RepoSlug: "molestiae",
        Spec: "perferendis",
        Topic: sdk.Bool(false),
        Workspace: "nihil",
    }, operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedDiffstats != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec

Returns the best common ancestor between two commits, specified in a revspec
of 2 commits (e.g. 3a8b42..9ff173).

If more than one best common ancestor exists, only one will be returned. It is
unspecified which will be returned.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec(ctx, operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest{
        RepoSlug: "magnam",
        Revspec: "distinctio",
        Workspace: "id",
    }, operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commit != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPatchSpec

Produces a raw patch for a single commit (diffed against its first
parent), or a patch-series for a revspec of 2 commits (e.g.
`3a8b42..9ff173` where the first commit represents the source and the
second commit the destination).

In case of the latter (diffing a revspec), a patch series is returned
for the commits on the source branch (`3a8b42` and its ancestors in
our example).

While similar to diffs, patches:

* Have a commit header (username, commit message, etc)
* Do not support the `path=foo/bar.py` query parameter

The raw patch is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

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
    res, err := s.Commits.GetRepositoriesWorkspaceRepoSlugPatchSpec(ctx, operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest{
        RepoSlug: "labore",
        Spec: "labore",
        Workspace: "suscipit",
    }, operations.GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity{
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

## PostRepositoriesWorkspaceRepoSlugCommitCommitApprove

Approve the specified commit as the authenticated user.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

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
    res, err := s.Commits.PostRepositoriesWorkspaceRepoSlugCommitCommitApprove(ctx, operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest{
        Commit: "natus",
        RepoSlug: "nobis",
        Workspace: "eum",
    }, operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Participant != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugCommitCommitComments

Creates new comment on the specified commit.

To post a reply to an existing comment, include the `parent.id` field:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
  -X POST -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "One more thing!"},
       "parent": {"id": 5728901}}'
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
    res, err := s.Commits.PostRepositoriesWorkspaceRepoSlugCommitCommitComments(ctx, operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest{
        RequestBody: map[string]interface{}{
            "aspernatur": "architecto",
            "magnam": "et",
            "excepturi": "ullam",
            "provident": "quos",
        },
        Commit: "sint",
        RepoSlug: "accusantium",
        Workspace: "mollitia",
    }, operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity{
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

## PostRepositoriesWorkspaceRepoSlugCommits

Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

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
    res, err := s.Commits.PostRepositoriesWorkspaceRepoSlugCommits(ctx, operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest{
        RepoSlug: "reiciendis",
        Workspace: "mollitia",
    }, operations.PostRepositoriesWorkspaceRepoSlugCommitsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedChangeset != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugCommitsRevision

Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

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
    res, err := s.Commits.PostRepositoriesWorkspaceRepoSlugCommitsRevision(ctx, operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest{
        RepoSlug: "ad",
        Revision: "eum",
        Workspace: "dolor",
    }, operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedChangeset != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID

Used to update the contents of a comment. Only the content of the comment can be updated.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \
  -X PUT -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "One more thing!"}'
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
    res, err := s.Commits.PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID(ctx, operations.PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest{
        RequestBody: map[string]interface{}{
            "odit": "nemo",
            "quasi": "iure",
            "doloribus": "debitis",
            "eius": "maxime",
        },
        CommentID: 537023,
        Commit: "facilis",
        RepoSlug: "in",
        Workspace: "architecto",
    }, operations.PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDSecurity{
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
