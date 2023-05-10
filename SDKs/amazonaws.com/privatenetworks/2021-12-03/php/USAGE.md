<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeOrderReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeOrderReceiptRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcknowledgeOrderReceiptRequest();
    $request->requestBody = new AcknowledgeOrderReceiptRequestBody();
    $request->requestBody->orderArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->acknowledgeOrderReceipt($request);

    if ($response->acknowledgeOrderReceiptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->