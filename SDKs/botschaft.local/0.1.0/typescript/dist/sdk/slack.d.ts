import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Slack {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * slackGetSlackGet - Slack Get
    **/
    slackGetSlackGet(req: operations.SlackGetSlackGetRequest, config?: AxiosRequestConfig): Promise<operations.SlackGetSlackGetResponse>;
    /**
     * slackPostSlackPost - Slack Post
    **/
    slackPostSlackPost(req: operations.SlackPostSlackPostRequest, config?: AxiosRequestConfig): Promise<operations.SlackPostSlackPostResponse>;
}
