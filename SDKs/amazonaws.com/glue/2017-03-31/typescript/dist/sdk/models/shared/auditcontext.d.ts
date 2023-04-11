import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure containing information for audit.
 */
export declare class AuditContext extends SpeakeasyBase {
    additionalAuditContext?: string;
    allColumnsRequested?: boolean;
    requestedColumns?: string[];
}
