import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Control Points File' entry type
 */
export declare class TypeProjectGpsControlpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Control Points File' entry type
     *
     * @remarks
     * API to search for entries of type Control Points File
     */
    searchProjectGpsControlpoints(req: operations.SearchProjectGpsControlpointsRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsControlpointsResponse>;
}
