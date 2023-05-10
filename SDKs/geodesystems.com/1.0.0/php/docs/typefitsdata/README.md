# typeFitsData

## Overview

Search API for 'FITS Data File' entry type

### Available Operations

* [searchFitsData](#searchfitsdata) - Search API for 'FITS Data File' entry type

## searchFitsData

API to search for entries of type FITS Data File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFitsDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFitsDataRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T00:25:03.486Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T09:21:47.394Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-29T20:56:45.429Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T14:30:04.979Z');
    $request->description = 'est';
    $request->filesuffix = 'facere';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T14:32:05.606Z');
    $request->group = 'provident';
    $request->max = 882284;
    $request->maxlatitude = 8964.8;
    $request->maxlongitude = 7332.89;
    $request->minlatitude = 5750.78;
    $request->minlongitude = 4097.26;
    $request->name = 'Brittany Prosacco';
    $request->searchFitsDataInstrument = 'officiis';
    $request->searchFitsDataOrigin = 'voluptatibus';
    $request->searchFitsDataTelescope = 'cum';
    $request->skip = 872303;
    $request->text = 'alias';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T15:10:37.825Z');

    $response = $sdk->typeFitsData->searchFitsData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
