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

Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-a-commit-comment>

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
    $request->requestBody->content = ReactionsCreateForCommitCommentRequestBodyContentEnum::MINUS1;
    $request->commentId = 656762;
    $request->owner = 'necessitatibus';
    $request->repo = 'nulla';

    $response = $sdk->reactions->reactionsCreateForCommitComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssue

Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.19/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-an-issue>

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
    $request->issueNumber = 97258;
    $request->owner = 'et';
    $request->repo = 'ducimus';

    $response = $sdk->reactions->reactionsCreateForIssue($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForIssueComment

Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-an-issue-comment>

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
    $request->requestBody->content = ReactionsCreateForIssueCommentRequestBodyContentEnum::HEART;
    $request->commentId = 581082;
    $request->owner = 'suscipit';
    $request->repo = 'adipisci';

    $response = $sdk->reactions->reactionsCreateForIssueComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForPullRequestReviewComment

Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment>

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
    $request->commentId = 169025;
    $request->owner = 'doloribus';
    $request->repo = 'nulla';

    $response = $sdk->reactions->reactionsCreateForPullRequestReviewComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussion

Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#create-reaction-for-a-team-discussion>

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
    $request->requestBody->content = ReactionsCreateForTeamDiscussionRequestBodyContentEnum::EYES;
    $request->accept = 'ipsa';
    $request->discussionNumber = 271113;
    $request->teamId = 470621;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussion($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsCreateForTeamDiscussionComment

Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment>

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
    $request->accept = 'dicta';
    $request->commentNumber = 479754;
    $request->discussionNumber = 457059;
    $request->teamId = 508390;

    $response = $sdk->reactions->reactionsCreateForTeamDiscussionComment($request);

    if ($response->reaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsDelete

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#delete-a-reaction-legacy>

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
    $request->accept = 'maiores';
    $request->reactionId = 967260;

    $response = $sdk->reactions->reactionsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForCommitComment

List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-a-commit-comment>

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
    $request->commentId = 423706;
    $request->content = ReactionsListForCommitCommentContentEnum::PLUS1;
    $request->owner = 'fugiat';
    $request->page = 39650;
    $request->perPage = 117315;
    $request->repo = 'odio';

    $response = $sdk->reactions->reactionsListForCommitComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssue

List the reactions to an [issue](https://docs.github.com/enterprise-server@2.19/rest/reference/issues).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-an-issue>

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
    $request->content = ReactionsListForIssueContentEnum::LAUGH;
    $request->issueNumber = 458259;
    $request->owner = 'ex';
    $request->page = 235263;
    $request->perPage = 399812;
    $request->repo = 'ipsa';

    $response = $sdk->reactions->reactionsListForIssue($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForIssueComment

List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.19/rest/reference/issues#comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-an-issue-comment>

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
    $request->commentId = 671384;
    $request->content = ReactionsListForIssueCommentContentEnum::PLUS1;
    $request->owner = 'nostrum';
    $request->page = 856756;
    $request->perPage = 713767;
    $request->repo = 'aliquid';

    $response = $sdk->reactions->reactionsListForIssueComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForPullRequestReviewComment

List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#review-comments).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment>

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
    $request->commentId = 639187;
    $request->content = ReactionsListForPullRequestReviewCommentContentEnum::CONFUSED;
    $request->owner = 'aliquid';
    $request->page = 21973;
    $request->perPage = 431760;
    $request->repo = 'voluptas';

    $response = $sdk->reactions->reactionsListForPullRequestReviewComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussion

List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#list-reactions-for-a-team-discussion>

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
    $request->accept = 'iste';
    $request->content = ReactionsListForTeamDiscussionContentEnum::HOORAY;
    $request->discussionNumber = 70042;
    $request->page = 625358;
    $request->perPage = 822407;
    $request->teamId = 913992;

    $response = $sdk->reactions->reactionsListForTeamDiscussion($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactionsListForTeamDiscussionComment

List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment>

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
    $request->accept = 'mollitia';
    $request->commentNumber = 671794;
    $request->content = ReactionsListForTeamDiscussionCommentContentEnum::HOORAY;
    $request->discussionNumber = 324083;
    $request->page = 536923;
    $request->perPage = 316220;
    $request->teamId = 110477;

    $response = $sdk->reactions->reactionsListForTeamDiscussionComment($request);

    if ($response->reactions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
