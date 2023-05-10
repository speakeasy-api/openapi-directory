<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequestBodyDetailTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationRuleRequest();
    $request->requestBody = new CreateNotificationRuleRequestBody();
    $request->requestBody->clientRequestToken = 'corrupti';
    $request->requestBody->detailType = CreateNotificationRuleRequestBodyDetailTypeEnum::FULL;
    $request->requestBody->eventTypeIds = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->requestBody->name = 'corrupti';
    $request->requestBody->resource = 'illum';
    $request->requestBody->status = CreateNotificationRuleRequestBodyStatusEnum::ENABLED;
    $request->requestBody->tags = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->requestBody->targets = [
        new Target(),
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->createNotificationRule($request);

    if ($response->createNotificationRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->