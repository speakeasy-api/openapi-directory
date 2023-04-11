import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * List of all the groups associated to the user filtered by this tag.
     */
    tagsCount(req: operations.TagsCountRequest, config?: AxiosRequestConfig): Promise<operations.TagsCountResponse>;
    /**
     * Delete a tag
     */
    tagsDelete(req: operations.TagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagsDeleteResponse>;
    /**
     * Delete the association of this tag with all datapoints
     */
    tagsDeleteRelatedDatapoints(req: operations.TagsDeleteRelatedDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.TagsDeleteRelatedDatapointsResponse>;
    /**
     * Delete the association of this tag with all groups
     */
    tagsDeleteRelatedGroups(req: operations.TagsDeleteRelatedGroupsRequest, config?: AxiosRequestConfig): Promise<operations.TagsDeleteRelatedGroupsResponse>;
    /**
     * List of all the groups associated to the user filtered by this tag.
     */
    tagsGet(req: operations.TagsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetResponse>;
    /**
     * List of all the datapoints associated to the user filtered by this tag
     */
    tagsGetDatapoints(req: operations.TagsGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetDatapointsResponse>;
    /**
     * Count the datapoints associated to the user filtered by this tag
     */
    tagsGetDatapointsCount(req: operations.TagsGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetDatapointsCountResponse>;
    /**
     * List of all the groups associated to the user filtered by this tag.
     */
    tagsGetGroups(req: operations.TagsGetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetGroupsResponse>;
    /**
     * Count the groups associated to the user filtered by this tag
     */
    tagsGetGroupsCount(req: operations.TagsGetGroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.TagsGetGroupsCountResponse>;
    /**
     * Associate/Deassociate a tag with a datapoint
     */
    tagsPatchDataPointForm(req: operations.TagsPatchDataPointFormRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchDataPointFormResponse>;
    /**
     * Associate/Deassociate a tag with a datapoint
     */
    tagsPatchDataPointJson(req: operations.TagsPatchDataPointJsonRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchDataPointJsonResponse>;
    /**
     * Associate/Deassociate a tag with a datapoint
     */
    tagsPatchDataPointRaw(req: operations.TagsPatchDataPointRawRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchDataPointRawResponse>;
    /**
     * Associate/Deassociate a tag with a group
     */
    tagsPatchGroupForm(req: operations.TagsPatchGroupFormRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchGroupFormResponse>;
    /**
     * Associate/Deassociate a tag with a group
     */
    tagsPatchGroupJson(req: operations.TagsPatchGroupJsonRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchGroupJsonResponse>;
    /**
     * Associate/Deassociate a tag with a group
     */
    tagsPatchGroupRaw(req: operations.TagsPatchGroupRawRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchGroupRawResponse>;
    /**
     * Fast patch a tag name
     */
    tagsPatchTagNameForm(req: operations.TagsPatchTagNameFormRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchTagNameFormResponse>;
    /**
     * Fast patch a tag name
     */
    tagsPatchTagNameJson(req: operations.TagsPatchTagNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchTagNameJsonResponse>;
    /**
     * Fast patch a tag name
     */
    tagsPatchTagNameRaw(req: operations.TagsPatchTagNameRawRequest, config?: AxiosRequestConfig): Promise<operations.TagsPatchTagNameRawResponse>;
    /**
     * Create a tag
     */
    tagsPut(req: shared.ApiCoreDtoTagsTag, config?: AxiosRequestConfig): Promise<operations.TagsPutResponse>;
    /**
     * Retrieve a tag
     */
    getTagsTagId(req: operations.GetTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsTagIdResponse>;
}
