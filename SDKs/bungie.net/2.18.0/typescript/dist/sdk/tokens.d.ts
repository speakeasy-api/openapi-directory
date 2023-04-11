import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * tokens
 */
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
     */
    tokensApplyMissingPartnerOffersWithoutClaim(req: operations.TokensApplyMissingPartnerOffersWithoutClaimRequest, security: operations.TokensApplyMissingPartnerOffersWithoutClaimSecurity, config?: AxiosRequestConfig): Promise<operations.TokensApplyMissingPartnerOffersWithoutClaimResponse>;
    /**
     * Claim a partner offer as the authenticated user.
     */
    tokensClaimPartnerOffer(config?: AxiosRequestConfig): Promise<operations.TokensClaimPartnerOfferResponse>;
    /**
     * Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
     */
    tokensForceDropsRepair(config?: AxiosRequestConfig): Promise<operations.TokensForceDropsRepairResponse>;
    /**
     * Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
     */
    tokensGetBungieRewardsForPlatformUser(req: operations.TokensGetBungieRewardsForPlatformUserRequest, security: operations.TokensGetBungieRewardsForPlatformUserSecurity, config?: AxiosRequestConfig): Promise<operations.TokensGetBungieRewardsForPlatformUserResponse>;
    /**
     * Returns the bungie rewards for the targeted user.
     */
    tokensGetBungieRewardsForUser(req: operations.TokensGetBungieRewardsForUserRequest, security: operations.TokensGetBungieRewardsForUserSecurity, config?: AxiosRequestConfig): Promise<operations.TokensGetBungieRewardsForUserResponse>;
    /**
     * Returns a list of the current bungie rewards
     */
    tokensGetBungieRewardsList(config?: AxiosRequestConfig): Promise<operations.TokensGetBungieRewardsListResponse>;
    /**
     * Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
     */
    tokensGetPartnerOfferSkuHistory(req: operations.TokensGetPartnerOfferSkuHistoryRequest, security: operations.TokensGetPartnerOfferSkuHistorySecurity, config?: AxiosRequestConfig): Promise<operations.TokensGetPartnerOfferSkuHistoryResponse>;
    /**
     * Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.
     */
    tokensGetPartnerRewardHistory(req: operations.TokensGetPartnerRewardHistoryRequest, security: operations.TokensGetPartnerRewardHistorySecurity, config?: AxiosRequestConfig): Promise<operations.TokensGetPartnerRewardHistoryResponse>;
}
