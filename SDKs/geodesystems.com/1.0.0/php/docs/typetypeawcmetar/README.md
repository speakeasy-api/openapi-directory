# typeTypeAwcMetar

## Overview

Search API for 'AWC Weather Observations' entry type

### Available Operations

* [searchTypeAwcMetar](#searchtypeawcmetar) - Search API for 'AWC Weather Observations' entry type

## searchTypeAwcMetar

API to search for entries of type AWC Weather Observations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeAwcMetarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeAwcMetarRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:13:17.017Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-12T15:02:04.341Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T17:14:37.803Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-12T23:49:14.405Z');
    $request->description = 'at';
    $request->filesuffix = 'illum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-07T06:10:09.611Z');
    $request->group = 'exercitationem';
    $request->max = 739938;
    $request->maxlatitude = 5327.21;
    $request->maxlongitude = 7046.65;
    $request->minlatitude = 8092.12;
    $request->minlongitude = 9682.12;
    $request->name = 'Eleanor Streich';
    $request->searchTypeAwcMetarSiteId = 'nemo';
    $request->skip = 615532;
    $request->text = 'nisi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T15:58:54.382Z');

    $response = $sdk->typeTypeAwcMetar->searchTypeAwcMetar($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
