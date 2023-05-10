<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompareFacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompareFacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\QualityFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Operations\CompareFacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompareFacesRequest();
    $request->compareFacesRequest = new CompareFacesRequest();
    $request->compareFacesRequest->qualityFilter = QualityFilterEnum::LOW;
    $request->compareFacesRequest->similarityThreshold = 5928.45;
    $request->compareFacesRequest->sourceImage = new Image();
    $request->compareFacesRequest->sourceImage->bytes = 'distinctio';
    $request->compareFacesRequest->sourceImage->s3Object = new S3Object();
    $request->compareFacesRequest->sourceImage->s3Object->bucket = 'quibusdam';
    $request->compareFacesRequest->sourceImage->s3Object->name = 'Ismael Little';
    $request->compareFacesRequest->sourceImage->s3Object->version = 'error';
    $request->compareFacesRequest->targetImage = new Image();
    $request->compareFacesRequest->targetImage->bytes = 'deserunt';
    $request->compareFacesRequest->targetImage->s3Object = new S3Object();
    $request->compareFacesRequest->targetImage->s3Object->bucket = 'suscipit';
    $request->compareFacesRequest->targetImage->s3Object->name = 'Dr. Valerie Toy';
    $request->compareFacesRequest->targetImage->s3Object->version = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = CompareFacesXAmzTargetEnum::REKOGNITION_SERVICE_COMPARE_FACES;

    $response = $sdk->compareFaces($request);

    if ($response->compareFacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->