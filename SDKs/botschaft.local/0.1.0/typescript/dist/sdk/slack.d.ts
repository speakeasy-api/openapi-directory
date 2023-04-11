import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Slack {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Slack Get
     */
    slackGetSlackGet(req: operations.SlackGetSlackGetRequest, config?: AxiosRequestConfig): Promise<operations.SlackGetSlackGetResponse>;
    /**
     * Slack Post
     */
    slackPostSlackPost(req: operations.SlackPostSlackPostRequest, config?: AxiosRequestConfig): Promise<operations.SlackPostSlackPostResponse>;
}
