# typeMediaImageloop

## Overview

Search API for 'Image Loop' entry type

### Available Operations

* [searchMediaImageloop](#searchmediaimageloop) - Search API for 'Image Loop' entry type

## searchMediaImageloop

API to search for entries of type Image Loop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMediaImageloopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMediaImageloopRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-13T20:37:07.767Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-10T23:44:26.325Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-12T21:47:00.714Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-17T03:41:04.453Z');
    $request->description = 'repudiandae';
    $request->filesuffix = 'accusantium';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-17T19:21:18.605Z');
    $request->group = 'quasi';
    $request->max = 502106;
    $request->maxlatitude = 2609.11;
    $request->maxlongitude = 7861.89;
    $request->minlatitude = 1779.29;
    $request->minlongitude = 7480.23;
    $request->name = 'Kim Crist';
    $request->skip = 800799;
    $request->text = 'quos';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T15:42:17.765Z');

    $response = $sdk->typeMediaImageloop->searchMediaImageloop($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
