import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuditLogsGetAuditActionsRequest extends SpeakeasyBase {
    /**
     * Namespace to query audit log actions for.
     */
    account: string;
}
export declare class AuditLogsGetAuditActionsResponse extends SpeakeasyBase {
    auditLogsGetAuditActions429ApplicationJSONAny?: any;
    auditLogsGetAuditActions500ApplicationJSONAny?: any;
    contentType: string;
    /**
     * A successful response.
     */
    getAuditActionsResponse?: shared.GetAuditActionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An unexpected error response.
     */
    rpcStatus?: shared.RpcStatus;
}
