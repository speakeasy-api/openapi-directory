# typeWikipage

## Overview

Search API for 'Wiki Page' entry type

### Available Operations

* [searchWikipage](#searchwikipage) - Search API for 'Wiki Page' entry type

## searchWikipage

API to search for entries of type Wiki Page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchWikipageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchWikipageRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T11:42:20.406Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-16T13:25:39.162Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T16:38:01.137Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-23T18:10:33.380Z');
    $request->description = 'dignissimos';
    $request->filesuffix = 'quia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T07:33:22.410Z');
    $request->group = 'amet';
    $request->max = 192447;
    $request->maxlatitude = 9262.29;
    $request->maxlongitude = 8524.45;
    $request->minlatitude = 8020.82;
    $request->minlongitude = 245.22;
    $request->name = 'Natalie Price';
    $request->searchWikipageCategory = 'architecto';
    $request->searchWikipageWikitext = 'vel';
    $request->skip = 227713;
    $request->text = 'facilis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-23T00:22:51.337Z');

    $response = $sdk->typeWikipage->searchWikipage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
