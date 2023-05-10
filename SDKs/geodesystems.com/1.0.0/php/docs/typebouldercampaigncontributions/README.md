# typeBoulderCampaignContributions

## Overview

Search API for 'Boulder Campaign Contributions' entry type

### Available Operations

* [searchBoulderCampaignContributions](#searchbouldercampaigncontributions) - Search API for 'Boulder Campaign Contributions' entry type

## searchBoulderCampaignContributions

API to search for entries of type Boulder Campaign Contributions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulderCampaignContributionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulderCampaignContributionsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-21T04:50:55.832Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-07T16:30:09.640Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T23:18:40.855Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T06:58:07.315Z');
    $request->description = 'reprehenderit';
    $request->filesuffix = 'ullam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-26T00:57:43.290Z');
    $request->group = 'voluptatum';
    $request->max = 185232;
    $request->maxlatitude = 8453.58;
    $request->maxlongitude = 4012.59;
    $request->minlatitude = 5362.75;
    $request->minlongitude = 9292.92;
    $request->name = 'Roger Monahan PhD';
    $request->searchDbBoulderCampaignContributionsAmendedDate = 'et';
    $request->searchDbBoulderCampaignContributionsAnonymous = 'voluptate';
    $request->searchDbBoulderCampaignContributionsCandidate = 'ipsa';
    $request->searchDbBoulderCampaignContributionsCity = 'minima';
    $request->searchDbBoulderCampaignContributionsCommittee = 'veritatis';
    $request->searchDbBoulderCampaignContributionsCommitteeNum = 'consectetur';
    $request->searchDbBoulderCampaignContributionsContribution = 2371.73;
    $request->searchDbBoulderCampaignContributionsContributionType = 'iste';
    $request->searchDbBoulderCampaignContributionsFilingDate = 'temporibus';
    $request->searchDbBoulderCampaignContributionsFirstName = 'accusantium';
    $request->searchDbBoulderCampaignContributionsFromCandidate = 'rem';
    $request->searchDbBoulderCampaignContributionsLastName = 'aut';
    $request->searchDbBoulderCampaignContributionsMatch = 5130.75;
    $request->searchDbBoulderCampaignContributionsOfficialFiling = 'eum';
    $request->searchDbBoulderCampaignContributionsState = 'mollitia';
    $request->searchDbBoulderCampaignContributionsStreet = 'ab';
    $request->searchDbBoulderCampaignContributionsTransactionDate = 'corrupti';
    $request->searchDbBoulderCampaignContributionsType = 'non';
    $request->searchDbBoulderCampaignContributionsZip = 'voluptatem';
    $request->skip = 221161;
    $request->text = 'occaecati';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-25T13:15:35.424Z');

    $response = $sdk->typeBoulderCampaignContributions->searchBoulderCampaignContributions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
