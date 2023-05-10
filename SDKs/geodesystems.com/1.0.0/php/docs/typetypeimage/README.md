# typeTypeImage

## Overview

Search API for 'Image' entry type

### Available Operations

* [searchTypeImage](#searchtypeimage) - Search API for 'Image' entry type

## searchTypeImage

API to search for entries of type Image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeImageRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T02:17:34.001Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T01:23:15.914Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T11:08:01.952Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-03T01:31:33.904Z');
    $request->description = 'voluptate';
    $request->filesuffix = 'reprehenderit';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T14:09:54.334Z');
    $request->group = 'voluptate';
    $request->max = 941091;
    $request->maxlatitude = 8719.69;
    $request->maxlongitude = 190.76;
    $request->minlatitude = 4482.82;
    $request->minlongitude = 2591.34;
    $request->name = 'Elizabeth Moore';
    $request->skip = 532110;
    $request->text = 'facere';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T16:59:43.803Z');

    $response = $sdk->typeTypeImage->searchTypeImage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
