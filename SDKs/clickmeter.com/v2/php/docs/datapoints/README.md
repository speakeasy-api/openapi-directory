# dataPoints

### Available Operations

* [dataPointsBatchDelete](#datapointsbatchdelete) - Delete multiple datapoints
* [dataPointsBatchPost](#datapointsbatchpost) - Update multiple datapoints
* [dataPointsBatchPut](#datapointsbatchput) - Create multiple datapoints
* [dataPointsCount](#datapointscount) - Count the datapoints associated to the user
* [dataPointsDelete](#datapointsdelete) - Delete a datapoint
* [dataPointsGet](#datapointsget) - List of all the datapoints associated to the user
* [dataPointsGetHits](#datapointsgethits) - Retrieve the list of events related to this datapoint.
* [dataPointsGetStatisticsAggregatedSingle](#datapointsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [dataPointsGetStatisticsAllList](#datapointsgetstatisticsalllist) - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [dataPointsGetStatisticsList](#datapointsgetstatisticslist) - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* [dataPointsGetStatisticsSingle](#datapointsgetstatisticssingle) - Retrieve statistics about this datapoint for a timeframe
* [dataPointsPatchFavourite](#datapointspatchfavourite) - Fast switch the "favourite" field of a datapoint
* [dataPointsPatchNotesForm](#datapointspatchnotesform) - Fast patch the "notes" field of a datapoint
* [dataPointsPatchNotesJson](#datapointspatchnotesjson) - Fast patch the "notes" field of a datapoint
* [dataPointsPatchNotesRaw](#datapointspatchnotesraw) - Fast patch the "notes" field of a datapoint
* [dataPointsPost](#datapointspost) - Update a datapoint
* [dataPointsPut](#datapointsput) - Create a datapoint
* [getDatapointsId](#getdatapointsid) - Get a datapoint

## dataPointsBatchDelete

Delete multiple datapoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsDeleteBatch;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoEntityUriLong;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreRequestsDeleteBatch();
    $request->entities = [
        new ApiCoreDtoEntityUriLong(),
        new ApiCoreDtoEntityUriLong(),
    ];

    $response = $sdk->dataPoints->dataPointsBatchDelete($request);

    if ($response->apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsBatchPost

Update multiple datapoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsDatapointsBatch;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapoint;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecifics;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsBrowserBaseDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsMultipleDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointRetargetingInfo;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUniqueDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByLanguageItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByNationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsWeightedDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingPixelSpecifics;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreRequestsDatapointsBatch();
    $request->list = [
        new ApiCoreDtoDatapointsDatapoint(),
    ];

    $response = $sdk->dataPoints->dataPointsBatchPost($request);

    if ($response->apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsBatchPut

Create multiple datapoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsDatapointsBatch;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapoint;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecifics;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsBrowserBaseDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsMultipleDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointRetargetingInfo;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUniqueDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByLanguageItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByNationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsWeightedDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingPixelSpecifics;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreRequestsDatapointsBatch();
    $request->list = [
        new ApiCoreDtoDatapointsDatapoint(),
        new ApiCoreDtoDatapointsDatapoint(),
        new ApiCoreDtoDatapointsDatapoint(),
    ];

    $response = $sdk->dataPoints->dataPointsBatchPut($request);

    if ($response->apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsCount

Count the datapoints associated to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsCountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsCountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsCountRequest();
    $request->createdAfter = 'tempora';
    $request->createdBefore = 'ipsam';
    $request->onlyFavorites = false;
    $request->status = DataPointsCountStatusEnum::ACTIVE;
    $request->tags = 'aspernatur';
    $request->textSearch = 'vel';
    $request->type = DataPointsCountTypeEnum::TL;

    $response = $sdk->dataPoints->dataPointsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsDelete

Delete a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsDeleteRequest();
    $request->id = 297842;

    $response = $sdk->dataPoints->dataPointsDelete($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsGet

List of all the datapoints associated to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetSortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsGetRequest();
    $request->createdAfter = 'ratione';
    $request->createdBefore = 'ex';
    $request->limit = 511319;
    $request->offset = 120657;
    $request->onlyFavorites = false;
    $request->sortBy = 'dolor';
    $request->sortDirection = DataPointsGetSortDirectionEnum::DESC;
    $request->status = DataPointsGetStatusEnum::DELETED;
    $request->tags = 'ex';
    $request->textSearch = 'nulla';
    $request->type = DataPointsGetTypeEnum::TL;

    $response = $sdk->dataPoints->dataPointsGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsGetHits

Retrieve the list of events related to this datapoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetHitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetHitsFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetHitsTimeframeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsGetHitsRequest();
    $request->filter = DataPointsGetHitsFilterEnum::CONVERSIONS;
    $request->fromDay = 'nostrum';
    $request->id = 960835;
    $request->limit = 788873;
    $request->offset = 'saepe';
    $request->timeframe = DataPointsGetHitsTimeframeEnum::CURRENTMONTH;
    $request->toDay = 'impedit';

    $response = $sdk->dataPoints->dataPointsGetHits($request);

    if ($response->apiCoreDtoClickStreamHitListPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsGetStatisticsAggregatedSingle

Retrieve statistics about this customer for a timeframe by groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAggregatedSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAggregatedSingleStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAggregatedSingleTimeFrameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAggregatedSingleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsGetStatisticsAggregatedSingleRequest();
    $request->favourite = false;
    $request->fromDay = 'corporis';
    $request->hourly = false;
    $request->status = DataPointsGetStatisticsAggregatedSingleStatusEnum::ACTIVE;
    $request->tag = 'aliquid';
    $request->timeFrame = DataPointsGetStatisticsAggregatedSingleTimeFrameEnum::YESTERDAY;
    $request->toDay = 'magnam';
    $request->type = DataPointsGetStatisticsAggregatedSingleTypeEnum::TP;

    $response = $sdk->dataPoints->dataPointsGetStatisticsAggregatedSingle($request);

    if ($response->apiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsGetStatisticsAllList

Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAllListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAllListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAllListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAllListTimeFrameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsAllListTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsGetStatisticsAllListRequest();
    $request->favourite = false;
    $request->fromDay = 'quo';
    $request->groupBy = DataPointsGetStatisticsAllListGroupByEnum::WEEK;
    $request->status = DataPointsGetStatisticsAllListStatusEnum::SPAM;
    $request->tag = 'aspernatur';
    $request->timeFrame = DataPointsGetStatisticsAllListTimeFrameEnum::LASTMONTH;
    $request->toDay = 'eaque';
    $request->type = DataPointsGetStatisticsAllListTypeEnum::TL;

    $response = $sdk->dataPoints->dataPointsGetStatisticsAllList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsGetStatisticsList

Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsListTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsGetStatisticsListRequest();
    $request->fromDay = 'libero';
    $request->groupBy = DataPointsGetStatisticsListGroupByEnum::WEEK;
    $request->id = 11427;
    $request->timeFrame = DataPointsGetStatisticsListTimeFrameEnum::LAST120;
    $request->toDay = 'impedit';

    $response = $sdk->dataPoints->dataPointsGetStatisticsList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsGetStatisticsSingle

Retrieve statistics about this datapoint for a timeframe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsGetStatisticsSingleTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsGetStatisticsSingleRequest();
    $request->fromDay = 'aliquam';
    $request->hourly = false;
    $request->id = 146946;
    $request->timeFrame = DataPointsGetStatisticsSingleTimeFrameEnum::BEGINNING;
    $request->toDay = 'inventore';

    $response = $sdk->dataPoints->dataPointsGetStatisticsSingle($request);

    if ($response->apiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsPatchFavourite

Fast switch the "favourite" field of a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsPatchFavouriteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsPatchFavouriteRequest();
    $request->id = 250622;

    $response = $sdk->dataPoints->dataPointsPatchFavourite($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsPatchNotesForm

Fast patch the "notes" field of a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsPatchNotesFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsPatchNotesFormRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'et';
    $request->id = 677412;

    $response = $sdk->dataPoints->dataPointsPatchNotesForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsPatchNotesJson

Fast patch the "notes" field of a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsPatchNotesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsPatchNotesJsonRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'laborum';
    $request->id = 810424;

    $response = $sdk->dataPoints->dataPointsPatchNotesJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsPatchNotesRaw

Fast patch the "notes" field of a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsPatchNotesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsPatchNotesRawRequest();
    $request->requestBody = 'velit';
    $request->id = 432148;

    $response = $sdk->dataPoints->dataPointsPatchNotesRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsPost

Update a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DataPointsPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapoint;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecifics;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsBrowserBaseDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsMultipleDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointRetargetingInfo;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUniqueDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByLanguageItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByNationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsWeightedDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingPixelSpecifics;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataPointsPostRequest();
    $request->apiCoreDtoDatapointsDatapoint = new ApiCoreDtoDatapointsDatapoint();
    $request->apiCoreDtoDatapointsDatapoint->creationDate = '20120203120530';
    $request->apiCoreDtoDatapointsDatapoint->encodeIp = false;
    $request->apiCoreDtoDatapointsDatapoint->fifthConversionId = 420539;
    $request->apiCoreDtoDatapointsDatapoint->fifthConversionName = 'nobis';
    $request->apiCoreDtoDatapointsDatapoint->firstConversionId = 557369;
    $request->apiCoreDtoDatapointsDatapoint->firstConversionName = 'assumenda';
    $request->apiCoreDtoDatapointsDatapoint->fourthConversionId = 860552;
    $request->apiCoreDtoDatapointsDatapoint->fourthConversionName = 'voluptas';
    $request->apiCoreDtoDatapointsDatapoint->groupId = 727044;
    $request->apiCoreDtoDatapointsDatapoint->groupName = 'quasi';
    $request->apiCoreDtoDatapointsDatapoint->id = 270328;
    $request->apiCoreDtoDatapointsDatapoint->isPublic = false;
    $request->apiCoreDtoDatapointsDatapoint->isSecured = false;
    $request->apiCoreDtoDatapointsDatapoint->lightTracking = false;
    $request->apiCoreDtoDatapointsDatapoint->name = 'Ms. Janice McLaughlin';
    $request->apiCoreDtoDatapointsDatapoint->notes = 'odio';
    $request->apiCoreDtoDatapointsDatapoint->preferred = false;
    $request->apiCoreDtoDatapointsDatapoint->redirectOnly = false;
    $request->apiCoreDtoDatapointsDatapoint->secondConversionId = 262118;
    $request->apiCoreDtoDatapointsDatapoint->secondConversionName = 'esse';
    $request->apiCoreDtoDatapointsDatapoint->status = ApiCoreDtoDatapointsDatapointStatusEnum::PAUSED;
    $request->apiCoreDtoDatapointsDatapoint->tags = [
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->thirdConversionId = 683282;
    $request->apiCoreDtoDatapointsDatapoint->thirdConversionName = 'reprehenderit';
    $request->apiCoreDtoDatapointsDatapoint->title = 'Miss';
    $request->apiCoreDtoDatapointsDatapoint->trackingCode = 'fugiat';
    $request->apiCoreDtoDatapointsDatapoint->type = ApiCoreDtoDatapointsDatapointTypeEnum::TRACKING_LINK;
    $request->apiCoreDtoDatapointsDatapoint->typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics();
    $request->apiCoreDtoDatapointsDatapoint->typeTL->appendQuery = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem();
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem->emailDestinationUrl = 'eum';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem->mobileDestinationUrl = 'suscipit';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem->spidersDestinationUrl = 'assumenda';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum::RANDOM_DESTINATION;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->domainId = 509342;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->encodeUrl = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->expirationClicks = 788546;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->expirationDate = '20120203120530';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->firstUrl = 'veritatis';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->goDomainId = 56848;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->hideUrl = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->hideUrlTitle = 'id';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->isABTest = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->password = 'quidem';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->pauseAfterClicksExpiration = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->pauseAfterDateExpiration = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->randomDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum::TEMPORARY_REDIRECT;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum::MYSELF;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->scripts = [
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->sequentialDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->spilloverDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem();
    $request->apiCoreDtoDatapointsDatapoint->typeTL->uniqueDestinationItem->firstDestinationUrl = 'eos';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->url = 'voluptas';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlAfterClicksExpiration = 'ab';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlAfterDateExpiration = 'cupiditate';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlsByLanguage = [
        new ApiCoreDtoDatapointsUrlByLanguageItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlsByNation = [
        new ApiCoreDtoDatapointsUrlByNationItem(),
        new ApiCoreDtoDatapointsUrlByNationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->weightedDestinationItems = [
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics();
    $request->apiCoreDtoDatapointsDatapoint->typeTP->parameterNote = 'ipsam';
    $request->apiCoreDtoDatapointsDatapoint->writePermited = false;
    $request->id = 133465;

    $response = $sdk->dataPoints->dataPointsPost($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataPointsPut

Create a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapoint;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecifics;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsBrowserBaseDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsMultipleDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsDatapointRetargetingInfo;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUniqueDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByLanguageItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsUrlByNationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsWeightedDestinationItem;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDatapointsTrackingPixelSpecifics;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoDatapointsDatapoint();
    $request->creationDate = '20120203120530';
    $request->encodeIp = false;
    $request->fifthConversionId = 197054;
    $request->fifthConversionName = 'quo';
    $request->firstConversionId = 459856;
    $request->firstConversionName = 'recusandae';
    $request->fourthConversionId = 44612;
    $request->fourthConversionName = 'distinctio';
    $request->groupId = 799796;
    $request->groupName = 'dignissimos';
    $request->id = 76956;
    $request->isPublic = false;
    $request->isSecured = false;
    $request->lightTracking = false;
    $request->name = 'Christy Tillman';
    $request->notes = 'occaecati';
    $request->preferred = false;
    $request->redirectOnly = false;
    $request->secondConversionId = 414567;
    $request->secondConversionName = 'sapiente';
    $request->status = ApiCoreDtoDatapointsDatapointStatusEnum::ACTIVE;
    $request->tags = [
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
    ];
    $request->thirdConversionId = 475289;
    $request->thirdConversionName = 'accusantium';
    $request->title = 'Miss';
    $request->trackingCode = 'eum';
    $request->type = ApiCoreDtoDatapointsDatapointTypeEnum::TRACKING_PIXEL;
    $request->typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics();
    $request->typeTL->appendQuery = false;
    $request->typeTL->browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem();
    $request->typeTL->browserDestinationItem->emailDestinationUrl = 'praesentium';
    $request->typeTL->browserDestinationItem->mobileDestinationUrl = 'consequuntur';
    $request->typeTL->browserDestinationItem->spidersDestinationUrl = 'deleniti';
    $request->typeTL->destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum::RANDOM_DESTINATION;
    $request->typeTL->domainId = 681393;
    $request->typeTL->encodeUrl = false;
    $request->typeTL->expirationClicks = 649463;
    $request->typeTL->expirationDate = '20120203120530';
    $request->typeTL->firstUrl = 'incidunt';
    $request->typeTL->goDomainId = 539224;
    $request->typeTL->hideUrl = false;
    $request->typeTL->hideUrlTitle = 'explicabo';
    $request->typeTL->isABTest = false;
    $request->typeTL->password = 'minima';
    $request->typeTL->pauseAfterClicksExpiration = false;
    $request->typeTL->pauseAfterDateExpiration = false;
    $request->typeTL->randomDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->typeTL->redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum::PERMANENT_REDIRECT;
    $request->typeTL->referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum::MYSELF;
    $request->typeTL->scripts = [
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
    ];
    $request->typeTL->sequentialDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->typeTL->spilloverDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->typeTL->uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem();
    $request->typeTL->uniqueDestinationItem->firstDestinationUrl = 'saepe';
    $request->typeTL->url = 'occaecati';
    $request->typeTL->urlAfterClicksExpiration = 'atque';
    $request->typeTL->urlAfterDateExpiration = 'et';
    $request->typeTL->urlsByLanguage = [
        new ApiCoreDtoDatapointsUrlByLanguageItem(),
        new ApiCoreDtoDatapointsUrlByLanguageItem(),
    ];
    $request->typeTL->urlsByNation = [
        new ApiCoreDtoDatapointsUrlByNationItem(),
        new ApiCoreDtoDatapointsUrlByNationItem(),
        new ApiCoreDtoDatapointsUrlByNationItem(),
        new ApiCoreDtoDatapointsUrlByNationItem(),
    ];
    $request->typeTL->weightedDestinationItems = [
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
    ];
    $request->typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics();
    $request->typeTP->parameterNote = 'veritatis';
    $request->writePermited = false;

    $response = $sdk->dataPoints->dataPointsPut($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatapointsId

Get a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatapointsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatapointsIdRequest();
    $request->id = 458604;

    $response = $sdk->dataPoints->getDatapointsId($request);

    if ($response->apiCoreDtoDatapointsDatapoint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
