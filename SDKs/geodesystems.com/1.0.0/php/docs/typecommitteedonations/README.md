# typeCommitteeDonations

## Overview

Search API for 'Committee Donations' entry type

### Available Operations

* [searchCommitteeDonations](#searchcommitteedonations) - Search API for 'Committee Donations' entry type

## searchCommitteeDonations

API to search for entries of type Committee Donations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCommitteeDonationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCommitteeDonationsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-23T08:23:19.189Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-18T03:48:05.478Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T17:35:23.458Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T06:32:28.803Z');
    $request->description = 'quis';
    $request->filesuffix = 'inventore';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T16:13:46.480Z');
    $request->group = 'quae';
    $request->max = 21688;
    $request->maxlatitude = 2419.01;
    $request->maxlongitude = 1372.51;
    $request->minlatitude = 4322.81;
    $request->minlongitude = 2606.28;
    $request->name = 'Wilfred Rutherford';
    $request->searchDbCommitteeDonationsAmount = 4332.79;
    $request->searchDbCommitteeDonationsCity = 'dicta';
    $request->searchDbCommitteeDonationsCommittee = 'minima';
    $request->searchDbCommitteeDonationsDate = 'beatae';
    $request->searchDbCommitteeDonationsEmployer = 'cupiditate';
    $request->searchDbCommitteeDonationsLocation = 'provident';
    $request->searchDbCommitteeDonationsOccupation = 'earum';
    $request->searchDbCommitteeDonationsRecipient = 'soluta';
    $request->searchDbCommitteeDonationsState = 'hic';
    $request->searchDbCommitteeDonationsZipCode = 'illum';
    $request->skip = 52508;
    $request->text = 'earum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-13T02:22:20.450Z');

    $response = $sdk->typeCommitteeDonations->searchCommitteeDonations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
