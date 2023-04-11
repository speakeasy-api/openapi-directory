import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * destiny2
 */
export declare class Destiny2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the action token if user approves the request.
     */
    destiny2AwaGetActionToken(req: operations.Destiny2AwaGetActionTokenRequest, security: operations.Destiny2AwaGetActionTokenSecurity, config?: AxiosRequestConfig): Promise<operations.Destiny2AwaGetActionTokenResponse>;
    /**
     * Initialize a request to perform an advanced write action.
     */
    destiny2AwaInitializeRequest(config?: AxiosRequestConfig): Promise<operations.Destiny2AwaInitializeRequestResponse>;
    /**
     * Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
     */
    destiny2AwaProvideAuthorizationResult(config?: AxiosRequestConfig): Promise<operations.Destiny2AwaProvideAuthorizationResultResponse>;
    /**
     * Clear the identifiers and items of a loadout.
     */
    destiny2ClearLoadout(config?: AxiosRequestConfig): Promise<operations.Destiny2ClearLoadoutResponse>;
    /**
     * Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
     */
    destiny2EquipItem(config?: AxiosRequestConfig): Promise<operations.Destiny2EquipItemResponse>;
    /**
     * Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
     */
    destiny2EquipItems(config?: AxiosRequestConfig): Promise<operations.Destiny2EquipItemsResponse>;
    /**
     * Equip a loadout. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
     */
    destiny2EquipLoadout(config?: AxiosRequestConfig): Promise<operations.Destiny2EquipLoadoutResponse>;
    /**
     * Gets activity history stats for indicated character.
     */
    destiny2GetActivityHistory(req: operations.Destiny2GetActivityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetActivityHistoryResponse>;
    /**
     * Returns character information for the supplied character.
     */
    destiny2GetCharacter(req: operations.Destiny2GetCharacterRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetCharacterResponse>;
    /**
     * Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     */
    destiny2GetClanAggregateStats(req: operations.Destiny2GetClanAggregateStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanAggregateStatsResponse>;
    /**
     * Returns the dictionary of values for the Clan Banner
     */
    destiny2GetClanBannerSource(config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanBannerSourceResponse>;
    /**
     * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     */
    destiny2GetClanLeaderboards(req: operations.Destiny2GetClanLeaderboardsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanLeaderboardsResponse>;
    /**
     * Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
     */
    destiny2GetClanWeeklyRewardState(req: operations.Destiny2GetClanWeeklyRewardStateRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanWeeklyRewardStateResponse>;
    /**
     * Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
     */
    destiny2GetCollectibleNodeDetails(req: operations.Destiny2GetCollectibleNodeDetailsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetCollectibleNodeDetailsResponse>;
    /**
     * Gets all activities the character has participated in together with aggregate statistics for those activities.
     */
    destiny2GetDestinyAggregateActivityStats(req: operations.Destiny2GetDestinyAggregateActivityStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetDestinyAggregateActivityStatsResponse>;
    /**
     * Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
     */
    destiny2GetDestinyEntityDefinition(req: operations.Destiny2GetDestinyEntityDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetDestinyEntityDefinitionResponse>;
    /**
     * Returns the current version of the manifest as a json object.
     */
    destiny2GetDestinyManifest(config?: AxiosRequestConfig): Promise<operations.Destiny2GetDestinyManifestResponse>;
    /**
     * Gets historical stats for indicated character.
     */
    destiny2GetHistoricalStats(req: operations.Destiny2GetHistoricalStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetHistoricalStatsResponse>;
    /**
     * Gets historical stats definitions.
     */
    destiny2GetHistoricalStatsDefinition(config?: AxiosRequestConfig): Promise<operations.Destiny2GetHistoricalStatsDefinitionResponse>;
    /**
     * Gets aggregate historical stats organized around each character for a given account.
     */
    destiny2GetHistoricalStatsForAccount(req: operations.Destiny2GetHistoricalStatsForAccountRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetHistoricalStatsForAccountResponse>;
    /**
     * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
     */
    destiny2GetItem(req: operations.Destiny2GetItemRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetItemResponse>;
    /**
     * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
     */
    destiny2GetLeaderboards(req: operations.Destiny2GetLeaderboardsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLeaderboardsResponse>;
    /**
     * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     */
    destiny2GetLeaderboardsForCharacter(req: operations.Destiny2GetLeaderboardsForCharacterRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLeaderboardsForCharacterResponse>;
    /**
     * Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
     */
    destiny2GetLinkedProfiles(req: operations.Destiny2GetLinkedProfilesRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLinkedProfilesResponse>;
    /**
     * Gets the available post game carnage report for the activity ID.
     */
    destiny2GetPostGameCarnageReport(req: operations.Destiny2GetPostGameCarnageReportRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPostGameCarnageReportResponse>;
    /**
     * Returns Destiny Profile information for the supplied membership.
     */
    destiny2GetProfile(req: operations.Destiny2GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetProfileResponse>;
    /**
     * Gets custom localized content for the milestone of the given hash, if it exists.
     */
    destiny2GetPublicMilestoneContent(req: operations.Destiny2GetPublicMilestoneContentRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicMilestoneContentResponse>;
    /**
     * Gets public information about currently available Milestones.
     */
    destiny2GetPublicMilestones(config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicMilestonesResponse>;
    /**
     * Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
     */
    destiny2GetPublicVendors(req: operations.Destiny2GetPublicVendorsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicVendorsResponse>;
    /**
     * Gets details about unique weapon usage, including all exotic weapons.
     */
    destiny2GetUniqueWeaponHistory(req: operations.Destiny2GetUniqueWeaponHistoryRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetUniqueWeaponHistoryResponse>;
    /**
     * Get the details of a specific Vendor.
     */
    destiny2GetVendor(req: operations.Destiny2GetVendorRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetVendorResponse>;
    /**
     * Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
     */
    destiny2GetVendors(req: operations.Destiny2GetVendorsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetVendorsResponse>;
    /**
     * Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
     */
    destiny2InsertSocketPlug(config?: AxiosRequestConfig): Promise<operations.Destiny2InsertSocketPlugResponse>;
    /**
     * Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
     */
    destiny2InsertSocketPlugFree(config?: AxiosRequestConfig): Promise<operations.Destiny2InsertSocketPlugFreeResponse>;
    /**
     * Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
     */
    destiny2PullFromPostmaster(config?: AxiosRequestConfig): Promise<operations.Destiny2PullFromPostmasterResponse>;
    /**
     * Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
     */
    destiny2ReportOffensivePostGameCarnageReportPlayer(req: operations.Destiny2ReportOffensivePostGameCarnageReportPlayerRequest, security: operations.Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity, config?: AxiosRequestConfig): Promise<operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse>;
    /**
     * Gets a page list of Destiny items.
     */
    destiny2SearchDestinyEntities(req: operations.Destiny2SearchDestinyEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2SearchDestinyEntitiesResponse>;
    /**
     * Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.
     */
    destiny2SearchDestinyPlayerByBungieName(req: operations.Destiny2SearchDestinyPlayerByBungieNameRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2SearchDestinyPlayerByBungieNameResponse>;
    /**
     * Set the Lock State for an instanced item. You must have a valid Destiny Account.
     */
    destiny2SetItemLockState(config?: AxiosRequestConfig): Promise<operations.Destiny2SetItemLockStateResponse>;
    /**
     * Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
     */
    destiny2SetQuestTrackedState(config?: AxiosRequestConfig): Promise<operations.Destiny2SetQuestTrackedStateResponse>;
    /**
     * Snapshot a loadout with the currently equipped items.
     */
    destiny2SnapshotLoadout(config?: AxiosRequestConfig): Promise<operations.Destiny2SnapshotLoadoutResponse>;
    /**
     * Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
     */
    destiny2TransferItem(config?: AxiosRequestConfig): Promise<operations.Destiny2TransferItemResponse>;
    /**
     * Update the color, icon, and name of a loadout.
     */
    destiny2UpdateLoadoutIdentifiers(config?: AxiosRequestConfig): Promise<operations.Destiny2UpdateLoadoutIdentifiersResponse>;
}
