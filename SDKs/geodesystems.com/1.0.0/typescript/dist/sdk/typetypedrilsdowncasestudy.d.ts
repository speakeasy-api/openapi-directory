import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Drilsdown Case Study' entry type
 */
export declare class TypeTypeDrilsdownCasestudy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Drilsdown Case Study' entry type
     *
     * @remarks
     * API to search for entries of type Drilsdown Case Study
     */
    searchTypeDrilsdownCasestudy(req: operations.SearchTypeDrilsdownCasestudyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDrilsdownCasestudyResponse>;
}
