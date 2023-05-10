# typeMediaPhotoalbum

## Overview

Search API for 'Photo Album' entry type

### Available Operations

* [searchMediaPhotoalbum](#searchmediaphotoalbum) - Search API for 'Photo Album' entry type

## searchMediaPhotoalbum

API to search for entries of type Photo Album

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMediaPhotoalbumRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMediaPhotoalbumRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-10T02:06:29.028Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T03:06:33.282Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T13:46:35.143Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T21:51:55.851Z');
    $request->description = 'dolore';
    $request->filesuffix = 'sunt';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-21T12:17:59.359Z');
    $request->group = 'odit';
    $request->max = 936845;
    $request->maxlatitude = 3305.96;
    $request->maxlongitude = 3731.06;
    $request->minlatitude = 510.53;
    $request->minlongitude = 3503.87;
    $request->name = 'Jackie Hammes';
    $request->skip = 338281;
    $request->text = 'quibusdam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T06:59:07.022Z');

    $response = $sdk->typeMediaPhotoalbum->searchMediaPhotoalbum($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
