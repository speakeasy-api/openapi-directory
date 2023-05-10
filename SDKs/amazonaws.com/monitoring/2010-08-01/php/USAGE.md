<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAlarmsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAlarmsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAlarmsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAlarmsRequest();
    $request->action = GETDeleteAlarmsActionEnum::DELETE_ALARMS;
    $request->alarmNames = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->version = GETDeleteAlarmsVersionEnum::TWO_THOUSAND_AND_TEN0801;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->getDeleteAlarms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->