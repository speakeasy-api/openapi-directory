# bundleNotifications

## Overview

Operations about bundle_notifications

### Available Operations

* [deleteBundleNotificationsId](#deletebundlenotificationsid) - Delete Bundle Notification
* [getBundleNotifications](#getbundlenotifications) - List Bundle Notifications
* [getBundleNotificationsId](#getbundlenotificationsid) - Show Bundle Notification
* [patchBundleNotificationsId](#patchbundlenotificationsid) - Update Bundle Notification
* [postBundleNotifications](#postbundlenotifications) - Create Bundle Notification

## deleteBundleNotificationsId

Delete Bundle Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBundleNotificationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBundleNotificationsIdRequest();
    $request->id = 471752;

    $response = $sdk->bundleNotifications->deleteBundleNotificationsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBundleNotifications

List Bundle Notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundleNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundleNotificationsRequest();
    $request->bundleId = 'sit';
    $request->cursor = 'expedita';
    $request->filter = [
        'sed' => 'vel',
    ];
    $request->perPage = 730442;
    $request->sortBy = [
        'deserunt' => 'quam',
        'ipsum' => 'incidunt',
    ];
    $request->userId = 186458;

    $response = $sdk->bundleNotifications->getBundleNotifications($request);

    if ($response->bundleNotificationEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBundleNotificationsId

Show Bundle Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundleNotificationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundleNotificationsIdRequest();
    $request->id = 586784;

    $response = $sdk->bundleNotifications->getBundleNotificationsId($request);

    if ($response->bundleNotificationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchBundleNotificationsId

Update Bundle Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchBundleNotificationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchBundleNotificationsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchBundleNotificationsIdRequest();
    $request->requestBody = new PatchBundleNotificationsIdRequestBody();
    $request->requestBody->notifyOnRegistration = true;
    $request->requestBody->notifyOnUpload = true;
    $request->id = 807581;

    $response = $sdk->bundleNotifications->patchBundleNotificationsId($request);

    if ($response->bundleNotificationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBundleNotifications

Create Bundle Notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBundleNotificationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBundleNotificationsRequestBody();
    $request->bundleId = 1;
    $request->notifyOnRegistration = true;
    $request->notifyOnUpload = true;
    $request->userId = 1;

    $response = $sdk->bundleNotifications->postBundleNotifications($request);

    if ($response->bundleNotificationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
