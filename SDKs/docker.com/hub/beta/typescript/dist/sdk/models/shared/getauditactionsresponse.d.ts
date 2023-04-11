import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLogActions } from "./auditlogactions";
/**
 * GetAuditActions response.
 */
export declare class GetAuditActionsResponse extends SpeakeasyBase {
    /**
     * Map of audit log actions.
     */
    actions?: Record<string, AuditLogActions>;
}
