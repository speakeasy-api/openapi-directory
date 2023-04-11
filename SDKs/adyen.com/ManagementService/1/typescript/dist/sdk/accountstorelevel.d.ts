import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountStoreLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of stores
     *
     * @remarks
     * Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read
     * * Management API—Stores read and write
     */
    getMerchantsMerchantIdStores(req: operations.GetMerchantsMerchantIdStoresRequest, security: operations.GetMerchantsMerchantIdStoresSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdStoresResponse>;
    /**
     * Get a store
     *
     * @remarks
     * Returns the details of the store identified in the path.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read
     * * Management API—Stores read and write
     */
    getMerchantsMerchantIdStoresStoreId(req: operations.GetMerchantsMerchantIdStoresStoreIdRequest, security: operations.GetMerchantsMerchantIdStoresStoreIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdStoresStoreIdResponse>;
    /**
     * Get a list of stores
     *
     * @remarks
     * Returns a list of stores. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read
     * * Management API—Stores read and write
     */
    getStores(req: operations.GetStoresRequest, security: operations.GetStoresSecurity, config?: AxiosRequestConfig): Promise<operations.GetStoresResponse>;
    /**
     * Get a store
     *
     * @remarks
     * Returns the details of the store identified in the path.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read
     * * Management API—Stores read and write
     */
    getStoresStoreId(req: operations.GetStoresStoreIdRequest, security: operations.GetStoresStoreIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetStoresStoreIdResponse>;
    /**
     * Update a store
     *
     * @remarks
     * Updates the store identified in the path. You can only update some store parameters.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read and write
     */
    patchMerchantsMerchantIdStoresStoreId(req: operations.PatchMerchantsMerchantIdStoresStoreIdRequest, security: operations.PatchMerchantsMerchantIdStoresStoreIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdStoresStoreIdResponse>;
    /**
     * Update a store
     *
     * @remarks
     * Updates the store identified in the path.
     * You can only update some store parameters.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read and write
     */
    patchStoresStoreId(req: operations.PatchStoresStoreIdRequest, security: operations.PatchStoresStoreIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchStoresStoreIdResponse>;
    /**
     * Create a store
     *
     * @remarks
     * Creates a store for the merchant account identified in the path.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read and write
     */
    postMerchantsMerchantIdStores(req: operations.PostMerchantsMerchantIdStoresRequest, security: operations.PostMerchantsMerchantIdStoresSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdStoresResponse>;
    /**
     * Create a store
     *
     * @remarks
     * Creates a store for the merchant account specified in the request.
     *
     * To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Stores read and write
     */
    postStores(req: shared.StoreCreationWithMerchantCodeRequest, security: operations.PostStoresSecurity, config?: AxiosRequestConfig): Promise<operations.PostStoresResponse>;
}
