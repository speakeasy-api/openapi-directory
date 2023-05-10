<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociationEdgeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddAssociationRequest();
    $request->addAssociationRequest = new AddAssociationRequest();
    $request->addAssociationRequest->associationType = AssociationEdgeTypeEnum::DERIVED_FROM;
    $request->addAssociationRequest->destinationArn = 'provident';
    $request->addAssociationRequest->sourceArn = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AddAssociationXAmzTargetEnum::SAGE_MAKER_ADD_ASSOCIATION;

    $response = $sdk->addAssociation($request);

    if ($response->addAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->