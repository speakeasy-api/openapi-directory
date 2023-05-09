# pulls

## Overview

Interact with GitHub Pull Requests.

### Available Operations

* [pullsCheckIfMerged](#pullscheckifmerged) - Check if a pull request has been merged
* [pullsCreate](#pullscreate) - Create a pull request
* [pullsCreateReplyForReviewComment](#pullscreatereplyforreviewcomment) - Create a reply for a review comment
* [pullsCreateReview](#pullscreatereview) - Create a review for a pull request
* [pullsCreateReviewComment](#pullscreatereviewcomment) - Create a review comment for a pull request
* [pullsDeletePendingReview](#pullsdeletependingreview) - Delete a pending review for a pull request
* [pullsDeleteReviewComment](#pullsdeletereviewcomment) - Delete a review comment for a pull request
* [pullsDismissReview](#pullsdismissreview) - Dismiss a review for a pull request
* [pullsGet](#pullsget) - Get a pull request
* [pullsGetReview](#pullsgetreview) - Get a review for a pull request
* [pullsGetReviewComment](#pullsgetreviewcomment) - Get a review comment for a pull request
* [pullsList](#pullslist) - List pull requests
* [pullsListCommentsForReview](#pullslistcommentsforreview) - List comments for a pull request review
* [pullsListCommits](#pullslistcommits) - List commits on a pull request
* [pullsListFiles](#pullslistfiles) - List pull requests files
* [pullsListRequestedReviewers](#pullslistrequestedreviewers) - List requested reviewers for a pull request
* [pullsListReviewComments](#pullslistreviewcomments) - List review comments on a pull request
* [pullsListReviewCommentsForRepo](#pullslistreviewcommentsforrepo) - List review comments in a repository
* [pullsListReviews](#pullslistreviews) - List reviews for a pull request
* [pullsMerge](#pullsmerge) - Merge a pull request
* [pullsRemoveRequestedReviewers](#pullsremoverequestedreviewers) - Remove requested reviewers from a pull request
* [pullsRequestReviewers](#pullsrequestreviewers) - Request reviewers for a pull request
* [pullsSubmitReview](#pullssubmitreview) - Submit a review for a pull request
* [pullsUpdate](#pullsupdate) - Update a pull request
* [pullsUpdateBranch](#pullsupdatebranch) - Update a pull request branch
* [pullsUpdateReview](#pullsupdatereview) - Update a review for a pull request
* [pullsUpdateReviewComment](#pullsupdatereviewcomment) - Update a review comment for a pull request

## pullsCheckIfMerged

Check if a pull request has been merged

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#check-if-a-pull-request-has-been-merged>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsCheckIfMergedRequest;
import org.openapis.openapi.models.operations.PullsCheckIfMergedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsCheckIfMergedRequest req = new PullsCheckIfMergedRequest("beatae", 512452L, "exercitationem");            

            PullsCheckIfMergedResponse res = sdk.pulls.pullsCheckIfMerged(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsCreate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud. You can create a new pull request. This endpoint triggers [notifications](https://docs.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsCreateRequest;
import org.openapis.openapi.models.operations.PullsCreateRequestBody;
import org.openapis.openapi.models.operations.PullsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsCreateRequest req = new PullsCreateRequest(                new PullsCreateRequestBody("praesentium", "cum") {{
                                body = "laboriosam";
                                draft = false;
                                issue = 1L;
                                maintainerCanModify = false;
                                title = "Miss";
                            }};, "voluptatum", "error");            

            PullsCreateResponse res = sdk.pulls.pullsCreate(req);

            if (res.pullRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsCreateReplyForReviewComment

Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-reply-for-a-review-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsCreateReplyForReviewCommentRequest;
import org.openapis.openapi.models.operations.PullsCreateReplyForReviewCommentRequestBody;
import org.openapis.openapi.models.operations.PullsCreateReplyForReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsCreateReplyForReviewCommentRequest req = new PullsCreateReplyForReviewCommentRequest(                new PullsCreateReplyForReviewCommentRequestBody("hic");, 710529L, "debitis", 204923L, "dolorum");            

            PullsCreateReplyForReviewCommentResponse res = sdk.pulls.pullsCreateReplyForReviewComment(req);

            if (res.pullRequestReviewComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsCreateReview

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsCreateReviewRequest;
import org.openapis.openapi.models.operations.PullsCreateReviewRequestBody;
import org.openapis.openapi.models.operations.PullsCreateReviewRequestBodyComments;
import org.openapis.openapi.models.operations.PullsCreateReviewRequestBodyEventEnum;
import org.openapis.openapi.models.operations.PullsCreateReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsCreateReviewRequest req = new PullsCreateReviewRequest("nostrum", 639028L, "dolorum") {{
                requestBody = new PullsCreateReviewRequestBody() {{
                    body = "corrupti";
                    comments = new org.openapis.openapi.models.operations.PullsCreateReviewRequestBodyComments[]{{
                        add(new PullsCreateReviewRequestBodyComments("ut", "fugiat") {{
                            body = "tempora";
                            line = 28L;
                            path = "atque";
                            position = 148268L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                        add(new PullsCreateReviewRequestBodyComments("magnam", "consequatur") {{
                            body = "voluptatem";
                            line = 28L;
                            path = "culpa";
                            position = 710337L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                        add(new PullsCreateReviewRequestBodyComments("voluptatum", "quas") {{
                            body = "esse";
                            line = 28L;
                            path = "ipsam";
                            position = 24527L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                        add(new PullsCreateReviewRequestBodyComments("blanditiis", "ex") {{
                            body = "repudiandae";
                            line = 28L;
                            path = "corporis";
                            position = 89494L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                    }};
                    commitId = "sed";
                    event = PullsCreateReviewRequestBodyEventEnum.APPROVE;
                }};;
            }};            

            PullsCreateReviewResponse res = sdk.pulls.pullsCreateReview(req);

            if (res.pullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsCreateReviewComment


Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-comment-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsCreateReviewCommentRequest;
import org.openapis.openapi.models.operations.PullsCreateReviewCommentRequestBody;
import org.openapis.openapi.models.operations.PullsCreateReviewCommentRequestBodySideEnum;
import org.openapis.openapi.models.operations.PullsCreateReviewCommentRequestBodyStartSideEnum;
import org.openapis.openapi.models.operations.PullsCreateReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsCreateReviewCommentRequest req = new PullsCreateReviewCommentRequest(                new PullsCreateReviewCommentRequestBody("vel") {{
                                commitId = "nostrum";
                                inReplyTo = 2L;
                                line = 906172L;
                                path = "error";
                                position = 8511L;
                                side = PullsCreateReviewCommentRequestBodySideEnum.LEFT;
                                startLine = 968865L;
                                startSide = PullsCreateReviewCommentRequestBodyStartSideEnum.LEFT;
                            }};, "harum", 115703L, "architecto");            

            PullsCreateReviewCommentResponse res = sdk.pulls.pullsCreateReviewComment(req);

            if (res.pullRequestReviewComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsDeletePendingReview

Delete a pending review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsDeletePendingReviewRequest;
import org.openapis.openapi.models.operations.PullsDeletePendingReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsDeletePendingReviewRequest req = new PullsDeletePendingReviewRequest("occaecati", 289776L, "quidem", 539074L);            

            PullsDeletePendingReviewResponse res = sdk.pulls.pullsDeletePendingReview(req);

            if (res.pullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsDeleteReviewComment

Deletes a review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsDeleteReviewCommentRequest;
import org.openapis.openapi.models.operations.PullsDeleteReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsDeleteReviewCommentRequest req = new PullsDeleteReviewCommentRequest(671957L, "nam", "tenetur");            

            PullsDeleteReviewCommentResponse res = sdk.pulls.pullsDeleteReviewComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsDismissReview

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#dismiss-a-review-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsDismissReviewRequest;
import org.openapis.openapi.models.operations.PullsDismissReviewRequestBody;
import org.openapis.openapi.models.operations.PullsDismissReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsDismissReviewRequest req = new PullsDismissReviewRequest(                new PullsDismissReviewRequestBody("laboriosam") {{
                                event = ""APPROVE"";
                            }};, "alias", 227084L, "deserunt", 454860L);            

            PullsDismissReviewResponse res = sdk.pulls.pullsDismissReview(req);

            if (res.pullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsGet

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsGetRequest;
import org.openapis.openapi.models.operations.PullsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsGetRequest req = new PullsGetRequest("unde", 972083L, "provident");            

            PullsGetResponse res = sdk.pulls.pullsGet(req);

            if (res.pullRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsGetReview

Get a review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-review-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsGetReviewRequest;
import org.openapis.openapi.models.operations.PullsGetReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsGetReviewRequest req = new PullsGetReviewRequest("repellendus", 962771L, "voluptates", 16871L);            

            PullsGetReviewResponse res = sdk.pulls.pullsGetReview(req);

            if (res.pullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsGetReviewComment

Provides details for a review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-review-comment-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsGetReviewCommentRequest;
import org.openapis.openapi.models.operations.PullsGetReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsGetReviewCommentRequest req = new PullsGetReviewCommentRequest(667285L, "quidem", "reprehenderit");            

            PullsGetReviewCommentResponse res = sdk.pulls.pullsGetReviewComment(req);

            if (res.pullRequestReviewComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsList

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListDirectionEnum;
import org.openapis.openapi.models.operations.PullsListRequest;
import org.openapis.openapi.models.operations.PullsListResponse;
import org.openapis.openapi.models.operations.PullsListSortEnum;
import org.openapis.openapi.models.operations.PullsListStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListRequest req = new PullsListRequest("facere", "fuga") {{
                base = "praesentium";
                direction = PullsListDirectionEnum.DESC;
                head = "veniam";
                page = 29100L;
                perPage = 790840L;
                sort = PullsListSortEnum.LONG_RUNNING;
                state = PullsListStateEnum.OPEN;
            }};            

            PullsListResponse res = sdk.pulls.pullsList(req);

            if (res.pullRequestSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListCommentsForReview

List comments for a specific pull request review.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-comments-for-a-pull-request-review>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListCommentsForReviewRequest;
import org.openapis.openapi.models.operations.PullsListCommentsForReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListCommentsForReviewRequest req = new PullsListCommentsForReviewRequest("atque", 442036L, "asperiores", 519952L) {{
                page = 383103L;
                perPage = 693957L;
            }};            

            PullsListCommentsForReviewResponse res = sdk.pulls.pullsListCommentsForReview(req);

            if (res.reviewComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListCommits

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-commits-on-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListCommitsRequest;
import org.openapis.openapi.models.operations.PullsListCommitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListCommitsRequest req = new PullsListCommitsRequest("maxime", 90885L, "esse") {{
                page = 227759L;
                perPage = 826825L;
            }};            

            PullsListCommitsResponse res = sdk.pulls.pullsListCommits(req);

            if (res.commits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListFiles

**Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests-files>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListFilesRequest;
import org.openapis.openapi.models.operations.PullsListFilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListFilesRequest req = new PullsListFilesRequest("ea", 539118L, "error") {{
                page = 887265L;
                perPage = 886961L;
            }};            

            PullsListFilesResponse res = sdk.pulls.pullsListFiles(req);

            if (res.diffEntries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListRequestedReviewers

List requested reviewers for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-requested-reviewers-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListRequestedReviewersRequest;
import org.openapis.openapi.models.operations.PullsListRequestedReviewersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListRequestedReviewersRequest req = new PullsListRequestedReviewersRequest("accusamus", 618826L, "minima") {{
                page = 133461L;
                perPage = 404425L;
            }};            

            PullsListRequestedReviewersResponse res = sdk.pulls.pullsListRequestedReviewers(req);

            if (res.pullRequestReviewRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListReviewComments

Lists all review comments for a pull request. By default, review comments are in ascending order by ID.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-review-comments-on-a-pull-request>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListReviewCommentsDirectionEnum;
import org.openapis.openapi.models.operations.PullsListReviewCommentsRequest;
import org.openapis.openapi.models.operations.PullsListReviewCommentsResponse;
import org.openapis.openapi.models.shared.SortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListReviewCommentsRequest req = new PullsListReviewCommentsRequest("maiores", 544647L, "at") {{
                direction = PullsListReviewCommentsDirectionEnum.DESC;
                page = 502721L;
                perPage = 379356L;
                since = OffsetDateTime.parse("2021-05-17T08:50:15.963Z");
                sort = SortEnum.UPDATED;
            }};            

            PullsListReviewCommentsResponse res = sdk.pulls.pullsListReviewComments(req);

            if (res.pullRequestReviewComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListReviewCommentsForRepo

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-review-comments-in-a-repository>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListReviewCommentsForRepoDirectionEnum;
import org.openapis.openapi.models.operations.PullsListReviewCommentsForRepoRequest;
import org.openapis.openapi.models.operations.PullsListReviewCommentsForRepoResponse;
import org.openapis.openapi.models.operations.PullsListReviewCommentsForRepoSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListReviewCommentsForRepoRequest req = new PullsListReviewCommentsForRepoRequest("sunt", "recusandae") {{
                direction = PullsListReviewCommentsForRepoDirectionEnum.DESC;
                page = 829898L;
                perPage = 287119L;
                since = OffsetDateTime.parse("2022-11-14T22:34:47.186Z");
                sort = PullsListReviewCommentsForRepoSortEnum.CREATED_AT;
            }};            

            PullsListReviewCommentsForRepoResponse res = sdk.pulls.pullsListReviewCommentsForRepo(req);

            if (res.pullRequestReviewComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsListReviews

The list of reviews returns in chronological order.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-reviews-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsListReviewsRequest;
import org.openapis.openapi.models.operations.PullsListReviewsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsListReviewsRequest req = new PullsListReviewsRequest("dicta", 36033L, "beatae") {{
                page = 174772L;
                perPage = 316488L;
            }};            

            PullsListReviewsResponse res = sdk.pulls.pullsListReviews(req);

            if (res.pullRequestReviews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsMerge

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#merge-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsMergeRequest;
import org.openapis.openapi.models.operations.PullsMergeRequestBody;
import org.openapis.openapi.models.operations.PullsMergeRequestBodyMergeMethodEnum;
import org.openapis.openapi.models.operations.PullsMergeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsMergeRequest req = new PullsMergeRequest("laboriosam", 246535L, "a") {{
                requestBody = new PullsMergeRequestBody() {{
                    commitMessage = "molestias";
                    commitTitle = "magnam";
                    mergeMethod = PullsMergeRequestBodyMergeMethodEnum.REBASE;
                    sha = "consequuntur";
                }};;
            }};            

            PullsMergeResponse res = sdk.pulls.pullsMerge(req);

            if (res.pullRequestMergeResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsRemoveRequestedReviewers

Remove requested reviewers from a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsRemoveRequestedReviewersRequest;
import org.openapis.openapi.models.operations.PullsRemoveRequestedReviewersRequestBody;
import org.openapis.openapi.models.operations.PullsRemoveRequestedReviewersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsRemoveRequestedReviewersRequest req = new PullsRemoveRequestedReviewersRequest(                new PullsRemoveRequestedReviewersRequestBody(                new String[]{{
                                                add("officiis"),
                                                add("perspiciatis"),
                                                add("in"),
                                            }}) {{
                                teamReviewers = new String[]{{
                                    add("eveniet"),
                                }};
                            }};, "occaecati", 160230L, "fugit");            

            PullsRemoveRequestedReviewersResponse res = sdk.pulls.pullsRemoveRequestedReviewers(req);

            if (res.pullRequestSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsRequestReviewers

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#request-reviewers-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsRequestReviewersRequest;
import org.openapis.openapi.models.operations.PullsRequestReviewersRequestBody1;
import org.openapis.openapi.models.operations.PullsRequestReviewersRequestBody2;
import org.openapis.openapi.models.operations.PullsRequestReviewersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsRequestReviewersRequest req = new PullsRequestReviewersRequest("id", 335631L, "reprehenderit") {{
                requestBody = new PullsRequestReviewersRequestBody2(                new String[]{{
                                    add("corporis"),
                                }}) {{
                    reviewers = new String[]{{
                        add("eveniet"),
                        add("non"),
                        add("vero"),
                    }};
                }};;
            }};            

            PullsRequestReviewersResponse res = sdk.pulls.pullsRequestReviewers(req);

            if (res.pullRequestSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsSubmitReview

Submit a review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#submit-a-review-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsSubmitReviewRequest;
import org.openapis.openapi.models.operations.PullsSubmitReviewRequestBody;
import org.openapis.openapi.models.operations.PullsSubmitReviewRequestBodyEventEnum;
import org.openapis.openapi.models.operations.PullsSubmitReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsSubmitReviewRequest req = new PullsSubmitReviewRequest(                new PullsSubmitReviewRequestBody(PullsSubmitReviewRequestBodyEventEnum.APPROVE) {{
                                body = "iure";
                            }};, "ipsa", 517612L, "quae", 474668L);            

            PullsSubmitReviewResponse res = sdk.pulls.pullsSubmitReview(req);

            if (res.pullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsUpdate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls/#update-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsUpdateRequest;
import org.openapis.openapi.models.operations.PullsUpdateRequestBody;
import org.openapis.openapi.models.operations.PullsUpdateRequestBodyStateEnum;
import org.openapis.openapi.models.operations.PullsUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsUpdateRequest req = new PullsUpdateRequest("eveniet", 184362L, "cum") {{
                requestBody = new PullsUpdateRequestBody() {{
                    base = "iure";
                    body = "necessitatibus";
                    maintainerCanModify = false;
                    state = PullsUpdateRequestBodyStateEnum.OPEN;
                    title = "Miss";
                }};;
            }};            

            PullsUpdateResponse res = sdk.pulls.pullsUpdate(req);

            if (res.pullRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsUpdateBranch

Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-pull-request-branch>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsUpdateBranchRequest;
import org.openapis.openapi.models.operations.PullsUpdateBranchRequestBody;
import org.openapis.openapi.models.operations.PullsUpdateBranchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsUpdateBranchRequest req = new PullsUpdateBranchRequest("distinctio", 528940L, "rem") {{
                requestBody = new PullsUpdateBranchRequestBody() {{
                    expectedHeadSha = "aliquam";
                }};;
            }};            

            PullsUpdateBranchResponse res = sdk.pulls.pullsUpdateBranch(req);

            if (res.pullsUpdateBranch202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsUpdateReview

Update the review summary comment with new text.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-review-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsUpdateReviewRequest;
import org.openapis.openapi.models.operations.PullsUpdateReviewRequestBody;
import org.openapis.openapi.models.operations.PullsUpdateReviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsUpdateReviewRequest req = new PullsUpdateReviewRequest(                new PullsUpdateReviewRequestBody("ad");, "repellat", 3099L, "corporis", 597303L);            

            PullsUpdateReviewResponse res = sdk.pulls.pullsUpdateReview(req);

            if (res.pullRequestReview != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pullsUpdateReviewComment

Enables you to edit a review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-review-comment-for-a-pull-request>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PullsUpdateReviewCommentRequest;
import org.openapis.openapi.models.operations.PullsUpdateReviewCommentRequestBody;
import org.openapis.openapi.models.operations.PullsUpdateReviewCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PullsUpdateReviewCommentRequest req = new PullsUpdateReviewCommentRequest(                new PullsUpdateReviewCommentRequestBody("nihil");, 649078L, "voluptas", "alias");            

            PullsUpdateReviewCommentResponse res = sdk.pulls.pullsUpdateReviewComment(req);

            if (res.pullRequestReviewComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
