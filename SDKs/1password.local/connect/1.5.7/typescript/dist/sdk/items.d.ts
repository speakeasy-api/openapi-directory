import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access and manage items inside 1Password Vaults
 */
export declare class Items {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new Item
     */
    createVaultItem(req: operations.CreateVaultItemRequest, security: operations.CreateVaultItemSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVaultItemResponse>;
    /**
     * Delete an Item
     */
    deleteVaultItem(req: operations.DeleteVaultItemRequest, security: operations.DeleteVaultItemSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVaultItemResponse>;
    /**
     * Get the details of an Item
     */
    getVaultItemById(req: operations.GetVaultItemByIdRequest, security: operations.GetVaultItemByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetVaultItemByIdResponse>;
    /**
     * Get all items for inside a Vault
     */
    getVaultItems(req: operations.GetVaultItemsRequest, security: operations.GetVaultItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetVaultItemsResponse>;
    /**
     * Update a subset of Item attributes
     *
     * @remarks
     * Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.
     *
     * When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`
     *
     */
    patchVaultItem(req: operations.PatchVaultItemRequest, security: operations.PatchVaultItemSecurity, config?: AxiosRequestConfig): Promise<operations.PatchVaultItemResponse>;
    /**
     * Update an Item
     */
    updateVaultItem(req: operations.UpdateVaultItemRequest, security: operations.UpdateVaultItemSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateVaultItemResponse>;
}
