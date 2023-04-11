import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Boulder Campaign Contributions' entry type
 */
export declare class TypeBoulderCampaignContributions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Boulder Campaign Contributions' entry type
     *
     * @remarks
     * API to search for entries of type Boulder Campaign Contributions
     */
    searchBoulderCampaignContributions(req: operations.SearchBoulderCampaignContributionsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderCampaignContributionsResponse>;
}
