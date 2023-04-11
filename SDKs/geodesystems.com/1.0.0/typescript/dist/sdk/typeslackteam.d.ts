import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Slack Team' entry type
 */
export declare class TypeSlackTeam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Slack Team' entry type
     *
     * @remarks
     * API to search for entries of type Slack Team
     */
    searchSlackTeam(req: operations.SearchSlackTeamRequest, config?: AxiosRequestConfig): Promise<operations.SearchSlackTeamResponse>;
}
