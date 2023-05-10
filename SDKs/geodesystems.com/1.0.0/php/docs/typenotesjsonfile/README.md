# typeNotesJsonfile

## Overview

Search API for 'Json File' entry type

### Available Operations

* [searchNotesJsonfile](#searchnotesjsonfile) - Search API for 'Json File' entry type

## searchNotesJsonfile

API to search for entries of type Json File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchNotesJsonfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchNotesJsonfileRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T17:43:08.927Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-21T05:02:16.256Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T00:03:11.145Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-21T23:58:09.358Z');
    $request->description = 'ullam';
    $request->filesuffix = 'eligendi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-12T15:33:33.302Z');
    $request->group = 'occaecati';
    $request->max = 600934;
    $request->maxlatitude = 752.77;
    $request->maxlongitude = 4691.7;
    $request->minlatitude = 782.46;
    $request->minlongitude = 7253.16;
    $request->name = 'Miss Joyce Runolfsson';
    $request->skip = 707983;
    $request->text = 'beatae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-09T20:39:20.538Z');

    $response = $sdk->typeNotesJsonfile->searchNotesJsonfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
