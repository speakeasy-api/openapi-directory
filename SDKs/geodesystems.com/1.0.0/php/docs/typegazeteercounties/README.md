# typeGazeteerCounties

## Overview

Search API for 'Census Gazeteer Counties' entry type

### Available Operations

* [searchGazeteerCounties](#searchgazeteercounties) - Search API for 'Census Gazeteer Counties' entry type

## searchGazeteerCounties

API to search for entries of type Census Gazeteer Counties

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGazeteerCountiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGazeteerCountiesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-20T07:57:05.780Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T22:14:17.851Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-06T10:40:03.787Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T16:25:58.578Z');
    $request->description = 'adipisci';
    $request->filesuffix = 'saepe';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T15:58:04.315Z');
    $request->group = 'quis';
    $request->max = 333072;
    $request->maxlatitude = 7274.81;
    $request->maxlongitude = 997.33;
    $request->minlatitude = 5845.93;
    $request->minlongitude = 4755.89;
    $request->name = 'Rufus Friesen';
    $request->searchDbGazeteerCountiesAreaLand = 1509.35;
    $request->searchDbGazeteerCountiesAreaWater = 9930.02;
    $request->searchDbGazeteerCountiesCountyFips = 'veniam';
    $request->searchDbGazeteerCountiesCountyName = 'consequuntur';
    $request->searchDbGazeteerCountiesFullCountyFips = 'facere';
    $request->searchDbGazeteerCountiesLocation = 'laudantium';
    $request->searchDbGazeteerCountiesStateAbbreviation = 'odit';
    $request->searchDbGazeteerCountiesStateFips = 'pariatur';
    $request->skip = 227362;
    $request->text = 'exercitationem';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T10:29:48.523Z');

    $response = $sdk->typeGazeteerCounties->searchGazeteerCounties($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
