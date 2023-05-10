# typeTypeMbPointBasic

## Overview

Search API for 'Basic MB point file' entry type

### Available Operations

* [searchTypeMbPointBasic](#searchtypembpointbasic) - Search API for 'Basic MB point file' entry type

## searchTypeMbPointBasic

API to search for entries of type Basic MB point file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeMbPointBasicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeMbPointBasicRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T20:08:10.603Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-27T09:00:26.332Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-04T08:32:50.502Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-17T18:03:56.773Z');
    $request->description = 'laudantium';
    $request->filesuffix = 'dolore';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T22:16:52.899Z');
    $request->group = 'aspernatur';
    $request->max = 799306;
    $request->maxlatitude = 2101.21;
    $request->maxlongitude = 2033.56;
    $request->minlatitude = 563.71;
    $request->minlongitude = 5700.47;
    $request->name = 'Ed Armstrong';
    $request->skip = 434382;
    $request->text = 'quibusdam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-03T07:16:13.857Z');

    $response = $sdk->typeTypeMbPointBasic->searchTypeMbPointBasic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
