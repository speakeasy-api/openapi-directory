# typeLatlonimage

## Overview

Search API for 'Lat-Lon Image' entry type

### Available Operations

* [searchLatlonimage](#searchlatlonimage) - Search API for 'Lat-Lon Image' entry type

## searchLatlonimage

API to search for entries of type Lat-Lon Image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLatlonimageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLatlonimageRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-03T18:23:14.348Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T10:33:22.468Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T14:34:13.159Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T02:03:12.598Z');
    $request->description = 'magni';
    $request->filesuffix = 'incidunt';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T04:26:09.166Z');
    $request->group = 'dolor';
    $request->max = 349898;
    $request->maxlatitude = 7097.01;
    $request->maxlongitude = 7064.11;
    $request->minlatitude = 7696.34;
    $request->minlongitude = 245.77;
    $request->name = 'Molly Cronin';
    $request->skip = 268709;
    $request->text = 'veniam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-16T04:29:27.854Z');

    $response = $sdk->typeLatlonimage->searchLatlonimage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
