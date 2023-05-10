# typeProjectGpsControlpoints

## Overview

Search API for 'Control Points File' entry type

### Available Operations

* [searchProjectGpsControlpoints](#searchprojectgpscontrolpoints) - Search API for 'Control Points File' entry type

## searchProjectGpsControlpoints

API to search for entries of type Control Points File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectGpsControlpointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectGpsControlpointsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T05:28:14.380Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T21:22:49.757Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-03T09:14:28.396Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T16:59:15.324Z');
    $request->description = 'consequuntur';
    $request->filesuffix = 'vitae';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-12T20:46:36.515Z');
    $request->group = 'amet';
    $request->max = 346608;
    $request->maxlatitude = 8470.18;
    $request->maxlongitude = 5065.32;
    $request->minlatitude = 6016.26;
    $request->minlongitude = 6294.61;
    $request->name = 'Garry Fahey';
    $request->skip = 989089;
    $request->text = 'temporibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-01T07:51:21.127Z');

    $response = $sdk->typeProjectGpsControlpoints->searchProjectGpsControlpoints($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
