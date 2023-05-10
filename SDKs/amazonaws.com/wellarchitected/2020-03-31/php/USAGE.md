<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLensesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateLensesRequest();
    $request->requestBody = new AssociateLensesRequestBody();
    $request->requestBody->lensAliases = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->workloadId = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->associateLenses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->