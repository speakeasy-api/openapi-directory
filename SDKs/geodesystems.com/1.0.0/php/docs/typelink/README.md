# typeLink

## Overview

Search API for 'Link' entry type

### Available Operations

* [searchLink](#searchlink) - Search API for 'Link' entry type

## searchLink

API to search for entries of type Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLinkRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-05T16:43:24.726Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T16:31:33.706Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T06:48:42.276Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-10T09:17:41.732Z');
    $request->description = 'eligendi';
    $request->filesuffix = 'hic';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-10T18:47:53.557Z');
    $request->group = 'unde';
    $request->max = 860311;
    $request->maxlatitude = 6213.93;
    $request->maxlongitude = 6530;
    $request->minlatitude = 2986.13;
    $request->minlongitude = 3442.89;
    $request->name = 'Carole Paucek';
    $request->skip = 98610;
    $request->text = 'deserunt';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-04T14:46:37.615Z');

    $response = $sdk->typeLink->searchLink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
