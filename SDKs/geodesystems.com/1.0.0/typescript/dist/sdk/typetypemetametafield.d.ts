import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Metadata Field' entry type
 */
export declare class TypeTypeMetametaField {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Metadata Field' entry type
     *
     * @remarks
     * API to search for entries of type Metadata Field
     */
    searchTypeMetametaField(req: operations.SearchTypeMetametaFieldRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMetametaFieldResponse>;
}
