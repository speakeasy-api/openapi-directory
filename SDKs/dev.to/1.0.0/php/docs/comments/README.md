# comments

### Available Operations

* [getCommentById](#getcommentbyid) - Comment by id
* [getCommentsByArticleId](#getcommentsbyarticleid) - Comments

## getCommentById

This endpoint allows the client to retrieve a comment as well as his descendants comments.

  It will return the required comment (the root) with its nested descendants as a thread.

  See the format specification for further details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentByIdRequest();
    $request->id = 456150;

    $response = $sdk->comments->getCommentById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentsByArticleId

This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.

It will return the all top level comments with their nested comments as threads. See the format specification for further details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsByArticleIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentsByArticleIdRequest();
    $request->aId = 'ipsum';
    $request->pId = 'excepturi';

    $response = $sdk->comments->getCommentsByArticleId($request);

    if ($response->comments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
