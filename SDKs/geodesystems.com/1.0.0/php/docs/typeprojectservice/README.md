# typeProjectService

## Overview

Search API for 'Data Access Service' entry type

### Available Operations

* [searchProjectService](#searchprojectservice) - Search API for 'Data Access Service' entry type

## searchProjectService

API to search for entries of type Data Access Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectServiceRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T18:02:47.466Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T03:21:37.038Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-28T21:31:25.301Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T20:54:15.420Z');
    $request->description = 'cumque';
    $request->filesuffix = 'maxime';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-22T20:02:33.919Z');
    $request->group = 'id';
    $request->max = 9060;
    $request->maxlatitude = 5515.76;
    $request->maxlongitude = 1917.24;
    $request->minlatitude = 4365.32;
    $request->minlongitude = 2704.77;
    $request->name = 'Faye Bartoletti';
    $request->searchProjectServiceProvider = 'facilis';
    $request->searchProjectServiceServiceType = 'laudantium';
    $request->skip = 353075;
    $request->text = 'aut';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-11T11:02:14.127Z');

    $response = $sdk->typeProjectService->searchProjectService($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
