# typeTypePointOpenaq

## Overview

Search API for 'Open AQ Air Quality' entry type

### Available Operations

* [searchTypePointOpenaq](#searchtypepointopenaq) - Search API for 'Open AQ Air Quality' entry type

## searchTypePointOpenaq

API to search for entries of type Open AQ Air Quality

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOpenaqRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOpenaqRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-27T11:00:09.773Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T12:40:02.823Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-03T16:10:13.814Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-24T01:48:30.387Z');
    $request->description = 'quaerat';
    $request->filesuffix = 'veniam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T11:28:17.933Z');
    $request->group = 'dolores';
    $request->max = 118158;
    $request->maxlatitude = 4765.4;
    $request->maxlongitude = 8046.85;
    $request->minlatitude = 1730.72;
    $request->minlongitude = 5658.09;
    $request->name = 'Tanya Hyatt';
    $request->searchTypePointOpenaqCity = 'consectetur';
    $request->searchTypePointOpenaqCountry = 'velit';
    $request->searchTypePointOpenaqHoursOffset = 273839;
    $request->searchTypePointOpenaqLocation = 'aspernatur';
    $request->skip = 323569;
    $request->text = 'incidunt';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T13:16:43.183Z');

    $response = $sdk->typeTypePointOpenaq->searchTypePointOpenaq($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
