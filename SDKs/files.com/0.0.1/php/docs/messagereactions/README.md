# messageReactions

## Overview

Operations about message_reactions

### Available Operations

* [deleteMessageReactionsId](#deletemessagereactionsid) - Delete Message Reaction
* [getMessageReactions](#getmessagereactions) - List Message Reactions
* [getMessageReactionsId](#getmessagereactionsid) - Show Message Reaction
* [postMessageReactions](#postmessagereactions) - Create Message Reaction

## deleteMessageReactionsId

Delete Message Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageReactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageReactionsIdRequest();
    $request->id = 329543;

    $response = $sdk->messageReactions->deleteMessageReactionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageReactions

List Message Reactions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageReactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageReactionsRequest();
    $request->cursor = 'recusandae';
    $request->messageId = 967122;
    $request->perPage = 862319;
    $request->userId = 168576;

    $response = $sdk->messageReactions->getMessageReactions($request);

    if ($response->messageReactionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessageReactionsId

Show Message Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessageReactionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessageReactionsIdRequest();
    $request->id = 48690;

    $response = $sdk->messageReactions->getMessageReactionsId($request);

    if ($response->messageReactionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMessageReactions

Create Message Reaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMessageReactionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMessageReactionsRequestBody();
    $request->emoji = 'saepe';
    $request->userId = 253642;

    $response = $sdk->messageReactions->postMessageReactions($request);

    if ($response->messageReactionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
