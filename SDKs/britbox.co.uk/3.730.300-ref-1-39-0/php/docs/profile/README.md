# profile

### Available Operations

* [bookmarkItem](#bookmarkitem) - Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [deleteItemBookmark](#deleteitembookmark) - Unbookmark an item under the active profile.
* [deleteWatched](#deletewatched) - Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**

* [getBookmarkList](#getbookmarklist) - Returns the list of bookmarked items under the active profile.
* [getBookmarks](#getbookmarks) - Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
* [getContinueWatchingList](#getcontinuewatchinglist) - Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.

* [getItemBookmark](#getitembookmark) - Get the bookmark for an item under the active profile.
* [getItemRating](#getitemrating) - Get the rating info for an item under the active profile.
* [getItemWatchedStatus](#getitemwatchedstatus) - Get the watched status info for an item under the active profile.
* [getNextPlaybackItem](#getnextplaybackitem) - Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.

* [getProfile](#getprofile) - Get the details of the active profile, including watched, bookmarked and rated items.
* [getRatings](#getratings) - Get the map of rated item ids (itemId => rating out of 10) under the active profile.
* [getRatingsList](#getratingslist) - Returns the list of rated items under the active profile.
* [getWatched](#getwatched) - Get the map of watched item ids (itemId => last playhead position) under the active profile.
* [getWatchedList](#getwatchedlist) - Returns the list of watched items under the active profile.
* [rateItem](#rateitem) - Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [setItemWatchedStatus](#setitemwatchedstatus) - Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


## bookmarkItem

Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BookmarkItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\BookmarkItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BookmarkItemRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::LRL,
    ];
    $request->itemId = 'totam';
    $request->lang = 'impedit';

    $requestSecurity = new BookmarkItemSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->bookmarkItem($request, $requestSecurity);

    if ($response->bookmark !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItemBookmark

Unbookmark an item under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemBookmarkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemBookmarkRequest();
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::IDP,
    ];
    $request->itemId = 'aliquam';
    $request->lang = 'inventore';

    $requestSecurity = new DeleteItemBookmarkSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->deleteItemBookmark($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWatched

Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWatchedRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWatchedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWatchedRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::IDP,
    ];
    $request->itemIds = [
        'architecto',
    ];
    $request->lang = 'sit';

    $requestSecurity = new DeleteWatchedSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->deleteWatched($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBookmarkList

Returns the list of bookmarked items under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBookmarkListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBookmarkListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBookmarkListRequest();
    $request->device = 'modi';
    $request->ff = [
        FeatureFlagsEnum::ALL,
    ];
    $request->itemType = ItemTypeEnum::PROGRAM;
    $request->lang = 'quae';
    $request->order = ListOrderEnum::ASC;
    $request->page = 856277;
    $request->pageSize = 369490;
    $request->segments = [
        'ipsa',
    ];
    $request->sub = 'quas';

    $requestSecurity = new GetBookmarkListSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getBookmarkList($request, $requestSecurity);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBookmarks

Get the map of bookmarked item ids (itemId => creationDate) under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBookmarksRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBookmarksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBookmarksRequest();
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'sed';

    $requestSecurity = new GetBookmarksSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getBookmarks($request, $requestSecurity);

    if ($response->getBookmarks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinueWatchingList

Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContinueWatchingListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContinueWatchingListIncludeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContinueWatchingListShowItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContinueWatchingListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinueWatchingListRequest();
    $request->device = 'veniam';
    $request->ff = [
        FeatureFlagsEnum::CAS,
    ];
    $request->include = [
        GetContinueWatchingListIncludeEnum::SEASON,
        GetContinueWatchingListIncludeEnum::SEASON,
    ];
    $request->lang = 'magnam';
    $request->maxRating = 'exercitationem';
    $request->page = 70410;
    $request->pageSize = 781480;
    $request->segments = [
        'nobis',
        'laboriosam',
    ];
    $request->showItemType = GetContinueWatchingListShowItemTypeEnum::SHOW;
    $request->sub = 'consequuntur';

    $requestSecurity = new GetContinueWatchingListSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getContinueWatchingList($request, $requestSecurity);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemBookmark

Get the bookmark for an item under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemBookmarkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemBookmarkRequest();
    $request->ff = [
        FeatureFlagsEnum::LDP,
    ];
    $request->itemId = 'necessitatibus';
    $request->lang = 'quasi';

    $requestSecurity = new GetItemBookmarkSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getItemBookmark($request, $requestSecurity);

    if ($response->bookmark !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemRating

Get the rating info for an item under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemRatingRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemRatingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemRatingRequest();
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::CD,
    ];
    $request->itemId = 'est';
    $request->lang = 'harum';

    $requestSecurity = new GetItemRatingSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getItemRating($request, $requestSecurity);

    if ($response->userRating !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemWatchedStatus

Get the watched status info for an item under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemWatchedStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemWatchedStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemWatchedStatusRequest();
    $request->ff = [
        FeatureFlagsEnum::CD,
    ];
    $request->itemId = 'repudiandae';
    $request->lang = 'optio';

    $requestSecurity = new GetItemWatchedStatusSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getItemWatchedStatus($request, $requestSecurity);

    if ($response->watched !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNextPlaybackItem

Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNextPlaybackItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNextPlaybackItemExpandEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNextPlaybackItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNextPlaybackItemRequest();
    $request->device = 'occaecati';
    $request->expand = GetNextPlaybackItemExpandEnum::PARENT;
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CAS,
    ];
    $request->itemId = 'voluptas';
    $request->lang = 'numquam';
    $request->maxRating = 'nemo';
    $request->segments = [
        'eius',
        'aspernatur',
        'ducimus',
    ];
    $request->sub = 'nesciunt';

    $requestSecurity = new GetNextPlaybackItemSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getNextPlaybackItem($request, $requestSecurity);

    if ($response->nextPlaybackItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfile

Get the details of the active profile, including watched, bookmarked and rated items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileRequest();
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::ALL,
    ];
    $request->lang = 'rem';

    $requestSecurity = new GetProfileSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getProfile($request, $requestSecurity);

    if ($response->profileDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRatings

Get the map of rated item ids (itemId => rating out of 10) under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRatingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRatingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRatingsRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'aperiam';

    $requestSecurity = new GetRatingsSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getRatings($request, $requestSecurity);

    if ($response->getRatings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRatingsList

Returns the list of rated items under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRatingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRatingsListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRatingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRatingsListRequest();
    $request->device = 'cupiditate';
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::IDP,
    ];
    $request->itemType = ItemTypeEnum::LINK;
    $request->lang = 'iste';
    $request->order = ListOrderEnum::ASC;
    $request->orderBy = GetRatingsListOrderByEnum::DATE_ADDED;
    $request->page = 686362;
    $request->pageSize = 881897;
    $request->segments = [
        'distinctio',
        'omnis',
        'delectus',
        'minima',
    ];
    $request->sub = 'praesentium';

    $requestSecurity = new GetRatingsListSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getRatingsList($request, $requestSecurity);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWatched

Get the map of watched item ids (itemId => last playhead position) under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWatchedRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWatchedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWatchedRequest();
    $request->ff = [
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::HB,
    ];
    $request->lang = 'itaque';

    $requestSecurity = new GetWatchedSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getWatched($request, $requestSecurity);

    if ($response->getWatched200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWatchedList

Returns the list of watched items under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWatchedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWatchedListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWatchedListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWatchedListRequest();
    $request->completed = false;
    $request->device = 'commodi';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::CAS,
    ];
    $request->itemType = ItemTypeEnum::CHANNEL;
    $request->lang = 'voluptatem';
    $request->order = ListOrderEnum::ASC;
    $request->orderBy = GetWatchedListOrderByEnum::DATE_ADDED;
    $request->page = 1383;
    $request->pageSize = 93894;
    $request->segments = [
        'maiores',
    ];
    $request->sub = 'enim';

    $requestSecurity = new GetWatchedListSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->getWatchedList($request, $requestSecurity);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rateItem

Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RateItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\RateItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RateItemRequest();
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::HB,
    ];
    $request->itemId = 'nemo';
    $request->lang = 'reprehenderit';
    $request->rating = 667715;

    $requestSecurity = new RateItemSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->rateItem($request, $requestSecurity);

    if ($response->userRating !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setItemWatchedStatus

Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetItemWatchedStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetItemWatchedStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetItemWatchedStatusRequest();
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CD,
    ];
    $request->itemId = 'impedit';
    $request->lang = 'hic';
    $request->position = 900103;

    $requestSecurity = new SetItemWatchedStatusSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->profile->setItemWatchedStatus($request, $requestSecurity);

    if ($response->watched !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
