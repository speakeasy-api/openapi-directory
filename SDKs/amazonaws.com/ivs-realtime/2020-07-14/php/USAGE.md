<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantTokenCapabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParticipantTokenRequest();
    $request->requestBody = new CreateParticipantTokenRequestBody();
    $request->requestBody->attributes = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->requestBody->capabilities = [
        ParticipantTokenCapabilityEnum::PUBLISH,
        ParticipantTokenCapabilityEnum::SUBSCRIBE,
        ParticipantTokenCapabilityEnum::SUBSCRIBE,
        ParticipantTokenCapabilityEnum::PUBLISH,
    ];
    $request->requestBody->duration = 437587;
    $request->requestBody->stageArn = 'magnam';
    $request->requestBody->userId = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->createParticipantToken($request);

    if ($response->createParticipantTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->