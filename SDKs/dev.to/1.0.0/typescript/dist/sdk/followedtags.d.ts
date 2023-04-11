import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FollowedTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Followed Tags
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of the tags they follow.
     */
    getFollowedTags(config?: AxiosRequestConfig): Promise<operations.GetFollowedTagsResponse>;
}
