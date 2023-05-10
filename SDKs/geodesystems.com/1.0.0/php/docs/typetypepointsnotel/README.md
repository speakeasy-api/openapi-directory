# typeTypePointSnotel

## Overview

Search API for 'SNOTEL Snow Data' entry type

### Available Operations

* [searchTypePointSnotel](#searchtypepointsnotel) - Search API for 'SNOTEL Snow Data' entry type

## searchTypePointSnotel

API to search for entries of type SNOTEL Snow Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointSnotelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointSnotelRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-18T13:15:24.930Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T00:51:02.961Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T21:32:08.730Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-27T08:30:43.076Z');
    $request->description = 'totam';
    $request->filesuffix = 'ipsam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T21:44:30.899Z');
    $request->group = 'optio';
    $request->max = 728416;
    $request->maxlatitude = 672.29;
    $request->maxlongitude = 32.41;
    $request->minlatitude = 355.38;
    $request->minlongitude = 401.5;
    $request->name = 'Kelli Treutel';
    $request->searchTypePointSnotelHucId = 'provident';
    $request->searchTypePointSnotelHucName = 'dolores';
    $request->searchTypePointSnotelNetwork = 'illo';
    $request->searchTypePointSnotelSiteId = 'recusandae';
    $request->searchTypePointSnotelSiteNumber = 'quod';
    $request->searchTypePointSnotelState = 'magni';
    $request->skip = 26838;
    $request->text = 'voluptas';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T21:49:26.699Z');

    $response = $sdk->typeTypePointSnotel->searchTypePointSnotel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
