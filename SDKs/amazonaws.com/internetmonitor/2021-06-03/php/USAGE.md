<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMonitorRequestBodyInternetMeasurementsLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\S3Config;
use \OpenAPI\OpenAPI\Models\Shared\LogDeliveryStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMonitorRequest();
    $request->requestBody = new CreateMonitorRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->internetMeasurementsLogDelivery = new CreateMonitorRequestBodyInternetMeasurementsLogDelivery();
    $request->requestBody->internetMeasurementsLogDelivery->s3Config = new S3Config();
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->bucketName = 'provident';
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->bucketPrefix = 'distinctio';
    $request->requestBody->internetMeasurementsLogDelivery->s3Config->logDeliveryStatus = LogDeliveryStatusEnum::DISABLED;
    $request->requestBody->maxCityNetworksToMonitor = 602763;
    $request->requestBody->monitorName = 'nulla';
    $request->requestBody->resources = [
        'illum',
        'vel',
        'error',
    ];
    $request->requestBody->tags = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->requestBody->trafficPercentageToMonitor = 272656;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->createMonitor($request);

    if ($response->createMonitorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->