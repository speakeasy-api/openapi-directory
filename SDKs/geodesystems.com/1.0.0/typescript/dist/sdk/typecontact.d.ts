import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Contact List' entry type
 */
export declare class TypeContact {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Contact List' entry type
     *
     * @remarks
     * API to search for entries of type Contact List
     */
    searchContact(req: operations.SearchContactRequest, config?: AxiosRequestConfig): Promise<operations.SearchContactResponse>;
}
