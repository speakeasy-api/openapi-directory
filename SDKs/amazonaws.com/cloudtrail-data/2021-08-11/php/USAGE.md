<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAuditEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAuditEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AuditEvent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAuditEventsRequest();
    $request->requestBody = new PutAuditEventsRequestBody();
    $request->requestBody->auditEvents = [
        new AuditEvent(),
        new AuditEvent(),
        new AuditEvent(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->channelArn = 'vel';
    $request->externalId = 'error';

    $response = $sdk->putAuditEvents($request);

    if ($response->putAuditEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->