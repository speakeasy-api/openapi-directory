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
* [PullsListRequestedReviewers](#pullslistrequestedreviewers) - Get all requested reviewers for a pull request
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#check-if-a-pull-request-has-been-merged>

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
        Owner: "odit",
        PullNumber: 357639,
        Repo: "rerum",
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#create-a-pull-request>

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
            Base: "alias",
            Body: sdk.String("error"),
            Draft: sdk.Bool(false),
            Head: "vel",
            HeadRepo: sdk.String("octo-org/octo-repo"),
            Issue: sdk.Int64(1),
            MaintainerCanModify: sdk.Bool(false),
            Title: sdk.String("Mr."),
        },
        Owner: "id",
        Repo: "laboriosam",
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

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#create-a-reply-for-a-review-comment>

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
            Body: "ex",
        },
        CommentID: 555679,
        Owner: "veritatis",
        PullNumber: 356440,
        Repo: "quae",
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

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

Pull request reviews created in the `PENDING` state are not submitted and therefore do not include the `submitted_at` property in the response. To create a pending review for a pull request, leave the `event` parameter blank. For more information about submitting a `PENDING` review, see "[Submit a review for a pull request](https://docs.github.com/enterprise-cloud@latest//rest/pulls#submit-a-review-for-a-pull-request)."

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-cloud@latest//rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#create-a-review-for-a-pull-request>

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
            Body: sdk.String("similique"),
            Comments: []PullsCreateReviewRequestBodyComments{
                operations.PullsCreateReviewRequestBodyComments{
                    Body: "quam",
                    Line: sdk.Int64(28),
                    Path: "magni",
                    Position: sdk.Int64(646329),
                    Side: sdk.String("RIGHT"),
                    StartLine: sdk.Int64(26),
                    StartSide: sdk.String("LEFT"),
                },
                operations.PullsCreateReviewRequestBodyComments{
                    Body: "delectus",
                    Line: sdk.Int64(28),
                    Path: "omnis",
                    Position: sdk.Int64(151230),
                    Side: sdk.String("RIGHT"),
                    StartLine: sdk.Int64(26),
                    StartSide: sdk.String("LEFT"),
                },
            },
            CommitID: sdk.String("nesciunt"),
            Event: operations.PullsCreateReviewRequestBodyEventEnumComment.ToPointer(),
        },
        Owner: "quis",
        PullNumber: 586108,
        Repo: "aliquam",
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


Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-cloud@latest//rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

The `position` parameter is deprecated. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#create-a-review-comment-for-a-pull-request>

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
            Body: "excepturi",
            CommitID: "maiores",
            InReplyTo: sdk.Int64(2),
            Line: 512081,
            Path: "velit",
            Position: sdk.Int64(971764),
            Side: operations.PullsCreateReviewCommentRequestBodySideEnumLeft.ToPointer(),
            StartLine: sdk.Int64(363845),
            StartSide: operations.PullsCreateReviewCommentRequestBodyStartSideEnumLeft.ToPointer(),
        },
        Owner: "quisquam",
        PullNumber: 948444,
        Repo: "quas",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

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
        Owner: "molestiae",
        PullNumber: 395634,
        Repo: "asperiores",
        ReviewID: 955466,
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

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
        CommentID: 749702,
        Owner: "perspiciatis",
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

