# receipts

## Overview

This collection of endpoints includes Schedule A records reported by a committee. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from individuals, use the /schedules/schedule_a/ endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 

 

 

 Schedule A is also available as a database dump file that is updated weekly on Sunday. The database dump files are here: https://www.fec.gov/files/bulk-downloads/index.html?prefix=bulk-downloads/data-dump/schedules/. The instructions are here: https://www.fec.gov/files//bulk-downloads/data-dump/schedules/README.txt. We cannot provide help with restoring the database dump files, but you can refer to this community led [group](https://groups.google.com/forum/#!forum/fec-data) for discussion.

### Available Operations

* [getSchedulesScheduleA](#getschedulesschedulea) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.


* [getSchedulesScheduleAByEmployer](#getschedulesscheduleabyemployer) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByOccupation](#getschedulesscheduleabyoccupation) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleABySize](#getschedulesscheduleabysize) - 
This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.

* [getSchedulesScheduleABySizeByCandidate](#getschedulesscheduleabysizebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByState](#getschedulesscheduleabystate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByStateByCandidate](#getschedulesscheduleabystatebycandidate) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByStateByCandidateTotals](#getschedulesscheduleabystatebycandidatetotals) - 
Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


* [getSchedulesScheduleAByStateTotals](#getschedulesscheduleabystatetotals) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAByZip](#getschedulesscheduleabyzip) - 
This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.

* [getSchedulesScheduleAEfile](#getschedulesscheduleaefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleASubId](#getschedulesscheduleasubid) - 
This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



## getSchedulesScheduleA


This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleARequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAContributorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleARecipientCommitteeDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleARecipientCommitteeOrgTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleARecipientCommitteeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleARequest();
    $request->apiKey = 'aspernatur';
    $request->committeeId = [
        'expedita',
        'quas',
        'provident',
    ];
    $request->contributorCity = [
        'rerum',
        'dignissimos',
        'corporis',
        'vero',
    ];
    $request->contributorEmployer = [
        'repellendus',
        'iure',
        'dolorem',
    ];
    $request->contributorId = [
        'impedit',
        'commodi',
    ];
    $request->contributorName = [
        'voluptatem',
    ];
    $request->contributorOccupation = [
        'quae',
        'amet',
    ];
    $request->contributorState = [
        'praesentium',
        'quidem',
        'cum',
        'amet',
    ];
    $request->contributorType = [
        GetSchedulesScheduleAContributorTypeEnum::INDIVIDUAL,
    ];
    $request->contributorZip = [
        'doloremque',
        'earum',
        'iusto',
    ];
    $request->imageNumber = [
        'provident',
    ];
    $request->isIndividual = false;
    $request->lastContributionReceiptAmount = 6771.41;
    $request->lastContributionReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-03-22');
    $request->lastIndex = 920272;
    $request->lineNumber = 'consequatur';
    $request->maxAmount = 'nemo';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-01-26');
    $request->maxImageNumber = 'facilis';
    $request->maxLoadDate = DateTime::createFromFormat('Y-m-d', '2022-11-29');
    $request->minAmount = 'sint';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-06-19');
    $request->minImageNumber = 'totam';
    $request->minLoadDate = DateTime::createFromFormat('Y-m-d', '2022-12-20');
    $request->perPage = 244376;
    $request->recipientCommitteeDesignation = [
        GetSchedulesScheduleARecipientCommitteeDesignationEnum::UNKNOWN,
    ];
    $request->recipientCommitteeOrgType = [
        GetSchedulesScheduleARecipientCommitteeOrgTypeEnum::C,
        GetSchedulesScheduleARecipientCommitteeOrgTypeEnum::T,
        GetSchedulesScheduleARecipientCommitteeOrgTypeEnum::M,
        GetSchedulesScheduleARecipientCommitteeOrgTypeEnum::UNKNOWN,
    ];
    $request->recipientCommitteeType = [
        GetSchedulesScheduleARecipientCommitteeTypeEnum::H,
        GetSchedulesScheduleARecipientCommitteeTypeEnum::W,
        GetSchedulesScheduleARecipientCommitteeTypeEnum::O,
        GetSchedulesScheduleARecipientCommitteeTypeEnum::UNKNOWN,
    ];
    $request->sort = 'perferendis';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->twoYearTransactionPeriod = [
        411615,
        46791,
        489459,
    ];

    $response = $sdk->receipts->getSchedulesScheduleA($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByEmployer


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByEmployerRequest();
    $request->apiKey = 'repellat';
    $request->committeeId = [
        'porro',
    ];
    $request->cycle = [
        231382,
        753240,
        490110,
    ];
    $request->employer = [
        'soluta',
    ];
    $request->page = 620500;
    $request->perPage = 839807;
    $request->sort = 'officia';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleAByEmployer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByOccupation


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByOccupationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByOccupationRequest();
    $request->apiKey = 'amet';
    $request->committeeId = [
        'aspernatur',
        'quo',
        'itaque',
        'illum',
    ];
    $request->cycle = [
        490420,
        876285,
        185348,
    ];
    $request->occupation = [
        'repellat',
    ];
    $request->page = 128696;
    $request->perPage = 129355;
    $request->sort = 'exercitationem';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleAByOccupation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleABySize


This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleABySizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleABySizeSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleABySizeRequest();
    $request->apiKey = 'nihil';
    $request->committeeId = [
        'ab',
        'illo',
    ];
    $request->cycle = [
        644479,
        964925,
        251212,
        719389,
    ];
    $request->page = 450224;
    $request->perPage = 349993;
    $request->size = [
        GetSchedulesScheduleABySizeSizeEnum::TWO_HUNDRED,
        GetSchedulesScheduleABySizeSizeEnum::TWO_THOUSAND,
    ];
    $request->sort = 'modi';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleABySize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleABySizeByCandidate


This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleABySizeByCandidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleABySizeByCandidateRequest();
    $request->apiKey = 'in';
    $request->candidateId = [
        'accusamus',
    ];
    $request->cycle = [
        44016,
        141817,
        535802,
    ];
    $request->electionFull = false;
    $request->page = 316730;
    $request->perPage = 452730;
    $request->sort = 'similique';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleABySizeByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByState


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByStateRequest();
    $request->apiKey = 'minima';
    $request->committeeId = [
        'magnam',
        'sit',
        'modi',
    ];
    $request->cycle = [
        199529,
        652125,
    ];
    $request->hideNull = false;
    $request->page = 492632;
    $request->perPage = 853246;
    $request->sort = 'nostrum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'veniam',
        'reiciendis',
    ];

    $response = $sdk->receipts->getSchedulesScheduleAByState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByStateByCandidate


This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByStateByCandidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByStateByCandidateRequest();
    $request->apiKey = 'ab';
    $request->candidateId = [
        'aut',
        'aut',
    ];
    $request->cycle = [
        483753,
        413758,
        256114,
        677045,
    ];
    $request->electionFull = false;
    $request->page = 823718;
    $request->perPage = 452399;
    $request->sort = 'consectetur';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleAByStateByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByStateByCandidateTotals


Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByStateByCandidateTotalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByStateByCandidateTotalsRequest();
    $request->apiKey = 'nesciunt';
    $request->candidateId = [
        'itaque',
        'minus',
    ];
    $request->cycle = [
        715143,
    ];
    $request->electionFull = false;
    $request->page = 481375;
    $request->perPage = 558051;
    $request->sort = 'et';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleAByStateByCandidateTotals($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByStateTotals


This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByStateTotalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByStateTotalsRequest();
    $request->apiKey = 'facilis';
    $request->committeeType = [
        'autem',
    ];
    $request->cycle = [
        5310,
        526413,
        11355,
    ];
    $request->page = 550055;
    $request->perPage = 511222;
    $request->sort = 'repellendus';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'quae',
    ];

    $response = $sdk->receipts->getSchedulesScheduleAByStateTotals($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAByZip


This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAByZipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAByZipRequest();
    $request->apiKey = 'eaque';
    $request->committeeId = [
        'delectus',
        'mollitia',
        'nulla',
        'officia',
    ];
    $request->cycle = [
        30208,
    ];
    $request->page = 664;
    $request->perPage = 910073;
    $request->sort = 'hic';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'incidunt',
    ];
    $request->zip = [
        'qui',
    ];

    $response = $sdk->receipts->getSchedulesScheduleAByZip($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleAEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleAEfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleAEfileRequest();
    $request->apiKey = 'necessitatibus';
    $request->committeeId = [
        'explicabo',
        'beatae',
        'aliquid',
    ];
    $request->contributorCity = [
        'optio',
        'voluptatibus',
    ];
    $request->contributorEmployer = [
        'officia',
        'libero',
        'totam',
    ];
    $request->contributorName = [
        'aliquid',
    ];
    $request->contributorOccupation = [
        'impedit',
        'ducimus',
    ];
    $request->contributorState = [
        'velit',
    ];
    $request->imageNumber = [
        'repellat',
        'nulla',
        'laborum',
        'natus',
    ];
    $request->lineNumber = 'accusamus';
    $request->maxAmount = 'doloremque';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-04-20');
    $request->maxImageNumber = 'recusandae';
    $request->minAmount = 'voluptates';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-06-23');
    $request->minImageNumber = 'quia';
    $request->page = 354225;
    $request->perPage = 786860;
    $request->sort = 'dicta';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->receipts->getSchedulesScheduleAEfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleASubId


This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/). 
​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleASubIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleASubIdContributorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleASubIdRequest();
    $request->apiKey = 'voluptatibus';
    $request->committeeId = [
        'quae',
        'officiis',
        'architecto',
        'architecto',
    ];
    $request->contributorCity = [
        'optio',
        'rem',
    ];
    $request->contributorEmployer = [
        'facilis',
    ];
    $request->contributorId = [
        'a',
        'iste',
        'dicta',
        'quos',
    ];
    $request->contributorName = [
        'dolore',
        'modi',
    ];
    $request->contributorOccupation = [
        'maxime',
        'modi',
        'consequuntur',
        'assumenda',
    ];
    $request->contributorState = [
        'doloribus',
        'impedit',
        'porro',
        'accusamus',
    ];
    $request->contributorType = [
        GetSchedulesScheduleASubIdContributorTypeEnum::COMMITTEE,
        GetSchedulesScheduleASubIdContributorTypeEnum::INDIVIDUAL,
        GetSchedulesScheduleASubIdContributorTypeEnum::COMMITTEE,
    ];
    $request->contributorZip = [
        'esse',
        'iure',
    ];
    $request->imageNumber = [
        'nesciunt',
        'debitis',
    ];
    $request->isIndividual = false;
    $request->lastContributionReceiptAmount = 4235.88;
    $request->lastContributionReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-08-23');
    $request->lastIndex = 375350;
    $request->lineNumber = 'consequuntur';
    $request->maxAmount = 'officia';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-04-14');
    $request->maxImageNumber = 'eius';
    $request->maxLoadDate = DateTime::createFromFormat('Y-m-d', '2022-06-24');
    $request->minAmount = 'maiores';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-09-02');
    $request->minImageNumber = 'saepe';
    $request->minLoadDate = DateTime::createFromFormat('Y-m-d', '2022-03-09');
    $request->perPage = 307173;
    $request->recipientCommitteeDesignation = [
        GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum::D,
        GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum::B,
        GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum::U,
    ];
    $request->recipientCommitteeOrgType = [
        GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum::C,
        GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum::UNKNOWN,
        GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum::C,
        GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum::T,
    ];
    $request->recipientCommitteeType = [
        GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum::Z,
    ];
    $request->sort = 'nemo';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->subId = 'doloribus';
    $request->twoYearTransactionPeriod = [
        603323,
        275425,
        128021,
        368491,
    ];

    $response = $sdk->receipts->getSchedulesScheduleASubId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
