# typeBookmarks

## Overview

Search API for 'Bookmarks' entry type

### Available Operations

* [searchBookmarks](#searchbookmarks) - Search API for 'Bookmarks' entry type

## searchBookmarks

API to search for entries of type Bookmarks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBookmarksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBookmarksRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T12:02:05.098Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T22:15:46.522Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T09:38:41.756Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T06:50:40.250Z');
    $request->description = 'sequi';
    $request->filesuffix = 'quo';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T07:34:05.998Z');
    $request->group = 'aperiam';
    $request->max = 715179;
    $request->maxlatitude = 7997.96;
    $request->maxlongitude = 4908.19;
    $request->minlatitude = 769.56;
    $request->minlongitude = 4694.98;
    $request->name = 'Sheldon Hackett';
    $request->searchDbBookmarksCategory = 'commodi';
    $request->searchDbBookmarksDate = 'sapiente';
    $request->searchDbBookmarksTitle = 'dolores';
    $request->searchDbBookmarksUrl = 'deserunt';
    $request->skip = 475289;
    $request->text = 'accusantium';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T17:01:25.429Z');

    $response = $sdk->typeBookmarks->searchBookmarks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
