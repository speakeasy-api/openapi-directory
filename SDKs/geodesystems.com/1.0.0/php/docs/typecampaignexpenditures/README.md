# typeCampaignExpenditures

## Overview

Search API for 'Campaign Expenditures' entry type

### Available Operations

* [searchCampaignExpenditures](#searchcampaignexpenditures) - Search API for 'Campaign Expenditures' entry type

## searchCampaignExpenditures

API to search for entries of type Campaign Expenditures

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCampaignExpendituresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCampaignExpendituresRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T20:33:50.122Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-27T07:55:22.584Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-11T18:23:46.078Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T12:36:43.531Z');
    $request->description = 'est';
    $request->filesuffix = 'quidem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-10T00:10:29.953Z');
    $request->group = 'fuga';
    $request->max = 509807;
    $request->maxlatitude = 6485.98;
    $request->maxlongitude = 3339.65;
    $request->minlatitude = 291;
    $request->minlongitude = 7908.4;
    $request->name = 'Ryan Littel';
    $request->searchDbCampaignExpendituresAmount = 5199.52;
    $request->searchDbCampaignExpendituresCity = 'suscipit';
    $request->searchDbCampaignExpendituresCommittee = 'quidem';
    $request->searchDbCampaignExpendituresLocation = 'maxime';
    $request->searchDbCampaignExpendituresMemoText = 'et';
    $request->searchDbCampaignExpendituresParty = 'esse';
    $request->searchDbCampaignExpendituresPurpose = 'amet';
    $request->searchDbCampaignExpendituresRecipient = 'assumenda';
    $request->searchDbCampaignExpendituresState = 'ea';
    $request->searchDbCampaignExpendituresTransactionDate = 'atque';
    $request->searchDbCampaignExpendituresZipCode = 'error';
    $request->skip = 887265;
    $request->text = 'officiis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-22T09:14:53.307Z');

    $response = $sdk->typeCampaignExpenditures->searchCampaignExpenditures($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
