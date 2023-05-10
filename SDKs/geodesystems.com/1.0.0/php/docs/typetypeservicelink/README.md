# typeTypeServiceLink

## Overview

Search API for 'Service Link' entry type

### Available Operations

* [searchTypeServiceLink](#searchtypeservicelink) - Search API for 'Service Link' entry type

## searchTypeServiceLink

API to search for entries of type Service Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeServiceLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeServiceLinkRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T12:15:13.900Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-07T21:58:01.504Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T22:40:32.488Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T16:52:53.258Z');
    $request->description = 'blanditiis';
    $request->filesuffix = 'sapiente';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-20T04:23:44.358Z');
    $request->group = 'natus';
    $request->max = 440330;
    $request->maxlatitude = 2088.26;
    $request->maxlongitude = 1243.81;
    $request->minlatitude = 6824.3;
    $request->minlongitude = 8574.11;
    $request->name = 'Kevin Hammes';
    $request->skip = 336314;
    $request->text = 'fuga';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T09:55:08.787Z');

    $response = $sdk->typeTypeServiceLink->searchTypeServiceLink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
