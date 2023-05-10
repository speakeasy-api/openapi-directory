<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsRequest();
    $request->ids = [
        '9bd9d8d6-9a67-44e0-b467-cc8796ed151a',
        '05dfc2dd-f7cc-478c-a1ba-928fc816742c',
        'b7392059-2939-46fe-a759-6eb10faaa235',
    ];
    $request->isCountry = 'explicabo';
    $request->pageNumber = 750686;
    $request->pageSize = 315428;
    $request->q = 'omnis';
    $request->sort = [
        GetClassificationsSortEnum::CREATED_AT,
        GetClassificationsSortEnum::UPDATED_AT,
    ];
    $request->type = GetClassificationsTypeEnum::ALTERNATE_FEED_TYPE;

    $requestSecurity = new GetClassificationsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->classification->getClassifications($request, $requestSecurity);

    if ($response->getClassifications200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->