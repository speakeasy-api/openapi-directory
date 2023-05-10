# typeTypeSoundingGsd

## Overview

Search API for 'GSD Sounding' entry type

### Available Operations

* [searchTypeSoundingGsd](#searchtypesoundinggsd) - Search API for 'GSD Sounding' entry type

## searchTypeSoundingGsd

API to search for entries of type GSD Sounding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeSoundingGsdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeSoundingGsdRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-11T20:18:30.071Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T05:10:52.371Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-31T13:42:39.333Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-29T09:01:04.013Z');
    $request->description = 'modi';
    $request->filesuffix = 'ratione';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-04T05:35:00.281Z');
    $request->group = 'aliquam';
    $request->max = 357684;
    $request->maxlatitude = 8726.02;
    $request->maxlongitude = 572.91;
    $request->minlatitude = 2260.97;
    $request->minlongitude = 140.82;
    $request->name = 'Alex Zulauf';
    $request->skip = 650937;
    $request->text = 'quis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-14T19:44:18.051Z');

    $response = $sdk->typeTypeSoundingGsd->searchTypeSoundingGsd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
