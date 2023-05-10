<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\MetricAttribution;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventsRequest();
    $request->requestBody = new PutEventsRequestBody();
    $request->requestBody->eventList = [
        new Event(),
        new Event(),
        new Event(),
    ];
    $request->requestBody->sessionId = 'provident';
    $request->requestBody->trackingId = 'distinctio';
    $request->requestBody->userId = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->putEvents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->