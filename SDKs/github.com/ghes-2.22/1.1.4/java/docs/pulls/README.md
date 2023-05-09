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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#check-if-a-pull-request-has-been-merged>

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

            PullsCheckIfMergedRequest req = new PullsCheckIfMergedRequest("esse", 403793L, "consectetur");            

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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

You can create a new pull request.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#create-a-pull-request>

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

            PullsCreateRequest req = new PullsCreateRequest(                new PullsCreateRequestBody("aliquid", "ipsa") {{
                                body = "laborum";
                                draft = false;
                                issue = 1L;
                                maintainerCanModify = false;
                                title = "Mr.";
                            }};, "nostrum", "fugiat");            

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

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#create-a-reply-for-a-review-comment>

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

            PullsCreateReplyForReviewCommentRequest req = new PullsCreateReplyForReviewCommentRequest(                new PullsCreateReplyForReviewCommentRequestBody("expedita");, 399667L, "officia", 381397L, "aliquid");            

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

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#create-a-review-for-a-pull-request>

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

            PullsCreateReviewRequest req = new PullsCreateReviewRequest("perferendis", 431760L, "voluptas") {{
                requestBody = new PullsCreateReviewRequestBody() {{
                    body = "iste";
                    comments = new org.openapis.openapi.models.operations.PullsCreateReviewRequestBodyComments[]{{
                        add(new PullsCreateReviewRequestBodyComments("voluptates", "mollitia") {{
                            body = "ab";
                            line = 28L;
                            path = "error";
                            position = 822407L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                        add(new PullsCreateReviewRequestBodyComments("deleniti", "enim") {{
                            body = "laborum";
                            line = 28L;
                            path = "libero";
                            position = 324083L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                        add(new PullsCreateReviewRequestBodyComments("quo", "ex") {{
                            body = "vitae";
                            line = 28L;
                            path = "repellendus";
                            position = 405036L;
                            side = "RIGHT";
                            startLine = 26L;
                            startSide = "LEFT";
                        }}),
                    }};
                    commitId = "ut";
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


Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#create-a-review-comment-for-a-pull-request>

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

            PullsCreateReviewCommentRequest req = new PullsCreateReviewCommentRequest(                new PullsCreateReviewCommentRequestBody("expedita") {{
                                commitId = "voluptatem";
                                inReplyTo = 2L;
                                line = 561577L;
                                path = "cum";
                                position = 399660L;
                                side = PullsCreateReviewCommentRequestBodySideEnum.LEFT;
                                startLine = 530860L;
                                startSide = PullsCreateReviewCommentRequestBodyStartSideEnum.RIGHT;
                            }};, "veritatis", 703218L, "est");            

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

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

            PullsDeletePendingReviewRequest req = new PullsDeletePendingReviewRequest("culpa", 29634L, "sapiente", 889288L);            

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

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

            PullsDeleteReviewCommentRequest req = new PullsDeleteReviewCommentRequest(103298L, "fuga", "pariatur");            

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

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#dismiss-a-review-for-a-pull-request>

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

            PullsDismissReviewRequest req = new PullsDismissReviewRequest(                new PullsDismissReviewRequestBody("debitis") {{
                                event = ""APPROVE"";
                            }};, "voluptatem", 1207L, "deleniti", 937219L);            

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

When you get, [create](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.22/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#get-a-pull-request>

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

            PullsGetRequest req = new PullsGetRequest("ex", 958308L, "rem");            

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#get-a-review-for-a-pull-request>

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

            PullsGetReviewRequest req = new PullsGetReviewRequest("minus", 365100L, "asperiores", 190567L);            

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#get-a-review-comment-for-a-pull-request>

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

            PullsGetReviewCommentRequest req = new PullsGetReviewCommentRequest(355225L, "perferendis", "illum");            

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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests>

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

            PullsListRequest req = new PullsListRequest("totam", "impedit") {{
                base = "quibusdam";
                direction = PullsListDirectionEnum.DESC;
                head = "ipsam";
                page = 633415L;
                perPage = 222864L;
                sort = PullsListSortEnum.UPDATED;
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-comments-for-a-pull-request-review>

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

            PullsListCommentsForReviewRequest req = new PullsListCommentsForReviewRequest("deleniti", 85311L, "tempora", 221396L) {{
                page = 8689L;
                perPage = 100014L;
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

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-commits-on-a-pull-request>

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

            PullsListCommitsRequest req = new PullsListCommitsRequest("sit", 265039L, "fugit") {{
                page = 66149L;
                perPage = 513760L;
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests-files>

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

            PullsListFilesRequest req = new PullsListFilesRequest("quae", 222658L, "fugiat") {{
                page = 369490L;
                perPage = 162120L;
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-requested-reviewers-for-a-pull-request>

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

            PullsListRequestedReviewersRequest req = new PullsListRequestedReviewersRequest("ipsa", 559682L, "eveniet") {{
                page = 773456L;
                perPage = 884952L;
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-review-comments-on-a-pull-request>

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

            PullsListReviewCommentsRequest req = new PullsListReviewCommentsRequest("esse", 897277L, "sed") {{
                direction = PullsListReviewCommentsDirectionEnum.ASC;
                page = 199596L;
                perPage = 712927L;
                since = OffsetDateTime.parse("2022-07-29T03:58:31.955Z");
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-review-comments-in-a-repository>

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

            PullsListReviewCommentsForRepoRequest req = new PullsListReviewCommentsForRepoRequest("magnam", "exercitationem") {{
                direction = PullsListReviewCommentsForRepoDirectionEnum.ASC;
                page = 781480L;
                perPage = 421844L;
                since = OffsetDateTime.parse("2021-11-01T18:57:38.460Z");
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-reviews-for-a-pull-request>

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

            PullsListReviewsRequest req = new PullsListReviewsRequest("consequuntur", 28952L, "exercitationem") {{
                page = 895692L;
                perPage = 95619L;
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

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.22/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#merge-a-pull-request>

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

            PullsMergeRequest req = new PullsMergeRequest("nisi", 871103L, "vero") {{
                requestBody = new PullsMergeRequestBody() {{
                    commitMessage = "est";
                    commitTitle = "harum";
                    mergeMethod = PullsMergeRequestBodyMergeMethodEnum.MERGE;
                    sha = "doloribus";
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

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
                                                add("optio"),
                                                add("occaecati"),
                                                add("nemo"),
                                                add("voluptate"),
                                            }}) {{
                                teamReviewers = new String[]{{
                                    add("officia"),
                                    add("voluptas"),
                                    add("numquam"),
                                }};
                            }};, "nemo", 551079L, "eius");            

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

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.22/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#request-reviewers-for-a-pull-request>

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

            PullsRequestReviewersRequest req = new PullsRequestReviewersRequest("aspernatur", 495970L, "nesciunt") {{
                requestBody = new PullsRequestReviewersRequestBody2(                new String[]{{
                                    add("incidunt"),
                                    add("quasi"),
                                    add("rem"),
                                }}) {{
                    reviewers = new String[]{{
                        add("dicta"),
                        add("nisi"),
                        add("consequuntur"),
                        add("consectetur"),
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#submit-a-review-for-a-pull-request>

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
                                body = "cupiditate";
                            }};, "reiciendis", 746837L, "alias", 608989L);            

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

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls/#update-a-pull-request>

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

            PullsUpdateRequest req = new PullsUpdateRequest("eos", 579011L, "iste") {{
                requestBody = new PullsUpdateRequestBody() {{
                    base = "magni";
                    body = "inventore";
                    maintainerCanModify = false;
                    state = PullsUpdateRequestBodyStateEnum.CLOSED;
                    title = "Dr.";
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-pull-request-branch>

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

            PullsUpdateBranchRequest req = new PullsUpdateBranchRequest("voluptatibus", 719620L, "omnis") {{
                requestBody = new PullsUpdateBranchRequestBody() {{
                    expectedHeadSha = "delectus";
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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-review-for-a-pull-request>

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

            PullsUpdateReviewRequest req = new PullsUpdateReviewRequest(                new PullsUpdateReviewRequestBody("minima");, "praesentium", 802692L, "magnam", 836364L);            

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
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-review-comment-for-a-pull-request>

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

            PullsUpdateReviewCommentRequest req = new PullsUpdateReviewCommentRequest(                new PullsUpdateReviewCommentRequestBody("quos");, 415280L, "itaque", "commodi");            

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
