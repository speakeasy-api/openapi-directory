<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDimensionKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDimensionKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DimensionGroup;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDimensionKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDimensionKeysRequest();
    $request->describeDimensionKeysRequest = new DescribeDimensionKeysRequest();
    $request->describeDimensionKeysRequest->additionalMetrics = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->describeDimensionKeysRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->describeDimensionKeysRequest->filter = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->describeDimensionKeysRequest->groupBy = new DimensionGroup();
    $request->describeDimensionKeysRequest->groupBy->dimensions = [
        'debitis',
        'ipsa',
    ];
    $request->describeDimensionKeysRequest->groupBy->group = 'delectus';
    $request->describeDimensionKeysRequest->groupBy->limit = 272656;
    $request->describeDimensionKeysRequest->identifier = 'suscipit';
    $request->describeDimensionKeysRequest->maxResults = 477665;
    $request->describeDimensionKeysRequest->metric = 'minus';
    $request->describeDimensionKeysRequest->nextToken = 'placeat';
    $request->describeDimensionKeysRequest->partitionBy = new DimensionGroup();
    $request->describeDimensionKeysRequest->partitionBy->dimensions = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->describeDimensionKeysRequest->partitionBy->group = 'recusandae';
    $request->describeDimensionKeysRequest->partitionBy->limit = 836079;
    $request->describeDimensionKeysRequest->periodInSeconds = 71036;
    $request->describeDimensionKeysRequest->serviceType = ServiceTypeEnum::RDS;
    $request->describeDimensionKeysRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T10:00:51.349Z');
    $request->maxResults = 'perferendis';
    $request->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeDimensionKeysXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS;

    $response = $sdk->describeDimensionKeys($request);

    if ($response->describeDimensionKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->