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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2AwaGetActionTokenRequest;
import org.openapis.openapi.models.operations.Destiny2AwaGetActionTokenResponse;
import org.openapis.openapi.models.operations.Destiny2AwaGetActionTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2AwaGetActionTokenRequest req = new Destiny2AwaGetActionTokenRequest("veritatis");            

            Destiny2AwaGetActionTokenResponse res = sdk.destiny2.destiny2AwaGetActionToken(req, new Destiny2AwaGetActionTokenSecurity("deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2AwaInitializeRequest

Initialize a request to perform an advanced write action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2AwaInitializeRequestResponse;
import org.openapis.openapi.models.operations.Destiny2AwaInitializeRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2AwaInitializeRequestResponse res = sdk.destiny2.destiny2AwaInitializeRequest(new Destiny2AwaInitializeRequestSecurity("perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2AwaProvideAuthorizationResult

Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2AwaProvideAuthorizationResultResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2AwaProvideAuthorizationResultResponse res = sdk.destiny2.destiny2AwaProvideAuthorizationResult();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2ClearLoadout

Clear the identifiers and items of a loadout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2ClearLoadoutResponse;
import org.openapis.openapi.models.operations.Destiny2ClearLoadoutSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2ClearLoadoutResponse res = sdk.destiny2.destiny2ClearLoadout(new Destiny2ClearLoadoutSecurity("ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2EquipItem

Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2EquipItemResponse;
import org.openapis.openapi.models.operations.Destiny2EquipItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2EquipItemResponse res = sdk.destiny2.destiny2EquipItem(new Destiny2EquipItemSecurity("repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2EquipItems

Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2EquipItemsResponse;
import org.openapis.openapi.models.operations.Destiny2EquipItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2EquipItemsResponse res = sdk.destiny2.destiny2EquipItems(new Destiny2EquipItemsSecurity("sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2EquipLoadout

Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2EquipLoadoutResponse;
import org.openapis.openapi.models.operations.Destiny2EquipLoadoutSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2EquipLoadoutResponse res = sdk.destiny2.destiny2EquipLoadout(new Destiny2EquipLoadoutSecurity("quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetActivityHistory

Gets activity history stats for indicated character.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetActivityHistoryRequest;
import org.openapis.openapi.models.operations.Destiny2GetActivityHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetActivityHistoryRequest req = new Destiny2GetActivityHistoryRequest(140350L, 870013L, 870088) {{
                count = 978619;
                mode = 473608;
                page = 799159;
            }};            

            Destiny2GetActivityHistoryResponse res = sdk.destiny2.destiny2GetActivityHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetCharacter

Returns character information for the supplied character.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetCharacterRequest;
import org.openapis.openapi.models.operations.Destiny2GetCharacterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetCharacterRequest req = new Destiny2GetCharacterRequest(800911L, 461479L, 520478) {{
                components = new Integer[]{{
                    add(678880),
                    add(118274),
                    add(720633),
                    add(639921),
                }};
            }};            

            Destiny2GetCharacterResponse res = sdk.destiny2.destiny2GetCharacter(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetClanAggregateStats

Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetClanAggregateStatsRequest;
import org.openapis.openapi.models.operations.Destiny2GetClanAggregateStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetClanAggregateStatsRequest req = new Destiny2GetClanAggregateStatsRequest(582020L) {{
                modes = "fugit";
            }};            

            Destiny2GetClanAggregateStatsResponse res = sdk.destiny2.destiny2GetClanAggregateStats(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetClanBannerSource

Returns the dictionary of values for the Clan Banner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetClanBannerSourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetClanBannerSourceResponse res = sdk.destiny2.destiny2GetClanBannerSource();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetClanLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetClanLeaderboardsRequest;
import org.openapis.openapi.models.operations.Destiny2GetClanLeaderboardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetClanLeaderboardsRequest req = new Destiny2GetClanLeaderboardsRequest(537373L) {{
                maxtop = 944669;
                modes = "optio";
                statid = "totam";
            }};            

            Destiny2GetClanLeaderboardsResponse res = sdk.destiny2.destiny2GetClanLeaderboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetClanWeeklyRewardState

Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetClanWeeklyRewardStateRequest;
import org.openapis.openapi.models.operations.Destiny2GetClanWeeklyRewardStateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetClanWeeklyRewardStateRequest req = new Destiny2GetClanWeeklyRewardStateRequest(105907L);            

            Destiny2GetClanWeeklyRewardStateResponse res = sdk.destiny2.destiny2GetClanWeeklyRewardState(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetCollectibleNodeDetails

Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetCollectibleNodeDetailsRequest;
import org.openapis.openapi.models.operations.Destiny2GetCollectibleNodeDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetCollectibleNodeDetailsRequest req = new Destiny2GetCollectibleNodeDetailsRequest(414662L, 473600L, 264555L, 186332) {{
                components = new Integer[]{{
                    add(736918),
                    add(456150),
                    add(216550),
                    add(568434),
                }};
            }};            

            Destiny2GetCollectibleNodeDetailsResponse res = sdk.destiny2.destiny2GetCollectibleNodeDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetDestinyAggregateActivityStats

Gets all activities the character has participated in together with aggregate statistics for those activities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetDestinyAggregateActivityStatsRequest;
import org.openapis.openapi.models.operations.Destiny2GetDestinyAggregateActivityStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetDestinyAggregateActivityStatsRequest req = new Destiny2GetDestinyAggregateActivityStatsRequest(135218L, 18789L, 324141);            

            Destiny2GetDestinyAggregateActivityStatsResponse res = sdk.destiny2.destiny2GetDestinyAggregateActivityStats(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetDestinyEntityDefinition

Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetDestinyEntityDefinitionRequest;
import org.openapis.openapi.models.operations.Destiny2GetDestinyEntityDefinitionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetDestinyEntityDefinitionRequest req = new Destiny2GetDestinyEntityDefinitionRequest("natus", 149675L);            

            Destiny2GetDestinyEntityDefinitionResponse res = sdk.destiny2.destiny2GetDestinyEntityDefinition(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetDestinyManifest

Returns the current version of the manifest as a json object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetDestinyManifestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetDestinyManifestResponse res = sdk.destiny2.destiny2GetDestinyManifest();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetHistoricalStats

Gets historical stats for indicated character.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetHistoricalStatsRequest;
import org.openapis.openapi.models.operations.Destiny2GetHistoricalStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetHistoricalStatsRequest req = new Destiny2GetHistoricalStatsRequest(612096L, 222321L, 616934) {{
                dayend = OffsetDateTime.parse("2022-01-21T12:46:00.641Z");
                daystart = OffsetDateTime.parse("2020-12-15T09:45:44.943Z");
                groups = new Integer[]{{
                    add(359508),
                    add(613064),
                }};
                modes = new Integer[]{{
                    add(902349),
                    add(697631),
                }};
                periodType = 99280;
            }};            

            Destiny2GetHistoricalStatsResponse res = sdk.destiny2.destiny2GetHistoricalStats(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetHistoricalStatsDefinition

Gets historical stats definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetHistoricalStatsDefinitionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetHistoricalStatsDefinitionResponse res = sdk.destiny2.destiny2GetHistoricalStatsDefinition();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetHistoricalStatsForAccount

Gets aggregate historical stats organized around each character for a given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetHistoricalStatsForAccountRequest;
import org.openapis.openapi.models.operations.Destiny2GetHistoricalStatsForAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetHistoricalStatsForAccountRequest req = new Destiny2GetHistoricalStatsForAccountRequest(60225L, 969810) {{
                groups = new Integer[]{{
                    add(653140),
                    add(670638),
                    add(170909),
                }};
            }};            

            Destiny2GetHistoricalStatsForAccountResponse res = sdk.destiny2.destiny2GetHistoricalStatsForAccount(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetItem

Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetItemRequest;
import org.openapis.openapi.models.operations.Destiny2GetItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetItemRequest req = new Destiny2GetItemRequest(210382L, 358152L, 128926) {{
                components = new Integer[]{{
                    add(315428),
                    add(607831),
                    add(363711),
                    add(325047),
                }};
            }};            

            Destiny2GetItemResponse res = sdk.destiny2.destiny2GetItem(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsRequest;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetLeaderboardsRequest req = new Destiny2GetLeaderboardsRequest(570197L, 38425) {{
                maxtop = 438601;
                modes = "culpa";
                statid = "doloribus";
            }};            

            Destiny2GetLeaderboardsResponse res = sdk.destiny2.destiny2GetLeaderboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetLeaderboardsForCharacter

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsForCharacterRequest;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsForCharacterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetLeaderboardsForCharacterRequest req = new Destiny2GetLeaderboardsForCharacterRequest(958950L, 102044L, 652790) {{
                maxtop = 208876;
                modes = "culpa";
                statid = "consequuntur";
            }};            

            Destiny2GetLeaderboardsForCharacterResponse res = sdk.destiny2.destiny2GetLeaderboardsForCharacter(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetLinkedProfiles

Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetLinkedProfilesRequest;
import org.openapis.openapi.models.operations.Destiny2GetLinkedProfilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetLinkedProfilesRequest req = new Destiny2GetLinkedProfilesRequest(995300L, 653108) {{
                getAllMemberships = false;
            }};            

            Destiny2GetLinkedProfilesResponse res = sdk.destiny2.destiny2GetLinkedProfiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetPostGameCarnageReport

Gets the available post game carnage report for the activity ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetPostGameCarnageReportRequest;
import org.openapis.openapi.models.operations.Destiny2GetPostGameCarnageReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetPostGameCarnageReportRequest req = new Destiny2GetPostGameCarnageReportRequest(581850L);            

            Destiny2GetPostGameCarnageReportResponse res = sdk.destiny2.destiny2GetPostGameCarnageReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetProfile

Returns Destiny Profile information for the supplied membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetProfileRequest;
import org.openapis.openapi.models.operations.Destiny2GetProfileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetProfileRequest req = new Destiny2GetProfileRequest(253291L, 414369) {{
                components = new Integer[]{{
                    add(474697),
                    add(244425),
                }};
            }};            

            Destiny2GetProfileResponse res = sdk.destiny2.destiny2GetProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetPublicMilestoneContent

Gets custom localized content for the milestone of the given hash, if it exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetPublicMilestoneContentRequest;
import org.openapis.openapi.models.operations.Destiny2GetPublicMilestoneContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetPublicMilestoneContentRequest req = new Destiny2GetPublicMilestoneContentRequest(623510L);            

            Destiny2GetPublicMilestoneContentResponse res = sdk.destiny2.destiny2GetPublicMilestoneContent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetPublicMilestones

Gets public information about currently available Milestones.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetPublicMilestonesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetPublicMilestonesResponse res = sdk.destiny2.destiny2GetPublicMilestones();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetPublicVendors

Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetPublicVendorsRequest;
import org.openapis.openapi.models.operations.Destiny2GetPublicVendorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetPublicVendorsRequest req = new Destiny2GetPublicVendorsRequest() {{
                components = new Integer[]{{
                    add(338007),
                }};
            }};            

            Destiny2GetPublicVendorsResponse res = sdk.destiny2.destiny2GetPublicVendors(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetUniqueWeaponHistory

Gets details about unique weapon usage, including all exotic weapons.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetUniqueWeaponHistoryRequest;
import org.openapis.openapi.models.operations.Destiny2GetUniqueWeaponHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetUniqueWeaponHistoryRequest req = new Destiny2GetUniqueWeaponHistoryRequest(110375L, 674752L, 656330);            

            Destiny2GetUniqueWeaponHistoryResponse res = sdk.destiny2.destiny2GetUniqueWeaponHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetVendor

Get the details of a specific Vendor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetVendorRequest;
import org.openapis.openapi.models.operations.Destiny2GetVendorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetVendorRequest req = new Destiny2GetVendorRequest(317202L, 138183L, 778346, 196582L) {{
                components = new Integer[]{{
                    add(368725),
                    add(662527),
                    add(820994),
                    add(13571),
                }};
            }};            

            Destiny2GetVendorResponse res = sdk.destiny2.destiny2GetVendor(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetVendors

Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetVendorsRequest;
import org.openapis.openapi.models.operations.Destiny2GetVendorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetVendorsRequest req = new Destiny2GetVendorsRequest(97101L, 622846L, 837945) {{
                components = new Integer[]{{
                    add(96098),
                    add(971945),
                    add(976460),
                }};
                filter = 878194;
            }};            

            Destiny2GetVendorsResponse res = sdk.destiny2.destiny2GetVendors(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2InsertSocketPlug

Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugResponse;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2InsertSocketPlugResponse res = sdk.destiny2.destiny2InsertSocketPlug(new Destiny2InsertSocketPlugSecurity("nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2InsertSocketPlugFree

Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugFreeResponse;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugFreeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2InsertSocketPlugFreeResponse res = sdk.destiny2.destiny2InsertSocketPlugFree(new Destiny2InsertSocketPlugFreeSecurity("praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2PullFromPostmaster

Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2PullFromPostmasterResponse;
import org.openapis.openapi.models.operations.Destiny2PullFromPostmasterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2PullFromPostmasterResponse res = sdk.destiny2.destiny2PullFromPostmaster(new Destiny2PullFromPostmasterSecurity("voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2ReportOffensivePostGameCarnageReportPlayer

Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2ReportOffensivePostGameCarnageReportPlayerRequest;
import org.openapis.openapi.models.operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse;
import org.openapis.openapi.models.operations.Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2ReportOffensivePostGameCarnageReportPlayerRequest req = new Destiny2ReportOffensivePostGameCarnageReportPlayerRequest(55714L);            

            Destiny2ReportOffensivePostGameCarnageReportPlayerResponse res = sdk.destiny2.destiny2ReportOffensivePostGameCarnageReportPlayer(req, new Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity("omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2SearchDestinyEntities

Gets a page list of Destiny items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2SearchDestinyEntitiesRequest;
import org.openapis.openapi.models.operations.Destiny2SearchDestinyEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2SearchDestinyEntitiesRequest req = new Destiny2SearchDestinyEntitiesRequest("voluptate", "cum") {{
                page = 19987;
            }};            

            Destiny2SearchDestinyEntitiesResponse res = sdk.destiny2.destiny2SearchDestinyEntities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2SearchDestinyPlayerByBungieName

Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2SearchDestinyPlayerByBungieNameRequest;
import org.openapis.openapi.models.operations.Destiny2SearchDestinyPlayerByBungieNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2SearchDestinyPlayerByBungieNameRequest req = new Destiny2SearchDestinyPlayerByBungieNameRequest(39187);            

            Destiny2SearchDestinyPlayerByBungieNameResponse res = sdk.destiny2.destiny2SearchDestinyPlayerByBungieName(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2SetItemLockState

Set the Lock State for an instanced item. You must have a valid Destiny Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2SetItemLockStateResponse;
import org.openapis.openapi.models.operations.Destiny2SetItemLockStateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2SetItemLockStateResponse res = sdk.destiny2.destiny2SetItemLockState(new Destiny2SetItemLockStateSecurity("reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2SetQuestTrackedState

Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2SetQuestTrackedStateResponse;
import org.openapis.openapi.models.operations.Destiny2SetQuestTrackedStateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2SetQuestTrackedStateResponse res = sdk.destiny2.destiny2SetQuestTrackedState(new Destiny2SetQuestTrackedStateSecurity("ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2SnapshotLoadout

Snapshot a loadout with the currently equipped items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2SnapshotLoadoutResponse;
import org.openapis.openapi.models.operations.Destiny2SnapshotLoadoutSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2SnapshotLoadoutResponse res = sdk.destiny2.destiny2SnapshotLoadout(new Destiny2SnapshotLoadoutSecurity("maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2TransferItem

Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2TransferItemResponse;
import org.openapis.openapi.models.operations.Destiny2TransferItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2TransferItemResponse res = sdk.destiny2.destiny2TransferItem(new Destiny2TransferItemSecurity("dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2UpdateLoadoutIdentifiers

Update the color, icon, and name of a loadout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2UpdateLoadoutIdentifiersResponse;
import org.openapis.openapi.models.operations.Destiny2UpdateLoadoutIdentifiersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2UpdateLoadoutIdentifiersResponse res = sdk.destiny2.destiny2UpdateLoadoutIdentifiers(new Destiny2UpdateLoadoutIdentifiersSecurity("corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
