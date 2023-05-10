# messageCommentReactions

## Overview

Operations about message_comment_reactions

### Available Operations

* [deleteMessageCommentReactionsId](#deletemessagecommentreactionsid) - Delete Message Comment Reaction
* [getMessageCommentReactions](#getmessagecommentreactions) - List Message Comment Reactions
* [getMessageCommentReactionsId](#getmessagecommentreactionsid) - Show Message Comment Reaction
* [postMessageCommentReactions](#postmessagecommentreactions) - Create Message Comment Reaction

## deleteMessageCommentReactionsId

Delete Message Comment Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageCommentReactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageCommentReactionsIdRequest();
    $request->id = 273009;

    $response = $sdk->messageCommentReactions->deleteMessageCommentReactionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageCommentReactions

List Message Comment Reactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageCommentReactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageCommentReactionsRequest();
    $request->cursor = 'voluptate';
    $request->messageCommentId = 970076;
    $request->perPage = 401713;
    $request->userId = 25497;

    $response = $sdk->messageCommentReactions->getMessageCommentReactions($request);

    if ($response->messageCommentReactionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageCommentReactionsId

Show Message Comment Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageCommentReactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageCommentReactionsIdRequest();
    $request->id = 248413;

    $response = $sdk->messageCommentReactions->getMessageCommentReactionsId($request);

    if ($response->messageCommentReactionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMessageCommentReactions

Create Message Comment Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMessageCommentReactionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMessageCommentReactionsRequestBody();
    $request->emoji = 'officiis';
    $request->userId = 505866;

    $response = $sdk->messageCommentReactions->postMessageCommentReactions($request);

    if ($response->messageCommentReactionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
