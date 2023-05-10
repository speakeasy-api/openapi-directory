<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntitiesToExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateEntitiesToExperienceRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateEntitiesToExperienceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateEntitiesToExperienceRequest();
    $request->associateEntitiesToExperienceRequest = new AssociateEntitiesToExperienceRequest();
    $request->associateEntitiesToExperienceRequest->entityList = [
        new EntityConfiguration(),
        new EntityConfiguration(),
        new EntityConfiguration(),
    ];
    $request->associateEntitiesToExperienceRequest->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->associateEntitiesToExperienceRequest->indexId = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = AssociateEntitiesToExperienceXAmzTargetEnum::AWS_KENDRA_FRONTEND_SERVICE_ASSOCIATE_ENTITIES_TO_EXPERIENCE;

    $response = $sdk->associateEntitiesToExperience($request);

    if ($response->associateEntitiesToExperienceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->