# notifications

## Overview

Operations about notifications

### Available Operations

* [deleteNotificationsId](#deletenotificationsid) - Delete Notification
* [getNotifications](#getnotifications) - List Notifications
* [getNotificationsId](#getnotificationsid) - Show Notification
* [patchNotificationsId](#patchnotificationsid) - Update Notification
* [postNotifications](#postnotifications) - Create Notification

## deleteNotificationsId

Delete Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotificationsIdRequest();
    $request->id = 530089;

    $response = $sdk->notifications->deleteNotificationsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotifications

List Notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationsRequest();
    $request->cursor = 'error';
    $request->filter = [
        'expedita' => 'debitis',
        'neque' => 'dolorum',
        'nostrum' => 'officia',
        'dolorum' => 'corrupti',
    ];
    $request->filterPrefix = [
        'tempora' => 'atque',
        'fugit' => 'ut',
        'fugiat' => 'voluptatem',
        'culpa' => 'expedita',
    ];
    $request->groupId = 'magnam';
    $request->includeAncestors = false;
    $request->path = 'consequatur';
    $request->perPage = 460220;
    $request->sortBy = [
        'sit' => 'voluptatum',
        'quas' => 'repudiandae',
    ];
    $request->userId = 361151;

    $response = $sdk->notifications->getNotifications($request);

    if ($response->notificationEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotificationsId

Show Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationsIdRequest();
    $request->id = 89494;

    $response = $sdk->notifications->getNotificationsId($request);

    if ($response->notificationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchNotificationsId

Update Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchNotificationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchNotificationsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchNotificationsIdRequest();
    $request->requestBody = new PatchNotificationsIdRequestBody();
    $request->requestBody->message = 'custom notification email message';
    $request->requestBody->notifyOnCopy = false;
    $request->requestBody->notifyOnDelete = true;
    $request->requestBody->notifyOnDownload = true;
    $request->requestBody->notifyOnMove = true;
    $request->requestBody->notifyOnUpload = true;
    $request->requestBody->notifyUserActions = false;
    $request->requestBody->recursive = false;
    $request->requestBody->sendInterval = 'daily';
    $request->requestBody->triggerByShareRecipients = true;
    $request->requestBody->triggeringFilenames = [
        'ex',
        'sed',
        'sit',
    ];
    $request->requestBody->triggeringGroupIds = [
        342611,
        906172,
    ];
    $request->requestBody->triggeringUserIds = [
        8511,
        279068,
        968865,
    ];
    $request->id = 209750;

    $response = $sdk->notifications->patchNotificationsId($request);

    if ($response->notificationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNotifications

Create Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNotificationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNotificationsRequestBody();
    $request->groupId = 690894;
    $request->message = 'custom notification email message';
    $request->notifyOnCopy = false;
    $request->notifyOnDelete = true;
    $request->notifyOnDownload = true;
    $request->notifyOnMove = true;
    $request->notifyOnUpload = true;
    $request->notifyUserActions = false;
    $request->path = 'dicta';
    $request->recursive = false;
    $request->sendInterval = 'daily';
    $request->triggerByShareRecipients = true;
    $request->triggeringFilenames = [
        'occaecati',
    ];
    $request->triggeringGroupIds = [
        695270,
        539074,
    ];
    $request->triggeringUserIds = [
        724148,
        948861,
        388867,
    ];
    $request->userId = 2703;
    $request->username = 'Danielle_OConnell';

    $response = $sdk->notifications->postNotifications($request);

    if ($response->notificationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
