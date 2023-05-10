<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelRequestBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationFilterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationMessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsightSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnsChannelConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNotificationChannelRequest();
    $request->requestBody = new AddNotificationChannelRequestBody();
    $request->requestBody->config = new AddNotificationChannelRequestBodyConfig();
    $request->requestBody->config->filters = new NotificationFilterConfig();
    $request->requestBody->config->filters->messageTypes = [
        NotificationMessageTypeEnum::NEW_ASSOCIATION,
        NotificationMessageTypeEnum::SEVERITY_UPGRADED,
        NotificationMessageTypeEnum::NEW_RECOMMENDATION,
    ];
    $request->requestBody->config->filters->severities = [
        InsightSeverityEnum::HIGH,
        InsightSeverityEnum::MEDIUM,
        InsightSeverityEnum::HIGH,
    ];
    $request->requestBody->config->sns = new SnsChannelConfig();
    $request->requestBody->config->sns->topicArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->addNotificationChannel($request);

    if ($response->addNotificationChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->