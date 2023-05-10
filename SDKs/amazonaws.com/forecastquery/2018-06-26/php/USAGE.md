<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryForecastRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryForecastRequest();
    $request->queryForecastRequest = new QueryForecastRequest();
    $request->queryForecastRequest->endDate = 'corrupti';
    $request->queryForecastRequest->filters = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->queryForecastRequest->forecastArn = 'vel';
    $request->queryForecastRequest->nextToken = 'error';
    $request->queryForecastRequest->startDate = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = QueryForecastXAmzTargetEnum::AMAZON_FORECAST_RUNTIME_QUERY_FORECAST;

    $response = $sdk->queryForecast($request);

    if ($response->queryForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->