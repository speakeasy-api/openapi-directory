# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DotGetAvailableLocalesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DotGetAvailableLocalesResponse res = sdk.dotGetAvailableLocales();

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `dotGetAvailableLocales` - List of available localization cultures
* `dotGetCommonSettings` - Get the common settings used by the Bungie.Net environment.
* `dotGetGlobalAlerts` - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* `dotGetUserSystemOverrides` - Get the user-specific system overrides that should be respected alongside common systems.

### app

* `appGetApplicationApiUsage` - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* `appGetBungieApplications` - Get list of applications created by Bungie.

### communityContent

* `communityContentGetCommunityContent` - Returns community content.

### content

* `contentGetContentById` - Returns a content item referenced by id
* `contentGetContentByTagAndType` - Returns the newest item that matches a given tag and Content Type.
* `contentGetContentType` - Gets an object describing a particular variant of content.
* `contentRssNewsArticles` - Returns a JSON string response that is the RSS feed for news articles.
* `contentSearchContentByTagAndType` - Searches for Content Items that match the given Tag and Content Type.
* `contentSearchContentWithText` - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* `contentSearchHelpArticles` - Search for Help Articles.

### destiny2

* `destiny2AwaGetActionToken` - Returns the action token if user approves the request.
* `destiny2AwaInitializeRequest` - Initialize a request to perform an advanced write action.
* `destiny2AwaProvideAuthorizationResult` - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
* `destiny2ClearLoadout` - Clear the identifiers and items of a loadout.
* `destiny2EquipItem` - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* `destiny2EquipItems` - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
* `destiny2EquipLoadout` - Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* `destiny2GetActivityHistory` - Gets activity history stats for indicated character.
* `destiny2GetCharacter` - Returns character information for the supplied character.
* `destiny2GetClanAggregateStats` - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2GetClanBannerSource` - Returns the dictionary of values for the Clan Banner
* `destiny2GetClanLeaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2GetClanWeeklyRewardState` - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
* `destiny2GetCollectibleNodeDetails` - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
* `destiny2GetDestinyAggregateActivityStats` - Gets all activities the character has participated in together with aggregate statistics for those activities.
* `destiny2GetDestinyEntityDefinition` - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
* `destiny2GetDestinyManifest` - Returns the current version of the manifest as a json object.
* `destiny2GetHistoricalStats` - Gets historical stats for indicated character.
* `destiny2GetHistoricalStatsDefinition` - Gets historical stats definitions.
* `destiny2GetHistoricalStatsForAccount` - Gets aggregate historical stats organized around each character for a given account.
* `destiny2GetItem` - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
* `destiny2GetLeaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* `destiny2GetLeaderboardsForCharacter` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2GetLinkedProfiles` - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
* `destiny2GetPostGameCarnageReport` - Gets the available post game carnage report for the activity ID.
* `destiny2GetProfile` - Returns Destiny Profile information for the supplied membership.
* `destiny2GetPublicMilestoneContent` - Gets custom localized content for the milestone of the given hash, if it exists.
* `destiny2GetPublicMilestones` - Gets public information about currently available Milestones.
* `destiny2GetPublicVendors` - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* `destiny2GetUniqueWeaponHistory` - Gets details about unique weapon usage, including all exotic weapons.
* `destiny2GetVendor` - Get the details of a specific Vendor.
* `destiny2GetVendors` - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
* `destiny2InsertSocketPlug` - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* `destiny2InsertSocketPlugFree` - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
* `destiny2PullFromPostmaster` - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
* `destiny2ReportOffensivePostGameCarnageReportPlayer` - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
* `destiny2SearchDestinyEntities` - Gets a page list of Destiny items.
* `destiny2SearchDestinyPlayerByBungieName` - Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
* `destiny2SetItemLockState` - Set the Lock State for an instanced item. You must have a valid Destiny Account.
* `destiny2SetQuestTrackedState` - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
* `destiny2SnapshotLoadout` - Snapshot a loadout with the currently equipped items.
* `destiny2TransferItem` - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
* `destiny2UpdateLoadoutIdentifiers` - Update the color, icon, and name of a loadout.

### fireteam

* `fireteamGetActivePrivateClanFireteamCount` - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* `fireteamGetAvailableClanFireteams` - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* `fireteamGetClanFireteam` - Gets a specific fireteam.
* `fireteamGetMyClanFireteams` - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* `fireteamSearchPublicAvailableClanFireteams` - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

### forum

* `forumGetCoreTopicsPaged` - Gets a listing of all topics marked as part of the core group.
* `forumGetForumTagSuggestions` - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* `forumGetPoll` - Gets the specified forum poll.
* `forumGetPostAndParent` - Returns the post specified and its immediate parent.
* `forumGetPostAndParentAwaitingApproval` - Returns the post specified and its immediate parent of posts that are awaiting approval.
* `forumGetPostsThreadedPaged` - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* `forumGetPostsThreadedPagedFromChild` - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* `forumGetRecruitmentThreadSummaries` - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* `forumGetTopicForContent` - Gets the post Id for the given content item's comments, if it exists.
* `forumGetTopicsPaged` - Get topics from any forum.

### groupV2

* `groupV2AbdicateFoundership` - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
* `groupV2AddOptionalConversation` - Add a new optional conversation/chat channel. Requires admin permissions to the group.
* `groupV2ApproveAllPending` - Approve all of the pending users for the given group.
* `groupV2ApprovePending` - Approve the given membershipId to join the group/clan as long as they have applied.
* `groupV2ApprovePendingForList` - Approve all of the pending users for the given group.
* `groupV2BanMember` - Bans the requested member from the requested group for the specified period of time.
* `groupV2DenyAllPending` - Deny all of the pending users for the given group.
* `groupV2DenyPendingForList` - Deny all of the pending users for the given group that match the passed-in .
* `groupV2EditClanBanner` - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
* `groupV2EditFounderOptions` - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
* `groupV2EditGroup` - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
* `groupV2EditGroupMembership` - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
* `groupV2EditOptionalConversation` - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
* `groupV2GetAdminsAndFounderOfGroup` - Get the list of members in a given group who are of admin level or higher.
* `groupV2GetAvailableAvatars` - Returns a list of all available group avatars for the signed-in user.
* `groupV2GetAvailableThemes` - Returns a list of all available group themes.
* `groupV2GetBannedMembersOfGroup` - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
* `groupV2GetGroup` - Get information about a specific group of the given ID.
* `groupV2GetGroupByName` - Get information about a specific group with the given name and type.
* `groupV2GetGroupByNameV2` - Get information about a specific group with the given name and type. The POST version.
* `groupV2GetGroupOptionalConversations` - Gets a list of available optional conversation channels and their settings.
* `groupV2GetGroupsForMember` - Get information about the groups that a given member has joined.
* `groupV2GetInvitedIndividuals` - Get the list of users who have been invited into the group.
* `groupV2GetMembersOfGroup` - Get the list of members in a given group.
* `groupV2GetPendingMemberships` - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
* `groupV2GetPotentialGroupsForMember` - Get information about the groups that a given member has applied to or been invited to.
* `groupV2GetRecommendedGroups` - Gets groups recommended for you based on the groups to whom those you follow belong.
* `groupV2GetUserClanInviteSetting` - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
* `groupV2GroupSearch` - Search for Groups.
* `groupV2IndividualGroupInvite` - Invite a user to join this group.
* `groupV2IndividualGroupInviteCancel` - Cancels a pending invitation to join a group.
* `groupV2KickMember` - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
* `groupV2RecoverGroupForFounder` - Allows a founder to manually recover a group they can see in game but not on bungie.net
* `groupV2UnbanMember` - Unbans the requested member, allowing them to re-apply for membership.

### preview

* `destiny2GetClanAggregateStats` - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2GetClanLeaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2GetLeaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* `destiny2GetLeaderboardsForCharacter` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2GetPublicVendors` - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* `destiny2InsertSocketPlug` - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* `destiny2InsertSocketPlugFree` - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

