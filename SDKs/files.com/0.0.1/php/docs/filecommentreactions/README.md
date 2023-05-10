# fileCommentReactions

## Overview

Operations about file_comment_reactions

### Available Operations

* [deleteFileCommentReactionsId](#deletefilecommentreactionsid) - Delete File Comment Reaction
* [postFileCommentReactions](#postfilecommentreactions) - Create File Comment Reaction

## deleteFileCommentReactionsId

Delete File Comment Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFileCommentReactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFileCommentReactionsIdRequest();
    $request->id = 458515;

    $response = $sdk->fileCommentReactions->deleteFileCommentReactionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFileCommentReactions

Create File Comment Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFileCommentReactionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFileCommentReactionsRequestBody();
    $request->emoji = 'esse';
    $request->fileCommentId = 524593;
    $request->userId = 683282;

    $response = $sdk->fileCommentReactions->postFileCommentReactions($request);

    if ($response->fileCommentReactionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
