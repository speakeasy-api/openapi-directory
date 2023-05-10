# destiny2

## Overview

destiny2

### Available Operations

* [destiny2AwaGetActionToken](#destiny2awagetactiontoken) - Returns the action token if user approves the request.
* [destiny2AwaInitializeRequest](#destiny2awainitializerequest) - Initialize a request to perform an advanced write action.
* [destiny2AwaProvideAuthorizationResult](#destiny2awaprovideauthorizationresult) - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
* [destiny2ClearLoadout](#destiny2clearloadout) - Clear the identifiers and items of a loadout.
* [destiny2EquipItem](#destiny2equipitem) - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* [destiny2EquipItems](#destiny2equipitems) - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
* [destiny2EquipLoadout](#destiny2equiploadout) - Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* [destiny2GetActivityHistory](#destiny2getactivityhistory) - Gets activity history stats for indicated character.
* [destiny2GetCharacter](#destiny2getcharacter) - Returns character information for the supplied character.
* [destiny2GetClanAggregateStats](#destiny2getclanaggregatestats) - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetClanBannerSource](#destiny2getclanbannersource) - Returns the dictionary of values for the Clan Banner
* [destiny2GetClanLeaderboards](#destiny2getclanleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetClanWeeklyRewardState](#destiny2getclanweeklyrewardstate) - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
* [destiny2GetCollectibleNodeDetails](#destiny2getcollectiblenodedetails) - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
* [destiny2GetDestinyAggregateActivityStats](#destiny2getdestinyaggregateactivitystats) - Gets all activities the character has participated in together with aggregate statistics for those activities.
* [destiny2GetDestinyEntityDefinition](#destiny2getdestinyentitydefinition) - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
* [destiny2GetDestinyManifest](#destiny2getdestinymanifest) - Returns the current version of the manifest as a json object.
* [destiny2GetHistoricalStats](#destiny2gethistoricalstats) - Gets historical stats for indicated character.
* [destiny2GetHistoricalStatsDefinition](#destiny2gethistoricalstatsdefinition) - Gets historical stats definitions.
* [destiny2GetHistoricalStatsForAccount](#destiny2gethistoricalstatsforaccount) - Gets aggregate historical stats organized around each character for a given account.
* [destiny2GetItem](#destiny2getitem) - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
* [destiny2GetLeaderboards](#destiny2getleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* [destiny2GetLeaderboardsForCharacter](#destiny2getleaderboardsforcharacter) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetLinkedProfiles](#destiny2getlinkedprofiles) - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
* [destiny2GetPostGameCarnageReport](#destiny2getpostgamecarnagereport) - Gets the available post game carnage report for the activity ID.
* [destiny2GetProfile](#destiny2getprofile) - Returns Destiny Profile information for the supplied membership.
* [destiny2GetPublicMilestoneContent](#destiny2getpublicmilestonecontent) - Gets custom localized content for the milestone of the given hash, if it exists.
* [destiny2GetPublicMilestones](#destiny2getpublicmilestones) - Gets public information about currently available Milestones.
* [destiny2GetPublicVendors](#destiny2getpublicvendors) - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* [destiny2GetUniqueWeaponHistory](#destiny2getuniqueweaponhistory) - Gets details about unique weapon usage, including all exotic weapons.
* [destiny2GetVendor](#destiny2getvendor) - Get the details of a specific Vendor.
* [destiny2GetVendors](#destiny2getvendors) - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
* [destiny2InsertSocketPlug](#destiny2insertsocketplug) - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* [destiny2InsertSocketPlugFree](#destiny2insertsocketplugfree) - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
* [destiny2PullFromPostmaster](#destiny2pullfrompostmaster) - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
* [destiny2ReportOffensivePostGameCarnageReportPlayer](#destiny2reportoffensivepostgamecarnagereportplayer) - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
* [destiny2SearchDestinyEntities](#destiny2searchdestinyentities) - Gets a page list of Destiny items.
* [destiny2SearchDestinyPlayerByBungieName](#destiny2searchdestinyplayerbybungiename) - Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
* [destiny2SetItemLockState](#destiny2setitemlockstate) - Set the Lock State for an instanced item. You must have a valid Destiny Account.
* [destiny2SetQuestTrackedState](#destiny2setquesttrackedstate) - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
* [destiny2SnapshotLoadout](#destiny2snapshotloadout) - Snapshot a loadout with the currently equipped items.
* [destiny2TransferItem](#destiny2transferitem) - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
* [destiny2UpdateLoadoutIdentifiers](#destiny2updateloadoutidentifiers) - Update the color, icon, and name of a loadout.

## destiny2AwaGetActionToken

Returns the action token if user approves the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2AwaGetActionTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2AwaGetActionTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2AwaGetActionTokenRequest();
    $request->correlationId = 'quis';

    $requestSecurity = new Destiny2AwaGetActionTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2AwaGetActionToken($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2AwaInitializeRequest

Initialize a request to perform an advanced write action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2AwaInitializeRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2AwaInitializeRequestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2AwaInitializeRequest($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2AwaProvideAuthorizationResult

Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destiny2->destiny2AwaProvideAuthorizationResult();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2ClearLoadout

Clear the identifiers and items of a loadout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2ClearLoadoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2ClearLoadoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2ClearLoadout($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2EquipItem

Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2EquipItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2EquipItemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2EquipItem($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2EquipItems

Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2EquipItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2EquipItemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2EquipItems($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2EquipLoadout

Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2EquipLoadoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2EquipLoadoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2EquipLoadout($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetActivityHistory

Gets activity history stats for indicated character.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetActivityHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetActivityHistoryRequest();
    $request->characterId = 87129;
    $request->count = 648172;
    $request->destinyMembershipId = 20218;
    $request->membershipType = 368241;
    $request->mode = 832620;
    $request->page = 957156;

    $response = $sdk->destiny2->destiny2GetActivityHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetCharacter

Returns character information for the supplied character.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetCharacterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetCharacterRequest();
    $request->characterId = 778157;
    $request->components = [
        870013,
    ];
    $request->destinyMembershipId = 870088;
    $request->membershipType = 978619;

    $response = $sdk->destiny2->destiny2GetCharacter($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->groupId = 473608;
    $request->modes = 'quod';

    $response = $sdk->destiny2->destiny2GetClanAggregateStats($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetClanBannerSource

Returns the dictionary of values for the Clan Banner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destiny2->destiny2GetClanBannerSource();

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
    $request->groupId = 800911;
    $request->maxtop = 461479;
    $request->modes = 'totam';
    $request->statid = 'porro';

    $response = $sdk->destiny2->destiny2GetClanLeaderboards($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetClanWeeklyRewardState

Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetClanWeeklyRewardStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetClanWeeklyRewardStateRequest();
    $request->groupId = 678880;

    $response = $sdk->destiny2->destiny2GetClanWeeklyRewardState($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetCollectibleNodeDetails

Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetCollectibleNodeDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetCollectibleNodeDetailsRequest();
    $request->characterId = 118274;
    $request->collectiblePresentationNodeHash = 720633;
    $request->components = [
        582020,
        143353,
        537373,
    ];
    $request->destinyMembershipId = 944669;
    $request->membershipType = 758616;

    $response = $sdk->destiny2->destiny2GetCollectibleNodeDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetDestinyAggregateActivityStats

Gets all activities the character has participated in together with aggregate statistics for those activities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetDestinyAggregateActivityStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetDestinyAggregateActivityStatsRequest();
    $request->characterId = 521848;
    $request->destinyMembershipId = 105907;
    $request->membershipType = 414662;

    $response = $sdk->destiny2->destiny2GetDestinyAggregateActivityStats($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetDestinyEntityDefinition

Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetDestinyEntityDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetDestinyEntityDefinitionRequest();
    $request->entityType = 'molestiae';
    $request->hashIdentifier = 264555;

    $response = $sdk->destiny2->destiny2GetDestinyEntityDefinition($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetDestinyManifest

Returns the current version of the manifest as a json object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destiny2->destiny2GetDestinyManifest();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetHistoricalStats

Gets historical stats for indicated character.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetHistoricalStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetHistoricalStatsRequest();
    $request->characterId = 186332;
    $request->dayend = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-16T01:47:24.760Z');
    $request->daystart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-13T23:01:07.168Z');
    $request->destinyMembershipId = 568434;
    $request->groups = [
        18789,
    ];
    $request->membershipType = 324141;
    $request->modes = [
        149675,
        612096,
        222321,
    ];
    $request->periodType = 616934;

    $response = $sdk->destiny2->destiny2GetHistoricalStats($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetHistoricalStatsDefinition

Gets historical stats definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destiny2->destiny2GetHistoricalStatsDefinition();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetHistoricalStatsForAccount

Gets aggregate historical stats organized around each character for a given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetHistoricalStatsForAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetHistoricalStatsForAccountRequest();
    $request->destinyMembershipId = 386489;
    $request->groups = [
        902599,
        681820,
        449950,
        359508,
    ];
    $request->membershipType = 613064;

    $response = $sdk->destiny2->destiny2GetHistoricalStatsForAccount($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetItem

Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetItemRequest();
    $request->components = [
        902349,
        697631,
    ];
    $request->destinyMembershipId = 99280;
    $request->itemInstanceId = 60225;
    $request->membershipType = 969810;

    $response = $sdk->destiny2->destiny2GetItem($request);

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
    $request->destinyMembershipId = 666767;
    $request->maxtop = 653140;
    $request->membershipType = 670638;
    $request->modes = 'dolores';
    $request->statid = 'dolorem';

    $response = $sdk->destiny2->destiny2GetLeaderboards($request);

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
    $request->characterId = 358152;
    $request->destinyMembershipId = 128926;
    $request->maxtop = 750686;
    $request->membershipType = 315428;
    $request->modes = 'omnis';
    $request->statid = 'nemo';

    $response = $sdk->destiny2->destiny2GetLeaderboardsForCharacter($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetLinkedProfiles

Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetLinkedProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetLinkedProfilesRequest();
    $request->getAllMemberships = false;
    $request->membershipId = 325047;
    $request->membershipType = 570197;

    $response = $sdk->destiny2->destiny2GetLinkedProfiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetPostGameCarnageReport

Gets the available post game carnage report for the activity ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetPostGameCarnageReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetPostGameCarnageReportRequest();
    $request->activityId = 38425;

    $response = $sdk->destiny2->destiny2GetPostGameCarnageReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetProfile

Returns Destiny Profile information for the supplied membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetProfileRequest();
    $request->components = [
        634274,
        988374,
    ];
    $request->destinyMembershipId = 958950;
    $request->membershipType = 102044;

    $response = $sdk->destiny2->destiny2GetProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetPublicMilestoneContent

Gets custom localized content for the milestone of the given hash, if it exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetPublicMilestoneContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetPublicMilestoneContentRequest();
    $request->milestoneHash = 652790;

    $response = $sdk->destiny2->destiny2GetPublicMilestoneContent($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetPublicMilestones

Gets public information about currently available Milestones.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->destiny2->destiny2GetPublicMilestones();

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
        635059,
    ];

    $response = $sdk->destiny2->destiny2GetPublicVendors($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetUniqueWeaponHistory

Gets details about unique weapon usage, including all exotic weapons.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetUniqueWeaponHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetUniqueWeaponHistoryRequest();
    $request->characterId = 161309;
    $request->destinyMembershipId = 995300;
    $request->membershipType = 653108;

    $response = $sdk->destiny2->destiny2GetUniqueWeaponHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetVendor

Get the details of a specific Vendor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetVendorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetVendorRequest();
    $request->characterId = 581850;
    $request->components = [
        414369,
        466311,
    ];
    $request->destinyMembershipId = 474697;
    $request->membershipType = 244425;
    $request->vendorHash = 623510;

    $response = $sdk->destiny2->destiny2GetVendor($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2GetVendors

Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2GetVendorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2GetVendorsRequest();
    $request->characterId = 158969;
    $request->components = [
        110375,
        674752,
    ];
    $request->destinyMembershipId = 656330;
    $request->filter = 317202;
    $request->membershipType = 138183;

    $response = $sdk->destiny2->destiny2GetVendors($request);

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

    $response = $sdk->destiny2->destiny2InsertSocketPlug($requestSecurity);

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

    $response = $sdk->destiny2->destiny2InsertSocketPlugFree($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2PullFromPostmaster

Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2PullFromPostmasterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2PullFromPostmasterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2PullFromPostmaster($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2ReportOffensivePostGameCarnageReportPlayer

Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2ReportOffensivePostGameCarnageReportPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2ReportOffensivePostGameCarnageReportPlayerRequest();
    $request->activityId = 778346;

    $requestSecurity = new Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2ReportOffensivePostGameCarnageReportPlayer($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2SearchDestinyEntities

Gets a page list of Destiny items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2SearchDestinyEntitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2SearchDestinyEntitiesRequest();
    $request->page = 196582;
    $request->searchTerm = 'tenetur';
    $request->type = 'ipsam';

    $response = $sdk->destiny2->destiny2SearchDestinyEntities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2SearchDestinyPlayerByBungieName

Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2SearchDestinyPlayerByBungieNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Destiny2SearchDestinyPlayerByBungieNameRequest();
    $request->membershipType = 662527;

    $response = $sdk->destiny2->destiny2SearchDestinyPlayerByBungieName($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2SetItemLockState

Set the Lock State for an instanced item. You must have a valid Destiny Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2SetItemLockStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2SetItemLockStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2SetItemLockState($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2SetQuestTrackedState

Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2SetQuestTrackedStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2SetQuestTrackedStateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2SetQuestTrackedState($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2SnapshotLoadout

Snapshot a loadout with the currently equipped items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2SnapshotLoadoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2SnapshotLoadoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2SnapshotLoadout($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2TransferItem

Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2TransferItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2TransferItemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2TransferItem($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## destiny2UpdateLoadoutIdentifiers

Update the color, icon, and name of a loadout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Destiny2UpdateLoadoutIdentifiersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new Destiny2UpdateLoadoutIdentifiersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->destiny2->destiny2UpdateLoadoutIdentifiers($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
