# typeProjectGpsRinex

## Overview

Search API for 'RINEX File' entry type

### Available Operations

* [searchProjectGpsRinex](#searchprojectgpsrinex) - Search API for 'RINEX File' entry type

## searchProjectGpsRinex

API to search for entries of type RINEX File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectGpsRinexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectGpsRinexRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-09T16:27:22.070Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T11:02:07.974Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-02T06:41:37.594Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-05T06:52:39.012Z');
    $request->description = 'quod';
    $request->filesuffix = 'voluptate';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-09T07:14:52.283Z');
    $request->group = 'maxime';
    $request->max = 681578;
    $request->maxlatitude = 665.96;
    $request->maxlongitude = 4057.89;
    $request->minlatitude = 2359.7;
    $request->minlongitude = 9824.09;
    $request->name = 'Lynda Donnelly';
    $request->skip = 21668;
    $request->text = 'laborum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-22T15:58:15.848Z');

    $response = $sdk->typeProjectGpsRinex->searchProjectGpsRinex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
