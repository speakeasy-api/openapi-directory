# typeOwlClass

## Overview

Search API for 'OWL Class' entry type

### Available Operations

* [searchOwlClass](#searchowlclass) - Search API for 'OWL Class' entry type

## searchOwlClass

API to search for entries of type OWL Class

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchOwlClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchOwlClassRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T03:00:23.242Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T11:14:59.383Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-25T19:18:27.795Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T19:08:46.997Z');
    $request->description = 'dolorem';
    $request->filesuffix = 'architecto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T00:38:19.332Z');
    $request->group = 'nulla';
    $request->max = 316541;
    $request->maxlatitude = 735.74;
    $request->maxlongitude = 2987.5;
    $request->minlatitude = 9618.42;
    $request->minlongitude = 2550.64;
    $request->name = 'Loren Jakubowski IV';
    $request->skip = 711615;
    $request->text = 'hic';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T11:23:26.153Z');

    $response = $sdk->typeOwlClass->searchOwlClass($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
