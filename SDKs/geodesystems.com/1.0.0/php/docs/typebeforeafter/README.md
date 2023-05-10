# typeBeforeafter

## Overview

Search API for 'Before and After Images' entry type

### Available Operations

* [searchBeforeafter](#searchbeforeafter) - Search API for 'Before and After Images' entry type

## searchBeforeafter

API to search for entries of type Before and After Images

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBeforeafterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBeforeafterRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-13T17:41:46.141Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T16:55:44.795Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T20:42:46.563Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-17T15:42:43.722Z');
    $request->description = 'fuga';
    $request->filesuffix = 'in';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T05:33:50.280Z');
    $request->group = 'iure';
    $request->max = 902349;
    $request->maxlatitude = 6976.31;
    $request->maxlongitude = 992.8;
    $request->minlatitude = 602.25;
    $request->minlongitude = 9698.1;
    $request->name = 'Shaun Osinski';
    $request->skip = 358152;
    $request->text = 'explicabo';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T14:32:34.011Z');

    $response = $sdk->typeBeforeafter->searchBeforeafter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
