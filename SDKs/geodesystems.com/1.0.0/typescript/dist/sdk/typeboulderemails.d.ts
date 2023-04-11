import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Boulder Council Emails' entry type
 */
export declare class TypeBoulderEmails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Boulder Council Emails' entry type
     *
     * @remarks
     * API to search for entries of type Boulder Council Emails
     */
    searchBoulderEmails(req: operations.SearchBoulderEmailsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderEmailsResponse>;
}
