import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Notifications are templated email messages which can be sent to contributors. A notification might be used to request further information from a contributor or inform them when their contribution has been published.
 */
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getNotificationsContributionsIdPreview(req: operations.GetNotificationsContributionsIdPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsContributionsIdPreviewResponse>;
}
