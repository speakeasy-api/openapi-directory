import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Player information and data
 */
export declare class Players {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Player stats by season
     *
     * @remarks
     * Season player stats
     */
    getPlayerSeasonStats(req: operations.GetPlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerSeasonStatsResponse>;
    /**
     * Player usage metrics broken down by season
     *
     * @remarks
     * Player usage metrics by season
     */
    getPlayerUsage(req: operations.GetPlayerUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerUsageResponse>;
    /**
     * Team returning production metrics
     *
     * @remarks
     * Returning production metrics
     */
    getReturningProduction(req: operations.GetReturningProductionRequest, config?: AxiosRequestConfig): Promise<operations.GetReturningProductionResponse>;
    /**
     * Transfer portal by season
     *
     * @remarks
     * Transfer portal by season
     */
    getTransferPortal(req: operations.GetTransferPortalRequest, config?: AxiosRequestConfig): Promise<operations.GetTransferPortalResponse>;
    /**
     * Search for player information
     *
     * @remarks
     * Search for players
     */
    playerSearch(req: operations.PlayerSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSearchResponse>;
}
