# typeTypeWmsCapabilities

## Overview

Search API for 'WMS Capabilities' entry type

### Available Operations

* [searchTypeWmsCapabilities](#searchtypewmscapabilities) - Search API for 'WMS Capabilities' entry type

## searchTypeWmsCapabilities

API to search for entries of type WMS Capabilities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeWmsCapabilitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeWmsCapabilitiesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T22:46:34.076Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T13:26:35.144Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-20T15:27:19.301Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T20:23:21.998Z');
    $request->description = 'impedit';
    $request->filesuffix = 'consectetur';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-20T03:50:22.008Z');
    $request->group = 'est';
    $request->max = 682847;
    $request->maxlatitude = 2877.97;
    $request->maxlongitude = 2404.48;
    $request->minlatitude = 1871.04;
    $request->minlongitude = 7403.31;
    $request->name = 'Ms. Jackie Torphy';
    $request->skip = 225415;
    $request->text = 'minus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T19:42:10.801Z');

    $response = $sdk->typeTypeWmsCapabilities->searchTypeWmsCapabilities($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
