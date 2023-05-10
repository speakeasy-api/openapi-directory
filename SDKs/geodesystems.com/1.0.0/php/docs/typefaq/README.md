# typeFaq

## Overview

Search API for 'FAQ' entry type

### Available Operations

* [searchFaq](#searchfaq) - Search API for 'FAQ' entry type

## searchFaq

API to search for entries of type FAQ

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFaqRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFaqRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-06T01:23:27.992Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-09T07:07:29.255Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T06:01:40.776Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-24T22:07:46.946Z');
    $request->description = 'earum';
    $request->filesuffix = 'modi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-31T11:58:23.065Z');
    $request->group = 'voluptatem';
    $request->max = 371919;
    $request->maxlatitude = 4259.46;
    $request->maxlongitude = 13.83;
    $request->minlatitude = 938.94;
    $request->minlongitude = 2476.85;
    $request->name = 'Lloyd Mayer';
    $request->skip = 458503;
    $request->text = 'nemo';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T06:49:02.857Z');

    $response = $sdk->typeFaq->searchFaq($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
