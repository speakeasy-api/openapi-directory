import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about bundle_recipients
 */
export declare class BundleRecipients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Bundle Recipients
     *
     * @remarks
     * List Bundle Recipients
     */
    getBundleRecipients(req: operations.GetBundleRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.GetBundleRecipientsResponse>;
    /**
     * Create Bundle Recipient
     *
     * @remarks
     * Create Bundle Recipient
     */
    postBundleRecipients(req: operations.PostBundleRecipientsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostBundleRecipientsResponse>;
}
