# classification

### Available Operations

* [getClassifications](#getclassifications) - Get a list of classifications
* [getClassificationsId](#getclassificationsid) - Get a specific classification

## getClassifications

Get a list of classifications

### Example Usage

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
        'aff1a3a2-fa94-4677-b925-1aa52c3f5ad0',
        '19da1ffe-78f0-497b-8074-f15471b5e6e1',
    ];
    $request->isCountry = 'ipsum';
    $request->pageNumber = 692472;
    $request->pageSize = 565189;
    $request->q = 'excepturi';
    $request->sort = [
        GetClassificationsSortEnum::CREATED_AT,
        GetClassificationsSortEnum::UPDATED_AT,
        GetClassificationsSortEnum::UPDATED_AT,
        GetClassificationsSortEnum::VALUE,
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

## getClassificationsId

Get a specific classification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsIdRequest();
    $request->id = 'e91e450a-d2ab-4d44-a698-02d502a94bb4';

    $requestSecurity = new GetClassificationsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->classification->getClassificationsId($request, $requestSecurity);

    if ($response->getClassificationsId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
