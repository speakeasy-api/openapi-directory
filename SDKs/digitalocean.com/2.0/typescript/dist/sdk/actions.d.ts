import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAction - Retrieve an Existing Action
     *
     * To retrieve a specific action object, send a GET request to `/v2/actions/$ACTION_ID`.
    **/
    getAction(req: operations.GetActionRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResponse>;
    /**
     * listAllActions - List All Actions
     *
     * This will be the entire list of actions taken on your account, so it will be quite large. As with any large collection returned by the API, the results will be paginated with only 20 on each page by default.
    **/
    listAllActions(req: operations.ListAllActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllActionsResponse>;
}
