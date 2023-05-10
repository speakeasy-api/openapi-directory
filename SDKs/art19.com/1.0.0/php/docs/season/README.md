# season

### Available Operations

* [getSeasons](#getseasons) - Get a list of seasons
* [getSeasonsId](#getseasonsid) - Get a specific season

## getSeasons

When retrieving a list of seasons, the result is automatically filtered depending on the
privileges the used credential holds. If there are no specific privileges to a series or network,
only active seasons for active series are included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSeasonsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSeasonsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSeasonsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSeasonsRequest();
    $request->ids = [
        'e1ade008-e6f8-4c5f-b50d-8cdb5a341814',
        '30104218-13d5-4208-ace7-e253b668451c',
        '6c6e205e-16de-4ab3-bec9-578a64584273',
        'a8418d16-2309-4fb0-9299-21aefb9f58c4',
    ];
    $request->pageNumber = 836364;
    $request->pageSize = 549501;
    $request->q = 'commodi';
    $request->seriesId = 'e68e4be0-5601-43f5-9da7-57a59ecfef66';
    $request->sort = [
        GetSeasonsSortEnum::UPDATED_AT,
        GetSeasonsSortEnum::CREATED_AT,
        GetSeasonsSortEnum::UPDATED_AT,
        GetSeasonsSortEnum::TITLE,
    ];

    $requestSecurity = new GetSeasonsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->season->getSeasons($request, $requestSecurity);

    if ($response->getSeasons200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSeasonsId

Get a specific season

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSeasonsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSeasonsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSeasonsIdRequest();
    $request->id = 'a3383c2b-eb47-4737-bc8d-72f64d1db1f2';

    $requestSecurity = new GetSeasonsIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->season->getSeasonsId($request, $requestSecurity);

    if ($response->getSeasonsId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
