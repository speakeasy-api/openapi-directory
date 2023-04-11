import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Collections
     *
     * @remarks
     * List Collections
     */
    collectionsAll(req: operations.CollectionsAllRequest, security: operations.CollectionsAllSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionsAllResponse>;
    /**
     * Get Collection
     *
     * @remarks
     * Get Collection
     */
    collectionsOne(req: operations.CollectionsOneRequest, security: operations.CollectionsOneSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionsOneResponse>;
}
