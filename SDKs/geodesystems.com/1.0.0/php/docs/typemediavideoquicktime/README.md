# typeMediaVideoQuicktime

## Overview

Search API for 'Quicktime Video' entry type

### Available Operations

* [searchMediaVideoQuicktime](#searchmediavideoquicktime) - Search API for 'Quicktime Video' entry type

## searchMediaVideoQuicktime

API to search for entries of type Quicktime Video

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMediaVideoQuicktimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMediaVideoQuicktimeRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T02:28:59.420Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-09T02:09:11.734Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-15T08:03:11.108Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T01:21:46.726Z');
    $request->description = 'eaque';
    $request->filesuffix = 'deserunt';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T19:05:26.735Z');
    $request->group = 'magni';
    $request->max = 273677;
    $request->maxlatitude = 8219.04;
    $request->maxlongitude = 2208.24;
    $request->minlatitude = 7005.29;
    $request->minlongitude = 1535.82;
    $request->name = 'Earnest Wisoky';
    $request->skip = 550338;
    $request->text = 'asperiores';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-09T05:13:53.393Z');

    $response = $sdk->typeMediaVideoQuicktime->searchMediaVideoQuicktime($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
