# typeBioDicom

## Overview

Search API for 'DICOM File' entry type

### Available Operations

* [searchBioDicom](#searchbiodicom) - Search API for 'DICOM File' entry type

## searchBioDicom

API to search for entries of type DICOM File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioDicomRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioDicomRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T05:54:08.890Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-11T16:11:54.761Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T13:23:33.410Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T07:12:18.684Z');
    $request->description = 'laborum';
    $request->filesuffix = 'quasi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-27T18:38:42.890Z');
    $request->group = 'vero';
    $request->max = 468651;
    $request->maxlatitude = 5096.24;
    $request->maxlongitude = 9767.62;
    $request->minlatitude = 557.14;
    $request->minlongitude = 6048.46;
    $request->name = 'Ms. Karla Aufderhar';
    $request->skip = 979587;
    $request->text = 'dicta';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T21:48:41.971Z');

    $response = $sdk->typeBioDicom->searchBioDicom($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
