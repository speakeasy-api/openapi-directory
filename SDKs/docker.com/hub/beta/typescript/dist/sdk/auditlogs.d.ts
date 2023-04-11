import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Audit Logs API endpoints allow you to query audit log events across a
 *
 * @remarks
 * namespace.
 *
 * For more information, see [Audit Log](https://docs.docker.com/docker-hub/audit-log/)
 *
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
     * Returns list of audit log actions.
     *
     * @remarks
     * Get audit log actions for a namespace to be used as a filter for querying audit events.
     */
    auditLogsGetAuditActions(req: operations.AuditLogsGetAuditActionsRequest, config?: AxiosRequestConfig): Promise<operations.AuditLogsGetAuditActionsResponse>;
    /**
     * Returns list of audit log  events.
     *
     * @remarks
     * Get audit log events for a given namespace.
     */
    auditLogsGetAuditLogs(req: operations.AuditLogsGetAuditLogsRequest, config?: AxiosRequestConfig): Promise<operations.AuditLogsGetAuditLogsResponse>;
}
