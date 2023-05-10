<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateChatTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChatTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ChatTokenCapabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChatTokenRequest();
    $request->requestBody = new CreateChatTokenRequestBody();
    $request->requestBody->attributes = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->requestBody->capabilities = [
        ChatTokenCapabilityEnum::DISCONNECT_USER,
        ChatTokenCapabilityEnum::DISCONNECT_USER,
        ChatTokenCapabilityEnum::DISCONNECT_USER,
        ChatTokenCapabilityEnum::DISCONNECT_USER,
    ];
    $request->requestBody->roomIdentifier = 'iure';
    $request->requestBody->sessionDurationInMinutes = 297534;
    $request->requestBody->userId = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->createChatToken($request);

    if ($response->createChatTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->