import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Statistical data
 */
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Advanced team metrics by game
     *
     * @remarks
     * Advanced team game stats
     */
    getAdvancedTeamGameStats(req: operations.GetAdvancedTeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedTeamGameStatsResponse>;
    /**
     * Advanced team metrics by season
     *
     * @remarks
     * Advanced team season stats
     */
    getAdvancedTeamSeasonStats(req: operations.GetAdvancedTeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedTeamSeasonStatsResponse>;
    /**
     * Team stat categories
     *
     * @remarks
     * Stat category list
     */
    getStatCategories(config?: AxiosRequestConfig): Promise<operations.GetStatCategoriesResponse>;
    /**
     * Team statistics by season
     *
     * @remarks
     * Team season stats
     */
    getTeamSeasonStats(req: operations.GetTeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamSeasonStatsResponse>;
}
