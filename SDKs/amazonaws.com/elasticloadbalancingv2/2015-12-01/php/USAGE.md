<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteListenerRequest();
    $request->action = GETDeleteListenerActionEnum::DELETE_LISTENER;
    $request->listenerArn = 'corrupti';
    $request->version = GETDeleteListenerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->getDeleteListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->