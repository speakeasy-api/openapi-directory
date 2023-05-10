# typeProjectContribution

## Overview

Search API for 'Research Contribution' entry type

### Available Operations

* [searchProjectContribution](#searchprojectcontribution) - Search API for 'Research Contribution' entry type

## searchProjectContribution

API to search for entries of type Research Contribution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectContributionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectContributionRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-17T16:33:05.600Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-01T15:19:42.661Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T22:36:08.652Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T01:27:23.704Z');
    $request->description = 'distinctio';
    $request->filesuffix = 'possimus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T21:22:17.518Z');
    $request->group = 'saepe';
    $request->max = 934782;
    $request->maxlatitude = 7998.66;
    $request->maxlongitude = 4695.88;
    $request->minlatitude = 3109.3;
    $request->minlongitude = 2159.59;
    $request->name = 'Myrtle Prohaska';
    $request->skip = 319419;
    $request->text = 'sequi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T10:04:04.820Z');

    $response = $sdk->typeProjectContribution->searchProjectContribution($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
