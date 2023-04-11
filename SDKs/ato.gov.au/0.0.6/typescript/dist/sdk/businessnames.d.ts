import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A business name is a name or title under which a person or organisation conducts a business.
 *
 * @remarks
 *
 */
export declare class BusinessNames {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of business names
     *
     * @remarks
     * Retrieve a list of business names
     *
     */
    getBusinessNames(req: operations.GetBusinessNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetBusinessNamesResponse>;
}
