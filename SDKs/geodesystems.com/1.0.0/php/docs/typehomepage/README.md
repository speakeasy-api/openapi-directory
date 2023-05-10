# typeHomepage

## Overview

Search API for 'Home Page' entry type

### Available Operations

* [searchHomepage](#searchhomepage) - Search API for 'Home Page' entry type

## searchHomepage

API to search for entries of type Home Page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchHomepageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchHomepageRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-25T01:11:52.226Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-26T12:16:30.063Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-13T08:38:01.413Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T23:28:45.223Z');
    $request->description = 'modi';
    $request->filesuffix = 'itaque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T19:59:59.350Z');
    $request->group = 'consequuntur';
    $request->max = 828147;
    $request->maxlatitude = 8768.4;
    $request->maxlongitude = 9851.09;
    $request->minlatitude = 7737.11;
    $request->minlongitude = 7833.97;
    $request->name = 'Ms. Jimmie Wisozk';
    $request->skip = 458412;
    $request->text = 'iure';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T23:30:23.407Z');

    $response = $sdk->typeHomepage->searchHomepage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
