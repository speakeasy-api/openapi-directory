import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NREL TMY Data' entry type
 */
export declare class TypeTypeTmy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NREL TMY Data' entry type
     *
     * @remarks
     * API to search for entries of type NREL TMY Data
     */
    searchTypeTmy(req: operations.SearchTypeTmyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeTmyResponse>;
}