## PullsDismissReview

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#dismiss-a-review-for-a-pull-request>

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
            Event: operations.PullsDismissReviewRequestBodyEventEnumDismiss.ToPointer(),
            Message: "dicta",
        },
        Owner: "minus",
        PullNumber: 417539,
        Repo: "eveniet",
        ReviewID: 781582,
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Cloud creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-cloud@latest//rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Cloud has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://docs.github.com/enterprise-cloud@latest//articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://docs.github.com/enterprise-cloud@latest//articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://docs.github.com/enterprise-cloud@latest//articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://docs.github.com/enterprise-cloud@latest//rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-a-pull-request>

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
        Owner: "tempore",
        PullNumber: 693747,
        Repo: "modi",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-a-review-for-a-pull-request>

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
        Owner: "voluptates",
        PullNumber: 145435,
        Repo: "eius",
        ReviewID: 194058,
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-a-review-comment-for-a-pull-request>

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
        CommentID: 758194,
        Owner: "asperiores",
        Repo: "esse",
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-pull-requests>

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
        Base: sdk.String("blanditiis"),
        Direction: operations.PullsListDirectionEnumDesc.ToPointer(),
        Head: sdk.String("repellat"),
        Owner: "a",
        Page: sdk.Int64(658604),
        PerPage: sdk.Int64(979287),
        Repo: "itaque",
        Sort: operations.PullsListSortEnumLongRunning.ToPointer(),
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-comments-for-a-pull-request-review>

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
        Owner: "corporis",
        Page: sdk.Int64(246577),
        PerPage: sdk.Int64(887701),
        PullNumber: 315022,
        Repo: "officia",
        ReviewID: 902979,
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

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-commits-on-a-pull-request>

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
        Owner: "eum",
        Page: sdk.Int64(922094),
        PerPage: sdk.Int64(35742),
        PullNumber: 637840,
        Repo: "impedit",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-pull-requests-files>

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
        Owner: "quasi",
        Page: sdk.Int64(502106),
        PerPage: sdk.Int64(260911),
        PullNumber: 786189,
        Repo: "eos",
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

Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/enterprise-cloud@latest//rest/pulls/reviews#list-reviews-for-a-pull-request) operation.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request>

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
        Owner: "nobis",
        PullNumber: 620054,
        Repo: "minus",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-review-comments-on-a-pull-request>

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
        Owner: "magnam",
        Page: sdk.Int64(440847),
        PerPage: sdk.Int64(800799),
        PullNumber: 552440,
        Repo: "corrupti",
        Since: types.MustTimeFromString("2022-07-12T05:39:44.455Z"),
        Sort: shared.SortEnumCreated.ToPointer(),
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-review-comments-in-a-repository>

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
        Owner: "modi",
        Page: sdk.Int64(21358),
        PerPage: sdk.Int64(897058),
        Repo: "architecto",
        Since: types.MustTimeFromString("2022-06-01T17:03:08.326Z"),
        Sort: operations.PullsListReviewCommentsForRepoSortEnumCreated.ToPointer(),
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-reviews-for-a-pull-request>

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
        Owner: "maiores",
        Page: sdk.Int64(205011),
        PerPage: sdk.Int64(139745),
        PullNumber: 936845,
        Repo: "veniam",
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

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#merge-a-pull-request>

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
            CommitMessage: sdk.String("ipsam"),
            CommitTitle: sdk.String("eaque"),
            MergeMethod: operations.PullsMergeRequestBodyMergeMethodEnumSquash.ToPointer(),
            Sha: sdk.String("veniam"),
        },
        Owner: "nihil",
        PullNumber: 320326,
        Repo: "nisi",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

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
                "quis",
                "quibusdam",
                "nemo",
                "suscipit",
            },
            TeamReviewers: []string{
                "sit",
                "quidem",
                "repellendus",
                "perferendis",
            },
        },
        Owner: "id",
        PullNumber: 958146,
        Repo: "sed",
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

This endpoint triggers [notifications](https://docs.github.com/enterprise-cloud@latest//github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#request-reviewers-for-a-pull-request>

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
        RequestBody: &operations.PullsRequestReviewersRequestBody2{
            Reviewers: []string{
                "repudiandae",
                "architecto",
                "adipisci",
                "pariatur",
            },
            TeamReviewers: []string{
                "dolore",
                "voluptatibus",
                "iure",
            },
        },
        Owner: "explicabo",
        PullNumber: 795457,
        Repo: "soluta",
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

Submits a pending review for a pull request. For more information about creating a pending review for a pull request, see "[Create a review for a pull request](https://docs.github.com/enterprise-cloud@latest//rest/pulls#create-a-review-for-a-pull-request)."

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#submit-a-review-for-a-pull-request>

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
            Body: sdk.String("dolorum"),
            Event: operations.PullsSubmitReviewRequestBodyEventEnumApprove,
        },
        Owner: "earum",
        PullNumber: 510020,
        Repo: "error",
        ReviewID: 252473,
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/enterprise-cloud@latest//github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

API method documentation
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls/#update-a-pull-request>

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
            Base: sdk.String("quasi"),
            Body: sdk.String("mollitia"),
            MaintainerCanModify: sdk.Bool(false),
            State: operations.PullsUpdateRequestBodyStateEnumClosed.ToPointer(),
            Title: sdk.String("Miss"),
        },
        Owner: "cumque",
        PullNumber: 42615,
        Repo: "expedita",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#update-a-pull-request-branch>

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
            ExpectedHeadSha: sdk.String("corrupti"),
        },
        Owner: "eaque",
        PullNumber: 643199,
        Repo: "aliquid",
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#update-a-review-for-a-pull-request>

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
            Body: "excepturi",
        },
        Owner: "magni",
        PullNumber: 273677,
        Repo: "possimus",
        ReviewID: 220824,
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
<https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#update-a-review-comment-for-a-pull-request>

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
            Body: "rerum",
        },
        CommentID: 153582,
        Owner: "accusamus",
        Repo: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComment != nil {
        // handle response
    }
}
```
