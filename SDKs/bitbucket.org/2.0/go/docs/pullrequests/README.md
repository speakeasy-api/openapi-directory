# Pullrequests

## Overview

Pull requests are a feature that makes it easier for developers
to collaborate using Bitbucket. They provide a user-friendly web
interface for discussing proposed changes before integrating them
into the official project.


### Available Operations

* [DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#deleterepositoriesworkspacereposlugdefaultreviewerstargetusername) - Remove a user from the default reviewers
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove](#deleterepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Unapprove a pull request
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID](#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Delete a comment on a pull request
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve](#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Reopen a comment thread
* [DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges](#deleterepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Remove change request for a pull request
* [GetPullrequestsForCommit](#getpullrequestsforcommit) - List pull requests that contain a commit
* [GetPullrequestsSelectedUser](#getpullrequestsselecteduser) - List pull requests for a user
* [GetRepositoriesWorkspaceRepoSlugDefaultReviewers](#getrepositoriesworkspacereposlugdefaultreviewers) - List default reviewers
* [GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#getrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Get a default reviewer
* [GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers](#getrepositoriesworkspacereposlugeffectivedefaultreviewers) - List effective default reviewers
* [GetRepositoriesWorkspaceRepoSlugPullrequests](#getrepositoriesworkspacereposlugpullrequests) - List pull requests
* [GetRepositoriesWorkspaceRepoSlugPullrequestsActivity](#getrepositoriesworkspacereposlugpullrequestsactivity) - List a pull request activity log
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID](#getrepositoriesworkspacereposlugpullrequestspullrequestid) - Get a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity](#getrepositoriesworkspacereposlugpullrequestspullrequestidactivity) - List a pull request activity log
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments](#getrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - List comments on a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID](#getrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Get a comment on a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits](#getrepositoriesworkspacereposlugpullrequestspullrequestidcommits) - List commits on a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff](#getrepositoriesworkspacereposlugpullrequestspullrequestiddiff) - List changes in a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat](#getrepositoriesworkspacereposlugpullrequestspullrequestiddiffstat) - Get the diff stat for a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID](#getrepositoriesworkspacereposlugpullrequestspullrequestidmergetaskstatustaskid) - Get the merge task status for a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch](#getrepositoriesworkspacereposlugpullrequestspullrequestidpatch) - Get the patch for a pull request
* [GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses](#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequests](#postrepositoriesworkspacereposlugpullrequests) - Create a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove](#postrepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Approve a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments](#postrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - Create a comment on a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve](#postrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Resolve a comment thread
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline](#postrepositoriesworkspacereposlugpullrequestspullrequestiddecline) - Decline a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge](#postrepositoriesworkspacereposlugpullrequestspullrequestidmerge) - Merge a pull request
* [PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges](#postrepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Request changes for a pull request
* [PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#putrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Add a user to the default reviewers
* [PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID](#putrepositoriesworkspacereposlugpullrequestspullrequestid) - Update a pull request
* [PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID](#putrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Update a comment on a pull request

## DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Removes a default reviewer from the repository.

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
    res, err := s.Pullrequests.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest{
        RepoSlug: "earum",
        TargetUsername: "vel",
        Workspace: "in",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove

Redact the authenticated user's approval of the specified pull
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
    res, err := s.Pullrequests.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest{
        PullRequestID: 258684,
        RepoSlug: "libero",
        Workspace: "illum",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID

Deletes a specific pull request comment.

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
    res, err := s.Pullrequests.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest{
        CommentID: 742238,
        PullRequestID: 33304,
        RepoSlug: "aliquam",
        Workspace: "sapiente",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve

Reopen a comment thread

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
    res, err := s.Pullrequests.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolveRequest{
        CommentID: 119771,
        PullRequestID: 355369,
        RepoSlug: "reprehenderit",
        Workspace: "ullam",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolveSecurity{
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

## DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges

Remove change request for a pull request

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
    res, err := s.Pullrequests.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges(ctx, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest{
        PullRequestID: 391774,
        RepoSlug: "aut",
        Workspace: "voluptatum",
    }, operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity{
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

## GetPullrequestsForCommit

Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.

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
    res, err := s.Pullrequests.GetPullrequestsForCommit(ctx, operations.GetPullrequestsForCommitRequest{
        Commit: "qui",
        Page: sdk.Int(845358),
        Pagelen: sdk.Int(401259),
        RepoSlug: "deleniti",
        Workspace: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPullrequests != nil {
        // handle response
    }
}
```

## GetPullrequestsSelectedUser

Returns all pull requests authored by the specified user.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

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
    res, err := s.Pullrequests.GetPullrequestsSelectedUser(ctx, operations.GetPullrequestsSelectedUserRequest{
        SelectedUser: "dolorum",
        State: operations.GetPullrequestsSelectedUserStateEnumOpen.ToPointer(),
    }, operations.GetPullrequestsSelectedUserSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPullrequests != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDefaultReviewers

Returns the repository's default reviewers.

These are the users that are automatically added as reviewers on every
new pull request that is created. To obtain the repository's default reviewers
as well as the default reviewers inherited from the project, use the
[effective-default-reveiwers](#api-repositories-workspace-repo-slug-effective-default-reviewers-get) endpoint.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugDefaultReviewers(ctx, operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest{
        RepoSlug: "omnis",
        Workspace: "tenetur",
    }, operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedAccounts != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Returns the specified reviewer.

This can be used to test whether a user is among the repository's
default reviewers list. A 404 indicates that that specified user is not
a default reviewer.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx, operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest{
        RepoSlug: "quasi",
        TargetUsername: "at",
        Workspace: "et",
    }, operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers

Returns the repository's effective default reviewers. This includes both default
reviewers defined at the repository level as well as those inherited from its project.

These are the users that are automatically added as reviewers on every
new pull request that is created.

```
$ curl https://api.bitbucket.org/2.0/repositories/{workspace_slug}/{repo_slug}/effective-default-reviewers?page=1&pagelen=20
{
    "pagelen": 20,
    "values": [
        {
            "user": {
                "display_name": "Patrick Wolf",
                "uuid": "{9565301a-a3cf-4b5d-88f4-dd6af8078d7e}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer",
        },
        {
            "user": {
                "display_name": "Davis Lee",
                "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
            },
            "reviewer_type": "repository",
            "type": "default_reviewer",
        }
    ],
    "page": 1,
    "size": 2
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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers(ctx, operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest{
        RepoSlug: "voluptate",
        Workspace: "ipsa",
    }, operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedDefaultReviewerAndType != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPullrequests

Returns all pull requests on the specified repository.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequests(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest{
        RepoSlug: "minima",
        State: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnumOpen.ToPointer(),
        Workspace: "consectetur",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPullrequests != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPullrequestsActivity

Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsActivity(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest{
        RepoSlug: "adipisci",
        Workspace: "iste",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity{
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

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID

Returns the specified pull request.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest{
        PullRequestID: 839513,
        RepoSlug: "accusantium",
        Workspace: "rem",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pullrequest != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity

Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityRequest{
        PullRequestID: 15606,
        RepoSlug: "laudantium",
        Workspace: "eum",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivitySecurity{
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

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments

Returns a paginated list of the pull request's comments.

This includes both global, inline comments and replies.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more
details.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest{
        PullRequestID: 649832,
        RepoSlug: "ab",
        Workspace: "corrupti",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedPullrequestComments != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID

Returns a specific pull request comment.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest{
        CommentID: 251941,
        PullRequestID: 32465,
        RepoSlug: "dolor",
        Workspace: "occaecati",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullrequestComment != nil {
        // handle response
    }
}
```

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits

Returns a paginated list of the pull request's commits.

These are the commits that are being merged into the destination
branch when the pull requests gets accepted.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsRequest{
        PullRequestID: 253191,
        RepoSlug: "impedit",
        Workspace: "explicabo",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsSecurity{
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

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff

Redirects to the [repository diff](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diff-spec-get)
with the revspec that corresponds to the pull request.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffRequest{
        PullRequestID: 376226,
        RepoSlug: "aut",
        Workspace: "dignissimos",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffSecurity{
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

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat

Redirects to the [repository diffstat](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diffstat-spec-get)
with the revspec that corresponds to the pull request.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatRequest{
        PullRequestID: 115484,
        RepoSlug: "maiores",
        Workspace: "natus",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatSecurity{
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

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID

When merging a pull request takes too long, the client receives a
task ID along with a 202 status code. The task ID can be used in a call
to this endpoint to check the status of a merge task.

```
curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
```

If the merge task is not yet finished, a PENDING status will be returned.

```
HTTP/2 200
{
    "task_status": "PENDING",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    }
}
```

If the merge was successful, a SUCCESS status will be returned.

```
HTTP/2 200
{
    "task_status": "SUCCESS",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    },
    "merge_result": <the merged pull request object>
}
```

If the merge task failed, an error will be returned.

```
{
    "type": "error",
    "error": {
        "message": "<error message>"
    }
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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDRequest{
        PullRequestID: 244651,
        RepoSlug: "voluptatibus",
        TaskID: "voluptas",
        Workspace: "asperiores",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDSecurity{
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

## GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch

Redirects to the [repository patch](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-patch-spec-get)
with the revspec that corresponds to pull request.

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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchRequest{
        PullRequestID: 45659,
        RepoSlug: "ea",
        Workspace: "quaerat",
    }, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchSecurity{
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
    res, err := s.Pullrequests.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses(ctx, operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest{
        PullRequestID: 162954,
        Q: sdk.String("repellendus"),
        RepoSlug: "officia",
        Sort: sdk.String("maxime"),
        Workspace: "dignissimos",
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

## PostRepositoriesWorkspaceRepoSlugPullrequests

Creates a new pull request where the destination repository is
this repository and the author is the authenticated user.

The minimum required fields to create a pull request are `title` and
`source`, specified by a branch name.

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \
    -u my-username:my-password \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
        "title": "My Title",
        "source": {
            "branch": {
                "name": "staging"
            }
        }
    }'
```

If the pull request's `destination` is not specified, it will default
to the `repository.mainbranch`. To open a pull request to a
different branch, say from a feature branch to a staging branch,
specify a `destination` (same format as the `source`):

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "destination": {
        "branch": {
            "name": "staging"
        }
    }
}
```

Reviewers can be specified by adding an array of user objects as the
`reviewers` property.

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "reviewers": [
        {
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
    ]
}
```

Other fields:

* `description` - a string
* `close_source_branch` - boolean that specifies if the source branch should be closed upon merging

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequests(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest{
        RequestBody: map[string]interface{}{
            "asperiores": "nemo",
            "quae": "quaerat",
            "porro": "quod",
        },
        RepoSlug: "labore",
        Workspace: "ab",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pullrequest != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove

Approve the specified pull request as the authenticated user.

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest{
        PullRequestID: 241418,
        RepoSlug: "fuga",
        Workspace: "id",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveSecurity{
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

## PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments

Creates a new pull request comment.

Returns the newly created pull request comment.

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest{
        RequestBody: map[string]interface{}{
            "velit": "culpa",
            "est": "recusandae",
        },
        PullRequestID: 517309,
        RepoSlug: "fugiat",
        Workspace: "vel",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullrequestComment != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve

Resolve a comment thread

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolve(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolveRequest{
        CommentID: 497678,
        PullRequestID: 554688,
        RepoSlug: "vel",
        Workspace: "labore",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResolveSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentResolution != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline

Declines the pull request.

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineRequest{
        PullRequestID: 822560,
        RepoSlug: "facilis",
        Workspace: "cum",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pullrequest != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge

Merges the pull request.

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest{
        RequestBody: map[string]interface{}{
            "in": "corporis",
            "reiciendis": "assumenda",
        },
        Async: sdk.Bool(false),
        PullRequestID: 363161,
        RepoSlug: "recusandae",
        Workspace: "aliquid",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pullrequest != nil {
        // handle response
    }
}
```

## PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges

Request changes for a pull request

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
    res, err := s.Pullrequests.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges(ctx, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest{
        PullRequestID: 46007,
        RepoSlug: "cum",
        Workspace: "consectetur",
    }, operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesSecurity{
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

## PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Adds the specified user to the repository's list of default
reviewers.

This method is idempotent. Adding a user a second time has no effect.

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
    res, err := s.Pullrequests.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx, operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest{
        RepoSlug: "in",
        TargetUsername: "exercitationem",
        Workspace: "earum",
    }, operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID

Mutates the specified pull request.

This can be used to change the pull request's branches or description.

Only open pull requests can be mutated.

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
    res, err := s.Pullrequests.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID(ctx, operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest{
        RequestBody: map[string]interface{}{
            "numquam": "doloribus",
            "suscipit": "reiciendis",
            "quidem": "saepe",
            "necessitatibus": "dolore",
        },
        PullRequestID: 121059,
        RepoSlug: "asperiores",
        Workspace: "adipisci",
    }, operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pullrequest != nil {
        // handle response
    }
}
```

## PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID

Updates a specific pull request comment.

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
    res, err := s.Pullrequests.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx, operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest{
        RequestBody: map[string]interface{}{
            "amet": "beatae",
        },
        CommentID: 489509,
        PullRequestID: 950953,
        RepoSlug: "debitis",
        Workspace: "consectetur",
    }, operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullrequestComment != nil {
        // handle response
    }
}
```
