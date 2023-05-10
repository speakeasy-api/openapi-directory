<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSavingsPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSavingsPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSavingsPlanRequest();
    $request->requestBody = new CreateSavingsPlanRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->commitment = 'provident';
    $request->requestBody->purchaseTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->requestBody->savingsPlanOfferingId = 'unde';
    $request->requestBody->tags = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->requestBody->upfrontPaymentAmount = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->createSavingsPlan($request);

    if ($response->createSavingsPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->