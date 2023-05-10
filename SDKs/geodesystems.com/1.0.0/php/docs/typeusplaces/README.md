# typeUsPlaces

## Overview

Search API for 'US Places' entry type

### Available Operations

* [searchUsPlaces](#searchusplaces) - Search API for 'US Places' entry type

## searchUsPlaces

API to search for entries of type US Places

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchUsPlacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchUsPlacesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-19T11:04:28.882Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T16:06:20.452Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-15T04:54:44.081Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T17:01:43.460Z');
    $request->description = 'eligendi';
    $request->filesuffix = 'veniam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T08:25:57.966Z');
    $request->group = 'repellat';
    $request->max = 377691;
    $request->maxlatitude = 8014.05;
    $request->maxlongitude = 2030.87;
    $request->minlatitude = 6126.97;
    $request->minlongitude = 7195.75;
    $request->name = 'Kristopher Abernathy';
    $request->searchDbUsPlacesCountyName = 'qui';
    $request->searchDbUsPlacesElevInFt = 5936.22;
    $request->searchDbUsPlacesFeatureClass = 'accusantium';
    $request->searchDbUsPlacesFeatureName = 'voluptatibus';
    $request->searchDbUsPlacesLocation = 'occaecati';
    $request->searchDbUsPlacesStateAlpha = 'nemo';
    $request->skip = 462673;
    $request->text = 'reiciendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T19:47:17.716Z');

    $response = $sdk->typeUsPlaces->searchUsPlaces($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
