# content

### Available Operations

* [getAnonNextPlaybackItem](#getanonnextplaybackitem) - Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation

* [getItem](#getitem) - Returns the details of an item with the specified id.
* [getItemChildrenList](#getitemchildrenlist) - Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.

* [getItemDownloadables](#getitemdownloadables) - Returns the details of an item with the specified id.
* [getItemRelatedList](#getitemrelatedlist) - Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.

* [getItemsMediaClipFiles](#getitemsmediaclipfiles) - Get the media clip files associated with items.

* [getList](#getlist) - Returns a list of items under the specified item list
* [getLists](#getlists) - Returns an array of item lists with their first page of content resolved.
* [getPublicItemMediaFiles](#getpublicitemmediafiles) - Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [getSchedules](#getschedules) - Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime, 
so they should be converted to UTC on the client - this will help to avoid 
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.

* [getPlansId](#getplansid) - Returns the details of a Plan with the specified id.
* [search](#search) - Search the catalog of items and people.

## getAnonNextPlaybackItem

Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnonNextPlaybackItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnonNextPlaybackItemExpandEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnonNextPlaybackItemRequest();
    $request->device = 'natus';
    $request->expand = GetAnonNextPlaybackItemExpandEnum::PARENT;
    $request->ff = [
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::HB,
    ];
    $request->itemId = 'quaerat';
    $request->lang = 'consequuntur';
    $request->maxRating = 'repellendus';
    $request->segments = [
        'maxime',
        'dignissimos',
        'officia',
    ];

    $response = $sdk->content->getAnonNextPlaybackItem($request);

    if ($response->nextPlaybackItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItem

Returns the details of an item with the specified id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItemExpandEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemSelectSeasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemRequest();
    $request->device = 'asperiores';
    $request->expand = GetItemExpandEnum::CHILDREN;
    $request->ff = [
        FeatureFlagsEnum::LDP,
    ];
    $request->id = 'cc413aa6-3aae-48d6-b864-dbb675fd5e60';
    $request->lang = 'cum';
    $request->maxRating = 'consectetur';
    $request->segments = [
        'exercitationem',
        'earum',
    ];
    $request->selectSeason = GetItemSelectSeasonEnum::LATEST;
    $request->sub = 'numquam';
    $request->useCustomId = false;

    $response = $sdk->content->getItem($request);

    if ($response->itemDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemChildrenList

Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemChildrenListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemChildrenListRequest();
    $request->device = 'doloribus';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::CAS,
    ];
    $request->id = 'ee41f333-17fe-435b-a0eb-1ea426555ba3';
    $request->lang = 'minus';
    $request->maxRating = 'dolores';
    $request->order = ListOrderEnum::DESC;
    $request->page = 449292;
    $request->pageSize = 296242;
    $request->segments = [
        'officiis',
        'temporibus',
    ];
    $request->sub = 'ullam';

    $response = $sdk->content->getItemChildrenList($request);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemDownloadables

Returns the details of an item with the specified id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemDownloadablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemDownloadableRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemDownloadablesRequest();
    $request->itemDownloadableRequest = new ItemDownloadableRequest();
    $request->itemDownloadableRequest->ids = 'adipisci';
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'nesciunt';

    $response = $sdk->content->getItemDownloadables($request);

    if ($response->itemDownloadableList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemRelatedList

Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemRelatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemRelatedListRequest();
    $request->device = 'culpa';
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CD,
    ];
    $request->id = '5c0b2f2f-b7b1-494a-a76b-26916fe1f08f';
    $request->lang = 'incidunt';
    $request->maxRating = 'sed';
    $request->page = 592231;
    $request->pageSize = 258702;
    $request->segments = [
        'ipsum',
        'ea',
        'occaecati',
        'quos',
    ];
    $request->sub = 'voluptatibus';

    $response = $sdk->content->getItemRelatedList($request);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemsMediaClipFiles

Get the media clip files associated with items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemsMediaClipFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemDownloadableRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemsMediaClipFilesRequest();
    $request->itemDownloadableRequest = new ItemDownloadableRequest();
    $request->itemDownloadableRequest->ids = 'tempora';
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'ex';

    $response = $sdk->content->getItemsMediaClipFiles($request);

    if ($response->itemClipFilesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getList

Returns a list of items under the specified item list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListRequest();
    $request->device = 'sit';
    $request->ff = [
        FeatureFlagsEnum::CD,
    ];
    $request->id = '8b445e80-ca55-4efd-a0e4-57e1858b6a89';
    $request->itemType = ItemTypeEnum::CUSTOM_ASSET;
    $request->lang = 'expedita';
    $request->maxRating = 'debitis';
    $request->order = ListOrderEnum::ASC;
    $request->orderBy = ListOrderByEnum::DATE_ADDED;
    $request->page = 341698;
    $request->pageSize = 639028;
    $request->param = 'dolorum';
    $request->segments = [
        'accusamus',
        'tempora',
        'atque',
    ];
    $request->sub = 'fugit';

    $response = $sdk->content->getList($request);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLists

Returns an array of item lists with their first page of content resolved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListsRequest();
    $request->device = 'ut';
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::LDP,
    ];
    $request->ids = [
        'esse',
    ];
    $request->itemType = ItemTypeEnum::EPISODE;
    $request->lang = 'sit';
    $request->maxRating = 'voluptatum';
    $request->order = ListOrderEnum::DESC;
    $request->orderBy = ListOrderByEnum::DATE_ADDED;
    $request->pageSize = 361151;
    $request->segments = [
        'blanditiis',
    ];
    $request->sub = 'ex';

    $response = $sdk->content->getLists($request);

    if ($response->itemLists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicItemMediaFiles

Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicItemMediaFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicItemMediaFilesRequest();
    $request->delivery = [
        MediaFileDeliveryEnum::STREAM,
    ];
    $request->device = 'vel';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::RPT,
    ];
    $request->formats = [
        MediaFileFormatsEnum::MPD,
    ];
    $request->id = 'f3b1194b-8abf-4603-a79f-9dfe0ab7da8a';
    $request->lang = 'veniam';
    $request->resolution = MediaFileResolutionEnum::HD4_K;
    $request->segments = [
        'repudiandae',
        'quasi',
        'atque',
        'reprehenderit',
    ];
    $request->sub = 'asperiores';

    $response = $sdk->content->getPublicItemMediaFiles($request);

    if ($response->mediaFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedules

Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime, 
so they should be converted to UTC on the client - this will help to avoid 
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesRequest();
    $request->channels = [
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->date = DateTime::createFromFormat('Y-m-d', '2022-07-16');
    $request->device = 'amet';
    $request->duration = 826825;
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::RPT,
    ];
    $request->hour = 887265;
    $request->intersect = false;
    $request->lang = 'officiis';
    $request->segments = [
        'natus',
        'minima',
        'aspernatur',
        'ex',
    ];
    $request->sub = 'maiores';

    $response = $sdk->content->getSchedules($request);

    if ($response->itemScheduleLists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlansId

Returns the details of a Plan with the specified id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlansIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlansIdRequest();
    $request->device = 'corrupti';
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
    ];
    $request->id = '881ead4f-0e10-4125-a3f9-4e29e973e922';
    $request->lang = 'id';
    $request->segments = [
        'reprehenderit',
        'error',
    ];
    $request->sub = 'illo';

    $response = $sdk->content->getPlansId($request);

    if ($response->plan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## search

Search the catalog of items and people.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->device = 'corporis';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::CD,
    ];
    $request->group = false;
    $request->include = [
        SearchIncludeEnum::MOVIES,
    ];
    $request->lang = 'ipsa';
    $request->maxRating = 'totam';
    $request->maxResults = 61078;
    $request->segments = [
        'eveniet',
        'qui',
    ];
    $request->sub = 'cum';
    $request->term = 'iure';

    $response = $sdk->content->search($request);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
