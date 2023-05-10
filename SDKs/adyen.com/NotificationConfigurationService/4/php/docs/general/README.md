# general

### Available Operations

* [postCreateNotificationConfiguration](#postcreatenotificationconfiguration) - Subscribe to notifications
* [postDeleteNotificationConfigurations](#postdeletenotificationconfigurations) - Delete a notification subscription configuration
* [postGetNotificationConfiguration](#postgetnotificationconfiguration) - Get a notification subscription configuration
* [postGetNotificationConfigurationList](#postgetnotificationconfigurationlist) - Get a list of notification subscription configurations
* [postTestNotificationConfiguration](#posttestnotificationconfiguration) - Test a notification configuration
* [postUpdateNotificationConfiguration](#postupdatenotificationconfiguration) - Update a notification subscription configuration

## postCreateNotificationConfiguration

Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationWrapper;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationIncludeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetailsMessageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetailsSslProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCreateNotificationConfigurationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationConfigurationRequest();
    $request->configurationDetails = new NotificationConfigurationDetails();
    $request->configurationDetails->active = false;
    $request->configurationDetails->apiVersion = 623564;
    $request->configurationDetails->description = 'deserunt';
    $request->configurationDetails->eventConfigs = [
        new NotificationEventConfigurationWrapper(),
        new NotificationEventConfigurationWrapper(),
    ];
    $request->configurationDetails->messageFormat = NotificationConfigurationDetailsMessageFormatEnum::JSON;
    $request->configurationDetails->notificationId = 297534;
    $request->configurationDetails->notifyPassword = 'debitis';
    $request->configurationDetails->notifyURL = 'ipsa';
    $request->configurationDetails->notifyUsername = 'delectus';
    $request->configurationDetails->sendActionHeader = false;
    $request->configurationDetails->sslProtocol = NotificationConfigurationDetailsSslProtocolEnum::TL_SV12;

    $requestSecurity = new PostCreateNotificationConfigurationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postCreateNotificationConfiguration($request, $requestSecurity);

    if ($response->getNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteNotificationConfigurations

Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeleteNotificationConfigurationsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotificationConfigurationRequest();
    $request->notificationIds = [
        477665,
        791725,
    ];

    $requestSecurity = new PostDeleteNotificationConfigurationsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postDeleteNotificationConfigurations($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetNotificationConfiguration

Returns the details of the configuration of a notification subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetNotificationConfigurationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationConfigurationRequest();
    $request->notificationId = 812169;

    $requestSecurity = new PostGetNotificationConfigurationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGetNotificationConfiguration($request, $requestSecurity);

    if ($response->getNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetNotificationConfigurationList

Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostGetNotificationConfigurationListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ]

    $requestSecurity = new PostGetNotificationConfigurationListSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGetNotificationConfigurationList($request, $requestSecurity);

    if ($response->getNotificationConfigurationListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTestNotificationConfiguration

Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TestNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestNotificationConfigurationRequestEventTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTestNotificationConfigurationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestNotificationConfigurationRequest();
    $request->eventTypes = [
        TestNotificationConfigurationRequestEventTypesEnum::ACCOUNT_FUNDS_BELOW_THRESHOLD,
        TestNotificationConfigurationRequestEventTypesEnum::FUNDS_MIGRATED,
    ];
    $request->notificationId = 20218;

    $requestSecurity = new PostTestNotificationConfigurationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postTestNotificationConfiguration($request, $requestSecurity);

    if ($response->testNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateNotificationConfiguration

Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationWrapper;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEventConfigurationIncludeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetailsMessageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationConfigurationDetailsSslProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUpdateNotificationConfigurationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotificationConfigurationRequest();
    $request->configurationDetails = new NotificationConfigurationDetails();
    $request->configurationDetails->active = false;
    $request->configurationDetails->apiVersion = 368241;
    $request->configurationDetails->description = 'repellendus';
    $request->configurationDetails->eventConfigs = [
        new NotificationEventConfigurationWrapper(),
        new NotificationEventConfigurationWrapper(),
        new NotificationEventConfigurationWrapper(),
        new NotificationEventConfigurationWrapper(),
    ];
    $request->configurationDetails->messageFormat = NotificationConfigurationDetailsMessageFormatEnum::SOAP;
    $request->configurationDetails->notificationId = 140350;
    $request->configurationDetails->notifyPassword = 'at';
    $request->configurationDetails->notifyURL = 'at';
    $request->configurationDetails->notifyUsername = 'maiores';
    $request->configurationDetails->sendActionHeader = false;
    $request->configurationDetails->sslProtocol = NotificationConfigurationDetailsSslProtocolEnum::TL_SV12;

    $requestSecurity = new PostUpdateNotificationConfigurationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postUpdateNotificationConfiguration($request, $requestSecurity);

    if ($response->getNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
