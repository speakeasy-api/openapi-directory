# typeTypePointGeomagIaga2002

## Overview

Search API for 'IAGA 2002 Geomagnetism Data' entry type

### Available Operations

* [searchTypePointGeomagIaga2002](#searchtypepointgeomagiaga2002) - Search API for 'IAGA 2002 Geomagnetism Data' entry type

## searchTypePointGeomagIaga2002

API to search for entries of type IAGA 2002 Geomagnetism Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointGeomagIaga2002Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointGeomagIaga2002Request();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-27T21:37:33.522Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T22:48:27.858Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T02:08:07.981Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-25T19:30:06.702Z');
    $request->description = 'expedita';
    $request->filesuffix = 'libero';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-31T05:07:12.669Z');
    $request->group = 'dolores';
    $request->max = 281416;
    $request->maxlatitude = 4724.44;
    $request->maxlongitude = 6906.54;
    $request->minlatitude = 4559.58;
    $request->minlongitude = 4006.57;
    $request->name = 'Marcus VonRueden';
    $request->searchTypePointGeomagIaga2002DataInterval = 'exercitationem';
    $request->searchTypePointGeomagIaga2002DataType = 'voluptatem';
    $request->searchTypePointGeomagIaga2002DigitalSampling = 'beatae';
    $request->searchTypePointGeomagIaga2002IagaCode = 'qui';
    $request->searchTypePointGeomagIaga2002SourceOfData = 'laboriosam';
    $request->searchTypePointGeomagIaga2002StationName = 'temporibus';
    $request->skip = 447678;
    $request->text = 'veritatis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-28T19:32:23.296Z');

    $response = $sdk->typeTypePointGeomagIaga2002->searchTypePointGeomagIaga2002($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
