# messages

## Overview

Operations about messages

### Available Operations

* [deleteMessagesId](#deletemessagesid) - Delete Message
* [getMessages](#getmessages) - List Messages
* [getMessagesId](#getmessagesid) - Show Message
* [patchMessagesId](#patchmessagesid) - Update Message
* [postMessages](#postmessages) - Create Message

## deleteMessagesId

Delete Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessagesIdRequest();
    $request->id = 329935;

    $response = $sdk->messages->deleteMessagesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessages

List Messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessagesRequest();
    $request->cursor = 'in';
    $request->perPage = 889234;
    $request->projectId = 104627;
    $request->userId = 512452;

    $response = $sdk->messages->getMessages($request);

    if ($response->messageEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMessagesId

Show Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMessagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMessagesIdRequest();
    $request->id = 348476;

    $response = $sdk->messages->getMessagesId($request);

    if ($response->messageEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMessagesId

Update Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMessagesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchMessagesIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMessagesIdRequest();
    $request->requestBody = new PatchMessagesIdRequestBody();
    $request->requestBody->body = 'We should upgrade our Files.com account!';
    $request->requestBody->projectId = 510629;
    $request->requestBody->subject = 'Files.com Account Upgrade';
    $request->id = 740098;

    $response = $sdk->messages->patchMessagesId($request);

    if ($response->messageEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMessages

Create Message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMessagesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMessagesRequestBody();
    $request->body = 'We should upgrade our Files.com account!';
    $request->projectId = 386827;
    $request->subject = 'Files.com Account Upgrade';
    $request->userId = 680515;

    $response = $sdk->messages->postMessages($request);

    if ($response->messageEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
