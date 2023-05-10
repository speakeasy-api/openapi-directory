<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\EventPublisherEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNotificationChannelsRequest();
    $request->requestBody = new AddNotificationChannelsRequestBody();
    $request->requestBody->channels = [
        new Channel(),
        new Channel(),
        new Channel(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->profilingGroupName = 'vel';

    $response = $sdk->addNotificationChannels($request);

    if ($response->addNotificationChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->