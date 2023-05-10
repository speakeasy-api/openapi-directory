# typeCommunityResource

## Overview

Search API for 'Facility' entry type

### Available Operations

* [searchCommunityResource](#searchcommunityresource) - Search API for 'Facility' entry type

## searchCommunityResource

API to search for entries of type Facility

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCommunityResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCommunityResourceRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T06:51:18.031Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T21:21:21.316Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T10:30:00.284Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-06T20:25:31.567Z');
    $request->description = 'vel';
    $request->filesuffix = 'architecto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-18T13:59:08.408Z');
    $request->group = 'dicta';
    $request->max = 483706;
    $request->maxlatitude = 2712.52;
    $request->maxlongitude = 4582.59;
    $request->minlatitude = 4037.93;
    $request->minlongitude = 2352.63;
    $request->name = 'Mrs. Melissa Osinski';
    $request->searchCommunityResourceAddress = 'expedita';
    $request->searchCommunityResourceCity = 'aliquid';
    $request->searchCommunityResourceResourceType = 'officia';
    $request->searchCommunityResourceState = 'suscipit';
    $request->searchCommunityResourceZipcode = 'aliquid';
    $request->skip = 21973;
    $request->text = 'eum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-21T16:44:14.214Z');

    $response = $sdk->typeCommunityResource->searchCommunityResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
