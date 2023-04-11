import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about inbox_registrations
 */
export declare class InboxRegistrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Inbox Registrations
     *
     * @remarks
     * List Inbox Registrations
     */
    getInboxRegistrations(req: operations.GetInboxRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxRegistrationsResponse>;
}
