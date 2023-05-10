# typeBioSra

## Overview

Search API for 'Sequence Read Archive' entry type

### Available Operations

* [searchBioSra](#searchbiosra) - Search API for 'Sequence Read Archive' entry type

## searchBioSra

API to search for entries of type Sequence Read Archive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioSraRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioSraRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-31T07:58:44.750Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T21:26:14.171Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T08:47:14.764Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T02:20:22.923Z');
    $request->description = 'dolorum';
    $request->filesuffix = 'architecto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-26T00:04:34.165Z');
    $request->group = 'quas';
    $request->max = 929530;
    $request->maxlatitude = 92.4;
    $request->maxlongitude = 6699.17;
    $request->minlatitude = 8330.38;
    $request->minlongitude = 7851.53;
    $request->name = 'Alexander Prosacco';
    $request->skip = 63955;
    $request->text = 'laudantium';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T03:16:58.870Z');

    $response = $sdk->typeBioSra->searchBioSra($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
