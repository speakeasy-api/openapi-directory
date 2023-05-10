# disbursements

## Overview

Schedule B filings describe itemized disbursements. This data explains how committees and other filers spend their money. These figures are reported as part of forms F3, F3X and F3P.

### Available Operations

* [getSchedulesScheduleB](#getschedulesscheduleb) - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [getSchedulesScheduleBByPurpose](#getschedulesschedulebbypurpose) - 
Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.

* [getSchedulesScheduleBByRecipient](#getschedulesschedulebbyrecipient) - 
Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.

* [getSchedulesScheduleBByRecipientId](#getschedulesschedulebbyrecipientid) - 
Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.

* [getSchedulesScheduleBEfile](#getschedulesschedulebefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleBSubId](#getschedulesschedulebsubid) - 
Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


## getSchedulesScheduleB


Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSpenderCommitteeDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSpenderCommitteeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleBRequest();
    $request->apiKey = 'a';
    $request->committeeId = [
        'sint',
        'pariatur',
        'possimus',
    ];
    $request->disbursementDescription = [
        'eveniet',
    ];
    $request->disbursementPurposeCategory = [
        'facere',
        'veritatis',
        'consequuntur',
        'quasi',
    ];
    $request->imageNumber = [
        'culpa',
        'aliquid',
        'tenetur',
    ];
    $request->lastDisbursementAmount = 627.13;
    $request->lastDisbursementDate = DateTime::createFromFormat('Y-m-d', '2021-09-23');
    $request->lastIndex = 447378;
    $request->lineNumber = 'eius';
    $request->maxAmount = 'libero';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2020-10-10');
    $request->maxImageNumber = 'accusantium';
    $request->minAmount = 'aliquam';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-08-22');
    $request->minImageNumber = 'ullam';
    $request->perPage = 443879;
    $request->recipientCity = [
        'nisi',
        'aut',
    ];
    $request->recipientCommitteeId = [
        'qui',
        'quibusdam',
        'ex',
    ];
    $request->recipientName = [
        'itaque',
        'dolorum',
        'architecto',
    ];
    $request->recipientState = [
        'tenetur',
        'quasi',
        'at',
    ];
    $request->sort = 'et';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->spenderCommitteeDesignation = [
        GetSchedulesScheduleBSpenderCommitteeDesignationEnum::UNKNOWN,
        GetSchedulesScheduleBSpenderCommitteeDesignationEnum::J,
    ];
    $request->spenderCommitteeOrgType = [
        GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum::C,
    ];
    $request->spenderCommitteeType = [
        GetSchedulesScheduleBSpenderCommitteeTypeEnum::S,
    ];
    $request->twoYearTransactionPeriod = [
        33074,
        522371,
        15606,
        513075,
    ];

    $response = $sdk->disbursements->getSchedulesScheduleB($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleBByPurpose


Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBByPurposeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleBByPurposeRequest();
    $request->apiKey = 'eum';
    $request->committeeId = [
        'ab',
        'corrupti',
        'non',
    ];
    $request->cycle = [
        221161,
    ];
    $request->page = 580152;
    $request->perPage = 253191;
    $request->purpose = [
        'explicabo',
        'voluptas',
        'aut',
        'dignissimos',
    ];
    $request->sort = 'dicta';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->disbursements->getSchedulesScheduleBByPurpose($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleBByRecipient


Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBByRecipientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleBByRecipientRequest();
    $request->apiKey = 'maiores';
    $request->committeeId = [
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->cycle = [
        45659,
        409054,
        310067,
        162954,
    ];
    $request->page = 831520;
    $request->perPage = 638762;
    $request->recipientName = [
        'dignissimos',
        'officia',
        'asperiores',
        'nemo',
    ];
    $request->sort = 'quae';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->disbursements->getSchedulesScheduleBByRecipient($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleBByRecipientId


Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBByRecipientIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleBByRecipientIdRequest();
    $request->apiKey = 'quaerat';
    $request->committeeId = [
        'quod',
        'labore',
        'ab',
        'adipisci',
    ];
    $request->cycle = [
        662505,
        380729,
        246063,
    ];
    $request->page = 633931;
    $request->perPage = 665859;
    $request->recipientId = [
        'totam',
        'fugiat',
        'vel',
        'ducimus',
    ];
    $request->sort = 'quos';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->disbursements->getSchedulesScheduleBByRecipientId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleBEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBEfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleBEfileRequest();
    $request->apiKey = 'vel';
    $request->committeeId = [
        'possimus',
        'facilis',
    ];
    $request->disbursementDescription = [
        'commodi',
        'in',
        'corporis',
    ];
    $request->imageNumber = [
        'assumenda',
        'nemo',
        'recusandae',
        'aliquid',
    ];
    $request->maxAmount = 'aperiam';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-07-15');
    $request->minAmount = 'in';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-01-23');
    $request->page = 814967;
    $request->perPage = 257233;
    $request->recipientCity = [
        'suscipit',
        'reiciendis',
        'quidem',
        'saepe',
    ];
    $request->recipientState = [
        'dolore',
        'sunt',
        'asperiores',
        'adipisci',
    ];
    $request->sort = 'non';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->disbursements->getSchedulesScheduleBEfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleBSubId


Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSubIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleBSubIdRequest();
    $request->apiKey = 'amet';
    $request->committeeId = [
        'dignissimos',
    ];
    $request->disbursementDescription = [
        'debitis',
        'consectetur',
        'corporis',
        'harum',
    ];
    $request->disbursementPurposeCategory = [
        'ipsa',
        'voluptates',
    ];
    $request->imageNumber = [
        'vitae',
        'accusamus',
        'similique',
    ];
    $request->lastDisbursementAmount = 2724.37;
    $request->lastDisbursementDate = DateTime::createFromFormat('Y-m-d', '2022-08-15');
    $request->lastIndex = 374244;
    $request->lineNumber = 'voluptas';
    $request->maxAmount = 'minima';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-08-22');
    $request->maxImageNumber = 'adipisci';
    $request->minAmount = 'minus';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-07-01');
    $request->minImageNumber = 'in';
    $request->perPage = 296242;
    $request->recipientCity = [
        'officiis',
        'temporibus',
    ];
    $request->recipientCommitteeId = [
        'adipisci',
        'cum',
    ];
    $request->recipientName = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->recipientState = [
        'corrupti',
        'pariatur',
        'totam',
    ];
    $request->sort = 'hic';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->spenderCommitteeDesignation = [
        GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum::B,
        GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum::UNKNOWN,
    ];
    $request->spenderCommitteeOrgType = [
        GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum::C,
        GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum::W,
        GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum::UNKNOWN,
    ];
    $request->spenderCommitteeType = [
        GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum::V,
        GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum::O,
        GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum::V,
        GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum::C,
    ];
    $request->subId = 'iste';
    $request->twoYearTransactionPeriod = [
        671907,
        152354,
    ];

    $response = $sdk->disbursements->getSchedulesScheduleBSubId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
