<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubjectErasureByPspReferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRequestSubjectErasureSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubjectErasureByPspReferenceRequest();
    $request->forceErasure = false;
    $request->merchantAccount = 'corrupti';
    $request->pspReference = 'provident';

    $requestSecurity = new PostRequestSubjectErasureSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postRequestSubjectErasure($request, $requestSecurity);

    if ($response->subjectErasureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->