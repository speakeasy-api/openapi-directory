# typeTypePointIcebridgeAtmQfit

## Overview

Search API for 'ATM QFIT Data' entry type

### Available Operations

* [searchTypePointIcebridgeAtmQfit](#searchtypepointicebridgeatmqfit) - Search API for 'ATM QFIT Data' entry type

## searchTypePointIcebridgeAtmQfit

API to search for entries of type ATM QFIT Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointIcebridgeAtmQfitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointIcebridgeAtmQfitRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-13T21:23:51.890Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-21T22:37:08.105Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-28T05:38:13.948Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T04:42:02.526Z');
    $request->description = 'sunt';
    $request->filesuffix = 'quisquam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-02T18:33:54.350Z');
    $request->group = 'ut';
    $request->max = 88210;
    $request->maxlatitude = 9702.13;
    $request->maxlongitude = 9710.5;
    $request->minlatitude = 7174.86;
    $request->minlongitude = 9304.68;
    $request->name = 'Forrest Powlowski';
    $request->skip = 620520;
    $request->text = 'ipsam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-12T07:11:13.000Z');

    $response = $sdk->typeTypePointIcebridgeAtmQfit->searchTypePointIcebridgeAtmQfit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
