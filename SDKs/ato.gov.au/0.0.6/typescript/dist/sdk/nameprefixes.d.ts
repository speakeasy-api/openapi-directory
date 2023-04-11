import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A classification scheme for names.
 *
 * @remarks
 *
 */
export declare class NamePrefixes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of name prefixes
     */
    getClassificationsNamePrefixes(req: operations.GetClassificationsNamePrefixesRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationsNamePrefixesResponse>;
}
