<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGameRequest();
    $request->requestBody = new CreateGameRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->description = 'provident';
    $request->requestBody->gameName = 'distinctio';
    $request->requestBody->tags = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->createGame($request);

    if ($response->createGameResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->