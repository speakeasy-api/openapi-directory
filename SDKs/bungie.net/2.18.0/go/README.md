# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bungie.net/2.18.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.DotGetAvailableLocales(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DotGetAvailableLocales](docs/sdk/README.md#dotgetavailablelocales) - List of available localization cultures
* [DotGetCommonSettings](docs/sdk/README.md#dotgetcommonsettings) - Get the common settings used by the Bungie.Net environment.
* [DotGetGlobalAlerts](docs/sdk/README.md#dotgetglobalalerts) - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* [DotGetUserSystemOverrides](docs/sdk/README.md#dotgetusersystemoverrides) - Get the user-specific system overrides that should be respected alongside common systems.

### [App](docs/app/README.md)

* [AppGetApplicationAPIUsage](docs/app/README.md#appgetapplicationapiusage) - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* [AppGetBungieApplications](docs/app/README.md#appgetbungieapplications) - Get list of applications created by Bungie.

### [CommunityContent](docs/communitycontent/README.md)

* [CommunityContentGetCommunityContent](docs/communitycontent/README.md#communitycontentgetcommunitycontent) - Returns community content.

### [Content](docs/content/README.md)

* [ContentGetContentByID](docs/content/README.md#contentgetcontentbyid) - Returns a content item referenced by id
* [ContentGetContentByTagAndType](docs/content/README.md#contentgetcontentbytagandtype) - Returns the newest item that matches a given tag and Content Type.
* [ContentGetContentType](docs/content/README.md#contentgetcontenttype) - Gets an object describing a particular variant of content.
* [ContentRssNewsArticles](docs/content/README.md#contentrssnewsarticles) - Returns a JSON string response that is the RSS feed for news articles.
* [ContentSearchContentByTagAndType](docs/content/README.md#contentsearchcontentbytagandtype) - Searches for Content Items that match the given Tag and Content Type.
* [ContentSearchContentWithText](docs/content/README.md#contentsearchcontentwithtext) - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* [ContentSearchHelpArticles](docs/content/README.md#contentsearchhelparticles) - Search for Help Articles.

### [Destiny2](docs/destiny2/README.md)

* [Destiny2AwaGetActionToken](docs/destiny2/README.md#destiny2awagetactiontoken) - Returns the action token if user approves the request.
* [Destiny2AwaInitializeRequest](docs/destiny2/README.md#destiny2awainitializerequest) - Initialize a request to perform an advanced write action.
* [Destiny2AwaProvideAuthorizationResult](docs/destiny2/README.md#destiny2awaprovideauthorizationresult) - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
* [Destiny2ClearLoadout](docs/destiny2/README.md#destiny2clearloadout) - Clear the identifiers and items of a loadout.
* [Destiny2EquipItem](docs/destiny2/README.md#destiny2equipitem) - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* [Destiny2EquipItems](docs/destiny2/README.md#destiny2equipitems) - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
* [Destiny2EquipLoadout](docs/destiny2/README.md#destiny2equiploadout) - Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* [Destiny2GetActivityHistory](docs/destiny2/README.md#destiny2getactivityhistory) - Gets activity history stats for indicated character.
* [Destiny2GetCharacter](docs/destiny2/README.md#destiny2getcharacter) - Returns character information for the supplied character.
* [Destiny2GetClanAggregateStats](docs/destiny2/README.md#destiny2getclanaggregatestats) - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetClanBannerSource](docs/destiny2/README.md#destiny2getclanbannersource) - Returns the dictionary of values for the Clan Banner
* [Destiny2GetClanLeaderboards](docs/destiny2/README.md#destiny2getclanleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetClanWeeklyRewardState](docs/destiny2/README.md#destiny2getclanweeklyrewardstate) - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
* [Destiny2GetCollectibleNodeDetails](docs/destiny2/README.md#destiny2getcollectiblenodedetails) - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
* [Destiny2GetDestinyAggregateActivityStats](docs/destiny2/README.md#destiny2getdestinyaggregateactivitystats) - Gets all activities the character has participated in together with aggregate statistics for those activities.
* [Destiny2GetDestinyEntityDefinition](docs/destiny2/README.md#destiny2getdestinyentitydefinition) - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
* [Destiny2GetDestinyManifest](docs/destiny2/README.md#destiny2getdestinymanifest) - Returns the current version of the manifest as a json object.
* [Destiny2GetHistoricalStats](docs/destiny2/README.md#destiny2gethistoricalstats) - Gets historical stats for indicated character.
* [Destiny2GetHistoricalStatsDefinition](docs/destiny2/README.md#destiny2gethistoricalstatsdefinition) - Gets historical stats definitions.
* [Destiny2GetHistoricalStatsForAccount](docs/destiny2/README.md#destiny2gethistoricalstatsforaccount) - Gets aggregate historical stats organized around each character for a given account.
* [Destiny2GetItem](docs/destiny2/README.md#destiny2getitem) - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
* [Destiny2GetLeaderboards](docs/destiny2/README.md#destiny2getleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* [Destiny2GetLeaderboardsForCharacter](docs/destiny2/README.md#destiny2getleaderboardsforcharacter) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetLinkedProfiles](docs/destiny2/README.md#destiny2getlinkedprofiles) - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
* [Destiny2GetPostGameCarnageReport](docs/destiny2/README.md#destiny2getpostgamecarnagereport) - Gets the available post game carnage report for the activity ID.
* [Destiny2GetProfile](docs/destiny2/README.md#destiny2getprofile) - Returns Destiny Profile information for the supplied membership.
* [Destiny2GetPublicMilestoneContent](docs/destiny2/README.md#destiny2getpublicmilestonecontent) - Gets custom localized content for the milestone of the given hash, if it exists.
* [Destiny2GetPublicMilestones](docs/destiny2/README.md#destiny2getpublicmilestones) - Gets public information about currently available Milestones.
* [Destiny2GetPublicVendors](docs/destiny2/README.md#destiny2getpublicvendors) - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* [Destiny2GetUniqueWeaponHistory](docs/destiny2/README.md#destiny2getuniqueweaponhistory) - Gets details about unique weapon usage, including all exotic weapons.
* [Destiny2GetVendor](docs/destiny2/README.md#destiny2getvendor) - Get the details of a specific Vendor.
* [Destiny2GetVendors](docs/destiny2/README.md#destiny2getvendors) - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
* [Destiny2InsertSocketPlug](docs/destiny2/README.md#destiny2insertsocketplug) - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* [Destiny2InsertSocketPlugFree](docs/destiny2/README.md#destiny2insertsocketplugfree) - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
* [Destiny2PullFromPostmaster](docs/destiny2/README.md#destiny2pullfrompostmaster) - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
* [Destiny2ReportOffensivePostGameCarnageReportPlayer](docs/destiny2/README.md#destiny2reportoffensivepostgamecarnagereportplayer) - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
* [Destiny2SearchDestinyEntities](docs/destiny2/README.md#destiny2searchdestinyentities) - Gets a page list of Destiny items.
* [Destiny2SearchDestinyPlayerByBungieName](docs/destiny2/README.md#destiny2searchdestinyplayerbybungiename) - Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
* [Destiny2SetItemLockState](docs/destiny2/README.md#destiny2setitemlockstate) - Set the Lock State for an instanced item. You must have a valid Destiny Account.
* [Destiny2SetQuestTrackedState](docs/destiny2/README.md#destiny2setquesttrackedstate) - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
* [Destiny2SnapshotLoadout](docs/destiny2/README.md#destiny2snapshotloadout) - Snapshot a loadout with the currently equipped items.
* [Destiny2TransferItem](docs/destiny2/README.md#destiny2transferitem) - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
* [Destiny2UpdateLoadoutIdentifiers](docs/destiny2/README.md#destiny2updateloadoutidentifiers) - Update the color, icon, and name of a loadout.

### [Fireteam](docs/fireteam/README.md)

* [FireteamGetActivePrivateClanFireteamCount](docs/fireteam/README.md#fireteamgetactiveprivateclanfireteamcount) - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* [FireteamGetAvailableClanFireteams](docs/fireteam/README.md#fireteamgetavailableclanfireteams) - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* [FireteamGetClanFireteam](docs/fireteam/README.md#fireteamgetclanfireteam) - Gets a specific fireteam.
* [FireteamGetMyClanFireteams](docs/fireteam/README.md#fireteamgetmyclanfireteams) - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* [FireteamSearchPublicAvailableClanFireteams](docs/fireteam/README.md#fireteamsearchpublicavailableclanfireteams) - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

### [Forum](docs/forum/README.md)

* [ForumGetCoreTopicsPaged](docs/forum/README.md#forumgetcoretopicspaged) - Gets a listing of all topics marked as part of the core group.
* [ForumGetForumTagSuggestions](docs/forum/README.md#forumgetforumtagsuggestions) - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* [ForumGetPoll](docs/forum/README.md#forumgetpoll) - Gets the specified forum poll.
* [ForumGetPostAndParent](docs/forum/README.md#forumgetpostandparent) - Returns the post specified and its immediate parent.
* [ForumGetPostAndParentAwaitingApproval](docs/forum/README.md#forumgetpostandparentawaitingapproval) - Returns the post specified and its immediate parent of posts that are awaiting approval.
* [ForumGetPostsThreadedPaged](docs/forum/README.md#forumgetpoststhreadedpaged) - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* [ForumGetPostsThreadedPagedFromChild](docs/forum/README.md#forumgetpoststhreadedpagedfromchild) - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* [ForumGetRecruitmentThreadSummaries](docs/forum/README.md#forumgetrecruitmentthreadsummaries) - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* [ForumGetTopicForContent](docs/forum/README.md#forumgettopicforcontent) - Gets the post Id for the given content item's comments, if it exists.
* [ForumGetTopicsPaged](docs/forum/README.md#forumgettopicspaged) - Get topics from any forum.

### [GroupV2](docs/groupv2/README.md)

* [GroupV2AbdicateFoundership](docs/groupv2/README.md#groupv2abdicatefoundership) - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
* [GroupV2AddOptionalConversation](docs/groupv2/README.md#groupv2addoptionalconversation) - Add a new optional conversation/chat channel. Requires admin permissions to the group.
* [GroupV2ApproveAllPending](docs/groupv2/README.md#groupv2approveallpending) - Approve all of the pending users for the given group.
* [GroupV2ApprovePending](docs/groupv2/README.md#groupv2approvepending) - Approve the given membershipId to join the group/clan as long as they have applied.
* [GroupV2ApprovePendingForList](docs/groupv2/README.md#groupv2approvependingforlist) - Approve all of the pending users for the given group.
* [GroupV2BanMember](docs/groupv2/README.md#groupv2banmember) - Bans the requested member from the requested group for the specified period of time.
* [GroupV2DenyAllPending](docs/groupv2/README.md#groupv2denyallpending) - Deny all of the pending users for the given group.
* [GroupV2DenyPendingForList](docs/groupv2/README.md#groupv2denypendingforlist) - Deny all of the pending users for the given group that match the passed-in .
* [GroupV2EditClanBanner](docs/groupv2/README.md#groupv2editclanbanner) - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
* [GroupV2EditFounderOptions](docs/groupv2/README.md#groupv2editfounderoptions) - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
* [GroupV2EditGroup](docs/groupv2/README.md#groupv2editgroup) - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
* [GroupV2EditGroupMembership](docs/groupv2/README.md#groupv2editgroupmembership) - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
* [GroupV2EditOptionalConversation](docs/groupv2/README.md#groupv2editoptionalconversation) - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
* [GroupV2GetAdminsAndFounderOfGroup](docs/groupv2/README.md#groupv2getadminsandfounderofgroup) - Get the list of members in a given group who are of admin level or higher.
* [GroupV2GetAvailableAvatars](docs/groupv2/README.md#groupv2getavailableavatars) - Returns a list of all available group avatars for the signed-in user.
* [GroupV2GetAvailableThemes](docs/groupv2/README.md#groupv2getavailablethemes) - Returns a list of all available group themes.
* [GroupV2GetBannedMembersOfGroup](docs/groupv2/README.md#groupv2getbannedmembersofgroup) - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
* [GroupV2GetGroup](docs/groupv2/README.md#groupv2getgroup) - Get information about a specific group of the given ID.
* [GroupV2GetGroupByName](docs/groupv2/README.md#groupv2getgroupbyname) - Get information about a specific group with the given name and type.
* [GroupV2GetGroupByNameV2](docs/groupv2/README.md#groupv2getgroupbynamev2) - Get information about a specific group with the given name and type. The POST version.
* [GroupV2GetGroupOptionalConversations](docs/groupv2/README.md#groupv2getgroupoptionalconversations) - Gets a list of available optional conversation channels and their settings.
* [GroupV2GetGroupsForMember](docs/groupv2/README.md#groupv2getgroupsformember) - Get information about the groups that a given member has joined.
* [GroupV2GetInvitedIndividuals](docs/groupv2/README.md#groupv2getinvitedindividuals) - Get the list of users who have been invited into the group.
* [GroupV2GetMembersOfGroup](docs/groupv2/README.md#groupv2getmembersofgroup) - Get the list of members in a given group.
* [GroupV2GetPendingMemberships](docs/groupv2/README.md#groupv2getpendingmemberships) - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
* [GroupV2GetPotentialGroupsForMember](docs/groupv2/README.md#groupv2getpotentialgroupsformember) - Get information about the groups that a given member has applied to or been invited to.
* [GroupV2GetRecommendedGroups](docs/groupv2/README.md#groupv2getrecommendedgroups) - Gets groups recommended for you based on the groups to whom those you follow belong.
* [GroupV2GetUserClanInviteSetting](docs/groupv2/README.md#groupv2getuserclaninvitesetting) - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
* [GroupV2GroupSearch](docs/groupv2/README.md#groupv2groupsearch) - Search for Groups.
* [GroupV2IndividualGroupInvite](docs/groupv2/README.md#groupv2individualgroupinvite) - Invite a user to join this group.
* [GroupV2IndividualGroupInviteCancel](docs/groupv2/README.md#groupv2individualgroupinvitecancel) - Cancels a pending invitation to join a group.
* [GroupV2KickMember](docs/groupv2/README.md#groupv2kickmember) - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
* [GroupV2RecoverGroupForFounder](docs/groupv2/README.md#groupv2recovergroupforfounder) - Allows a founder to manually recover a group they can see in game but not on bungie.net
* [GroupV2UnbanMember](docs/groupv2/README.md#groupv2unbanmember) - Unbans the requested member, allowing them to re-apply for membership.

### [Preview](docs/preview/README.md)

* [Destiny2GetClanAggregateStats](docs/preview/README.md#destiny2getclanaggregatestats) - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetClanLeaderboards](docs/preview/README.md#destiny2getclanleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetLeaderboards](docs/preview/README.md#destiny2getleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* [Destiny2GetLeaderboardsForCharacter](docs/preview/README.md#destiny2getleaderboardsforcharacter) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [Destiny2GetPublicVendors](docs/preview/README.md#destiny2getpublicvendors) - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* [Destiny2InsertSocketPlug](docs/preview/README.md#destiny2insertsocketplug) - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* [Destiny2InsertSocketPlugFree](docs/preview/README.md#destiny2insertsocketplugfree) - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

### [Social](docs/social/README.md)

* [SocialAcceptFriendRequest](docs/social/README.md#socialacceptfriendrequest) - Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [SocialDeclineFriendRequest](docs/social/README.md#socialdeclinefriendrequest) - Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [SocialGetFriendList](docs/social/README.md#socialgetfriendlist) - Returns your Bungie Friend list
* [SocialGetFriendRequestList](docs/social/README.md#socialgetfriendrequestlist) - Returns your friend request queue.
* [SocialGetPlatformFriendList](docs/social/README.md#socialgetplatformfriendlist) - Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
* [SocialIssueFriendRequest](docs/social/README.md#socialissuefriendrequest) - Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
* [SocialRemoveFriend](docs/social/README.md#socialremovefriend) - Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
* [SocialRemoveFriendRequest](docs/social/README.md#socialremovefriendrequest) - Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

### [Tokens](docs/tokens/README.md)

* [TokensApplyMissingPartnerOffersWithoutClaim](docs/tokens/README.md#tokensapplymissingpartnerofferswithoutclaim) - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
* [TokensClaimPartnerOffer](docs/tokens/README.md#tokensclaimpartneroffer) - Claim a partner offer as the authenticated user.
* [TokensForceDropsRepair](docs/tokens/README.md#tokensforcedropsrepair) - Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
* [TokensGetBungieRewardsForPlatformUser](docs/tokens/README.md#tokensgetbungierewardsforplatformuser) - Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
* [TokensGetBungieRewardsForUser](docs/tokens/README.md#tokensgetbungierewardsforuser) - Returns the bungie rewards for the targeted user.
* [TokensGetBungieRewardsList](docs/tokens/README.md#tokensgetbungierewardslist) - Returns a list of the current bungie rewards
* [TokensGetPartnerOfferSkuHistory](docs/tokens/README.md#tokensgetpartnerofferskuhistory) - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
* [TokensGetPartnerRewardHistory](docs/tokens/README.md#tokensgetpartnerrewardhistory) - Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

### [Trending](docs/trending/README.md)

* [TrendingGetTrendingCategories](docs/trending/README.md#trendinggettrendingcategories) - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* [TrendingGetTrendingCategory](docs/trending/README.md#trendinggettrendingcategory) - Returns paginated lists of trending items for a category.
* [TrendingGetTrendingEntryDetail](docs/trending/README.md#trendinggettrendingentrydetail) - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

### [User](docs/user/README.md)

* [UserGetAvailableThemes](docs/user/README.md#usergetavailablethemes) - Returns a list of all available user themes.
* [UserGetBungieNetUserByID](docs/user/README.md#usergetbungienetuserbyid) - Loads a bungienet user by membership id.
* [UserGetCredentialTypesForTargetAccount](docs/user/README.md#usergetcredentialtypesfortargetaccount) - Returns a list of credential types attached to the requested account
* [UserGetMembershipDataByID](docs/user/README.md#usergetmembershipdatabyid) - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* [UserGetMembershipDataForCurrentUser](docs/user/README.md#usergetmembershipdataforcurrentuser) - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* [UserGetMembershipFromHardLinkedCredential](docs/user/README.md#usergetmembershipfromhardlinkedcredential) - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* [UserGetSanitizedPlatformDisplayNames](docs/user/README.md#usergetsanitizedplatformdisplaynames) - Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
* [UserSearchByGlobalNamePost](docs/user/README.md#usersearchbyglobalnamepost) - Given the prefix of a global display name, returns all users who share that name.
* [UserSearchByGlobalNamePrefix](docs/user/README.md#usersearchbyglobalnameprefix) - [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
