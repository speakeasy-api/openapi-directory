<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchPrettyEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchQParserEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->cursor = 'illum';
    $request->expr = 'vel';
    $request->facet = 'error';
    $request->format = SearchFormatEnum::SDK;
    $request->fq = 'deserunt';
    $request->highlight = 'suscipit';
    $request->partial = false;
    $request->pretty = SearchPrettyEnum::TRUE;
    $request->q = 'iure';
    $request->qOptions = 'magnam';
    $request->qParser = SearchQParserEnum::DISMAX;
    $request->return = 'ipsa';
    $request->size = 963663;
    $request->sort = 'tempora';
    $request->start = 383441;
    $request->stats = 'molestiae';

    $response = $sdk->search($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->