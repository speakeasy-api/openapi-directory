# typeProjectInstrument

## Overview

Search API for 'Instrument Data Collection' entry type

### Available Operations

* [searchProjectInstrument](#searchprojectinstrument) - Search API for 'Instrument Data Collection' entry type

## searchProjectInstrument

API to search for entries of type Instrument Data Collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectInstrumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectInstrumentRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-15T03:11:54.650Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T07:02:20.526Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-28T10:53:29.573Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-23T03:36:44.573Z');
    $request->description = 'tenetur';
    $request->filesuffix = 'molestias';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T11:29:26.661Z');
    $request->group = 'laborum';
    $request->max = 596185;
    $request->maxlatitude = 9156.47;
    $request->maxlongitude = 4288.1;
    $request->minlatitude = 951.23;
    $request->minlongitude = 5551.94;
    $request->name = 'Tonya Sauer';
    $request->skip = 695347;
    $request->text = 'explicabo';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-21T02:10:01.888Z');

    $response = $sdk->typeProjectInstrument->searchProjectInstrument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
