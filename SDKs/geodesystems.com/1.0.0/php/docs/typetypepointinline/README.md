# typeTypePointInline

## Overview

Search API for 'Inline Point File' entry type

### Available Operations

* [searchTypePointInline](#searchtypepointinline) - Search API for 'Inline Point File' entry type

## searchTypePointInline

API to search for entries of type Inline Point File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointInlineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointInlineRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T08:15:00.491Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T22:42:10.471Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-14T19:35:26.505Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T04:05:38.697Z');
    $request->description = 'quis';
    $request->filesuffix = 'aliquid';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-02T22:08:01.958Z');
    $request->group = 'dicta';
    $request->max = 23410;
    $request->maxlatitude = 2379.6;
    $request->maxlongitude = 802.94;
    $request->minlatitude = 9016.07;
    $request->minlongitude = 4349.36;
    $request->name = 'Freddie Mohr DDS';
    $request->skip = 128390;
    $request->text = 'accusantium';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T13:03:58.735Z');

    $response = $sdk->typeTypePointInline->searchTypePointInline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
