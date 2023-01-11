import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomerStores {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createStore - Create a new store
    **/
    createStore(req: operations.CreateStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateStoreResponse>;
    /**
     * deleteStore - Delete a store
    **/
    deleteStore(req: operations.DeleteStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStoreResponse>;
    /**
     * getStore - Get store's information
    **/
    getStore(req: operations.GetStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreResponse>;
    /**
     * getStores - Get store list
    **/
    getStores(req: operations.GetStoresRequest, config?: AxiosRequestConfig): Promise<operations.GetStoresResponse>;
    /**
     * updateStore - Update some store's information.
     *
     * Update some store's information. FYI, you cannot change the country.
     *
    **/
    updateStore(req: operations.UpdateStoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStoreResponse>;
}
