<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProfileRequest();
    $request->requestBody = new CreateProfileRequestBody();
    $request->requestBody->durationSeconds = 548814;
    $request->requestBody->enabled = false;
    $request->requestBody->managedPolicyArns = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->requestBody->name = 'Johnnie Stamm';
    $request->requestBody->requireInstanceProperties = false;
    $request->requestBody->roleArns = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->requestBody->sessionPolicy = 'debitis';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->createProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->