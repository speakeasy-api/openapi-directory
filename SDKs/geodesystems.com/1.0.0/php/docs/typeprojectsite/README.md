# typeProjectSite

## Overview

Search API for 'Site' entry type

### Available Operations

* [searchProjectSite](#searchprojectsite) - Search API for 'Site' entry type

## searchProjectSite

API to search for entries of type Site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectSiteRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T02:23:15.742Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-22T23:14:33.263Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-16T07:12:25.575Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T09:06:28.916Z');
    $request->description = 'quisquam';
    $request->filesuffix = 'praesentium';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-18T22:20:38.381Z');
    $request->group = 'officiis';
    $request->max = 196497;
    $request->maxlatitude = 1655.45;
    $request->maxlongitude = 298.81;
    $request->minlatitude = 6659.6;
    $request->minlongitude = 2261.81;
    $request->name = 'Natasha Wiza';
    $request->searchProjectSiteCountry = 'dolorum';
    $request->searchProjectSiteCounty = 'quibusdam';
    $request->searchProjectSiteNetwork = 'earum';
    $request->searchProjectSiteShortName = 'excepturi';
    $request->searchProjectSiteSiteType = 'numquam';
    $request->searchProjectSiteState = 'molestiae';
    $request->searchProjectSiteStatus = 'impedit';
    $request->skip = 621883;
    $request->text = 'animi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T07:15:52.266Z');

    $response = $sdk->typeProjectSite->searchProjectSite($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
