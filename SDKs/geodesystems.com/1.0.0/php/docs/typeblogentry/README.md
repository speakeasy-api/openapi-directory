# typeBlogentry

## Overview

Search API for 'Weblog Entry' entry type

### Available Operations

* [searchBlogentry](#searchblogentry) - Search API for 'Weblog Entry' entry type

## searchBlogentry

API to search for entries of type Weblog Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBlogentryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBlogentryRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-13T07:43:17.350Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T11:20:42.976Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T09:38:53.685Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T09:33:05.571Z');
    $request->description = 'magnam';
    $request->filesuffix = 'ea';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T16:53:11.568Z');
    $request->group = 'recusandae';
    $request->max = 132487;
    $request->maxlatitude = 3253.1;
    $request->maxlongitude = 534.27;
    $request->minlatitude = 9528.71;
    $request->minlongitude = 7255.95;
    $request->name = 'Jennifer Lesch';
    $request->searchBlogentryBlogtext = 'fugit';
    $request->skip = 882860;
    $request->text = 'inventore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T07:04:37.837Z');

    $response = $sdk->typeBlogentry->searchBlogentry($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
