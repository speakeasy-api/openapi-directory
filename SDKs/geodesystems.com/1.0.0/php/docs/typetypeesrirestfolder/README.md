# typeTypeEsriRestfolder

## Overview

Search API for 'ESRI Services Folder' entry type

### Available Operations

* [searchTypeEsriRestfolder](#searchtypeesrirestfolder) - Search API for 'ESRI Services Folder' entry type

## searchTypeEsriRestfolder

API to search for entries of type ESRI Services Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriRestfolderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriRestfolderRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T10:42:22.968Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-05T03:14:49.946Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T20:31:22.684Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T08:34:13.727Z');
    $request->description = 'excepturi';
    $request->filesuffix = 'odio';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-24T04:22:11.526Z');
    $request->group = 'delectus';
    $request->max = 169229;
    $request->maxlatitude = 232.36;
    $request->maxlongitude = 2432.47;
    $request->minlatitude = 5311.04;
    $request->minlongitude = 4716.42;
    $request->name = 'Nicole Becker';
    $request->skip = 15563;
    $request->text = 'impedit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-04T12:32:09.161Z');

    $response = $sdk->typeTypeEsriRestfolder->searchTypeEsriRestfolder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
