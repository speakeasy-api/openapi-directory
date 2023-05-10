<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateCreatedArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatedArtifact;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCreatedArtifactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateCreatedArtifactRequest();
    $request->associateCreatedArtifactRequest = new AssociateCreatedArtifactRequest();
    $request->associateCreatedArtifactRequest->createdArtifact = new CreatedArtifact();
    $request->associateCreatedArtifactRequest->createdArtifact->description = 'corrupti';
    $request->associateCreatedArtifactRequest->createdArtifact->name = 'Kelvin Sporer';
    $request->associateCreatedArtifactRequest->dryRun = false;
    $request->associateCreatedArtifactRequest->migrationTaskName = 'corrupti';
    $request->associateCreatedArtifactRequest->progressUpdateStream = 'illum';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = AssociateCreatedArtifactXAmzTargetEnum::AWS_MIGRATION_HUB_ASSOCIATE_CREATED_ARTIFACT;

    $response = $sdk->associateCreatedArtifact($request);

    if ($response->associateCreatedArtifactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->