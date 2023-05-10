# typeCommunityDatahub

## Overview

Search API for 'Data Hub' entry type

### Available Operations

* [searchCommunityDatahub](#searchcommunitydatahub) - Search API for 'Data Hub' entry type

## searchCommunityDatahub

API to search for entries of type Data Hub

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCommunityDatahubRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCommunityDatahubRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-20T05:12:41.056Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-10T12:47:28.024Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-08T01:11:44.885Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-11T23:55:22.223Z');
    $request->description = 'ratione';
    $request->filesuffix = 'animi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-01T00:59:41.712Z');
    $request->group = 'consequatur';
    $request->max = 97258;
    $request->maxlatitude = 902.33;
    $request->maxlongitude = 4977.77;
    $request->minlatitude = 6191.83;
    $request->minlongitude = 5810.82;
    $request->name = 'Josephine Boyer';
    $request->skip = 859581;
    $request->text = 'necessitatibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-24T01:02:47.291Z');

    $response = $sdk->typeCommunityDatahub->searchCommunityDatahub($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
