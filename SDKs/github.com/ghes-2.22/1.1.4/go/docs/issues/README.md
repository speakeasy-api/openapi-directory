# Issues

## Overview

Interact with GitHub Issues.

### Available Operations

* [IssuesAddAssignees](#issuesaddassignees) - Add assignees to an issue
* [IssuesAddLabels](#issuesaddlabels) - Add labels to an issue
* [IssuesCheckUserCanBeAssigned](#issuescheckusercanbeassigned) - Check if a user can be assigned
* [IssuesCreate](#issuescreate) - Create an issue
* [IssuesCreateComment](#issuescreatecomment) - Create an issue comment
* [IssuesCreateLabel](#issuescreatelabel) - Create a label
* [IssuesCreateMilestone](#issuescreatemilestone) - Create a milestone
* [IssuesDeleteComment](#issuesdeletecomment) - Delete an issue comment
* [IssuesDeleteLabel](#issuesdeletelabel) - Delete a label
* [IssuesDeleteMilestone](#issuesdeletemilestone) - Delete a milestone
* [IssuesGet](#issuesget) - Get an issue
* [IssuesGetComment](#issuesgetcomment) - Get an issue comment
* [IssuesGetEvent](#issuesgetevent) - Get an issue event
* [IssuesGetLabel](#issuesgetlabel) - Get a label
* [IssuesGetMilestone](#issuesgetmilestone) - Get a milestone
* [IssuesList](#issueslist) - List issues assigned to the authenticated user
* [IssuesListAssignees](#issueslistassignees) - List assignees
* [IssuesListComments](#issueslistcomments) - List issue comments
* [IssuesListCommentsForRepo](#issueslistcommentsforrepo) - List issue comments for a repository
* [IssuesListEvents](#issueslistevents) - List issue events
* [IssuesListEventsForRepo](#issueslisteventsforrepo) - List issue events for a repository
* [IssuesListEventsForTimeline](#issueslisteventsfortimeline) - List timeline events for an issue
* [IssuesListForAuthenticatedUser](#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [IssuesListForOrg](#issueslistfororg) - List organization issues assigned to the authenticated user
* [IssuesListForRepo](#issueslistforrepo) - List repository issues
* [IssuesListLabelsForMilestone](#issueslistlabelsformilestone) - List labels for issues in a milestone
* [IssuesListLabelsForRepo](#issueslistlabelsforrepo) - List labels for a repository
* [IssuesListLabelsOnIssue](#issueslistlabelsonissue) - List labels for an issue
* [IssuesListMilestones](#issueslistmilestones) - List milestones
* [IssuesLock](#issueslock) - Lock an issue
* [IssuesRemoveAllLabels](#issuesremovealllabels) - Remove all labels from an issue
* [IssuesRemoveAssignees](#issuesremoveassignees) - Remove assignees from an issue
* [IssuesRemoveLabel](#issuesremovelabel) - Remove a label from an issue
* [IssuesSetLabels](#issuessetlabels) - Set labels for an issue
* [IssuesUnlock](#issuesunlock) - Unlock an issue
* [IssuesUpdate](#issuesupdate) - Update an issue
* [IssuesUpdateComment](#issuesupdatecomment) - Update an issue comment
* [IssuesUpdateLabel](#issuesupdatelabel) - Update a label
* [IssuesUpdateMilestone](#issuesupdatemilestone) - Update a milestone

## IssuesAddAssignees

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#add-assignees-to-an-issue>

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
    res, err := s.Issues.IssuesAddAssignees(ctx, operations.IssuesAddAssigneesRequest{
        RequestBody: &operations.IssuesAddAssigneesRequestBody{
            Assignees: []string{
                "architecto",
                "suscipit",
                "sapiente",
            },
        },
        IssueNumber: 895386,
        Owner: "illo",
        Repo: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesAddLabels

Add labels to an issue

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#add-labels-to-an-issue>

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
    res, err := s.Issues.IssuesAddLabels(ctx, operations.IssuesAddLabelsRequest{
        RequestBody: &operations.IssuesAddLabelsRequestBody{},
        IssueNumber: 19300,
        Owner: "corrupti",
        Repo: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesCheckUserCanBeAssigned

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#check-if-a-user-can-be-assigned>

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
    res, err := s.Issues.IssuesCheckUserCanBeAssigned(ctx, operations.IssuesCheckUserCanBeAssignedRequest{
        Assignee: "incidunt",
        Owner: "sed",
        Repo: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesCreate

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#create-an-issue>

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
    res, err := s.Issues.IssuesCreate(ctx, operations.IssuesCreateRequest{
        RequestBody: operations.IssuesCreateRequestBody{
            Assignee: sdk.String("eius"),
            Assignees: []string{
                "ipsum",
                "ea",
                "occaecati",
                "quos",
            },
            Body: sdk.String("voluptatibus"),
            Labels: []IssuesCreateRequestBodyLabels{
                operations.IssuesCreateRequestBodyLabels{},
                operations.IssuesCreateRequestBodyLabels{},
            },
            Milestone: &operations.IssuesCreateRequestBodyMilestone{},
            Title: operations.IssuesCreateRequestBodyTitle{},
        },
        Owner: "tempora",
        Repo: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesCreateComment

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#create-an-issue-comment>

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
    res, err := s.Issues.IssuesCreateComment(ctx, operations.IssuesCreateCommentRequest{
        RequestBody: operations.IssuesCreateCommentRequestBody{
            Body: "reiciendis",
        },
        IssueNumber: 401713,
        Owner: "sit",
        Repo: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## IssuesCreateLabel

Create a label

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#create-a-label>

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
    res, err := s.Issues.IssuesCreateLabel(ctx, operations.IssuesCreateLabelRequest{
        RequestBody: operations.IssuesCreateLabelRequestBody{
            Color: sdk.String("officiis"),
            Description: sdk.String("praesentium"),
            Name: "Alex Gottlieb",
        },
        Owner: "rem",
        Repo: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Label != nil {
        // handle response
    }
}
```

## IssuesCreateMilestone

Create a milestone

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#create-a-milestone>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesCreateMilestone(ctx, operations.IssuesCreateMilestoneRequest{
        RequestBody: operations.IssuesCreateMilestoneRequestBody{
            Description: sdk.String("nobis"),
            DueOn: types.MustTimeFromString("2022-05-02T12:56:56.327Z"),
            State: operations.IssuesCreateMilestoneRequestBodyStateEnumOpen.ToPointer(),
            Title: "Dr.",
        },
        Owner: "reiciendis",
        Repo: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```

## IssuesDeleteComment

Delete an issue comment

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#delete-an-issue-comment>

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
    res, err := s.Issues.IssuesDeleteComment(ctx, operations.IssuesDeleteCommentRequest{
        CommentID: 168576,
        Owner: "aperiam",
        Repo: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesDeleteLabel

Delete a label

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#delete-a-label>

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
    res, err := s.Issues.IssuesDeleteLabel(ctx, operations.IssuesDeleteLabelRequest{
        Name: "Lorraine King IV",
        Owner: "exercitationem",
        Repo: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesDeleteMilestone

Delete a milestone

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#delete-a-milestone>

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
    res, err := s.Issues.IssuesDeleteMilestone(ctx, operations.IssuesDeleteMilestoneRequest{
        MilestoneNumber: 740098,
        Owner: "laboriosam",
        Repo: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesGet

The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
[transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://docs.github.com/enterprise-server@2.22/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#get-an-issue>

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
    res, err := s.Issues.IssuesGet(ctx, operations.IssuesGetRequest{
        IssueNumber: 530089,
        Owner: "error",
        Repo: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesGetComment

Get an issue comment

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#get-an-issue-comment>

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
    res, err := s.Issues.IssuesGetComment(ctx, operations.IssuesGetCommentRequest{
        CommentID: 710529,
        Owner: "debitis",
        Repo: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## IssuesGetEvent

Get an issue event

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#get-an-issue-event>

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
    res, err := s.Issues.IssuesGetEvent(ctx, operations.IssuesGetEventRequest{
        EventID: 677115,
        Owner: "nostrum",
        Repo: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueEvent != nil {
        // handle response
    }
}
```

## IssuesGetLabel

Get a label

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#get-a-label>

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
    res, err := s.Issues.IssuesGetLabel(ctx, operations.IssuesGetLabelRequest{
        Name: "Byron Thiel",
        Owner: "fugit",
        Repo: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Label != nil {
        // handle response
    }
}
```

## IssuesGetMilestone

Get a milestone

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#get-a-milestone>

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
    res, err := s.Issues.IssuesGetMilestone(ctx, operations.IssuesGetMilestoneRequest{
        MilestoneNumber: 856303,
        Owner: "voluptatem",
        Repo: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```

## IssuesList

List issues assigned to the authenticated user across all visible repositories including owned repositories, member
repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
necessarily assigned to you.


**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-issues-assigned-to-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesList(ctx, operations.IssuesListRequest{
        Collab: sdk.Bool(false),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Filter: operations.IssuesListFilterEnumCreated.ToPointer(),
        Labels: sdk.String("consequatur"),
        Orgs: sdk.Bool(false),
        Owned: sdk.Bool(false),
        Page: sdk.Int64(460220),
        PerPage: sdk.Int64(372679),
        Pulls: sdk.Bool(false),
        Since: types.MustTimeFromString("2022-06-21T08:29:37.931Z"),
        Sort: operations.IssuesListSortEnumUpdated.ToPointer(),
        State: operations.IssuesListStateEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListAssignees

Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-assignees>

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
    res, err := s.Issues.IssuesListAssignees(ctx, operations.IssuesListAssigneesRequest{
        Owner: "corporis",
        Page: sdk.Int64(89494),
        PerPage: sdk.Int64(502710),
        Repo: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## IssuesListComments

Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-issue-comments>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListComments(ctx, operations.IssuesListCommentsRequest{
        IssueNumber: 153627,
        Owner: "sit",
        Page: sdk.Int64(425508),
        PerPage: sdk.Int64(342611),
        Repo: "saepe",
        Since: types.MustTimeFromString("2022-12-25T18:52:36.117Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComments != nil {
        // handle response
    }
}
```

## IssuesListCommentsForRepo

By default, Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-issue-comments-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListCommentsForRepo(ctx, operations.IssuesListCommentsForRepoRequest{
        Direction: operations.IssuesListCommentsForRepoDirectionEnumAsc.ToPointer(),
        Owner: "reiciendis",
        Page: sdk.Int64(209750),
        PerPage: sdk.Int64(690894),
        Repo: "dicta",
        Since: types.MustTimeFromString("2022-06-04T08:15:04.756Z"),
        Sort: shared.SortEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComments != nil {
        // handle response
    }
}
```

## IssuesListEvents

List issue events

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-issue-events>

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
    res, err := s.Issues.IssuesListEvents(ctx, operations.IssuesListEventsRequest{
        IssueNumber: 695270,
        Owner: "atque",
        Page: sdk.Int64(671957),
        PerPage: sdk.Int64(724148),
        Repo: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueEventForIssues != nil {
        // handle response
    }
}
```

## IssuesListEventsForRepo

List issue events for a repository

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-issue-events-for-a-repository>

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
    res, err := s.Issues.IssuesListEventsForRepo(ctx, operations.IssuesListEventsForRepoRequest{
        Owner: "laboriosam",
        Page: sdk.Int64(2703),
        PerPage: sdk.Int64(227084),
        Repo: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueEvents != nil {
        // handle response
    }
}
```

## IssuesListEventsForTimeline

List timeline events for an issue

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-timeline-events-for-an-issue>

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
    res, err := s.Issues.IssuesListEventsForTimeline(ctx, operations.IssuesListEventsForTimelineRequest{
        IssueNumber: 454860,
        Owner: "unde",
        Page: sdk.Int64(972083),
        PerPage: sdk.Int64(588740),
        Repo: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimelineIssueEvents != nil {
        // handle response
    }
}
```

## IssuesListForAuthenticatedUser

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListForAuthenticatedUser(ctx, operations.IssuesListForAuthenticatedUserRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Filter: operations.IssuesListForAuthenticatedUserFilterEnumAll.ToPointer(),
        Labels: sdk.String("perferendis"),
        Page: sdk.Int64(667285),
        PerPage: sdk.Int64(696483),
        Since: types.MustTimeFromString("2022-03-10T00:10:29.953Z"),
        Sort: operations.IssuesListForAuthenticatedUserSortEnumComments.ToPointer(),
        State: operations.IssuesListForAuthenticatedUserStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListForOrg

List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListForOrg(ctx, operations.IssuesListForOrgRequest{
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Filter: operations.IssuesListForOrgFilterEnumMentioned.ToPointer(),
        Labels: sdk.String("voluptatem"),
        Org: "quisquam",
        Page: sdk.Int64(919532),
        PerPage: sdk.Int64(97243),
        Since: types.MustTimeFromString("2022-02-12T07:32:08.165Z"),
        Sort: operations.IssuesListForOrgSortEnumComments.ToPointer(),
        State: operations.IssuesListForOrgStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListForRepo

List issues in a repository.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-repository-issues>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesListForRepo(ctx, operations.IssuesListForRepoRequest{
        Assignee: sdk.String("suscipit"),
        Creator: sdk.String("quidem"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Labels: sdk.String("et"),
        Mentioned: sdk.String("esse"),
        Milestone: sdk.String("amet"),
        Owner: "assumenda",
        Page: sdk.Int64(410301),
        PerPage: sdk.Int64(539118),
        Repo: "error",
        Since: types.MustTimeFromString("2020-05-04T18:40:14.345Z"),
        Sort: operations.IssuesListForRepoSortEnumComments.ToPointer(),
        State: operations.IssuesListForRepoStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issues != nil {
        // handle response
    }
}
```

## IssuesListLabelsForMilestone

List labels for issues in a milestone

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-labels-for-issues-in-a-milestone>

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
    res, err := s.Issues.IssuesListLabelsForMilestone(ctx, operations.IssuesListLabelsForMilestoneRequest{
        MilestoneNumber: 328303,
        Owner: "aspernatur",
        Page: sdk.Int64(404425),
        PerPage: sdk.Int64(980581),
        Repo: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesListLabelsForRepo

List labels for a repository

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-labels-for-a-repository>

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
    res, err := s.Issues.IssuesListLabelsForRepo(ctx, operations.IssuesListLabelsForRepoRequest{
        Owner: "at",
        Page: sdk.Int64(621693),
        PerPage: sdk.Int64(502721),
        Repo: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesListLabelsOnIssue

List labels for an issue

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-labels-for-an-issue>

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
    res, err := s.Issues.IssuesListLabelsOnIssue(ctx, operations.IssuesListLabelsOnIssueRequest{
        IssueNumber: 922348,
        Owner: "atque",
        Page: sdk.Int64(541381),
        PerPage: sdk.Int64(120919),
        Repo: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesListMilestones

List milestones

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#list-milestones>

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
    res, err := s.Issues.IssuesListMilestones(ctx, operations.IssuesListMilestonesRequest{
        Direction: operations.IssuesListMilestonesDirectionEnumDesc.ToPointer(),
        Owner: "repellendus",
        Page: sdk.Int64(287119),
        PerPage: sdk.Int64(968287),
        Repo: "doloremque",
        Sort: operations.IssuesListMilestonesSortEnumCompleteness.ToPointer(),
        State: operations.IssuesListMilestonesStateEnumOpen.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestones != nil {
        // handle response
    }
}
```

## IssuesLock

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#lock-an-issue>

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
    res, err := s.Issues.IssuesLock(ctx, operations.IssuesLockRequest{
        RequestBody: &operations.IssuesLockRequestBody{
            LockReason: operations.IssuesLockRequestBodyLockReasonEnumOffTopic.ToPointer(),
        },
        IssueNumber: 106429,
        Owner: "dolores",
        Repo: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesRemoveAllLabels

Remove all labels from an issue

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#remove-all-labels-from-an-issue>

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
    res, err := s.Issues.IssuesRemoveAllLabels(ctx, operations.IssuesRemoveAllLabelsRequest{
        IssueNumber: 389135,
        Owner: "velit",
        Repo: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesRemoveAssignees

Removes one or more assignees from an issue.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#remove-assignees-from-an-issue>

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
    res, err := s.Issues.IssuesRemoveAssignees(ctx, operations.IssuesRemoveAssigneesRequest{
        RequestBody: &operations.IssuesRemoveAssigneesRequestBody{
            Assignees: []string{
                "magnam",
                "saepe",
                "consequuntur",
            },
        },
        IssueNumber: 580107,
        Owner: "officiis",
        Repo: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesRemoveLabel

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#remove-a-label-from-an-issue>

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
    res, err := s.Issues.IssuesRemoveLabel(ctx, operations.IssuesRemoveLabelRequest{
        IssueNumber: 446394,
        Name: "Tricia McClure",
        Owner: "id",
        Repo: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesSetLabels

Removes any previous labels and sets the new labels for an issue.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#set-labels-for-an-issue>

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
    res, err := s.Issues.IssuesSetLabels(ctx, operations.IssuesSetLabelsRequest{
        RequestBody: &operations.IssuesSetLabelsRequestBody{},
        IssueNumber: 440264,
        Owner: "error",
        Repo: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Labels != nil {
        // handle response
    }
}
```

## IssuesUnlock

Users with push access can unlock an issue's conversation.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#unlock-an-issue>

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
    res, err := s.Issues.IssuesUnlock(ctx, operations.IssuesUnlockRequest{
        IssueNumber: 361306,
        Owner: "quidem",
        Repo: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssuesUpdate

Issue owners and users with push access can edit an issue.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues/#update-an-issue>

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
    res, err := s.Issues.IssuesUpdate(ctx, operations.IssuesUpdateRequest{
        RequestBody: &operations.IssuesUpdateRequestBody{
            Assignee: sdk.String("non"),
            Assignees: []string{
                "doloremque",
                "iure",
                "ipsa",
                "totam",
            },
            Body: sdk.String("quae"),
            Labels: []IssuesUpdateRequestBodyLabels{
                operations.IssuesUpdateRequestBodyLabels{},
                operations.IssuesUpdateRequestBodyLabels{},
            },
            Milestone: &operations.IssuesUpdateRequestBodyMilestone{},
            State: operations.IssuesUpdateRequestBodyStateEnumClosed.ToPointer(),
            Title: &operations.IssuesUpdateRequestBodyTitle{},
        },
        IssueNumber: 184362,
        Owner: "cum",
        Repo: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Issue != nil {
        // handle response
    }
}
```

## IssuesUpdateComment

Update an issue comment

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#update-an-issue-comment>

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
    res, err := s.Issues.IssuesUpdateComment(ctx, operations.IssuesUpdateCommentRequest{
        RequestBody: operations.IssuesUpdateCommentRequestBody{
            Body: "necessitatibus",
        },
        CommentID: 187552,
        Owner: "laborum",
        Repo: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueComment != nil {
        // handle response
    }
}
```

## IssuesUpdateLabel

Update a label

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#update-a-label>

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
    res, err := s.Issues.IssuesUpdateLabel(ctx, operations.IssuesUpdateLabelRequest{
        RequestBody: &operations.IssuesUpdateLabelRequestBody{
            Color: sdk.String("voluptatum"),
            Description: sdk.String("rem"),
            NewName: sdk.String("aliquam"),
        },
        Name: "Winifred Abernathy",
        Owner: "nihil",
        Repo: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Label != nil {
        // handle response
    }
}
```

## IssuesUpdateMilestone

Update a milestone

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/issues#update-a-milestone>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Issues.IssuesUpdateMilestone(ctx, operations.IssuesUpdateMilestoneRequest{
        RequestBody: &operations.IssuesUpdateMilestoneRequestBody{
            Description: sdk.String("voluptas"),
            DueOn: types.MustTimeFromString("2022-01-08T11:20:38.839Z"),
            State: operations.IssuesUpdateMilestoneRequestBodyStateEnumClosed.ToPointer(),
            Title: sdk.String("Mr."),
        },
        MilestoneNumber: 663866,
        Owner: "minima",
        Repo: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```
