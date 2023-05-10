# preview

### Available Operations

* [destiny2GetClanAggregateStats](#destiny2getclanaggregatestats) - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetClanLeaderboards](#destiny2getclanleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetLeaderboards](#destiny2getleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* [destiny2GetLeaderboardsForCharacter](#destiny2getleaderboardsforcharacter) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetPublicVendors](#destiny2getpublicvendors) - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* [destiny2InsertSocketPlug](#destiny2insertsocketplug) - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* [destiny2InsertSocketPlugFree](#destiny2insertsocketplugfree) - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

## destiny2GetClanAggregateStats

Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetClanAggregateStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetClanAggregateStatsRequest();
    $request->groupId = 606393;
    $request->modes = 'molestiae';

    $response = $sdk->preview->destiny2GetClanAggregateStats($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetClanLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetClanLeaderboardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetClanLeaderboardsRequest();
    $request->groupId = 19193;
    $request->maxtop = 470132;
    $request->modes = 'magnam';
    $request->statid = 'distinctio';

    $response = $sdk->preview->destiny2GetClanLeaderboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetLeaderboardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetLeaderboardsRequest();
    $request->destinyMembershipId = 660174;
    $request->maxtop = 287991;
    $request->membershipType = 290077;
    $request->modes = 'suscipit';
    $request->statid = 'natus';

    $response = $sdk->preview->destiny2GetLeaderboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetLeaderboardsForCharacter

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetLeaderboardsForCharacterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetLeaderboardsForCharacterRequest();
    $request->characterId = 749170;
    $request->destinyMembershipId = 428769;
    $request->maxtop = 878453;
    $request->membershipType = 135474;
    $request->modes = 'architecto';
    $request->statid = 'magnam';

    $response = $sdk->preview->destiny2GetLeaderboardsForCharacter($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetPublicVendors

Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetPublicVendorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetPublicVendorsRequest();
    $request->components = [
        569965,
    ];

    $response = $sdk->preview->destiny2GetPublicVendors($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2InsertSocketPlug

Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2InsertSocketPlugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2InsertSocketPlugSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->preview->destiny2InsertSocketPlug($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2InsertSocketPlugFree

Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2InsertSocketPlugFreeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2InsertSocketPlugFreeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->preview->destiny2InsertSocketPlugFree($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
