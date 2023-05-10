# typeSlackTeam

## Overview

Search API for 'Slack Team' entry type

### Available Operations

* [searchSlackTeam](#searchslackteam) - Search API for 'Slack Team' entry type

## searchSlackTeam

API to search for entries of type Slack Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchSlackTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSlackTeamRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T12:44:13.413Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T04:06:35.177Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-29T06:19:03.205Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T10:59:52.480Z');
    $request->description = 'occaecati';
    $request->filesuffix = 'itaque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-13T13:30:15.387Z');
    $request->group = 'modi';
    $request->max = 134832;
    $request->maxlatitude = 1297.62;
    $request->maxlongitude = 3804.5;
    $request->minlatitude = 588.08;
    $request->minlongitude = 9104.1;
    $request->name = 'Mr. Robin Dibbert';
    $request->skip = 927754;
    $request->text = 'voluptate';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-01T14:03:59.260Z');

    $response = $sdk->typeSlackTeam->searchSlackTeam($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
