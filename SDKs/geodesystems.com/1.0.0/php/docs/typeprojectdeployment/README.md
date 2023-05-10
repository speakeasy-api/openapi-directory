# typeProjectDeployment

## Overview

Search API for 'Deployment' entry type

### Available Operations

* [searchProjectDeployment](#searchprojectdeployment) - Search API for 'Deployment' entry type

## searchProjectDeployment

API to search for entries of type Deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectDeploymentRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T08:36:06.296Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T05:45:35.035Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T16:35:15.259Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-01T13:15:33.537Z');
    $request->description = 'similique';
    $request->filesuffix = 'porro';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-25T18:39:10.695Z');
    $request->group = 'cumque';
    $request->max = 743795;
    $request->maxlatitude = 8565.68;
    $request->maxlongitude = 3892.87;
    $request->minlatitude = 7203.19;
    $request->minlongitude = 3153.87;
    $request->name = 'Jeffery Tromp';
    $request->skip = 29080;
    $request->text = 'provident';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-19T11:49:13.655Z');

    $response = $sdk->typeProjectDeployment->searchProjectDeployment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
