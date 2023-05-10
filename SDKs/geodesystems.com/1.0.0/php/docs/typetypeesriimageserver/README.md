# typeTypeEsriImageserver

## Overview

Search API for 'ESRI Image Server' entry type

### Available Operations

* [searchTypeEsriImageserver](#searchtypeesriimageserver) - Search API for 'ESRI Image Server' entry type

## searchTypeEsriImageserver

API to search for entries of type ESRI Image Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriImageserverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriImageserverRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-20T19:12:46.314Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T07:03:16.483Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T15:00:49.838Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-02T21:57:03.450Z');
    $request->description = 'repudiandae';
    $request->filesuffix = 'tempora';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-29T04:11:17.016Z');
    $request->group = 'illum';
    $request->max = 478576;
    $request->maxlatitude = 4010.83;
    $request->maxlongitude = 5751.11;
    $request->minlatitude = 4001.45;
    $request->minlongitude = 9961.01;
    $request->name = 'Glenn Rosenbaum';
    $request->skip = 262891;
    $request->text = 'dignissimos';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T22:39:52.866Z');

    $response = $sdk->typeTypeEsriImageserver->searchTypeEsriImageserver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
