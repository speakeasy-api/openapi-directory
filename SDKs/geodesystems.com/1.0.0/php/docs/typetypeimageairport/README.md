# typeTypeImageAirport

## Overview

Search API for 'Airport Image' entry type

### Available Operations

* [searchTypeImageAirport](#searchtypeimageairport) - Search API for 'Airport Image' entry type

## searchTypeImageAirport

API to search for entries of type Airport Image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeImageAirportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeImageAirportRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-04T17:35:50.016Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-10T01:01:28.057Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-03T23:45:27.582Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T04:54:36.719Z');
    $request->description = 'voluptate';
    $request->filesuffix = 'tempore';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T01:18:24.315Z');
    $request->group = 'mollitia';
    $request->max = 58176;
    $request->maxlatitude = 5502.16;
    $request->maxlongitude = 7748.04;
    $request->minlatitude = 3538.06;
    $request->minlongitude = 4475.03;
    $request->name = 'Alfonso Keeling';
    $request->skip = 539502;
    $request->text = 'similique';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T19:21:08.744Z');

    $response = $sdk->typeTypeImageAirport->searchTypeImageAirport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
