import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access audit log entries.
 */
export declare class AuditLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Audit log items for Product
     *
     * @remarks
     * This endpoint returns the list of Audit log items for a given Product
     * and the result can be optionally filtered by Config and/or Environment.
     */
    getAuditlogs(req: operations.GetAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditlogsResponse>;
    /**
     * List Deleted Settings
     *
     * @remarks
     * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
     */
    getDeletedSettings(req: operations.GetDeletedSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletedSettingsResponse>;
    /**
     * List Audit log items for Organization
     *
     * @remarks
     * This endpoint returns the list of Audit log items for a given Organization
     * and the result can be optionally filtered by Product and/or Config and/or Environment.
     */
    getOrganizationAuditlogs(req: operations.GetOrganizationAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAuditlogsResponse>;
}
