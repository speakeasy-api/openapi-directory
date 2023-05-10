# typeBoulderCountyVoterDetails

## Overview

Search API for 'Boulder County Voter Details' entry type

### Available Operations

* [searchBoulderCountyVoterDetails](#searchbouldercountyvoterdetails) - Search API for 'Boulder County Voter Details' entry type

## searchBoulderCountyVoterDetails

API to search for entries of type Boulder County Voter Details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulderCountyVoterDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulderCountyVoterDetailsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T12:56:04.738Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T05:25:42.565Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-18T07:12:59.777Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-04T03:42:26.898Z');
    $request->description = 'in';
    $request->filesuffix = 'corporis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-07T14:53:46.338Z');
    $request->group = 'nemo';
    $request->max = 924967;
    $request->maxlatitude = 3975.33;
    $request->maxlongitude = 460.07;
    $request->minlatitude = 7386.83;
    $request->minlongitude = 2326.27;
    $request->name = 'Annette Wehner';
    $request->searchDbBoulderCountyVoterDetailsBirthYear = 985492;
    $request->searchDbBoulderCountyVoterDetailsCityWardDistrict = 'suscipit';
    $request->searchDbBoulderCountyVoterDetailsCongressional = 'reiciendis';
    $request->searchDbBoulderCountyVoterDetailsFirstName = 'quidem';
    $request->searchDbBoulderCountyVoterDetailsGender = 'saepe';
    $request->searchDbBoulderCountyVoterDetailsLastName = 'necessitatibus';
    $request->searchDbBoulderCountyVoterDetailsLastUpdatedDate = 'dolore';
    $request->searchDbBoulderCountyVoterDetailsLocation = 'sunt';
    $request->searchDbBoulderCountyVoterDetailsMailingZipCode = 'asperiores';
    $request->searchDbBoulderCountyVoterDetailsMunicipality = 'adipisci';
    $request->searchDbBoulderCountyVoterDetailsParty = 'non';
    $request->searchDbBoulderCountyVoterDetailsPrecinctCode = 'amet';
    $request->searchDbBoulderCountyVoterDetailsRegistrationDate = 'beatae';
    $request->searchDbBoulderCountyVoterDetailsResidentialAddress = 'dignissimos';
    $request->searchDbBoulderCountyVoterDetailsResidentialCity = 'a';
    $request->searchDbBoulderCountyVoterDetailsSchoolDistrict = 'debitis';
    $request->searchDbBoulderCountyVoterDetailsStateHouse = 'consectetur';
    $request->searchDbBoulderCountyVoterDetailsStateSenate = 'corporis';
    $request->searchDbBoulderCountyVoterDetailsVoterStatus = 'harum';
    $request->skip = 385237;
    $request->text = 'ipsa';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-22T20:57:52.942Z');

    $response = $sdk->typeBoulderCountyVoterDetails->searchBoulderCountyVoterDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
