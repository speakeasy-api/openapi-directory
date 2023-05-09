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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#add-assignees-to-an-issue>

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
                "harum",
            },
        },
        IssueNumber: 115703,
        Owner: "architecto",
        Repo: "occaecati",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#add-labels-to-an-issue>

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
        IssueNumber: 289776,
        Owner: "quidem",
        Repo: "atque",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#check-if-a-user-can-be-assigned>

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
        Assignee: "laborum",
        Owner: "nam",
        Repo: "tenetur",
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

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-an-issue>

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
            Assignee: sdk.String("laboriosam"),
            Assignees: []string{
                "amet",
            },
            Body: sdk.String("deserunt"),
            Labels: []IssuesCreateRequestBodyLabels{
                operations.IssuesCreateRequestBodyLabels{},
                operations.IssuesCreateRequestBodyLabels{},
            },
            Milestone: &operations.IssuesCreateRequestBodyMilestone{},
            Title: operations.IssuesCreateRequestBodyTitle{},
        },
        Owner: "unde",
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

## IssuesCreateComment

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-an-issue-comment>

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
            Body: "provident",
        },
        IssueNumber: 833819,
        Owner: "delectus",
        Repo: "voluptates",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-a-label>

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
            Color: sdk.String("perferendis"),
            Description: sdk.String("est"),
            Name: "Ron Schulist",
        },
        Owner: "mollitia",
        Repo: "veniam",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-a-milestone>

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
            Description: sdk.String("voluptatem"),
            DueOn: types.MustTimeFromString("2020-03-30T02:42:49.718Z"),
            State: operations.IssuesCreateMilestoneRequestBodyStateEnumOpen.ToPointer(),
            Title: "Ms.",
        },
        Owner: "reprehenderit",
        Repo: "asperiores",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#delete-an-issue-comment>

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
        CommentID: 519952,
        Owner: "suscipit",
        Repo: "quidem",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#delete-a-label>

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
        Name: "Henry Koepp",
        Owner: "ea",
        Repo: "atque",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#delete-a-milestone>

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
        MilestoneNumber: 623295,
        Owner: "officiis",
        Repo: "officiis",
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

