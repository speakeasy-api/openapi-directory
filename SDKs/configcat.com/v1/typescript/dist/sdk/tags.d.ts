import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage Tags. Tags are stored under a Product. You can  and add a Tag to a Feature Flag or Setting using the [Update Flag](#operation/update-setting) endpoint.
 */
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Tag
     *
     * @remarks
     * This endpoint creates a new Tag in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * Delete Tag
     *
     * @remarks
     * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
     */
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * List Settings by Tag
     *
     * @remarks
     * This endpoint returns the list of the Settings that
     * has the specified Tag, identified by the `tagId` parameter.
     */
    getSettingsByTag(req: operations.GetSettingsByTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsByTagResponse>;
    /**
     * Get Tag
     *
     * @remarks
     * This endpoint returns the metadata of a Tag
     * identified by the `tagId`.
     */
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * List Tags
     *
     * @remarks
     * This endpoint returns the list of the Tags in a
     * specified Product, identified by the `productId` parameter.
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Update Tag
     *
     * @remarks
     * This endpoint updates a Tag identified by the `tagId` parameter.
     */
    updateTag(req: operations.UpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagResponse>;
}
