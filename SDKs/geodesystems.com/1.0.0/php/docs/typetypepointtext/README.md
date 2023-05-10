# typeTypePointText

## Overview

Search API for 'Record Text File' entry type

### Available Operations

* [searchTypePointText](#searchtypepointtext) - Search API for 'Record Text File' entry type

## searchTypePointText

API to search for entries of type Record Text File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointTextRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointTextRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-27T18:18:19.643Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T05:02:09.973Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T20:26:05.563Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-05T05:22:06.094Z');
    $request->description = 'rem';
    $request->filesuffix = 'eveniet';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-27T17:37:55.947Z');
    $request->group = 'repellat';
    $request->max = 165108;
    $request->maxlatitude = 7301.94;
    $request->maxlongitude = 9586.02;
    $request->minlatitude = 871.69;
    $request->minlongitude = 5927.91;
    $request->name = 'Brandy Lebsack';
    $request->skip = 39783;
    $request->text = 'vero';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T06:53:14.226Z');

    $response = $sdk->typeTypePointText->searchTypePointText($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
