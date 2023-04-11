import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Status Board' entry type
 */
export declare class TypeStatusboard {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Status Board' entry type
     *
     * @remarks
     * API to search for entries of type Status Board
     */
    searchStatusboard(req: operations.SearchStatusboardRequest, config?: AxiosRequestConfig): Promise<operations.SearchStatusboardResponse>;
}
