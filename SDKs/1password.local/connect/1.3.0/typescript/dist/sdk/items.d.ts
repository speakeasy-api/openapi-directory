import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Items {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVaultItem - Create a new Item
    **/
    createVaultItem(req: operations.CreateVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateVaultItemResponse>;
    /**
     * deleteVaultItem - Delete an Item
    **/
    deleteVaultItem(req: operations.DeleteVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVaultItemResponse>;
    /**
     * getVaultItemById - Get the details of an Item
    **/
    getVaultItemById(req: operations.GetVaultItemByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultItemByIdResponse>;
    /**
     * getVaultItems - Get all items for inside a Vault
    **/
    getVaultItems(req: operations.GetVaultItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultItemsResponse>;
    /**
     * patchVaultItem - Update a subset of Item attributes
     *
     * Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.
     *
     * When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`
     *
    **/
    patchVaultItem(req: operations.PatchVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.PatchVaultItemResponse>;
    /**
     * updateVaultItem - Update an Item
    **/
    updateVaultItem(req: operations.UpdateVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVaultItemResponse>;
}
