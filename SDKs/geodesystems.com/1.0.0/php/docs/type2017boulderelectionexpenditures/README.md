# type2017BoulderElectionExpenditures

## Overview

Search API for '2017 Boulder Election Expenditures' entry type

### Available Operations

* [search2017BoulderElectionExpenditures](#search2017boulderelectionexpenditures) - Search API for '2017 Boulder Election Expenditures' entry type

## search2017BoulderElectionExpenditures

API to search for entries of type 2017 Boulder Election Expenditures

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Search2017BoulderElectionExpendituresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Search2017BoulderElectionExpendituresRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-22T12:08:58.275Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-26T09:37:56.283Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T09:35:47.986Z');
    $request->description = 'debitis';
    $request->filesuffix = 'ipsa';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-08T10:35:32.561Z');
    $request->group = 'suscipit';
    $request->max = 477665;
    $request->maxlatitude = 7917.25;
    $request->maxlongitude = 8121.69;
    $request->minlatitude = 5288.95;
    $request->minlongitude = 4799.77;
    $request->name = 'Charlie Walsh II';
    $request->searchDb2017BoulderElectionExpendituresCity = 'veritatis';
    $request->searchDb2017BoulderElectionExpendituresCommittee = 'deserunt';
    $request->searchDb2017BoulderElectionExpendituresExpenditure = 202.18;
    $request->searchDb2017BoulderElectionExpendituresName = 'ipsam';
    $request->searchDb2017BoulderElectionExpendituresPurpose = 'repellendus';
    $request->searchDb2017BoulderElectionExpendituresState = 'sapiente';
    $request->searchDb2017BoulderElectionExpendituresStreet = 'quo';
    $request->searchDb2017BoulderElectionExpendituresTransactionDate = 'odit';
    $request->searchDb2017BoulderElectionExpendituresZip = 'at';
    $request->skip = 870088;
    $request->text = 'maiores';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T07:22:15.330Z');

    $response = $sdk->type2017BoulderElectionExpenditures->search2017BoulderElectionExpenditures($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
