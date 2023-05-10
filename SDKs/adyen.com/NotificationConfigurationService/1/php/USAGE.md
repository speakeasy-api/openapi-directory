<!-- Start SDK Example Usage -->
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
    $request->configurationDetails->apiVersion = 548814;
    $request->configurationDetails->description = 'provident';
    $request->configurationDetails->eventConfigs = [
        new NotificationEventConfigurationWrapper(),
        new NotificationEventConfigurationWrapper(),
        new NotificationEventConfigurationWrapper(),
    ];
    $request->configurationDetails->messageFormat = NotificationConfigurationDetailsMessageFormatEnum::SOAP;
    $request->configurationDetails->notificationId = 602763;
    $request->configurationDetails->notifyPassword = 'nulla';
    $request->configurationDetails->notifyURL = 'corrupti';
    $request->configurationDetails->notifyUsername = 'illum';
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
<!-- End SDK Example Usage -->