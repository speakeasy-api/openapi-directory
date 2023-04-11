import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLog } from "./auditlog";
/**
 * GetAuditLogs response.
 */
export declare class GetAuditLogsResponse extends SpeakeasyBase {
    /**
     * List of audit log events.
     */
    logs?: AuditLog[];
}