The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
[transferred](https://docs.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-an-issue>

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
        IssueNumber: 880107,
        Owner: "natus",
        Repo: "minima",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-an-issue-comment>

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
        CommentID: 133461,
        Owner: "ex",
        Repo: "maiores",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-an-issue-event>

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
        EventID: 544647,
        Owner: "at",
        Repo: "error",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-a-label>

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
        Name: "Shane Walker",
        Owner: "sunt",
        Repo: "recusandae",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-a-milestone>

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
        MilestoneNumber: 680697,
        Owner: "repellendus",
        Repo: "labore",
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
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issues-assigned-to-the-authenticated-user>

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
        Filter: operations.IssuesListFilterEnumAssigned.ToPointer(),
        Labels: sdk.String("repudiandae"),
        Orgs: sdk.Bool(false),
        Owned: sdk.Bool(false),
        Page: sdk.Int64(116098),
        PerPage: sdk.Int64(36033),
        Pulls: sdk.Bool(false),
        Since: types.MustTimeFromString("2022-10-29T04:59:49.150Z"),
        Sort: operations.IssuesListSortEnumCreated.ToPointer(),
        State: operations.IssuesListStateEnumClosed.ToPointer(),
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

Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-assignees>

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
        Owner: "velit",
        Page: sdk.Int64(952143),
        PerPage: sdk.Int64(562783),
        Repo: "magnam",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-comments>

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
        IssueNumber: 906355,
        Owner: "consequuntur",
        Page: sdk.Int64(580107),
        PerPage: sdk.Int64(886305),
        Repo: "perspiciatis",
        Since: types.MustTimeFromString("2022-10-06T02:44:18.773Z"),
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-comments-for-a-repository>

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
        Direction: operations.IssuesListCommentsForRepoDirectionEnumDesc.ToPointer(),
        Owner: "occaecati",
        Page: sdk.Int64(160230),
        PerPage: sdk.Int64(145870),
        Repo: "id",
        Since: types.MustTimeFromString("2022-07-24T07:17:21.827Z"),
        Sort: shared.SortEnumUpdated.ToPointer(),
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-events>

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
        IssueNumber: 76486,
        Owner: "corporis",
        Page: sdk.Int64(696463),
        PerPage: sdk.Int64(910994),
        Repo: "non",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-events-for-a-repository>

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
        Owner: "vero",
        Page: sdk.Int64(39615),
        PerPage: sdk.Int64(434156),
        Repo: "ipsa",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-timeline-events-for-an-issue>

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
        IssueNumber: 517612,
        Owner: "quae",
        Page: sdk.Int64(474668),
        PerPage: sdk.Int64(907733),
        Repo: "qui",
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
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user>

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
        Filter: operations.IssuesListForAuthenticatedUserFilterEnumMentioned.ToPointer(),
        Labels: sdk.String("necessitatibus"),
        Page: sdk.Int64(187552),
        PerPage: sdk.Int64(672582),
        Since: types.MustTimeFromString("2021-12-10T20:58:20.380Z"),
        Sort: operations.IssuesListForAuthenticatedUserSortEnumUpdated.ToPointer(),
        State: operations.IssuesListForAuthenticatedUserStateEnumOpen.ToPointer(),
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
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user>

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
        Direction: shared.DirectionEnumAsc.ToPointer(),
        Filter: operations.IssuesListForOrgFilterEnumAll.ToPointer(),
        Labels: sdk.String("alias"),
        Org: "corporis",
        Page: sdk.Int64(597303),
        PerPage: sdk.Int64(470649),
        Since: types.MustTimeFromString("2022-03-30T21:08:39.591Z"),
        Sort: operations.IssuesListForOrgSortEnumCreated.ToPointer(),
        State: operations.IssuesListForOrgStateEnumAll.ToPointer(),
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
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-repository-issues>

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
        Assignee: sdk.String("reiciendis"),
        Creator: sdk.String("dolores"),
        Direction: shared.DirectionEnumDesc.ToPointer(),
        Labels: sdk.String("minima"),
        Mentioned: sdk.String("dolore"),
        Milestone: sdk.String("dolorum"),
        Owner: "nesciunt",
        Page: sdk.Int64(63207),
        PerPage: sdk.Int64(925703),
        Repo: "omnis",
        Since: types.MustTimeFromString("2022-07-10T15:48:59.296Z"),
        Sort: operations.IssuesListForRepoSortEnumUpdated.ToPointer(),
        State: operations.IssuesListForRepoStateEnumOpen.ToPointer(),
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-labels-for-issues-in-a-milestone>

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
        MilestoneNumber: 633062,
        Owner: "adipisci",
        Page: sdk.Int64(890653),
        PerPage: sdk.Int64(514513),
        Repo: "eum",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-labels-for-a-repository>

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
        Owner: "nemo",
        Page: sdk.Int64(928219),
        PerPage: sdk.Int64(456520),
        Repo: "provident",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-labels-for-an-issue>

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
        IssueNumber: 337477,
        Owner: "eum",
        Page: sdk.Int64(970494),
        PerPage: sdk.Int64(592780),
        Repo: "aspernatur",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-milestones>

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
        Direction: operations.IssuesListMilestonesDirectionEnumAsc.ToPointer(),
        Owner: "quasi",
        Page: sdk.Int64(657020),
        PerPage: sdk.Int64(343392),
        Repo: "mollitia",
        Sort: operations.IssuesListMilestonesSortEnumCompleteness.ToPointer(),
        State: operations.IssuesListMilestonesStateEnumAll.ToPointer(),
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

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#lock-an-issue>

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
            LockReason: operations.IssuesLockRequestBodyLockReasonEnumResolved.ToPointer(),
        },
        IssueNumber: 402767,
        Owner: "aliquid",
        Repo: "accusantium",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#remove-all-labels-from-an-issue>

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
        IssueNumber: 999278,
        Owner: "doloribus",
        Repo: "ullam",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#remove-assignees-from-an-issue>

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
                "nam",
                "earum",
            },
        },
        IssueNumber: 637583,
        Owner: "laborum",
        Repo: "placeat",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#remove-a-label-from-an-issue>

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
        IssueNumber: 266697,
        Name: "Virgil Towne",
        Owner: "vitae",
        Repo: "rerum",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#set-labels-for-an-issue>

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
        IssueNumber: 272229,
        Owner: "quis",
        Repo: "inventore",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#unlock-an-issue>

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
        IssueNumber: 147685,
        Owner: "cumque",
        Repo: "quae",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues/#update-an-issue>

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
            Assignee: sdk.String("perferendis"),
            Assignees: []string{
                "aspernatur",
            },
            Body: sdk.String("eum"),
            Labels: []IssuesUpdateRequestBodyLabels{
                operations.IssuesUpdateRequestBodyLabels{},
                operations.IssuesUpdateRequestBodyLabels{},
            },
            Milestone: &operations.IssuesUpdateRequestBodyMilestone{},
            State: operations.IssuesUpdateRequestBodyStateEnumClosed.ToPointer(),
            Title: &operations.IssuesUpdateRequestBodyTitle{},
        },
        IssueNumber: 871083,
        Owner: "impedit",
        Repo: "eos",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#update-an-issue-comment>

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
            Body: "sapiente",
        },
        CommentID: 433279,
        Owner: "dicta",
        Repo: "minima",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#update-a-label>

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
            Color: sdk.String("beatae"),
            Description: sdk.String("cupiditate"),
            NewName: sdk.String("provident"),
        },
        Name: "Ed Weimann DVM",
        Owner: "perspiciatis",
        Repo: "maiores",
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
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#update-a-milestone>

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
            Description: sdk.String("debitis"),
            DueOn: types.MustTimeFromString("2022-03-21T23:02:35.494Z"),
            State: operations.IssuesUpdateMilestoneRequestBodyStateEnumOpen.ToPointer(),
            Title: sdk.String("Mrs."),
        },
        MilestoneNumber: 147808,
        Owner: "cumque",
        Repo: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Milestone != nil {
        // handle response
    }
}
```
