<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateParallelDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParallelDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\ParallelDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateParallelDataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParallelDataRequest();
    $request->createParallelDataRequest = new CreateParallelDataRequest();
    $request->createParallelDataRequest->clientToken = 'corrupti';
    $request->createParallelDataRequest->description = 'provident';
    $request->createParallelDataRequest->encryptionKey = new EncryptionKey();
    $request->createParallelDataRequest->encryptionKey->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';
    $request->createParallelDataRequest->encryptionKey->type = EncryptionKeyTypeEnum::KMS;
    $request->createParallelDataRequest->name = 'Estelle Will';
    $request->createParallelDataRequest->parallelDataConfig = new ParallelDataConfig();
    $request->createParallelDataRequest->parallelDataConfig->format = ParallelDataFormatEnum::TMX;
    $request->createParallelDataRequest->parallelDataConfig->s3Uri = 'at';
    $request->createParallelDataRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateParallelDataXAmzTargetEnum::AWS_SHINE_FRONTEND_SERVICE20170701_CREATE_PARALLEL_DATA;

    $response = $sdk->createParallelData($request);

    if ($response->createParallelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->