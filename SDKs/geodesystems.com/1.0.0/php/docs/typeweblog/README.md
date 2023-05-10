# typeWeblog

## Overview

Search API for 'Weblog' entry type

### Available Operations

* [searchWeblog](#searchweblog) - Search API for 'Weblog' entry type

## searchWeblog

API to search for entries of type Weblog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchWeblogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchWeblogRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T07:25:29.087Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-17T11:20:49.691Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-03T15:00:45.473Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T20:43:04.085Z');
    $request->description = 'commodi';
    $request->filesuffix = 'a';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T00:06:44.319Z');
    $request->group = 'eum';
    $request->max = 526470;
    $request->maxlatitude = 7129.97;
    $request->maxlongitude = 6562.72;
    $request->minlatitude = 5661.6;
    $request->minlongitude = 1706.72;
    $request->name = 'Katie Raynor';
    $request->skip = 300155;
    $request->text = 'dicta';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-09T21:39:19.685Z');

    $response = $sdk->typeWeblog->searchWeblog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
