<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivateEventSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateEventSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateEventSourceRequest();
    $request->activateEventSourceRequest = new ActivateEventSourceRequest();
    $request->activateEventSourceRequest->name = 'Terrence Rau';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = ActivateEventSourceXAmzTargetEnum::AWS_EVENTS_ACTIVATE_EVENT_SOURCE;

    $response = $sdk->activateEventSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->