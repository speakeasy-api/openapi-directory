# dates

## Overview

Reporting deadlines, election dates FEC meetings, events etc.

### Available Operations

* [getCalendarDates](#getcalendardates) - 
Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.

* [getCalendarDatesExport](#getcalendardatesexport) - 
Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.


* [getElectionDates](#getelectiondates) - 
FEC election dates since 1995.

* [getReportingDates](#getreportingdates) - 
FEC election dates since 1995.


## getCalendarDates


Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarDatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalendarDatesRequest();
    $request->apiKey = 'minima';
    $request->calendarCategoryId = [
        952871,
    ];
    $request->description = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->eventId = 770581;
    $request->maxEndDate = DateTime::createFromFormat('Y-m-d', '2022-11-08');
    $request->maxStartDate = DateTime::createFromFormat('Y-m-d', '2022-10-05');
    $request->minEndDate = DateTime::createFromFormat('Y-m-d', '2022-11-29');
    $request->minStartDate = DateTime::createFromFormat('Y-m-d', '2021-08-28');
    $request->page = 810424;
    $request->perPage = 245367;
    $request->sort = 'eum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->summary = [
        'nobis',
        'quas',
    ];

    $response = $sdk->dates->getCalendarDates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalendarDatesExport


Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarDatesExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCalendarDatesExportRendererEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalendarDatesExportRequest();
    $request->apiKey = 'assumenda';
    $request->calendarCategoryId = [
        379034,
        727044,
        96549,
        270328,
    ];
    $request->description = [
        'explicabo',
        'provident',
    ];
    $request->eventId = 55374;
    $request->maxEndDate = DateTime::createFromFormat('Y-m-d', '2022-09-12');
    $request->maxStartDate = DateTime::createFromFormat('Y-m-d', '2022-09-27');
    $request->minEndDate = DateTime::createFromFormat('Y-m-d', '2022-07-18');
    $request->minStartDate = DateTime::createFromFormat('Y-m-d', '2021-08-20');
    $request->page = 442015;
    $request->perPage = 695626;
    $request->renderer = GetCalendarDatesExportRendererEnum::CSV;
    $request->sort = 'ut';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->summary = [
        'suscipit',
        'assumenda',
    ];

    $response = $sdk->dates->getCalendarDatesExport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElectionDates


FEC election dates since 1995.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionDatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionDatesOfficeSoughtEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectionDatesRequest();
    $request->apiKey = 'eos';
    $request->electionDistrict = [
        'quisquam',
        'veritatis',
        'ipsa',
    ];
    $request->electionParty = [
        'quidem',
        'neque',
        'quo',
    ];
    $request->electionState = [
        'quo',
        'fuga',
        'eius',
        'eos',
    ];
    $request->electionTypeId = [
        'ab',
        'cupiditate',
    ];
    $request->electionYear = [
        'tempora',
    ];
    $request->maxCreateDate = DateTime::createFromFormat('Y-m-d', '2021-11-20');
    $request->maxElectionDate = DateTime::createFromFormat('Y-m-d', '2022-10-21');
    $request->maxPrimaryGeneralDate = DateTime::createFromFormat('Y-m-d', '2021-08-15');
    $request->maxUpdateDate = DateTime::createFromFormat('Y-m-d', '2022-11-13');
    $request->minCreateDate = DateTime::createFromFormat('Y-m-d', '2021-05-27');
    $request->minElectionDate = DateTime::createFromFormat('Y-m-d', '2022-12-03');
    $request->minPrimaryGeneralDate = DateTime::createFromFormat('Y-m-d', '2022-06-25');
    $request->minUpdateDate = DateTime::createFromFormat('Y-m-d', '2022-01-30');
    $request->officeSought = [
        GetElectionDatesOfficeSoughtEnum::S,
        GetElectionDatesOfficeSoughtEnum::S,
    ];
    $request->page = 959434;
    $request->perPage = 174112;
    $request->sort = 'deserunt';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->dates->getElectionDates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportingDates


FEC election dates since 1995.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportingDatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportingDatesRequest();
    $request->apiKey = 'molestiae';
    $request->maxCreateDate = DateTime::createFromFormat('Y-m-d', '2022-03-20');
    $request->maxDueDate = DateTime::createFromFormat('Y-m-d', '2022-06-11');
    $request->maxUpdateDate = DateTime::createFromFormat('Y-m-d', '2022-09-06');
    $request->minCreateDate = DateTime::createFromFormat('Y-m-d', '2022-09-18');
    $request->minDueDate = DateTime::createFromFormat('Y-m-d', '2021-09-13');
    $request->minUpdateDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->page = 128860;
    $request->perPage = 325685;
    $request->reportType = [
        'fugit',
        'sapiente',
    ];
    $request->reportYear = [
        187131,
    ];
    $request->sort = 'explicabo';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->dates->getReportingDates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
