# forum

## Overview

forum

### Available Operations

* [forumGetCoreTopicsPaged](#forumgetcoretopicspaged) - Gets a listing of all topics marked as part of the core group.
* [forumGetForumTagSuggestions](#forumgetforumtagsuggestions) - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* [forumGetPoll](#forumgetpoll) - Gets the specified forum poll.
* [forumGetPostAndParent](#forumgetpostandparent) - Returns the post specified and its immediate parent.
* [forumGetPostAndParentAwaitingApproval](#forumgetpostandparentawaitingapproval) - Returns the post specified and its immediate parent of posts that are awaiting approval.
* [forumGetPostsThreadedPaged](#forumgetpoststhreadedpaged) - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* [forumGetPostsThreadedPagedFromChild](#forumgetpoststhreadedpagedfromchild) - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* [forumGetRecruitmentThreadSummaries](#forumgetrecruitmentthreadsummaries) - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* [forumGetTopicForContent](#forumgettopicforcontent) - Gets the post Id for the given content item's comments, if it exists.
* [forumGetTopicsPaged](#forumgettopicspaged) - Get topics from any forum.

## forumGetCoreTopicsPaged

Gets a listing of all topics marked as part of the core group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetCoreTopicsPagedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetCoreTopicsPagedRequest();
    $request->categoryFilter = 979587;
    $request->locales = 'dicta';
    $request->page = 359444;
    $request->quickDate = 296140;
    $request->sort = 480894;

    $response = $sdk->forum->forumGetCoreTopicsPaged($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetForumTagSuggestions

Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetForumTagSuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetForumTagSuggestionsRequest();
    $request->partialtag = 'dicta';

    $response = $sdk->forum->forumGetForumTagSuggestions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetPoll

Gets the specified forum poll.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetPollRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetPollRequest();
    $request->topicId = 688661;

    $response = $sdk->forum->forumGetPoll($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetPostAndParent

Returns the post specified and its immediate parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetPostAndParentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetPostAndParentRequest();
    $request->childPostId = 317983;
    $request->showbanned = 'accusamus';

    $response = $sdk->forum->forumGetPostAndParent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetPostAndParentAwaitingApproval

Returns the post specified and its immediate parent of posts that are awaiting approval.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetPostAndParentAwaitingApprovalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetPostAndParentAwaitingApprovalRequest();
    $request->childPostId = 414263;
    $request->showbanned = 'repudiandae';

    $response = $sdk->forum->forumGetPostAndParentAwaitingApproval($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetPostsThreadedPaged

Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetPostsThreadedPagedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetPostsThreadedPagedRequest();
    $request->getParentPost = false;
    $request->page = 64147;
    $request->pageSize = 216822;
    $request->parentPostId = 692472;
    $request->replySize = 565189;
    $request->rootThreadMode = false;
    $request->showbanned = 'excepturi';
    $request->sortMode = 865103;

    $response = $sdk->forum->forumGetPostsThreadedPaged($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetPostsThreadedPagedFromChild

Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetPostsThreadedPagedFromChildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetPostsThreadedPagedFromChildRequest();
    $request->childPostId = 265389;
    $request->page = 508969;
    $request->pageSize = 523248;
    $request->replySize = 916723;
    $request->rootThreadMode = false;
    $request->showbanned = 'quasi';
    $request->sortMode = 921158;

    $response = $sdk->forum->forumGetPostsThreadedPagedFromChild($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetRecruitmentThreadSummaries

Allows the caller to get a list of to 25 recruitment thread summary information objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->forum->forumGetRecruitmentThreadSummaries();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetTopicForContent

Gets the post Id for the given content item's comments, if it exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetTopicForContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetTopicForContentRequest();
    $request->contentId = 575947;

    $response = $sdk->forum->forumGetTopicForContent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forumGetTopicsPaged

Get topics from any forum.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForumGetTopicsPagedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForumGetTopicsPagedRequest();
    $request->categoryFilter = 83112;
    $request->group = 929297;
    $request->locales = 'incidunt';
    $request->page = 318569;
    $request->pageSize = 9356;
    $request->quickDate = 667411;
    $request->sort = 842342;
    $request->tagstring = 'explicabo';

    $response = $sdk->forum->forumGetTopicsPaged($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
