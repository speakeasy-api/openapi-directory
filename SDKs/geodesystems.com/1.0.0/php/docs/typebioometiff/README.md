# typeBioOmeTiff

## Overview

Search API for 'OME TIFF File' entry type

### Available Operations

* [searchBioOmeTiff](#searchbioometiff) - Search API for 'OME TIFF File' entry type

## searchBioOmeTiff

API to search for entries of type OME TIFF File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOmeTiffRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOmeTiffRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T23:06:26.119Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T07:57:16.138Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-07T17:49:17.039Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-07T13:57:38.738Z');
    $request->description = 'reiciendis';
    $request->filesuffix = 'mollitia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T12:46:27.682Z');
    $request->group = 'dolor';
    $request->max = 896547;
    $request->maxlatitude = 1412.64;
    $request->maxlongitude = 3675.62;
    $request->minlatitude = 972.6;
    $request->minlongitude = 4358.65;
    $request->name = 'Doyle Gibson';
    $request->skip = 703889;
    $request->text = 'in';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T15:46:28.441Z');

    $response = $sdk->typeBioOmeTiff->searchBioOmeTiff($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
