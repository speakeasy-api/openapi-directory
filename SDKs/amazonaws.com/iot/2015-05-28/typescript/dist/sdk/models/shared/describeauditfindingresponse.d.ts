import { SpeakeasyBase } from "../../../internal/utils";
import { AuditFinding } from "./auditfinding";
/**
 * Success
 */
export declare class DescribeAuditFindingResponse extends SpeakeasyBase {
    /**
     * The findings (results) of the audit.
     */
    finding?: AuditFinding;
}
