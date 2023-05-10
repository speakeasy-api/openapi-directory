# notifications

## Overview

Notifications are templated email messages which can be sent to contributors. A notification might be used to request further information from a contributor or inform them when their contribution has been published.

### Available Operations

* [getNotificationsContributionsIdPreview](#getnotificationscontributionsidpreview)

## getNotificationsContributionsIdPreview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationsContributionsIdPreviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationsContributionsIdPreviewRequest();
    $request->id = '89fbe3a5-aa8e-4482-8d0a-b4075088e518';
    $request->message = 'ex';

    $response = $sdk->notifications->getNotificationsContributionsIdPreview($request);

    if ($response->notificationPreview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
