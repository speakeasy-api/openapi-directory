import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * casesGeneralStatsList - Get the general stats
    **/
    casesGeneralStatsList(config?: AxiosRequestConfig): Promise<operations.CasesGeneralStatsListResponse>;
    /**
     * casesSearch - search a country
    **/
    casesSearch(req: operations.CasesSearchRequest, config?: AxiosRequestConfig): Promise<operations.CasesSearchResponse>;
}
