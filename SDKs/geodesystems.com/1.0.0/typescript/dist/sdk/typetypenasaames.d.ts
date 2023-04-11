import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NASA AMES File' entry type
 */
export declare class TypeTypeNasaames {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NASA AMES File' entry type
     *
     * @remarks
     * API to search for entries of type NASA AMES File
     */
    searchTypeNasaames(req: operations.SearchTypeNasaamesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNasaamesResponse>;
}
