import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Preview {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     */
    destiny2GetClanAggregateStats(req: operations.Destiny2GetClanAggregateStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanAggregateStatsResponse>;
    /**
     * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     */
    destiny2GetClanLeaderboards(req: operations.Destiny2GetClanLeaderboardsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanLeaderboardsResponse>;
    /**
     * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
     */
    destiny2GetLeaderboards(req: operations.Destiny2GetLeaderboardsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLeaderboardsResponse>;
    /**
     * Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     */
    destiny2GetLeaderboardsForCharacter(req: operations.Destiny2GetLeaderboardsForCharacterRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLeaderboardsForCharacterResponse>;
    /**
     * Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
     */
    destiny2GetPublicVendors(req: operations.Destiny2GetPublicVendorsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicVendorsResponse>;
    /**
     * Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
     */
    destiny2InsertSocketPlug(config?: AxiosRequestConfig): Promise<operations.Destiny2InsertSocketPlugResponse>;
    /**
     * Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.
     */
    destiny2InsertSocketPlugFree(config?: AxiosRequestConfig): Promise<operations.Destiny2InsertSocketPlugFreeResponse>;
}
