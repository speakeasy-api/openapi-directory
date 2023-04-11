import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Team information
 */
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * FBS team list
     *
     * @remarks
     * Information on major division teams
     */
    getFbsTeams(req: operations.GetFbsTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetFbsTeamsResponse>;
    /**
     * Team rosters
     *
     * @remarks
     * Roster data
     */
    getRoster(req: operations.GetRosterRequest, config?: AxiosRequestConfig): Promise<operations.GetRosterResponse>;
    /**
     * Team talent composite rankings
     *
     * @remarks
     * Team talent composite
     */
    getTalent(req: operations.GetTalentRequest, config?: AxiosRequestConfig): Promise<operations.GetTalentResponse>;
    /**
     * Team matchup history
     *
     * @remarks
     * Matchup history
     */
    getTeamMatchup(req: operations.GetTeamMatchupRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchupResponse>;
    /**
     * Team information
     *
     * @remarks
     * Get team information
     */
    getTeams(req: operations.GetTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
}
