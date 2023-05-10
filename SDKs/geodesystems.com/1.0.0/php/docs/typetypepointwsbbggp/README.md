# typeTypePointWsbbGgp

## Overview

Search API for 'Global Geodynamics GGP Format' entry type

### Available Operations

* [searchTypePointWsbbGgp](#searchtypepointwsbbggp) - Search API for 'Global Geodynamics GGP Format' entry type

## searchTypePointWsbbGgp

API to search for entries of type Global Geodynamics GGP Format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointWsbbGgpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointWsbbGgpRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T02:36:50.647Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-15T01:27:01.127Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-30T09:06:30.305Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T21:45:29.582Z');
    $request->description = 'molestiae';
    $request->filesuffix = 'facilis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-10T03:35:29.040Z');
    $request->group = 'itaque';
    $request->max = 586366;
    $request->maxlatitude = 92.47;
    $request->maxlongitude = 6893.66;
    $request->minlatitude = 7524.92;
    $request->minlongitude = 2563.25;
    $request->name = 'Mona Wyman';
    $request->searchTypePointWsbbGgpAuthor = 'blanditiis';
    $request->searchTypePointWsbbGgpInstrument = 'voluptatibus';
    $request->searchTypePointWsbbGgpStation = 'nulla';
    $request->skip = 367747;
    $request->text = 'ratione';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T23:27:12.449Z');

    $response = $sdk->typeTypePointWsbbGgp->searchTypePointWsbbGgp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
