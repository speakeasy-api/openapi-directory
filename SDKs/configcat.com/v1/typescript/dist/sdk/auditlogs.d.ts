import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AuditLogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAuditlogs - List Audit log items for Product
     *
     * This endpoint returns the list of Audit log items for a given Product
     * and the result can be optionally filtered by Config and/or Environment.
    **/
    getAuditlogs(req: operations.GetAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetAuditlogsResponse>;
    /**
     * getDeletedSettings - List Deleted Settings
     *
     * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
    **/
    getDeletedSettings(req: operations.GetDeletedSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletedSettingsResponse>;
    /**
     * getOrganizationAuditlogs - List Audit log items for Organization
     *
     * This endpoint returns the list of Audit log items for a given Organization
     * and the result can be optionally filtered by Product and/or Config and/or Environment.
    **/
    getOrganizationAuditlogs(req: operations.GetOrganizationAuditlogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAuditlogsResponse>;
}
