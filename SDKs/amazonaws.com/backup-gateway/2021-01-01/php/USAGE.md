<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateGatewayToServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateGatewayToServerInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateGatewayToServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateGatewayToServerRequest();
    $request->associateGatewayToServerInput = new AssociateGatewayToServerInput();
    $request->associateGatewayToServerInput->gatewayArn = 'corrupti';
    $request->associateGatewayToServerInput->serverArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateGatewayToServerXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_ASSOCIATE_GATEWAY_TO_SERVER;

    $response = $sdk->associateGatewayToServer($request);

    if ($response->associateGatewayToServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->