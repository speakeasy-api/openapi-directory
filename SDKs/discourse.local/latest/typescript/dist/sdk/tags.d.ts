import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a tag group
     */
    createTagGroup(req: operations.CreateTagGroupRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateTagGroupResponse>;
    /**
     * Get a specific tag
     */
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * Get a single tag group
     */
    getTagGroup(req: operations.GetTagGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTagGroupResponse>;
    /**
     * Get a list of tag groups
     */
    listTagGroups(config?: AxiosRequestConfig): Promise<operations.ListTagGroupsResponse>;
    /**
     * Get a list of tags
     */
    listTags(config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * Update tag group
     */
    updateTagGroup(req: operations.UpdateTagGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagGroupResponse>;
}
