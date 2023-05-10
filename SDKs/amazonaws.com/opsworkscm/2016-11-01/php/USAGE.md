<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateNodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateNodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\EngineAttribute;
use \OpenAPI\OpenAPI\Models\Operations\AssociateNodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateNodeRequest();
    $request->associateNodeRequest = new AssociateNodeRequest();
    $request->associateNodeRequest->engineAttributes = [
        new EngineAttribute(),
        new EngineAttribute(),
        new EngineAttribute(),
    ];
    $request->associateNodeRequest->nodeName = 'provident';
    $request->associateNodeRequest->serverName = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateNodeXAmzTargetEnum::OPS_WORKS_CMV20161101_ASSOCIATE_NODE;

    $response = $sdk->associateNode($request);

    if ($response->associateNodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->