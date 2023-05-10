# typeGazeteerCensusTracts

## Overview

Search API for 'Census Tracts' entry type

### Available Operations

* [searchGazeteerCensusTracts](#searchgazeteercensustracts) - Search API for 'Census Tracts' entry type

## searchGazeteerCensusTracts

API to search for entries of type Census Tracts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGazeteerCensusTractsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGazeteerCensusTractsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-25T23:28:51.951Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T09:27:30.689Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-06T13:10:02.431Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T11:30:36.362Z');
    $request->description = 'ducimus';
    $request->filesuffix = 'maiores';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T19:05:24.735Z');
    $request->group = 'laboriosam';
    $request->max = 863471;
    $request->maxlatitude = 7294.48;
    $request->maxlongitude = 5665.06;
    $request->minlatitude = 5782.1;
    $request->minlongitude = 3679.17;
    $request->name = 'Bernice Yundt';
    $request->searchDbGazeteerCensusTractsCensusTractId = 'enim';
    $request->searchDbGazeteerCensusTractsCountyFips = 'hic';
    $request->searchDbGazeteerCensusTractsCountyName = 'animi';
    $request->searchDbGazeteerCensusTractsFullCensusTractId = 'quas';
    $request->searchDbGazeteerCensusTractsLandArea = 5173.26;
    $request->searchDbGazeteerCensusTractsLocation = 'molestias';
    $request->searchDbGazeteerCensusTractsState = 'odio';
    $request->searchDbGazeteerCensusTractsStateFips = 'eaque';
    $request->searchDbGazeteerCensusTractsWaterArea = 9011.63;
    $request->skip = 104078;
    $request->text = 'quos';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-07T09:23:04.849Z');

    $response = $sdk->typeGazeteerCensusTracts->searchGazeteerCensusTracts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
