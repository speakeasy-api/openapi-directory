<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApplyArchiveRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApplyArchiveRuleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplyArchiveRuleRequest();
    $request->requestBody = new ApplyArchiveRuleRequestBody();
    $request->requestBody->analyzerArn = 'corrupti';
    $request->requestBody->clientToken = 'provident';
    $request->requestBody->ruleName = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->applyArchiveRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->