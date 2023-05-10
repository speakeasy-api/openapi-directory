# typeFtp

## Overview

Search API for 'Remote FTP File View' entry type

### Available Operations

* [searchFtp](#searchftp) - Search API for 'Remote FTP File View' entry type

## searchFtp

API to search for entries of type Remote FTP File View

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFtpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFtpRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-28T18:13:48.502Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T16:24:27.042Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-21T04:17:16.724Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-20T13:08:36.205Z');
    $request->description = 'praesentium';
    $request->filesuffix = 'odit';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T23:12:04.283Z');
    $request->group = 'error';
    $request->max = 937117;
    $request->maxlatitude = 2393.37;
    $request->maxlongitude = 9233.06;
    $request->minlatitude = 6308.71;
    $request->minlongitude = 2828.37;
    $request->name = 'Tim Breitenberg';
    $request->skip = 963198;
    $request->text = 'cupiditate';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-30T10:14:18.921Z');

    $response = $sdk->typeFtp->searchFtp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