### social

* `socialAcceptFriendRequest` - Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* `socialDeclineFriendRequest` - Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* `socialGetFriendList` - Returns your Bungie Friend list
* `socialGetFriendRequestList` - Returns your friend request queue.
* `socialGetPlatformFriendList` - Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
* `socialIssueFriendRequest` - Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
* `socialRemoveFriend` - Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
* `socialRemoveFriendRequest` - Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

### tokens

* `tokensApplyMissingPartnerOffersWithoutClaim` - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
* `tokensClaimPartnerOffer` - Claim a partner offer as the authenticated user.
* `tokensForceDropsRepair` - Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
* `tokensGetBungieRewardsForPlatformUser` - Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
* `tokensGetBungieRewardsForUser` - Returns the bungie rewards for the targeted user.
* `tokensGetBungieRewardsList` - Returns a list of the current bungie rewards
* `tokensGetPartnerOfferSkuHistory` - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
* `tokensGetPartnerRewardHistory` - Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

### trending

* `trendingGetTrendingCategories` - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* `trendingGetTrendingCategory` - Returns paginated lists of trending items for a category.
* `trendingGetTrendingEntryDetail` - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

### user

* `userGetAvailableThemes` - Returns a list of all available user themes.
* `userGetBungieNetUserById` - Loads a bungienet user by membership id.
* `userGetCredentialTypesForTargetAccount` - Returns a list of credential types attached to the requested account
* `userGetMembershipDataById` - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* `userGetMembershipDataForCurrentUser` - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* `userGetMembershipFromHardLinkedCredential` - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* `userGetSanitizedPlatformDisplayNames` - Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
* `userSearchByGlobalNamePost` - Given the prefix of a global display name, returns all users who share that name.
* `userSearchByGlobalNamePrefix` - [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
