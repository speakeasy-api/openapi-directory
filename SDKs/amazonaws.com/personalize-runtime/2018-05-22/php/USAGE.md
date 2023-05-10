<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonalizedRankingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonalizedRankingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonalizedRankingRequest();
    $request->requestBody = new GetPersonalizedRankingRequestBody();
    $request->requestBody->campaignArn = 'corrupti';
    $request->requestBody->context = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->requestBody->filterArn = 'vel';
    $request->requestBody->filterValues = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->requestBody->inputList = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->requestBody->userId = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->getPersonalizedRanking($request);

    if ($response->getPersonalizedRankingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->