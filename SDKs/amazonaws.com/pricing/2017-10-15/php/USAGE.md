<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServicesRequest();
    $request->describeServicesRequest = new DescribeServicesRequest();
    $request->describeServicesRequest->formatVersion = 'corrupti';
    $request->describeServicesRequest->maxResults = 592845;
    $request->describeServicesRequest->nextToken = 'distinctio';
    $request->describeServicesRequest->serviceCode = 'quibusdam';
    $request->maxResults = 'unde';
    $request->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribeServicesXAmzTargetEnum::AWS_PRICE_LIST_SERVICE_DESCRIBE_SERVICES;

    $response = $sdk->describeServices($request);

    if ($response->describeServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->