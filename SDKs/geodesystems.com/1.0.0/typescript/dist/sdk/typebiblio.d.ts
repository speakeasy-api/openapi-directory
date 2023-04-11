import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Bibliographic Entry' entry type
 */
export declare class TypeBiblio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Bibliographic Entry' entry type
     *
     * @remarks
     * API to search for entries of type Bibliographic Entry
     */
    searchBiblio(req: operations.SearchBiblioRequest, config?: AxiosRequestConfig): Promise<operations.SearchBiblioResponse>;
}
