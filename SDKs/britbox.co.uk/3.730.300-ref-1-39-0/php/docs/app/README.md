# app

### Available Operations

* [getAppConfig](#getappconfig) - Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.

* [getItvPage](#getitvpage) - Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.

* [getPage](#getpage) - Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


## getAppConfig

Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAppConfigIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppConfigRequest();
    $request->device = 'accusamus';
    $request->ff = [
        FeatureFlagsEnum::LDP,
    ];
    $request->include = [
        GetAppConfigIncludeEnum::DISPLAY,
    ];
    $request->lang = 'laborum';
    $request->segments = [
        'velit',
        'eum',
        'autem',
        'nobis',
    ];
    $request->sub = 'quas';
    $request->system = 'assumenda';

    $response = $sdk->app->getAppConfig($request);

    if ($response->appConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItvPage

Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItvPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItvPageItemDetailExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItvPageItemDetailSelectSeasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItvPageTextEntryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItvPageRequest();
    $request->device = 'nulla';
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::ALL,
    ];
    $request->itemDetailExpand = GetItvPageItemDetailExpandEnum::ALL;
    $request->itemDetailSelectSeason = GetItvPageItemDetailSelectSeasonEnum::FIRST;
    $request->lang = 'explicabo';
    $request->listPageSize = 591935;
    $request->listPageSizeLarge = 55374;
    $request->maxListPrefetch = 476477;
    $request->maxRating = 'magnam';
    $request->path = 'odio';
    $request->segments = [
        'esse',
        'esse',
    ];
    $request->sub = 'rem';
    $request->textEntryFormat = GetItvPageTextEntryFormatEnum::HTML;

    $response = $sdk->app->getItvPage($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPage

Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPageItemDetailExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPageItemDetailSelectSeasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPageTextEntryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPageRequest();
    $request->device = 'reprehenderit';
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::HB,
    ];
    $request->itemDetailExpand = GetPageItemDetailExpandEnum::CHILDREN;
    $request->itemDetailSelectSeason = GetPageItemDetailSelectSeasonEnum::LATEST;
    $request->lang = 'eos';
    $request->listPageSize = 509342;
    $request->listPageSizeLarge = 788546;
    $request->maxListPrefetch = 86377;
    $request->maxRating = 'ipsa';
    $request->path = 'id';
    $request->segments = [
        'neque',
        'quo',
        'illum',
    ];
    $request->sub = 'quo';
    $request->textEntryFormat = GetPageTextEntryFormatEnum::HTML;

    $response = $sdk->app->getPage($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
