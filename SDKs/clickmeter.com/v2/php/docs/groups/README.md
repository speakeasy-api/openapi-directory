# groups

### Available Operations

* [groupsCount](#groupscount) - Count the groups associated to the user.
* [groupsDelete](#groupsdelete) - Delete group specified by id
* [groupsGet](#groupsget) - List of all the groups associated to the user.
* [groupsGetDatapoints](#groupsgetdatapoints) - List of all the datapoints associated to the user in this group.
* [groupsGetDatapointsCount](#groupsgetdatapointscount) - Count the datapoints associated to the user in this group.
* [groupsGetDatapointsSummary](#groupsgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [groupsGetHits](#groupsgethits) - Retrieve the list of events related to this group.
* [groupsGetStatisticsAggregatedSingle](#groupsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [groupsGetStatisticsAllList](#groupsgetstatisticsalllist) - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [groupsGetStatisticsList](#groupsgetstatisticslist) - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* [groupsGetStatisticsSingle](#groupsgetstatisticssingle) - Retrieve statistics about this group for a timeframe
* [groupsPatchFavourite](#groupspatchfavourite) - Fast switch the "favourite" field of a group
* [groupsPatchNotesForm](#groupspatchnotesform) - Fast patch the "notes" field of a group
* [groupsPatchNotesJson](#groupspatchnotesjson) - Fast patch the "notes" field of a group
* [groupsPatchNotesRaw](#groupspatchnotesraw) - Fast patch the "notes" field of a group
* [groupsPost](#groupspost) - Update a group
* [groupsPut](#groupsput) - Create a group
* [groupsPutDatapoint](#groupsputdatapoint) - Create a datapoint in this group
* [getGroupsId](#getgroupsid) - Get a group

## groupsCount

Count the groups associated to the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsCountStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsCountRequest();
    $request->createdAfter = 'ullam';
    $request->createdBefore = 'reprehenderit';
    $request->status = GroupsCountStatusEnum::DELETED;
    $request->tags = 'nisi';
    $request->textSearch = 'aut';
    $request->write = false;

    $response = $sdk->groups->groupsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsDelete

Delete group specified by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsDeleteRequest();
    $request->id = 531849;

    $response = $sdk->groups->groupsDelete($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGet

List of all the groups associated to the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetRequest();
    $request->createdAfter = 'qui';
    $request->createdBefore = 'quibusdam';
    $request->limit = 401259;
    $request->offset = 536275;
    $request->status = GroupsGetStatusEnum::ACTIVE;
    $request->tags = 'dolorum';
    $request->textSearch = 'architecto';
    $request->write = false;

    $response = $sdk->groups->groupsGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetDatapoints

List of all the datapoints associated to the user in this group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsSortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetDatapointsRequest();
    $request->createdAfter = 'omnis';
    $request->createdBefore = 'tenetur';
    $request->id = 98478;
    $request->limit = 869489;
    $request->offset = 92027;
    $request->onlyFavorites = false;
    $request->sortBy = 'voluptate';
    $request->sortDirection = GroupsGetDatapointsSortDirectionEnum::ASC;
    $request->status = GroupsGetDatapointsStatusEnum::ACTIVE;
    $request->tags = 'veritatis';
    $request->textSearch = 'consectetur';
    $request->type = GroupsGetDatapointsTypeEnum::TP;

    $response = $sdk->groups->groupsGetDatapoints($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetDatapointsCount

Count the datapoints associated to the user in this group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsCountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsCountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetDatapointsCountRequest();
    $request->createdAfter = 'iste';
    $request->createdBefore = 'temporibus';
    $request->id = 33074;
    $request->onlyFavorites = false;
    $request->status = GroupsGetDatapointsCountStatusEnum::PAUSED;
    $request->tags = 'aut';
    $request->textSearch = 'laudantium';
    $request->type = GroupsGetDatapointsCountTypeEnum::TP;

    $response = $sdk->groups->groupsGetDatapointsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetDatapointsSummary

Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsSummarySortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsSummaryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsSummaryTimeFrameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetDatapointsSummaryTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetDatapointsSummaryRequest();
    $request->favourite = false;
    $request->fromDay = 'mollitia';
    $request->id = 68074;
    $request->limit = 544591;
    $request->offset = 251941;
    $request->sortBy = 'voluptatem';
    $request->sortDirection = GroupsGetDatapointsSummarySortDirectionEnum::ASC;
    $request->status = GroupsGetDatapointsSummaryStatusEnum::ACTIVE;
    $request->tag = 'numquam';
    $request->textSearch = 'impedit';
    $request->timeFrame = GroupsGetDatapointsSummaryTimeFrameEnum::YESTERDAY;
    $request->toDay = 'voluptas';
    $request->type = GroupsGetDatapointsSummaryTypeEnum::TP;

    $response = $sdk->groups->groupsGetDatapointsSummary($request);

    if ($response->apiCoreDtoAggregatedAggregatedSummaryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetHits

Retrieve the list of events related to this group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetHitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetHitsFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetHitsTimeframeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetHitsRequest();
    $request->filter = GroupsGetHitsFilterEnum::UNIQUES;
    $request->fromDay = 'dicta';
    $request->id = 981640;
    $request->limit = 618480;
    $request->offset = 'velit';
    $request->timeframe = GroupsGetHitsTimeframeEnum::CUSTOM;
    $request->toDay = 'voluptas';

    $response = $sdk->groups->groupsGetHits($request);

    if ($response->apiCoreDtoClickStreamHitListPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetStatisticsAggregatedSingle

Retrieve statistics about this customer for a timeframe by groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsAggregatedSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsAggregatedSingleStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsAggregatedSingleTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetStatisticsAggregatedSingleRequest();
    $request->favourite = false;
    $request->fromDay = 'asperiores';
    $request->hourly = false;
    $request->status = GroupsGetStatisticsAggregatedSingleStatusEnum::DELETED;
    $request->tag = 'ea';
    $request->timeFrame = GroupsGetStatisticsAggregatedSingleTimeFrameEnum::LASTMONTH;
    $request->toDay = 'consequuntur';

    $response = $sdk->groups->groupsGetStatisticsAggregatedSingle($request);

    if ($response->apiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetStatisticsAllList

Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsAllListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsAllListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsAllListTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetStatisticsAllListRequest();
    $request->favourite = false;
    $request->fromDay = 'repellendus';
    $request->groupBy = GroupsGetStatisticsAllListGroupByEnum::ACTIVE;
    $request->status = 'maxime';
    $request->tag = 'dignissimos';
    $request->timeFrame = GroupsGetStatisticsAllListTimeFrameEnum::LAST180;
    $request->toDay = 'asperiores';

    $response = $sdk->groups->groupsGetStatisticsAllList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetStatisticsList

Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsListTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetStatisticsListRequest();
    $request->fromDay = 'nemo';
    $request->groupBy = GroupsGetStatisticsListGroupByEnum::WEEK;
    $request->id = 312753;
    $request->timeFrame = GroupsGetStatisticsListTimeFrameEnum::LASTYEAR;
    $request->toDay = 'quod';

    $response = $sdk->groups->groupsGetStatisticsList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsGetStatisticsSingle

Retrieve statistics about this group for a timeframe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupsGetStatisticsSingleTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsGetStatisticsSingleRequest();
    $request->fromDay = 'labore';
    $request->hourly = false;
    $request->id = 70447;
    $request->timeFrame = GroupsGetStatisticsSingleTimeFrameEnum::LAST30;
    $request->toDay = 'fuga';

    $response = $sdk->groups->groupsGetStatisticsSingle($request);

    if ($response->apiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPatchFavourite

Fast switch the "favourite" field of a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsPatchFavouriteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsPatchFavouriteRequest();
    $request->id = 662505;

    $response = $sdk->groups->groupsPatchFavourite($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPatchNotesForm

Fast patch the "notes" field of a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsPatchNotesFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsPatchNotesFormRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'suscipit';
    $request->id = 246063;

    $response = $sdk->groups->groupsPatchNotesForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPatchNotesJson

Fast patch the "notes" field of a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsPatchNotesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsPatchNotesJsonRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'culpa';
    $request->id = 665859;

    $response = $sdk->groups->groupsPatchNotesJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPatchNotesRaw

Fast patch the "notes" field of a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsPatchNotesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsPatchNotesRawRequest();
    $request->requestBody = 'recusandae';
    $request->id = 517309;

    $response = $sdk->groups->groupsPatchNotesRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPost

Update a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoGroupsGroup;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsPostRequest();
    $request->apiCoreDtoGroupsGroup = new ApiCoreDtoGroupsGroup();
    $request->apiCoreDtoGroupsGroup->creationDate = '20120203120530';
    $request->apiCoreDtoGroupsGroup->deleted = false;
    $request->apiCoreDtoGroupsGroup->id = 853940;
    $request->apiCoreDtoGroupsGroup->isPublic = false;
    $request->apiCoreDtoGroupsGroup->name = 'Dora Luettgen';
    $request->apiCoreDtoGroupsGroup->notes = 'possimus';
    $request->apiCoreDtoGroupsGroup->preferred = false;
    $request->apiCoreDtoGroupsGroup->redirectOnly = false;
    $request->apiCoreDtoGroupsGroup->tags = [
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
    ];
    $request->apiCoreDtoGroupsGroup->writePermited = false;
    $request->id = 738227;

    $response = $sdk->groups->groupsPost($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPut

Create a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoGroupsGroup;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoGroupsGroup();
    $request->creationDate = '20120203120530';
    $request->deleted = false;
    $request->id = 414857;
    $request->isPublic = false;
    $request->name = 'Ana Wisozk';
    $request->notes = 'recusandae';
    $request->preferred = false;
    $request->redirectOnly = false;
    $request->tags = [
        new ApiCoreDtoTagsTag(),
        new ApiCoreDtoTagsTag(),
    ];
    $request->writePermited = false;

    $response = $sdk->groups->groupsPut($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsPutDatapoint

Create a datapoint in this group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GroupsPutDatapointRequest;
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
    $request = new GroupsPutDatapointRequest();
    $request->apiCoreDtoDatapointsDatapoint = new ApiCoreDtoDatapointsDatapoint();
    $request->apiCoreDtoDatapointsDatapoint->creationDate = '20120203120530';
    $request->apiCoreDtoDatapointsDatapoint->encodeIp = false;
    $request->apiCoreDtoDatapointsDatapoint->fifthConversionId = 46007;
    $request->apiCoreDtoDatapointsDatapoint->fifthConversionName = 'cum';
    $request->apiCoreDtoDatapointsDatapoint->firstConversionId = 232627;
    $request->apiCoreDtoDatapointsDatapoint->firstConversionName = 'in';
    $request->apiCoreDtoDatapointsDatapoint->fourthConversionId = 348519;
    $request->apiCoreDtoDatapointsDatapoint->fourthConversionName = 'earum';
    $request->apiCoreDtoDatapointsDatapoint->groupId = 814967;
    $request->apiCoreDtoDatapointsDatapoint->groupName = 'numquam';
    $request->apiCoreDtoDatapointsDatapoint->id = 985492;
    $request->apiCoreDtoDatapointsDatapoint->isPublic = false;
    $request->apiCoreDtoDatapointsDatapoint->isSecured = false;
    $request->apiCoreDtoDatapointsDatapoint->lightTracking = false;
    $request->apiCoreDtoDatapointsDatapoint->name = 'Lela Predovic';
    $request->apiCoreDtoDatapointsDatapoint->notes = 'dolore';
    $request->apiCoreDtoDatapointsDatapoint->preferred = false;
    $request->apiCoreDtoDatapointsDatapoint->redirectOnly = false;
    $request->apiCoreDtoDatapointsDatapoint->secondConversionId = 121059;
    $request->apiCoreDtoDatapointsDatapoint->secondConversionName = 'asperiores';
    $request->apiCoreDtoDatapointsDatapoint->status = ApiCoreDtoDatapointsDatapointStatusEnum::ACTIVE;
    $request->apiCoreDtoDatapointsDatapoint->tags = [
        new ApiCoreDtoTagsTag(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->thirdConversionId = 228263;
    $request->apiCoreDtoDatapointsDatapoint->thirdConversionName = 'beatae';
    $request->apiCoreDtoDatapointsDatapoint->title = 'Ms.';
    $request->apiCoreDtoDatapointsDatapoint->trackingCode = 'a';
    $request->apiCoreDtoDatapointsDatapoint->type = ApiCoreDtoDatapointsDatapointTypeEnum::TRACKING_PIXEL;
    $request->apiCoreDtoDatapointsDatapoint->typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics();
    $request->apiCoreDtoDatapointsDatapoint->typeTL->appendQuery = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem();
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem->emailDestinationUrl = 'consectetur';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem->mobileDestinationUrl = 'corporis';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->browserDestinationItem->spidersDestinationUrl = 'harum';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum::SPILLOVER_DESTINATION;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->domainId = 58356;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->encodeUrl = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->expirationClicks = 916727;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->expirationDate = '20120203120530';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->firstUrl = 'libero';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->goDomainId = 113816;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->hideUrl = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->hideUrlTitle = 'accusamus';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->isABTest = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->password = 'similique';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->pauseAfterClicksExpiration = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->pauseAfterDateExpiration = false;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->randomDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum::PERMANENT_REDIRECT;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum::CLEAN;
    $request->apiCoreDtoDatapointsDatapoint->typeTL->scripts = [
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
        new ApiCoreDtoDatapointsDatapointRetargetingInfo(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->sequentialDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->spilloverDestinationItems = [
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
        new ApiCoreDtoDatapointsMultipleDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem();
    $request->apiCoreDtoDatapointsDatapoint->typeTL->uniqueDestinationItem->firstDestinationUrl = 'nobis';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->url = 'dolorum';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlAfterClicksExpiration = 'adipisci';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlAfterDateExpiration = 'minus';
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlsByLanguage = [
        new ApiCoreDtoDatapointsUrlByLanguageItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->urlsByNation = [
        new ApiCoreDtoDatapointsUrlByNationItem(),
        new ApiCoreDtoDatapointsUrlByNationItem(),
        new ApiCoreDtoDatapointsUrlByNationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTL->weightedDestinationItems = [
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
        new ApiCoreDtoDatapointsWeightedDestinationItem(),
    ];
    $request->apiCoreDtoDatapointsDatapoint->typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics();
    $request->apiCoreDtoDatapointsDatapoint->typeTP->parameterNote = 'dolore';
    $request->apiCoreDtoDatapointsDatapoint->writePermited = false;
    $request->id = 304468;

    $response = $sdk->groups->groupsPutDatapoint($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupsId

Get a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsIdRequest();
    $request->id = 885963;

    $response = $sdk->groups->getGroupsId($request);

    if ($response->apiCoreDtoGroupsGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
