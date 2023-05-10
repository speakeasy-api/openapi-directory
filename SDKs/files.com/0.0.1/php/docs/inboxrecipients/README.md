# inboxRecipients

## Overview

Operations about inbox_recipients

### Available Operations

* [getInboxRecipients](#getinboxrecipients) - List Inbox Recipients
* [postInboxRecipients](#postinboxrecipients) - Create Inbox Recipient

## getInboxRecipients

List Inbox Recipients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxRecipientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInboxRecipientsRequest();
    $request->cursor = 'debitis';
    $request->filter = [
        'corporis' => 'harum',
    ];
    $request->inboxId = 385237;
    $request->perPage = 58356;
    $request->sortBy = [
        'libero' => 'vitae',
        'accusamus' => 'similique',
        'tempora' => 'aspernatur',
        'voluptas' => 'voluptas',
    ];

    $response = $sdk->inboxRecipients->getInboxRecipients($request);

    if ($response->inboxRecipientEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postInboxRecipients

Create Inbox Recipient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostInboxRecipientsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostInboxRecipientsRequestBody();
    $request->company = 'Acme Ltd';
    $request->inboxId = 374296;
    $request->name = 'John Smith';
    $request->note = 'Just a note.';
    $request->recipient = 'johndoe@gmail.com';
    $request->shareAfterCreate = false;

    $response = $sdk->inboxRecipients->postInboxRecipients($request);

    if ($response->inboxRecipientEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
