<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\FHIRVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreloadDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\PreloadDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KmsEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\CmkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFHIRDatastoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFHIRDatastoreRequest();
    $request->createFHIRDatastoreRequest = new CreateFHIRDatastoreRequest();
    $request->createFHIRDatastoreRequest->clientToken = 'corrupti';
    $request->createFHIRDatastoreRequest->datastoreName = 'provident';
    $request->createFHIRDatastoreRequest->datastoreTypeVersion = FHIRVersionEnum::R4;
    $request->createFHIRDatastoreRequest->preloadDataConfig = new PreloadDataConfig();
    $request->createFHIRDatastoreRequest->preloadDataConfig->preloadDataType = PreloadDataTypeEnum::SYNTHEA;
    $request->createFHIRDatastoreRequest->sseConfiguration = new SseConfiguration();
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig = new KmsEncryptionConfig();
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig->cmkType = CmkTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig->kmsKeyId = 'quibusdam';
    $request->createFHIRDatastoreRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = CreateFHIRDatastoreXAmzTargetEnum::HEALTH_LAKE_CREATE_FHIR_DATASTORE;

    $response = $sdk->createFHIRDatastore($request);

    if ($response->createFHIRDatastoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->