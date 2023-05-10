# notifications

### Available Operations

* [tryNotificationConfig](#trynotificationconfig) - Try sending a notifications

## tryNotificationConfig

Try sending a notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackNotificationConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Notification();
    $request->customerioConfiguration = [
        'qui' => 'necessitatibus',
    ];
    $request->notificationType = NotificationTypeEnum::CUSTOMERIO;
    $request->sendOnFailure = false;
    $request->sendOnSuccess = false;
    $request->slackConfiguration = new SlackNotificationConfiguration();
    $request->slackConfiguration->webhook = 'explicabo';

    $response = $sdk->notifications->tryNotificationConfig($request);

    if ($response->notificationRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
