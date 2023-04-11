import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerStores {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new store
     */
    createStore(req: shared.CreateStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateStoreResponse>;
    /**
     * Delete a store
     */
    deleteStore(req: operations.DeleteStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStoreResponse>;
    /**
     * Get store's information
     */
    getStore(req: operations.GetStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreResponse>;
    /**
     * Get store list
     */
    getStores(req: operations.GetStoresRequest, config?: AxiosRequestConfig): Promise<operations.GetStoresResponse>;
    /**
     * Update some store's information.
     *
     * @remarks
     * Update some store's information. FYI, you cannot change the country.
     *
     */
    updateStore(req: operations.UpdateStoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStoreResponse>;
}
