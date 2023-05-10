# typeTypePointNoaaMadis

## Overview

Search API for 'NOAA MADIS Point Data' entry type

### Available Operations

* [searchTypePointNoaaMadis](#searchtypepointnoaamadis) - Search API for 'NOAA MADIS Point Data' entry type

## searchTypePointNoaaMadis

API to search for entries of type NOAA MADIS Point Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNoaaMadisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNoaaMadisRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-22T03:52:56.707Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T16:48:27.758Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-10T14:51:37.902Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-10T10:49:51.101Z');
    $request->description = 'laborum';
    $request->filesuffix = 'in';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T03:19:03.911Z');
    $request->group = 'repellendus';
    $request->max = 504646;
    $request->maxlatitude = 2848.32;
    $request->maxlongitude = 2590.19;
    $request->minlatitude = 5857.3;
    $request->minlongitude = 3921.8;
    $request->name = 'Garry Schultz';
    $request->skip = 773863;
    $request->text = 'reiciendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-07T07:32:14.075Z');

    $response = $sdk->typeTypePointNoaaMadis->searchTypePointNoaaMadis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
