# messageComments

## Overview

Operations about message_comments

### Available Operations

* [deleteMessageCommentsId](#deletemessagecommentsid) - Delete Message Comment
* [getMessageComments](#getmessagecomments) - List Message Comments
* [getMessageCommentsId](#getmessagecommentsid) - Show Message Comment
* [patchMessageCommentsId](#patchmessagecommentsid) - Update Message Comment
* [postMessageComments](#postmessagecomments) - Create Message Comment

## deleteMessageCommentsId

Delete Message Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageCommentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageCommentsIdRequest();
    $request->id = 708609;

    $response = $sdk->messageComments->deleteMessageCommentsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageComments

List Message Comments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageCommentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageCommentsRequest();
    $request->cursor = 'quaerat';
    $request->messageId = 277773;
    $request->perPage = 373035;
    $request->userId = 894864;

    $response = $sdk->messageComments->getMessageComments($request);

    if ($response->messageCommentEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageCommentsId

Show Message Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageCommentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageCommentsIdRequest();
    $request->id = 524970;

    $response = $sdk->messageComments->getMessageCommentsId($request);

    if ($response->messageCommentEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMessageCommentsId

Update Message Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMessageCommentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchMessageCommentsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMessageCommentsIdRequest();
    $request->requestBody = new PatchMessageCommentsIdRequestBody();
    $request->requestBody->body = 'sit';
    $request->id = 750595;

    $response = $sdk->messageComments->patchMessageCommentsId($request);

    if ($response->messageCommentEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMessageComments

Create Message Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMessageCommentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMessageCommentsRequestBody();
    $request->body = 'error';
    $request->userId = 333507;

    $response = $sdk->messageComments->postMessageComments($request);

    if ($response->messageCommentEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
