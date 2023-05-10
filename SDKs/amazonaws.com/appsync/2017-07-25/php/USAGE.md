<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApiRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApiRequest();
    $request->requestBody = new AssociateApiRequestBody();
    $request->requestBody->apiId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->domainName = 'vel';

    $response = $sdk->associateApi($request);

    if ($response->associateApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->