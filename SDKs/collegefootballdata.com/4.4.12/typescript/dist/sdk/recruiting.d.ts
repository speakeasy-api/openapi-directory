import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Recruiting rankings and data
 */
export declare class Recruiting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Recruit position group ratings
     *
     * @remarks
     * Gets a list of aggregated statistics by team and position grouping
     */
    getRecruitingGroups(req: operations.GetRecruitingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingGroupsResponse>;
    /**
     * Player recruiting ratings and rankings
     *
     * @remarks
     * Get player recruiting rankings and data. Requires either a year or team to be specified.
     */
    getRecruitingPlayers(req: operations.GetRecruitingPlayersRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingPlayersResponse>;
    /**
     * Team recruiting rankings and ratings
     *
     * @remarks
     * Team recruiting rankings
     */
    getRecruitingTeams(req: operations.GetRecruitingTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingTeamsResponse>;
}
