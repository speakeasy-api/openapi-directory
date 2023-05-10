# typeProjectDataformat

## Overview

Search API for 'Data Format' entry type

### Available Operations

* [searchProjectDataformat](#searchprojectdataformat) - Search API for 'Data Format' entry type

## searchProjectDataformat

API to search for entries of type Data Format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectDataformatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectDataformatRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T03:21:59.824Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-20T03:58:51.322Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-30T00:37:54.186Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T17:41:33.772Z');
    $request->description = 'laborum';
    $request->filesuffix = 'illum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-13T05:15:53.160Z');
    $request->group = 'dolorum';
    $request->max = 998355;
    $request->maxlatitude = 3419.83;
    $request->maxlongitude = 8473.08;
    $request->minlatitude = 8450.86;
    $request->minlongitude = 4144.56;
    $request->name = 'Judith Feest';
    $request->searchProjectDataformatDataType = 'ipsa';
    $request->searchProjectDataformatField = 'maiores';
    $request->skip = 350271;
    $request->text = 'culpa';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-06T19:13:49.286Z');

    $response = $sdk->typeProjectDataformat->searchProjectDataformat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
