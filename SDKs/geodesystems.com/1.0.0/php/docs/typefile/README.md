# typeFile

## Overview

Search API for 'File' entry type

### Available Operations

* [searchFile](#searchfile) - Search API for 'File' entry type

## searchFile

API to search for entries of type File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFileRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-25T16:13:44.576Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-14T09:06:41.387Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T09:55:28.474Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-24T21:18:28.969Z');
    $request->description = 'quia';
    $request->filesuffix = 'quia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T21:57:47.411Z');
    $request->group = 'libero';
    $request->max = 115661;
    $request->maxlatitude = 6633.18;
    $request->maxlongitude = 7278.88;
    $request->minlatitude = 8544.6;
    $request->minlongitude = 6374.62;
    $request->name = 'Clark Balistreri DVM';
    $request->skip = 80061;
    $request->text = 'aperiam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T04:35:31.707Z');

    $response = $sdk->typeFile->searchFile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
