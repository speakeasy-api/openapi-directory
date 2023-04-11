import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerShares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a share of a store to another user
     */
    deleteStoreShare(req: operations.DeleteStoreShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStoreShareResponse>;
    /**
     * Get shares related to this store
     */
    getStoreShares(req: operations.GetStoreSharesRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreSharesResponse>;
    /**
     * Share a store to another user
     */
    shareStore(req: operations.ShareStoreRequest, config?: AxiosRequestConfig): Promise<operations.ShareStoreResponse>;
}
