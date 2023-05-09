# Pulls

## Overview

Interact with GitHub Pull Requests.

### Available Operations

* [PullsCheckIfMerged](#pullscheckifmerged) - Check if a pull request has been merged
* [PullsCreate](#pullscreate) - Create a pull request
* [PullsCreateReplyForReviewComment](#pullscreatereplyforreviewcomment) - Create a reply for a review comment
* [PullsCreateReview](#pullscreatereview) - Create a review for a pull request
* [PullsCreateReviewCommentAlternative](#pullscreatereviewcommentalternative) - Create a review comment for a pull request (alternative)
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#check-if-a-pull-request-has-been-merged>

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
        Owner: "error",
        PullNumber: 502721,
        Repo: "suscipit",
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud. You can create a new pull request. This endpoint triggers [notifications](https://docs.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#create-a-pull-request>

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
            Base: "repudiandae",
            Body: sdk.String("atque"),
            Draft: sdk.Bool(false),
            Head: "atque",
            Issue: sdk.Int64(1),
            MaintainerCanModify: sdk.Bool(false),
            Title: sdk.String("Mr."),
        },
        Owner: "recusandae",
        Repo: "dolorum",
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

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#create-a-reply-for-a-review-comment>

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
            Body: "repellendus",
        },
        CommentID: 287119,
        Owner: "reiciendis",
        PullNumber: 42976,
        Repo: "repudiandae",
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

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#create-a-review-for-a-pull-request>

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
            Body: sdk.String("dicta"),
            Comments: []PullsCreateReviewRequestBodyComments{
                operations.PullsCreateReviewRequestBodyComments{
                    Body: "beatae",
                    Line: sdk.Int64(28),
                    Path: "dolores",
                    Position: sdk.Int64(316488),
                    Side: sdk.String("RIGHT"),
                    StartLine: sdk.Int64(26),
                    StartSide: sdk.String("LEFT"),
                },
            },
            CommitID: sdk.String("laboriosam"),
            Event: operations.PullsCreateReviewRequestBodyEventEnumApprove.ToPointer(),
        },
        Owner: "a",
        PullNumber: 562783,
        Repo: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReview != nil {
        // handle response
    }
}
```

## PullsCreateReviewCommentAlternative

Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#create-an-issue-comment)."

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#create-a-review-comment-for-a-pull-request>

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
    res, err := s.Pulls.PullsCreateReviewCommentAlternative(ctx, operations.PullsCreateReviewCommentAlternativeRequest{
        RequestBody: operations.PullsCreateReviewCommentAlternativeRequestBody{
            Body: "saepe",
            InReplyTo: sdk.Int64(160467),
        },
        Owner: "occaecati",
        PullNumber: 886305,
        Repo: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegacyReviewComment != nil {
        // handle response
    }
}
```

## PullsDeletePendingReview

Delete a pending review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

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
        Owner: "in",
        PullNumber: 238043,
        Repo: "eveniet",
        ReviewID: 580887,
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

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
        CommentID: 160230,
        Owner: "fugit",
        Repo: "id",
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

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#dismiss-a-review-for-a-pull-request>

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
            Message: "quis",
        },
        Owner: "reprehenderit",
        PullNumber: 625528,
        Repo: "illo",
        ReviewID: 361306,
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.19/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#get-a-pull-request>

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
        PullNumber: 910994,
        Repo: "non",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#get-a-review-for-a-pull-request>

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
        Owner: "vero",
        PullNumber: 39615,
        Repo: "iure",
        ReviewID: 59944,
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#get-a-review-comment-for-a-pull-request>

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
        CommentID: 517612,
        Owner: "quae",
        Repo: "molestiae",
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests>

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
        Base: sdk.String("eveniet"),
        Direction: operations.PullsListDirectionEnumAsc.ToPointer(),
        Head: sdk.String("cum"),
        Owner: "iure",
        Page: sdk.Int64(898063),
        PerPage: sdk.Int64(187552),
        Repo: "laborum",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-comments-for-a-pull-request-review>

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
        Owner: "rem",
        Page: sdk.Int64(304446),
        PerPage: sdk.Int64(320565),
        PullNumber: 997963,
        Repo: "alias",
        ReviewID: 362189,
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

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-commits-on-a-pull-request>

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
        Owner: "perspiciatis",
        Page: sdk.Int64(470649),
        PerPage: sdk.Int64(649078),
        PullNumber: 378245,
        Repo: "alias",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests-files>

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
        Owner: "maiores",
        Page: sdk.Int64(970222),
        PerPage: sdk.Int64(174658),
        PullNumber: 663866,
        Repo: "minima",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-requested-reviewers-for-a-pull-request>

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
        Owner: "dolore",
        Page: sdk.Int64(680349),
        PerPage: sdk.Int64(200364),
        PullNumber: 63207,
        Repo: "recusandae",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-review-comments-on-a-pull-request>

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
        Direction: operations.PullsListReviewCommentsDirectionEnumDesc.ToPointer(),
        Owner: "quaerat",
        Page: sdk.Int64(477646),
        PerPage: sdk.Int64(403218),
        PullNumber: 284000,
        Repo: "culpa",
        Since: types.MustTimeFromString("2022-02-09T21:52:52.867Z"),
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-review-comments-in-a-repository>

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
        Direction: operations.PullsListReviewCommentsForRepoDirectionEnumAsc.ToPointer(),
        Owner: "nemo",
        Page: sdk.Int64(928219),
        PerPage: sdk.Int64(456520),
        Repo: "provident",
        Since: types.MustTimeFromString("2022-07-27T09:33:49.991Z"),
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-reviews-for-a-pull-request>

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
        Owner: "provident",
        Page: sdk.Int64(133439),
        PerPage: sdk.Int64(354506),
        PullNumber: 96804,
        Repo: "animi",
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

Merge a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#merge-a-pull-request>

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
            CommitMessage: sdk.String("nostrum"),
            CommitTitle: sdk.String("mollitia"),
            MergeMethod: operations.PullsMergeRequestBodyMergeMethodEnumSquash.ToPointer(),
            Sha: sdk.String("possimus"),
        },
        Owner: "animi",
        PullNumber: 402767,
        Repo: "aliquid",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

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
                "repellat",
            },
            TeamReviewers: []string{
                "ullam",
                "in",
                "nam",
                "earum",
            },
        },
        Owner: "officia",
        PullNumber: 672041,
        Repo: "placeat",
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

