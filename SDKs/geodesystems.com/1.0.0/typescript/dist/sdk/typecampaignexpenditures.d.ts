import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Campaign Expenditures' entry type
 */
export declare class TypeCampaignExpenditures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Campaign Expenditures' entry type
     *
     * @remarks
     * API to search for entries of type Campaign Expenditures
     */
    searchCampaignExpenditures(req: operations.SearchCampaignExpendituresRequest, config?: AxiosRequestConfig): Promise<operations.SearchCampaignExpendituresResponse>;
}
