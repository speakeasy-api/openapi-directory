# typeBolderRentalHousing

## Overview

Search API for 'Boulder Rental Housing' entry type

### Available Operations

* [searchBolderRentalHousing](#searchbolderrentalhousing) - Search API for 'Boulder Rental Housing' entry type

## searchBolderRentalHousing

API to search for entries of type Boulder Rental Housing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBolderRentalHousingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBolderRentalHousingRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-28T09:43:20.644Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-07T07:44:57.988Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T12:04:26.954Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-30T16:20:53.400Z');
    $request->description = 'assumenda';
    $request->filesuffix = 'nulla';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T15:05:31.822Z');
    $request->group = 'quasi';
    $request->max = 270328;
    $request->maxlatitude = 2561.39;
    $request->maxlongitude = 1314.82;
    $request->minlatitude = 5919.35;
    $request->minlongitude = 553.74;
    $request->name = 'Megan Kuhlman';
    $request->searchDbBolderRentalHousingBldgtype = 'esse';
    $request->searchDbBolderRentalHousingCompany = 'rem';
    $request->searchDbBolderRentalHousingComplexnm = 'fuga';
    $request->searchDbBolderRentalHousingDwellunits = 442015;
    $request->searchDbBolderRentalHousingEngcompl = 'quidem';
    $request->searchDbBolderRentalHousingLicenseexp = 'fugiat';
    $request->searchDbBolderRentalHousingLicensenum = 'ut';
    $request->searchDbBolderRentalHousingLocation = 'eum';
    $request->searchDbBolderRentalHousingName = 'suscipit';
    $request->searchDbBolderRentalHousingNeighbrhd = 'assumenda';
    $request->searchDbBolderRentalHousingPerson1 = 'eos';
    $request->searchDbBolderRentalHousingPerson2 = 'praesentium';
    $request->searchDbBolderRentalHousingPersontype = 'quisquam';
    $request->searchDbBolderRentalHousingPpl1Coname = 'veritatis';
    $request->searchDbBolderRentalHousingPpl1Role = 'ipsa';
    $request->searchDbBolderRentalHousingPpl2Coname = 'id';
    $request->searchDbBolderRentalHousingPpl2Role = 'quidem';
    $request->searchDbBolderRentalHousingPropaddr1 = 'neque';
    $request->searchDbBolderRentalHousingRentaltype = 'quo';
    $request->searchDbBolderRentalHousingRoomunits = 847276;
    $request->skip = 777408;
    $request->text = 'fuga';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T21:30:06.318Z');

    $response = $sdk->typeBolderRentalHousing->searchBolderRentalHousing($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
