import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Campaign Donors' entry type
 */
export declare class TypeCampaignDonors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Campaign Donors' entry type
     *
     * @remarks
     * API to search for entries of type Campaign Donors
     */
    searchCampaignDonors(req: operations.SearchCampaignDonorsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCampaignDonorsResponse>;
}
