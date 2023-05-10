# series

### Available Operations

* [getSeries](#getseries) - Get a list of series
* [getSeriesId](#getseriesid) - Get a specific series

## getSeries

When retrieving a list of series, the result is automatically filtered depending on the
privileges the used credential holds. All credentials will have access to active series
with a public page enabled (on ART19). Utilizing a filter to limit the result to series
associated with your account is recommended.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSeriesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSeriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSeriesRequest();
    $request->adRepAccountId = 'c4310661-e963-449e-9cf9-e06e3a437000';
    $request->ids = [
        'e6b6bc9b-8f75-49ea-855a-9741d3113529',
        '65bb8a72-0261-4143-9e13-9dbc2259b1ab',
        'da8c070e-1084-4cb0-a72d-1ad879eeb966',
    ];
    $request->networkId = '5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5';
    $request->pageNumber = 106255;
    $request->pageSize = 600213;
    $request->q = 'molestiae';
    $request->sort = [
        GetSeriesSortEnum::SORT_TITLE,
        GetSeriesSortEnum::CREATED_AT,
        GetSeriesSortEnum::EPISODE_RELEASED_AT,
        GetSeriesSortEnum::EPISODE_RELEASED_AT,
    ];

    $requestSecurity = new GetSeriesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->series->getSeries($request, $requestSecurity);

    if ($response->getSeries200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSeriesId

Get a specific series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSeriesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSeriesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSeriesIdRequest();
    $request->id = '3da7ce52-b895-4c53-bc64-54efb0b34896';

    $requestSecurity = new GetSeriesIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->series->getSeriesId($request, $requestSecurity);

    if ($response->getSeriesId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
