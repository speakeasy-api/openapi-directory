# typeTypeVirtual

## Overview

Search API for 'Virtual Group' entry type

### Available Operations

* [searchTypeVirtual](#searchtypevirtual) - Search API for 'Virtual Group' entry type

## searchTypeVirtual

API to search for entries of type Virtual Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeVirtualRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeVirtualRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T19:02:58.831Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-15T15:12:23.880Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T11:56:54.380Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-16T09:32:17.458Z');
    $request->description = 'quis';
    $request->filesuffix = 'corrupti';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T11:01:53.379Z');
    $request->group = 'quod';
    $request->max = 954989;
    $request->maxlatitude = 915.29;
    $request->maxlongitude = 3715.34;
    $request->minlatitude = 1768.52;
    $request->minlongitude = 3465.57;
    $request->name = 'Myrtle Spinka';
    $request->skip = 566024;
    $request->text = 'corporis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-18T15:25:52.242Z');

    $response = $sdk->typeTypeVirtual->searchTypeVirtual($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
