<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorOfferingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAcceleratorOfferingsRequest();
    $request->requestBody = new DescribeAcceleratorOfferingsRequestBody();
    $request->requestBody->acceleratorTypes = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->locationType = DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum::AVAILABILITY_ZONE;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->describeAcceleratorOfferings($request);

    if ($response->describeAcceleratorOfferingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->