# typeProjectExperiment

## Overview

Search API for 'Experiment' entry type

### Available Operations

* [searchProjectExperiment](#searchprojectexperiment) - Search API for 'Experiment' entry type

## searchProjectExperiment

API to search for entries of type Experiment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectExperimentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectExperimentRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T12:54:25.927Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T22:47:17.791Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-05T18:33:30.497Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-11T15:48:49.060Z');
    $request->description = 'fugit';
    $request->filesuffix = 'ipsam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T03:34:32.727Z');
    $request->group = 'voluptatum';
    $request->max = 98759;
    $request->maxlatitude = 6225.66;
    $request->maxlongitude = 7486.06;
    $request->minlatitude = 2696;
    $request->minlongitude = 4526.53;
    $request->name = 'Lula Bayer';
    $request->skip = 146583;
    $request->text = 'voluptatem';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-02T02:31:07.352Z');

    $response = $sdk->typeProjectExperiment->searchProjectExperiment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
