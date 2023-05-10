<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectDominantLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectDominantLanguageRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectDominantLanguageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectDominantLanguageRequest();
    $request->batchDetectDominantLanguageRequest = new BatchDetectDominantLanguageRequest();
    $request->batchDetectDominantLanguageRequest->textList = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = BatchDetectDominantLanguageXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_DOMINANT_LANGUAGE;

    $response = $sdk->batchDetectDominantLanguage($request);

    if ($response->batchDetectDominantLanguageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->