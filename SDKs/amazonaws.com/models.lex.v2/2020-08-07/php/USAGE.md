<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateCustomVocabularyItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateCustomVocabularyItemRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\NewCustomVocabularyItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreateCustomVocabularyItemRequest();
    $request->requestBody = new BatchCreateCustomVocabularyItemRequestBody();
    $request->requestBody->customVocabularyItemList = [
        new NewCustomVocabularyItem(),
        new NewCustomVocabularyItem(),
        new NewCustomVocabularyItem(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->botId = 'vel';
    $request->botVersion = 'error';
    $request->localeId = 'deserunt';

    $response = $sdk->batchCreateCustomVocabularyItem($request);

    if ($response->batchCreateCustomVocabularyItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->