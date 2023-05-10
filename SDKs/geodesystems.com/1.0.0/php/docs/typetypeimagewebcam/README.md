# typeTypeImageWebcam

## Overview

Search API for 'Webcam' entry type

### Available Operations

* [searchTypeImageWebcam](#searchtypeimagewebcam) - Search API for 'Webcam' entry type

## searchTypeImageWebcam

API to search for entries of type Webcam

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeImageWebcamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeImageWebcamRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T06:45:24.040Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T09:49:01.076Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-25T17:55:29.855Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-26T17:01:48.086Z');
    $request->description = 'minus';
    $request->filesuffix = 'officia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T19:36:19.333Z');
    $request->group = 'cupiditate';
    $request->max = 83578;
    $request->maxlatitude = 3042;
    $request->maxlongitude = 5682.31;
    $request->minlatitude = 5410.46;
    $request->minlongitude = 1166.65;
    $request->name = 'Laura Ritchie';
    $request->skip = 978113;
    $request->text = 'delectus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-04T18:39:29.554Z');

    $response = $sdk->typeTypeImageWebcam->searchTypeImageWebcam($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
