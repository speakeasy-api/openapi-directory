# typeTripReport

## Overview

Search API for 'Trip Report' entry type

### Available Operations

* [searchTripReport](#searchtripreport) - Search API for 'Trip Report' entry type

## searchTripReport

API to search for entries of type Trip Report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTripReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTripReportRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-14T00:15:39.097Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-25T06:55:35.087Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T03:00:00.239Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-23T04:22:56.614Z');
    $request->description = 'sapiente';
    $request->filesuffix = 'alias';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-28T14:34:12.839Z');
    $request->group = 'aspernatur';
    $request->max = 749101;
    $request->maxlatitude = 4679.47;
    $request->maxlongitude = 5323.36;
    $request->minlatitude = 9682.86;
    $request->minlongitude = 1149.52;
    $request->name = 'Sue Cronin';
    $request->skip = 568162;
    $request->text = 'corrupti';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-16T03:47:02.612Z');

    $response = $sdk->typeTripReport->searchTripReport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
