import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'RINEX File' entry type
 */
export declare class TypeProjectGpsRinex {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'RINEX File' entry type
     *
     * @remarks
     * API to search for entries of type RINEX File
     */
    searchProjectGpsRinex(req: operations.SearchProjectGpsRinexRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsRinexResponse>;
}
