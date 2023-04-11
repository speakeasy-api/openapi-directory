import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuditLogsGetAuditLogsRequest extends SpeakeasyBase {
    /**
     * Namespace to query audit logs for.
     */
    account: string;
    /**
     * action name one of ["repo.tag.push", ...]. Optional parameter to filter specific audit log actions.
     */
    action?: string;
    /**
     * actor name. Optional parameter to filter audit log events to the specific user who triggered the event.
     */
    actor?: string;
    /**
     * Start of the time window you wish to query audit events for.
     */
    from?: Date;
    /**
     * name. Optional parameter to filter audit log events to a specific name. For repository events, this is the name of the repository. For organization events, this is the name of the organization. For team member events, this is the username of the team member.
     */
    name?: string;
    /**
     * page - specify page number. Page number to get.
     */
    page?: number;
    /**
     * page_size - specify page size. Number of events to return per page.
     */
    pageSize?: number;
    /**
     * End of the time window you wish to query audit events for.
     */
    to?: Date;
}
export declare class AuditLogsGetAuditLogsResponse extends SpeakeasyBase {
    auditLogsGetAuditLogs429ApplicationJSONAny?: any;
    auditLogsGetAuditLogs500ApplicationJSONAny?: any;
    contentType: string;
    /**
     * A successful response.
     */
    getAuditLogsResponse?: shared.GetAuditLogsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An unexpected error response.
     */
    rpcStatus?: shared.RpcStatus;
}
