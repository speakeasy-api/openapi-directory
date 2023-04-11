import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Sequence Read Archive' entry type
 */
export declare class TypeBioSra {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Sequence Read Archive' entry type
     *
     * @remarks
     * API to search for entries of type Sequence Read Archive
     */
    searchBioSra(req: operations.SearchBioSraRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioSraResponse>;
}
