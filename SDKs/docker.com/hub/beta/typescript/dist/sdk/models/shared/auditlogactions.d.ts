import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLogAction } from "./auditlogaction";
export declare class AuditLogActions extends SpeakeasyBase {
    /**
     * List of audit log actions.
     */
    actions?: AuditLogAction[];
    /**
     * Grouping label for a particular set of audit log actions.
     */
    label?: string;
}
