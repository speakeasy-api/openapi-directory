<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDataSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateDataSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDataSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateDataSetRequest();
    $request->generateDataSetRequest = new GenerateDataSetRequest();
    $request->generateDataSetRequest->customerDefinedValues = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->generateDataSetRequest->dataSetPublicationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T02:21:06.409Z');
    $request->generateDataSetRequest->dataSetType = DataSetTypeEnum::DISBURSED_AMOUNT_BY_CUSTOMER_GEO;
    $request->generateDataSetRequest->destinationS3BucketName = 'deserunt';
    $request->generateDataSetRequest->destinationS3Prefix = 'suscipit';
    $request->generateDataSetRequest->roleNameArn = 'iure';
    $request->generateDataSetRequest->snsTopicArn = 'magnam';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = GenerateDataSetXAmzTargetEnum::MARKETPLACE_COMMERCE_ANALYTICS20150701_GENERATE_DATA_SET;

    $response = $sdk->generateDataSet($request);

    if ($response->generateDataSetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->