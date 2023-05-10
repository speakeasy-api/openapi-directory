# typeProjectGpsRaw

## Overview

Search API for 'Raw GPS File' entry type

### Available Operations

* [searchProjectGpsRaw](#searchprojectgpsraw) - Search API for 'Raw GPS File' entry type

## searchProjectGpsRaw

API to search for entries of type Raw GPS File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectGpsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectGpsRawRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-01T23:54:30.571Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T16:18:44.200Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T05:35:32.331Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-09T18:54:18.793Z');
    $request->description = 'doloremque';
    $request->filesuffix = 'ipsum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-16T01:03:01.411Z');
    $request->group = 'tempora';
    $request->max = 595986;
    $request->maxlatitude = 4620.97;
    $request->maxlongitude = 5410.09;
    $request->minlatitude = 6383.63;
    $request->minlongitude = 4064.93;
    $request->name = 'Dr. Elsa Pacocha';
    $request->skip = 185313;
    $request->text = 'accusantium';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T06:50:48.884Z');

    $response = $sdk->typeProjectGpsRaw->searchProjectGpsRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
