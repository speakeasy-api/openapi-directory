import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about inbox_recipients
 */
export declare class InboxRecipients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Inbox Recipients
     *
     * @remarks
     * List Inbox Recipients
     */
    getInboxRecipients(req: operations.GetInboxRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxRecipientsResponse>;
    /**
     * Create Inbox Recipient
     *
     * @remarks
     * Create Inbox Recipient
     */
    postInboxRecipients(req: operations.PostInboxRecipientsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostInboxRecipientsResponse>;
}
