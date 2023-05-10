# typeOpendaplink

## Overview

Search API for 'OPeNDAP Link' entry type

### Available Operations

* [searchOpendaplink](#searchopendaplink) - Search API for 'OPeNDAP Link' entry type

## searchOpendaplink

API to search for entries of type OPeNDAP Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchOpendaplinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchOpendaplinkRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T01:52:56.190Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-24T21:36:14.545Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-25T15:44:39.144Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T08:59:28.620Z');
    $request->description = 'sit';
    $request->filesuffix = 'aliquid';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T20:56:24.947Z');
    $request->group = 'deleniti';
    $request->max = 122744;
    $request->maxlatitude = 2001.9;
    $request->maxlongitude = 9639.13;
    $request->minlatitude = 6736.53;
    $request->minlongitude = 3034.21;
    $request->name = 'Edwin Cartwright';
    $request->skip = 528320;
    $request->text = 'ipsa';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-16T04:51:59.785Z');

    $response = $sdk->typeOpendaplink->searchOpendaplink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
