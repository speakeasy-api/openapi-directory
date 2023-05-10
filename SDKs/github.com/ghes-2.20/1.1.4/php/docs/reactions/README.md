# reactions

## Overview

Interact with reactions to various GitHub entities.

### Available Operations

* [reactionsCreateForCommitComment](#reactionscreateforcommitcomment) - Create reaction for a commit comment
* [reactionsCreateForIssue](#reactionscreateforissue) - Create reaction for an issue
* [reactionsCreateForIssueComment](#reactionscreateforissuecomment) - Create reaction for an issue comment
* [reactionsCreateForPullRequestReviewComment](#reactionscreateforpullrequestreviewcomment) - Create reaction for a pull request review comment
* [reactionsCreateForTeamDiscussion](#reactionscreateforteamdiscussion) - Create reaction for a team discussion
* [reactionsCreateForTeamDiscussionComment](#reactionscreateforteamdiscussioncomment) - Create reaction for a team discussion comment
* [reactionsDelete](#reactionsdelete) - Delete a reaction
* [reactionsListForCommitComment](#reactionslistforcommitcomment) - List reactions for a commit comment
* [reactionsListForIssue](#reactionslistforissue) - List reactions for an issue
* [reactionsListForIssueComment](#reactionslistforissuecomment) - List reactions for an issue comment
* [reactionsListForPullRequestReviewComment](#reactionslistforpullrequestreviewcomment) - List reactions for a pull request review comment
* [reactionsListForTeamDiscussion](#reactionslistforteamdiscussion) - List reactions for a team discussion
* [reactionsListForTeamDiscussionComment](#reactionslistforteamdiscussioncomment) - List reactions for a team discussion comment

## reactionsCreateForCommitComment

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForCommitCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForCommitCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForCommitCommentRequest();
    $request->requestBody = new ReactionsCreateForCommitCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForCommitCommentRequestBodyContentEnum::EYES;
    $request->commentId = 423706;
    $request->owner = 'architecto';
    $request->repo = 'fugiat';

    $response = $sdk->reactions->reactionsCreateForCommitComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.20/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForIssueRequest();
    $request->requestBody = new ReactionsCreateForIssueRequestBody();
    $request->requestBody->content = ReactionsCreateForIssueRequestBodyContentEnum::PLUS1;
    $request->issueNumber = 117315;
    $request->owner = 'odio';
    $request->repo = 'tempora';

    $response = $sdk->reactions->reactionsCreateForIssue($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.20/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForIssueCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForIssueCommentRequest();
    $request->requestBody = new ReactionsCreateForIssueCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForIssueCommentRequestBodyContentEnum::CONFUSED;
    $request->commentId = 403793;
    $request->owner = 'consectetur';
    $request->repo = 'aliquid';

    $response = $sdk->reactions->reactionsCreateForIssueComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForPullRequestReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForPullRequestReviewCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForPullRequestReviewCommentRequest();
    $request->requestBody = new ReactionsCreateForPullRequestReviewCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum::PLUS1;
    $request->commentId = 671384;
    $request->owner = 'sunt';
    $request->repo = 'nostrum';

    $response = $sdk->reactions->reactionsCreateForPullRequestReviewComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussion

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#create-reaction-for-a-team-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForTeamDiscussionRequest();
    $request->requestBody = new ReactionsCreateForTeamDiscussionRequestBody();
    $request->requestBody->content = ReactionsCreateForTeamDiscussionRequestBodyContentEnum::ROCKET;
    $request->accept = 'expedita';
    $request->discussionNumber = 399667;
    $request->teamId = 639187;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussion($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussionComment

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsCreateForTeamDiscussionCommentRequest();
    $request->requestBody = new ReactionsCreateForTeamDiscussionCommentRequestBody();
    $request->requestBody->content = ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum::CONFUSED;
    $request->accept = 'aliquid';
    $request->commentNumber = 21973;
    $request->discussionNumber = 431760;
    $request->teamId = 374753;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDelete

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#delete-a-reaction-legacy>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsDeleteRequest();
    $request->accept = 'iste';
    $request->reactionId = 661607;

    $response = $sdk->reactions->reactionsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-a-commit-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForCommitCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForCommitCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForCommitCommentRequest();
    $request->commentId = 70042;
    $request->content = ReactionsListForCommitCommentContentEnum::HOORAY;
    $request->owner = 'possimus';
    $request->page = 913992;
    $request->perPage = 653421;
    $request->repo = 'laborum';

    $response = $sdk->reactions->reactionsListForCommitComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@2.20/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-an-issue>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForIssueRequest();
    $request->content = ReactionsListForIssueContentEnum::HOORAY;
    $request->issueNumber = 324083;
    $request->owner = 'deleniti';
    $request->page = 316220;
    $request->perPage = 110477;
    $request->repo = 'repellendus';

    $response = $sdk->reactions->reactionsListForIssue($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.20/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-an-issue-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForIssueCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForIssueCommentRequest();
    $request->commentId = 405036;
    $request->content = ReactionsListForIssueCommentContentEnum::ROCKET;
    $request->owner = 'ex';
    $request->page = 281153;
    $request->perPage = 321043;
    $request->repo = 'expedita';

    $response = $sdk->reactions->reactionsListForIssueComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForPullRequestReviewCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForPullRequestReviewCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForPullRequestReviewCommentRequest();
    $request->commentId = 29950;
    $request->content = ReactionsListForPullRequestReviewCommentContentEnum::HEART;
    $request->owner = 'cum';
    $request->page = 399660;
    $request->perPage = 109784;
    $request->repo = 'voluptatum';

    $response = $sdk->reactions->reactionsListForPullRequestReviewComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussion

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#list-reactions-for-a-team-discussion>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForTeamDiscussionRequest();
    $request->accept = 'omnis';
    $request->content = ReactionsListForTeamDiscussionContentEnum::PLUS1;
    $request->discussionNumber = 703218;
    $request->page = 665678;
    $request->perPage = 634786;
    $request->teamId = 29634;

    $response = $sdk->reactions->reactionsListForTeamDiscussion($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussionComment

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReactionsListForTeamDiscussionCommentContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReactionsListForTeamDiscussionCommentRequest();
    $request->accept = 'sapiente';
    $request->commentNumber = 889288;
    $request->content = ReactionsListForTeamDiscussionCommentContentEnum::PLUS1;
    $request->discussionNumber = 682119;
    $request->page = 867168;
    $request->perPage = 891315;
    $request->teamId = 29190;

    $response = $sdk->reactions->reactionsListForTeamDiscussionComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
