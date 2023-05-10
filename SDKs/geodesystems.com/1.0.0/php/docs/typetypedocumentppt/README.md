# typeTypeDocumentPpt

## Overview

Search API for 'Powerpoint File' entry type

### Available Operations

* [searchTypeDocumentPpt](#searchtypedocumentppt) - Search API for 'Powerpoint File' entry type

## searchTypeDocumentPpt

API to search for entries of type Powerpoint File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDocumentPptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDocumentPptRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T20:14:50.258Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-16T03:39:02.629Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T16:01:08.638Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T02:19:57.449Z');
    $request->description = 'non';
    $request->filesuffix = 'delectus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T02:42:14.341Z');
    $request->group = 'sunt';
    $request->max = 353493;
    $request->maxlatitude = 4630.44;
    $request->maxlongitude = 8509.53;
    $request->minlatitude = 9160.51;
    $request->minlongitude = 6410.06;
    $request->name = 'Arnold Bins DVM';
    $request->skip = 276247;
    $request->text = 'dolore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-01T13:28:23.519Z');

    $response = $sdk->typeTypeDocumentPpt->searchTypeDocumentPpt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
