import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AuditLog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * auditLogGetAuditLog - Get the audit log for an enterprise
     *
     * **Note:** The audit log REST API is currently in beta and is subject to change.
     *
     * Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise - API method documentation
    **/
    auditLogGetAuditLog(req: operations.AuditLogGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.AuditLogGetAuditLogResponse>;
}
