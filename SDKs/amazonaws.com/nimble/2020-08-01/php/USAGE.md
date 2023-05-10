<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEulasRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEulasRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptEulasRequest();
    $request->requestBody = new AcceptEulasRequestBody();
    $request->requestBody->eulaIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzClientToken = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->studioId = 'iure';

    $response = $sdk->acceptEulas($request);

    if ($response->acceptEulasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->