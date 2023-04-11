import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about inbox_uploads
 */
export declare class InboxUploads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Inbox Uploads
     *
     * @remarks
     * List Inbox Uploads
     */
    getInboxUploads(req: operations.GetInboxUploadsRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxUploadsResponse>;
}
