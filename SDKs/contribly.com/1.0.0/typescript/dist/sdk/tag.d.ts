import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and list tags and tag sets
 */
export declare class Tag {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List tags
     *
     * @remarks
     * Retrieve tags.
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Retrieve a single tag by id
     */
    getTagsId(req: operations.GetTagsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsIdResponse>;
    /**
     * List tag sets
     *
     * @remarks
     * Retrieve tag sets.
     */
    getTagsets(req: operations.GetTagsetsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsetsResponse>;
    /**
     * Retrieve a single tag set by id
     */
    getTagsetsId(req: operations.GetTagsetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsetsIdResponse>;
    /**
     * Create a new tag
     */
    postTags(req: shared.TagSubmission, config?: AxiosRequestConfig): Promise<operations.PostTagsResponse>;
    /**
     * Create a new tag set
     */
    postTagsets(req: shared.TagSetSubmission, config?: AxiosRequestConfig): Promise<operations.PostTagsetsResponse>;
}
