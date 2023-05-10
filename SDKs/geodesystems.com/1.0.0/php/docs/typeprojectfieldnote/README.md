# typeProjectFieldnote

## Overview

Search API for 'Field Note' entry type

### Available Operations

* [searchProjectFieldnote](#searchprojectfieldnote) - Search API for 'Field Note' entry type

## searchProjectFieldnote

API to search for entries of type Field Note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectFieldnoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectFieldnoteRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T08:01:11.900Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-01T20:30:54.862Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-23T04:32:45.729Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-27T00:30:18.295Z');
    $request->description = 'nesciunt';
    $request->filesuffix = 'cupiditate';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-26T10:41:06.484Z');
    $request->group = 'beatae';
    $request->max = 56998;
    $request->maxlatitude = 6509.14;
    $request->maxlongitude = 7211.38;
    $request->minlatitude = 8273.14;
    $request->minlongitude = 7764.21;
    $request->name = 'Garry Johnson';
    $request->skip = 453880;
    $request->text = 'nisi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T18:07:27.744Z');

    $response = $sdk->typeProjectFieldnote->searchProjectFieldnote($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
