import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Followers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Followers
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of the followers they have.
     *         "Followers" are users that are following other users on the website.
     *         It supports pagination, each page will contain 80 followers by default.
     */
    getFollowers(req: operations.GetFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetFollowersResponse>;
}
