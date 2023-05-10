# typeTypeNasaames

## Overview

Search API for 'NASA AMES File' entry type

### Available Operations

* [searchTypeNasaames](#searchtypenasaames) - Search API for 'NASA AMES File' entry type

## searchTypeNasaames

API to search for entries of type NASA AMES File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeNasaamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeNasaamesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T04:50:31.611Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T06:24:18.561Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T07:16:53.819Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-23T16:27:54.446Z');
    $request->description = 'reiciendis';
    $request->filesuffix = 'qui';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-27T13:27:59.360Z');
    $request->group = 'numquam';
    $request->max = 78996;
    $request->maxlatitude = 8997.47;
    $request->maxlongitude = 9464.16;
    $request->minlatitude = 3495.58;
    $request->minlongitude = 4682.21;
    $request->name = 'Mr. Erica Wuckert';
    $request->skip = 572996;
    $request->text = 'id';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T12:52:26.784Z');

    $response = $sdk->typeTypeNasaames->searchTypeNasaames($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
