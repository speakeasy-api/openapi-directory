# typeCampaignDonors

## Overview

Search API for 'Campaign Donors' entry type

### Available Operations

* [searchCampaignDonors](#searchcampaigndonors) - Search API for 'Campaign Donors' entry type

## searchCampaignDonors

API to search for entries of type Campaign Donors

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCampaignDonorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCampaignDonorsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T21:25:01.550Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-31T10:53:55.286Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-29T02:56:05.947Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T23:19:52.079Z');
    $request->description = 'sit';
    $request->filesuffix = 'voluptatum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-26T20:36:25.696Z');
    $request->group = 'corporis';
    $request->max = 89494;
    $request->maxlatitude = 5027.1;
    $request->maxlongitude = 4059.42;
    $request->minlatitude = 1536.27;
    $request->minlongitude = 243.13;
    $request->name = 'Bernice Ullrich II';
    $request->searchDbCampaignDonorsAmount = 9688.65;
    $request->searchDbCampaignDonorsCity = 'dolorem';
    $request->searchDbCampaignDonorsCommittee = 'harum';
    $request->searchDbCampaignDonorsDate = 'dicta';
    $request->searchDbCampaignDonorsDonor = 'architecto';
    $request->searchDbCampaignDonorsEmployer = 'occaecati';
    $request->searchDbCampaignDonorsGender = 'labore';
    $request->searchDbCampaignDonorsLocation = 'quidem';
    $request->searchDbCampaignDonorsOccupation = 'atque';
    $request->searchDbCampaignDonorsParty = 'laborum';
    $request->searchDbCampaignDonorsState = 'nam';
    $request->searchDbCampaignDonorsZipCode = 'tenetur';
    $request->skip = 388867;
    $request->text = 'alias';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T18:33:26.033Z');

    $response = $sdk->typeCampaignDonors->searchCampaignDonors($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
