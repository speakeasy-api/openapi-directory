<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIceServerConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIceServerConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetIceServerConfigRequestBodyServiceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIceServerConfigRequest();
    $request->requestBody = new GetIceServerConfigRequestBody();
    $request->requestBody->channelARN = 'corrupti';
    $request->requestBody->clientId = 'provident';
    $request->requestBody->service = GetIceServerConfigRequestBodyServiceEnum::TURN;
    $request->requestBody->username = 'Micheal_Sporer';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->getIceServerConfig($request);

    if ($response->getIceServerConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->