# Pulls

## Overview

Interact with GitHub Pull Requests.

### Available Operations

* [PullsCheckIfMerged](#pullscheckifmerged) - Check if a pull request has been merged
* [PullsCreate](#pullscreate) - Create a pull request
* [PullsCreateReplyForReviewComment](#pullscreatereplyforreviewcomment) - Create a reply for a review comment
* [PullsCreateReview](#pullscreatereview) - Create a review for a pull request
* [PullsCreateReviewComment](#pullscreatereviewcomment) - Create a review comment for a pull request
* [PullsDeletePendingReview](#pullsdeletependingreview) - Delete a pending review for a pull request
* [PullsDeleteReviewComment](#pullsdeletereviewcomment) - Delete a review comment for a pull request
* [PullsDismissReview](#pullsdismissreview) - Dismiss a review for a pull request
* [PullsGet](#pullsget) - Get a pull request
* [PullsGetReview](#pullsgetreview) - Get a review for a pull request
* [PullsGetReviewComment](#pullsgetreviewcomment) - Get a review comment for a pull request
* [PullsList](#pullslist) - List pull requests
* [PullsListCommentsForReview](#pullslistcommentsforreview) - List comments for a pull request review
* [PullsListCommits](#pullslistcommits) - List commits on a pull request
* [PullsListFiles](#pullslistfiles) - List pull requests files
* [PullsListRequestedReviewers](#pullslistrequestedreviewers) - List requested reviewers for a pull request
* [PullsListReviewComments](#pullslistreviewcomments) - List review comments on a pull request
* [PullsListReviewCommentsForRepo](#pullslistreviewcommentsforrepo) - List review comments in a repository
* [PullsListReviews](#pullslistreviews) - List reviews for a pull request
* [PullsMerge](#pullsmerge) - Merge a pull request
* [PullsRemoveRequestedReviewers](#pullsremoverequestedreviewers) - Remove requested reviewers from a pull request
* [PullsRequestReviewers](#pullsrequestreviewers) - Request reviewers for a pull request
* [PullsSubmitReview](#pullssubmitreview) - Submit a review for a pull request
* [PullsUpdate](#pullsupdate) - Update a pull request
* [PullsUpdateBranch](#pullsupdatebranch) - Update a pull request branch
* [PullsUpdateReview](#pullsupdatereview) - Update a review for a pull request
* [PullsUpdateReviewComment](#pullsupdatereviewcomment) - Update a review comment for a pull request

## PullsCheckIfMerged

Check if a pull request has been merged

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#check-if-a-pull-request-has-been-merged>

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
    res, err := s.Pulls.PullsCheckIfMerged(ctx, operations.PullsCheckIfMergedRequest{
        Owner: "voluptate",
        PullNumber: 194023,
        Repo: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PullsCreate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

You can create a new pull request.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-pull-request>

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
    res, err := s.Pulls.PullsCreate(ctx, operations.PullsCreateRequest{
        RequestBody: operations.PullsCreateRequestBody{
            Base: "neque",
            Body: sdk.String("quo"),
            Draft: sdk.Bool(false),
            Head: "deleniti",
            Issue: sdk.Int64(1),
            MaintainerCanModify: sdk.Bool(false),
            Title: sdk.String("Dr."),
        },
        Owner: "iure",
        Repo: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequest != nil {
        // handle response
    }
}
```

## PullsCreateReplyForReviewComment

Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-reply-for-a-review-comment>

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
    res, err := s.Pulls.PullsCreateReplyForReviewComment(ctx, operations.PullsCreateReplyForReviewCommentRequest{
        RequestBody: operations.PullsCreateReplyForReviewCommentRequestBody{
            Body: "voluptatibus",
        },
        CommentID: 426904,
        Owner: "magnam",
        PullNumber: 842855,
        Repo: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComment != nil {
        // handle response
    }
}
```

## PullsCreateReview

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-review-for-a-pull-request>

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
    res, err := s.Pulls.PullsCreateReview(ctx, operations.PullsCreateReviewRequest{
        RequestBody: &operations.PullsCreateReviewRequestBody{
            Body: sdk.String("facere"),
            Comments: []PullsCreateReviewRequestBodyComments{
                operations.PullsCreateReviewRequestBodyComments{
                    Body: "architecto",
                    Line: sdk.Int64(28),
                    Path: "voluptatibus",
                    Position: sdk.Int64(156383),
                    Side: sdk.String("RIGHT"),
                    StartLine: sdk.Int64(26),
                    StartSide: sdk.String("LEFT"),
                },
                operations.PullsCreateReviewRequestBodyComments{
                    Body: "porro",
                    Line: sdk.Int64(28),
                    Path: "aliquam",
                    Position: sdk.Int64(247045),
                    Side: sdk.String("RIGHT"),
                    StartLine: sdk.Int64(26),
                    StartSide: sdk.String("LEFT"),
                },
                operations.PullsCreateReviewRequestBodyComments{
                    Body: "illo",
                    Line: sdk.Int64(28),
                    Path: "accusantium",
                    Position: sdk.Int64(424663),
                    Side: sdk.String("RIGHT"),
                    StartLine: sdk.Int64(26),
                    StartSide: sdk.String("LEFT"),
                },
            },
            CommitID: sdk.String("ea"),
            Event: operations.PullsCreateReviewRequestBodyEventEnumApprove.ToPointer(),
        },
        Owner: "vero",
        PullNumber: 568218,
        Repo: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsCreateReviewComment


Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-review-comment-for-a-pull-request>

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
    res, err := s.Pulls.PullsCreateReviewComment(ctx, operations.PullsCreateReviewCommentRequest{
        RequestBody: operations.PullsCreateReviewCommentRequestBody{
            Body: "velit",
            CommitID: sdk.String("ut"),
            InReplyTo: sdk.Int64(2),
            Line: sdk.Int64(596433),
            Path: sdk.String("earum"),
            Position: sdk.Int64(117525),
            Side: operations.PullsCreateReviewCommentRequestBodySideEnumRight.ToPointer(),
            StartLine: sdk.Int64(975884),
            StartSide: operations.PullsCreateReviewCommentRequestBodyStartSideEnumRight.ToPointer(),
        },
        Owner: "itaque",
        PullNumber: 2677,
        Repo: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComment != nil {
        // handle response
    }
}
```

## PullsDeletePendingReview

Delete a pending review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

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
    res, err := s.Pulls.PullsDeletePendingReview(ctx, operations.PullsDeletePendingReviewRequest{
        Owner: "itaque",
        PullNumber: 242178,
        Repo: "laborum",
        ReviewID: 250398,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsDeleteReviewComment

Deletes a review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

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
    res, err := s.Pulls.PullsDeleteReviewComment(ctx, operations.PullsDeleteReviewCommentRequest{
        CommentID: 224467,
        Owner: "iusto",
        Repo: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PullsDismissReview

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#dismiss-a-review-for-a-pull-request>

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
    res, err := s.Pulls.PullsDismissReview(ctx, operations.PullsDismissReviewRequest{
        RequestBody: operations.PullsDismissReviewRequestBody{
            Event: sdk.String(""APPROVE""),
            Message: "doloremque",
        },
        Owner: "consequatur",
        PullNumber: 639705,
        Repo: "recusandae",
        ReviewID: 408303,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsGet

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.0/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-pull-request>

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
    res, err := s.Pulls.PullsGet(ctx, operations.PullsGetRequest{
        Owner: "quidem",
        PullNumber: 377406,
        Repo: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequest != nil {
        // handle response
    }
}
```

## PullsGetReview

Get a review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-review-for-a-pull-request>

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
    res, err := s.Pulls.PullsGetReview(ctx, operations.PullsGetReviewRequest{
        Owner: "placeat",
        PullNumber: 596065,
        Repo: "expedita",
        ReviewID: 537236,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsGetReviewComment

Provides details for a review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-review-comment-for-a-pull-request>

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
    res, err := s.Pulls.PullsGetReviewComment(ctx, operations.PullsGetReviewCommentRequest{
        CommentID: 954334,
        Owner: "voluptate",
        Repo: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComment != nil {
        // handle response
    }
}
```

## PullsList

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests>

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
    res, err := s.Pulls.PullsList(ctx, operations.PullsListRequest{
        Base: sdk.String("unde"),
        Direction: operations.PullsListDirectionEnumDesc.ToPointer(),
        Head: sdk.String("animi"),
        Owner: "impedit",
        Page: sdk.Int64(373040),
        PerPage: sdk.Int64(357425),
        Repo: "est",
        Sort: operations.PullsListSortEnumPopularity.ToPointer(),
        State: operations.PullsListStateEnumClosed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestSimples != nil {
        // handle response
    }
}
```

## PullsListCommentsForReview

List comments for a specific pull request review.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-comments-for-a-pull-request-review>

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
    res, err := s.Pulls.PullsListCommentsForReview(ctx, operations.PullsListCommentsForReviewRequest{
        Owner: "labore",
        Page: sdk.Int64(85066),
        PerPage: sdk.Int64(874400),
        PullNumber: 233173,
        Repo: "vitae",
        ReviewID: 81371,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReviewComments != nil {
        // handle response
    }
}
```

## PullsListCommits

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-commits-on-a-pull-request>

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
    res, err := s.Pulls.PullsListCommits(ctx, operations.PullsListCommitsRequest{
        Owner: "dolorem",
        Page: sdk.Int64(322017),
        PerPage: sdk.Int64(183033),
        PullNumber: 611328,
        Repo: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commits != nil {
        // handle response
    }
}
```

## PullsListFiles

**Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests-files>

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
    res, err := s.Pulls.PullsListFiles(ctx, operations.PullsListFilesRequest{
        Owner: "nemo",
        Page: sdk.Int64(745233),
        PerPage: sdk.Int64(726227),
        PullNumber: 526907,
        Repo: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiffEntries != nil {
        // handle response
    }
}
```

## PullsListRequestedReviewers

List requested reviewers for a pull request

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-requested-reviewers-for-a-pull-request>

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
    res, err := s.Pulls.PullsListRequestedReviewers(ctx, operations.PullsListRequestedReviewersRequest{
        Owner: "odio",
        Page: sdk.Int64(144691),
        PerPage: sdk.Int64(545),
        PullNumber: 168042,
        Repo: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewRequest != nil {
        // handle response
    }
}
```

## PullsListReviewComments

Lists all review comments for a pull request. By default, review comments are in ascending order by ID.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-review-comments-on-a-pull-request>

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
    res, err := s.Pulls.PullsListReviewComments(ctx, operations.PullsListReviewCommentsRequest{
        Direction: operations.PullsListReviewCommentsDirectionEnumAsc.ToPointer(),
        Owner: "quae",
        Page: sdk.Int64(264333),
        PerPage: sdk.Int64(208253),
        PullNumber: 348357,
        Repo: "itaque",
        Since: types.MustTimeFromString("2022-10-14T09:06:41.387Z"),
        Sort: shared.SortEnumUpdated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComments != nil {
        // handle response
    }
}
```

## PullsListReviewCommentsForRepo

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-review-comments-in-a-repository>

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
    res, err := s.Pulls.PullsListReviewCommentsForRepo(ctx, operations.PullsListReviewCommentsForRepoRequest{
        Direction: operations.PullsListReviewCommentsForRepoDirectionEnumDesc.ToPointer(),
        Owner: "distinctio",
        Page: sdk.Int64(802894),
        PerPage: sdk.Int64(157222),
        Repo: "quia",
        Since: types.MustTimeFromString("2022-05-24T21:57:47.411Z"),
        Sort: operations.PullsListReviewCommentsForRepoSortEnumCreatedAt.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComments != nil {
        // handle response
    }
}
```

## PullsListReviews

The list of reviews returns in chronological order.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-reviews-for-a-pull-request>

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
    res, err := s.Pulls.PullsListReviews(ctx, operations.PullsListReviewsRequest{
        Owner: "dicta",
        Page: sdk.Int64(663318),
        PerPage: sdk.Int64(727888),
        PullNumber: 854460,
        Repo: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviews != nil {
        // handle response
    }
}
```

## PullsMerge

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#merge-a-pull-request>

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
    res, err := s.Pulls.PullsMerge(ctx, operations.PullsMergeRequest{
        RequestBody: &operations.PullsMergeRequestBody{
            CommitMessage: sdk.String("quos"),
            CommitTitle: sdk.String("placeat"),
            MergeMethod: operations.PullsMergeRequestBodyMergeMethodEnumMerge.ToPointer(),
            Sha: sdk.String("iusto"),
        },
        Owner: "ipsa",
        PullNumber: 914864,
        Repo: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestMergeResult != nil {
        // handle response
    }
}
```

## PullsRemoveRequestedReviewers

Remove requested reviewers from a pull request

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

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
    res, err := s.Pulls.PullsRemoveRequestedReviewers(ctx, operations.PullsRemoveRequestedReviewersRequest{
        RequestBody: operations.PullsRemoveRequestedReviewersRequestBody{
            Reviewers: []string{
                "totam",
            },
            TeamReviewers: []string{
                "eligendi",
                "distinctio",
            },
        },
        Owner: "voluptatem",
        PullNumber: 418109,
        Repo: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestSimple != nil {
        // handle response
    }
}
```

## PullsRequestReviewers

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#request-reviewers-for-a-pull-request>

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
    res, err := s.Pulls.PullsRequestReviewers(ctx, operations.PullsRequestReviewersRequest{
        RequestBody: &operations.PullsRequestReviewersRequestBody1{
            Reviewers: []string{
                "beatae",
                "est",
                "facere",
                "corrupti",
            },
            TeamReviewers: []string{
                "provident",
                "accusamus",
            },
        },
        Owner: "necessitatibus",
        PullNumber: 733289,
        Repo: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestSimple != nil {
        // handle response
    }
}
```

## PullsSubmitReview

Submit a review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#submit-a-review-for-a-pull-request>

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
    res, err := s.Pulls.PullsSubmitReview(ctx, operations.PullsSubmitReviewRequest{
        RequestBody: operations.PullsSubmitReviewRequestBody{
            Body: sdk.String("ea"),
            Event: operations.PullsSubmitReviewRequestBodyEventEnumRequestChanges,
        },
        Owner: "ipsam",
        PullNumber: 702952,
        Repo: "laudantium",
        ReviewID: 357207,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsUpdate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls/#update-a-pull-request>

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
    res, err := s.Pulls.PullsUpdate(ctx, operations.PullsUpdateRequest{
        RequestBody: &operations.PullsUpdateRequestBody{
            Base: sdk.String("officiis"),
            Body: sdk.String("voluptatibus"),
            MaintainerCanModify: sdk.Bool(false),
            State: operations.PullsUpdateRequestBodyStateEnumClosed.ToPointer(),
            Title: sdk.String("Dr."),
        },
        Owner: "alias",
        PullNumber: 156653,
        Repo: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequest != nil {
        // handle response
    }
}
```

## PullsUpdateBranch

Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-pull-request-branch>

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
    res, err := s.Pulls.PullsUpdateBranch(ctx, operations.PullsUpdateBranchRequest{
        RequestBody: &operations.PullsUpdateBranchRequestBody{
            ExpectedHeadSha: sdk.String("fuga"),
        },
        Owner: "repudiandae",
        PullNumber: 34070,
        Repo: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullsUpdateBranch202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PullsUpdateReview

Update the review summary comment with new text.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-review-for-a-pull-request>

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
    res, err := s.Pulls.PullsUpdateReview(ctx, operations.PullsUpdateReviewRequest{
        RequestBody: operations.PullsUpdateReviewRequestBody{
            Body: "officiis",
        },
        Owner: "eos",
        PullNumber: 844854,
        Repo: "odio",
        ReviewID: 510128,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsUpdateReviewComment

Enables you to edit a review comment.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-review-comment-for-a-pull-request>

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
    res, err := s.Pulls.PullsUpdateReviewComment(ctx, operations.PullsUpdateReviewCommentRequest{
        RequestBody: operations.PullsUpdateReviewCommentRequestBody{
            Body: "odit",
        },
        CommentID: 127688,
        Owner: "corporis",
        Repo: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComment != nil {
        // handle response
    }
}
```
