import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Audit log event.
 */
export declare class AuditLog extends SpeakeasyBase {
    account?: string;
    action?: string;
    actionDescription?: string;
    actor?: string;
    data?: Record<string, string>;
    name?: string;
    timestamp?: Date;
}
