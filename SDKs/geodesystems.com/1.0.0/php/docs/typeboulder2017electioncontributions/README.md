# typeBoulder2017ElectionContributions

## Overview

Search API for 'Boulder 2017 Election Contributions' entry type

### Available Operations

* [searchBoulder2017ElectionContributions](#searchboulder2017electioncontributions) - Search API for 'Boulder 2017 Election Contributions' entry type

## searchBoulder2017ElectionContributions

API to search for entries of type Boulder 2017 Election Contributions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulder2017ElectionContributionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulder2017ElectionContributionsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T08:37:36.325Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-16T01:55:06.595Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T01:23:58.638Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T10:26:44.811Z');
    $request->description = 'minus';
    $request->filesuffix = 'quaerat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T00:17:42.407Z');
    $request->group = 'esse';
    $request->max = 503427;
    $request->maxlatitude = 5909.84;
    $request->maxlongitude = 9537.22;
    $request->minlatitude = 8577.23;
    $request->minlongitude = 5578.11;
    $request->name = 'Joyce Wilderman';
    $request->searchDbBoulder2017ElectionContributionsAmount = 8630.23;
    $request->searchDbBoulder2017ElectionContributionsCity = 'possimus';
    $request->searchDbBoulder2017ElectionContributionsCommittee = 'quia';
    $request->searchDbBoulder2017ElectionContributionsContributionType = 'eveniet';
    $request->searchDbBoulder2017ElectionContributionsDate = 'asperiores';
    $request->searchDbBoulder2017ElectionContributionsFirstName = 'facere';
    $request->searchDbBoulder2017ElectionContributionsFromCandidate = 'veritatis';
    $request->searchDbBoulder2017ElectionContributionsLastName = 'consequuntur';
    $request->searchDbBoulder2017ElectionContributionsLocation = 'quasi';
    $request->searchDbBoulder2017ElectionContributionsMatchAmount = 6288.99;
    $request->searchDbBoulder2017ElectionContributionsState = 'culpa';
    $request->searchDbBoulder2017ElectionContributionsStreet = 'aliquid';
    $request->searchDbBoulder2017ElectionContributionsYtdAmount = 9492.98;
    $request->searchDbBoulder2017ElectionContributionsZip = 'quae';
    $request->skip = 936747;
    $request->text = 'vel';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-28T13:55:38.564Z');

    $response = $sdk->typeBoulder2017ElectionContributions->searchBoulder2017ElectionContributions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
