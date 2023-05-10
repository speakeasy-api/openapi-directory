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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsCheckIfMergedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsCheckIfMergedRequest();
    $request->owner = 'alias';
    $request->pullNumber = 608989;
    $request->repo = 'eos';

    $response = $sdk->pulls->pullsCheckIfMerged($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsCreateRequest();
    $request->requestBody = new PullsCreateRequestBody();
    $request->requestBody->base = 'occaecati';
    $request->requestBody->body = 'iste';
    $request->requestBody->draft = false;
    $request->requestBody->head = 'magni';
    $request->requestBody->issue = 1;
    $request->requestBody->maintainerCanModify = false;
    $request->requestBody->title = 'Mr.';
    $request->owner = 'fuga';
    $request->repo = 'accusamus';

    $response = $sdk->pulls->pullsCreate($request);

    if ($response->pullRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsCreateReplyForReviewComment

Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#create-a-reply-for-a-review-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReplyForReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReplyForReviewCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsCreateReplyForReviewCommentRequest();
    $request->requestBody = new PullsCreateReplyForReviewCommentRequestBody();
    $request->requestBody->body = 'voluptatibus';
    $request->commentId = 719620;
    $request->owner = 'omnis';
    $request->pullNumber = 966390;
    $request->repo = 'minima';

    $response = $sdk->pulls->pullsCreateReplyForReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewRequestBodyComments;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewRequestBodyEventEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsCreateReviewRequest();
    $request->requestBody = new PullsCreateReviewRequestBody();
    $request->requestBody->body = 'praesentium';
    $request->requestBody->comments = [
        new PullsCreateReviewRequestBodyComments(),
        new PullsCreateReviewRequestBodyComments(),
        new PullsCreateReviewRequestBodyComments(),
        new PullsCreateReviewRequestBodyComments(),
    ];
    $request->requestBody->commitId = 'magnam';
    $request->requestBody->event = PullsCreateReviewRequestBodyEventEnum::COMMENT;
    $request->owner = 'quos';
    $request->pullNumber = 415280;
    $request->repo = 'itaque';

    $response = $sdk->pulls->pullsCreateReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewCommentRequestBodySideEnum;
use \OpenAPI\OpenAPI\Models\Operations\PullsCreateReviewCommentRequestBodyStartSideEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsCreateReviewCommentRequest();
    $request->requestBody = new PullsCreateReviewCommentRequestBody();
    $request->requestBody->body = 'commodi';
    $request->requestBody->commitId = 'totam';
    $request->requestBody->inReplyTo = 2;
    $request->requestBody->line = 936618;
    $request->requestBody->path = 'modi';
    $request->requestBody->position = 722184;
    $request->requestBody->side = PullsCreateReviewCommentRequestBodySideEnum::RIGHT;
    $request->requestBody->startLine = 32901;
    $request->requestBody->startSide = PullsCreateReviewCommentRequestBodyStartSideEnum::RIGHT;
    $request->owner = 'vel';
    $request->pullNumber = 1383;
    $request->repo = 'quasi';

    $response = $sdk->pulls->pullsCreateReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsDeletePendingReview

Delete a pending review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsDeletePendingReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsDeletePendingReviewRequest();
    $request->owner = 'non';
    $request->pullNumber = 978548;
    $request->repo = 'enim';
    $request->reviewId = 575213;

    $response = $sdk->pulls->pullsDeletePendingReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsDeleteReviewComment

Deletes a review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsDeleteReviewCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsDeleteReviewCommentRequest();
    $request->commentId = 858778;
    $request->owner = 'deserunt';
    $request->repo = 'esse';

    $response = $sdk->pulls->pullsDeleteReviewComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsDismissReview

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#dismiss-a-review-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsDismissReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsDismissReviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsDismissReviewRequest();
    $request->requestBody = new PullsDismissReviewRequestBody();
    $request->requestBody->event = '"APPROVE"';
    $request->requestBody->message = 'nemo';
    $request->owner = 'reprehenderit';
    $request->pullNumber = 667715;
    $request->repo = 'quis';
    $request->reviewId = 571844;

    $response = $sdk->pulls->pullsDismissReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsGetRequest();
    $request->owner = 'accusamus';
    $request->pullNumber = 774684;
    $request->repo = 'hic';

    $response = $sdk->pulls->pullsGet($request);

    if ($response->pullRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsGetReview

Get a review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#get-a-review-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsGetReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsGetReviewRequest();
    $request->owner = 'necessitatibus';
    $request->pullNumber = 991891;
    $request->repo = 'ex';
    $request->reviewId = 376741;

    $response = $sdk->pulls->pullsGetReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsGetReviewComment

Provides details for a review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#get-a-review-comment-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsGetReviewCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsGetReviewCommentRequest();
    $request->commentId = 895346;
    $request->owner = 'delectus';
    $request->repo = 'quae';

    $response = $sdk->pulls->pullsGetReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsList

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsListDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PullsListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\PullsListStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListRequest();
    $request->base = 'minus';
    $request->direction = PullsListDirectionEnum::DESC;
    $request->head = 'laborum';
    $request->owner = 'consectetur';
    $request->page = 244889;
    $request->perPage = 538869;
    $request->repo = 'ipsum';
    $request->sort = PullsListSortEnum::LONG_RUNNING;
    $request->state = PullsListStateEnum::OPEN;

    $response = $sdk->pulls->pullsList($request);

    if ($response->pullRequestSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListCommentsForReview

List comments for a specific pull request review.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-comments-for-a-pull-request-review>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListCommentsForReviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListCommentsForReviewRequest();
    $request->owner = 'soluta';
    $request->page = 922757;
    $request->perPage = 721430;
    $request->pullNumber = 294076;
    $request->repo = 'iusto';
    $request->reviewId = 453094;

    $response = $sdk->pulls->pullsListCommentsForReview($request);

    if ($response->reviewComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListCommits

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-commits-on-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListCommitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListCommitsRequest();
    $request->owner = 'sequi';
    $request->page = 493958;
    $request->perPage = 205566;
    $request->pullNumber = 778172;
    $request->repo = 'deleniti';

    $response = $sdk->pulls->pullsListCommits($request);

    if ($response->commits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListFiles

**Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-pull-requests-files>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListFilesRequest();
    $request->owner = 'quibusdam';
    $request->page = 437814;
    $request->perPage = 139072;
    $request->pullNumber = 974990;
    $request->repo = 'vel';

    $response = $sdk->pulls->pullsListFiles($request);

    if ($response->diffEntries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListRequestedReviewers

List requested reviewers for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-requested-reviewers-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListRequestedReviewersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListRequestedReviewersRequest();
    $request->owner = 'magnam';
    $request->page = 842855;
    $request->perPage = 78969;
    $request->pullNumber = 818034;
    $request->repo = 'libero';

    $response = $sdk->pulls->pullsListRequestedReviewers($request);

    if ($response->pullRequestReviewRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListReviewComments

Lists all review comments for a pull request. By default, review comments are in ascending order by ID.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-review-comments-on-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListReviewCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsListReviewCommentsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListReviewCommentsRequest();
    $request->direction = PullsListReviewCommentsDirectionEnum::ASC;
    $request->owner = 'voluptatibus';
    $request->page = 156383;
    $request->perPage = 782090;
    $request->pullNumber = 304198;
    $request->repo = 'velit';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-18T15:43:31.696Z');
    $request->sort = SortEnum::CREATED;

    $response = $sdk->pulls->pullsListReviewComments($request);

    if ($response->pullRequestReviewComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListReviewCommentsForRepo

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-review-comments-in-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListReviewCommentsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsListReviewCommentsForRepoDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PullsListReviewCommentsForRepoSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListReviewCommentsForRepoRequest();
    $request->direction = PullsListReviewCommentsForRepoDirectionEnum::ASC;
    $request->owner = 'beatae';
    $request->page = 877751;
    $request->perPage = 568218;
    $request->repo = 'eum';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T07:24:19.034Z');
    $request->sort = PullsListReviewCommentsForRepoSortEnum::UPDATED;

    $response = $sdk->pulls->pullsListReviewCommentsForRepo($request);

    if ($response->pullRequestReviewComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListReviews

The list of reviews returns in chronological order.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#list-reviews-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsListReviewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsListReviewsRequest();
    $request->owner = 'earum';
    $request->page = 117525;
    $request->perPage = 772266;
    $request->pullNumber = 975884;
    $request->repo = 'iste';

    $response = $sdk->pulls->pullsListReviews($request);

    if ($response->pullRequestReviews !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsMerge

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.22/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#merge-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsMergeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsMergeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PullsMergeRequestBodyMergeMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsMergeRequest();
    $request->requestBody = new PullsMergeRequestBody();
    $request->requestBody->commitMessage = 'itaque';
    $request->requestBody->commitTitle = 'alias';
    $request->requestBody->mergeMethod = PullsMergeRequestBodyMergeMethodEnum::SQUASH;
    $request->requestBody->sha = 'itaque';
    $request->owner = 'velit';
    $request->pullNumber = 673838;
    $request->repo = 'non';

    $response = $sdk->pulls->pullsMerge($request);

    if ($response->pullRequestMergeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsRemoveRequestedReviewers

Remove requested reviewers from a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsRemoveRequestedReviewersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsRemoveRequestedReviewersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsRemoveRequestedReviewersRequest();
    $request->requestBody = new PullsRemoveRequestedReviewersRequestBody();
    $request->requestBody->reviewers = [
        'iusto',
    ];
    $request->requestBody->teamReviewers = [
        'doloremque',
    ];
    $request->owner = 'consequatur';
    $request->pullNumber = 639705;
    $request->repo = 'recusandae';

    $response = $sdk->pulls->pullsRemoveRequestedReviewers($request);

    if ($response->pullRequestSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsRequestReviewers

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.22/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#request-reviewers-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsRequestReviewersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsRequestReviewersRequest();
    $request->requestBody = new PullsRequestReviewersRequestBody1();
    $request->requestBody->reviewers = [
        'voluptas',
        'facilis',
        'placeat',
    ];
    $request->requestBody->teamReviewers = [
        'expedita',
        'deleniti',
        'a',
    ];
    $request->owner = 'voluptate';
    $request->pullNumber = 351936;
    $request->repo = 'unde';

    $response = $sdk->pulls->pullsRequestReviewers($request);

    if ($response->pullRequestSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsSubmitReview

Submit a review for a pull request

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#submit-a-review-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsSubmitReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsSubmitReviewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PullsSubmitReviewRequestBodyEventEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsSubmitReviewRequest();
    $request->requestBody = new PullsSubmitReviewRequestBody();
    $request->requestBody->body = 'necessitatibus';
    $request->requestBody->event = PullsSubmitReviewRequestBodyEventEnum::REQUEST_CHANGES;
    $request->owner = 'impedit';
    $request->pullNumber = 373040;
    $request->repo = 'corporis';
    $request->reviewId = 668234;

    $response = $sdk->pulls->pullsSubmitReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsUpdate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls/#update-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsUpdateRequest();
    $request->requestBody = new PullsUpdateRequestBody();
    $request->requestBody->base = 'error';
    $request->requestBody->body = 'esse';
    $request->requestBody->maintainerCanModify = false;
    $request->requestBody->state = PullsUpdateRequestBodyStateEnum::OPEN;
    $request->requestBody->title = 'Mr.';
    $request->owner = 'vero';
    $request->pullNumber = 233173;
    $request->repo = 'vitae';

    $response = $sdk->pulls->pullsUpdate($request);

    if ($response->pullRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsUpdateBranch

Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-pull-request-branch>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateBranchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsUpdateBranchRequest();
    $request->requestBody = new PullsUpdateBranchRequestBody();
    $request->requestBody->expectedHeadSha = 'inventore';
    $request->owner = 'dolorem';
    $request->pullNumber = 322017;
    $request->repo = 'qui';

    $response = $sdk->pulls->pullsUpdateBranch($request);

    if ($response->pullsUpdateBranch202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsUpdateReview

Update the review summary comment with new text.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-review-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateReviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateReviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsUpdateReviewRequest();
    $request->requestBody = new PullsUpdateReviewRequestBody();
    $request->requestBody->body = 'iste';
    $request->owner = 'ex';
    $request->pullNumber = 367626;
    $request->repo = 'soluta';
    $request->reviewId = 726227;

    $response = $sdk->pulls->pullsUpdateReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsUpdateReviewComment

Enables you to edit a review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#update-a-review-comment-for-a-pull-request>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\PullsUpdateReviewCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PullsUpdateReviewCommentRequest();
    $request->requestBody = new PullsUpdateReviewCommentRequestBody();
    $request->requestBody->body = 'rem';
    $request->commentId = 678060;
    $request->owner = 'odio';
    $request->repo = 'fugit';

    $response = $sdk->pulls->pullsUpdateReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
