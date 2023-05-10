<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptReservedNodeExchangeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptReservedNodeExchangeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAcceptReservedNodeExchangeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAcceptReservedNodeExchangeRequest();
    $request->action = GETAcceptReservedNodeExchangeActionEnum::ACCEPT_RESERVED_NODE_EXCHANGE;
    $request->reservedNodeId = 'corrupti';
    $request->targetReservedNodeOfferingId = 'provident';
    $request->version = GETAcceptReservedNodeExchangeVersionEnum::TWO_THOUSAND_AND_TWELVE1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getAcceptReservedNodeExchange($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->