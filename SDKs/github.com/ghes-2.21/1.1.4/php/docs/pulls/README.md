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
    $request->owner = 'perspiciatis';
    $request->pullNumber = 446394;
    $request->repo = 'adipisci';

    $response = $sdk->pulls->pullsCheckIfMerged($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsCreate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud. You can create a new pull request. This endpoint triggers [notifications](https://docs.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-pull-request>

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
    $request->requestBody->base = 'eveniet';
    $request->requestBody->body = 'occaecati';
    $request->requestBody->draft = false;
    $request->requestBody->head = 'consequuntur';
    $request->requestBody->issue = 1;
    $request->requestBody->maintainerCanModify = false;
    $request->requestBody->title = 'Mr.';
    $request->owner = 'id';
    $request->repo = 'quis';

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

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-reply-for-a-review-comment>

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
    $request->requestBody->body = 'reprehenderit';
    $request->commentId = 625528;
    $request->owner = 'illo';
    $request->pullNumber = 361306;
    $request->repo = 'quidem';

    $response = $sdk->pulls->pullsCreateReplyForReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
    $request->requestBody->body = 'eveniet';
    $request->requestBody->comments = [
        new PullsCreateReviewRequestBodyComments(),
    ];
    $request->requestBody->commitId = 'vero';
    $request->requestBody->event = PullsCreateReviewRequestBodyEventEnum::APPROVE;
    $request->owner = 'iure';
    $request->pullNumber = 59944;
    $request->repo = 'totam';

    $response = $sdk->pulls->pullsCreateReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
    $request->requestBody->body = 'quae';
    $request->requestBody->commitId = 'molestiae';
    $request->requestBody->inReplyTo = 2;
    $request->requestBody->line = 907733;
    $request->requestBody->path = 'qui';
    $request->requestBody->position = 739884;
    $request->requestBody->side = PullsCreateReviewCommentRequestBodySideEnum::LEFT;
    $request->requestBody->startLine = 898063;
    $request->requestBody->startSide = PullsCreateReviewCommentRequestBodyStartSideEnum::LEFT;
    $request->owner = 'laborum';
    $request->pullNumber = 715208;
    $request->repo = 'voluptatum';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#delete-a-pending-review-for-a-pull-request>

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
    $request->owner = 'rem';
    $request->pullNumber = 304446;
    $request->repo = 'ad';
    $request->reviewId = 997963;

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#delete-a-review-comment-for-a-pull-request>

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
    $request->commentId = 3099;
    $request->owner = 'corporis';
    $request->repo = 'perspiciatis';

    $response = $sdk->pulls->pullsDeleteReviewComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsDismissReview

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#dismiss-a-review-for-a-pull-request>

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
    $request->requestBody->message = 'nihil';
    $request->owner = 'mollitia';
    $request->pullNumber = 378245;
    $request->repo = 'alias';
    $request->reviewId = 979527;

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
    $request->owner = 'reiciendis';
    $request->pullNumber = 174658;
    $request->repo = 'id';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-review-for-a-pull-request>

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
    $request->owner = 'minima';
    $request->pullNumber = 293144;
    $request->repo = 'dolorum';
    $request->reviewId = 200364;

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-review-comment-for-a-pull-request>

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
    $request->commentId = 63207;
    $request->owner = 'recusandae';
    $request->repo = 'omnis';

    $response = $sdk->pulls->pullsGetReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsList

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests>

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
    $request->base = 'quaerat';
    $request->direction = PullsListDirectionEnum::ASC;
    $request->head = 'ex';
    $request->owner = 'ut';
    $request->page = 633062;
    $request->perPage = 238413;
    $request->repo = 'debitis';
    $request->sort = PullsListSortEnum::POPULARITY;
    $request->state = PullsListStateEnum::CLOSED;

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-comments-for-a-pull-request-review>

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
    $request->owner = 'nemo';
    $request->page = 928219;
    $request->perPage = 456520;
    $request->pullNumber = 592081;
    $request->repo = 'quis';
    $request->reviewId = 431785;

    $response = $sdk->pulls->pullsListCommentsForReview($request);

    if ($response->reviewComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsListCommits

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-commits) endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-commits-on-a-pull-request>

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
    $request->owner = 'reiciendis';
    $request->page = 592780;
    $request->perPage = 133439;
    $request->pullNumber = 354506;
    $request->repo = 'quasi';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests-files>

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
    $request->owner = 'animi';
    $request->page = 343392;
    $request->perPage = 652309;
    $request->pullNumber = 591027;
    $request->repo = 'possimus';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-requested-reviewers-for-a-pull-request>

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
    $request->owner = 'animi';
    $request->page = 402767;
    $request->perPage = 397257;
    $request->pullNumber = 37565;
    $request->repo = 'repellat';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-review-comments-on-a-pull-request>

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
    $request->direction = PullsListReviewCommentsDirectionEnum::DESC;
    $request->owner = 'ullam';
    $request->page = 448143;
    $request->perPage = 721407;
    $request->pullNumber = 937636;
    $request->repo = 'officia';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-17T11:17:46.661Z');
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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-review-comments-in-a-repository>

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
    $request->direction = PullsListReviewCommentsForRepoDirectionEnum::DESC;
    $request->owner = 'molestias';
    $request->page = 889794;
    $request->perPage = 956933;
    $request->repo = 'cumque';
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T03:20:35.575Z');
    $request->sort = PullsListReviewCommentsForRepoSortEnum::CREATED;

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-reviews-for-a-pull-request>

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
    $request->owner = 'quis';
    $request->page = 82057;
    $request->perPage = 147685;
    $request->pullNumber = 765271;
    $request->repo = 'quae';

    $response = $sdk->pulls->pullsListReviews($request);

    if ($response->pullRequestReviews !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsMerge

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#merge-a-pull-request>

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
    $request->requestBody->commitMessage = 'perferendis';
    $request->requestBody->commitTitle = 'velit';
    $request->requestBody->mergeMethod = PullsMergeRequestBodyMergeMethodEnum::MERGE;
    $request->requestBody->sha = 'eum';
    $request->owner = 'eius';
    $request->pullNumber = 521996;
    $request->repo = 'at';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request>

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
        'eos',
        'sapiente',
        'eum',
        'dicta',
    ];
    $request->requestBody->teamReviewers = [
        'beatae',
        'cupiditate',
    ];
    $request->owner = 'provident';
    $request->pullNumber = 936469;
    $request->repo = 'soluta';

    $response = $sdk->pulls->pullsRemoveRequestedReviewers($request);

    if ($response->pullRequestSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsRequestReviewers

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#request-reviewers-for-a-pull-request>

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
    $request->requestBody = new PullsRequestReviewersRequestBody2();
    $request->requestBody->reviewers = [
        'eaque',
        'earum',
        'perspiciatis',
        'maiores',
    ];
    $request->requestBody->teamReviewers = [
        'aliquid',
        'porro',
        'suscipit',
        'dolorem',
    ];
    $request->owner = 'fugit';
    $request->pullNumber = 764995;
    $request->repo = 'fuga';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#submit-a-review-for-a-pull-request>

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
    $request->requestBody->body = 'ratione';
    $request->requestBody->event = PullsSubmitReviewRequestBodyEventEnum::REQUEST_CHANGES;
    $request->owner = 'necessitatibus';
    $request->pullNumber = 862063;
    $request->repo = 'consequatur';
    $request->reviewId = 97258;

    $response = $sdk->pulls->pullsSubmitReview($request);

    if ($response->pullRequestReview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pullsUpdate

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls/#update-a-pull-request>

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
    $request->requestBody->base = 'et';
    $request->requestBody->body = 'ducimus';
    $request->requestBody->maintainerCanModify = false;
    $request->requestBody->state = PullsUpdateRequestBodyStateEnum::CLOSED;
    $request->requestBody->title = 'Ms.';
    $request->owner = 'suscipit';
    $request->pullNumber = 241557;
    $request->repo = 'quasi';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-pull-request-branch>

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
    $request->requestBody->expectedHeadSha = 'magni';
    $request->owner = 'doloribus';
    $request->pullNumber = 859581;
    $request->repo = 'necessitatibus';

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-review-for-a-pull-request>

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
    $request->requestBody->body = 'ipsa';
    $request->owner = 'tempora';
    $request->pullNumber = 470621;
    $request->repo = 'molestiae';
    $request->reviewId = 115834;

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
<https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-review-comment-for-a-pull-request>

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
    $request->requestBody->body = 'iusto';
    $request->commentId = 457059;
    $request->owner = 'praesentium';
    $request->repo = 'maiores';

    $response = $sdk->pulls->pullsUpdateReviewComment($request);

    if ($response->pullRequestReviewComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
