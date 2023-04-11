import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
 *
 * @remarks
 *
 * Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.
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
     * Create a tag
     *
     * @remarks
     * Creates a new tag in a workspace or organization.
     *
     * Every tag is required to be created in a specific workspace or
     * organization, and this cannot be changed once set. Note that you can use
     * the workspace parameter regardless of whether or not it is an
     * organization.
     *
     * Returns the full record of the newly created tag.
     */
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * Create a tag in a workspace
     *
     * @remarks
     * Creates a new tag in a workspace or organization.
     *
     * Every tag is required to be created in a specific workspace or
     * organization, and this cannot be changed once set. Note that you can use
     * the workspace parameter regardless of whether or not it is an
     * organization.
     *
     * Returns the full record of the newly created tag.
     */
    createTagForWorkspace(req: operations.CreateTagForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagForWorkspaceResponse>;
    /**
     * Delete a tag
     *
     * @remarks
     * A specific, existing tag can be deleted by making a DELETE request on
     * the URL for that tag.
     *
     * Returns an empty data record.
     */
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * Get a tag
     *
     * @remarks
     * Returns the complete tag record for a single tag.
     */
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * Get multiple tags
     *
     * @remarks
     * Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Get a task's tags
     *
     * @remarks
     * Get a compact representation of all of the tags the task has.
     */
    getTagsForTask(req: operations.GetTagsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsForTaskResponse>;
    /**
     * Get tags in a workspace
     *
     * @remarks
     * Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.
     */
    getTagsForWorkspace(req: operations.GetTagsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsForWorkspaceResponse>;
    /**
     * Update a tag
     *
     * @remarks
     * Updates the properties of a tag. Only the fields provided in the `data`
     * block will be updated; any unspecified fields will remain unchanged.
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the tag.
     *
     * Returns the complete updated tag record.
     */
    updateTag(req: operations.UpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagResponse>;
}
