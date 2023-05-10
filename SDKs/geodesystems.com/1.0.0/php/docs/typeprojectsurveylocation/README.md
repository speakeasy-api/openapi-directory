# typeProjectSurveylocation

## Overview

Search API for 'Survey Location' entry type

### Available Operations

* [searchProjectSurveylocation](#searchprojectsurveylocation) - Search API for 'Survey Location' entry type

## searchProjectSurveylocation

API to search for entries of type Survey Location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectSurveylocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectSurveylocationRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-25T11:30:31.290Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-13T16:26:05.767Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-18T05:53:55.515Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T00:03:31.362Z');
    $request->description = 'quas';
    $request->filesuffix = 'ipsum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-13T13:53:50.677Z');
    $request->group = 'facilis';
    $request->max = 983060;
    $request->maxlatitude = 6229.68;
    $request->maxlongitude = 9261.19;
    $request->minlatitude = 9559.62;
    $request->minlongitude = 2349.64;
    $request->name = 'Jan Senger';
    $request->skip = 966652;
    $request->text = 'odio';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T10:03:07.861Z');

    $response = $sdk->typeProjectSurveylocation->searchProjectSurveylocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
