# typeProjectCampaign

## Overview

Search API for 'Campaign' entry type

### Available Operations

* [searchProjectCampaign](#searchprojectcampaign) - Search API for 'Campaign' entry type

## searchProjectCampaign

API to search for entries of type Campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectCampaignRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T17:02:22.015Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-19T01:37:09.736Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T11:11:56.667Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T16:49:39.900Z');
    $request->description = 'minus';
    $request->filesuffix = 'quos';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-23T09:20:28.902Z');
    $request->group = 'odio';
    $request->max = 588662;
    $request->maxlatitude = 9609.33;
    $request->maxlongitude = 455.1;
    $request->minlatitude = 6277.17;
    $request->minlongitude = 1979.82;
    $request->name = 'Ruben Sipes DDS';
    $request->skip = 196700;
    $request->text = 'commodi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T19:53:20.939Z');

    $response = $sdk->typeProjectCampaign->searchProjectCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