Request reviewers for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#request-reviewers-for-a-pull-request>

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
                "molestias",
                "officiis",
                "sapiente",
                "cumque",
            },
            TeamReviewers: []string{
                "rerum",
            },
        },
        Owner: "tempora",
        PullNumber: 335498,
        Repo: "inventore",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#submit-a-review-for-a-pull-request>

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
            Body: sdk.String("fugit"),
            Event: operations.PullsSubmitReviewRequestBodyEventEnumComment,
        },
        Owner: "quae",
        PullNumber: 21688,
        Repo: "velit",
        ReviewID: 137251,
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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls/#update-a-pull-request>

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
            Base: sdk.String("eum"),
            Body: sdk.String("eius"),
            MaintainerCanModify: sdk.Bool(false),
            State: operations.PullsUpdateRequestBodyStateEnumClosed.ToPointer(),
            Title: sdk.String("Dr."),
        },
        Owner: "impedit",
        PullNumber: 179410,
        Repo: "sapiente",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#update-a-pull-request-branch>

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
            ExpectedHeadSha: sdk.String("eum"),
        },
        Owner: "dicta",
        PullNumber: 325118,
        Repo: "beatae",
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#update-a-review-for-a-pull-request>

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
            Body: "cupiditate",
        },
        Owner: "provident",
        PullNumber: 936469,
        Repo: "soluta",
        ReviewID: 940782,
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
<https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#update-a-review-comment-for-a-pull-request>

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
            Body: "illum",
        },
        CommentID: 52508,
        Owner: "earum",
        Repo: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PullRequestReviewComment != nil {
        // handle response
    }
}
```
