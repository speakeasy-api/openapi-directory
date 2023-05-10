# typeIncident

## Overview

Search API for 'Incident' entry type

### Available Operations

* [searchIncident](#searchincident) - Search API for 'Incident' entry type

## searchIncident

API to search for entries of type Incident

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchIncidentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchIncidentRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T04:06:59.820Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T10:02:26.660Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-02T06:07:32.455Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-12T19:07:29.722Z');
    $request->description = 'distinctio';
    $request->filesuffix = 'eius';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-24T10:43:59.224Z');
    $request->group = 'maiores';
    $request->max = 35160;
    $request->maxlatitude = 3314.52;
    $request->maxlongitude = 9062.32;
    $request->minlatitude = 2060.63;
    $request->minlongitude = 8163.65;
    $request->name = 'Olga Wyman';
    $request->searchIncidentCause = 'delectus';
    $request->searchIncidentIncidenttype = 'velit';
    $request->searchIncidentState = 'vitae';
    $request->skip = 201096;
    $request->text = 'similique';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T17:34:21.100Z');

    $response = $sdk->typeIncident->searchIncident($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
