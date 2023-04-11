import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * create reaction
     *
     * @remarks
     * This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
     *         * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
     *         * "Like"ing that Article a second time will return the previous "like"
     */
    postApiReactions(req: operations.PostApiReactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostApiReactionsResponse>;
    /**
     * toggle reaction
     *
     * @remarks
     * This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
     *         * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
     *         * "Like"ing that Article a second time will remove the "like" from the user
     */
    postApiReactionsToggle(req: operations.PostApiReactionsToggleRequest, config?: AxiosRequestConfig): Promise<operations.PostApiReactionsToggleResponse>;
}
