# typeStatusboard

## Overview

Search API for 'Status Board' entry type

### Available Operations

* [searchStatusboard](#searchstatusboard) - Search API for 'Status Board' entry type

## searchStatusboard

API to search for entries of type Status Board

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchStatusboardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchStatusboardRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T16:10:02.604Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-05T11:34:17.742Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-29T03:17:42.952Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T02:39:00.347Z');
    $request->description = 'doloremque';
    $request->filesuffix = 'fuga';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T01:49:22.777Z');
    $request->group = 'suscipit';
    $request->max = 757438;
    $request->maxlatitude = 8855.23;
    $request->maxlongitude = 4909.56;
    $request->minlatitude = 1480.38;
    $request->minlongitude = 1887.82;
    $request->name = 'Alex Armstrong';
    $request->searchDbStatusboardStatus = 'delectus';
    $request->searchDbStatusboardWhat = 'deserunt';
    $request->skip = 188081;
    $request->text = 'ipsa';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-26T20:02:05.121Z');

    $response = $sdk->typeStatusboard->searchStatusboard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
