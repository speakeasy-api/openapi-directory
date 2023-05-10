# appPkgmNotifications

## Overview

App Package management notifications

### Available Operations

* [appPkgNotificationPOST](#apppkgnotificationpost) - Registers a notification endpoint to notify application package operations

## appPkgNotificationPOST

Registers a notification endpoint to notify application package operations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgNotification;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgNotificationLinks;
use \OpenAPI\OpenAPI\Models\Shared\LinkType;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgNotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgNotificationOperationalStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeStamp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPkgNotification();
    $request->links = new AppPkgNotificationLinks();
    $request->links->subscription = new LinkType();
    $request->links->subscription->href = 'http://familiar-commotion.net';
    $request->appDId = 'cum';
    $request->appPkgId = 'esse';
    $request->id = '39205929-396f-4ea7-996e-b10faaa2352c';
    $request->notificationType = AppPkgNotificationTypeEnum::APP_PACAKGE_ENABLED;
    $request->operationalState = AppPkgNotificationOperationalStateEnum::ENABLED;
    $request->subscriptionId = 'nemo';
    $request->timeStamp = new TimeStamp();
    $request->timeStamp->nanoSeconds = 325047;
    $request->timeStamp->seconds = 570197;

    $response = $sdk->appPkgmNotifications->appPkgNotificationPOST($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
