# typeAny

## Overview

Search API for 'Any file type' entry type

### Available Operations

* [searchAny](#searchany) - Search API for 'Any file type' entry type

## searchAny

API to search for entries of type Any file type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchAnyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchAnyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-13T16:19:19.906Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-10T05:07:43.614Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T15:49:54.663Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-20T20:35:01.256Z');
    $request->description = 'occaecati';
    $request->filesuffix = 'fugit';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-10T09:24:01.909Z');
    $request->group = 'optio';
    $request->max = 521848;
    $request->maxlatitude = 1059.07;
    $request->maxlongitude = 4146.62;
    $request->minlatitude = 4736;
    $request->minlongitude = 2645.55;
    $request->name = 'Krista Rippin';
    $request->skip = 568434;
    $request->text = 'aspernatur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T16:31:28.618Z');

    $response = $sdk->typeAny->searchAny($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
