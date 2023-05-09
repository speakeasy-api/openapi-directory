# Destiny2

## Overview

destiny2

### Available Operations

* [Destiny2AwaGetActionToken](#destiny2awagetactiontoken) - Returns the action token if user approves the request.
* [Destiny2AwaInitializeRequest](#destiny2awainitializerequest) - Initialize a request to perform an advanced write action.
* [Destiny2AwaProvideAuthorizationResult](#destiny2awaprovideauthorizationresult) - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
* [Destiny2ClearLoadout](#destiny2clearloadout) - Clear the identifiers and items of a loadout.
* [Destiny2EquipItem](#destiny2equipitem) - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* [Destiny2EquipItems](#destiny2equipitems) - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
* [Destiny2EquipLoadout](#destiny2equiploadout) - Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* [Destiny2GetActivityHistory](#destiny2getactivityhistory) - Gets activity history stats for indicated character.
* [Destiny2GetCharacter](#destiny2getcharacter) - Returns character information for the supplied character.
* [Destiny2GetClanAggregateStats](#destiny2getclanaggregatestats) - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetClanBannerSource](#destiny2getclanbannersource) - Returns the dictionary of values for the Clan Banner
* [Destiny2GetClanLeaderboards](#destiny2getclanleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetClanWeeklyRewardState](#destiny2getclanweeklyrewardstate) - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
* [Destiny2GetCollectibleNodeDetails](#destiny2getcollectiblenodedetails) - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
* [Destiny2GetDestinyAggregateActivityStats](#destiny2getdestinyaggregateactivitystats) - Gets all activities the character has participated in together with aggregate statistics for those activities.
* [Destiny2GetDestinyEntityDefinition](#destiny2getdestinyentitydefinition) - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
* [Destiny2GetDestinyManifest](#destiny2getdestinymanifest) - Returns the current version of the manifest as a json object.
* [Destiny2GetHistoricalStats](#destiny2gethistoricalstats) - Gets historical stats for indicated character.
* [Destiny2GetHistoricalStatsDefinition](#destiny2gethistoricalstatsdefinition) - Gets historical stats definitions.
* [Destiny2GetHistoricalStatsForAccount](#destiny2gethistoricalstatsforaccount) - Gets aggregate historical stats organized around each character for a given account.
* [Destiny2GetItem](#destiny2getitem) - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
* [Destiny2GetLeaderboards](#destiny2getleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* [Destiny2GetLeaderboardsForCharacter](#destiny2getleaderboardsforcharacter) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetLinkedProfiles](#destiny2getlinkedprofiles) - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
* [Destiny2GetPostGameCarnageReport](#destiny2getpostgamecarnagereport) - Gets the available post game carnage report for the activity ID.
* [Destiny2GetProfile](#destiny2getprofile) - Returns Destiny Profile information for the supplied membership.
* [Destiny2GetPublicMilestoneContent](#destiny2getpublicmilestonecontent) - Gets custom localized content for the milestone of the given hash, if it exists.
* [Destiny2GetPublicMilestones](#destiny2getpublicmilestones) - Gets public information about currently available Milestones.
* [Destiny2GetPublicVendors](#destiny2getpublicvendors) - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* [Destiny2GetUniqueWeaponHistory](#destiny2getuniqueweaponhistory) - Gets details about unique weapon usage, including all exotic weapons.
* [Destiny2GetVendor](#destiny2getvendor) - Get the details of a specific Vendor.
* [Destiny2GetVendors](#destiny2getvendors) - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
* [Destiny2InsertSocketPlug](#destiny2insertsocketplug) - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* [Destiny2InsertSocketPlugFree](#destiny2insertsocketplugfree) - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
* [Destiny2PullFromPostmaster](#destiny2pullfrompostmaster) - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
* [Destiny2ReportOffensivePostGameCarnageReportPlayer](#destiny2reportoffensivepostgamecarnagereportplayer) - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
* [Destiny2SearchDestinyEntities](#destiny2searchdestinyentities) - Gets a page list of Destiny items.
* [Destiny2SearchDestinyPlayerByBungieName](#destiny2searchdestinyplayerbybungiename) - Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
* [Destiny2SetItemLockState](#destiny2setitemlockstate) - Set the Lock State for an instanced item. You must have a valid Destiny Account.
* [Destiny2SetQuestTrackedState](#destiny2setquesttrackedstate) - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
* [Destiny2SnapshotLoadout](#destiny2snapshotloadout) - Snapshot a loadout with the currently equipped items.
* [Destiny2TransferItem](#destiny2transferitem) - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
* [Destiny2UpdateLoadoutIdentifiers](#destiny2updateloadoutidentifiers) - Update the color, icon, and name of a loadout.

## Destiny2AwaGetActionToken

Returns the action token if user approves the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2AwaGetActionToken(ctx, operations.Destiny2AwaGetActionTokenRequest{
        CorrelationID: "quis",
    }, operations.Destiny2AwaGetActionTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2AwaInitializeRequest

Initialize a request to perform an advanced write action.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2AwaInitializeRequest(ctx, operations.Destiny2AwaInitializeRequestSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2AwaProvideAuthorizationResult

Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2AwaProvideAuthorizationResult(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2ClearLoadout

Clear the identifiers and items of a loadout.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2ClearLoadout(ctx, operations.Destiny2ClearLoadoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2EquipItem

Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2EquipItem(ctx, operations.Destiny2EquipItemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2EquipItems

Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2EquipItems(ctx, operations.Destiny2EquipItemsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2EquipLoadout

Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2EquipLoadout(ctx, operations.Destiny2EquipLoadoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetActivityHistory

Gets activity history stats for indicated character.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetActivityHistory(ctx, operations.Destiny2GetActivityHistoryRequest{
        CharacterID: 87129,
        Count: sdk.Int(648172),
        DestinyMembershipID: 20218,
        MembershipType: 368241,
        Mode: sdk.Int(832620),
        Page: sdk.Int(957156),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetCharacter

Returns character information for the supplied character.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetCharacter(ctx, operations.Destiny2GetCharacterRequest{
        CharacterID: 778157,
        Components: []int{
            870013,
        },
        DestinyMembershipID: 870088,
        MembershipType: 978619,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetClanAggregateStats

Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetClanAggregateStats(ctx, operations.Destiny2GetClanAggregateStatsRequest{
        GroupID: 473608,
        Modes: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetClanBannerSource

Returns the dictionary of values for the Clan Banner

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetClanBannerSource(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetClanLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetClanLeaderboards(ctx, operations.Destiny2GetClanLeaderboardsRequest{
        GroupID: 800911,
        Maxtop: sdk.Int(461479),
        Modes: sdk.String("totam"),
        Statid: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetClanWeeklyRewardState

Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetClanWeeklyRewardState(ctx, operations.Destiny2GetClanWeeklyRewardStateRequest{
        GroupID: 678880,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetCollectibleNodeDetails

Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetCollectibleNodeDetails(ctx, operations.Destiny2GetCollectibleNodeDetailsRequest{
        CharacterID: 118274,
        CollectiblePresentationNodeHash: 720633,
        Components: []int{
            582020,
            143353,
            537373,
        },
        DestinyMembershipID: 944669,
        MembershipType: 758616,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetDestinyAggregateActivityStats

Gets all activities the character has participated in together with aggregate statistics for those activities.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetDestinyAggregateActivityStats(ctx, operations.Destiny2GetDestinyAggregateActivityStatsRequest{
        CharacterID: 521848,
        DestinyMembershipID: 105907,
        MembershipType: 414662,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetDestinyEntityDefinition

Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetDestinyEntityDefinition(ctx, operations.Destiny2GetDestinyEntityDefinitionRequest{
        EntityType: "molestiae",
        HashIdentifier: 264555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetDestinyManifest

Returns the current version of the manifest as a json object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetDestinyManifest(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetHistoricalStats

Gets historical stats for indicated character.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetHistoricalStats(ctx, operations.Destiny2GetHistoricalStatsRequest{
        CharacterID: 186332,
        Dayend: types.MustTimeFromString("2020-10-16T01:47:24.760Z"),
        Daystart: types.MustTimeFromString("2022-10-13T23:01:07.168Z"),
        DestinyMembershipID: 568434,
        Groups: []int{
            18789,
        },
        MembershipType: 324141,
        Modes: []int{
            149675,
            612096,
            222321,
        },
        PeriodType: sdk.Int(616934),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetHistoricalStatsDefinition

Gets historical stats definitions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetHistoricalStatsDefinition(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetHistoricalStatsForAccount

Gets aggregate historical stats organized around each character for a given account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetHistoricalStatsForAccount(ctx, operations.Destiny2GetHistoricalStatsForAccountRequest{
        DestinyMembershipID: 386489,
        Groups: []int{
            902599,
            681820,
            449950,
            359508,
        },
        MembershipType: 613064,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetItem

Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetItem(ctx, operations.Destiny2GetItemRequest{
        Components: []int{
            902349,
            697631,
        },
        DestinyMembershipID: 99280,
        ItemInstanceID: 60225,
        MembershipType: 969810,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetLeaderboards(ctx, operations.Destiny2GetLeaderboardsRequest{
        DestinyMembershipID: 666767,
        Maxtop: sdk.Int(653140),
        MembershipType: 670638,
        Modes: sdk.String("dolores"),
        Statid: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetLeaderboardsForCharacter

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetLeaderboardsForCharacter(ctx, operations.Destiny2GetLeaderboardsForCharacterRequest{
        CharacterID: 358152,
        DestinyMembershipID: 128926,
        Maxtop: sdk.Int(750686),
        MembershipType: 315428,
        Modes: sdk.String("omnis"),
        Statid: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetLinkedProfiles

Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetLinkedProfiles(ctx, operations.Destiny2GetLinkedProfilesRequest{
        GetAllMemberships: sdk.Bool(false),
        MembershipID: 325047,
        MembershipType: 570197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetPostGameCarnageReport

Gets the available post game carnage report for the activity ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetPostGameCarnageReport(ctx, operations.Destiny2GetPostGameCarnageReportRequest{
        ActivityID: 38425,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetProfile

Returns Destiny Profile information for the supplied membership.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetProfile(ctx, operations.Destiny2GetProfileRequest{
        Components: []int{
            634274,
            988374,
        },
        DestinyMembershipID: 958950,
        MembershipType: 102044,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetPublicMilestoneContent

Gets custom localized content for the milestone of the given hash, if it exists.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetPublicMilestoneContent(ctx, operations.Destiny2GetPublicMilestoneContentRequest{
        MilestoneHash: 652790,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetPublicMilestones

Gets public information about currently available Milestones.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetPublicMilestones(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetPublicVendors

Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetPublicVendors(ctx, operations.Destiny2GetPublicVendorsRequest{
        Components: []int{
            635059,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetUniqueWeaponHistory

Gets details about unique weapon usage, including all exotic weapons.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetUniqueWeaponHistory(ctx, operations.Destiny2GetUniqueWeaponHistoryRequest{
        CharacterID: 161309,
        DestinyMembershipID: 995300,
        MembershipType: 653108,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetVendor

Get the details of a specific Vendor.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetVendor(ctx, operations.Destiny2GetVendorRequest{
        CharacterID: 581850,
        Components: []int{
            414369,
            466311,
        },
        DestinyMembershipID: 474697,
        MembershipType: 244425,
        VendorHash: 623510,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2GetVendors

Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2GetVendors(ctx, operations.Destiny2GetVendorsRequest{
        CharacterID: 158969,
        Components: []int{
            110375,
            674752,
        },
        DestinyMembershipID: 656330,
        Filter: sdk.Int(317202),
        MembershipType: 138183,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2InsertSocketPlug

Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2InsertSocketPlug(ctx, operations.Destiny2InsertSocketPlugSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2InsertSocketPlugFree

Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2InsertSocketPlugFree(ctx, operations.Destiny2InsertSocketPlugFreeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2PullFromPostmaster

Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2PullFromPostmaster(ctx, operations.Destiny2PullFromPostmasterSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2ReportOffensivePostGameCarnageReportPlayer

Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2ReportOffensivePostGameCarnageReportPlayer(ctx, operations.Destiny2ReportOffensivePostGameCarnageReportPlayerRequest{
        ActivityID: 778346,
    }, operations.Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2SearchDestinyEntities

Gets a page list of Destiny items.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2SearchDestinyEntities(ctx, operations.Destiny2SearchDestinyEntitiesRequest{
        Page: sdk.Int(196582),
        SearchTerm: "tenetur",
        Type: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2SearchDestinyPlayerByBungieName

Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2SearchDestinyPlayerByBungieName(ctx, operations.Destiny2SearchDestinyPlayerByBungieNameRequest{
        MembershipType: 662527,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2SetItemLockState

Set the Lock State for an instanced item. You must have a valid Destiny Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2SetItemLockState(ctx, operations.Destiny2SetItemLockStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2SetQuestTrackedState

Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2SetQuestTrackedState(ctx, operations.Destiny2SetQuestTrackedStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2SnapshotLoadout

Snapshot a loadout with the currently equipped items.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2SnapshotLoadout(ctx, operations.Destiny2SnapshotLoadoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2TransferItem

Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2TransferItem(ctx, operations.Destiny2TransferItemSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Destiny2UpdateLoadoutIdentifiers

Update the color, icon, and name of a loadout.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Destiny2.Destiny2UpdateLoadoutIdentifiers(ctx, operations.Destiny2UpdateLoadoutIdentifiersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
