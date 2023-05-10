<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntityToThingRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateEntityToThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntityToThingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateEntityToThingRequest();
    $request->associateEntityToThingRequest = new AssociateEntityToThingRequest();
    $request->associateEntityToThingRequest->entityId = 'corrupti';
    $request->associateEntityToThingRequest->namespaceVersion = 592845;
    $request->associateEntityToThingRequest->thingName = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateEntityToThingXAmzTargetEnum::IOT_THINGS_GRAPH_FRONT_END_SERVICE_ASSOCIATE_ENTITY_TO_THING;

    $response = $sdk->associateEntityToThing($request);

    if ($response->associateEntityToThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->