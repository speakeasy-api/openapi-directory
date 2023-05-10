# aggregated

### Available Operations

* [aggregatedGetConversionsSummary](#aggregatedgetconversionssummary) - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* [aggregatedGetDatapointsSummary](#aggregatedgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [aggregatedGetGroupsSummary](#aggregatedgetgroupssummary) - Retrieve statistics about a subset of groups for a timeframe with groups data
* [aggregatedGetStatisticsList](#aggregatedgetstatisticslist) - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* [aggregatedGetStatisticsSingle](#aggregatedgetstatisticssingle) - Retrieve statistics about this customer for a timeframe

## aggregatedGetConversionsSummary

Retrieve statistics about a subset of conversions for a timeframe with conversions data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummarySortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummaryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetConversionsSummaryTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AggregatedGetConversionsSummaryRequest();
    $request->fromDay = 'distinctio';
    $request->limit = 990339;
    $request->offset = 469497;
    $request->sortBy = 'ipsum';
    $request->sortDirection = AggregatedGetConversionsSummarySortDirectionEnum::ASC;
    $request->status = AggregatedGetConversionsSummaryStatusEnum::ACTIVE;
    $request->textSearch = 'saepe';
    $request->timeFrame = AggregatedGetConversionsSummaryTimeFrameEnum::LAST30;
    $request->toDay = 'aspernatur';

    $response = $sdk->aggregated->aggregatedGetConversionsSummary($request);

    if ($response->apiCoreDtoAggregatedAggregatedSummaryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## aggregatedGetDatapointsSummary

Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetDatapointsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetDatapointsSummarySortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetDatapointsSummaryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetDatapointsSummaryTimeFrameEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetDatapointsSummaryTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AggregatedGetDatapointsSummaryRequest();
    $request->favourite = false;
    $request->fromDay = 'perferendis';
    $request->groupId = 229219;
    $request->limit = 758379;
    $request->offset = 881586;
    $request->sortBy = 'ad';
    $request->sortDirection = AggregatedGetDatapointsSummarySortDirectionEnum::DESC;
    $request->status = AggregatedGetDatapointsSummaryStatusEnum::ACTIVE;
    $request->tag = 'deserunt';
    $request->textSearch = 'provident';
    $request->timeFrame = AggregatedGetDatapointsSummaryTimeFrameEnum::LASTMONTH;
    $request->toDay = 'repellendus';
    $request->type = AggregatedGetDatapointsSummaryTypeEnum::TL;

    $response = $sdk->aggregated->aggregatedGetDatapointsSummary($request);

    if ($response->apiCoreDtoAggregatedAggregatedSummaryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## aggregatedGetGroupsSummary

Retrieve statistics about a subset of groups for a timeframe with groups data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetGroupsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetGroupsSummarySortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetGroupsSummaryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetGroupsSummaryTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AggregatedGetGroupsSummaryRequest();
    $request->favourite = false;
    $request->fromDay = 'similique';
    $request->limit = 55;
    $request->offset = 872651;
    $request->sortBy = 'quaerat';
    $request->sortDirection = AggregatedGetGroupsSummarySortDirectionEnum::ASC;
    $request->status = AggregatedGetGroupsSummaryStatusEnum::DELETED;
    $request->tag = 'quod';
    $request->textSearch = 'officiis';
    $request->timeFrame = AggregatedGetGroupsSummaryTimeFrameEnum::LAST7;
    $request->toDay = 'dolorum';

    $response = $sdk->aggregated->aggregatedGetGroupsSummary($request);

    if ($response->apiCoreDtoAggregatedAggregatedSummaryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## aggregatedGetStatisticsList

Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetStatisticsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetStatisticsListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetStatisticsListTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AggregatedGetStatisticsListRequest();
    $request->fromDay = 'a';
    $request->groupBy = AggregatedGetStatisticsListGroupByEnum::WEEK;
    $request->timeFrame = AggregatedGetStatisticsListTimeFrameEnum::LAST12MONTHS;
    $request->toDay = 'iusto';

    $response = $sdk->aggregated->aggregatedGetStatisticsList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## aggregatedGetStatisticsSingle

Retrieve statistics about this customer for a timeframe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetStatisticsSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\AggregatedGetStatisticsSingleTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AggregatedGetStatisticsSingleRequest();
    $request->fromDay = 'ipsum';
    $request->hourly = false;
    $request->onlyFavorites = 'quisquam';
    $request->timeFrame = AggregatedGetStatisticsSingleTimeFrameEnum::CUSTOM;
    $request->toDay = 'amet';

    $response = $sdk->aggregated->aggregatedGetStatisticsSingle($request);

    if ($response->apiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
