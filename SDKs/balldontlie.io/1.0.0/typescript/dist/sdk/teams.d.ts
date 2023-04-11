import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * all teams
     *
     * @remarks
     * all teams
     */
    allTeams(config?: AxiosRequestConfig): Promise<operations.AllTeamsResponse>;
    /**
     * specific team
     *
     * @remarks
     * specific team
     */
    specificTeam(config?: AxiosRequestConfig): Promise<operations.SpecificTeamResponse>;
}
