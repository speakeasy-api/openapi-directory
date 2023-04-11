import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Colorado Water Rights' entry type
 */
export declare class TypeColoradoWaterRights {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Colorado Water Rights' entry type
     *
     * @remarks
     * API to search for entries of type Colorado Water Rights
     */
    searchColoradoWaterRights(req: operations.SearchColoradoWaterRightsRequest, config?: AxiosRequestConfig): Promise<operations.SearchColoradoWaterRightsResponse>;
}
