import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'ATM QFIT Data' entry type
 */
export declare class TypeTypePointIcebridgeAtmQfit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'ATM QFIT Data' entry type
     *
     * @remarks
     * API to search for entries of type ATM QFIT Data
     */
    searchTypePointIcebridgeAtmQfit(req: operations.SearchTypePointIcebridgeAtmQfitRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeAtmQfitResponse>;
}
