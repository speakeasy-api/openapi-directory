# pushNotificationTest

## Overview

Push Notification Test Controller

### Available Operations

* [testPushAmazonNotificationsUsingPOST](#testpushamazonnotificationsusingpost) - testPushAmazonNotifications
* [testPushAppleDevNotificationsUsingPOST](#testpushappledevnotificationsusingpost) - testPushAppleDevNotifications
* [testPushAppleProdNotificationsUsingPOST](#testpushappleprodnotificationsusingpost) - testPushAppleProdNotifications
* [testPushGoogleNotificationsUsingPOST](#testpushgooglenotificationsusingpost) - testPushGoogleNotifications
* [testViberIntegrationNotificationsUsingPOST](#testviberintegrationnotificationsusingpost) - testViberIntegrationNotifications
* [testViberProductionNotificationsUsingPOST](#testviberproductionnotificationsusingpost) - testViberProductionNotifications
* [testWindows8NotificationsUsingPOST](#testwindows8notificationsusingpost) - testWindows8Notifications
* [testWindowsPhone8NotificationsUsingPOST](#testwindowsphone8notificationsusingpost) - testWindowsPhone8Notifications

## testPushAmazonNotificationsUsingPOST

testPushAmazonNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestPushAmazonNotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestPushAmazonNotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'enim';
    $request->pushNotificationTestModel->messageId = 'accusamus';
    $request->pushNotificationTestModel->pushId = 'delectus';
    $request->pushNotificationTestModel->subtitle = 'quidem';
    $request->pushNotificationTestModel->summary = 'provident';
    $request->pushNotificationTestModel->title = 'Miss';
    $request->apiKey = 'id';

    $response = $sdk->pushNotificationTest->testPushAmazonNotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testPushAppleDevNotificationsUsingPOST

testPushAppleDevNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestPushAppleDevNotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestPushAppleDevNotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'blanditiis';
    $request->pushNotificationTestModel->messageId = 'deleniti';
    $request->pushNotificationTestModel->pushId = 'sapiente';
    $request->pushNotificationTestModel->subtitle = 'amet';
    $request->pushNotificationTestModel->summary = 'deserunt';
    $request->pushNotificationTestModel->title = 'Mrs.';
    $request->apiKey = 'vel';

    $response = $sdk->pushNotificationTest->testPushAppleDevNotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testPushAppleProdNotificationsUsingPOST

testPushAppleProdNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestPushAppleProdNotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestPushAppleProdNotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'natus';
    $request->pushNotificationTestModel->messageId = 'omnis';
    $request->pushNotificationTestModel->pushId = 'molestiae';
    $request->pushNotificationTestModel->subtitle = 'perferendis';
    $request->pushNotificationTestModel->summary = 'nihil';
    $request->pushNotificationTestModel->title = 'Mrs.';
    $request->apiKey = 'distinctio';

    $response = $sdk->pushNotificationTest->testPushAppleProdNotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testPushGoogleNotificationsUsingPOST

testPushGoogleNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestPushGoogleNotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestPushGoogleNotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'id';
    $request->pushNotificationTestModel->messageId = 'labore';
    $request->pushNotificationTestModel->pushId = 'labore';
    $request->pushNotificationTestModel->subtitle = 'suscipit';
    $request->pushNotificationTestModel->summary = 'natus';
    $request->pushNotificationTestModel->title = 'Miss';
    $request->apiKey = 'eum';

    $response = $sdk->pushNotificationTest->testPushGoogleNotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testViberIntegrationNotificationsUsingPOST

testViberIntegrationNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestViberIntegrationNotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestViberIntegrationNotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'vero';
    $request->pushNotificationTestModel->messageId = 'aspernatur';
    $request->pushNotificationTestModel->pushId = 'architecto';
    $request->pushNotificationTestModel->subtitle = 'magnam';
    $request->pushNotificationTestModel->summary = 'et';
    $request->pushNotificationTestModel->title = 'Ms.';
    $request->apiKey = 'ullam';

    $response = $sdk->pushNotificationTest->testViberIntegrationNotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testViberProductionNotificationsUsingPOST

testViberProductionNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestViberProductionNotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestViberProductionNotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'provident';
    $request->pushNotificationTestModel->messageId = 'quos';
    $request->pushNotificationTestModel->pushId = 'sint';
    $request->pushNotificationTestModel->subtitle = 'accusantium';
    $request->pushNotificationTestModel->summary = 'mollitia';
    $request->pushNotificationTestModel->title = 'Dr.';
    $request->apiKey = 'mollitia';

    $response = $sdk->pushNotificationTest->testViberProductionNotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testWindows8NotificationsUsingPOST

testWindows8Notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestWindows8NotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestWindows8NotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'ad';
    $request->pushNotificationTestModel->messageId = 'eum';
    $request->pushNotificationTestModel->pushId = 'dolor';
    $request->pushNotificationTestModel->subtitle = 'necessitatibus';
    $request->pushNotificationTestModel->summary = 'odit';
    $request->pushNotificationTestModel->title = 'Mrs.';
    $request->apiKey = 'quasi';

    $response = $sdk->pushNotificationTest->testWindows8NotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testWindowsPhone8NotificationsUsingPOST

testWindowsPhone8Notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestWindowsPhone8NotificationsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushNotificationTestModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestWindowsPhone8NotificationsUsingPOSTRequest();
    $request->pushNotificationTestModel = new PushNotificationTestModel();
    $request->pushNotificationTestModel->customJson = 'iure';
    $request->pushNotificationTestModel->messageId = 'doloribus';
    $request->pushNotificationTestModel->pushId = 'debitis';
    $request->pushNotificationTestModel->subtitle = 'eius';
    $request->pushNotificationTestModel->summary = 'maxime';
    $request->pushNotificationTestModel->title = 'Ms.';
    $request->apiKey = 'facilis';

    $response = $sdk->pushNotificationTest->testWindowsPhone8NotificationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
